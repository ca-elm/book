module Chapter.HigherOrderFunctions where

data =
  { title = "Higher-order Functions"
  , content = """

An important concept in Elm is that functions are values just like numbers, Strings, and Elements. In this chapter, we'll explore different kinds of higher-order functions: functions whose inputs or outputs are themselves functions.

# Currying

Type this program into the editor:

    import Text
    import String

    main = Text.plainText (String.repeat 5 "Hello!")

You'll notice that we imported the String module, which has more useful functions for dealing with String-type values. `String.repeat` is a function that repeats a String the number of times you give it. It looks like the functions you've seen in the past, but it looks like it takes two inputs. It has the following type annotation:

    String.repeat : Int -> String -> String

<p class=note>Int (one of Elm's number types) is short for integer. This means you can't give `String.repeat` a value with a decimal point like 4.35.

But, as we mentioned above, all functions take one input and turn it into one output. There's a trick here: you can also write the program like this:

    main = Text.plainText ((String.repeat 5) "Hello!")

Adding parentheses to the type annotation for `String.repeat` makes this even more clear:

    String.repeat : Int -> (String -> String)

That is, `String.repeat` really just takes one input: a number. It outputs a function, of type `String -> String`, which takes a String and repeats it that same number of times. This new function remembers the input number you gave to `String.repeat` and uses that number to produce its own outputs (Strings).

Just like any other function, you can save the output that `String.repeat` produces and use it later in your code:

    fiveTimes : String -> String
    fiveTimes = String.repeat 5

    main = Text.plainText (fiveTimes "Hello!")

This trick of outputting new functions that remember previous inputs is called <dfn>Currying</dfn> (after <a href=https://en.wikipedia.org/wiki/Haskell_Curry target=_blank>Haskell Curry</a>). It lets us create functions that appear to take any number of values as input in a language that only allows one input per function. As you saw above, this technique is so common that Elm allows us to remove the parentheses both in the type annotations on curried functions:

    String.repeat : Int -> String -> String

and in the invocations of those functions:

    main = Text.plainText (String.repeat 5 "Hello!")

We say that function application is <dfn>left-associative</dfn> because Elm treats `a b c` like `(a b) c` instead of `a (b c)`, and the `->` in function types is <dfn>right-associative</dfn> because Elm treats `a -> b -> c` like `a -> (b -> c)` instead of `(a -> b) -> c`. You can add parentheses to force Elm to interpret your code in a particular way.

# Operators Revisited

You've actually seen quite a few curried functions already—they just had strange names, like `+` and `*`. When a function's name comprises symbols rather than letters, Elm treats it as an <dfn>infix operator</dfn>. The "infix" here means that you put the function name *between* the two inputs rather than *in front of* them like we did with `String.repeat`:

    main = asText (1 + 2)

If you want to use an infix operator like a normal function, you can put its name in parentheses:

    main = asText ((+) 1 2)

<p class=note>Keep in mind that the two sets of parentheses here mean two different things: the inner set tells Elm to treat `+` like a normal name instead of an infix operator, and the outer set prevents Elm from interpreting the chain of function applications as `(asText (+)) 1 2` since function application is left-associative.

Here you can see that `(+)` is another curried function: it takes a number as input and produces another function (which itself takes a number as input and produces the sum). You could write its type signature like this:

    (+) : number -> number -> number

Or, equivalently, like this:

    (+) : number -> (number -> number)

You can take advantage of the fact that (+) is a curried function by <dfn>partially applying</dfn> it:

    addFive : number -> number
    addFive = (+) 5

    main = asText (addFive 7)

# Composition Decomposition

You can also use the `>>` operator like a normal name. It has a type annotation that looks like this:

    (>>) : (a -> b) -> (b -> c) -> a -> c

Lowercase letters in a type are called <dfn>type variables</dfn>, because they vary based on where you use the function. You can replace a type variable with any type you like; for example, when we used the `>>` operator to compose `toString` and `Text.plainText`, you could annotate the type of `>>` as:

    (>>) : (number -> String) -> (String -> Element) -> number -> Element

<p class=note>You can't replace the same type variable with two different types, however. If a function has the type `a -> a -> a`, it can be of type `String -> String -> String` or `Element -> Element -> Element`, but never `String -> Element -> String`.

From this type annotation, it might seem like `>>` should take three inputs: a `number -> String` function, a `String -> Element` function, and a number; then it would produce an Element. This is a perfectly fine way to think about `>>`: as a function that takes two functions and a value as its inputs and returns as output the result of applying those functions in a chain. You could use it like this:

    main : Element
    main = (>>) toString Text.plainText 4

This code first applies `toString` to 4, then applies `Text.plainText` to the result.

But we've talked about `>>` as an operator that takes just two functions as input, and produces as output another function that applies them in succession to its own input. You might annotate it like this:

    (>>) : (number -> String) -> (String -> Element) -> (number -> Element)

The important thing here is that these annotations are the same: these two ways of thinking about `>>` are both useful and valid, and are in fact equivalent. This is just another instance of currying, and we were just partially applying `>>` when we used it as an operator!

You can partially apply `>>` to only one input as well:

    withNumber = (>>) toString

    main : Element
    main = withNumber Text.plainText 100

`withNumber` is a function that takes a function and a number as input, converts the number to a String, and outputs the result of applying the input function to the String. We could annotate it like this:

    withNumber : (String -> a) -> number -> a

Notice that `withNumber`'s type still has a type variable in it. Our partially applied function isn't picky about the output type of its input function—it could produce Strings, Elements, or even other functions.

We can even partially apply `withNumber`:

    asText : number -> Element
    asText = withNumber Text.plainText

    main : Element
    main = asText 100

In this instance, `withNumber` has type `(String -> Element) -> number -> Element`. We partially apply it to get a function `asText : number -> Element`.

# Flip

# Aside: Defining Functions

# Lists of Things

# Map, 2, 3, 4

# Fold (from the Left)

# Filtering Lists

# More List Functions

# Exercises

"""
  }
