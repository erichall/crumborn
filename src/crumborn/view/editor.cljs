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
   :selection   []
   :cursor      {:x        0
                 :x-screen 0
                 :y        0
                 :y-screen 0}
   :mouse       {:is-down false
                 :start   {:x 0 :x-screen 0 :y 0 :y-screen 0}
                 :end     {:x 0 :x-screen 0 :y 0 :y-screen 0}}
   :active-line 0
   :editable    true
   :styles      {:line-height   21                          ; https://grtcalculator.com/
                 :font-size     12
                 :editor-width  500
                 :editor-height 900}
   })

(when-not @state-atom
  (reset! state-atom initial-state))

(defn- listen
  [element type]
  (let [out (async/chan)]
    (events/listen element type (fn [evt] (async/put! out evt)))
    out))

(defn get-dom-row-width
  "Get the raw textNode width inside a div"
  [row]
  (if (int? row)
    (let [text-node (-> (interop/get-element-by-id (str "row-" row))
                        interop/first-child)
          range (-> (interop/document)
                    interop/create-range)
          _ (interop/select-node-contents range text-node)]
      (-> (interop/get-client-rects range)
          first
          :width))
    (-> (interop/get-client-rects row)                      ;; Assume row is an dom element, maybe check this :)
        first
        :width)))

(defn count-rows
  [{:keys [buffer]}]
  (count buffer))

(defn row-id
  [row-number]
  (str "row-" row-number))

;; TODO handle edge cases
(defn get-row
  [{:keys [buffer]} row-number]
  (nth buffer row-number))

(defn process-key
  [state {:keys [key]}]
  (condp re-matches key
    #"Enter" (println "we got ener")
    (println "otherwise : " key)))

(defn get-dom-el
  [id]
  (interop/get-element-by-id id))

(defn get-relative-mouse-cords
  [js-evt el]
  (let [{:keys [left top]} (interop/get-bounding-client-rect js-evt el)
        x (interop/mouse-x js-evt)
        y (interop/mouse-y js-evt)]
    {:x        (- x left)
     :y        (- y top)
     :x-screen x
     :y-screen y}))

(defn clamp-to-row
  {:test (fn []
           (is (= (clamp-to-row 19 18) 0))
           (is (= (clamp-to-row 19 0) 0))
           (is (= (clamp-to-row 19 38) 2)))}
  [row-height y]
  (-> (/ y row-height)
      Math/floor
      int))

;; TODO dont deref inside pure fn
(defn y->row
  [y]
  (-> (/ y (get-in @state-atom [:styles :line-height]))
      Math/floor
      (min (dec (count-rows @state-atom)))))

(defn clamp-to-chars
  [state {:keys [row-number value-to-clamp]}]
  (let [row-text (get-row state row-number)
        row-width (get-dom-row-width row-number)
        chars (count row-text)
        char-width (/ row-width chars)]
    (* char-width (min chars (Math/round (/ value-to-clamp char-width))))))

(defn clamp-cursor
  "Clamp x-position of cursor position between chars"
  [state {:keys [x y] :as mouse}]
  (assoc mouse :x (clamp-to-chars state {:row-number     (y->row y)
                                         :value-to-clamp x})))

(defn in-editor?
  [{:keys [x y]}]
  ;; TODO dont deref inside pure fn
  (and (>= x 0) (<= x (get-in @state-atom [:styles :editor-width])) (>= y 0) (<= y (get-in @state-atom [:styles :editor-height]))))

(defn process-mouse-down
  [state {:keys [js-evt]}]
  (let [mouse (->> (get-dom-el "editor-area") (get-relative-mouse-cords js-evt))]
    (when (in-editor? mouse)
      (-> (assoc-in state [:mouse :start] mouse)
          (assoc-in [:mouse :is-down] true)
          (assoc :cursor (clamp-cursor state mouse))
          (assoc :active-line (y->row (:y mouse)))
          (assoc :selections [])))))

