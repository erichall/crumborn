(ns crumborn.main
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as reagent]
            [crumborn.view.app :refer [app-component]]
            [crumborn.interop :as interop]
            [crumborn.core :refer [debounce get-page-and-slug]]
            [crumborn.theme :refer [theme-atom is-dark-theme? get-style]]
            [crumborn.theme.light :as light-theme]
            [crumborn.theme.dark :as dark-theme]
            [crumborn.data-adapter :refer [make-websocket! send-msg!]]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            ))

(enable-console-print!)

(defonce channel-atom (atom {:channel nil
                             :id      (js/btoa (.toString (random-uuid)))}))
(defonce app-state-atom (atom nil))

(def initial-state
  {:size        (interop/get-window-size)
   :active-page (:page (get-page-and-slug))
   :active-slug (:slug (get-page-and-slug))
   :data        nil
   })

(defn channel-msg-handler
  [{:keys [event-name data]}]
  (println "msg received: " event-name " data : " (keys data))

  (condp = event-name
    :connected (swap! app-state-atom assoc-in [:data :state] (:state data))
    :re-hydrate (swap! app-state-atom assoc-in [:data :state] (:state data))

    (println "no matching clause for " name)
    )
  )

(defn send!
  [channel data]
  (send-msg! (:channel channel) (assoc data :id (:id channel))))

(defn handle-event!
  [{:keys [name data]}]

  (println "HANDLE-EVENT" name " DATA - " data)

  (condp = name
    :page-selected (swap! app-state-atom (fn [state]
                                           (-> (assoc state :active-page (:page data))
                                               (assoc :active-slug (:slug data)))))
    :toggle-theme (do
                    (reset! theme-atom (if (is-dark-theme?) light-theme/theme dark-theme/theme))
                    (interop/set-body-style! "background-color" (get-style [:background-color])))

    :resize (swap! app-state-atom assoc :size data)
    :hash-change (swap! app-state-atom
                        (fn [state]
                          (->
                            (assoc state :active-page (:page data))
                            (assoc :active-slug (:slug data)))))


    :channel-initialized (swap! channel-atom assoc :channel (:channel data))
    :channel-received-msg (channel-msg-handler data)

    :send-msg (send! (deref channel-atom) data)
    :vote-up (send! (deref channel-atom) data)
    :vote-down (send! (deref channel-atom) data)

    ))

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

(defn app
  [app-state]
  [app-component {:app-state     app-state
                  :trigger-event handle-event!
                  }])
(defn render
  [app-state]
  (reagent/render-component [#'app app-state] (interop/get-element-by-id "app")))

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
  (make-websocket! "ws://localhost:8885/ws" handle-event! channel-atom))

(defn on-js-reload []
  (render (deref app-state-atom)))
