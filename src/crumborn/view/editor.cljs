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
;; []   it seems to be impossible to rely on pre-line word wrapping since you are not able
;;      to place the cursor on the invisible \n char that is not shown when wrapping..
;;      I guess we have to roll back to manually dealing with rows, I guess we are better prepared this time

(defn get-lines
  [buffer]
  (s/split-lines buffer))

(defn approx=
  [a b p]
  (< (Math/abs (- a b)) p))

(defn txt->buffer
  "
  split text on \n and max row width into a 2d array
   [
   [a]
   [this is, a edit, or]
   [with te, xt!]
   [hejsan]
   ]
  "
  {:test (fn []
           (is (= (txt->buffer "a\nThis is a editor\nwith text!\na\n.\n\n\nhejsan\n" 1 7)
                  [["a"]
                   ["This is" " a edit" "or"]
                   ["with te" "xt!"]
                   ["a"]
                   ["."]
                   [""]
                   [""]
                   ["hejsan"]
                   ])))}
  [txt char-width editor-width]
  (let [max-chars (/ editor-width char-width)]
    (->> (s/split-lines txt)
         (reduce (fn [buffer row]
                   (if (empty? row)
                     (conj buffer [""])
                     (conj buffer (->> (partition-all max-chars row)
                                       (mapv (partial s/join "")))))) []))))

(defonce state-atom (r/atom nil))
(def initial-state
  {:buffer      "a\nThis is a editor\nwith text!\na\n.\n\n\nhejsan\n"
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
                 :editor-width  100
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


(defn partition-buffer
  "Partitions a buffer into rows by first splitting at \n and then
  applying max amount of chars in one row and splitting there after.

  PROBLEM y->row
  now when we use a gap buffer, it seems to be difficult to map y to a row,
  we need the row because we need to clamp the cursor to maximum of the row length.
  This layout:
  |123____|
  |11_____|
  |1234567| < overflow no \n
  |89_____|
  would look like this in the gap-buffer
  123\n11\n123456789
  => split nl => [123, 11, 123456789]
  say each char is 1 coordinate px, clicking on [3,2] => 4, i.e index 10, clicking on [1,3] => 0, i.e index 15\n,
  do we have a 2d array if we split it maybe => [123,     11,\n;;     123456789]
  we could of course, count, each newline and each overflow, maybe, if we chunk the gap-buffer up in either
  [\n] or by [max char width] we actually get the rows, so first, split by, then iterate through and split by max-width?
  I guess this is really bad performance wise but...... :)
  "
  {:test (fn []
           (is (= (partition-buffer "123\n11\n123456789" 1 7)
                  ["123" "11" "1234567" "89"]))
           (is (= (partition-buffer "" 1 7) [""]))
           (is (= (partition-buffer "dont" 1 7) ["dont"])))}
  [buffer char-width editor-width]
  (let [max-chars (/ editor-width char-width)]
    (->> (s/split-lines buffer)
         ;(map (fn [r] (str r "\n")))
         (reduce (fn [rows row]
                   (let [width (* char-width (count row))]
                     (if (> width editor-width)
                       (->> (concat rows (->> (split-at max-chars row)
                                              (map (partial s/join ""))
                                              ))
                            (into []))
                       (conj rows row)))) []))))

(defn y->row
  "Maps a y-coordinate to a row.
  if y > buffer length, return last row
  will this bite us around soon?"
  {:test (fn []
           (let [state {:buffer     (txt->buffer "123\n11\n123456789\n44" 1 7)
                        :char-width 1
                        :styles     {:editor-width 7}}]
             (is (= (y->row state 0)) "123")
             (is (= (y->row state 1)) "11")
             (is (= (y->row state 2)) "1234567")
             (is (= (y->row state 3)) "89")
             (is (= (y->row state 4)) "44")
             (is (= (y->row state 5)) "44")))}              ;; out of bounds
  [{:keys [buffer styles]} y]
  (let [yy (int (Math/floor (/ y (:line-height styles))))
        flat-buffer (flatten buffer)]
    (nth flat-buffer (min (- (count flat-buffer) 1) yy))))

(defn y->row-index
  [{:keys [buffer styles]} y]
  (let [yy (int (Math/floor (/ y (:line-height styles))))
        flat-buffer (flatten buffer)]
    (min (dec (count flat-buffer)) yy)))

(defn get-row
  [{:keys [buffer]} row-number]
  (let [rows (flatten buffer)]
    (if (< row-number (count rows))
      (nth rows row-number)
      (last rows))))

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

(defn clamp-to-chars
  {:test (fn []
           (is (= (clamp-to-chars {:char-width 1} "hej" 1.6) 2))
           (is (= (clamp-to-chars {:char-width 1} "hej" 1.5) 1))
           (is (= (clamp-to-chars {:char-width 1} "hej" 1.3) 1))
           (is (= (clamp-to-chars {:char-width 1} "hej" 10) 3))
           (is (= (clamp-to-chars {:char-width 1} "hej" 0.3) 0)))}
  [{:keys [char-width]} row value]
  {:pre  [(interop/not-nan? value)]
   :post [(double? %) (interop/not-nan? %)]}
  (let [mid-range (/ char-width 2)
        value-range (mod value char-width)
        row-length (count row)
        clamped-val (if (<= value-range mid-range)
                      (- value value-range)
                      (+ char-width (- value value-range)))]
    (max 0 (min (* char-width row-length) clamped-val))))

(defn clamp-cursor
  "Clamp x-position of cursor position between chars"
  [state {:keys [x y] :as mouse}]
  (assoc mouse :x (clamp-to-chars state (y->row state y) x)))

(defn get-active-row
  [{:keys [cursor] :as state}]
  (get-row state (y->row-index state (:y cursor))))

(defn inc-cursor-x
  "Increase cursor position x with one char"
  [{:keys [char-width] :as state}]
  (update-in state [:cursor :x] #(min (+ char-width %))))

(defn dec-cursor-x
  "Decrease cursor position x with one char"
  [{:keys [cursor char-width] :as state}]
  (let [row (y->row state (:y cursor))]
    (update-in state [:cursor :x] #(max 0 (->> (- % char-width)
                                               (clamp-to-chars state row))))))

(defn set-cursor-end-of-row
  [state y]
  {:pre [(>= y 0)]}
  (let [row (y->row state y)]
    (clamp-to-chars state row (count row))))

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
  (assoc state :buffer (vec (concat (subvec buffer 0 row-number) [new-row] (subvec buffer row-number)))))

