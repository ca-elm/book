module Contents where

import Chapter (Chapter, makeChapters)
import Chapter.ElmBasics
import Chapter.HigherOrderFunctions
import Chapter.DataStructures
import Chapter.TimeAndSpace
import Chapter.UserInput


chapters : List Chapter
chapters = makeChapters
  [ Chapter.ElmBasics.data
  , Chapter.HigherOrderFunctions.data
  , Chapter.DataStructures.data
  , Chapter.TimeAndSpace.data
  , Chapter.UserInput.data
  ]
