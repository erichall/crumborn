(ns crumborn.interop)

(defn setup-listener!
  ([obj event-type callback]
   (.addEventListener obj event-type callback))
  ([event-type callback]
   (.addEventListener js/window event-type callback)))

(defn get-height [] js/window.innerHeight)
(defn get-width [] js/window.innerWidth)

(defn get-element-by-id
  [id]
  (js/document.getElementById id))

(defn get-window-size
  []
  {:height (get-height)
   :width  (get-width)})

(defn get-hash
  ([event] (-> (aget event "target" "location" "hash")))
  ([] (.substring js/window.location.hash 1)))

(defn get-window
  []
  js/window)

(defn set-body-style!
  [key value]
  (aset js/document.body.style key value))

(defn set-hash!
  [loc]
  (set! (.-hash js/window.location) loc))

(defn get-bounding-client-rect
  [el]
  (let [rect (js->clj (.getBoundingClientRect el))]
    {:bottom (.-bottom rect)
     :height (.-height rect)
     :left   (.-left rect)
     :right  (.-right rect)
     :top    (.-top rect)
     :width  (.-width rect)
     :x      (.-x rect)
     :y      (.-y rect)}))

(defn mouse-x [evt] (.-clientX evt))
(defn mouse-y [evt] (.-clientY evt))
(defn get-type [evt] (.-name (.-type evt)))
(defn first-child [node] (.-firstChild node))
(defn create-range [el] (.createRange el))
(defn get-client-rects [range]
  (let [rects (array-seq (.getClientRects range))]
    (map (fn [r]
           {
            :bottom (.-bottom r)
            :height (.-height r)
            :left   (.-left r)
            :right  (.-right r)
            :top    (.-top r)
            :width  (.-width r)
            :x      (.-x r)
            :y      (.-y r)}) rects)))
(defn document [] js/document)
(defn select-node-contents [range node] (js-invoke range "selectNodeContents" node))
(defn inner-html [el] (.-innerHTML el))