(defn process-mouse-up
  [state {:keys [js-evt]}]
  (update-in state [:mouse] assoc
             :end (->> (get-dom-el "editor-area") (get-relative-mouse-cords js-evt))
             :is-down false))

;;
;;   ............|......................
;;
;;
(defn select-rows-by-mouse
  [state]
  (let [fixed-row (y->row (get-in state [:mouse :start :y]))
        moving-row (y->row (get-in state [:cursor :y]))
        fixed-row-width (->> (str "row-" fixed-row) interop/get-element-by-id get-dom-row-width)
        moving-row-width (->> (str "row-" moving-row) interop/get-element-by-id get-dom-row-width)
        fixed-x (Math/min (get-in state [:mouse :start :x]) fixed-row-width)
        moving-x (Math/min (get-in state [:cursor :x]) moving-row-width)
        line-height (get-in state [:styles :line-height])]
    (cond
      (= fixed-row moving-row)                              ;; same row
      [{:width (clamp-to-chars state {:row-number     fixed-row
                                      :value-to-clamp (Math/min (Math/abs (- fixed-x moving-x)) fixed-row-width)})
        :top   (* fixed-row line-height)
        :left  (clamp-to-chars state {:row-number     fixed-row
                                      :value-to-clamp (Math/min fixed-x moving-x)})}]
      (< fixed-row moving-row)                              ;; selecting downwards
      (conj
        (map (fn [i]
               {:width (->> (str "row-" (+ i fixed-row 1)) interop/get-element-by-id get-dom-row-width)
                :top   (* line-height (+ i fixed-row 1))
                :left  0})
             (range (Math/max 0 (- moving-row fixed-row 1))))
        {:width (clamp-to-chars state {:row-number     fixed-row
                                       :value-to-clamp (- fixed-row-width fixed-x)})
         :top   (* fixed-row line-height)
         :left  (clamp-to-chars state {:row-number     fixed-row
                                       :value-to-clamp fixed-x})}
        {:width (clamp-to-chars state {:row-number     moving-row
                                       :value-to-clamp moving-x})
         :top   (* line-height moving-row)
         :left  0}
        )
      (> fixed-row moving-row)
      (conj
        (map (fn [i]
               {:width (->> (str "row-" (+ i moving-row 1)) interop/get-element-by-id get-dom-row-width)
                :top   (* line-height (+ i moving-row 1))
                :left  0})
             (range (Math/max 0 (- fixed-row moving-row 1))))
        {:width (clamp-to-chars state {:row-number     moving-row
                                       :value-to-clamp (- moving-row-width moving-x)})
         :top   (* moving-row line-height)
         :left  (clamp-to-chars state {:row-number     moving-row
                                       :value-to-clamp moving-x})}
        {:width (clamp-to-chars state {:row-number     fixed-row
                                       :value-to-clamp fixed-x})
         :top   (* line-height fixed-row)
         :left  0}
        )
      )))

(defn process-mouse-move
  [state {:keys [js-evt]}]
  (when (get-in state [:mouse :is-down])
    (let [mouse (->> (get-dom-el "editor-area") (get-relative-mouse-cords js-evt))]
      (when (in-editor? mouse)
        (-> (assoc-in state [:mouse :end] mouse)
            (assoc :cursor (clamp-cursor state mouse))
            (as-> state (assoc state :selections (select-rows-by-mouse state)))
            (assoc :active-line (y->row (:y mouse)))
            )))))

(defn handle-mouse-event
  [state {:keys [mouse-type] :as data}]
  (condp = mouse-type
    :mousemove (process-mouse-move state data)
    :mousedown (process-mouse-down state data)
    :mouseup (process-mouse-up state data)
    (js/console.warn "Unable to process mouse event: " type)))

(defn handle-event!
  [name data]
  {:pre [(keyword? name)]}
  (condp = name
    :key-pressed (swap! state-atom (fn [state] (if-let [new-state (process-key state data)]
                                                 new-state
                                                 state)))
    :mouse-event (swap! state-atom (fn [state] (if-let [new-state (handle-mouse-event state data)]
                                                 new-state
                                                 state)))
    :row-mouse-up ""
    :row-mouse-leave ""))

