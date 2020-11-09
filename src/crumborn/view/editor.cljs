(ns crumborn.view.editor
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as r]
            [goog.dom :as dom]
            [clojure.string :as s]
            [goog.events :as events]
            [cljs.core.async :as async]
            [crumborn.interop :as interop]
            [cljs.test :refer [is]]
            ))

(enable-console-print!)

(defonce state-atom (r/atom nil))
(def initial-state
  {:buffer      "Hej!\nThis is a editor\nwith text!"
   :cursor      {:x 0
                 :y 0}
   :mouse       {:is-down false
                 :start   {:x 0 :y 0}
                 :end     {:x 0 :y 0}}
   :active-line 0
   :editable    true})

(when-not @state-atom
  (reset! state-atom initial-state))

(defn- listen
  [element type]
  (let [out (async/chan)]
    (events/listen element type (fn [evt] (async/put! out evt)))
    out))

(defn row-id
  [row-number]
  (str "row-" row-number))

(defn process-key
  [{:keys [state key]}]
  (condp re-matches key
    #"Enter" (println "we got ener")
    (println "otherwise : " key)))

(defn get-relative-mouse-cords
  [js-evt]
  (let [{:keys [left top]} (interop/get-bounding-client-rect js-evt)]
    {:x (- (interop/mouse-x js-evt) left)
     :y (- (interop/mouse-y js-evt) top)}))

(defn process-mouse-down
  [{:keys [state js-evt]}]
  (->> (get-relative-mouse-cords js-evt)
       (swap! state-atom assoc-in [:mouse :start])))

(defn process-mouse-up
  [{:keys [state js-evt]}]
  (->> (get-relative-mouse-cords js-evt)
       (swap! state-atom assoc-in [:mouse :end])))

(defn process-mouse-move
  [{:keys [state js-evt]}]
  ""
  )

(defn handle-event
  {:test (fn []
           (is (= 3 3))
           )}
  [name data]
  {:pre [(keyword? name)]}
  (condp = name
    :key-pressed (process-key data)
    :mouse-down (process-mouse-down data)
    :mouse-up (process-mouse-up data)
    :mouse-move (process-mouse-move data)
    :row-clicked ""
    :row-change ""
    :row-mouse-up ""
    :row-mouse-leave ""
    ))

(defn editor
  []
  (let [trigger-event handle-event]
    (r/create-class
      {:component-did-mount (fn []
                              (let [keypress-chan (listen (interop/get-element-by-id "editor-input") "keydown")
                                    mouse-chans (async/merge
                                                  [(listen (interop/get-element-by-id "editor-area") "mousedown")
                                                   (listen (interop/get-element-by-id "editor-area") "mouseup")
                                                   (listen (interop/get-element-by-id "editor-area") "mousemove")
                                                   ]
                                                  )
                                    ]
                                (go-loop []
                                         (let [evt (async/<! mouse-chans)]
                                           (println (interop/get-type evt))
                                           (recur)
                                           ))
                                (go-loop []
                                         (let [key-event (async/<! keypress-chan)]
                                           (trigger-event :key-pressed {:key (.-key (.-event_ key-event))})
                                           (recur)))))
       :reagent-render      (fn []
                              (let [{:keys [buffer active-line rows] :as local-state} @state-atom]
                                ;(cljs.pprint/pprint @state-atom)
                                [:div
                                 [:div {:style {:margin-bottom "20px"}} "toolbar"]
                                 [:textarea {:id          "editor-input"
                                             :on-blur     (fn [] (.focus (interop/get-element-by-id "editor-input")))
                                             :rows        1
                                             :wrap        "soft"
                                             :spell-check false
                                             :style       {:width    "1px"
                                                           :position "absolute"
                                                           :height   "1px"
                                                           :opacity  0
                                                           :border   "none"
                                                           :resize   "none"
                                                           :outline  "none"
                                                           }}]
                                 [:div {:id    "active-line"
                                        :style {:position         "absolute"
                                                :width            "100%"
                                                :height           "19px"
                                                :background-color "#ecece7"}}]
                                 [:div {:id    "caret"
                                        :style {
                                                :animation "typing 3.5s steps(40, end),  blink-caret .75s step-end infinite"
                                                :opacity   "0.3"
                                                :display   "block"
                                                :border    "1px solid black"
                                                :position  "absolute"
                                                :height    "19px"
                                                :width     "1px"}}]
                                 [:div {:id            "editor-area"
                                        :tab-index     0
                                        :on-click      (fn [] (.focus (interop/get-element-by-id "editor-input")))
                                        ;:on-mouse-down (fn [js-evt]
                                        ;                 (trigger-event :mouse-down {:js-evt js-evt
                                        ;                                             :state  @state-atom}))
                                        :on-mouse-up   (fn [js-evt]
                                                         (trigger-event :mouse-up {:js-evt js-evt
                                                                                   :state  @state-atom}))
                                        :on-mouse-move (fn [js-evt]
                                                         (trigger-event :mouse-move {:js-evt js-evt
                                                                                     :state  @state-atom}))
                                        :draggable     false
                                        :userselect    "none"
                                        :style         {:position            "absolute"
                                                        :width               "500px"
                                                        :height              "900px"
                                                        :outline             "none"
                                                        :white-space         "pre-wrap"
                                                        :-webkit-user-select "none"
                                                        :cursor              "text"
                                                        :line-height         "21px" ; https://grtcalculator.com/
                                                        :font-size           "12px"
                                                        :font                "Monaco"
                                                        :font-family         "monospace"
                                                        ;:background-color    (if is-active "#ecece7" "#fff")
                                                        }
                                        }
                                  buffer
                                  ]

                                 ]))})))
