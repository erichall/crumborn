(ns crumborn.view.editor
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as r]
            [goog.dom :as dom]
            [clojure.string :as s]
            [goog.events :as events]
            [cljs.core.async :as async]
            [crumborn.interop :as interop]
            ))

(defn- listen
  [element type]
  (let [out (async/chan)]
    (events/listen element type (fn [evt] (async/put! out evt)))
    out))

(defn- mutation-listener
  [nodes]
  (let [mutation-channel (async/chan)
        observer (js/MutationObserver.
                   (fn [mutations]
                     (doseq [m mutations]
                       (async/go (async/>! mutation-channel m)))))]
    (doseq [node nodes]
      (.observe observer
                node
                #js {:characterData true                    ;Set to true if mutations to target's data are to be observed.
                     :childList     false                   ;Set to true if additions and removals of the target node's child elements (including text nodes) are to be observed.
                     :subtree       true                    ;Set to true if mutations to not just target, but also target's descendants are to be observed.
                     }))
    mutation-channel))

(defn row-id
  [row-number]
  (str "row-" row-number))

(defn get-keypress [evt] (.-key (.-event_ evt)))

(defn- row
  [{:keys [row-number is-active on-mouse-down on-mouse-up on-mouse-leave on-click row-txt]}]
  [:div {:content-editable                  true
         :suppress-content-editable-warning true
         :on-mouse-down                     on-mouse-down
         :on-mouse-up                       on-mouse-up
         :on-mouse-leave                    on-mouse-leave
         :on-click                          on-click
         :on-drag-start                     (fn [evt] (.preventDefault evt))
         :on-drop                           (fn [evt] (.preventDefault evt))
         :draggable                         false
         :id                                (row-id row-number)
         :auto-focus                        (when is-active)
         :style                             {:outline             "none"
                                             :height              "16px"
                                             :white-space         "pre-wrap"
                                             :-webkit-user-select "all"
                                             :cursor              "text"
                                             :font                "12px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace"
                                             :background-color    (if is-active "#ecece7" "#fff")}}
   row-txt])

