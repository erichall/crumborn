(ns crumborn.data-adapter
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.ratom :as ratom]
            [clojure.spec.alpha :as s]
            [cljs.core.async :refer [<! >! chan go-loop pub]]
            [clojure.edn :as edn]))

(defn clj->json
  [ds]
  (.stringify js/JSON (clj->js ds)))

(defn json->cljs
  [data]
  (js->clj data :keywordize-keys true))

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

(defn get-ready-state [channel] (aget channel "readyState"))
(defn socket-is-open? [channel] (= (get-ready-state channel) 1))
(defn get-data-from-js [js-msg] (.-data js-msg))

(defn receive-msg
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
  [url trigger-event channel-atom]
  (let [channel-id (:id (deref channel-atom))]
    (if-let [chan (js/WebSocket. (str url "?id=" channel-id))]
      (do
        (set! (.-onmessage chan) (receive-msg trigger-event))
        (trigger-event {:name :channel-initialized :data {:channel chan}})

        (js/console.log " Websocket established")

        )
      (throw (js/Error. " Unable to establish websocket ")))))
