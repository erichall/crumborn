(ns crumborn.theme.light)


(def theme {
            :id               :light
            :main-color       "white"
            :background-color "white"

            :font-color       "black"

            :navbar           {:nav {:width           "100%"
                                     :display         "flex"
                                     :justify-content "space-between"}
                               :ul  {:margin      0
                                     :padding     0
                                     :list-style  "none"
                                     :line-height "33px"}
                               :li  {:display "inline-block"
                                     :margin  "0 10px"
                                     :cursor  "pointer"}}
            })