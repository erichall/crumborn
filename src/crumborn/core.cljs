(ns crumborn.core
  (:require [clojure.string :as str]
            [crumborn.interop :as interop])
  (:import [goog.async Debouncer]))

(goog-define env "none")
(goog-define ws-url "none")
(defn get-ws-url [] ws-url)
(defn get-env [] env)

(defn is-release? [] (= (get-env) "release"))
(defn is-dev? [] (= (get-env) "dev"))

(defn debounce [f interval]
  (let [dbnc (Debouncer. f interval)]
    (fn [& args] (.apply (.-fire dbnc) dbnc (to-array args)))))

(defn get-page-and-slug
  ([event]
   (let [[page slug] (-> (interop/get-hash event)
                         (str/replace #"#" "")
                         (str/split #"/"))]
     {:page (if (empty? page) nil (keyword page))
      :slug (if (empty? slug) nil (keyword slug))}))
  ([]
   (get-page-and-slug (clj->js {:target (interop/get-window)}))))

(defn get-identitiy
  [state]
  (:identity state))

(defn authenticated?
  [state]
  (-> (get-identitiy state) some?))

(defn loading?
  [state]
  (:loading state))

(defn page-is-create-post?
  []
  (= :create-post (:page (get-page-and-slug))))

(defn active-page-is?
  [state page]
  (= (:active-page state) page))

(defn get-uuid
  []
  (js/btoa (.toString (random-uuid))))

(defn get-ready-state [channel] (aget channel "readyState"))
(defn- ready-state [channel n] (= (get-ready-state channel) n))

(defn socket-is-connecting? [channel] (ready-state channel 0))
(defn socket-is-open? [channel] (ready-state channel 1))
(defn socket-is-closing? [channel] (ready-state channel 2))
(defn socket-is-closed? [channel] (ready-state channel 3))

