(ns crumborn.main
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as reagent]
            [taoensso.timbre :as log]
            [crumborn.view.app :refer [app-component]]
            [crumborn.interop :as interop]
            [crumborn.core :refer [debounce
                                   get-page-and-slug
                                   get-identitiy
                                   get-ws-url
                                   is-release?
                                   set-loading
                                   new-page?
                                   new-slug?
                                   get-page]]
            [crumborn.theme :refer [theme-atom is-dark-theme? get-style]]
            [crumborn.theme.light :as light-theme]
            [crumborn.theme.dark :as dark-theme]
            [crumborn.websocket :as ws]
            [cljs.core.async :as async]))

(enable-console-print!)

(when (is-release?)
  (log/set-level! :fatal))

(def message-channel (async/chan))
(def page-channel (async/chan))
(def wait-for-channel (async/chan))

(defonce app-state-atom (atom nil))
(defonce channel-atom (atom {:channel nil
                             :id      nil}))

(defn make-mutation-channel
  [node]
  (let [mutation-channel (async/chan)
        observer (js/MutationObserver.
                   (fn [mutations]
                     (doseq [m mutations]
                       (async/put! mutation-channel m))))]
    (.observe observer
              node
              #js {:characterData true
                   :childList     false
                   :subtree       true})
    mutation-channel))

(def initial-state
  {:size        (interop/get-window-size)
   :active-page (or (:page (get-page-and-slug)) :front-page)
   :active-slug (:slug (get-page-and-slug))
   :loading     true
   :identity    nil
   :data        nil
   :visitors    nil
   :posts       nil
   })

(defonce consumers-atom (atom {}))

(defn publish-message
  [message]
  (async/put! message-channel message))

(defn wait-for
  [evt-name source callback-fn]
  (swap! consumers-atom assoc-in [evt-name source] callback-fn)
  (async/go-loop
    []
    (let [{:keys [event-name data]} (async/<! wait-for-channel)]
      (println @consumers-atom)
      (doseq [cb (vals (get @consumers-atom event-name))]
        (cb data))
      (recur))))

(def pages
  {:front-page  {:id   :front-page
                 :view crumborn.view.app/front-page}
   :resume      {:id   :resume
                 :view crumborn.view.app/resume}
   :posts       {:id         :posts
                 :view       crumborn.view.app/posts
                 :prepare-fn (fn []
                               (publish-message {:event-name :get-posts}))}
   :post        {:id          :post
                 :view        crumborn.view.app/post
                 :slug-prefix "posts/"}
   :portfolio   {:id   :portfolio
                 :view crumborn.view.app/portfolio}
   :login       {:id   :login
                 :view crumborn.view.app/login}

   ;; requires auth
   :create-post {:auth-fn (fn []
                            (publish-message {:event-name :page-selected
                                              :data       {:page  :create-post
                                                           :token (get-identitiy (deref app-state-atom))}}))
                 :id      :create-post
                 :view    crumborn.view.app/create-post}
   :dashboard   {:auth-fn (fn []
                            (publish-message {:event-name :page-selected
                                              :data       {:page  :dashboard
                                                           :token (get-identitiy (deref app-state-atom))}}))
                 :id      :dashboard
                 :view    crumborn.view.app/dashboard}})

(defn consume-pages!
  "Async rendering of pages"
  [channel]
  (async/go-loop
    []
    (let [{:keys [auth-fn prepare-fn slug slug-prefix id]} (async/<! channel)]

      (when-not (contains? pages id)
        (swap! app-state-atom (fn [state]
                                (assoc (assoc state :active-page :front-page) :active-slug nil)))
        (recur))

      ;; Do preparation if the view needs
      (when prepare-fn
        (prepare-fn))

      ;; if the page has an auth fn, call it and do nothing more
      ;; otherwise, activate the page or slug
      (if auth-fn
        (auth-fn)
        (do
          (swap! app-state-atom (fn [state]
                                  (-> (assoc state :active-page id)
                                      (assoc :active-slug (when slug (if (keyword? slug) slug (keyword slug)))))))
          (interop/set-hash! (if slug (str slug-prefix (name slug)) (name id))))))
    (recur)))

(defn channel-msg-handler
  [{:keys [event-name data]}]
  (condp = event-name
    :connected (do
                 (swap! app-state-atom (fn [state]
                                         (-> (assoc-in state [:data :state] (:state data))
                                             (assoc :loading false))))
                 (swap! channel-atom assoc :id (:id data)))

    :re-hydrate (swap! app-state-atom assoc-in [:data :state] (:state data))

    :authenticate-success (do (swap! app-state-atom (fn [state]
                                                      (-> (assoc state :identity (:token data))
                                                          (assoc :loading false))))
                              (async/put! page-channel (get-page pages :dashboard))
                              (publish-message {:event-name :post-template}))
    :authenticate-fail (swap! app-state-atom (fn [state]
                                               (-> (assoc state :identity nil)
                                                   (set-loading false))))

    ;; remove the auth fn if we are authenticated
    :is-authenticated (-> (get-page pages (:page data))
                          (dissoc :auth-fn)
                          (as-> page
                                (async/put! page-channel page)))

    :posts (do
             (println "we get nothing?")
             (swap! app-state-atom assoc :posts (:posts data)))

    :not-authenticated (swap! app-state-atom assoc :identity nil)

    :ping (publish-message {:event-name :pong})

    :page-count (swap! app-state-atom assoc :visitors (:visitors data))

    :post-template (swap! app-state-atom assoc :post-template (:template data))
    :post-created (async/put! wait-for-channel {:wait-for-name :any
                                                :event-name    :post-created
                                                :data          data})

    (log/debug "no matching clause for " event-name)))


