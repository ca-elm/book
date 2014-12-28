module Theme where

import Graphics.Element (..)
import Color
import String
import Text
import Katex
import Markdown
type alias Int2 = (Int,Int)


markdown : String -> Element
markdown md = Markdown.toElement <| Katex.convert <| css ++ md

css : String
css = """
<style>
a {
  color: #05c !important;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
a:active {
  color: #038 !important;
  text-decoration: underline;
}
h1 {
  font: bold 24px """ ++ cssFace headingFace ++ """;
  margin: 2rem 0 1rem;
}
p, ul {
  font-family: """ ++ cssFace bodyFace ++ """;
  margin: 0 0 1rem;
  line-height: 1.5;
}
.idea {
  padding-left: 2rem;
  position: relative;
}
.idea::before {
  content: "";
  border: 0.325rem solid transparent;
  border-left: 0.5rem solid;
  border-right: 0;
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  left: 0.5rem;
  top: 0.5rem;
}
.note {
  border-left: 0.3rem solid rgba(0,0,0,.1);
  color: rgba(0,0,0,.6);
  padding-left: 0.7rem;
  margin-left: 1rem;
}
.note::before {
  content: "Note:";
  margin-right: 0.3rem;
  font-weight: 600;
}
.at-risk {
  opacity: .3;
  color: #a00;
}
code {
  display: inline-block;
  background: #f5f5f5;
  border-radius: 0.25rem;
  font-family: """ ++ cssFace codeFace ++ """;
  font-size: 13px;
  padding: 0.1rem 0.3rem;
  margin: 0 0.125rem;
}
pre {
  display: block;
  margin: 0 0 1rem;
  text-align: center;
}
pre > code {
  padding: 0.6rem;
  text-align: left;
  max-width: 100%;
  box-sizing: border-box;
  overflow: auto;
}
code::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background: #eee;
  border-radius: 0 0 3px 3px;
}
code::-webkit-scrollbar:vertical {
  border-radius: 0 3px 3px 0;
}
code::-webkit-scrollbar:corner-present {
  border-bottom-right-radius: 0;
}
code::-webkit-scrollbar-thumb {
  background: #aaa;
  border-radius: 100px;
}
code::-webkit-scrollbar-corner {
  background: #eee;
  border-radius: 0 0 3px 0;
}
kbd {
  font: inherit;
  font-size: 0.875rem;
}
kbd:not(.shortcut) {
  border-radius: 0.25rem;
  padding: 0.125rem 0.375rem;
  margin: 0 0.125rem;
  background: #555;
  color: rgba(255,255,255,.85);
  font-weight: 300;
  box-shadow: 0 0.2rem #222;
}
dfn {
  font-style: normal;
  font-weight: 600;
}
.block-math {
  text-align: center;
  margin: 0 0 1rem;
}
.block-math > div {
  text-align: left;
  display: inline-block;
}
""" ++ Katex.css ++ """
</style>
"""

headingFace : List String
headingFace = ["Georgia", "serif"]

bodyFace : List String
bodyFace = ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"]

codeFace : List String
codeFace = ["Menlo", "Monaco", "Consolas", "Courier New", "monospace"]

cssFace : List String -> String
cssFace = String.join ", "


bookTitle : Int2 -> Element
bookTitle (w,h) =
  above (spacer 1 64) <|
  flip centeredIn (w,h) <|
  Text.leftAligned <|
  Text.typeface headingFace <|
  Text.bold <|
  Text.height (
    if | w > 600 -> 72
       | w > 500 -> 60
       | w > 370 -> 48
       | otherwise -> 36) <|
  Text.fromString "Game Programming"

pageTitle : String -> String -> Int2 -> Element
pageTitle name title (w,h) =
  below (spacer 1 8) <|
  below (color Color.lightGray (spacer w 1)) <|
  flip centeredIn (w,h) <|
  above (spacer 1 48) <|
  tag name <|
  Text.leftAligned <|
  Text.typeface headingFace <|
  Text.bold <|
  Text.height 36 <|
  Text.fromString title
--pageTitle name title dim =
--  color (Color.rgba 0 0 0 0.8) <<
--  flip centeredIn dim <<
--  below (spacer 1 8) <<
--  above (spacer 1 96) <<
--  tag name <|
--  Text.leftAligned <<
--  Text.typeface ["Georgia", "sans-serif"] <<
--  Text.bold <<
--  Text.height 48 <<
--  Text.color (Color.rgba 255 255 255 0.8) <<
--  Text.fromString <| title


centeredIn : Element -> Int2 -> Element
centeredIn e (w,h) =
  let cw = min 600 (w - 16)
      sl = (w - cw) // 2
      sr = w - cw - sl
      margin = spacer 1 8 in
  flow down
    [ margin
    , spacer sl 1 `beside` width cw e `beside` spacer sr 1
    , margin
    ]

page : Element -> Int2 -> Element
page e dim =
  spacer 1 128 `below` centeredIn e dim