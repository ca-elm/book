module Contents where

import List
import String
import Slug (slugify)
import Theme (markdown)
import Chapter (ChapterData, Chapter)
import Chapter.ElmBasics
import Chapter.HigherOrderFunctions

chapters : List (Chapter)
chapters =
  List.indexedMap process
  [ Chapter.ElmBasics.data
  , Chapter.HigherOrderFunctions.data
  ]

process : Int -> ChapterData -> Chapter
process i chapter =
  { number = i + 1
  , title = chapter.title
  , slug = slugify chapter.title
  , content = markdown chapter.content
  , headings = List.map (String.dropLeft 2) <| List.filter ((==) "#" << String.left 1) <| String.split "\n" chapter.content
  }
