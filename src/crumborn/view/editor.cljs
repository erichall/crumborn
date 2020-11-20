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
;; [X]   handle when rows expands to multiple rows, can no longer use 21px as height... :~>
;; [X]  handle selections for empty rows
;; [X]  remove fetching row width and chars directly from the dom cus it messes up when removing chars..
;;        we should fetch it from the buffer instead and keep a fixed char-width as a style maybe??
;; [X]   Remove active-line and just get-it from cursor y pos?
;; [X]   it seems to be impossible to rely on pre-line word wrapping since you are not able
;;      to place the cursor on the invisible \n char that is not shown when wrapping..
;;      I guess we have to roll back to manually dealing with rows, I guess we are better prepared this time
;; [] fix the toolbar
;; [] fix the gutter with row numbers
;; [] fix copy paste
;; [x] hide the active row if selection is present
;; [x] disable caret flashing while typing?
;; [x] fix when right clicking on selection so it still active
;; [] add all different keys
;; [] refactor select rows


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
                 :y-screen 0
                 :max-x    nil}
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

(defn line-height
  [{:keys [styles]}]
  (:line-height styles))

(defn font-size
  [{:keys [styles]}]
  (:font-size styles))

(defn- listen
  [element type]
  (let [out (async/chan)]
    (interop/setup-listener! element type (fn [evt] (async/put! out evt)))
    out))

(defn split-str
  [s i]
  (->> (split-at i s)
       (mapv (partial s/join ""))))

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
        clamped-val (if (<= value-range mid-range)
                      (- value value-range)
                      (+ char-width (- value value-range)))]
    (max 0 (min (* char-width (count row)) clamped-val))))

;; TODO this is frekking missleadidng fn.... and i guess its wrong??
(defn clamp-cursor
  "Clamp x-position of cursor position between chars"
  [state {:keys [x y] :as mouse}]
  (assoc mouse :x (clamp-to-chars state (y->row state y) x)))

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
  (reduce (fn [[j i] row-group]
            (let [rg-len (if (empty? row-group)
                           1
                           (count row-group))]
              (if (> (+ i rg-len) row-num)
                (reduced [j (- row-num i)])
                [(inc j) (+ i rg-len)]))) [0 0] buffer))

(defn inc-cursor-x
  "Increase cursor position x with one char"
  [{:keys [char-width cursor buffer] :as state}]
  (let [[by bx] (->>
                  (y->row-index state (:y cursor))
                  (y->buffer-cord buffer))
        row (get-in state [:buffer by bx])
        max-width (* (count row) char-width)]
    (update-in state [:cursor :x] (fn [x] (min max-width (+ char-width x))))))

(defn dec-cursor-x
  "Decrease cursor position x with one char"
  [{:keys [cursor char-width] :as state}]
  (let [row (y->row state (:y cursor))]
    (update-in state [:cursor :x] #(max 0 (->> (- % char-width)
                                               (clamp-to-chars state row))))))

(defn set-cursor
  [state x y]
  (update-in state [:cursor] assoc :x x :y y))

(defn set-cursor-start
  [{:keys [cursor] :as state}]
  (set-cursor state 0 (:y cursor)))

(defn x->char-pos
  [{:keys [char-width]} x]
  (/ x char-width))

(defn number-of-lines
  [{:keys [buffer]}]
  (-> (flatten buffer)
      count))

(defn row-above
  "Get the row above, if on first row, return the first row"
  [buffer by bx]
  (if (zero? bx)
    (last (get-in buffer [(max 0 (dec by))]))
    (get-in buffer [by (dec bx)])))

(defn row-below
  "Get the row below, if on last row, return the last row.."
  [buffer by bx]
  (let [row-buffer (get buffer by)
        row-buffer-len (count row-buffer)
        n-buffer-rows (count buffer)]
    (if (= bx (dec row-buffer-len))
      (get-in buffer [(min (dec n-buffer-rows) (inc by)) 0])
      (get-in buffer [by (inc bx)])
      )))