(defn cursor-end-of-row?
  [{:keys [char-width cursor] :as state}]
  (< (- (editor-width state)
        (- (:x cursor) char-width))
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

(defn y->buffer-cord
  {:test (fn []
           "
           How the actual editor looks when split into rows
            a
            This is
            a edit
            or
            with te
            xt
            a
            .


            hejsan"
           (let [buffer [["a"]
                         ["This is" " a edit" "or"]
                         ["with te" "xt!"]
                         ["a"]
                         ["."]
                         [""]
                         [""]
                         ["hejsan"]
                         ]]
             (is (= (y->buffer-cord buffer 0) [0 0]))
             (is (= (y->buffer-cord buffer 1) [1 0]))
             (is (= (y->buffer-cord buffer 2) [1 1]))
             (is (= (y->buffer-cord buffer 3) [1 2]))
             (is (= (y->buffer-cord buffer 4) [2 0]))
             (is (= (y->buffer-cord buffer 5) [2 1]))
             (is (= (y->buffer-cord buffer 6) [3 0]))
             (is (= (y->buffer-cord buffer 7) [4 0]))))}
  [buffer row-num]
  (reduce (fn [[i j] row-group]
            (let [rg-len (count row-group)]
              (if (> (+ i rg-len) row-num)
                (reduced [j (- row-num i)])
                [(+ i rg-len) (inc j)]
                ))) [0 0] buffer))

(defn partition-buffer-row
  [buffer-row max-row-len]
  (->> (mapv (fn [r]
               (->> (partition-all max-row-len r)
                    (mapv (partial s/join "")))
               ) buffer-row)
       flatten
       (into [])))

(defn process-char
  "
  [
   ['a']
   ['This is' ' a edit' 'or']
   ['with te' 'xt!']
   ['a']
   ['.']
   ['']
   ['']
   ['hejsan']
   ]

   ['a', 'this is', ' a edit' 'or' 'wih te' 'xy!']

   x = i % width
   y = i / width

  click ['or'] => 3,
  rows before 1, i should be 5

  click ['xt!'] => 5
  rows before 2, r0 pad 2, r1 pad 0, should be 7

  click ['.'] => 7
  rows before 4, r0 pad2, r1 pad0, r2 pad2, r3 pad2, should be 13

   does not work since the rows are not padded correct
   what if we add the paddings to the index
   so clicking on row 3, is actually index 5, since row0 is 2 padded

   gash this sucks

   lets say we have it like this,
   the rendering handles all row width and \n and we only deal with one long string
   so

   the string would look like:
   'a\nthis is editor with text!\na\n.\n\nhejsan\n'

   where txt->buffer deals with rendering into rows and such
   we then get a mouse click; x,y (1 char = 1 px, 1 row = 1 px)

   (3,1) is the 's' on the second row.

   how would we map this to our buffer?
   line-height * 1 + 3 = 4, is 1 off because of the newline
   what if we just remove all the \n in our text
   'a\nthis is editor with text!\na\n.\n\nhejsan\n'\n
   =>
   'athis is editor with text!a.hejsan

  line-height * 1 + 3 = 4 => s!
  (1,2) is the r in 'or'

  line-height * 2 + 1 = 3
  noep this wont work..

  if we find the line, that is given by the input, this case 2.
  and we take all the rows before that line and sum the length of them up
  but this approach does not have any concept of rows........

   "
  [{:keys [char-width cursor buffer] :as state} key]
  (let [row-num (y->row-index state (:y cursor))
        [by bx] (y->buffer-cord buffer row-num)
        row (get-in buffer [by bx])
        x-offset (/ (:x cursor) char-width)
        max-chars (/ (editor-width state) char-width)]
    (-> (assoc-in state [:buffer by bx] (str-insert row key x-offset))
        (as-> state
              (assoc-in state [:buffer by] (partition-buffer-row (get-in state [:buffer by]) max-chars)))
        inc-cursor-x)))

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
          (assoc-in [:cursor :x] (set-cursor-end-of-row state (:y cursor))))
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
  [state row row-num x full-width line-height]
  {:width (clamp-to-chars state row (- full-width x))
   :top   (selection-top-dist row-num line-height)
   :left  (clamp-to-chars state row x)})

