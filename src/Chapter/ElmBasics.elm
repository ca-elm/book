module Chapter.ElmBasics where

data =
  { title = "Elm Basics"
  , content = """

We will be using the Elm programming language to create our games. In these first few chapters you'll learn how to program in Elm. Then you'll learn some topics specific to making games, and you'll get to make your own games using Elm.

In this first chapter, we'll use an online version of Elm. Later, we'll use <a href=https://github.com/nathan/lemma/releases target=_blank>Lemma</a>, a free Elm editing application, so that you can save your Elm programs. For now, just point your web browser to <a href=http://elm-lang.org/try target=_blank>elm-lang.org/try</a> and we'll get started.

# A Greeting

Type the following into the space on the left side of the online editor.

```elm
import Text

main = Text.plainText "Hello!"
```

Click the <button>Compile</button> button (or press <kbd class=shortcut><kbd>control</kbd>+<kbd>return</kbd></kbd>) to run your code in the space on the right side of the screen. You just wrote your first Elm program!

# Import Declarations

```elm
import Text
```

The first line here is called an <dfn>import declaration</dfn>. It tells Elm what kind of functionality you're going to use later in the program. Each Elm <dfn>module</dfn> provides a different kind of functionality. In this case, we import the `Text` module so we can display text on the screen.

<p class=note>Some other useful modules are `Keyboard`, for detecting key presses; `Graphics.Collage`, for displaying shapes on the screen; and `Random`, for generating random numbers. We will discuss these in more detail in later chapters.

The second line is empty. Elm ignores empty lines, but you can add them to organize your code and make it easier for humans to understand.

# Top-level Declarations and Main

```elm
main = Text.plainText "Hello!"
```

This third line tells Elm what the program does. This is another kind of declaration, called a <dfn>top-level declaration</dfn>. It associates a <dfn>name</dfn>, e.g. *oneDozen*, with a <dfn>value</dfn>, e.g. the number 12. In Elm code, this looks like `oneDozen = 12`.

You can use the name anywhere you would use the value, and it will mean the same thing. For example, we could give our `"Hello!"` the name *greeting* and use that name instead:

```elm
greeting = "Hello!"
main = Text.plainText greeting
```

`"Hello!"` is a kind of value called a <dfn>String</dfn>: Elm's name for a sequence of letters and other characters. We put quotation marks around "Hello!" so Elm interprets it as a String and not as Elm code--these quotation marks are *not* included in String itself.

<p class=idea>Try changing the letters in the String `"Hello!"` to change your greeting. Press <button>Compile</button> to see your changes on the right side of the editor.

In our greeting program we associate the name *main* with another kind of value, called an <dfn>Element</dfn>: Elm's name for something that can be displayed on the screen. Elm recognizes the special name <dfn>main</dfn> and displays its associated value when you compile your program.

<p class=idea>What happens when you change the name *main* to something else in your greeting program? Can you fix this by adding a declaration for *main* that uses the new name?

The value we're using (`Text.plainText "Hello!"`) is more complicated than a String, though. Elm can't display Strings directly because they have no formatting information like font, color, and size. We use the `plainText` <dfn>function</dfn> from the `Text` module we imported earlier to turn a String into an Element with the default formatting information.

# Functions

Functions (like `plainText`) turn one thing (called an <dfn>input</dfn>) into another (called an <dfn>output</dfn>). They can be as simple as `identity`, a function whose output is always the same as its input, or `abs`, whose output is the absolute value of its input--or as complex as `image`, whose output is an Element that displays a picture from your computer on the screen.

To use a function on an input value, you write the function and the input next to each other with a space in the middle, like `Text.plainText "Hello!"`. `Text.plainText` is the function here, and `"Hello!"` is the input. In Elm, using a function on an input is called <dfn>applying</dfn> the function to the input.

<p class=note>An important property of Elm functions is that their output is always the same if they are given the same input. If we give the `identity` function a 2 as input, it can't sometimes output a 2 and sometimes output a 3. Keep this in mind if you have experience with another programming language like C or Java, since it is not true in those languages.

Functions are another kind of value, so we can associate them with names using top-level declarations:

```elm
myPlainText = Text.plainText

main = myPlainText "Hello!"
```

This will be more useful when we define our own functions later.

# Type Annotations

We've mentioned a few different types already, like String and Element. Elm lets us describe the types of top-level declarations in our code, so we can understand it better and so Elm can tell us if we made a mistake somewhere. Describing the type of a top-level declaration looks like this:

```elm
greeting : String
greeting = "Hello!"

main = Text.plainText "Hello!"
```

You can read the `:` as "is a value of type," so in this case you would say "greeting is a value of type String." This <dfn>type annotation</dfn> has to go on the line directly above the top-level declaration it describes.

We can tell Elm the type of `main` too, but we have to import the Element type from the `Graphics.Element` module first.

```elm
import Text
import Graphics.Element (Element)

greeting : String
greeting = "Hello!"

main : Element
main = Text.plainText greeting
```

# Function Types

Functions have types too. A function type looks like `input -> output`; for example the type the `Text.plainText` function is:

```elm
Text.plainText : String -> Element
```

The `->` is pronounced "to," as in "Text.plainText has a type of String to Element." This reminds you that `Text.plainText` takes in String values as input and converts them *to* Element values as output.

# Type Errors

If any of your type annotations don't match the types of their respective declarations, Elm will generate an error message when you compile your program. For example, if we try to make `greeting` have a function value instead of a String one:

```elm
greeting : String
greeting = Text.plainText
```

Elm will generate this error message:

```text
Type mismatch between the following types:

       String -> Graphics.Element.Element

       String

   It is related to the following expression:

   Text.plainText
```

This tells us the two conflicting types (the String type we provided in the annotation, and the function type `String -> Graphics.Element.Element` of the value we provided), and the part of your code where the issue arose (`Text.plainText`).

# Numbers and Arithmetic

<dfn>Numbers</dfn> are another kind of value in Elm. Unlike Strings, you don't need to put any special marks around them in your Elm code.

```elm
oneDozen : number
oneDozen = 12
```

<p class=note>The other types you've encountered have capitalized names, but the name of the `number` type is lowercase. In Elm, there are really two different kinds of numbers: Float and Int. Using `number` tells Elm to pick the best one for the situation.

You can use the traditional arithmetic operators (`+`, `-`, `*`, and `/`) to manipulate numbers in your Elm code. The circumference of a circle with radius 5, for example, would be:

```elm
circumference = 2 * pi * 5
pi = 3.14159
```

# Converting Numbers to Strings

If you try to display the result of that calculation with `main = Text.plainText circumference`, Elm gives you a type error:

```text
Type mismatch between the following types:

       Float

       String

   It is related to the following expression:

   circumference
```

`Text.plainText` expects a String as input, but we're giving it a Float (one of Elm's number types). The `toString` function allows us to convert numbers to Strings, that is:

```elm
toString : number -> String
```

If we put our circumference (a number) into the `toString` function, we'll get a String as output; we can then feed that String into the `Text.plainText` function and get an Element to display on the screen.

```elm
main = Text.plainText (toString circumference)
```

# Function Composition

Feeding the output of one function into the input of another is called <dfn>function composition</dfn>. This is such a useful thing to do that Elm has a special operator `>>` for composing functions:

```elm
asText : number -> Element
asText = toString >> Text.plainText
```

`asText` is a new function that takes a number as input, runs it through `toString` (producing a String), and then runs the result through `Text.plainText`, finally producing an Element as its own output. You can tell from the type annotation `number -> Element` on `asText` that we've "cut out the middleman": `asText` has the input type of `toString`, but the output type of `Text.plainText`.

<p class=note>In order to compose two functions, the output type of the first function has to be the same as the input type of the second function--this allows us to pass the output of the first into the input of the second. In this case, if you look at the two function types `number -> String` and `String -> Element`, you can see that they share the String type.

Now you have all the tools you need to display numbers directly:

```elm
main : Element
main = asText circumference
```

<p class=idea>Elm can do all kinds of math for you. Try calculating the volume ($V = \\frac{4}{3} \\pi r^3$) of a sphere with radius 5, or the average of 5, 7, 10, and 14.

# Precedence

You don't need to give your calculations a name. You can use them directly as the input to another function, but you have to surround them with parentheses:

```elm
main : Element
main = asText (6 / 2)
```

If you forget a set of parentheses (for example, `main = asText 6 / 2`), you'll get a type error like this:

```text
Type mismatch between the following types:

       Float

       Graphics.Element.Element

   It is related to the following expression:

   (asText 6) / 2
```

Elm prefers to add parentheses around uses of a function rather than arithmetic calculations. We say that function applications have higher <dfn>precedence</dfn> than the calculations, meaning that Elm will do the application first and the arithmetic second (feed 6 into `asText`, then divide whatever it outputs by 2--which doesn't work, because an Element isn't a number). We can add our own parentheses to change how Elm interprets precedence in our code (divide 6 by 2, and then use that result as the input to `asText`).

# Exercises

1. Delete everything you have in the online editor. Write a program from scratch to show the text "Hello again!" in the space on the right side of the screen. Make sure you understand how each part of your program works--if you find yourself looking back at the example code, re-read the relevant section and start over.

1. Write type annotations for the following declarations:

    1. `alpha = "Hello!"`
    1. `beta = toString`
    1. `gamma = Text.plainText`
    1. `delta = toString 5`
    1. `epsilon = toString >> Text.plainText`

  <p class=note>The names in these declarations have no significance. They are simply there so you can write, for example, `alpha : ...`.

1. Write a program to calculate and display the average of the numbers 4, 9, 16, and 25. Try this first without using the `asText` function from the [Function Composition](#elm-basics-function-composition) section, and then modify your program to use `asText`. Which program do you think is easier to understand?

1. The `sqrt` function takes a number as input and outputs its square root. Use the function composition operator to create a function `fourthRoot` which outputs the fourth root of its argument. Test your function by writing a program to display the fourth root of 16 (the answer should be 2).

"""
  }
