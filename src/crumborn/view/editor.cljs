(ns crumborn.view.editor
  ;(:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require
    [reagent.core :as r]
    [clojure.string :as s]
    [cljs.core.async :as async]
    [crumborn.interop :as interop]
    [cljs.test :refer [deftest is]]))

(defn undo-icon
  []
  [:svg {:height "24" :view-box "0 0 24 24" :width "24"}
   [:path {:d "M0 0h24v24H0z", :fill "none"}]
   [:path {:d "M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"}]])

(defn redo-icon
  []
  [:svg {:height "24" :view-box "0 0 24 24" :width "24"}
   [:path {:d "M0 0h24v24H0z", :fill "none"}]
   [:path {:d "M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"}]])

(defn insert-link-icon
  []
  [:svg {:height "24" :view-box "0 0 24 24" :width "24"}
   [:path {:d "M0 0h24v24H0z", :fill "none"}]
   [:path {:d "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}]])

(defn bold-icon
  []
  [:svg {:height "24", :view-box "0 0 24 24", :width "24"}
   [:path {:d "M0 0h24v24H0z" :fill "none"}]
   [:path {:d "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"}]])

(defn italic-icon
  []
  [:svg {:height "24" :view-box "0 0 24 24" :width "24"}
   [:path {:d "M0 0h24v24H0z" :fill "none"}]
   [:path {:d "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"}]])

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
;; [X] fix the gutter with row numbers
;; [X] fix copy
;; [X] fix cut
;; [X] fix paste
;; [X] fix so when you copy you don't type in c or v
;; [X] hide the active row if selection is present
;; [X] disable caret flashing while typing?
;; [X] fix when right clicking on selection so it still active
;; [X] add all different keys
;; [X] refactor select rows
;; [X] fix scrolling when clicking on a row
;; [X] fix relative mouse cords for rows numbers and textarea, its brooooken
;; [X] Think of something better to separate cursor movement from the rest of the jazz, and especially something
;;    that does not involve coordinates and offsetting with a dam gutter......
;; [X] add scrolling when cursor moves
;; [X] fix bug when copy empty rows, the \n seems to no follow
;; [X] fix when cut whole row, the row should not collapse
;; [X] fix undo
;; [X] fix delete selections on backspace
;; [X] fix double click and triple click to select stuff
;; [] fix cursor movement when cut, should end up on last on that row i guess
;; [X] refactor into new cursor handling
;; [X] fix bug when pressing enter
;; [] fix adjust fontsize
;; [] fix e2e tests
;; [] fix row/line indicator for the cursor position
;; [] lose the coupling between editor width and char-width somehow?

(defonce editor-atom (r/atom nil))
(def initial-state
  {:states      [{:buffer      "a\nThis is a editor\nwith text!\na\n.\n\n\nhejsan\n"
                  :should-undo false
                  :should-redo false
                  :editable    true
                  :key-delay   30
                  :selections  []
                  :cursor      {:x        0
                                :y        0
                                :x-screen 0
                                :y-screen 0
                                :max-x    nil}
                  :mouse       {:is-down false
                                :start   {:x 0 :x-screen 0 :y 0 :y-screen 0}
                                :end     {:x 0 :x-screen 0 :y 0 :y-screen 0}}
                  :char-width  nil                          ; must measure this......
                  :styles      {:line-height  21            ; https://grtcalculator.com/
                                :font-size    12
                                :editor-width nil}}]
   :undo-states []
   })

(defn tab->space
  [s]
  (s/replace-all s #"\t" "    "))

(defn count-buffer
  "Count a buffer"
  {:test (fn []
           (is (= (count-buffer [["a"] ["b" "c"] [""]]) 6))
           (is (= (count-buffer [[""]]) 0)))}
  [buffer]
  (->> (flatten buffer)
       (interpose "\n")
       (#(s/join "" %))
       tab->space
       count))

(defn diff-buffer-len
  "Diffs two buffers and return how much the length differs only."
  {:test (fn []
           (is (= (diff-buffer-len [["a"]] [[""]]) 1))
           (is (= (diff-buffer-len [[""]] [[""]]) 0))
           (is (= (diff-buffer-len [["1"]] [["1234" "5"]]) -5)))}
  [b1 b2]
  (- (count-buffer b1) (count-buffer b2)))

(defn atom?
  [maybe-atom]
  (or (instance? cljs.core/Atom maybe-atom)
      (instance? reagent.ratom/RAtom maybe-atom)))

(defn get-state
  [editor-atom-or-state]
  (-> (if (atom? editor-atom-or-state)
        @editor-atom-or-state
        editor-atom-or-state)
      :states
      last))

;; TODO REMOVE??
(declare cursor->index
         set-cursor-at-index
         mutate!)

(when-not @editor-atom
  (reset! editor-atom initial-state))

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

(defn editor-width
  [{:keys [styles]}]
  (:editor-width styles))

(defn line-height
  [{:keys [styles]}]
  (:line-height styles))

(defn font-size
  [{:keys [styles]}]
  (:font-size styles))

(defn line-max-chars
  ([{:keys [char-width] :as state}]
   (/ (editor-width state) char-width))
  ([editor-width char-width]
   (/ editor-width char-width)))

(defn- listen
  ([element type prevent-default?]
   (let [out (async/chan)]
     (interop/setup-listener! element type (fn [evt]
                                             (when prevent-default?
                                               (.preventDefault evt))
                                             (async/put! out evt)))
     out))
  ([element type]
   (listen element type false)))

(defn split-str
  [s i]
  (->> (split-at i s)
       (mapv (partial s/join ""))))

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
  ([{:keys [buffer]} row-number]
   (let [rows (flatten buffer)]
     (if (< row-number (count rows))
       (nth rows row-number)
       (last rows))))
  ([state by bx]
   (get-in state [:buffer by bx])))

(defn chars-in-row->px
  [row char-width]
  (* char-width (count row)))

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
    (max 0 (min (chars-in-row->px row char-width) clamped-val))))

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
  (loop [bf buffer
         by 0
         bx 0]
    (if (empty? bf)
      nil
      (let [rows (first bf)
            row-group-length (count rows)]
        (if (> (+ bx row-group-length) row-num)
          [by (- row-num bx)]
          (recur (rest bf) (inc by) (+ bx row-group-length)))))))

(defn set-last
  [col value]
  (assoc col (dec (count col)) value))

(defn buffer-cord->y
  [buffer by bx]
  (-> (subvec buffer 0 (inc by))
      (set-last (subvec (get buffer by) 0 (inc bx)))
      flatten
      count))

(defn inc-cursor-x
  "Increase cursor position x with one char"
  [{:keys [char-width cursor buffer] :as state}]
  (let [[by bx] (->>
                  (y->row-index state (:y cursor))
                  (y->buffer-cord buffer))
        row (get-in state [:buffer by bx])]
    (update-in state [:cursor :x] (fn [x]
                                    (min (chars-in-row->px row char-width) (+ char-width x))))))

(defn dec-cursor-x
  "Decrease cursor position x with one char"
  [{:keys [cursor char-width] :as state}]
  (let [row (y->row state (:y cursor))]
    (update-in state [:cursor :x] (fn [x]
                                    (max 0 (clamp-to-chars state row (- x char-width)))))))
(defn last-row
  [{:keys [buffer]}]
  (-> (flatten buffer)
      last))

(defn set-cursor
  [state x y]
  (update-in state [:cursor] assoc :x x :y y))

(defn set-cursor-start
  [{:keys [cursor] :as state}]
  (set-cursor state 0 (:y cursor)))

(defn set-cursor-end-of-row
  [{:keys [cursor buffer char-width] :as state}]
  (let [[by bx] (->>
                  (y->row-index state (:y cursor))
                  (y->buffer-cord buffer))
        row (get-in buffer [by bx])]
    (set-cursor state (* char-width (count row)) (:y cursor))))

(defn x-row->px
  [{:keys [char-width]} row]
  (* (count row) char-width))

(defn char-pos->px
  [{:keys [char-width]} pos]
  (* char-width pos))

(defn y-row->px
  [state row-num]
  (* row-num (line-height state)))

(defn number-of-lines
  [{:keys [buffer]}]
  (-> (flatten buffer)
      count))

(defn set-cursor-end-of-buffer
  [{:keys [char-width] :as state}]
  (let [last-row (last-row state)]
    (set-cursor state (x-row->px state last-row) (y-row->px state (number-of-lines state)))))

(defn x->char-pos
  [{:keys [char-width cursor]}]
  (/ (:x cursor) char-width))

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
      (get-in buffer [by (inc bx)]))))

