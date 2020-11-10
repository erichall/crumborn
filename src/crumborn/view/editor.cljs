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

(defn get-lines
  [buffer]
  (s/split-lines buffer))

(defonce state-atom (r/atom nil))
(def initial-state
  {:buffer      (get-lines "a\nThis is a editor\nwith text!\na\n.")
   :cursor      {:x        0
                 :x-screen 0
                 :y        0
                 :y-screen 0}
   :mouse       {:is-down false
                 :start   {:x 0 :x-screen 0 :y 0 :y-screen 0}
                 :end     {:x 0 :x-screen 0 :y 0 :y-screen 0}}
   :active-line 0
   :editable    true})

(when-not @state-atom
  (reset! state-atom initial-state))

(defn- listen
  [element type]
  (let [out (async/chan)]
    (events/listen element type (fn [evt] (async/put! out evt)))
    out))

(defn get-dom-row-width
  "Get the raw textNode width inside a div"
  [row-number]
  (let [text-node (-> (interop/get-element-by-id (str "row-" row-number))
                      interop/first-child)
        range (-> (interop/document)
                  interop/create-range)
        _ (interop/select-node-contents range text-node)]
    (-> (interop/get-client-rects range)
        first
        :width)))

(defn row-id
  [row-number]
  (str "row-" row-number))

;; TODO handle edge cases
(defn get-row
  [row-number]
  (-> (:buffer @state-atom)
      (nth row-number)))

(defn process-key
  [{:keys [state key]}]
  (condp re-matches key
    #"Enter" (println "we got ener")
    (println "otherwise : " key)))

(defn get-relative-mouse-cords
  [js-evt]
  (let [{:keys [left top]} (interop/get-bounding-client-rect js-evt)
        x (interop/mouse-x js-evt)
        y (interop/mouse-y js-evt)]
    {:x        (- x left)
     :y        (- y top)
     :x-screen x
     :y-screen y}))

(defn clamp-to-row
  "TODO handle max lines also"
  {:test (fn []
           (is (= (clamp-to-row 19 18) 0))
           (is (= (clamp-to-row 19 0) 0))
           (is (= (clamp-to-row 19 38) 2)))}
  [row-height y]
  (-> (/ y row-height)
      Math/floor
      int))

(defn process-mouse-down
  [{:keys [js-evt]}]
  (let [mouse (get-relative-mouse-cords js-evt)]
    (swap! state-atom (fn [state]
                        (-> (assoc-in state [:mouse :start] mouse)
                            (assoc-in [:mouse :is-down] true)
                            (assoc :cursor mouse))))))
(defn process-mouse-up
  [{:keys [state js-evt]}]
  (swap! state-atom update-in [:mouse] assoc
         :end (get-relative-mouse-cords js-evt)
         :is-down false))

(defn process-mouse-move
  [{:keys [state js-evt]}]
  (when (get-in @state-atom [:cursor :is-down])
    (let [mouse (get-relative-mouse-cords js-evt)]
      (swap! state-atom (fn [state]
                          (-> (assoc-in state [:mouse :start] mouse)
                              (assoc :cursor mouse)))))))

(defn handle-mouse-event
  [{:keys [mouse-type] :as data}]
  (condp = mouse-type
    :mousemove (process-mouse-move data)
    :mousedown (process-mouse-down data)
    :mouseup (process-mouse-up data)
    (js/console.warn "Unable to process mouse event: " type)))

;; we need to clamp the caret now..
;; |...|...|...|...|...|...
;; ^   ^   ^   ^   ^   ^
;; 0  7.2
(defn handle-row-clicked
  [{:keys [row-number]}]
  (let [row-text (get-row row-number)
        row-width (get-dom-row-width row-number)]
    (println (/ row-width (count row-text)) row-width (count row-text))
    (when-not (= row-number (:active-line @state-atom))
      (swap! state-atom assoc :active-line row-number))))

(defn handle-event
  [name data]
  {:pre [(keyword? name)]}
  (condp = name
    :key-pressed (process-key data)
    :mouse-event (handle-mouse-event data)
    :row-clicked (handle-row-clicked data)
    :row-change ""
    :row-mouse-up ""
    :row-mouse-leave ""))

(defn editor
  []
  (let [trigger-event handle-event]
    (r/create-class
      {:component-did-mount (fn []
                              (let [keypress-chan (listen (interop/get-element-by-id "editor-input") "keydown")
                                    mouse-chans (async/merge
                                                  [(listen (interop/get-element-by-id "editor-area") "mousedown")
                                                   (listen (interop/get-element-by-id "editor-area") "mouseup")
                                                   (listen (interop/get-element-by-id "editor-area") "mousemove")])]
                                (go-loop []
                                         (let [evt (async/<! mouse-chans)]
                                           (trigger-event :mouse-event {:mouse-type (keyword (str (.-type (.-event_ evt))))
                                                                        :js-evt     evt})
                                           (recur)))
                                (go-loop []
                                         (let [key-event (async/<! keypress-chan)]
                                           (trigger-event :key-pressed {:key (.-key (.-event_ key-event))})
                                           (recur)))))
       :reagent-render      (fn []
                              (let [{:keys [buffer active-line rows] :as local-state} @state-atom]
                                (cljs.pprint/pprint @state-atom)
                                ;(println (s/split-lines (:uffer @state-atom)))
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

                                 [:div {:id         "editor-area"
                                        :tab-index  0
                                        :on-click   (fn [] (.focus (interop/get-element-by-id "editor-input"))) ;; TODO
                                        :draggable  false
                                        :userselect "none"
                                        :style      {:position            "absolute"
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
                                                     }}
                                  (doall (map-indexed (fn [i line] [:div {:key           (str "row-" i "-" line)
                                                                          :id            (str "row-" i)
                                                                          :style         {:background (if (= i (get @state-atom :active-line)) "#ecece7" "#fff")}
                                                                          :on-mouse-down (fn [] (trigger-event :row-clicked {:row-number i}))} line]) buffer))]
                                 [:div {:id    "caret"

                                        :style {
                                                :transform (str "translate(" (get-in @state-atom [:cursor :x]) "px," (* 21 (:active-line @state-atom)) "px)") ;; TODO
                                                :animation "typing 3.5s steps(40, end),  blink-caret .75s step-end infinite"
                                                :opacity   "0.3"
                                                :display   "block"
                                                :border    "1px solid black"
                                                :position  "absolute"
                                                :height    "21px"
                                                :width     "1px"}}]

                                 ]))})))
