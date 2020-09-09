(ns crumborn.theme.light)


(def theme {
            :id               :light
            :main-color       "white"
            :background-color "white"

            :font-color       "black"

            :title            {:color "black"}
            :subtitle         {:margin-top "0px"
                               :color      "black"}

            :navbar           {:nav {:width           "100%"
                                     :display         "flex"
                                     :justify-content "space-between"}
                               :ul  {:margin      0
                                     :padding     0
                                     :list-style  "none"
                                     :line-height "33px"
                                     :flex        1}
                               :li  {:display "inline-block"
                                     :margin  "0 10px"
                                     :cursor  "pointer"}}
            :post             {:title           {:font-size   11
                                                 :line-height 14}
                               :title-container {:display "flex" :flex-direction "row"}}
            })