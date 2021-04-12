(ns crumborn.view.app
  (:require [crumborn.theme :refer [get-style is-dark-theme? theme-atom]]
            [crumborn.core :refer [authenticated?
                                   loading?
                                   active-page-is?
                                   debounce
                                   space->space
                                   space->dash
                                   dash->space]]
            [reagent.core :as r]
            [cljs.core.async :as async]
            [editoreable.core :refer [editor]]
            [markdown-to-hiccup.core :as m]))


(defn menu
  [{:keys [trigger-event active-page authenticated? app-state-atom]}]
  (let [goto (fn [page] (trigger-event {:name :page-selected :data {:page-id page}}))
        highlight-style (get-style [:navbar :highlight-style])]
    [:div
     [:nav {:style (get-style [:navbar :nav])}
      [:ul {:style (get-style [:navbar :ul])}
       [:div
        [:li {:on-click (fn [] (goto :resume)) :style (get-style [:navbar :li]
                                                                 {:margin-left "0px"}
                                                                 (when (= active-page :resume) highlight-style))}
         [:a {:style (get-style [:navbar :a])
              :href  "#resume"} "Resume"]]
        [:li {:on-click (fn [] (goto :posts)) :style (get-style [:navbar :li]
                                                                (when (or (= active-page :posts)
                                                                          (= active-page :post))
                                                                  highlight-style))}
         [:a {:href  "#posts"
              :style (get-style [:navbar :a])} "Posts"]]
        [:li {:on-click (fn [] (goto :portfolio)) :style (get-style [:navbar :li] (when (= active-page :portfolio)
                                                                                    highlight-style))}
         [:a {:style (get-style [:navbar :a])
              :href  "#portfolio"} "Portfolio"]]]

       [:div
        (when authenticated?
          [:li {:on-click (fn [] (goto :dashboard)) :style (get-style [:navbar :li])} "Dashboard"])

        [:li {:on-click (fn [] (trigger-event {:name :toggle-theme}))
              :style    (get-style [:navbar :li])}
         [:a {:href     "#"
              :key      "theme-mode"
              :on-click (fn [evt] (.preventDefault evt))
              :style    (get-style [:navbar :a])}
          (if (is-dark-theme?)
            "Light"
            "Dark"
            )]]
        [:li {:style (get-style [:navbar :li])}
         [:span {:title "Active visitors"}
          [:a {:tab-index "0"
               :style     (get-style [:navbar :a])} (get @app-state-atom :visitors)]]]]
       ]]
     [:hr]]))

(defn front-page
  [{:keys [page-state app-state-atom]}]
  ;; TODO
  [:div {:style {:padding-top "20px"}}
   [:p (get-in page-state [:intro])]
   [:p (get-in page-state [:about])]]
  )

(defn dashboard
  [{:keys [trigger-event]}]
  [:div
   [:h1 "Dashboard"]
   [:p {:on-click (fn [] (trigger-event {:name :page-selected :data {:page-id :create-post}}))} "Write!"]
   [:p {:on-click (fn [] (trigger-event {:name :page-selected :data {:page-id :create-post}}))} "Stats!"]
   [:p {:on-click (fn [] (trigger-event {:name :page-selected :data {:page-id :create-post}}))} "Logs!"]])

