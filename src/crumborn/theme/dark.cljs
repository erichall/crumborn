(ns crumborn.theme.dark)


(def theme {
            :id               :dark
            :main-color       "black"
            :background-color "black"

            :font-color       "white"
            :color            "white"

            :title            {:color  "white"
                               :cursor "pointer"
                               }

            :navbar           {:highlight-style {:border-bottom "1px solid white"}
                               :nav             {:width           "100%"
                                                 :display         "flex"
                                                 :justify-content "space-between"
                                                 }
                               :ul              {:margin      0
                                                 :padding     0
                                                 :list-style  "none"
                                                 :line-height "33px"
                                                 :flex        1}
                               :li              {:display             "inline-block"
                                                 :margin              "0 10px"
                                                 :color               "white"
                                                 :cursor              "pointer"
                                                 :-webkit-user-select "none"
                                                 :-moz-user-select    "none"
                                                 :-ms-user-select     "none"
                                                 }
                               :a               {:color           "white"
                                                 :text-decoration "none"}
                               }
            :posts            {:title    {:margin          "0px"
                                          :text-decoration "none"}
                               :title-h1 {:color "white"}}
            })