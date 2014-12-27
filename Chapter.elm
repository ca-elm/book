module Chapter where

import Graphics.Element

type alias ChapterData =
  { title : String
  , content : String
  }

type alias Chapter =
  { title : String
  , slug : String
  , headings : List String
  , content : Graphics.Element.Element
  , number : Int
  }
