(ns crumborn.view.app
  (:require [crumborn.theme :refer [get-style is-dark-theme? theme-atom]]
            [crumborn.core :refer [authenticated? loading? active-page-is?]]
            [reagent.core :as r]))

(defn menu
  [{:keys [trigger-event app-state]}]
  (let [goto (fn [page] (trigger-event {:name :page-selected :data {:page page :slug nil}}))
        highlight-style {:border-bottom "1px solid black"}]
    [:div
     [:div {:on-click (fn [] (goto :front-page))
            :style    {:cursor "pointer"}}
      [:h1 {:style (get-style [:title])}
       (get-in app-state [:data :state :content :header :title])]]
     [:nav {:style (get-style [:navbar :nav])}
      [:ul {:style (get-style [:navbar :ul])}
       [:li {:on-click (fn [] (goto :resume)) :style (get-style [:navbar :li] {:margin-left "0px"} (when (active-page-is? app-state :resume) highlight-style))}
        "Resume"]
       [:li {:on-click (fn [] (goto :posts)) :style (get-style [:navbar :li] (when (active-page-is? app-state :posts) highlight-style))}
        "Posts"]
       [:li {:on-click (fn [] (goto :portfolio)) :style (get-style [:navbar :li] (when (active-page-is? app-state :portfolio) highlight-style))}
        "Portfolio"]

       (when (authenticated? app-state)
         [:li {:on-click (fn [] (goto :create-post)) :style (assoc (get-style [:navbar :li]) :float "right")} "Post"])

       [:li {:on-click (fn [] (trigger-event {:name :toggle-theme}))
             :style    (assoc (get-style [:navbar :li]) :float "right")}
        (if (is-dark-theme?)
          "Light"
          "Dark"
          )]]]
     [:hr {:style {:margin-bottom "30px"}}]]))

(defn front-page
  [{:keys [trigger-event app-state]}]
  [:div {:style {:padding-top "20px"}}
   [:p (get-in app-state [:data :state :content :front-page :intro])]
   [:p (get-in app-state [:data :state :content :front-page :about])]
   ])

(defn dashboard
  [{:keys [trigger-event app-state]}]
  [:div
   [:h1 "Dashboard"]
   [:p {:on-click (trigger-event {:name :page-selected :data {:page :create-post}})} "Write!"]]
  )

