(ns crumborn.view.editor
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as r]
            [goog.dom :as dom]
            [clojure.string :as s]
            [goog.events :as events]
            [cljs.core.async :as async]
            ))

(defn- listen
  [element type]
  (let [out (async/chan)]
    (events/listen element type (fn [evt] (async/put! out evt)))
    out))

(defn row-id
  [row-number]
  (str "row-" row-number))

(defn get-keypress [evt] (.-key (.-event_ evt)))

(defn- row
  [{:keys [row-number is-active on-mouse-down row-txt]}]
  [:div {:content-editable                  true
         :suppress-content-editable-warning true
         :on-mouse-down                     on-mouse-down
         :id                                (row-id row-number)
         :auto-focus                        (when is-active)
         :style                             {:outline          "none"
                                             :font             "12px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace"
                                             :background-color (if is-active "#ecece7" "#fff")}}
   row-txt])

(defn count-newlines
  [text]
  (-> (re-seq #"\n" text)
      count))

(defn pad
  [n col val]
  (take n (concat col (repeat val))))

(defn set-caret
  [row-number caret-pos]
  (let [row-el (.getElementById js/document (str "row-" row-number))
        text (.-firstChild row-el)
        range (js/document.createRange)
        selection (js/window.getSelection)
        max-length (count (.-innerHTML row-el))]
    (when text
      (js-invoke range "setStart" text (min max-length caret-pos))
      (js-invoke range "setEnd" text (min max-length caret-pos))
      (js-invoke selection "removeAllRanges")
      (js-invoke selection "addRange" range))))

(defn focus-row
  [row-number]
  (let [row-el (.getElementById js/document (str "row-" row-number))]
    (.focus row-el)))

(defn get-text-on-line
  [text line-number]
  (-> (s/split text "\n")
      (nth line-number)))

;; inspo! https://markdownlivepreview.com/
(def initial-state
  {:rows        20
   :text        (pad 20 "Hej!\ndetta ee min\ntext!" "\n")
   :caret-pos   0
   :active-line 0})

(defn editor
  []
  (let [local-state-atom (r/atom initial-state)
        trigger-event (fn [name data]
                        (let [{:keys [rows active-line text caret-pos]} @local-state-atom]
                          (condp = name
                            :row-clicked (swap! local-state-atom assoc :active-line (:row-number data))
                            :key-pressed (condp = (:key data)
                                           "Enter" (println "enter")
                                           "ArrowDown" (do (swap! local-state-atom assoc :active-line (min rows (inc active-line)))
                                                           (focus-row (:active-line @local-state-atom))
                                                           (set-caret (:active-line @local-state-atom) (:caret-pos @local-state-atom)))
                                           "ArrowUp" (do (swap! local-state-atom assoc :active-line (max 0 (dec active-line)))
                                                         (focus-row (:active-line @local-state-atom))
                                                         (set-caret (:active-line @local-state-atom) (:caret-pos @local-state-atom)))
                                           "ArrowRight" (let [txt (get-text-on-line text active-line)]
                                                          (swap! local-state-atom assoc :caret-pos (min (count txt) (inc caret-pos))))
                                           "ArrowLeft" (swap! local-state-atom assoc :caret-pos (max 0 (dec caret-pos)))
                                           (println (:key data))
                                           )
                            (js/console.warn "No clause for event " name)
                            ))
                        )
        ]
    (r/create-class
      {:component-did-mount (fn []
                              (let [keypress-chan (listen (dom/getElement "editor-area") "keydown")]
                                (go-loop []
                                         (let [key-event (async/<! keypress-chan)]
                                           (trigger-event :key-pressed {:key (get-keypress key-event)})
                                           (recur)))))
       :reagent-render      (fn []
                              (let [{:keys [text active-line rows]} @local-state-atom]
                                [:div
                                 [:div {:style {:margin-bottom "20px"}} "toolbar"]
                                 [:div {:id "editor-area"}
                                  (map-indexed (fn [row-number row-txt]
                                                 [row {:key           (row-id row-number)
                                                       :row-number    row-number
                                                       :row-txt       row-txt
                                                       :on-mouse-down (fn [] (trigger-event :row-clicked {:row-number row-number}))
                                                       :is-active     (= row-number active-line)}]
                                                 )
                                               (s/split text "#\n")
                                               )
                                  ]
                                 ]))}))
  )