(defn dec-cursor-y
  [{:keys [cursor buffer styles char-width] :as state}]
  (let [[by bx] (->>
                  (y->row-index state (:y cursor))
                  (y->buffer-cord buffer))
        ra (row-above buffer by bx)]
    (->
      (assoc-in state [:cursor :x] (clamp-to-chars state ra (:max-x cursor)))
      (update-in [:cursor :y] (fn [y] (max 0 (- y (:line-height styles))))))))

(defn inc-cursor-y
  [{:keys [buffer cursor styles] :as state}]
  (let [[by bx] (->>
                  (y->row-index state (:y cursor))
                  (y->buffer-cord buffer))
        rb (row-below buffer by bx)]
    (->
      (assoc-in state [:cursor :x] (clamp-to-chars state rb (:max-x cursor)))
      (update-in [:cursor :y] (fn [y] (max (number-of-lines state)
                                           (+ y (:line-height styles))))))))

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

(defn drop-nth
  [v i]
  (vec (concat (subvec v 0 i) (subvec v (inc i)))))

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

(defn cursor-first-of-row?
  [{:keys [cursor]}]
  (zero? (:x cursor)))

(defn rest-of-row
  "Get chars after x, INCLUDING x"
  [state row x]
  (subs row (x->char-pos state x)))

(defn first-of-row
  "Get chars up to x, EXCLUDING x"
  [state row x]
  (subs row 0 (x->char-pos state x)))

(defn partition-buffer-row
  [max-chars buffer-row]
  (->> buffer-row
       (s/join "")
       (partition-all max-chars)
       (mapv (partial s/join ""))))

(defn process-char
  [{:keys [char-width cursor buffer] :as state} key]
  (let [[by bx] (->>
                  (y->row-index state (:y cursor))
                  (y->buffer-cord buffer))
        row (get-in buffer [by bx])
        max-chars (/ (editor-width state) char-width)
        line-group (->> (/ (:x cursor) char-width)
                        (str-insert row key)
                        (assoc (get-in state [:buffer by]) bx)
                        (partition-buffer-row max-chars))]
    (-> (assoc-in state [:buffer by] line-group)
        (#(if (cursor-end-of-row? %)
            (-> (inc-cursor-y %)
                set-cursor-start)
            %))
        inc-cursor-x)))

(defn process-backspace
  "Some cases:
  1) just delete a char anywhere but the firs on a row
  2) delete the first \n i.e merge two lines
  3) delete at index (0,0)
  4) if the row is empty we should delete it.

  for all of these, we need to shift the full buffer row to account for page width
  "
  [{:keys [cursor buffer char-width styles] :as state}]
  (let [row-index (y->row-index state (:y cursor))
        [by bx] (y->buffer-cord buffer row-index)
        row (get-in buffer [by bx])
        max-chars (/ (editor-width state) char-width)
        buffer-row (get-in state [:buffer by])]
    (cond
      ;; we are inside the same row-group
      (and (cursor-first-of-row? state) (> bx 0))
      (let [del-row (-> (get-in state [:buffer by (dec bx)])
                        remove-last-char)
            row-group (->> (str del-row row)
                           (assoc buffer-row (dec bx))
                           (#(drop-nth % bx))
                           (partition-buffer-row max-chars))]
        (-> (assoc-in state [:buffer by] row-group)
            (set-cursor (* char-width (count del-row)) (- (:y cursor) (:line-height styles)))))

      (and (cursor-first-of-row? state) (zero? bx) (> row-index 0))
      (let [row-group-above (get-in state [:buffer (dec by)])
            row-above (last row-group-above)
            new-row-group-above (->>
                                  (concat (into [] (butlast row-group-above))
                                          [(str row-above row)]
                                          (into [] (rest buffer-row)))
                                  (into [])
                                  (partition-buffer-row max-chars))]
        (->
          (assoc-in state [:buffer (dec by)] new-row-group-above)
          (as-> state (assoc-in state [:buffer] (drop-nth (:buffer state) by))) ;; I think these are a bit awkward, changing state at the same time needed stuff from the changed state
          (set-cursor (* char-width (count row-above)) (- (:y cursor) (:line-height styles)))))
      :else
      (let [removed-row (remove-char-at row (/ (- (:x cursor) char-width) char-width))
            row-group (->> (if (empty? removed-row) " " removed-row) ;; " " so row doesn't collapse when deleting the last char
                           (assoc buffer-row bx)
                           (partition-buffer-row max-chars))]
        (-> (assoc-in state [:buffer by] row-group)
            dec-cursor-x)))))

