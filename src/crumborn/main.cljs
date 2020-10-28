(ns crumborn.main
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as reagent]
            [taoensso.timbre :as log]
            [reagent.core :as r]
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
                                   get-page
                                   has-fact?
                                   get-post
                                   space->space
                                   space->dash
                                   change-fact
                                   assocs-in]]
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
(def subscription-channel (async/chan))

(defonce app-state-atom (r/atom nil))
(defonce channel-atom (atom {:channel                  nil
                             :id                       nil
                             :connection-attempts      0
                             :max-reconnection-attemps 10
                             }))

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
   :visitors    nil})

(defonce consumers-atom (atom {}))

(defn publish-message
  [message]
  (async/put! message-channel message))

(defn subscribe
  [{:keys [event-name id callback-fn]}]
  (swap! consumers-atom assoc-in [event-name id] callback-fn)
  (async/go-loop
    []
    (let [{:keys [event-name data]} (async/<! subscription-channel)]
      (doseq [cb (vals (get @consumers-atom event-name))]
        (cb data))
      (recur))))

(def pages
  {:front-page  {:id         :front-page
                 :view       crumborn.view.app/front-page
                 :prepare-fn (fn [& [{:keys [app-state]}]]
                               (when-not (has-fact? app-state [:pages :front-page])
                                 (publish-message {:event-name :front-page-facts})))}
   :resume      {:id         :resume
                 :view       crumborn.view.app/resume
                 :prepare-fn (fn [& [{:keys [app-state]}]]
                               (when-not (has-fact? app-state [:pages :resume])
                                 (publish-message {:event-name :resume-facts})))}
   :posts       {:id         :posts
                 :view       crumborn.view.app/posts
                 :prepare-fn (fn [& [{:keys [app-state]}]]
                               (when-not (has-fact? app-state [:pages :posts :posts])
                                 (publish-message {:event-name :posts-facts})))}
   :post        {:id          :post
                 :view        crumborn.view.app/post
                 :slug-prefix "posts/"
                 :prepare-fn  (fn [& [{:keys [app-state page-data]}]]
                                (let [slug (:slug page-data)
                                      maybe-post (get-post app-state slug)]
                                  (if maybe-post
                                    (swap! app-state-atom assoc-in [:pages :post] {:post  maybe-post
                                                                                   :error nil})
                                    (do
                                      (swap! app-state-atom assoc-in [:pages :post] {:post  nil
                                                                                     :error nil})
                                      (publish-message {:event-name :post-facts
                                                        :data       {:slug (space->dash slug)}})))))}
   :portfolio   {:id         :portfolio
                 :view       crumborn.view.app/portfolio
                 :prepare-fn (fn [& _]
                               (publish-message {:event-name :portfolio-facts}))}
   :login       {:id         :login
                 :view       crumborn.view.app/login
                 :prepare-fn (fn [& _]
                               (publish-message {:event-name :login-facts}))}

   ;; requires auth
   :create-post {:auth-fn    (fn []
                               (publish-message {:event-name :page-selected
                                                 :data       {:page  :create-post
                                                              :token (get-identitiy (deref app-state-atom))}}))
                 :prepare-fn (fn []
                               (publish-message {:event-name :create-post-facts}))
                 :id         :create-post
                 :view       crumborn.view.app/create-post}
   :dashboard   {:auth-fn    (fn []
                               (publish-message {:event-name :page-selected
                                                 :data       {:page  :dashboard
                                                              :token (get-identitiy (deref app-state-atom))}}))
                 :prepare-fn (fn []
                               (publish-message {:event-name :dashboard-facts}))
                 :id         :dashboard
                 :view       crumborn.view.app/dashboard}})

(defn consume-pages!
  "Async rendering of pages"
  [channel]
  (async/go-loop
    []
    (let [{:keys [auth-fn prepare-fn slug slug-prefix id] :as page-data} (async/<! channel)]

      ;; some random page ?!
      (when-not (contains? pages id)
        (r/rswap! app-state-atom (fn [state]
                                   (assoc (assoc state :active-page :front-page) :active-slug nil)))
        (recur))

      ;; if the page has an auth fn, call it and do nothing more
      ;; otherwise, activate the page or slug
      (if auth-fn
        (auth-fn)
        (do
          (r/rswap! app-state-atom (fn [state]
                                     (-> (assoc state :active-page id)
                                         (assoc :active-slug (when slug
                                                               slug)))))
          (interop/set-hash! (if slug
                               (str slug-prefix (space->dash slug))
                               (name id)))))

      ;; Do preparation if the view needs
      (when (and prepare-fn (not auth-fn))
        (prepare-fn {:page-data page-data
                     :app-state @app-state-atom})))
    (recur)))

