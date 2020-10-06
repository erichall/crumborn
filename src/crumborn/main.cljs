(ns crumborn.main
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as reagent]
            [taoensso.timbre :as log]
            [crumborn.view.app :refer [app-maker]]
            [crumborn.interop :as interop]
            [crumborn.core :refer [debounce
                                   get-page-and-slug
                                   get-identitiy
                                   page-is-create-post?
                                   get-uuid
                                   socket-is-closing?
                                   socket-is-closed?
                                   socket-is-connecting?
                                   get-ready-state
                                   get-ws-url
                                   is-release?
                                   set-loading
                                   new-page?
                                   new-slug?]]
            [crumborn.theme :refer [theme-atom is-dark-theme? get-style]]
            [crumborn.theme.light :as light-theme]
            [crumborn.theme.dark :as dark-theme]
            [crumborn.data-adapter :refer [make-websocket! send-msg!]]
            [cljs-http.client :as http]
            [cljs.core.async :as async]
            ))

(enable-console-print!)

(when (is-release?)
  (log/set-level! :fatal))

(declare subscribe)

(def message-channel (async/chan))
(def page-channel (async/chan))

(defonce channel-atom (atom {:channel nil
                             :id      nil}))
(defonce app-state-atom (atom nil))

(def initial-state
  {:size        (interop/get-window-size)
   :active-page (or (:page (get-page-and-slug)) :front-page)
   :active-slug (:slug (get-page-and-slug))
   :loading     true
   :identity    nil
   :data        nil
   :visitors    nil})

(defn send!
  [channel data]
  (send-msg! (:channel channel) (assoc data :id (:id channel))))

(defn publish-message
  [message]
  (async/go (async/>! message-channel message)))

(def pages
  {
   :front-page  {:prepare-fn (fn [])
                 :id         :front-page
                 :view       crumborn.view.app/front-page}
   :resume      {:prepare-fn (fn [])
                 :id         :resume
                 :view       crumborn.view.app/resume}
   :posts       {:prepare-fn (fn [])
                 :id         :posts
                 :view       crumborn.view.app/posts}
   :post        {:prepare-fn  (fn [])
                 :id          :post
                 :view        crumborn.view.app/post
                 :slug-prefix "posts/"}
   :portfolio   {:prepare-fn (fn [])
                 :id         :portfolio
                 :view       crumborn.view.app/portfolio}
   :login       {:prepare-fn (fn [])
                 :id         :login
                 :view       crumborn.view.app/login}

   ;; requires auth
   :create-post {:prepare-fn    (fn []
                                  (publish-message {:event-name :page-selected
                                                    :data       {:page  :create-post
                                                                 :token (get-identitiy (deref app-state-atom))}}))
                 :require-auth? true
                 :id            :create-post
                 :view          crumborn.view.app/create-post}
   :dashboard   {:prepare-fn    (fn []
                                  (publish-message {:event-name :page-selected
                                                    :data       {:page  :dashboard
                                                                 :token (get-identitiy (deref app-state-atom))}}))
                 :require-auth? true
                 :id            :dashboard
                 :view          crumborn.view.app/dashboard}
   })

(defn consume-page-channel
  []
  (async/go-loop
    []
    (let [{:keys [view require-auth? prepare-fn slug slug-prefix id]} (async/<! page-channel)]

      (when-not (contains? pages id)
        (swap! app-state-atom (fn [state]
                                (-> (assoc state :active-page :front-page)
                                    (assoc :active-slug nil))))
        (recur))

      (when prepare-fn
        (prepare-fn))

      (when-not require-auth?
        (swap! app-state-atom (fn [state]
                                (-> (assoc state :active-page id)
                                    (assoc :active-slug (when slug (if (keyword? slug) slug (keyword slug)))))))

        (interop/set-hash! (if slug (str slug-prefix (name slug)) (name id)))))

    (recur)
    )
  )


