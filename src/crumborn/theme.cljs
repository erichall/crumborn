(ns crumborn.theme
  (:require [crumborn.theme.light :refer [theme]]
            [crumborn.interop :as interop]))

(defonce theme-atom (atom nil))

(defn get-style
  [path]
  (get-in (deref theme-atom) path))

(defn is-dark-theme?
  []
  (= (get (deref theme-atom) :id) :dark))
