(ns crumborn.core
  (:require [clojure.string :as str]
            [clojure.test :as t]
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
     {:page (when-not (empty? page) (keyword page))
      :slug (when-not (empty? slug) slug)}))
  ([]
   (get-page-and-slug (clj->js {:target (interop/get-window)}))))

(defn get-identitiy
  [state]
  (:identity state))

(defn authenticated?
  [state]
  (some? (get-identitiy state)))

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
  (js/btoa (str (random-uuid))))


(defn set-loading
  [state value]
  (assoc state :loading value))

(defn new-page?
  [state page]
  (and (-> page nil? not) (not= (:active-page state) page)))

(defn new-slug?
  [state slug]
  (and (-> slug nil? not) (not= (:active-slug state) slug)))

(defn get-page
  "Get a page, if it not defined in pages, default to front-page"
  [pages page-id]
  {:pre  [(= (keyword? page-id))]
   :post [(map? %)]}
  (if (contains? pages page-id)
    (get pages page-id)
    (get pages :front-page)))

(defn valid-edn?
  [maybe-edn]
  (try
    (clojure.edn/read-string maybe-edn)
    (catch js/Error _
      nil)))

(defn map->pretty-string
  [m]
  (str
    (reduce (fn [acc-str [k v]]
              (str
                acc-str
                k
                " "
                (cond
                  (= v "") "\"\""
                  (string? v) (str "\"" v "\"")
                  :else v)
                "\n ")) "{\n " m)
    "}"))

(defn has-fact?
  [state path]
  (boolean (get-in state path)))

(defn space->space
  [s]
  (clojure.string/replace s #"%20" " "))

(defn space->dash
  [s]
  (->
    (clojure.string/replace s #"%20" "-")
    (clojure.string/replace #" " "-")))

(defn dash->space
  [s]
  (clojure.string/replace s #"-" " "))

(defn get-post
  "Get a post by name from the state"
  [app-state slug]
  (let [posts (vals (get-in app-state [:pages :posts :posts]))]
    (when (some? posts)
      (->
        (filter (fn [{:keys [title]}]
                  (= title (dash->space slug))) posts)
        first))))

(defn assocs-in
  {:test (fn []
           (t/is (= (assocs-in {} [[:a :b] [:c :d]] "data")
                    {:a {:b "data"}
                     :c {:d "data"}})))}
  [m paths data]
  (reduce (fn [m path] (assoc-in m path data)) m paths))

(defn change-fact
  [state {:keys [paths fact]}]
  (assocs-in state paths fact))