(defn process-enter
  "
  for all of these, we are splitting a row-buffer cus with a \n in the middle of one
  the row is no longer overflowing

  Some cases:
      1) cursor at last index in a row buffer, i.e hello|, | = cursor
      2) cursor is somewhere at a row except last, like above

   Maybe we could treat these two the same,
   we must just take all the things in the row-buffer that is after the cursor
   and put them in a new line, ez,
   remember, the position of enter char must include that char since it visually it looks
   like the cursor is just behind that char
  "
  [{:keys [cursor buffer char-width] :as state}]
  (let [row-index (y->row-index state (:y cursor))
        [by bx] (y->buffer-cord buffer row-index)
        row (get-in state [:buffer by bx])
        buffer-row (get-in state [:buffer by])
        x-offset (/ (:x cursor) char-width)
        [first second] (split-str row x-offset)
        rest-buffer-row (subvec buffer-row (inc bx))]
    (->
      (assoc-in state [:buffer by] (subvec buffer-row 0 (inc bx)))
      (assoc-in [:buffer by bx] first)
      (insert-row-at (inc by) (into [] (cons second rest-buffer-row)))
      inc-cursor-y
      set-cursor-start)))

(defn process-key-down
  [state {:keys [key]}]
  (condp re-matches key
    #"Enter" (-> (update state :keys-down conj (keyword key))
                 process-enter)
    #"Shift" nil
    #"Meta" nil
    #"Alt" nil
    #"Tab" nil                                              ;; TODO
    #"ArrowRight" (-> (update state :keys-down conj (keyword key))
                      inc-cursor-x
                      (update-in [:cursor] (fn [{:keys [x] :as c}] (assoc c :max-x x))))
    #"ArrowLeft" (-> (update state :keys-down conj (keyword key))
                     dec-cursor-x
                     (update-in [:cursor] (fn [{:keys [x] :as c}] (assoc c :max-x x))))
    #"ArrowUp" (-> (update state :keys-down conj (keyword key))
                   dec-cursor-y)
    #"ArrowDown" (-> (update state :keys-down conj (keyword key))
                     inc-cursor-y)
    #"Backspace" (->
                   (update state :keys-down conj (keyword key))
                   process-backspace)
    (-> (update state :keys-down conj (keyword key))
        (process-char key))))

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
  [{:keys [x y]} {:keys [editor-width editor-height]}]
  (and (>= x 0) (<= x editor-width)
       (>= y 0) (<= y editor-height)))

(defn process-mouse-down
  [{:keys [styles] :as state} {:keys [js-evt]}]
  (let [mouse (->> (get-dom-el "editor-area") (get-relative-mouse-cords js-evt))]
    (when (in-editor? mouse styles)
      (-> (assoc-in state [:mouse :start] mouse)
          (assoc-in [:mouse :is-down] true)
          (assoc :cursor (clamp-cursor state mouse))
          (assoc :selections [])
          (update-in [:cursor] (fn [{:keys [x] :as c}] (assoc c :max-x x)))))))

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
    {:width (if (zero? width) char-width width)
     :top   (selection-top-dist row-num line-height)
     :left  0}))

