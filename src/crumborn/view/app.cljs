(ns crumborn.view.app
  (:require [crumborn.theme :refer [get-style is-dark-theme? theme-atom]]
            [crumborn.core :refer [authenticated? loading?]]
            [reagent.core :as r]))

(defn menu
  [{:keys [trigger-event app-state]}]
  (let [goto (fn [page] (trigger-event {:name :page-selected :data {:page page :slug nil}}))]
    [:div
     [:h1 {:style (get-style [:title])}
      (get-in app-state [:data :state :content :header :title])]
     [:h3 {:style (get-style [:subtitle])}
      (get-in app-state [:data :state :content :header :subtitle])
      ]
     [:nav {:style (get-style [:navbar :nav])}
      [:ul {:style (get-style [:navbar :ul])}
       [:li {:on-click (fn [] (goto :front-page)) :style (assoc (get-style [:navbar :li]) :margin-left "0px")} "Home"]
       [:li {:on-click (fn [] (goto :about-me)) :style (get-style [:navbar :li])} "About"]
       [:li {:on-click (fn [] (goto :resume)) :style (get-style [:navbar :li])} "Resume"]
       [:li {:on-click (fn [] (goto :posts)) :style (get-style [:navbar :li])} "Posts"]
       [:li {:on-click (fn [] (goto :portfolio)) :style (get-style [:navbar :li])} "Portfolio"]

       (when (authenticated? app-state)
         [:li {:on-click (fn [] (goto :create-post)) :style (assoc (get-style [:navbar :li]) :float "right")} "Post"])

       [:li {:on-click (fn [] (trigger-event {:name :toggle-theme}))
             :style    (assoc (get-style [:navbar :li]) :float "right")}
        (if (is-dark-theme?)
          "Light"
          "Dark"
          )]]]
     [:hr]]
    )
  )

(defn front-page
  [{:keys [trigger-event app-state]}]
  [:div
   [:h1 {:style {:color (get-style [:font-color])}}
    (get-in app-state [:data :state :content :front-page :text])]
   [:button {:on-click (fn []
                         (trigger-event {:name :toggle-theme})
                         )}
    (if (is-dark-theme?)
      "Light"
      "Dark"
      )
    ]

   [:svg {:width 100 :height 100}
    [:path {:d "M0,50, a1, 1 0 0, 0 100 0" :fill "black"}]
    ]

   [:div
    {:style {:display        "flex"
             :flex-direction "row"}}
    [:div {:style {:display        "flex"
                   :flex-direction "column"
                   :align-self     "center"
                   :margin-right   "20px"}}
     [:span {:style    {:cursor "pointer"}
             :on-click (fn []
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

    [:button {:on-click (fn []
                          (trigger-event {:name :publish-message :data {:thisis "the-data"}})
                          )} "Publish!"]

    ]
   ])

(defn resume [{:keys [trigger-event]}]
  [:div
   [:h1 "resume"]
   [:button {:on-click (fn [])}
    "mutate!"]
   ])

(defn about-me
  [{:keys [trigger-event state]}]
  (let [input-atom (r/atom "")]
    (fn []
      (let [
            ]
        [:div
         [:button {:on-click (fn [e])}
          "SUBSCRIBE"]
         [:div
          [:input {
                   :value     (deref input-atom)
                   :on-change (fn [e] (reset! input-atom (aget e "target" "value")))
                   }]
          [:button {:on-click (fn [])}
           "mutate!"]
          ]
         ]
        )))
  )

(defn posts [{:keys [app-state trigger-event]}]
  (if (some? (:active-slug app-state))
    [:h1 "THE POST ----------  " (:active-slug app-state)]
    [:table
     [:tbody
      (map-indexed (fn [index {:keys [id points title created content]}]
                     [:<> {:key id}
                      [:tr {:style {:line-height 1}}
                       [:td {:valign "center"} (str index ".")]
                       [:td {:style {:padding "0px"}}
                        [:div {:style {:display "flex" :flex-direction "column" :align-items "center"}}
                         [:span {:style    {:cursor "pointer"}
                                 :on-click (fn []
                                             (trigger-event {:name :vote-up :data {:event-name :vote-up
                                                                                   :data       {:id id}}})
                                             )}
                          "▲"]

                         ]
                        ]
                       [:td [:span {:style {:font-size "11pt"}} title]]]
                      [:tr {:style {:line-height 1 :padding-bottom "10px"}}
                       [:td]
                       [:td
                        [:span {:style    {:cursor "pointer"}
                                :on-click (fn []
                                            (trigger-event {:name :vote-up :data {:event-name :vote-up
                                                                                  :data       {:id id}}})
                                            )}
                         "▼"]
                        ]
                       [:td {:style {:font-size "9pt" :color "gray"}} (str points " Points")]]
                      [:tr {:style {:height "10px"}}]]
                     ) [
                        {:points 2 :title "How is it to work as a developer" :created "2020-02-03" :content "boboo" :id "the-id"}
                        {:points 10 :title "When consulting fails" :created "2020-04-03" :content "To be or not to be in here" :id "a-id"}
                        {:points -20 :title "Are we there yet?" :created "2020-05-03" :content "What can we do about stuff" :id "cool-id"}
                        ])]
     ]))

(defn portfolio [] [:h1 "portfolio"])
(defn login
  [{:keys [trigger-event]}]
  (let [input-atom (r/atom {:username ""
                            :password ""})]
    (fn []
      [:div
       [:h1 "login"]
       [:input {
                :placeholder "username"
                :value       (:username (deref input-atom))
                :on-change   (fn [e] (swap! input-atom assoc-in [:username] (aget e "target" "value")))
                }]
       [:br]
       [:input {
                :placeholder "password"
                :type        "password"
                :value       (:password (deref input-atom))
                :on-change   (fn [e] (swap! input-atom assoc-in [:password] (aget e "target" "value")))
                }]
       [:br]
       [:button {:on-click (fn []
                             (trigger-event {:name :login :data (deref input-atom)})
                             )} "Login"]

       ])))

(defn create-post
  [{:keys [app-state trigger-event]}]
  (let [input-atom (r/atom "")]
    (fn []
      [:div
       [:h1 "create-post"]
       [:textarea {:value     (deref input-atom)
                   :style     {:background-color "lightgray"
                               :height           "350px"
                               :width            "100%"}
                   :on-change (fn [e] (reset! input-atom (aget e "target" "value")))}]

       [:button {:on-click (fn [] (trigger-event {:name :create-post
                                                  :data {:post-content (deref input-atom)}}))} "Create"]

       ]))
  )

(defn unauthorized
  [{:keys [app-state trigger-event]}]
  [:h2 "Unauthorized - 403"])

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
    :unauthorized unauthorized

    ; default
    front-page))

(defn app-component
  [{:keys [app-state trigger-event theme]}]
  [:div {:style {:height "calc(100vh - 4em - 3.4em)"}}
   (if (loading? app-state)
     [:h1 "Spinning"]
     [:<>
      [menu {:app-state     app-state
             :trigger-event trigger-event
             :theme         theme}]
      [(get-page app-state) {:app-state     app-state
                             :trigger-event trigger-event
                             :theme         theme}]])])
