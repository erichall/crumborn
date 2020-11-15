(ns crumborn.view.editor
  ;(:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [reagent.core :as r]
    [clojure.string :as s]
    [cljs.core.async :as async]
    [crumborn.interop :as interop]
    [cljs.test :refer [deftest is]]))

(enable-console-print!)
;; TODO
;; []   handle when rows expands to multiple rows, can no longer use 21px as height... :~>
;; [X]  handle selections for empty rows
;; [X]  remove fetching row width and chars directly from the dom cus it messes up when removing chars..
;;        we should fetch it from the buffer instead and keep a fixed char-width as a style maybe??
;; []   Remove active-line and just get-it from cursor y pos?

(defn get-lines
  [buffer]
  (s/split-lines buffer))

(defonce state-atom (r/atom nil))
(def initial-state
  {:buffer      (get-lines "a\nThis is a editor\nwith text!\na\n.\n\n\nhejsan\n")
   :selection   []
   :keys-down   #{}
   :cursor      {:x        0
                 :x-screen 0
                 :y        0
                 :y-screen 0}
   :mouse       {:is-down false
                 :start   {:x 0 :x-screen 0 :y 0 :y-screen 0}
                 :end     {:x 0 :x-screen 0 :y 0 :y-screen 0}}
   :active-line 0
   :editable    true
   :char-width  nil                                         ; must measure this......
   :styles      {:line-height   21                          ; https://grtcalculator.com/
                 :font-size     12
                 :editor-width  500
                 :editor-height 900}
   })

(when-not @state-atom
  (reset! state-atom initial-state))

(defn editor-width
  [{:keys [styles]}]
  (:editor-width styles))

(defn- listen
  [element type]
  (let [out (async/chan)]
    (interop/setup-listener! element type (fn [evt] (async/put! out evt)))
    out))

(defn get-row
  [{:keys [buffer]} row-number]
  (nth buffer row-number))

(defn get-row-length
  [state row-number]
  (count (get-row state row-number)))

(defn get-row-width
  [{:keys [char-width] :as state} row-num]
  {:pre  [(int? row-num)]
   :post [(interop/not-nan? %) (double? %)]}
  (* (get-row-length state row-num) char-width))

(defn count-rows
  [{:keys [buffer]}]
  (count buffer))

(defn row-id
  [row-number]
  (str "row-" row-number))

(defn row-heights
  [{:keys [char-width buffer styles]}]
  (reduce (fn [acc [i row]]
            ;; span is the number of how many rows this row spans, if it's exceeds width it will span another row
            (let [{:keys [line-height editor-width]} styles
                  span (Math/max 1                          ;; 1 for empty rows
                                 (Math/ceil (/
                                              (* char-width (count row))
                                              editor-width  ;; either take this or query it from the dom?
                                              )))]
              (conj acc {:row          i
                         :span         span
                         :inner-lines  (map (fn [r] (* r i line-height)) (range 1 (inc span)))
                         :total-height (* span line-height)
                         :span-start   (* i line-height)
                         :span-end     (+ (* i line-height)
                                          (* span line-height))}
                    ))) [] (map vector (range (count buffer)) buffer)))

;; TODO
(defn y->row
  [{:keys [buffer styles] :as state} y]
  (let [a (->> (row-heights state)
               (some (fn [{:keys [span-start span-end] :as s}]
                       (when (and (>= y span-start) (< y span-end))
                         s)))
               ;(Math/min (dec (count buffer)))
               )
        b (reduce (fn [prev cur]
                    (if (< (Math/abs (- cur y)) (Math/abs (- prev y)))
                      cur
                      prev
                      )) -1 (:inner-lines a))]
    (:row a)
    ))

(defn clamp-to-chars
  [{:keys [char-width] :as state} row-number value]
  {:pre  [(interop/not-nan? value)]
   :post [(double? %) (interop/not-nan? %)]}
  (let [chars (get-row-length state row-number)]
    (* char-width (min chars (Math/round (/ value char-width))))))

(defn clamp-cursor
  "Clamp x-position of cursor position between chars"
  [state {:keys [x y] :as mouse}]
  (assoc mouse :x (clamp-to-chars state (y->row state y) x)))


(defn get-active-row
  [{:keys [cursor] :as state}]
  (get-row state (y->row state (:y cursor))))

(defn inc-cursor-x
  "Increase cursor position x with one char"
  [{:keys [char-width] :as state}]
  (update-in state [:cursor :x] #(min (+ char-width %))))

(defn dec-cursor-x
  "Decrease cursor position x with one char"
  [{:keys [cursor char-width] :as state}]
  (let [active-line (y->row state (:y cursor))]
    (update-in state [:cursor :x] #(max 0 (->> (- % char-width)
                                               (clamp-to-chars state active-line))))))

