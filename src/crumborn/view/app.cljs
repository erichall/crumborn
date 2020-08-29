(ns crumborn.view.app
  (:require [crumborn.theme :refer [get-style is-dark-theme? theme-atom]]
            [reagent.core :as r]))

(defn front-page
  [{:keys [trigger-event app-state]}]
  (let [goto (fn [page] (trigger-event {:name :page-selected :data {:page page :slug nil}}))]
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
      [:nav {:style (get-style [:navbar :nav])}

       [:ul {:style (get-style [:navbar :ul])}
        [:li {:on-click (fn [] (goto :front-page)) :style (get-style [:navbar :li])} "Home"]
        [:li {:on-click (fn [] (goto :about-me)) :style (get-style [:navbar :li])} "About"]
        [:li {:on-click (fn [] (goto :resume)) :style (get-style [:navbar :li])} "Resume"]
        [:li {:on-click (fn [] (goto :posts)) :style (get-style [:navbar :li])} "Posts"]
        [:li {:on-click (fn [] (goto :portfolio)) :style (get-style [:navbar :li])} "Portfolio"]]

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

       ]
      ]
     ])
  )

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
    [:div
     [:h1 "posts"]
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
