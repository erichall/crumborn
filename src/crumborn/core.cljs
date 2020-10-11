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