(defn dec-cursor-y
  [{:keys [cursor buffer styles] :as state}]
  (let [[by bx] (->>
                  (y->row-index state (:y cursor))
                  (y->buffer-cord buffer))
        ra (row-above buffer by bx)]
    (-> (assoc-in state [:cursor :x] (clamp-to-chars state ra (:max-x cursor)))
        (update-in [:cursor :y] (fn [y] (max 0 (- y (:line-height styles))))))))

(defn inc-cursor-y
  [{:keys [buffer cursor styles] :as state}]
  (let [[by bx] (->>
                  (y->row-index state (:y cursor))
                  (y->buffer-cord buffer))
        rb (row-below buffer by bx)]
    (-> (assoc-in state [:cursor :x] (clamp-to-chars state rb (:max-x cursor)))
        (update-in [:cursor :y] (fn [y] (max (number-of-lines state)
                                             (+ y (:line-height styles))))))))

(defn str-insert
  {:test (fn [] (is (= (str-insert "hej" "B" 1) "hBej")))}
  [s c i]
  (let [s (if (nil? s) "" s)]
    (str (subs s 0 i) c (subs s i))))

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
  {:test (fn []
           (is (= (insert-row-at {:buffer ["r1" "r2"]} 1 "new-row")
                  {:buffer ["r1" "new-row" "r2"]}))
           (is (= (insert-row-at {:buffer [["r1"] ["r2"]]} 1 ["new-row"])
                  {:buffer [["r1"] ["new-row"] ["r2"]]})))}
  [{:keys [buffer] :as state} row-number new-row]
  (assoc state :buffer (vec (concat (subvec buffer 0 row-number) [new-row] (subvec buffer row-number)))))

(defn insert-rows-at
  "Insert multiple rows in buffer."
  {:test (fn []
           (is (= (insert-rows-at {:buffer [["r1"] ["r2"]]} 1 [["this"]])
                  {:buffer [["r1"] ["this"] ["r2"]]})))}
  [{:keys [buffer] :as state} row-number rows]
  (assoc state :buffer (vec (concat (subvec buffer 0 row-number) rows (subvec buffer row-number)))))

(defn cursor-end-of-row?
  [{:keys [char-width cursor] :as state}]
  (< (- (editor-width state)
        (:x cursor)
        char-width)
     char-width))

(defn cursor-first-of-row?
  [{:keys [cursor]}]
  (= 0 (:x cursor)))

(defn partition-buffer-row
  [max-chars buffer-row]
  (->> buffer-row
       (s/join "")
       (partition-all max-chars)
       (mapv (partial s/join ""))))

(defn remove-range
  "Remove range from a string"
  [s start end]
  (str (subs s 0 start) (subs s end (count s))))

(defn find-selection
  [selections i j]
  (-> (filter (fn [{:keys [buffer-cord]}]
                (and (= (first buffer-cord) i)
                     (= (second buffer-cord) j))) selections)
      first
      :buffer-cord))

(defn is-start-of-selection?
  [selections i j]
  (let [{:keys [buffer-cord]} (first selections)
        [by bx] buffer-cord]
    (and (= by i) (= bx j))))

(defn remove-selected-str-from-row
  [selections row buffer-row-index]
  (reduce (fn [[removed-str row j] r]
            (if-let [[_ _ start end] (find-selection selections buffer-row-index j)]
              (let [removed-s (remove-range r start end)
                    was-removed (subs r start end)
                    start? (is-start-of-selection? selections buffer-row-index j)]
                (if (empty? removed-s)
                  [(str removed-str was-removed) (if start? (conj row "")) (inc j)]
                  [(str removed-str was-removed) (conj row removed-s) (inc j)]))
              [removed-str (conj row r) (inc j)])) ["" [] 0] row))

(defn one-row-selected?
  [selections]
  (= (count selections) 1))

