(ns crumborn.core
  (:require [clojure.string :as str]
            [crumborn.interop :as interop])
  (:import [goog.async Debouncer]))

(defn debounce [f interval]
  (let [dbnc (Debouncer. f interval)]
    (fn [& args] (.apply (.-fire dbnc) dbnc (to-array args)))))

(defn get-page-and-slug
  ([event]
   (let [[page slug] (-> (interop/get-hash event)
                         (str/replace #"#" "")
                         (str/split #"/"))]
     {:page (if (empty? page) nil (keyword page))
      :slug slug}))
  ([]
   (get-page-and-slug (clj->js {:target (interop/get-window)}))))
(defn get-identitiy
  [state]
  (:identity state))

(defn authenticated?
  [state]
  (-> (get-identitiy state) some?))