(defn resume [{:keys [trigger-event]}]
  [:div
   [:h1 {:style {:margin 0}} "Interests"]
   [:div
    [:span "Clojure(script)"]
    [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
    [:span {:style {:white-space "nowrap"}} "Functional Programming"]
    [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
    [:span "Java(script)"]
    [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
    [:span "Python"]
    [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
    [:span "Software design and Architecture"]
    ]

   [:h1 {:style {:margin-bottom 0}} "Education"]
   [:table
    [:tbody
     [:tr
      [:td
       [:h3 {:style {:margin 0 :line-height 1}} "Master in Computer Science"]]]
     [:tr
      [:td {:style {:font-size "9pt" :color "gray"}}
       [:span "2017-2019"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Royal Institute of Technology"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Major in Data Sciences, Natural Languages"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:a {:href "http://kth.diva-portal.org/smash/record.jsf?pid=diva2:1361475" :target "_blank"} "Thesis"]
       ]]
     [:tr
      [:td
       [:h3 {:style {:margin 0 :line-height 1}} "Exchange semester"]]]
     [:tr
      [:td {:style {:font-size "9pt" :color "gray"}}
       [:span "2018"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Univesity of Illinois Urbana Champaign"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Department of Computer Science"]]]
     [:tr
      [:td
       [:h3 {:style {:margin 0 :line-height 1}} "Bachelor degree in Computer Science"]]]
     [:tr
      [:td {:style {:font-size "9pt" :color "gray"}}
       [:span "2014 – 2017"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Royal Institute of Technology"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:a {:href "http://kth.diva-portal.org/smash/record.jsf?pid=diva2:1106455" :target "_blank"} "Thesis"]
       ]]

     [:tr
      [:td
       [:h3 {:style {:margin 0 :line-height 1}} "Technical Preparatory Year"]]]
     [:tr
      [:td {:style {:font-size "9pt" :color "gray"}}
       [:span "2013 - 2014"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Royal Institute of Technology"]
       ]]

     [:tr
      [:td
       [:h3 {:style {:margin 0 :line-height 1}} "Courses part of Science in Social Work Bachelor"]]]
     [:tr
      [:td {:style {:font-size "9pt" :color "gray"}}
       [:span "2012 - 2013"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Karlstad University"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Courses: Social Work as Subject, Society Structure and Politics, Social law"]
       ]]
     ]]

   [:h1 {:style {:margin-bottom 0}} "Experience"]
   [:table
    [:tbody
     [:tr
      [:td
       [:h3 {:style {:margin 0 :line-height 1}} "TietoEvry"]]]
     [:tr
      [:td {:style {:font-size "9pt" :color "gray"}}
       [:span "2019 - Now"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Software engineer"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Stockholm"]
       ]]

     [:tr
      [:td
       [:h3 {:style {:margin 0 :line-height 1}} "Nordnet"]]]
     [:tr
      [:td {:style {:font-size "9pt" :color "gray"}}
       [:span "2018-2019"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "React Native"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Stockholm"]
       ]]

     [:tr
      [:td
       [:h3 {:style {:margin 0 :line-height 1}} "Digpro"]]]
     [:tr
      [:td {:style {:font-size "9pt" :color "gray"}}
       [:span "2017-2018"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Java developer"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Stockholm"]
       ]]

     [:tr
      [:td
       [:h3 {:style {:margin 0 :line-height 1}} "Futurice"]]]
     [:tr
      [:td {:style {:font-size "9pt" :color "gray"}}
       [:span "2016-2017"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "React Native, iOS Developer"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Stockholm"]
       ]]

     [:tr
      [:td
       [:h3 {:style {:margin 0 :line-height 1}} "ICA"]]]
     [:tr
      [:td {:style {:font-size "9pt" :color "gray"}}
       [:span "2010 - 2018"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Perishable food sales"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Stockholm"]
       ]]

     [:tr
      [:td
       [:h3 {:style {:margin 0 :line-height 1}} "The Swedish Armed Forces"]]]
     [:tr
      [:td {:style {:font-size "9pt" :color "gray"}}
       [:span "2011 - 2018"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Part-time"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Boden"]
       ]]

     [:tr
      [:td
       [:h3 {:style {:margin 0 :line-height 1}} "The Swedish Armed Forces"]]]
     [:tr
      [:td {:style {:font-size "9pt" :color "gray"}}
       [:span "2009 - 2010"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Military Service"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Boden"]
       ]]
     ]]

   [:h1 {:style {:margin-bottom 0}} "Other"]
   [:table
    [:tbody
     [:tr
      [:td
       [:h3 {:style {:margin 0 :line-height 1}} "Conference paper"]]]
     [:tr
      [:td {:style {:font-size "9pt" :color "gray"}}
       [:span "2019"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Use Neural Networks to generate Swedish Folk Music."]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "KTH"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "The 16th Sound & Music Computing Conference, Malaga, Spain, 28-31 May 2019"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:a {:href "http://kth.diva-portal.org/smash/record.jsf?pid=diva2:1303669" :target "_blank"} "Paper"]
       ]]

     [:tr
      [:td
       [:h3 {:style {:margin 0 :line-height 1}} "Hack Illinois"]]]
     [:tr
      [:td {:style {:font-size "9pt" :color "gray"}}
       [:span "2018"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Univesity of Illinois"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Rustbridge project"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Rust"]
       ]]

     [:tr
      [:td
       [:h3 {:style {:margin 0 :line-height 1}} "Hackathon"]]]
     [:tr
      [:td {:style {:font-size "9pt" :color "gray"}}
       [:span "2017"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Spotify - DevX"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Music voting service"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Javascript"]
       ]]

     [:tr
      [:td
       [:h3 {:style {:margin 0 :line-height 1}} "Hackathon"]]]
     [:tr
      [:td {:style {:font-size "9pt" :color "gray"}}
       [:span "2015"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Spotify - Unify"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "NFC tag service to get playlists"]
       ]]

     [:tr
      [:td
       [:h3 {:style {:margin 0 :line-height 1}} "KTH Reception"]]]
     [:tr
      [:td {:style {:font-size "9pt" :color "gray"}}
       [:span "2015"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Computer Science Chapter"]
       [:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
       [:span "Introduction new students to KTH Computer Science chapter"]
       ]]
     ]]
   ])

(defn posts [{:keys [app-state trigger-event]}]
  [:table
   [:tbody
    (map (fn [{:keys [id points title created content author]}]
           [:<> {:key id}
            [:tr {:style {:line-height 1}}
             [:td [:h1 {:style    {:margin "0px"
                                   :cursor "pointer"}
                        :on-click (fn [] (trigger-event {:name :post-selected :data {:slug id}}))
                        } title]]]
            [:tr {:style {:line-height 1 :padding-bottom "10px"}}
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
            [:tr {:style {:height "25px"}}]]
           ) (vals (get-in app-state [:data :state :posts])))]
   ])

(defn portfolio
  [{:keys [app-state trigger-event]}]
  [:table
   [:tbody
    (map (fn [{:keys [title text tech date img]}]
           [:<> {:key (str title text tech date img)}
            [:tr {:style {:line-height 1}}
             [:td {:col-span 2}
              [:h1 {:style {:margin "0px"}} title]]]
            [:tr {:style {:line-height 1}}
             [:td
              [:span {:style {:font-size "9pt" :color "gray" :margin-right "10px"}} date]
              [:span {:style {:font-size "9pt" :color "gray" :margin-right "10px"}} " | "]
              (map (fn [t] [:span {:key t :style {:font-size "9pt" :color "gray" :margin-right "5px"}} t]) tech)]
             ]
            [:tr
             [:td {:col-span 2}
              [:p
               [:img {:src img :style {:float "right"} :float "right"}]
               text
               ]]]
            [:tr {:style {:height "30px"}}]]
           ) [
              {:title "Cool projet" :text "This is a cool project that I worked on." :tech ["React" "GraphQL"] :date "2020-03-01"}
              {:title "An app" :text "This is a cool project that I worked on." :tech ["React" "GraphQL"] :date "2020-03-01"}
              {:title "Flight and Fly" :text "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham." :tech ["React" "GraphQL"] :date "2020-03-01" :img "https://picsum.photos/200"}
              {:title "The stuff is real" :text "This is a cool project that I worked on." :tech ["React" "GraphQL"] :date "2020-03-01"}
              {:title "Another homepage" :text "This is a cool project that I worked on." :tech ["React" "GraphQL"] :date "2020-03-01"}
              ])
    ]
   ]

  )

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
      :posts posts
      :portfolio portfolio
      :login login
      :create-post create-post
      :dashboard dashboard
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
