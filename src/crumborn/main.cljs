(ns crumborn.main
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as reagent]
            [crumborn.view.app :refer [app-component]]
            [crumborn.interop :as interop]
            [crumborn.core :refer [debounce
                                   get-page-and-slug
                                   get-identitiy
                                   page-is-create-post?
                                   get-uuid
                                   socket-is-closing?
                                   socket-is-closed?
                                   socket-is-connecting?
                                   get-ready-state]]
            [crumborn.theme :refer [theme-atom is-dark-theme? get-style]]
            [crumborn.theme.light :as light-theme]
            [crumborn.theme.dark :as dark-theme]
            [crumborn.data-adapter :refer [make-websocket! send-msg!]]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<! >! chan go-loop pub sub put!]]
            ))

(enable-console-print!)

(def message-channel (chan))

(defonce channel-atom (atom {:channel nil
                             :id      (get-uuid)}))
(defonce app-state-atom (atom nil))

(def initial-state
  {:size        (interop/get-window-size)
   :active-page (:page (get-page-and-slug))
   :active-slug (:slug (get-page-and-slug))
   :loading     true
   :identity    nil
   :data        nil
   })

(defn send!
  [channel data]
  (send-msg! (:channel channel) (assoc data :id (:id channel)))
  )

(defn publish-message
  [message]
  (go (>! message-channel message)))

(if (page-is-create-post?)
  (publish-message
    {:event-name :page-selected
     :data       {:page  :create-post
                  :token (get-identitiy (deref app-state-atom))}}))

(defn subscribe
  [channel]
  (go-loop []
           ;; This blocks until something is put on the channel!!
           (let [data (<! channel)
                 socket (:channel (deref channel-atom))]
             (println "READY STATE -- " (get-ready-state socket))
             (println "Sending........" data)

             (cond
               (or (socket-is-closed? socket) (socket-is-closing? socket))
               (do
                 (crumborn.main/handle-event! {:name :reconnect})
                 (publish-message data)                     ;; put the data back lol?
                 )

               (socket-is-connecting? socket)
               (do
                 (println "We are connecting...")
                 (publish-message data)                     ;; put the data back lol?
                 )

               :else
               (do
                 (send-msg! (:channel (deref channel-atom)) (assoc data :id (:id (deref channel-atom))))
                 (recur)
                 )

               )

             )))

(defn channel-msg-handler
  [{:keys [event-name data]}]
  (println "msg received: " event-name " data : " (keys data))

  (condp = event-name
    :connected (do
                 (swap! app-state-atom (fn [state]
                                         (-> (assoc-in state [:data :state] (:state data))
                                             (assoc :loading false))))

                 (subscribe message-channel))

    :re-hydrate (swap! app-state-atom assoc-in [:data :state] (:state data))

    :authenticate-success (swap! app-state-atom (fn [state]
                                                  (-> (assoc state :identity (:token data))
                                                      (assoc :loading false))))
    :authenticate-fail (swap! app-state-atom (fn [state]
                                               (-> (assoc state :identity nil)
                                                   (assoc :loading false))))

    :is-authenticated (swap! app-state-atom (fn [state]
                                              (-> (assoc state :active-page (:page data))
                                                  (assoc :loading false))))

    :not-authenticated (swap! app-state-atom (fn [state]
                                               (-> (assoc state :active-page :unauthorized)
                                                   (assoc state :active-slug nil)
                                                   (assoc state :token nil)
                                                   (assoc state :loading false))))

    (println "no matching clause for " event-name)
    )
  )

(defn page-handler!
  [{:keys [page slug]}]

  (if (some? slug)
    (interop/set-hash! (str "/posts/" (name slug)))
    (interop/set-hash! (name page)))

  (condp = page
    :create-post (do
                   (swap! app-state-atom assoc :loading true)
                   (publish-message {:event-name :page-selected
                                     :data       {:page  :create-post
                                                  :token (get-identitiy (deref app-state-atom))}})
                   )

    ; else
    (swap! app-state-atom (fn [state]
                            (-> (assoc state :active-page page)
                                (assoc :active-slug slug)))))
  )

(defn handle-event!
  [{:keys [name data]}]

  (println "HANDLE-EVENT" name " DATA - " data)

  (condp = name
    :page-selected (page-handler! data)
    :toggle-theme (do
                    (reset! theme-atom (if (is-dark-theme?) light-theme/theme dark-theme/theme))
                    (interop/set-body-style! "background-color" (get-style [:background-color])))

    :resize (swap! app-state-atom assoc :size data)
    :hash-change (do
                   (swap! app-state-atom
                          (fn [state]
                            (->
                              (assoc state :active-page (:page data))
                              (assoc :active-slug (:slug data))))))


    :publish-message (publish-message data)

    :login (publish-message {:event-name :login
                             :data       data})


    :channel-initialized (swap! channel-atom assoc :channel (:channel data))
    :channel-received-msg (channel-msg-handler data)

    :vote-up (publish-message data)
    :vote-down (publish-message data)

    :reconnect (make-websocket! "ws://localhost:8885/ws" handle-event! channel-atom)

    ))

(defn app
  [app-state]
  [app-component {:app-state     app-state
                  :trigger-event handle-event!
                  }])
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
                             (handle-event! {:name :hash-change
                                             :data {:page page
                                                    :slug slug}}))))

(when (nil? (deref app-state-atom))
  (add-watch app-state-atom
             :game-loop
             (fn [_ _ old-value new-value]
               (render new-value)))
  (reset! app-state-atom initial-state))

(when (nil? (deref theme-atom))
  (add-watch theme-atom
             :theme-game-loop
             (fn [_ _ old-value new-value]
               (reagent/force-update-all)
               (render (deref app-state-atom))))
  (reset! theme-atom light-theme/theme))

(when (nil? (:channel (deref channel-atom)))
  (add-watch channel-atom
             :channel-loop
             (fn [_ _ old-value new-value]
               (println "CHANNEL - prev " old-value " new " new-value)
               new-value
               ))
  (make-websocket! "ws://localhost:8885/ws" handle-event! channel-atom)
  )


