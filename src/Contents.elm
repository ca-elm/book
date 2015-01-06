module Contents where

import List
import String
import Regex
import Maybe
import Slug (slugify)
import Theme (markdown)

import Chapter (ChapterData, Chapter)
import Chapter.ElmBasics
import Chapter.HigherOrderFunctions
import Chapter.DataStructures
import Chapter.TimeAndSpace
import Chapter.UserInput


chapters : List (Chapter)
chapters =
  List.indexedMap process
  [ Chapter.ElmBasics.data
  , Chapter.HigherOrderFunctions.data
  , Chapter.DataStructures.data
  , Chapter.TimeAndSpace.data
  , Chapter.UserInput.data
  ]

process : Int -> ChapterData -> Chapter
process i chapter =
  let slug = slugify chapter.title in
  { number = i + 1
  , title = chapter.title
  , slug = slug
  , content = markdown <| processMarkdown slug chapter.content
  , headings = List.map (String.dropLeft 2) <| List.filter ((==) "#" << String.left 1) <| String.split "\n" chapter.content
  }


processMarkdown : String -> String -> String
processMarkdown slug =
  Regex.replace Regex.All heading
  (\{submatches} ->
    let b = match submatches
        h = match <| List.tail submatches in
    b ++ "<h1 id=" ++ slug ++ "-" ++ slugify h ++ ">" ++ h ++ "</h1>")

match : List (Maybe String) -> String
match = Maybe.withDefault "" << List.head

heading : Regex.Regex
heading = Regex.regex "(^|[\n\r])#[ \\t]*(.+)"
