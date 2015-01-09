module Book where

import Graphics.Element (..)
import Window
import Text
import List
import Signal
import Color

import Theme
import Slug (slugify)
import Chapter (Chapter)

type alias Int2 = (Int,Int)


book : String -> List Chapter -> Signal Element
book title chapters = Signal.map (render title chapters) Window.dimensions

render : String -> List Chapter -> Int2 -> Element
render title chapters dim = flow down <| List.map ((|>) dim) <|
  [Theme.bookTitle title, contentsSection chapters] ++ List.map chapterSection chapters


contentsSection : List Chapter -> Int2 -> Element
contentsSection chapters dim =
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
    link ("#" ++ slug ++ "-" ++ slugify heading) <|
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
