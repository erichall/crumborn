(ns crumborn.websocket
  (:require [taoensso.timbre :as log]
            [clojure.edn :as edn]))

(defn get-ready-state [channel] (aget channel "readyState"))
(defn- ready-state [channel n] (= (get-ready-state channel) n))

(defn socket-is-connecting? [channel] (ready-state channel 0))
(defn socket-is-open? [channel] (ready-state channel 1))
(defn socket-is-closing? [channel] (ready-state channel 2))
(defn socket-is-closed? [channel] (ready-state channel 3))

(defn receive-msg
  "Receive and trigger event from the websocket."
  [trigger-event]
  (fn [msg]
    (trigger-event
      {:name :channel-received-msg
       :data (edn/read-string (.-data msg))})))

(defn send-msg!
  "Send message through the websocket, assoc an id to the data."
  [{:keys [channel id]} msg]
  (if (socket-is-open? channel)
    (.send channel (assoc msg :id id))
    (throw (js/Error. "Socket is not open"))))

(defn on-open [data channel] nil)
(defn on-close [] (log/debug "Close!"))
(defn on-error [] (log/debug "Error!"))

(defn make-websocket!
  "Create a websocket with url, triggers event on messages"
  [url trigger-event]
  (if-let [chan (js/WebSocket. url)]
    (do
      (set! (.-onmessage chan) (receive-msg trigger-event))
      (set! (.-onopen chan) on-open)
      (set! (.-onclose chan) on-close)
      (set! (.-onerror chan) on-error)

      (trigger-event {:name :channel-initialized :data {:channel chan}})
      (log/debug " Websocket established"))
    (throw (js/Error. " Unable to establish websocket "))))