(defn editor
  []
  (let [trigger-event handle-event!]
    (r/create-class
      {:component-did-mount (fn []
                              (let [keypress-chan (listen (interop/get-element-by-id "editor-input") "keydown")
                                    mouse-chans (async/merge
                                                  [(listen (interop/document) "mousedown")
                                                   (listen (interop/document) "mouseup")
                                                   (listen (interop/document) "mousemove")])]
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
                              (let [{:keys [buffer selections]} @state-atom]
                                ;(cljs.pprint/pprint @state-atom)
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
                                                     :width               (str (get-in @state-atom [:styles :editor-width]) "px")
                                                     :height              (str (get-in @state-atom [:styles :editor-height]) "px")
                                                     :outline             "none"
                                                     :white-space         "pre-wrap"
                                                     :-webkit-user-select "none"
                                                     :cursor              "text"
                                                     :line-height         (str (get-in @state-atom [:styles :line-height]) "px")
                                                     :font-size           (str (get-in @state-atom [:styles :font-size]) "px")
                                                     :background-color    "transparent"
                                                     :font                "Monaco"
                                                     :font-family         "monospace"}}
                                  [:div {:id         "active-row"
                                         :tab-index  -1
                                         :draggable  false
                                         :userselect "none"
                                         :style      {:position            "absolute"
                                                      :background          "#ecece7"
                                                      :width               (str (get-in @state-atom [:styles :editor-width]) "px")
                                                      :outline             "none"
                                                      :white-space         "pre-wrap"
                                                      :-webkit-user-select "none"
                                                      :cursor              "text"
                                                      :z-index             -1
                                                      :top                 (str (* (get-in @state-atom [:styles :line-height]) (:active-line @state-atom)) "px")
                                                      :height              (str (get-in @state-atom [:styles :line-height]) "px")
                                                      :line-height         (str (get-in @state-atom [:styles :line-height]) "px")
                                                      :font-size           (str (get-in @state-atom [:styles :font-size]) "px")}}]
                                  (doall (map-indexed (fn [i line] [:div {:key    (str "row-" i)
                                                                          :cursor "text"}
                                                                    [:div {:id    (str "row-" i)
                                                                           :style {:cursor  "text"
                                                                                   :display "inline-block"}} line]]) buffer))]
                                 [:div {:id         "selections"
                                        :draggable  false
                                        :tab-index  -1
                                        :userselect "none"
                                        :style      {:position            "absolute"
                                                     :z-index             -1
                                                     :width               (str (get-in @state-atom [:styles :editor-width]) "px")
                                                     :height              (str (get-in @state-atom [:styles :editor-height]) "px")
                                                     :outline             "none"
                                                     :-webkit-user-select "none"
                                                     :cursor              "text"
                                                     :line-height         (str (get-in @state-atom [:styles :line-height]) "px")
                                                     }}
                                  (doall (map-indexed (fn [i {:keys [width top left]}]
                                                        [:div {:id    (str "selection-" i)
                                                               :key   (str "selection-" i)
                                                               :style {
                                                                       :background "#B5D5FF"
                                                                       :position   "absolute"
                                                                       :height     (str (get-in @state-atom [:styles :line-height]) "px")
                                                                       :width      (str width "px")
                                                                       :top        (str top "px")
                                                                       :left       (str left "px")}}]
                                                        ) selections))

                                  ]
                                 [:div {:id    "caret"

                                        :style {
                                                :transform (str "translate(" (get-in @state-atom [:cursor :x]) "px," (* (get-in @state-atom [:styles :line-height]) (:active-line @state-atom)) "px)") ;; TODO
                                                :animation "typing 3.5s steps(40, end),  blink-caret .75s step-end infinite"
                                                :opacity   "0.3"
                                                :display   "block"
                                                :border    "1px solid black"
                                                :position  "absolute"
                                                :cursor    "text"
                                                :height    (str (get-in @state-atom [:styles :line-height]) "px")
                                                :width     "1px"}}]

                                 ]))})))
