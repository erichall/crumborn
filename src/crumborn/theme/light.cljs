(ns crumborn.theme.light)


(def theme {
            :id               :light
            :main-color       "white"
            :background-color "white"

            :font-color       "black"

            :title            {:color  "black"
                               :cursor "pointer"}

            :navbar           {:highlight-style {:border-bottom "1px solid black"}
                               :nav             {:width           "100%"
                                                 :display         "flex"
                                                 :justify-content "space-between"}
                               :ul              {:margin      0
                                                 :padding     0
                                                 :list-style  "none"
                                                 :line-height "33px"
                                                 :flex        1}
                               :li              {:display             "inline-block"
                                                 :margin              "0 10px"
                                                 :cursor              "pointer"
                                                 :-webkit-user-select "none"
                                                 :-moz-user-select    "none"
                                                 :-ms-user-select     "none"
                                                 }
                               :a               {:color           "black"
                                                 :text-decoration "none"}
                               }
            :post             {:title           {:font-size   11
                                                 :line-height 14}
                               :title-container {:display "flex" :flex-direction "row"}}
            :posts            {:title    {:margin          "0px"
                                          :text-decoration "none"
                                          :color           "black"
                                          }
                               :title-h1 {:color "black"}}
            })