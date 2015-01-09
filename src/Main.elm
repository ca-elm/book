module Main where

import Book (book)
import Contents (chapters)


port title : String
port title = "Game Programming"

main = book title chapters
