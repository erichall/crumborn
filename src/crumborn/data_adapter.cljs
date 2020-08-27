(ns crumborn.data-adapter
  (:require [reagent.ratom :as ratom]
            [clojure.spec.alpha :as s]
            [clojure.edn :as edn]))

(defonce data-state-atom (ratom/atom nil))

(defn set-channel-id-data-state-atom!
  [id]
  (swap! data-state-atom assoc :id id))

(defn id-is-set?
  []
  (some? (get (deref data-state-atom) :id)))

(defn get-data
  [query]
  (get-in (deref data-state-atom) query))

(defn clj->json
  [ds]
  (.stringify js/JSON (clj->js ds)))

(defn fetch!
  [{:keys [on-before query on-success on-failure signal]}]
  (let [abort-controller (js/AbortController.)]

    (when on-before
      (on-before))

    {:abort   abort-controller
     :promise (->
                (js/fetch "/api/v1/graphql-test"
                          (clj->js {:method  "POST"
                                    :signal  signal
                                    :headers {:content-type "text/plain"}
                                    :body    (str {:query query
                                                   :id    (:id data-state-atom)})
                                    }))
                (.then (fn [args]
                         (js/console.log "thi is the args" args)
                         (.json args)))
                (.then (fn [data]
                         (on-success data)))
                (.catch (fn [error]
                          (println "ERROR" error)
                          (on-failure error))))}))

(defn json->cljs
  [data]
  (->
    ;(.parse js/JSON data)
    (js->clj data :keywordize-keys true)))

(defn calling?
  [data-state query]
  (->
    (get-in data-state query)
    :calling))

(defn has-data?
  [data-state query]
  (some? (-> (get-in data-state query)
             :data)))

(defn has-error?
  [data-state query]
  (some? (-> (get-in data-state query)
             :error)))

(defn- set-value-on-path
  [data-state path property value]
  ;{:pre (or (= property :error) (= property :data) (= property :calling))}
  (let [path-state (assoc (get-in data-state path) property value)]
    (assoc-in data-state path path-state)))

(defn set-calling [data-state path value] (set-value-on-path data-state path :calling value))
(defn set-error [data-state path error] (set-value-on-path data-state path :error error))
(defn set-data [data-state path data] (set-value-on-path data-state path :data data))

(defn get-ready-state [channel] (aget channel "readyState"))
(defn socket-is-open? [channel] (= (get-ready-state channel) 1))
;(defn socket-is-connecting? [] (= (get-ready-state) 0))
;(defn socket-is-closing? [] (= (get-ready-state) 2))
;(defn socket-is-closed? [] (= (get-ready-state) 3))

(defn get-data-from-js [js-msg] (.-data js-msg))

(defn receive-msg!
  [trigger-event]
  (fn [msg]
    (trigger-event
      {:name :channel-received-msg
       :data (edn/read-string (get-data-from-js msg))})))

(defn send-msg!
  [channel msg]
  (if (socket-is-open? channel)
    (.send channel msg)
    (throw (js/Error. "Socket is not open"))))

(defn make-websocket!
  "Create a websocket to url with an identifier for the channel in the query-string"
  [url trigger-event]
  (let [channel-id (trigger-event {:name :get-channel-id})]
    (if-let [chan (js/WebSocket. (str url "?id=" channel-id))]
      (do
        (set! (.-onmessage chan) (receive-msg! trigger-event))
        (trigger-event {:name :channel-initialized :data {:channel chan}})
        (js/console.log " Websocket established"))
      (throw (js/Error. " Unable to establish websocket ")))))

(defn gql-query
  [query]
  ;; TODO
  ;; Must handle querys that are executed before ws is initialized
  (let [query-type (first (keys query))
        query-state (get-in (deref data-state-atom) query)
        data-state (deref data-state-atom)]
    (cond
      (calling? query data-state) query-state

      (and (not= query-type :mutation) (has-data? data-state query)) query-state

      (has-error? data-state query) query-state

      :else (let [data-thing (fetch! {:on-failure (fn [e]
                                                    (swap! data-state-atom (fn [data-state]
                                                                             (-> (set-error data-state query e)
                                                                                 (set-calling query false)))
                                                           ))
                                      :on-success (fn [d]
                                                    (swap! data-state-atom (fn [data-state]
                                                                             (let [cljs-response (json->cljs d)]
                                                                               (->
                                                                                 (set-error data-state query (:errors cljs-response))
                                                                                 (set-data query (:data cljs-response))
                                                                                 (set-calling query false))))))
                                      :query      query})]

              (swap! data-state-atom assoc-in query {:data    nil
                                                     :abort   (:abort data-thing)
                                                     :promise (:promise data-thing)
                                                     :error   nil
                                                     :calling true})

              (get-in (deref data-state-atom) query)))))