(defn set-cursor-end-of-row
  [state row-number]
  {:pre [(>= row-number 0)]}
  (->> (get-row-width state row-number)
       (clamp-to-chars state row-number)))

(defn set-cursor
  [state x y]
  (update-in state [:cursor] assoc :x x :y y))

(defn set-cursor-start
  [{:keys [cursor] :as state}]
  (set-cursor state 0 (:y cursor)))

(defn x->char-pos
  [{:keys [char-width]} x]
  (/ x char-width))

;; TODO fix state mod here...
(defn dec-cursor-y
  [y line-height]
  (if (<= y line-height)
    y
    (- y line-height)))

(defn inc-cursor-y
  [{:keys [styles] :as state}]
  (update-in state [:cursor :y] #(+ % (:line-height styles))))

(defn str-insert
  {:test (fn [] (is (= (str-insert "hej" "B" 1) "hBej")))}
  [s c i]
  (str (subs s 0 i) c (subs s i)))

(defn remove-char-at
  {:test (fn [] (is (= (remove-char-at "hej" 0) "ej")))}
  [s i]
  (str (subs s 0 i) (subs s (+ 1 i))))

(defn remove-last-char
  {:test (fn [] (is (= (remove-last-char "hej") "he")))}
  [s]
  (remove-char-at s (dec (count s))))

(defn row-overflow?
  {:test (fn [] (is (= (row-overflow? {:char-width 11 :styles {:editor-width 100}} (s/join (repeat 9 "a")))
                       true)))}
  [{:keys [char-width styles]} row]
  (-> (count row)
      (* char-width)
      (+ char-width)                                        ;; plus the char to be added
      (> (:editor-width styles))))

(defn remove-row
  {:test (fn [] (is (= (remove-row {:buffer ["r1" "r2" "r3"]} 1)
                       {:buffer ["r1" "r3"]})))}
  [{:keys [buffer] :as state} row-number]
  (assoc state :buffer (vec (concat (subvec buffer 0 row-number) (subvec buffer (inc row-number))))))

(defn insert-row-at
  {:test (fn [] (is (= (insert-row-at {:buffer ["r1" "r2"]} 1 "new-row")
                       {:buffer ["r1" "new-row" "r2"]})))}
  [{:keys [buffer] :as state} row-number new-row]
  (println " WHAT ON EARTH " buffer row-number new-row)
  (assoc state :buffer (vec (concat (subvec buffer 0 row-number) [new-row] (subvec buffer row-number)))))

(defn cursor-end-of-row?
  [{:keys [char-width cursor] :as state}]
  (< (- (editor-width state)
        (+ char-width (:x cursor)))
     char-width))

(defn rest-of-row
  "Get chars after x, INCLUDING x"
  [state row x]
  (subs row (x->char-pos state x)))

(defn first-of-row
  "Get chars up to x, EXCLUDING x"
  [state row x]
  (subs row 0 (x->char-pos state x)))

(defn split-row-at
  {:test (fn [] (is (= (split-row-at "hello everybody" 4) ["hell" "o everybody"])))}
  [row i]
  [(subs row 0 i) (subs row i)])

(defn process-char
  [{:keys [char-width buffer cursor] :as state} key]
  (let [row (get-active-row state)
        active-line (y->row state (:y cursor))
        cursor-x (get-in state [:cursor :x])
        pos (x->char-pos state cursor-x)
        new-row (str-insert row key pos)
        overflow? (row-overflow? state row)
        eor? (cursor-end-of-row? state)]
    ;; yeeeeees we cannot just inert a new row, we must check if the next row exsists, if it does, prepend the last char from the
    ;; row above, oherwise insert a new row with the last char from the row above..................
    (cond
      (and overflow? eor?)
      (-> (insert-row-at state (inc active-line) key)
          inc-cursor-y
          set-cursor-start
          inc-cursor-x)

      (and overflow? (not eor?))
      (let [[first rest] (split-row-at row cursor-x)
            _ (println "FIRST: " first "AND REST" rest " POS IS " pos)
            a (->
                (assoc-in state [:buffer active-line] (str first key (remove-last-char rest)))
                (insert-row-at (inc active-line) (last row))
                inc-cursor-x)]
        (cljs.pprint/pprint (:buffer a))
        a
        )

      :else
      (-> (assoc-in state [:buffer active-line] (str-insert row key pos))
          inc-cursor-x)
      )
    ))

(defn empty-row?
  [state row-number]
  (empty? (get-row state row-number)))

;; TODO handle if cursor is first on row and if no more rows above
(defn process-backspace
  [{:keys [cursor buffer styles] :as state}]
  (let [active-line (y->row state (:y cursor))]
    (cond
      (empty-row? state active-line)
      (-> (remove-row state active-line)                    ;; TODO this is broken, cursor jumps to first line
          (update :active-line #(max 0 (dec (:active-line %))))
          (assoc-in [:cursor :y] (dec-cursor-y (:y cursor) (:line-height styles)))
          (assoc-in [:cursor :x] (set-cursor-end-of-row state (:active-line state))))
      ;(= 0 (:x cursor)) ;; TODO handle remove line and put rest of line into the one above
      :else
      (let [pos (x->char-pos state (- (:x cursor) 1))]
        (->>
          (remove-char-at (nth buffer active-line) pos)
          (assoc-in state [:buffer active-line])
          dec-cursor-x)))))

(defn process-key-down
  [state {:keys [key]}]
  (condp re-matches key
    #"Enter" (update state :keys-down conj (keyword key))
    #"Shift" nil
    #"Meta" nil
    #"ArrowRight" nil
    #"ArrowLeft" nil
    #"ArrowUp" nil
    #"ArrowDown" nil
    #"Backspace" (->
                   (update state :keys-down conj (keyword key))
                   process-backspace)
    (-> (update state :keys-down conj (keyword key))
        (process-char key))
    ))

(defn process-key-up
  [state {:keys [key]}]
  (update state :keys-down disj (keyword key)))

(defn process-key
  [state {:keys [key-type] :as data}]
  (condp = key-type
    :keydown (process-key-down state data)
    :keyup (process-key-up state data)
    (js/console.warn "unable to process key event" key-type)))

(defn get-dom-el
  [id]
  (interop/get-element-by-id id))

(defn get-relative-mouse-cords
  [js-evt el]
  (let [{:keys [left top]} (interop/get-bounding-client-rect el)
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

(defn in-editor?
  [{:keys [x y]}]
  ;; TODO dont deref inside pure fn
  (and (>= x 0) (<= x (get-in @state-atom [:styles :editor-width]))
       (>= y 0) (<= y (get-in @state-atom [:styles :editor-height]))))

(defn process-mouse-down
  [state {:keys [js-evt]}]
  (let [mouse (->> (get-dom-el "editor-area") (get-relative-mouse-cords js-evt))]
    (when (in-editor? mouse)
      (-> (assoc-in state [:mouse :start] mouse)
          (assoc-in [:mouse :is-down] true)
          (assoc :cursor (clamp-cursor state mouse))
          (assoc :selections [])))))

(defn process-mouse-up
  [state {:keys [js-evt]}]
  (update-in state [:mouse] assoc
             :end (->> (get-dom-el "editor-area") (get-relative-mouse-cords js-evt))
             :is-down false))

(defn ge-sub
  [a b]
  (if (> a b)
    (- a b)
    (- b a)))

(defn selection-top-dist
  [row-num line-height]
  (* line-height row-num))

(defn selection-x->end
  "position of a row from x to the end of that row"
  [state row-num x full-width line-height]
  {:width (clamp-to-chars state row-num (- full-width x))
   :top   (selection-top-dist row-num line-height)
   :left  (clamp-to-chars state row-num x)})

(defn selection-zero->x
  "position of a row from start of the row to coordinate x"
  [state row-num x line-height]
  {:width (clamp-to-chars state row-num x)
   :top   (selection-top-dist row-num line-height)
   :left  0})

(defn selection-zero->end
  "position of a fully selected row"
  [state line-height row-num]
  (let [width (get-row-width state row-num)]
    {:width (if (zero? width) 7.2 width)                    ;; TODO 7.2...
     :top   (selection-top-dist row-num line-height)
     :left  0}))

(defn select-rows-between
  [state a b line-height]
  (let [fixed-row (y->row state (:y a))
        moving-row (y->row state (:y b))
        fixed-row-width (get-row-width state fixed-row)
        moving-row-width (get-row-width state moving-row)
        fixed-x (min (:x a) fixed-row-width)
        moving-x (min (:x b) moving-row-width)]
    (if (= fixed-row moving-row)                            ;; same row
      [{:width (clamp-to-chars state fixed-row (min (Math/abs (- fixed-x moving-x)) fixed-row-width))
        :top   (* fixed-row line-height)
        :left  (clamp-to-chars state fixed-row (min fixed-x moving-x))}]
      (concat                                               ;; either drag up or down for different rows
        (->>
          (ge-sub fixed-row moving-row)                     ;; n-rows between start and end selection row ;; remove 1 cus of separate handling
          dec
          (max 0)                                           ;; can't be < 0, no selections in this case
          range                                             ;; n-rows to be selected
          (map #(+ % 1 (min fixed-row moving-row)))         ;; apply correct row-numbers for fully selected rows
          (map (fn [row-num] (selection-zero->end state line-height row-num)))) ;; map full selection
        (if (> fixed-row moving-row)
          [(selection-x->end state moving-row moving-x moving-row-width line-height)
           (selection-zero->x state fixed-row fixed-x line-height)]
          [(selection-x->end state fixed-row fixed-x fixed-row-width line-height)
           (selection-zero->x state moving-row moving-x line-height)])))))

(defn process-mouse-move
  [state {:keys [js-evt]}]
  (when (get-in state [:mouse :is-down])
    (let [mouse (->> (get-dom-el "editor-area") (get-relative-mouse-cords js-evt))]
      (when (in-editor? mouse)
        (-> (assoc-in state [:mouse :end] mouse)
            (assoc :cursor (clamp-cursor state mouse))
            (as-> state (assoc state :selections (select-rows-between
                                                   state
                                                   (get-in state [:mouse :start])
                                                   (get state :cursor)
                                                   (get-in state [:styles :line-height])))))))))

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
    :measure-char (swap! state-atom assoc :char-width (:char-width data))
    (js/console.warn "Unable to handle event" name data)))

(defn editor
  []
  (let [trigger-event handle-event!]
    (r/create-class
      {:component-did-mount (fn []
                              (when-not (:char-width @state-atom)
                                (trigger-event :measure-char {:char-width (-> (interop/get-element-by-id "ruler")
                                                                              interop/get-bounding-client-rect
                                                                              :width)}))
                              (let [chans (async/merge
                                            [(listen (interop/get-element-by-id "editor-input") "keydown")
                                             (listen (interop/get-element-by-id "editor-input") "keyup")
                                             (listen interop/document "mousedown")
                                             (listen interop/document "mouseup")
                                             (listen interop/document "mousemove")])]
                                (async/go (loop []
                                            (let [evt (async/<! chans)
                                                  type (keyword (.-type evt))]
                                              (when (contains? #{:mousedown :mouseup :mousemove} type)
                                                (trigger-event :mouse-event {:mouse-type type :js-evt evt}))

                                              (when (contains? #{:keydown :keyup} type)
                                                (trigger-event :key-pressed {:key-type type
                                                                             :key      (.-key evt)}))
                                              (recur)
                                              )))))
       :reagent-render      (fn []
                              (let [{:keys [buffer selections char-width]} @state-atom]
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
                                                     ;:white-space         "pre-wrap"
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
                                                      ;:white-space         "pre-wrap"
                                                      :-webkit-user-select "none"
                                                      :cursor              "text"
                                                      :z-index             -1
                                                      :top                 (str (* (get-in @state-atom [:styles :line-height]) (y->row @state-atom (get-in @state-atom [:cursor :y]))) "px") ;; TODO
                                                      :height              (str (get-in @state-atom [:styles :line-height]) "px")
                                                      :line-height         (str (get-in @state-atom [:styles :line-height]) "px")
                                                      :font-family         "monospace"
                                                      :font-size           (str (get-in @state-atom [:styles :font-size]) "px")}}]
                                  (doall (map-indexed (fn [i line] [:div {:key    (str "row-" i)
                                                                          :id     (str "row-" i)
                                                                          :cursor "text"}
                                                                    [:div {:style {:cursor      "text"
                                                                                   :font-family "monospace"
                                                                                   :white-space "nowrap"
                                                                                   :display     "inline-block"
                                                                                   :width       "100%"
                                                                                   }}
                                                                     line
                                                                     ]]) buffer))]
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
                                                :transform (str "translate(" (get-in @state-atom [:cursor :x]) "px," (* (get-in @state-atom [:styles :line-height]) (y->row @state-atom (get-in @state-atom [:cursor :y]))) "px)") ;; TODO
                                                :animation "typing 3.5s steps(40, end),  blink-caret .75s step-end infinite"
                                                :opacity   "0.3"
                                                :display   "block"
                                                :border    "1px solid black"
                                                :position  "absolute"
                                                :cursor    "text"
                                                :height    (str (get-in @state-atom [:styles :line-height]) "px")
                                                :width     "1px"}}]
                                 (when-not char-width
                                   [:div {:id    "ruler"
                                          :style {:visibility  "hidden"
                                                  :display     "inline-block"
                                                  :white-space "nowrap"
                                                  :font-family "monospace"
                                                  :font-size   (str (get-in @state-atom [:styles :font-size]) "px")
                                                  }
                                          } "!"])

                                 ]))})))
