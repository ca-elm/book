module Main where

import Graphics.Element (..)
import Window
import Text
import List
import Signal
import Color

import Theme
import Slug (slugify)
import Chapter (Chapter)
import Contents (chapters)

type alias Int2 = (Int,Int)


main : Signal Element
main = Signal.map book Window.dimensions

book : Int2 -> Element
book dim = flow down <| List.map ((|>) dim) <|
  [Theme.bookTitle, contentsSection] ++ List.map chapterSection chapters


contentsSection : Int2 -> Element
contentsSection dim =
  Theme.sectionTitle "contents" "Contents" dim `above`
  Theme.section (tableOfContents chapters) dim

tableOfContents : List Chapter -> Element
tableOfContents = flow down << List.map contentsItem

contentsItem : Chapter -> Element
contentsItem {title,number,headings,slug} =
  flow down <| [
    link ("#" ++ slug) <|
    Text.leftAligned <|
    Text.bold <|
    Text.height 24 <|
    Text.typeface Theme.headingFace <|
    Text.color Color.black <|
    Text.fromString <|
    toString number ++ ". " ++ title
  ] ++ List.indexedMap (\index heading ->
    beside (spacer 48 1) <|
    link ("#" ++ slugify heading) <|
    Text.leftAligned <|
    Text.color Color.black <|
    Text.typeface Theme.bodyFace <|
    Text.fromString <| heading
    --toString number ++ "." ++ toString (index + 1) ++ ". " ++ heading
  ) headings ++ [
    spacer 1 16
  ]


chapterSection : Chapter -> Int2 -> Element
chapterSection {title,slug,content} dim =
  Theme.sectionTitle slug title dim `above`
  Theme.section content dim


port title : String
port title = "Game Programming"