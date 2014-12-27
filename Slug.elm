module Slug (slugify) where

import Regex (..)
import String (..)

nonAlpha : Regex
nonAlpha = regex "\\W+"

slugify : String -> String
slugify = replace All nonAlpha (always "-") << toLower