(defn page-handler!
  [{:keys [page slug authenticated?]}]
  (let [secure-msg! (fn [secure-page]
                      (publish-message {:event-name :page-selected
                                        :data       {:page  secure-page
                                                     :token (get-identitiy (deref app-state-atom))}}))]

    (when (and (not (some? slug))
               (not= page (:active-page (deref app-state-atom))))
      (interop/set-hash! (name page)))

    (cond
      (some? slug) (swap! app-state-atom (fn [state]
                                           (-> (assoc state :active-page nil)
                                               (assoc :active-slug slug))))

      (= page :dashboard) (if authenticated?
                            (swap! app-state-atom (fn [state]
                                                    (-> (assoc state :active-page :dashboard)
                                                        (assoc :active-slug nil)
                                                        (set-loading false))))
                            (do
                              (swap! app-state-atom assoc :loading true)
                              (secure-msg! :dashboard)))
      (= page :create-post) (if authenticated?
                              (swap! app-state-atom (fn [state]
                                                      (-> (assoc state :active-page :create-post)
                                                          (assoc :active-slug nil)
                                                          (set-loading false))))
                              (do
                                (swap! app-state-atom assoc :loading true)
                                (secure-msg! :create-post)))

      :else
      (swap! app-state-atom (fn [state]
                              (-> (assoc state :active-page page)
                                  (assoc :active-slug (keyword slug))))))))

(defn channel-msg-handler
  [{:keys [event-name data]}]

  (condp = event-name
    :connected (do
                 (swap! app-state-atom (fn [state]
                                         (-> (assoc-in state [:data :state] (:state data))
                                             (assoc :loading false))))

                 (swap! channel-atom assoc :id (:id data))

                 (subscribe message-channel))

    :re-hydrate (swap! app-state-atom assoc-in [:data :state] (:state data))

    :authenticate-success (do (swap! app-state-atom (fn [state]
                                                      (-> (assoc state :identity (:token data))
                                                          (assoc :loading false))))
                              (publish-message {:event-name :page-selected :data {:page  :dashboard
                                                                                  :token (get-identitiy (deref app-state-atom))}}))
    :authenticate-fail (swap! app-state-atom (fn [state]
                                               (-> (assoc state :identity nil)
                                                   (set-loading false))))

    :is-authenticated (println "Is auth")
    :not-authenticated (println "Not auth")

    :ping (publish-message {:event-name :pong})

    :page-count (swap! app-state-atom assoc :visitors (:visitors data))

    (log/debug "no matching clause for " event-name)))


(defn handle-event!
  [{:keys [name data]}]

  (condp = name
    :hash-change nil                                        ; (page-handler! data)
    :post-selected (when (new-slug? @app-state-atom (:slug data))
                     (async/put! page-channel (-> (get pages (:page-id data))
                                                  (assoc :slug (:slug data)))))
    :page-selected (when (new-page? @app-state-atom (:page-id data))
                     (async/put! page-channel (get pages (:page-id data))))
    :toggle-theme (do
                    (reset! theme-atom (if (is-dark-theme?) light-theme/theme dark-theme/theme))
                    (interop/set-body-style! "background-color" (get-style [:background-color])))

    :resize (swap! app-state-atom assoc :size data)

    :publish-message (publish-message data)

    :login (publish-message {:event-name :login
                             :data       data})


    :channel-initialized (swap! channel-atom assoc :channel (:channel data))
    :channel-received-msg (channel-msg-handler data)

    :vote-up (publish-message data)
    :vote-down (publish-message data)

    :page-count-requested (publish-message data)

    :create-post (publish-message {:event-name :create-post
                                   :data       data})

    ;:post-selected (interop/set-hash! (str "posts/" (:slug data)))

    :reconnect (do
                 (reset! channel-atom {:channel nil
                                       :id      nil})
                 (make-websocket! (str (get-ws-url) "/api/ws/") handle-event!))

    ))

(defn subscribe
  [channel]
  (async/go-loop []
                 ;; This blocks until something is put on the channel!!
                 (let [data (async/<! channel)
                       socket (:channel (deref channel-atom))]

                   (cond
                     (or (socket-is-closed? socket) (socket-is-closing? socket))
                     (do
                       (handle-event! {:name :reconnect})   ;; I guess this will be messed up if the server goes down
                       (publish-message data))              ;; put the data back lol?

                     (socket-is-connecting? socket)
                     (publish-message data)                 ;; put the data back lol?

                     :else
                     (do
                       (send-msg! (:channel (deref channel-atom)) (assoc data :id (:id (deref channel-atom))))
                       (recur)
                       ))
                   )))

(def app-component
  (app-maker {:pages pages}))

(defn app
  [app-state]
  [app-component {:app-state     app-state
                  :trigger-event handle-event!}])
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


(consume-page-channel)

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
                                                                    (not (:require-auth? (get pages page))))
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
  (add-watch channel-atom
             :channel-loop
             (fn [_ _ old-value new-value]
               new-value))
  (make-websocket! (str (get-ws-url) "/api/ws/") handle-event!))