(defn channel-msg-handler
  [{:keys [event-name data]}]
  (condp = event-name
    :connected (do
                 (r/rswap! app-state-atom merge (assoc (:state data) :loading false))
                 (swap! channel-atom assoc :id (:id data)))

    :authenticate-success (do (r/rswap! app-state-atom (fn [state]
                                                         (-> (assoc state :identity (:token data))
                                                             (assoc :loading false))))
                              (async/put! page-channel (get-page pages :dashboard))
                              (publish-message {:event-name :post-template}))
    :authenticate-fail (r/rswap! app-state-atom (fn [state]
                                                  (-> (assoc state :identity nil)
                                                      (set-loading false))))

    ;; remove the auth fn if we are authenticated
    :is-authenticated (-> (get-page pages (:page data))
                          (dissoc :auth-fn)
                          (as-> page
                                (async/put! page-channel page)))

    :posts (swap! app-state-atom assoc :posts (:posts data))

    :not-authenticated (swap! app-state-atom assoc :identity nil)

    :ping (publish-message {:event-name :pong})

    :page-count (r/rswap! app-state-atom assoc :visitors (:visitors data))

    :post-template (swap! app-state-atom assoc :post-template (:template data))
    :post-created (async/put! subscription-channel {:event-name :post-created
                                                    :data       data})

    :notification (async/put! subscription-channel {:event-name :notification
                                                    :data       data})

    :front-page-facts (r/rswap! app-state-atom change-fact data)
    :resume-page-facts (r/rswap! app-state-atom change-fact data)
    :posts-page-facts (r/rswap! app-state-atom change-fact data)
    :post-page-facts (r/rswap! app-state-atom change-fact data)
    :portfolio-page-facts (r/rswap! app-state-atom change-fact data)
    :login-page-facts (r/rswap! app-state-atom change-fact data)
    :create-post-facts (r/rswap! app-state-atom change-fact data)
    :dashboard-page-facts (r/rswap! app-state-atom change-fact data)

    :fact-change (r/rswap! app-state-atom change-fact data)

    (log/debug "no matching clause for " event-name)))


(defn handle-event!
  [{:keys [name data]}]
  (condp = name
    :post-selected (let [state (deref app-state-atom)
                         acsd (when (some? (:active-slug state))
                                (space->dash (str (:active-slug state))))]
                     (when (new-slug? (assoc state :active-slug acsd) (:slug data))
                       (async/put! page-channel (-> (get pages (:page-id data))
                                                    (assoc :slug (:slug data))))))
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
    :vote-up (publish-message {:event-name :vote-up
                               :data       {:id (:id data)}})
    :vote-down (publish-message {:event-name :vote-down
                                 :data       {:id (:id data)}})
    :page-count-requested (publish-message data)
    :create-post (publish-message {:event-name :create-post
                                   :data       data})

    :reconnect (do
                 (swap! channel-atom merge {:channel nil
                                            :id      nil})
                 (ws/make-websocket! (str (get-ws-url) "/api/ws/") handle-event!))

    :subscribe (subscribe data)

    :ws-closed (log/debug (:message data))

    ;; else
    (log/debug "Handle event has no clause for " name)))

(defn wait
  [ms fn]
  (js/setTimeout fn ms))

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
                       (js/setTimeout (fn []
                                        (publish-message data)
                                        (when-not (ws/socket-is-open? (:channel (deref channel-atom)))
                                          (swap! channel-atom update :connection-attempts inc))) 150)

                       (let [{:keys [connection-attempts max-reconnection-attemps]} (deref channel-atom)]
                         (if (= connection-attempts max-reconnection-attemps)
                           (handle-event! {:name :ws-closed :data {:message "Max connection attempts reached.."}})
                           (recur))))

                     (nil? socket)
                     (do
                       (js/setTimeout (fn []
                                        (publish-message data)
                                        (when-not (ws/socket-is-open? (:channel (deref channel-atom)))
                                          (swap! channel-atom update :connection-attempts inc))) 150)

                       (let [{:keys [connection-attempts max-reconnection-attemps]} (deref channel-atom)]
                         (if (= connection-attempts max-reconnection-attemps)
                           (handle-event! {:name :ws-closed :data {:message "Max connection attempts reached.."}})
                           (recur))))

                     (ws/socket-is-connecting? socket)
                     (do
                       ;; wait for 150ms and hope we have a connection,
                       ;; otherwise we need to think of something clever
                       (js/setTimeout (fn [] (publish-message data)) 150)
                       (recur))

                     :else
                     (do
                       (ws/send-msg! (deref channel-atom) data)
                       (recur))))))

(defn app
  [app-state]
  [app-component {:pages          pages
                  :app-state      app-state
                  :app-state-atom app-state-atom
                  :trigger-event  handle-event!
                  :subscribe      subscribe}])

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

  ;; initialize correct page...
  (let [{:keys [page slug]} (get-page-and-slug)]
    (if slug
      (handle-event! {:name :post-selected :data {:page-id :post
                                                  :slug    slug}})
      (handle-event! {:name :page-selected :data {:page-id (if (and (contains? pages page)
                                                                    (not (:auth-fn (get pages page))))
                                                             page
                                                             :front-page)}}))
    (r/rswap! app-state-atom (fn [_] initial-state))
    (render (deref app-state-atom))))

(when (nil? (deref theme-atom))
  (add-watch theme-atom
             :theme-game-loop
             (fn [_ _ _ _]
               (reagent/force-update-all)
               (render (deref app-state-atom))))
  (reset! theme-atom light-theme/theme))

(when (nil? (:channel (deref channel-atom)))
  (ws/make-websocket! (str (get-ws-url) "/api/ws/") handle-event!))


