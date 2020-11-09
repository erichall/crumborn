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

(defn get-bounding-client-rect [evt]
  (let [rect (js->clj (.getBoundingClientRect (.-target evt)))]
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
(defn get-type [evt] (.-type evt))