(defn cursor->buffer-cord
  "Finds a word under cursor and returns [word, by, bx, start, end]"
  [{:keys [buffer cursor] :as state}]
  (let [[by bx] (->> (y->row-index state (:y cursor))
                     (y->buffer-cord buffer))
        pos (x->char-pos state)]
    (loop [words (-> (get-row state by bx)
                     (s/split #" ")
                     (as-> r (interpose " " r)))
           w-start 0]
      (if (empty? words)
        nil
        (let [word (first words)
              w-end (+ (count word) w-start)]
          (if (and (>= pos w-start) (<= pos w-end))
            [word by bx w-start w-end]
            (recur (rest words) w-end)))))))

(defn remove-text-in-buffer
  "maybe we could do better than this mess......"
  [{:keys [buffer selections]}]
  (let [[_ removed-txt new-buffer] (->> (reduce (fn [[i removed-stuff acc] row]
                                                  (let [[removed-str new-row _] (remove-selected-str-from-row selections row i)]
                                                    [(inc i)
                                                     (conj removed-stuff removed-str)
                                                     (if (empty? new-row)
                                                       (if (one-row-selected? selections) (conj acc [""]) acc)
                                                       (conj acc new-row))])) [0 [] []] buffer))]
    {:removed-txt (s/trim (s/join "\n" removed-txt))
     :buffer      new-buffer}))

(defn insert-text-in-buffer
  "Insert text into buffer, replaces \t with spaces."
  [{:keys [cursor buffer char-width] :as state} txt]
  (let [txt (tab->space txt)
        [by bx] (->>
                  (y->row-index state (:y cursor))
                  (y->buffer-cord buffer))
        [f & rest] (s/split txt #"\n" 2)
        row (get-in buffer [by bx])
        max-chars (dec (line-max-chars state))
        char-pos (x->char-pos state)
        first-of-row (subs row 0 char-pos)
        rest-of-row (subs row char-pos (count row))
        new-row (str first-of-row f (if (some? rest) "" rest-of-row)) ;; if no new lines, insert rest of row here
        line-group (->> (assoc (get-in state [:buffer by]) bx new-row)
                        (partition-buffer-row max-chars))
        more-to-insert (when (some? rest)
                         (->> (txt->buffer (first rest) char-width (editor-width state))
                              ((fn [b]
                                 (if rest-of-row
                                   (let [last-line-group (->> (str (last (last b)) rest-of-row) ;; if new lines, insert rest of row last in the new buffer
                                                              (partition-buffer-row max-chars))]
                                     (assoc-in b [(dec (count b))] (into [] (concat (butlast (last b)) last-line-group))))
                                   b)))))

        next-state (->
                     (assoc-in state [:buffer by] (if (empty? line-group) [""] line-group))
                     (assoc :selections [])
                     (#(if (some? more-to-insert)
                         (insert-rows-at % (inc by) more-to-insert)
                         %)))]
    (set-cursor-at-index next-state (+ (cursor->index next-state)
                                       (diff-buffer-len (:buffer next-state) (:buffer state))))))

(defn has-selections?
  [selections]
  (> (count selections) 0))

(defn selections->txt
  [{:keys [selections] :as state}]
  (loop [s-string nil
         prev-by nil
         selections selections]
    (if (empty? selections)
      s-string
      (let [[by bx start end] (:buffer-cord (first selections))
            s (-> (get-in state [:buffer by bx])
                  (subs start end))]
        (recur (str s-string (if (= prev-by by) s (if (nil? s-string) s (str "\n" s))))
               by
               (rest selections))))))



(defn cursor->index
  "Returns the 1d index where the cursor is in the buffer.
  the index is a zero-indexed integer indicating where
  the cursor is located"
  {:test (fn []
           (let [xy-state (fn [cursor] {:styles     {:line-height 1}
                                        :char-width 1
                                        :cursor     cursor
                                        :buffer     [["a"] ["1234"] [""] ["a"] ["."] [""] [""] ["hejsan"]]})]
             (is (= (cursor->index (xy-state {:x 0 :y 0})) 0))
             (is (= (cursor->index (xy-state {:x 1 :y 0})) 1))
             (is (= (cursor->index (xy-state {:x 2 :y 0})) nil)) ;; ofb
             (is (= (cursor->index (xy-state {:x 0 :y 1})) 2))
             (is (= (cursor->index (xy-state {:x 4 :y 1})) 6))
             (is (= (cursor->index (xy-state {:x 1 :y 3})) 9))
             (let [state (assoc (xy-state {:x 1 :y 1}) :buffer [["aabc123456789" "a"]])]
               (is (= (cursor->index state) 15)))
             ))}
  [{:keys [cursor buffer] :as state}]
  (let [{:keys [y]} cursor
        c-row (Math/floor (/ y (line-height state)))]
    (loop [rows (flatten buffer)
           row-index 0
           pos 0]
      (if (empty? rows)
        nil
        (let [row (first rows)
              ch (x->char-pos state)]
          (if (and (= c-row row-index) (<= ch (count row)))
            (+ pos ch)
            (recur (rest rows) (inc row-index) (+ pos (count row) 1))))))))

(defn set-cursor-at-index
  "Sets the cursor by a 1d index `i`, i is zero-indexed"
  {:test (fn []
           (let [state {:styles     {:line-height 1}
                        :char-width 1
                        :cursor     {:x nil :y nil}
                        :buffer     [["a"] ["1234" "56"] [""] ["a"] ["."] [""] [""] ["hejsan"]]}]
             ; first row, just before 'a'
             (is (= (-> (set-cursor-at-index state 0) :cursor)
                    {:x 0 :y 0}))
             ;;; 1st row, right after 'a'
             (is (= (-> (set-cursor-at-index state 1) :cursor)
                    {:x 1 :y 0}))
             ;;; 2nd row at index 0
             (is (= (-> (set-cursor-at-index state 2) :cursor)
                    {:x 0 :y 1}))
             ;;; 3d row at index 0
             (is (= (-> (set-cursor-at-index state 7) :cursor)
                    {:x 0 :y 2}))
             ;;; last at 3d row
             (is (= (-> (set-cursor-at-index state 9) :cursor)
                    {:x 2 :y 2}))
             ;;; 4th row
             (is (= (-> (set-cursor-at-index state 10) :cursor)
                    {:x 0 :y 3}))
             ;; 5th row, first
             (is (= (-> (set-cursor-at-index state 11) :cursor)
                    {:x 0 :y 4}))
             ;; should be on 2nd row, index 0'
             (let [state (assoc state :buffer [["a222323222222" "2"]])]
               (is (= (-> (set-cursor-at-index state 14) :cursor)
                      {:x 0 :y 1})))
             ))}
  [{:keys [buffer] :as state} i]
  (loop [bf buffer
         n-chars 0
         rows 0]
    (if (empty? bf)
      nil
      (let [[bf-chars bf-rows done] (loop [bf-row (first bf)
                                           bf-chars 0
                                           bf-rows 0]
                                      (if (empty? bf-row)
                                        [bf-chars bf-rows]
                                        (let [row (first bf-row)
                                              rc (count row)
                                              limit (+ n-chars bf-chars rc)]
                                          (if (>= limit i)
                                            (let [x (- i n-chars bf-chars)
                                                  y (+ rows bf-rows)]
                                              [nil nil [x y]])
                                            (recur (rest bf-row)
                                                   (+ bf-chars rc 1) ;; 1 for \n
                                                   (inc bf-rows))))))]
        (if done
          (let [[x y] done]
            (set-cursor state (char-pos->px state x) (y-row->px state y)))
          (recur (rest bf) (+ n-chars bf-chars) (+ rows bf-rows)))))))


(defn remove-selection
  "Remove text in the buffer by selection"
  {:test (fn []
           (let [state {:buffer     [["a"] ["b"]]
                        :selections [{:buffer-cord [0 0 0 1]}]}]
             (is (= (-> (remove-selection state) :buffer)
                    [[""] ["b"]]))))}
  [{:keys [selections] :as state}]
  (let [{:keys [buffer]} (remove-text-in-buffer state)
        {:keys [top left]} (first selections)]
    (-> (assoc-in state [:buffer] buffer)
        (assoc :selections [])
        (set-cursor left top))))

(defn process-char
  "Insert `key` in the buffer and moves the cursor accordingly."
  {:test (fn []
           (let [state {:buffer     [["a"]]
                        :styles     {:line-height  1
                                     :editor-width 10}
                        :char-width 1}]
             (is (= (-> (process-char state "b") :buffer)
                    [["ba"]]))))}
  [{:keys [cursor buffer] :as state} key]
  (let [[by bx] (->>
                  (y->row-index state (:y cursor))
                  (y->buffer-cord buffer))
        row (or (get-in buffer [by bx]) "")]
    (->> (x->char-pos state)
         (str-insert row key)
         (assoc (get-in buffer [by]) bx)
         (partition-buffer-row (dec (line-max-chars state))) ;; some margin..
         (assoc-in state [:buffer by]))))

(defn process-backspace
  "Some cases:
  1) just delete a char anywhere but the firs on a row
  2) delete the first \n i.e merge two lines
  3) delete at index (0,0)
  4) if the row is empty we should delete it.

  for all of these, we need to shift the full buffer row to account for page width
  "
  [{:keys [cursor buffer char-width] :as state}]
  (let [row-index (y->row-index state (:y cursor))
        [by bx] (y->buffer-cord buffer row-index)
        row (get-in buffer [by bx])
        max-chars (dec (line-max-chars state))
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
        (assoc-in state [:buffer by] row-group))

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
          (assoc-in state [:buffer (dec by)] (if (empty? new-row-group-above)
                                               [""]
                                               new-row-group-above))
          ;; I think these are a bit awkward, changing state at the same time needed stuff from the changed state
          (as-> state
                (assoc-in state [:buffer] (drop-nth (:buffer state) by)))))
      :else
      (let [removed-row (remove-char-at row (/ (- (:x cursor) char-width) char-width))
            row-group (->> removed-row
                           (assoc buffer-row bx)
                           (partition-buffer-row max-chars))]
        (assoc-in state [:buffer by] (if (empty? row-group) [""] row-group))))))

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
  {:test (fn []
           (let [state {:char-width 1
                        :styles     {:editor-width 10
                                     :line-height  1}
                        :buffer     [["a"] ["b"]]}]
             (is (= (-> (process-enter state) :buffer)
                    [[""] ["a"] ["b"]]))
             (is (= (-> state
                        (assoc :buffer [[""]])
                        process-enter
                        :buffer)
                    [[""] [""]]))))}
  [state]
  (let [{:keys [cursor buffer char-width] :as state} (if (has-selections? (:selections state))
                                                       (remove-selection state)
                                                       state)
        row-index (y->row-index state (:y cursor))
        [by bx] (y->buffer-cord buffer row-index)
        row (get-in state [:buffer by bx])
        buffer-row (get-in state [:buffer by])
        x-offset (/ (:x cursor) char-width)
        [first second] (split-str row x-offset)
        rest-buffer-row (subvec buffer-row (inc bx))
        row-to-insert (into [] (cons second rest-buffer-row))]
    (->
      (assoc-in state [:buffer by] (subvec buffer-row 0 (inc bx)))
      (assoc-in [:buffer by bx] (if (nil? first) "" first))
      (insert-row-at (inc by) row-to-insert))))