;; TODO this is a mess now, must refactor
(defn select-rows-between
  "Wouldn't it be nice if this just returned two 3d coordinates which means:
  from: [y,x,z] = [buffer-row, buffer-index, offset-inside-row]
  to:   [y,x,z] = [buffer-row, buffer-index, offset-inside-row]
  "
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

(defn dist-to-origin
  [{:keys [x y]}]
  (Math/sqrt (+ (Math/pow x 2) (Math/pow y 2))))

(defn rows-between
  "Returns a list with buffer coordinates for all rows between [a,b] including a and b"
  [{:keys [buffer] :as state} bya bxa byb bxb]
  (if (= bya byb)                                           ;; same row
    [[bya bxa]]
    (let [between (subvec buffer bya (inc byb))
          first (subvec (first between) bxa)
          last (subvec (last between) 0 (inc bxb))
          map-buffer (fn [v row-num] (->> (map-indexed (fn [z _] [row-num z]) v)
                                          (into [])))]
      (loop [row-num bya
             cords []]
        (if (= row-num byb)
          (->> (map-buffer last row-num)
               (concat cords)
               (into []))
          (recur (inc row-num)
                 (concat cords (map-buffer (if (= row-num bya)
                                             first
                                             (get buffer row-num)) row-num))))))))

(defn select-rows-between-v2
  [{:keys [buffer char-width] :as state} a b]
  (let [[bya bxa] (->>
                    (y->row-index state (:y a))
                    (y->buffer-cord buffer))
        [byb bxb] (->>
                    (y->row-index state (:y b))
                    (y->buffer-cord buffer))
        row-a (get-in state [:buffer bya bxa])
        row-b (get-in state [:buffer byb bxb])
        da (dist-to-origin a)
        db (dist-to-origin b)
        a-z-offset (/ (clamp-to-chars state row-a (:x a)) char-width)
        b-z-offset (/ (clamp-to-chars state row-b (:x b)) char-width)]
    (if (< da db)
      (rows-between state bya bxa byb bxb)
      ;{:from [bya bxa a-z-offset]
      ; :to   [byb bxb b-z-offset]}
      (rows-between state byb bxb bya bxa)
      ;{:from [byb bxb b-z-offset]
      ; :to   [bya bxa a-z-offset]}
      )


    state)
  )

(defn process-mouse-move
  [{:keys [styles] :as state} {:keys [js-evt]}]
  (when (get-in state [:mouse :is-down])
    (let [mouse (->> (get-dom-el "editor-area") (get-relative-mouse-cords js-evt))]
      (when (in-editor? mouse styles)
        (-> (assoc-in state [:mouse :end] mouse)
            (assoc :cursor (clamp-cursor state mouse))
            (as-> state (select-rows-between-v2 state (get-in state [:mouse :start]) (get state :cursor)))
            (as-> state (assoc state :selections (select-rows-between
                                                   state
                                                   (get-in state [:mouse :start])
                                                   (get state :cursor)
                                                   (get-in state [:styles :line-height])))))))))

(defn handle-copy
  [state {:keys [js-evt]}]
  state)

(defn handle-paste
  [state {:keys [js-evt]}]
  (js/console.log js-evt)
  (let [clipboard-data (aget js-evt "clipboardData")
        txt (js-invoke clipboard-data "getData" "text")]
    state))

(defn handle-mouse-event
  [state {:keys [mouse-type] :as data}]
  ;(js/console.log (:js-evt data))
  (condp = mouse-type
    :mousemove (process-mouse-move state data)
    :mousedown (process-mouse-down state data)
    :mouse-right-down nil                                   ;; TODO
    :mouseup (process-mouse-up state data)
    (js/console.warn "Unable to process mouse event: " type)))

(defn mutate!
  [state-atom mutate-fn mutate-args]
  (swap! state-atom (fn [state] (if-let [new-state (mutate-fn state mutate-args)]
                                  new-state
                                  state))))

(defn handle-event!
  [name data]
  {:pre [(keyword? name)]}
  (condp = name
    :key-pressed (mutate! state-atom process-key data)
    :mouse-event (mutate! state-atom handle-mouse-event data)

    :copy (handle-copy @state-atom data)
    :paste (mutate! state-atom handle-paste data)

    :measure-char (swap! state-atom assoc
                         :char-width (:char-width data)
                         :buffer (txt->buffer (:buffer @state-atom)
                                              (:char-width data)
                                              (editor-width @state-atom)))
    (js/console.warn "Unable to handle event" name data)))

(defn active-row
  [{:keys [state]}]
  (let [editor-width (editor-width state)
        line-height (line-height state)
        font-size (font-size state)
        row-index (y->row-index state (get-in state [:cursor :y]))]
    (when (empty? (:selections state))
      [:div {:id         "active-row"
             :tab-index  -1
             :draggable  false
             :userselect "none"
             :style      {:position            "absolute"
                          :background          "#ecece7"
                          :width               (str editor-width "px")
                          :outline             "none"
                          :-webkit-user-select "none"
                          :cursor              "text"
                          :z-index             -2
                          :top                 (str (* line-height row-index) "px")
                          :height              (str line-height "px")
                          :line-height         (str line-height "px")
                          :word-break          "break-all"
                          :font-family         "monospace"
                          :font-size           (str font-size "px")}}])))

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
                                             (listen (interop/get-element-by-id "editor-input") "copy")
                                             (listen (interop/get-element-by-id "editor-input") "paste")
                                             (listen interop/document "mousedown")
                                             (listen interop/document "mouseup")
                                             (listen interop/document "mousemove")])]
                                (async/go (loop []
                                            (let [evt (async/<! chans)
                                                  type (keyword (.-type evt))]
                                              (when (contains? #{:mousedown :mouseup :mousemove} type)
                                                (if (= 3 (aget evt "which"))
                                                  (trigger-event :mouse-event {:mouse-type :mouse-right-down :js-evt evt})
                                                  (trigger-event :mouse-event {:mouse-type type :js-evt evt})))

                                              (when (contains? #{:keydown :keyup} type)
                                                (trigger-event :key-pressed {:key-type type
                                                                             :key      (.-key evt)}))

                                              (when (= type :copy)
                                                (trigger-event :copy {:js-evt evt}))

                                              (when (= type :paste)
                                                (trigger-event :paste {:js-evt evt}))

                                              (recur)
                                              )))))
       :reagent-render      (fn []
                              (let [{:keys [buffer selections char-width]} @state-atom]
                                ;(cljs.pprint/pprint @state-atom)
                                ;(println (s/split-lines (:uffer @state-atom)))
                                [:div {:on-click (fn [] (.focus (interop/get-element-by-id "editor-input")))}
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
                                  [active-row {:state @state-atom}]
                                  (when char-width
                                    (doall (map-indexed (fn [i row-group] [:div {:key   (str "row-" i)
                                                                                 :id    (str "row-" i)
                                                                                 :style {:cursor      "text"
                                                                                         :font-family "monospace"
                                                                                         :white-space "pre"
                                                                                         :display     "inline-block"
                                                                                         :width       "100%"}}
                                                                           row-group]) (flatten buffer))))]
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
                                                        ) selections))]
                                 [:div {:id    "caret"
                                        :style {
                                                :transform (str "translate(" (get-in @state-atom [:cursor :x]) "px," (* (get-in @state-atom [:styles :line-height]) (y->row-index @state-atom (get-in @state-atom [:cursor :y]))) "px)") ;; TODO
                                                :animation (when (empty? (get @state-atom :keys-down)) "typing 3.5s steps(40, end), blink-caret .75s step-end infinite")
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
