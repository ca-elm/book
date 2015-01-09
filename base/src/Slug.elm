module Slug (slugify) where

import Regex (..)
import String (..)

slugify : String -> String
slugify = replace All nonAlpha (always "-") << toLower

nonAlpha : Regex
nonAlpha = regex "\\W+"