(defn dropv-last
  [v]
  (into [] (drop-last v)))

(defn prev-states
  "Remove the states that are the same regarding the following keys and returns a new state list where the
  last state is different from the given last state.
    - buffer
    - selections
    - cursor
    "
  [states]
  (let [keys-of-interest [:buffer :selections :cursor]
        current-state (-> (last states)
                          (select-keys keys-of-interest))
        states-wlast (->> (drop-last states)
                          reverse)]
    (->> (take-while (fn [state]
                       (or (= (get-in state [:mouse :is-down]) true)
                           (= (select-keys state keys-of-interest) current-state))) states-wlast)
         count
         inc                                                ;; inc to include the current state
         ;(#(do (println "Removing the last..." % " states") %))
         (#(drop-last % states))
         (into []))))

(defn undo
  [{:keys [states] :as editor}]
  (if (> (count states) 2)
    (let [state (last states)
          new-states (prev-states states)]
      (-> (assoc editor :states new-states)
          (update :undo-states conj (assoc state :should-undo false))))
    editor))

(defn redo
  [{:keys [undo-states] :as editor}]
  (if-not (empty? undo-states)
    (let [new-state (last undo-states)]
      (-> (update-in editor [:states] conj new-state)
          (update-in [:undo-states] dropv-last)))
    editor))

(defn mutate!
  [editor-atom pure-fn & mutate-args]
  (swap! editor-atom (fn [editor]
                       (let [current-state (last (:states editor))
                             {:keys [should-undo should-redo] :as new-state} (apply pure-fn (conj mutate-args current-state))]
                         (if (some? new-state)
                           (do
                             (cond
                               should-undo (undo editor)
                               should-redo (redo editor)
                               :else
                               (do
                                 (-> (update editor :states (fn [states] (conj states new-state)))
                                     (assoc :undo-states [])))))
                           editor))))
  (get-state editor-atom))

(defn find-key-command-handler
  [commands keys-down]
  (loop [commands (partition 2 commands)]
    (if-not (empty? commands)
      (let [[combo handler] (first commands)
            combo (if (vector? combo) combo [combo])
            is-handler? (loop [keys keys-down]
                          (if (empty? keys)
                            false
                            (if (some (fn [c] (= c keys)) combo)
                              true
                              (recur (into #{} (rest keys))))))]
        (if is-handler?
          handler
          (recur (rest commands)))))))


(defn meta-key-down? [js-evt] (.-metaKey js-evt))
(defn alt-key-down? [js-evt] (.-altKey js-evt))
(defn ctrl-key-down? [js-evt] (.-ctrlKey js-evt))
(defn shift-key-down? [js-evt] (.-shiftKey js-evt))
(defn shift-meta-keys-down? [js-evt] (and (meta-key-down? js-evt)
                                          (shift-key-down? js-evt)))
(defn handle-super-keys
  [js-evt key]
  (cond
    (shift-meta-keys-down? js-evt) #{:Shift :Meta key}
    (meta-key-down? js-evt) #{:Meta key}
    (alt-key-down? js-evt) #{:Alt key}
    (ctrl-key-down? js-evt) #{:Control key}
    (shift-key-down? js-evt) #{:Shift key}
    :else #{key}))

(defn remove-keys
  [key-set remove-keys]
  (cond
    (clojure.set/intersection remove-keys key-set)
    (remove remove-keys key-set)
    :else
    key-set))

(defn handle-char-key
  [{:keys [keys-down state]}]
  (let [key (-> (remove-keys keys-down #{:Control :Meta :Shift :Alt})
                first
                name)
        rm-selection-state (if (has-selections? (:selections state))
                             (remove-selection state)
                             state)
        next-state (process-char rm-selection-state (if (= key "Tab")
                                                      "    "
                                                      key))]
    (->>
      (diff-buffer-len (:buffer next-state) (:buffer rm-selection-state))
      (+ (cursor->index next-state))
      (set-cursor-at-index next-state))))

(defn rows-between
  "Returns a list with buffer coordinates for all rows between [a,b] including a and b"
  [{:keys [buffer] :as state} bya bxa byb bxb]
  (if (and (= bya byb) (= bxa bxb))                         ;; same row
    [[bya bxa]]
    (let [between (subvec buffer bya (inc byb))
          first (subvec (first between) bxa)
          last (subvec (last between) 0 (inc bxb))
          map-buffer (fn [v row-num] (->> (map-indexed (fn [z _] [row-num z]) v)
                                          (into [])))]
      (loop [row-num (int bya)
             cords []]
        (if (= row-num byb)
          (->> (map-buffer last row-num)
               (concat cords)
               (into []))
          (recur (inc row-num)
                 (concat cords (map-buffer (if (= row-num bya)
                                             first
                                             (get buffer row-num)) row-num))))))))

(defn top-most
  [a b line-height]
  (let [floor-ay (Math/floor (/ (:y a) line-height))
        floor-by (Math/floor (/ (:y b) line-height))]
    (cond
      (< floor-ay floor-by) a
      (> floor-ay floor-by) b
      (and (= floor-ay floor-by) (< (:x a) (:x b))) a
      (and (= floor-ay floor-by) (>= (:x a) (:x b))) b
      ;; hmmmm maybe this can happen??
      :else
      a)))

(defn select-rows-between
  "Get a list of tuples [buffer-row-index, row-index, row-start-index, row-end-index]
  for the selected are between [a,b]"
  [{:keys [buffer char-width] :as state} a b]
  (let [[bya bxa] (->>
                    (y->row-index state (:y a))
                    (y->buffer-cord buffer))
        [byb bxb] (->>
                    (y->row-index state (:y b))
                    (y->buffer-cord buffer))
        row-a (get-in state [:buffer bya bxa])
        row-b (get-in state [:buffer byb bxb])
        a-z-offset (/ (clamp-to-chars state row-a (:x a)) char-width)
        b-z-offset (/ (clamp-to-chars state row-b (:x b)) char-width)
        start-point (top-most a b (line-height state))
        rb (if (= a start-point)
             (rows-between state bya bxa byb bxb)
             (rows-between state byb bxb bya bxa))
        between (mapv (fn [row-cord]
                        (conj row-cord 0 (->> (cons :buffer row-cord)
                                              (get-in state)
                                              count))) rb)
        same-row? (and (= bya byb) (= bxa bxb))]
    (-> (assoc between 0 (if (= a start-point)
                           [bya bxa a-z-offset (if same-row? b-z-offset (count row-a))]
                           [byb bxb b-z-offset (if same-row? a-z-offset (count row-b))]))
        (as-> between
              (if same-row?
                between
                (assoc between (dec (count between)) (if (= a start-point)
                                                       [byb bxb (if same-row? a-z-offset 0) b-z-offset]
                                                       [bya bxa (if same-row? b-z-offset 0) a-z-offset])))))))


(defn format-selection-rows
  "Get the visual dimension of the selected row"
  [{:keys [char-width buffer] :as state} selection-list]
  (->> (map (fn [[by bx start end :as cord]]
              (let [row (-> (get-in state [:buffer by bx])
                            (subs start end))
                    visual-row-index (buffer-cord->y buffer by bx)
                    width (* (count row) char-width)]
                {:width       (if (> width 0) width char-width)
                 :top         (* (line-height state) (dec visual-row-index))
                 :left        (* start char-width)
                 :buffer-cord cord})) selection-list)
       (assoc state :selections)))


(defn select-all
  [{:keys [char-width] :as state}]
  (let [last-row (last-row state)
        selections (select-rows-between state
                                        {:x 0 :y 0}
                                        {:x (* char-width (count last-row)) :y (* (line-height state) (number-of-lines state))})]
    (-> (format-selection-rows state selections)
        set-cursor-end-of-buffer)))

(def commands
  [#{:Meta :Shift :z}
   (fn [{:keys [state]}] (assoc state :should-redo true))
   #{:Meta :z}
   (fn [{:keys [state]}] (assoc state :should-undo true))
   #{:Meta :c}
   (fn [{:keys [state]}] (do (->> (selections->txt state)
                                  interop/write-to-clipboard!)
                             state))
   #{:Meta :v}
   (fn [{:keys [state trigger-event]}]
     (do
       ;; this is async, can we do something better here?
       (interop/read-clipboard-txt (fn [data]
                                     (trigger-event :insert-txt {:txt data})))
       state))
   #{:Meta :x}
   (fn [{:keys [state]}] (let [{:keys [removed-txt buffer]} (remove-text-in-buffer state)]
                           (do
                             (interop/write-to-clipboard! removed-txt)
                             (-> (assoc state :buffer buffer)
                                 (assoc :selections [])))))
   #{:Meta :a}
   (fn [{:keys [state]}]
     (select-all state))

   #{:Enter}
   (fn [{:keys [state]}]
     (let [cursor-index (cursor->index state)]
       (-> (process-enter state)
           (set-cursor-at-index (inc cursor-index)))))

   #{:ArrowRight}
   (fn [{:keys [state]}] (-> (assoc state :selections [])
                             inc-cursor-x
                             (update-in [:cursor] (fn [{:keys [x] :as c}] (assoc c :max-x x)))))
   #{:ArrowLeft}
   (fn [{:keys [state]}] (-> (assoc state :selections [])
                             dec-cursor-x
                             (update-in [:cursor] (fn [{:keys [x] :as c}] (assoc c :max-x x)))))
   #{:ArrowUp}
   (fn [{:keys [state]}] (-> (assoc state :selections [])
                             dec-cursor-y))
   #{:ArrowDown}
   (fn [{:keys [state]}] (-> (assoc state :selections [])
                             inc-cursor-y))
   [#{:Backspace} #{:Shift :Backspace}]
   (fn [{:keys [state]}]
     (let [selections? (has-selections? (:selections state))
           cursor-index (cursor->index state)]
       (if selections?
         (remove-selection state)
         (->
           (process-backspace state)
           (set-cursor-at-index (Math/max 0 (dec cursor-index)))))))

   #{:Tab}
   handle-char-key

   ;; all chars http://www.asciitable.com/ only ascii chars, that will be a problem
   (mapv (fn [a] #{(keyword (char a))}) (range 32 127))
   handle-char-key

   (mapv (fn [a] #{:Shift (keyword (char a))}) (range 32 127))
   handle-char-key

   ])

(defn process-key-down
  [state {:keys [keys-down trigger-event]}]
  (let [handler (find-key-command-handler commands keys-down)]
    (when handler
      (handler {:state         state
                :keys-down     keys-down
                :trigger-event trigger-event}))))

(defn get-dom-el
  [id]
  (interop/get-element-by-id id))

(defn get-relative-mouse-cords
  [js-evt el]
  (let [{:keys [left top] :as e} (interop/get-bounding-client-rect el)
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
  [state mouse]
  (let [n-lines (number-of-lines state)
        x (:x mouse)
        y (:y mouse)]
    (and (>= x 0) (<= x (editor-width state))
         (>= y 0) (<= y (* n-lines (line-height state))))))

;; SET CURSOR
(defn process-mouse-down
  [state {:keys [js-evt]}]
  (let [mouse (->> (get-dom-el "editor-area") (get-relative-mouse-cords js-evt))]
    (when (in-editor? state mouse)
      (-> (assoc-in state [:mouse :start] mouse)
          (assoc-in [:mouse :is-down] true)
          (assoc :cursor (clamp-cursor state mouse))
          (assoc :selections [])
          (update-in [:cursor] (fn [{:keys [x] :as c}] (assoc c :max-x x)))
          ))))

;; SET CURSOR
(defn process-mouse-up
  [state {:keys [js-evt]}]
  (let [start-x (get-in state [:mouse :start :x])
        start-y (get-in state [:mouse :start :y])
        {:keys [x y] :as end-mouse} (->> (get-dom-el "editor-area") (get-relative-mouse-cords js-evt))]
    (if (and (< (Math/abs (- start-x x) 0.1))
             (< (Math/abs (- start-y y) 0.1)))
      (assoc-in state [:mouse :is-down] false)
      (update-in state [:mouse] assoc
                 :end end-mouse
                 :is-down false))))


(defn dist-to-origin
  [{:keys [x y]}]
  (Math/sqrt (+ (Math/pow x 2) (Math/pow y 2))))




(defn process-mouse-move
  [{:keys [styles] :as state} {:keys [js-evt]}]
  (when (get-in state [:mouse :is-down])
    (let [mouse (->> (get-dom-el "editor-area") (get-relative-mouse-cords js-evt))]
      (when (in-editor? state mouse)
        (-> (assoc-in state [:mouse :end] mouse)
            (assoc :cursor (clamp-cursor state mouse))
            (as-> state
                  (format-selection-rows state
                                         (select-rows-between state
                                                              (get-in state [:mouse :start])
                                                              (get state :cursor)))))))))

(defn select-row
  [{:keys [buffer cursor char-width] :as state}]
  (let [[by bx] (->>
                  (y->row-index state (:y cursor))
                  (y->buffer-cord buffer))
        row (get-row state by bx)
        selections (select-rows-between state
                                        {:x 0 :y (* (line-height state) by)}
                                        {:x (* char-width (count row)) :y (* (line-height state) by)})]
    (-> (format-selection-rows state selections)
        set-cursor-end-of-row)))

(defn process-double-click
  [{:keys [char-width] :as state}]
  (let [[_ by _ start end] (cursor->buffer-cord state)
        y (* (line-height state) by)
        selections (select-rows-between state
                                        {:x (* char-width start) :y y}
                                        {:x (* char-width end) :y y})]
    (-> (format-selection-rows state selections)
        (set-cursor (* char-width end) y))))



(defn handle-mouse-event
  [state {:keys [mouse-type] :as data}]
  (condp = mouse-type
    :mousemove (process-mouse-move state data)
    :mousedown (process-mouse-down state data)
    :mouse-right-down (println "right-click")               ;; TODO
    :double-click (process-double-click state)
    :triple-click (select-row state)
    :quadruple-click (select-all state)
    :mouseup (process-mouse-up state data)
    (js/console.warn "Unable to process mouse event: " type)))

(defn measure
  [{:keys [buffer] :as state} {:keys [char-width editor-width]}]
  (-> (assoc-in state [:styles :editor-width] editor-width)
      (assoc :char-width char-width
             :buffer (txt->buffer buffer char-width editor-width))))

(defn format-buffer
  [{:keys [buffer] :as state}]
  (let [max-chars (line-max-chars state)]
    (->> (mapv (partial partition-buffer-row max-chars) buffer)
         (mapv (fn [r] (if (empty? r) [""] r)))
         (assoc state :buffer))))

(defn process-resize
  [state {:keys [editor-width]}]
  (let [cursor-index (cursor->index state)]
    (-> (assoc-in state [:styles :editor-width] editor-width)
        format-buffer
        ;; TODO need to handle if cursor-index bumps to new row, then we need to add to this..
        (set-cursor-at-index cursor-index)
        )))

(defn handle-event!
  [name data]
  {:pre [(keyword? name)]}
  (condp = name
    :key-batch (doseq [k (:batch data)]
                 (mutate! editor-atom process-key-down {:keys-down     k
                                                        :trigger-event handle-event!}))
    :mouse-event (mutate! editor-atom handle-mouse-event data)

    :insert-txt (mutate! editor-atom insert-text-in-buffer (:txt data))

    :measure (mutate! editor-atom measure data)
    :resize (mutate! editor-atom process-resize data)

    :undo (mutate! editor-atom (fn [state] (assoc state :should-undo true)))
    :redo (mutate! editor-atom (fn [state]
                                 (let [s
                                       (assoc state :should-redo true)]
                                   s
                                   )
                                 ))

    (js/console.warn "Unable to handle event" name data)))

(defn active-row
  [{:keys [state current-row]}]
  (let [editor-width (editor-width state)
        line-height (line-height state)
        font-size (font-size state)]
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
                          :top                 (str (* line-height current-row) "px")
                          :height              (str line-height "px")
                          :line-height         (str line-height "px")
                          :word-break          "break-all"
                          :font-family         "monospace"
                          :font-size           (str font-size "px")}}])))

(defn toolbar
  [{:keys [state trigger-event]}]
  (let [hover-atom (r/atom nil)]
    (fn []
      (let [hover (deref hover-atom)]
        [:div {:style {:padding      "5px"
                       :padding-left "10px"
                       :border       "1px dashed green"
                       :width        "100%"
                       :display      "flex"
                       :align-items  "center"}}
         [:div {:id             :undo
                :on-mouse-over  (fn [] (reset! hover-atom :undo))
                :on-mouse-leave (fn [] (reset! hover-atom nil))
                :on-click       (fn [evt]
                                  (.preventDefault evt)
                                  (.stopPropagation evt)
                                  (trigger-event :undo {}))
                :style          {:cursor      "pointer"
                                 :margin-left "10px"
                                 :height      "24px"
                                 :opacity     (if (= hover :undo) 1 0.7)
                                 :font-weight "bold"}}
          [undo-icon]]
         [:div {:id             :redo
                :on-mouse-over  (fn [] (reset! hover-atom :redo))
                :on-mouse-leave (fn [] (reset! hover-atom nil))
                :on-click       (fn [evt]
                                  (.preventDefault evt)
                                  (.stopPropagation evt)
                                  (trigger-event :redo {}))
                :style          {:cursor      "pointer"
                                 :height      "24px"
                                 :opacity     (if (= hover :redo) 1 0.7)
                                 :font-weight "bold"}}
          [redo-icon]]
         [:div {:id             :bold
                :on-mouse-over  (fn [] (reset! hover-atom :bold))
                :on-mouse-leave (fn [] (reset! hover-atom nil))
                :on-click       (fn [evt]
                                  (.preventDefault evt)
                                  (trigger-event :insert-txt {:txt "**strong text**"}))
                :style          {:cursor      "pointer"
                                 :height      "24px"
                                 :opacity     (if (= hover :bold) 1 0.7)
                                 :font-weight "bold"}}
          [bold-icon]]
         [:div {:id             :emp
                :on-mouse-over  (fn [] (reset! hover-atom :emp))
                :on-mouse-leave (fn [] (reset! hover-atom nil))
                :on-click       (fn [evt]
                                  (.preventDefault evt)
                                  (trigger-event :insert-txt {:txt "*emphasized text*"}))
                :style          {:cursor      "pointer"
                                 :height      "24px"
                                 :opacity     (if (= hover :emp) 1 0.7)
                                 :font-weight "bold"}}
          [italic-icon]]
         [:div {:id             :link
                :on-mouse-over  (fn [] (reset! hover-atom :link))
                :on-mouse-leave (fn [] (reset! hover-atom nil))
                :on-click       (fn [evt]
                                  (.preventDefault evt)
                                  (trigger-event :insert-txt {:txt "[enter link description here][https://]\n"}))
                :style          {:cursor      "pointer"
                                 :height      "24px"
                                 :opacity     (if (= hover :link) 1 0.7)
                                 :font-weight "bold"}}
          [insert-link-icon]]
         ]))))

(defn gutter
  [{:keys [state flatten-buffer]}]
  [:div {:id    "gutter"
         :style {:width            "50px"
                 ;:float            "left"
                 :background-color "#e8e8e8"
                 :direction        "rtl"
                 :padding-right    "10px"
                 :display          "inline-block"
                 :height           (str (* (line-height state) (count flatten-buffer)) "px")
                 :color            "#AAA"}}
   (doall (map-indexed (fn [i _]
                         [:span {:key   (str "row-num-" i)
                                 :style {:position    "absolute"
                                         :float       "right"
                                         :height      "21px"
                                         :font        "Monaco"
                                         :font-family "monospace"
                                         :font-size   (font-size state)
                                         :transform   (str "translate(0px, " (* i (line-height state)) "px)")
                                         }} (inc i)]) flatten-buffer))])

(defn focus!
  [el]
  (js-invoke el "focus" (js-obj "preventScroll" true)))

(defn read-all
  [chan]
  (async/go
    (loop [values []]
      (let [[v _] (async/alts! [chan] :default :done)]
        (if (= v :done)
          values
          (recur (conj values v)))))))

(defn batch-commands
  [max-time]
  (let [in-chan (async/chan)
        out-chan (async/chan)]
    (async/go
      (loop [buffer []
             t (async/timeout max-time)]
        (let [[v p] (async/alts! [in-chan t])]
          (cond
            (and (nil? v) (empty? buffer))                  ;; wait for input
            (let [d (async/<! in-chan)]
              (recur (conj buffer d) t))

            (= p t)                                         ;; timeout
            (do
              (async/>! out-chan buffer)
              (recur [] (async/timeout max-time)))

            :else
            (recur (conj buffer v) t)))))
    [in-chan out-chan]))

(defn mousedown?
  [type]
  (= type :mousedown))

(defn scrollbar
  [{:keys [editor-area]}]
  [:div {:style {:width            "7px"
                 :height           "100%"
                 :right            "0"
                 :top              0
                 :position         "absolute"
                 :border-radius    "7px"
                 :bottom           0
                 :background-color "rgba(0,0,0,0.35)"
                 }}
   [:div {:id    :scroll-bar
          :style {:position "relative"
                  :height   "100%"}}]
   [:div {:id :scroll-thumb}]
   ])

(defn setup-listeners!
  [{:keys [trigger-event state editor-input editor-area]}]
  (let [chans (async/merge
                [
                 (listen editor-input "keydown" false)
                 (listen editor-area "mousedown" false)
                 (listen editor-area "mouseup")
                 (listen editor-area "mousemove")
                 (listen js/window "resize")])
        [command-in command-out] (batch-commands (:key-delay state))]
    (async/go (loop []
                (let [d (async/<! command-out)]
                  (trigger-event :key-batch {:batch d})
                  (recur))))
    (async/go (loop []
                (let [evt (async/<! chans)
                      type (keyword (.-type evt))]

                  (when (contains? #{:mousedown :mouseup :mousemove} type)
                    (cond
                      (= 3 (aget evt "which"))
                      (trigger-event :mouse-event {:mouse-type :mouse-right-down :js-evt evt})
                      (and (= 2 (aget evt "detail")) (mousedown? type))
                      (trigger-event :mouse-event {:mouse-type :double-click :js-evt evt})
                      (and (= 3 (aget evt "detail")) (mousedown? type))
                      (trigger-event :mouse-event {:mouse-type :triple-click :js-evt evt})
                      (and (= 4 (aget evt "detail")) (mousedown? type))
                      (trigger-event :mouse-event {:mouse-type :quadruple-click :js-evt evt})
                      :else
                      (trigger-event :mouse-event {:mouse-type type :js-evt evt})))

                  (when (contains? #{:keydown :keyup} type)
                    (async/>! command-in (handle-super-keys evt (keyword (.-key evt)))))

                  (when (= :resize type)
                    (trigger-event :resize {:editor-width (-> editor-area
                                                              interop/get-bounding-client-rect
                                                              :width)}))
                  (recur)
                  ))))
  )

(defn set-ref-builder
  [refs-atom path]
  (fn [com] (swap! refs-atom assoc path com)))

(defn insert-ruler!
  [{:keys [styles]}]
  (let [el (.createElement js/document "div")]
    (set! (.-innerText el) "!")
    (set! (.-id el) "ruler")
    (set! (.-style el) (str "display: inline-block; position: absolute; font-family: monospace; visibility: hidden; white-space: nowrap; font-size: " (:font-size styles) "px;"))

    (.appendChild (interop/get-element-by-id "app") el)))

(defn remove-ruler!
  []
  (let [el (interop/get-element-by-id "ruler")]
    (js-invoke (.-parentNode el) "removeChild" el)))

(defn editor
  []

  (insert-ruler! (get-state editor-atom))

  (let [trigger-event handle-event!
        refs-atom (atom {:editor-area  nil
                         :editor-input nil})
        set-editor-area-ref! (set-ref-builder refs-atom :editor-area)
        set-editor-input-ref! (set-ref-builder refs-atom :editor-input)]
    (r/create-class
      {:component-did-mount (fn []
                              (let [state (get-state editor-atom)]
                                (when-not (:char-width state)
                                  (trigger-event :measure {:char-width   (-> (interop/get-element-by-id "ruler")
                                                                             interop/get-bounding-client-rect
                                                                             :width)
                                                           :editor-width (-> @refs-atom
                                                                             :editor-area
                                                                             interop/get-bounding-client-rect
                                                                             :width)
                                                           })
                                  (remove-ruler!)
                                  )

                                (setup-listeners! {:state         state
                                                   :trigger-event trigger-event
                                                   :editor-input  (-> @refs-atom :editor-input)
                                                   :editor-area   (-> @refs-atom :editor-area)})))
       :reagent-render      (fn []
                              (let [{:keys [buffer selections char-width cursor keys-down] :as state} (get-state editor-atom)
                                    current-row (y->row-index state (:y cursor))
                                    flatten-buffer (flatten buffer)]
                                [:div {:style {:display        "flex"
                                               :flex-direction "column"}}

                                 [toolbar {:state state :trigger-event trigger-event}]
                                 [:div {:style {:display        "flex"
                                                :flex-direction "row-reverse"}}

                                  [:div {:style {:float  "right"
                                                 :border "1px dashed orange"
                                                 :flex   1
                                                 :height "50px"}} "Hi"]

                                  [:div {:on-click (fn [] (focus! (interop/get-element-by-id "editor-input")))
                                         :style    {:position "relative"
                                                    :flex     5}}

                                   [:div {:style {:position       "relative"
                                                  :max-height     "200px"
                                                  :min-height     "200px"
                                                  :display        "flex"
                                                  :flex-direction "row"}}
                                    [gutter {:state state :flatten-buffer flatten-buffer}]
                                    [:textarea {:id          "editor-input"
                                                :ref         set-editor-input-ref!
                                                :on-blur     (fn [] (focus! (interop/get-element-by-id "editor-input")))
                                                :rows        1
                                                :wrap        "soft"
                                                :spell-check false
                                                :style       {:width     "1px"
                                                              :transform (str "translate(" (:x cursor) "px," (* (line-height state) current-row) "px)")
                                                              :position  "absolute"
                                                              :height    "1px"
                                                              :overflow  "hidden"
                                                              :opacity   0
                                                              :border    "none"
                                                              :resize    "none"
                                                              :outline   "none"}}]
                                    [:div {:id         "editor-area"
                                           :ref        set-editor-area-ref!
                                           :tab-index  0
                                           :on-click   (fn [] (focus! (interop/get-element-by-id "editor-input")))
                                           :draggable  false
                                           :userselect "none"
                                           :style      {:border              "1px solid blue"
                                                        :box-sizing          "border-box"
                                                        :height              (str (* (count flatten-buffer) (line-height state)) "px")
                                                        :flex                1
                                                        :margin-right        "7px" ;; TODO this is the scrollbar width
                                                        :outline             "none"
                                                        :-webkit-user-select "none"
                                                        :cursor              "text"
                                                        :line-height         (str (line-height state) "px")
                                                        :font-size           (str (font-size state) "px")
                                                        :background-color    "transparent"
                                                        :font                "Monaco"
                                                        :font-family         "monospace"}}
                                     [active-row {:state state :current-row current-row}]
                                     [:div {:id    "caret"
                                            :style {:transform (str "translate(" (:x cursor) "px," (* (line-height state) current-row) "px)") ;; TODO
                                                    :animation (when (empty? keys-down) "typing 3.5s steps(40, end), blink-caret .75s step-end infinite")
                                                    :opacity   "0.3"
                                                    :display   "block"
                                                    :border    "1px solid black"
                                                    :position  "absolute"
                                                    :cursor    "text"
                                                    :height    (str (line-height state) "px")
                                                    :width     "1px"}}]
                                     (when-not (empty? selections)
                                       [:div {:id         "selections"
                                              :draggable  false
                                              :tab-index  -1
                                              :userselect "none"
                                              :style      {:position            "absolute"
                                                           :z-index             -2
                                                           :outline             "none"
                                                           :-webkit-user-select "none"
                                                           :cursor              "text"
                                                           :line-height         (str (line-height state) "px")}}
                                        (doall (map-indexed (fn [i {:keys [width top left]}]
                                                              [:div {:id    (str "selection-" i)
                                                                     :key   (str "selection-" i)
                                                                     :style {:background "#B5D5FF"
                                                                             :position   "absolute"
                                                                             :height     (str (line-height state) "px")
                                                                             :width      (str width "px")
                                                                             :transform  (str "translate(" left "px," top "px)")}}]) selections))])
                                     (when char-width
                                       (doall (map-indexed (fn [i row] [:div {:key   (str "row-" i)
                                                                              :id    (str "row-" i)
                                                                              :style {:cursor      "text"
                                                                                      :font-family "monospace"
                                                                                      :white-space "pre"
                                                                                      :line-height (str (line-height state) "px")
                                                                                      :height      (str (line-height state) "px")
                                                                                      :position    "relative"}}
                                                                        row]) flatten-buffer)))]
                                    [scrollbar {:editor-area (-> @refs-atom :editor-area)}]]
                                   ]
                                  ]
                                 ]))})))
