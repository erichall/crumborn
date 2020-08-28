(ns crumborn.view.app
  (:require [crumborn.theme :refer [get-style is-dark-theme? theme-atom]]
            [reagent.core :as r]
            [crumborn.data-adapter :refer [gql-query get-data]]))

(defn front-page
  [{:keys [trigger-event app-state]}]
  [:div
   (println " THE APP STATE " app-state)
   [:h1 {:style {:color (get-style [:font-color])}} (get-in app-state [:data :state :content :front-page :text])]
   [:button {:on-click (fn []
                         (trigger-event {:name :toggle-theme})
                         )}
    (if (is-dark-theme?)
      "Light"
      "Dark"
      )
    ]

   [:div
    (map (fn [p]
           [:button {:key      p
                     :on-click (fn [] (trigger-event {:name :page-selected :data {:page p :slug nil}}))}
            "Goto page - " (name p)]) [:front-page :about-me :resume :posts :portfolio :login :create-post])

    [:div
     {:style {:display        "flex"
              :flex-direction "row"}}
     [:div {:style {:display        "flex"
                    :flex-direction "column"
                    :align-self     "center"
                    :margin-right   "20px"}}
      [:span {:style    {:cursor "pointer"}
              :on-click (fn []
                          (println "STATE :: " app-state)
                          (trigger-event {:name :vote-up :data {:event-name :vote-up
                                                                :data       {:id (get-in app-state [:data :state :posts :abcde :id])}}})
                          )}
       "▲"]
      [:span {:style    {:cursor "pointer"}
              :on-click (fn []
                          (trigger-event {:name :vote-down :data {:event-name :vote-down
                                                                  :data       {:id (get-in app-state [:data :state :posts :abcde :id])}}})
                          )} "▼"]
      ]
     [:h2 {:style {:margin-right "20px"}}
      (get-in app-state [:data :state :posts :abcde :votes])
      ]
     [:h2 (get-in app-state [:data :state :posts :abcde :title])]

     ]
    ]
   ]
  )

(defn resume [{:keys [trigger-event]}]
  [:div
   [:h1 "resume"]
   [:button {:on-click (fn []
                         (let [a (gql-query {:mutation [:change_logs
                                                        {:severity "SEV_CLIENT"
                                                         :message  "resmue msg"}
                                                        [:message]]})]
                           )
                         )}
    "mutate!"]
   ])

(defn about-me
  [{:keys [trigger-event state]}]
  (let [input-atom (r/atom "")]
    (fn []
      (let [
            logs-state (gql-query {:query [:logs [:message :severity]]})
            message (get-in logs-state [:data :logs :message])
            subscription-query {:subscription [:logs {:severity "FROM CLIENT ARGS"}
                                               [:message :severity]]}
            ]
        [:div
         [:h2 (str logs-state)]
         [:h3 (get-data subscription-query)]
         [:h1 message]
         [:button {:on-click (fn [e]
                               (trigger-event {:name :send-msg
                                               :data {:name  :subscription
                                                      :query subscription-query}})
                               )}
          "SUBSCRIBE"]
         [:div
          [:input {
                   :value     (deref input-atom)
                   :on-change (fn [e] (reset! input-atom (aget e "target" "value")))
                   }]
          [:button {:on-click (fn []
                                (let [a (gql-query {:mutation [:change_logs
                                                               {:severity "SEV_CLIENT"
                                                                :message  (deref input-atom)}
                                                               [:message]]})]
                                  )
                                )}
           "mutate!"]
          ]
         ]
        )))
  )

(defn posts [{:keys [app-state trigger-event]}]
  (if (some? (:active-slug app-state))
    [:h1 "THE POST ----------  " (:active-slug app-state)]
    [:div
     [:h1 "posts"]
     [:p {:on-click (fn [] (trigger-event {:name :page-selected :data {:page :posts :slug "post 1"}}))} "post 1"]
     [:p {:on-click (fn [] (trigger-event {:name :page-selected :data {:page :posts :slug "post 2"}}))} "post 2"]
     [:p {:on-click (fn [] (trigger-event {:name :page-selected :data {:page :posts :slug "post 3"}}))} "post 3"]
     [:p {:on-click (fn [] (trigger-event {:name :page-selected :data {:page :posts :slug "post 4"}}))} "post 4"]
     [:p {:on-click (fn [] (trigger-event {:name :page-selected :data {:page :posts :slug "post 5"}}))} "post 5"]
     ]))

(defn portfolio [] [:h1 "portfolio"])
(defn login [] [:h1 "login"])
(defn create-post [] [:h1 "create-post"])

(defn get-page
  [{:keys [active-page]}]

  (case active-page
    :front-page front-page
    :resume resume
    :about-me about-me
    :posts posts
    :portfolio portfolio
    :login login
    :create-post create-post

    ; default
    front-page))

(defn app-component
  [{:keys [app-state trigger-event theme]}]
  [:div {:style {:height "calc(100vh - 4em - 3.4em)"}}
   [:button {:on-click (fn [] (trigger-event {:name :page-selected :data :front-page}))} "home"]
   [(get-page app-state) {:app-state     app-state
                          :trigger-event trigger-event
                          :theme         theme}]
   ])

;(execute a-schema "mutation { change_logs (severity:\"DUDE sev\", message: \"MUTATED\") {message}}" nil nil)
;(send-msg! (parse-gql-query [:logs {:severity "debug"} [:message :severity]])
;{:keys [calling data]} (gql-query [:aboutme [:name :age :location]])
;list-data-thing (gql-query [:aboutme_list [:key :value]])
;"  subscription { logs (severity: \"debug\") { message severity}}"
;" {subscription {logs (severity:\"debug\") {message severity}}}"
;s (gql-query [:subscription [:logs {:severity "debug"} [:message :severity]]])
;s (gql-query [:logs [:message :severity]])