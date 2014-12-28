module Main where

import Graphics.Element (..)
import Window
import Text
import List
import Signal
import Color

import Theme (bookTitle, pageTitle, centeredIn, page, bodyFace, headingFace)
import Slug (slugify)
import Chapter (Chapter)
import Contents (chapters)

type alias Int2 = (Int,Int)

main : Signal Element
main = Signal.map allPages Window.dimensions
--main = Signal.map2 route (Signal.constant "") Window.dimensions

--route : String -> Int2 -> Element
--route s =
--  if s == ""
--  then contents
--  else chapter << List.head << List.filter ((==) s << .slug) <| chapters

allPages dim = flow down <| List.map ((|>) dim) <|
  [bookTitle, contents] ++ List.map chapter chapters


contents : Int2 -> Element
contents dim =
  pageTitle "contents" "Contents" dim `above`
  page (tableOfContents chapters) dim

tableOfContents : List Chapter -> Element
tableOfContents = flow down << List.map contentsItem

contentsItem : Chapter -> Element
contentsItem {title,number,headings,slug} =
  flow down <| [
    link ("#" ++ slug) <|
    Text.leftAligned <|
    Text.bold <|
    Text.height 24 <|
    Text.typeface headingFace <|
    Text.color Color.black <|
    Text.fromString <|
    toString number ++ ". " ++ title
  ] ++ List.indexedMap (\index heading ->
    beside (spacer 48 1) <|
    link ("#" ++ slugify heading) <|
    Text.leftAligned <|
    Text.color Color.black <|
    Text.typeface bodyFace <|
    Text.fromString <| heading
    --toString number ++ "." ++ toString (index + 1) ++ ". " ++ heading
  ) headings ++ [
    spacer 1 16
  ]


chapter : Chapter -> Int2 -> Element
chapter {title,slug,content} dim =
  pageTitle slug title dim `above`
  page content dim


port title : String
port title = "Game Programming"