(defn count-newlines
  [text]
  (-> (re-seq #"\n" text)
      count))

(defn pad
  [n col val]
  (into [] (take n (concat col (repeat val)))))

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

(defn get-dom-row
  [row-number]
  (.getElementById js/document (str "row-" row-number)))

(defn focus-row
  [row-number]
  (.focus (get-dom-row row-number)))

(defn get-text-on-line
  [text line-number]
  (nth text line-number))

(defn get-dom-rows
  [row-prefix]
  (js/document.querySelectorAll (str "[id*=" row-prefix "]")))

(defn surgically-set-content-editable
  [value]
  (doseq [r (get-dom-rows "row-")]
    (.setAttribute r "contenteditable" (str value))))

(defn get-document-selection
  "Its global......"
  []
  (js-invoke (js-invoke js/document "getSelection") "toString"))

(defn get-row-txt-from-dom
  [row-number]
  (-> (get-dom-row row-number)
      (.-innerHTML)))

(defn get-caret-pos
  [el]
  (let [_range (js-invoke (.getSelection js/document) "getRangeAt" 0)
        range (js-invoke _range "cloneRange")
        _ (js-invoke range "selectNodeContents" el)
        _ (js-invoke range "setEnd" (aget _range "endContainer") (aget _range "endOffset"))
        ]
    (count (js-invoke range "toString"))))

(defn set-caret-pos
  [el pos]
  (let [selection (.getSelection js/document)]
    (js-invoke selection "collapse" el pos)))

(defn get-dom-cursor-position
  [el]
  (let [
        ;range (js/document.createRange)
        ;_ (js-invoke range "selectNodeContents" el)
        ;_ (js-invoke range "collapse" false)
        ;
        ;selection (js/window.getSelection)
        ;_ (js-invoke selection "removeAllRanges")
        ;_ (js-invoke selection "addRange" range)
        _ (js-invoke el "focus")
        ]

    (println (aget el "firstChild") (get-caret-pos el))
    (set-caret-pos (aget el "firstChild") (get-caret-pos el))
    )
  )

;; inspo! https://markdownlivepreview.com/
(def initial-state
  {:rows        20
   :text        (pad 20 (s/split "Hej!\ndetta ee min\ntext!" "\n") "\n")
   :caret-pos   0
   :active-line 0
   :editable    true})

(defn editor
  []
  (let [local-state-atom (r/atom initial-state)
        trigger-event (fn [name data]
                        (let [{:keys [rows active-line text caret-pos]} @local-state-atom]
                          (condp = name
                            :row-clicked ""
                            :key-pressed (condp = (:key data)
                                           "Enter" (println "enter")
                                           "ArrowDown" (do (swap! local-state-atom assoc :active-line (min (- rows 1) (inc active-line)))
                                                           (focus-row (:active-line @local-state-atom))
                                                           (set-caret (:active-line @local-state-atom) (:caret-pos @local-state-atom)))
                                           "ArrowUp" (do (swap! local-state-atom assoc :active-line (max 0 (dec active-line)))
                                                         (focus-row (:active-line @local-state-atom))
                                                         (set-caret (:active-line @local-state-atom) (:caret-pos @local-state-atom)))
                                           "ArrowRight" (swap! local-state-atom assoc :caret-pos (get-caret-pos (get-dom-row active-line)))
                                           "ArrowLeft" (swap! local-state-atom assoc :caret-pos (get-caret-pos (get-dom-row active-line)))
                                           ;(println (:key data)
                                           ""
                                           )
                            :row-change ""
                            :row-mouse-down (do
                                              (println (get-caret-pos (get-dom-row (:row-number data))))
                                              (swap! local-state-atom assoc :active-line (:row-number data)))
                            :row-mouse-up (swap! local-state-atom assoc :caret-pos (get-caret-pos (get-dom-row (:row-number data))))

                            :row-mouse-leave ""
                            (js/console.warn "No clause for event " name)
                            ))
                        )
        ]
    (r/create-class
      {:component-did-mount (fn []
                              (let [keypress-chan (listen (dom/getElement "editor-area") "keydown")
                                    mutation-chan (mutation-listener (get-dom-rows "row-")) ;; TODO doubt we go with this architecture
                                    ]
                                (go-loop []
                                         (let [key-event (async/<! keypress-chan)]
                                           (trigger-event :key-pressed {:key (get-keypress key-event)})
                                           (recur)))
                                (go-loop []
                                         (let [mutation (async/<! mutation-chan)]
                                           (trigger-event :row-change {:row-number (int (last (s/split (aget mutation "target" "parentNode" "id") "-")))
                                                                       :row-txt    (aget mutation "target" "data")
                                                                       })
                                           (recur)))))
       :reagent-render      (fn []
                              (let [{:keys [text active-line rows] :as local-state} @local-state-atom]
                                [:div
                                 [:div {:style {:margin-bottom "20px"}} "toolbar"]
                                 [:div {:id "editor-area"}
                                  (map-indexed (fn [row-number row-txt]
                                                 [row {:key            (row-id row-number)
                                                       :row-number     row-number
                                                       :row-txt        row-txt
                                                       :on-click       (fn [] (trigger-event :row-clicked {:row-number row-number}))
                                                       :on-mouse-down  (fn []
                                                                         (surgically-set-content-editable false)
                                                                         (swap! local-state-atom assoc :editable false)
                                                                         (trigger-event :row-mouse-down {:row-number row-number})
                                                                         )
                                                       :on-mouse-leave (fn []
                                                                         (trigger-event :row-mouse-leave {:row-number row-number}))
                                                       :on-mouse-up    (fn [evt]
                                                                         (surgically-set-content-editable true)
                                                                         (swap! local-state-atom assoc :editable true)
                                                                         (trigger-event :row-mouse-up {:row-number row-number})
                                                                         )
                                                       :is-active      (= row-number active-line)}])
                                               text)
                                  [:button {:on-click (fn []
                                                        (surgically-set-content-editable (:editable @local-state-atom))
                                                        (swap! local-state-atom assoc :editable (not (:editable @local-state-atom)))
                                                        )} "toggle"]
                                  ]
                                 ]))}))
  )