(defn selection-zero->x
  "position of a row from start of the row to coordinate x"
  [state row row-num x line-height]
  {:width (clamp-to-chars state row x)
   :top   (selection-top-dist row-num line-height)
   :left  0})

(defn selection-zero->end
  "position of a fully selected row"
  [{:keys [char-width] :as state} line-height row-num]
  (let [width (* char-width (count (get-row state row-num)))]
    {:width (if (zero? width) char-width width)             ;; TODO char-width..??
     :top   (selection-top-dist row-num line-height)
     :left  0}))

;; TODO this is a mess now, must refactor
(defn select-rows-between
  [{:keys [char-width] :as state} a b line-height]
  (let [fixed-row-index (y->row-index state (:y a))
        moving-row-index (y->row-index state (:y b))
        fixed-row (y->row state (:y a))
        moving-row (y->row state (:y b))
        fixed-row-width (* (count fixed-row) char-width)
        moving-row-width (* (count moving-row) char-width)
        fixed-x (min (:x a) fixed-row-width)
        moving-x (min (:x b) moving-row-width)]
    (if (= fixed-row-index moving-row-index)                ;; same row
      (let [row (y->row state (:y a))]
        [{:width (clamp-to-chars state row (min (Math/abs (- fixed-x moving-x)) fixed-row-width))
          :top   (* fixed-row-index line-height)
          :left  (clamp-to-chars state row (min fixed-x moving-x))}])
      (concat                                               ;; either drag up or down for different rows
        (->>
          (ge-sub fixed-row-index moving-row-index)         ;; n-rows between start and end selection row ;; remove 1 cus of separate handling
          dec
          (max 0)                                           ;; can't be < 0, no selections in this case
          range                                             ;; n-rows to be selected
          (map #(+ % 1 (min fixed-row-index moving-row-index))) ;; apply correct row-numbers for fully selected rows
          (map (fn [row-num] (selection-zero->end state line-height row-num)))) ;; map full selection
        (if (> fixed-row-index moving-row-index)
          [(selection-x->end state moving-row moving-row-index moving-x moving-row-width line-height)
           (selection-zero->x state fixed-row fixed-row-index fixed-x line-height)]
          [(selection-x->end state fixed-row fixed-row-index fixed-x fixed-row-width line-height)
           (selection-zero->x state moving-row moving-row-index moving-x line-height)])))))

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
    :measure-char (swap! state-atom assoc
                         :char-width (:char-width data)
                         :buffer (txt->buffer (:buffer @state-atom)
                                              (:char-width data)
                                              (editor-width @state-atom)))
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
                                                      :-webkit-user-select "none"
                                                      :cursor              "text"
                                                      :z-index             -2
                                                      :top                 (str (* (get-in @state-atom [:styles :line-height]) (y->row-index @state-atom (get-in @state-atom [:cursor :y]))) "px") ;; TODO
                                                      :height              (str (get-in @state-atom [:styles :line-height]) "px")
                                                      :line-height         (str (get-in @state-atom [:styles :line-height]) "px")
                                                      :word-break          "break-all"
                                                      :font-family         "monospace"
                                                      :font-size           (str (get-in @state-atom [:styles :font-size]) "px")}}]
                                  (when char-width
                                    (doall (map-indexed (fn [i row-group] [:div {:key    (str "row-group-" i)
                                                                                 :id     (str "row-group-" i)
                                                                                 :cursor "text"}
                                                                           [:div {:style {:cursor      "text"
                                                                                          :font-family "monospace"
                                                                                          :white-space "nowrap"
                                                                                          :display     "inline-block"
                                                                                          :width       "100%"

                                                                                          }}
                                                                            (doall (map-indexed (fn [j row]
                                                                                                  [:div {:id  (str "row-" j "-" i)
                                                                                                         :key (str "row-" j "-" i)} row]
                                                                                                  ) row-group))
                                                                            ]]) buffer)))
                                  ]
                                 [:div {:id         "selections"
                                        :draggable  false
                                        :tab-index  -1
                                        :userselect "none"
                                        :style      {:position            "absolute"
                                                     :z-index             -2
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
                                                :transform (str "translate(" (get-in @state-atom [:cursor :x]) "px," (* (get-in @state-atom [:styles :line-height]) (y->row-index @state-atom (get-in @state-atom [:cursor :y]))) "px)") ;; TODO
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