(defn resume [{:keys [trigger-event]}]
  [:div
   [:h1 {:style {:margin 0}} "Interests"]
   [:div
    ;[:span "Clojure(script)"]
    ;[:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
    ;[:span {:style {:white-space "nowrap"}} "Functional Programming"]
    ;[:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
    ;[:span "Java(script)"]
    ;[:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
    ;[:span "Python"]
    ;[:span {:style {:margin-right "10px" :margin-left "10px"}} "|"]
    ;[:span "Software design and Architecture"]
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
       [:a {:style {:color "#e81c4f"}
            :href  "http://kth.diva-portal.org/smash/record.jsf?pid=diva2:1361475" :target "_blank"} "Thesis"]
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
       [:a {:style {:color "#e81c4f"}
            :href  "http://kth.diva-portal.org/smash/record.jsf?pid=diva2:1106455" :target "_blank"} "Thesis"]
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

(defn posts [{:keys [page-state trigger-event]}]
  (let [posts (get-in page-state [:posts])]
    (if (nil? posts)
      "LOADING"
      [:table
       [:tbody
        (map (fn [{:keys [id points title date-created content author] :as p}]
               [:<> {:key id}
                [:tr
                 [:td
                  [:a {:href     (str "#posts/" (space->dash title))
                       :style    (get-style [:posts :title])
                       :on-click (fn [] (trigger-event {:name :post-selected :data {:page-id :post :slug (space->dash title)}}))}
                   ;[:h1 {:style (get-style [:posts :title-h1])}
                   title
                   ;]
                   ]]]
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
                           :on-click (fn []
                                       (trigger-event {:name :vote-down
                                                       :data {:id id}}))}
                    "▼"]
                   [:span {:style    {:cursor              "pointer"
                                      :-webkit-user-select "none"
                                      :-moz-user-select    "none"
                                      :-ms-user-select     "none"
                                      :font-size           "9pt"
                                      :color               "gray"
                                      }
                           :on-click (fn []
                                       (trigger-event {:name :vote-up
                                                       :data {:id id}}))}
                    "▲"]]
                  [:span {:style {:padding-left "10px"}} " | "]
                  [:span {:style {:padding-left "10px"}} date-created]
                  ]
                 ]
                [:tr {:style {:height "15px"}}]]) (reverse (sort-by :date-created (vals posts))))]])))

(defn portfolio-card
  [{:keys [image title text tags key links date]}]
  [:div {:key   key
         :style {:display        "flex"
                 :margin-bottom  "20px"
                 :width          "100%"
                 :flex-direction "row"}}
   [:div {:style {:display     "column"
                  :margin-left "10px"
                  :flex        1}}
    [:h2 {:style {:margin 0}} title]
    [:span date]
    [:p text]

    links

    [:div {:style {:display        "flex"
                   :align-self     "flex-end"
                   :flex-direction "row"}}
     tags]]

   [:img {:src   image
          :style {:width  "50%"
                  :height "50%"}}]
   ])

(defn portfolio
  [{:keys [trigger-event app-state-atom]}]
  (let [data [{:image "/images/conway.png"
               :key   :conway
               :date  "2021-04-08"
               :title "Conway"
               :text  "We made a couple of versions of Conway's game of life."
               :links [:div {:style {:display "flex" :flex-direction "row"}}
                       [:a {:href "https://gol.erkanp.dev/"} "Live"]
                       [:a {:style {:margin-left "10px"} :href "https://github.com/erichall/conway"} "Github"]]
               :tags  [:<>
                       [:span "#clojurescript"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#js"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#performance"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#hashlife"]]}
              {:image "/images/quadtree.png"
               :key   :quadtree
               :date  "2021-02-08"
               :title "Quadtree"
               :text  "To understand Hashlife you need to grasp the Quadtree datastructure, this is my attempt to visualise it together with Clojure."
               :links [:div {:style {:display "flex" :flex-direction "row"}}
                       [:a {:href "https://quadtree.erkanp.dev/"} "Live"]
                       [:a {:style {:margin-left "10px"} :href "https://github.com/erichall/quadtree"} "Github"]]
               :tags  [:<>
                       [:span "#clojure"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#data-structure"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#performance"]]}
              {:image "/images/text-editor.png"
               :key   :text-editor
               :date  "2021-02-01"
               :title "A text editor"
               :links [:div {:style {:display "flex" :flex-direction "row"}}
                       [:a {:href "https://editoreable.erkanp.dev/"} "Live"]
                       [:a {:style {:margin-left "10px"} :href "https://github.com/erichall/editoreable"} "Github"]]
               :text  "Built a text editor with clojurescript from raw metal and divs."
               :tags  [:<>
                       [:span "#clojurescript"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#editor"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#data"]]}
              {:image "/images/webgl-30.png"
               :key   :webgl
               :date  "2020-12-02"
               :title "WebGL with Clojure?"
               :links [:div {:style {:display "flex" :flex-direction "row"}}
                       [:a {:href "https://webgl-30.erkanp.dev/"} "Live"]
                       [:a {:style {:margin-left "10px"} :href "https://github.com/erichall/webgl-30"} "Github"]]
               :text  "Can you build stuff with WebGL and the interoperability Clojurescript offers with the JS landscape? Yes you can! This is my attempt to learn WebGL and push through it with Clojurescript."
               :tags  [:<>
                       [:span "#clojurescript"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#WebGL"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#interop"]]}
              {:image "/images/nordnet-cli.png"
               :key   :stock-trading
               :date  "2020-10-02"
               :title "Nordnet stock integration"
               :text  "Automize stock trading and buying strategy in Nordet in a fragile way."
               :links [:div {:style {:display "flex" :flex-direction "row"}}
                       [:a {:style {:margin-left "0px"} :href "https://github.com/erichall/nordnet-magic"} "Github"]]
               :tags  [:<>
                       [:span "#clojure"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#web-automation"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#stocks"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#web-api"]]}
              {:image "/images/a-homepage.png"
               :key   :crumborn
               :date  "2020-09-01"
               :title "A Homepage"
               :links [:div {:style {:display "flex" :flex-direction "row"}}
                       [:a {:href "https://erkanp.dev/"} "Live"]
                       [:a {:style {:margin-left "10px"} :href "https://github.com/erichall/crumborn"} "Github"]]
               :text  "My personal homepage frontend parts. Built, yes you guessed it, with Clojurescript. Capable of hosting a custom made blog portal and admin configurations. Almost all data is fetched through a websocket, why this complexity for a personal homepage?!"
               :tags  [:<>
                       [:span "#clojurescript"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#websocket"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#dynamic-data"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#themes"]]}
              {:image "/images/a-homepage.png"
               :key   :crumborn-backend
               :date  "2020-09-01"
               :title "Backend service for my homepage"
               :links [:div {:style {:display "flex" :flex-direction "row"}}
                       [:a {:href "https://erkanp.dev/"} "Live"]
                       [:a {:style {:margin-left "10px"} :href "https://github.com/erichall/mypage-engine"} "Github"]]
               :text  "Backend service for my homepage. Built with Clojure."
               :tags  [:<>
                       [:span "#clojure"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#oauth"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#websocket"]]}
              {:image "/images/code.png"
               :key   :nginx
               :date  "2020-09-01"
               :title "Automated Nginx banning tool"
               :links [:div {:style {:display "flex" :flex-direction "row"}}
                       [:a {:href "https://github.com/erichall/nginx-saviour"} "Github"]]
               :text  "A tool that monitors your Nginx logs for hackers and blacklist them."
               :tags  [:<>
                       [:span "#clojure"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#nginx"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#cli"]]}
              {:image "/images/thesis.png"
               :key   :thesis
               :date  "2019-11-07"
               :title "Relation Extraction on Swedish Text by the Use of Semantic Fields and Deep Multi-Channel Convolutional Neural Networks."
               :links [:div {:style {:display "flex" :flex-direction "row"}}
                       [:a {:href "http://kth.diva-portal.org/smash/record.jsf?pid=diva2%3A1361475&dswid=-3981"} "Paper"]]
               :text  "The relation extraction systems created in this thesis include deep multi-channel convolutional neural networks and Word2Vec embeddings."
               :tags  [:<>
                       [:span "#rnn"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#deep-learning"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#google-cloud"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#python"]]}
              {:image "/images/folk-rnn.png"
               :key   :rnn-folk
               :date  "2019-04-10"
               :title "We generated Swedish Folk music using LSTM and RNN. The work we did is described din the paper linked below."
               :links [:div {:style {:display "flex" :flex-direction "row"}}
                       [:a {:href "http://kth.diva-portal.org/smash/record.jsf?pid=diva2%3A1303669&dswid=1386"} "Paper"]
                       [:a {:style {:margin-left "10px"} :href "https://github.com/erichall/folk-rnn"} "Github"]]
               :text  "Extending a RNN model to generate Swedish folk music."
               :tags  [:<>
                       [:span "#rnn"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#deep-learning"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#google-cloud"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#python"]]}
              {:image "/images/fablab.png"
               :key   :fablab
               :date  "2018-05-10"
               :title "Makerspace FabLab projects"
               :text  "These projects introduced me to the art of making stuff. A few projects with to show for during my time at UIUC."
               :links [:div {:style {:display "flex" :flex-direction "row"}}
                       [:a {:href "http://cucfablab.org/author/ceh4/"} "Fablab"]]
               :tags  [:<>
                       [:span "#js"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#maker"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#production"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#3d-printing"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#fabrication"]]}
              {:image "/images/sentimental-an.png"
               :key   :reddit-uuic
               :date  "2018-04-19"
               :title "Sentiment Analysis on Reddit"
               :text  "Sentiment Analysis for the subreddit forum UUIC."
               :links [:div {:style {:display "flex" :flex-direction "row"}}
                       [:a {:href "https://github.com/erichall/UIUCSentimentFrontend"} "Github client"]
                       [:a {:style {:margin-left "10px"} :href "https://github.com/erichall/UIUCSentimentBackend"} "Github service"]
                       ]
               :tags  [:<>
                       [:span "#js"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#nlp"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#text-processing"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#python"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#docker"]]}
              {:image "/images/code.png"
               :key   :matplanen
               :date  "2018-01-19"
               :title "Matplanen"
               :text  "A iOS/Android app to plan your weekly meal by querying the unofficial ICA API for recipes. It's never published though!"
               :tags  [:<>
                       [:span {:style {:margin-left "0x" :white-space "nowrap"}} "#react-native"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#react"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#redux"]
                       [:span {:style {:margin-left "10px" :white-space "nowrap"}} "#mobile"]]}
              ]
        ]
    [:div
     (map (fn [d]
            [:div {:key   (str (:key d) "-con")
                   :style {:margin-bottom "20px"}}
             (portfolio-card d)
             [:hr]
             ]
            ) data)]
    )
  ;[:h3 "Under Construction"]
  ;[:table
  ; [:tbody
  ;  (map (fn [{:keys [title text tech date img]}]
  ;         [:<> {:key (str title text tech date img)}
  ;          [:tr {:style {:line-height 1}}
  ;           [:td {:col-span 2}
  ;            [:h1 {:style {:margin "0px"}} title]]]
  ;          [:tr {:style {:line-height 1}}
  ;           [:td
  ;            [:span {:style {:font-size "9pt" :color "gray" :margin-right "10px"}} date]
  ;            [:span {:style {:font-size "9pt" :color "gray" :margin-right "10px"}} " | "]
  ;            (map (fn [t] [:span {:key t :style {:font-size "9pt" :color "gray" :margin-right "5px"}} t]) tech)]
  ;           ]
  ;          [:tr
  ;           [:td {:col-span 2}
  ;            [:p
  ;             [:img {:src img :style {:float "right"} :float "right"}]
  ;             text
  ;             ]]]
  ;          [:tr {:style {:height "15px"}}]]
  ;         ) [
  ;            {:title "Cool projet" :text "This is a cool project that I worked on." :tech ["React" "GraphQL"] :date "2020-03-01"}
  ;            {:title "An app" :text "This is a cool project that I worked on." :tech ["React" "GraphQL"] :date "2020-03-01"}
  ;            {:title "Flight and Fly" :text "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham." :tech ["React" "GraphQL"] :date "2020-03-01" :img "https://picsum.photos/200"}
  ;            {:title "The stuff is real" :text "This is a cool project that I worked on." :tech ["React" "GraphQL"] :date "2020-03-01"}
  ;            {:title "Another homepage" :text "This is a cool project that I worked on." :tech ["React" "GraphQL"] :date "2020-03-01"}
  ;            ])]]
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
                             )} "Login"]])))

(defn create-post
  [{:keys [page-state
           trigger-event
           app-state-atom]}]
  (let [input-atom (r/atom {:settings (-> (get page-state :template)
                                          (dissoc :content)
                                          crumborn.core/map->pretty-string)
                            :content  (get-in page-state [:template :content])
                            :created? false
                            :error    nil})]
    (trigger-event {:name :subscribe
                    :data {:event-name  :post-created
                           :id          :create-post
                           :callback-fn (fn [data]
                                          (condp = (:status data)
                                            :success (r/rswap! input-atom merge {:created? true :error nil})
                                            :error (r/rswap! input-atom merge {:created? false :error (:error data)})))}})
    (fn []
      (let [maybe-settings (crumborn.core/valid-edn? (:settings @input-atom))]
        [:div {:style {:display "block" :height "100vh"}}
         [:h1 {:content-editable false} "create-post"]
         (when (:created? @input-atom)
           "Post created!!")
         (when (:error @input-atom)
           (str "error - " (:error @input-atom)))
         [:textarea {:value       (-> (deref input-atom) :settings)
                     :spell-check false
                     :style       {:background-color "lightgray"
                                   :outline          "none"
                                   :resize           "none"
                                   :width            "100%"
                                   :height           "15%"
                                   :margin-bottom    "20px"}
                     :on-change   (fn [e]
                                    (swap! input-atom assoc :settings (aget e "target" "value")))}]
         (when-not maybe-settings
           [:span {:style {:color "red"}} "Invalid edn"])
         [:textarea {:value     (-> (deref input-atom) :content)
                     :on-change (fn [e] (swap! input-atom assoc :content (aget e "target" "value")))
                     :style     {:background-color "lightgray"
                                 :outline          "none"
                                 :resize           "none"
                                 :width            "100%"
                                 :height           "30%"
                                 :margin-bottom    "10px"
                                 }}]

         [:button
          {:on-click (debounce (fn []
                                 (when maybe-settings
                                   (trigger-event {:name :create-post
                                                   :data {:post (-> maybe-settings
                                                                    (assoc :content (:content @input-atom)))}}))) 250)}
          "Create"]]))))

(defn post-info-row
  [{:keys [points author trigger-event id date-created]}]
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
             :on-click (fn []
                         (trigger-event {:name :vote-down
                                         :data {:id id}}))}
      "▼"]
     [:span {:style    {:cursor              "pointer"
                        :-webkit-user-select "none"
                        :-moz-user-select    "none"
                        :-ms-user-select     "none"
                        :font-size           "9pt"
                        :color               "gray"
                        }
             :on-click (fn []
                         (trigger-event {:name :vote-up
                                         :data {:id id}}))}
      "▲"]]
    [:span {:style {:padding-left "10px"}} " | "]
    [:span {:style {:padding-left "10px"}} date-created]
    ]
   ]
  )

(defn post
  [{:keys [page-state active-slug trigger-event]}]
  (let [slug active-slug
        error (get-in page-state [:error])
        post (get-in page-state [:post])]
    (cond
      (some? error) [:h4 error]
      (not= (dash->space slug) (:title post)) [:p "LOADING"]
      :else
      [:<>
       [:h1 {:style (get-style [:post :title])} (:title post)]
       [:table
        [:tbody
         [post-info-row {:points        (:points post)
                         :author        (:author post)
                         :trigger-event trigger-event
                         :id            (:id post)
                         :date-created  (:date-created post)}]
         ]]
       (->> (m/md->hiccup (:content post))
            m/component)
       ])))

(defn footer
  []
  (fn []
    [:div {:style {
                   :width           "100%"
                   :text-align      "center"
                   :height          "50px"
                   :flex-shrink     0
                   :display         "flex"
                   :justify-content "center"
                   :align-items     "center"
                   :flex-direction  "row"
                   }}
     [:span {:on-click (fn [] (let [anim (js/document.getElementById "dot")]
                                (.beginElement anim)))
             :style    {:margin-right "5px"
                        :cursor       "pointer"
                        :user-select  "none"}}
      "e"]
     [:svg {:height "50px" :width "60px"}
      [:circle {:id    "rect"
                :cx    10
                :cy    26
                :r     3
                :style {:background "black"}}
       [:animate {:id            "dot"
                  :attributeName "cy"
                  :from          26
                  :to            15
                  :values        "26; 20; 18; 15"
                  :keyTimes      "0; 0.5; 0.8; 1"
                  :dur           "1s"
                  }]]]]))

(defn header
  [{:keys [trigger-event title]}]
  [:div {:on-click (fn [] (trigger-event {:name :page-selected :data {:page-id :front-page}}))
         :style    {:cursor "pointer"}}
   [:h1 {:style (get-style [:title])}
    title]])

(defn success-icon
  []
  [:svg {:width "24px" :height "24px" :viewBox "0 0 24 24"}
   [:circle {:cx 12 :cy 12 :r 10 :fill "none" :stroke "green" :stroke-width "2px"}]
   [:path {:fill         "none"
           :stroke-width "2px"
           :stroke       "green"
           :d            "M6,11 L11,16 16,7"}]])

;; excellent
;; https://www.sarasoueidan.com/blog/svg-coordinate-systems/
(defn notification
  []
  (let [local-state-atom (r/atom {:dismissed   false
                                  :initialized false})]
    (fn [{:keys [title message]}]
      (let [local-state @local-state-atom
            initialized (:initialized local-state)]
        (println local-state initialized)
        (when-not (:dismissed local-state)
          [:div {:style {:width           (if initialized "250px" "0px")
                         :overflow        "hidden"
                         :transition      "width .5s"
                         :background      "#cecece"
                         :opacity         0.8
                         :margin-right    "20px"
                         :margin-bottom   "10px"
                         :padding         "10px"
                         :border-radius   "3px"
                         :display         "flex"
                         :align-items     "center"
                         :justify-content "space-between"}}
           [success-icon]
           [:div {:style {:display        "flex"
                          :flex           1
                          :margin-left    "5px"
                          :margin-right   "5px"
                          :flex-direction "column"}}
            [:h4 {:style {:margin 0}} title]
            [:span message]]
           [:span {:on-click (fn []
                               (reset! local-state-atom {:dismissed true})
                               )
                   :style    {:cursor "pointer"}} "x"]
           (when-not initialized
             (js/setTimeout (fn [] (r/rswap! local-state-atom assoc :initialized true)) 1)
             )])))))

(defn notifications
  [{:keys [trigger-event]}]
  (let [notifications-atom (r/atom [])
        remove-notification (fn [notification-id]
                              (js/setTimeout (fn []
                                               (reset! notifications-atom (filter (fn [{:keys [id]}]
                                                                                    (not= notification-id id))
                                                                                  @notifications-atom))
                                               ) 10000))]
    (trigger-event {:name :subscribe
                    :data {:event-name  :notification
                           :id          :notifications
                           :callback-fn (fn [notification]
                                          (r/rswap! notifications-atom conj notification)
                                          (remove-notification (:id notification)))}})
    (fn []
      (let [local-state @notifications-atom]
        [:div {:style {:width "0px"}}]
        [:div
         {:style {:display        "flex"
                  :flex-direction "column"
                  :position       "absolute"
                  :margin         "20px"
                  :right          0
                  :top            0
                  }}
         (if (empty? local-state)
           [:div {:width "auto"}]
           (map-indexed (fn [idx {:keys [title message id]}]
                          [notification {:title   title
                                         :message message
                                         :key     (str id "-" idx)
                                         }]) @notifications-atom)
           )
         ]
        )
      )))

(defn app-component
  [{:keys [app-state-atom trigger-event theme pages]}]
  (if (loading? @app-state-atom)
    [:h1 "Spinning"]
    [:<>
     [header {:trigger-event  trigger-event
              :app-state-atom app-state-atom
              :title          (get-in @app-state-atom [:misc :header :title])}]
     [notifications {:trigger-event trigger-event}]
     [menu {:trigger-event  trigger-event
            :app-state-atom app-state-atom
            :visitors       (:visitors @app-state-atom)
            :active-page    (:active-page @app-state-atom)
            :authenticated? (authenticated? @app-state-atom)}]
     [:div {:style {:flex 1}}
      [(get-in pages [(:active-page @app-state-atom) :view]) {:page-state     (get-in @app-state-atom [:pages (:active-page @app-state-atom)])
                                                              :app-state-atom app-state-atom
                                                              :trigger-event  trigger-event
                                                              :theme          theme
                                                              :active-page    (:active-page @app-state-atom)
                                                              :active-slug    (:active-slug @app-state-atom)}]]
     [footer]
     ])
  )