(defn handle-event!
  [{:keys [name data]}]
  (condp = name
    :post-selected (when (new-slug? @app-state-atom (:slug data))
                     (async/put! page-channel (-> (get pages (:page-id data))
                                                  (assoc :slug (:slug data)))))
    :page-selected (when (new-page? @app-state-atom (:page-id data))
                     (async/put! page-channel (get pages (:page-id data))))
    :toggle-theme (do
                    (reset! theme-atom (if (is-dark-theme?) light-theme/theme dark-theme/theme))
                    (interop/set-body-style! "background-color" (get-style [:background-color])))

    :resize (swap! app-state-atom assoc :size data)

    :login (publish-message {:event-name :login
                             :data       data})

    :channel-initialized (swap! channel-atom assoc :channel (:channel data))
    :channel-received-msg (channel-msg-handler data)

    :publish-message (publish-message data)
    :vote-up (publish-message data)
    :vote-down (publish-message data)
    :page-count-requested (publish-message data)
    :create-post (publish-message {:event-name :create-post
                                   :data       data})

    :reconnect (do
                 (reset! channel-atom {:channel nil
                                       :id      nil})
                 (ws/make-websocket! (str (get-ws-url) "/api/ws/") handle-event!))
    ;; else
    (log/debug "Handle event has no clause for " name)
    ))

(defn consume-messages!
  [channel]
  (async/go-loop []
                 ;; This blocks until something is put on the channel!!
                 (let [data (async/<! channel)
                       socket (:channel (deref channel-atom))]

                   (cond
                     (or (ws/socket-is-closed? socket) (ws/socket-is-closing? socket))
                     (do
                       (handle-event! {:name :reconnect})   ;; I guess this will be messed up if the server goes down
                       (publish-message data))              ;; put the data back lol?

                     (ws/socket-is-connecting? socket)
                     (do
                       (publish-message data))              ;; put the data back lol?

                     :else
                     (do
                       (ws/send-msg! (deref channel-atom) data)
                       )
                     )
                   ;(recur)
                   )))

(defn app
  [app-state]
  [app-component {:pages         pages
                  :app-state     app-state
                  :trigger-event handle-event!
                  :wait-for      wait-for}])
(defn render
  [app-state]
  (reagent/render-component [#'app app-state] (interop/get-element-by-id "app")))

(defn on-js-reload []
  (render (deref app-state-atom)))

(interop/setup-listener! "resize"
                         (fn []
                           (debounce (handle-event! {:name :resize
                                                     :data (interop/get-window-size)}) 250)))

(interop/setup-listener! "hashchange"
                         (fn [event]
                           (let [{:keys [page slug]} (get-page-and-slug event)]
                             (if slug
                               (handle-event! {:name :post-selected :data {:slug    slug
                                                                           :page-id :post}})
                               (when (contains? pages page)
                                 (handle-event! {:name :page-selected :data {:page-id page}}))))))

;; Listene to app wide content changes in html TODO
;(let [mutation-channel (make-mutation-channel (interop/get-element-by-id "app"))]
;  (async/go-loop
;    []
;    (let [mutation (async/<! mutation-channel)]
;      (js/console.log "Mutation::" mutation)
;      (recur))))

(consume-pages! page-channel)
(consume-messages! message-channel)

(when (nil? (deref app-state-atom))
  (add-watch app-state-atom
             :game-loop
             (fn [_ _ _ new-value]
               (render new-value)))

  ;; initialize correct page...
  (let [{:keys [page slug]} (get-page-and-slug)]
    (if slug
      (handle-event! {:name :post-selected :data {:slug slug}})
      (handle-event! {:name :page-selected :data {:page-id (if (and (contains? pages page)
                                                                    (not (:auth-fn (get pages page))))
                                                             page
                                                             :front-page)}}))

    (reset! app-state-atom initial-state)))

(when (nil? (deref theme-atom))
  (add-watch theme-atom
             :theme-game-loop
             (fn [_ _ _ _]
               (reagent/force-update-all)
               (render (deref app-state-atom))))
  (reset! theme-atom light-theme/theme))

(when (nil? (:channel (deref channel-atom)))
  (ws/make-websocket! (str (get-ws-url) "/api/ws/") handle-event!))


