(ns crumborn.view.app
  (:require [crumborn.theme :refer [get-style is-dark-theme? theme-atom]]
            [crumborn.core :refer [authenticated? loading?]]
            [reagent.core :as r]))

(defn menu
  [{:keys [trigger-event app-state]}]
  (let [goto (fn [page] (trigger-event {:name :page-selected :data {:page page :slug nil}}))]
    [:div
     [:div {:on-click (fn [] (goto :front-page))
            :style    {:cursor "pointer"}}
      [:h1 {:style (get-style [:title])}
       (get-in app-state [:data :state :content :header :title])]]
     [:nav {:style (get-style [:navbar :nav])}
      [:ul {:style (get-style [:navbar :ul])}
       [:li {:on-click (fn [] (goto :resume)) :style (assoc (get-style [:navbar :li]) :margin-left "0px")} "Resume"]
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
  [:div {:style {:padding-top "20px"}}
   [:p (get-in app-state [:data :state :content :front-page :intro])]
   [:p (get-in app-state [:data :state :content :front-page :about])]
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
    [:table {:style {:padding-top "30px"}}
     [:tbody
      (map (fn [{:keys [id points title created content author]}]
             [:<> {:key id}
              [:tr {:style {:line-height 1}}
               [:td]
               [:td [:h2 {:style    {:margin "0px"
                                     :cursor "pointer"}
                          :on-click (fn [] (trigger-event {:name :post-selected :data {:slug id}}))
                          } title]]]
              [:tr {:style {:line-height 1 :padding-bottom "10px"}}
               [:td]
               [:td {:style {:font-size "9pt" :color "gray"}}
                [:span (str points " Points by " author)]

                [:span {:style {:padding-left "10px"}} " | "]
                [:span {:style {:padding-left "10px" :padding-right "10px"}}
                 [:span {:style    {:cursor              "pointer"
                                    :font-size           "9pt"
                                    :color               "gray"
                                    :-webkit-user-select "none"
                                    :-moz-user-select    "none"
                                    :-ms-user-select     "none"
                                    }
                         :on-click (fn [] (trigger-event {:name :vote-up :data {:event-name :vote-down
                                                                                :data       {:id id}}}))}
                  "▼"]
                 [:span {:style    {:cursor              "pointer"
                                    :-webkit-user-select "none"
                                    :-moz-user-select    "none"
                                    :-ms-user-select     "none"
                                    :font-size           "9pt"
                                    :color               "gray"
                                    }
                         :on-click (fn []
                                     (trigger-event {:name :vote-up :data {:event-name :vote-up
                                                                           :data       {:id id}}}))}
                  "▲"]]
                [:span {:style {:padding-left "10px"}} " | "]
                [:span {:style {:padding-left "10px"}} created]
                ]
               ]
              [:tr {:style {:height "10px"}}]]
             ) (vals (get-in app-state [:data :state :posts])))]
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

(defn post
  [{:keys [app-state]}]
  (let [slug (:active-slug app-state)
        post (get-in app-state [:data :state :posts slug])] ;; TODO handle when we don't have the post in the state?
    [:h1 (:title post)]
    )

  )

(defn unauthorized
  [{:keys [app-state trigger-event]}]
  [:h2 "Unauthorized - 403"])

(defn get-page
  [{:keys [active-page active-slug]}]

  (if (some? active-slug)
    post
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
      front-page)))

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
