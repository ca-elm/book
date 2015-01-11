module Chapter.HigherOrderFunctions where

data =
  { title = "Higher-order Functions"
  , content = """

An important concept in Elm is that functions are values just like numbers, Strings, and Elements. In this chapter, we'll explore different kinds of higher-order functions: functions whose inputs or outputs are themselves functions.

# Currying

Type this program into the editor:

```elm
import Text
import String

main = Text.plainText (String.repeat 5 "Hello!")
```

You'll notice that we imported the String module, which has more useful functions for dealing with String-type values. `String.repeat` is a function that repeats a String the number of times you give it. It's similar to the functions you've seen in the past, but it looks like it takes two inputs. It has the following type annotation:

```elm
String.repeat : Int -> String -> String
```

<p class=note>Int (one of Elm's number types) is short for integer. This means you can't give `String.repeat` a value with a decimal point like 4.35.

But, as we mentioned above, all functions take one input and turn it into one output. There's a trick here: you can also write the declaration for `main` like this:

```elm
main = Text.plainText ((String.repeat 5) "Hello!")
```

Adding parentheses to the type annotation for `String.repeat` makes this even more clear:

```elm
String.repeat : Int -> (String -> String)
```

That is, `String.repeat` really just takes one input: a number. It outputs a function, of type `String -> String`, which takes a String and repeats it that same number of times. This new function remembers the input number you gave to `String.repeat` and uses that number to produce its own outputs (Strings).

Just like any other function, you can save the output that `String.repeat` produces and use it later in your code:

```elm
fiveTimes : String -> String
fiveTimes = String.repeat 5

threeTimes : String -> String
threeTimes = String.repeat 3

main = Text.plainText (fiveTimes "Hello!" ++ threeTimes "Goodbye!")
```

<p class=note>The `++` operator you see here <dfn>concatenates</dfn> the two strings: it creates a new string with the letters in the first string (`"Hello!Hello!Hello!Hello!Hello!"`) followed by the letters in the second (`"Goodbye!Goodbye!Goodbye!"`). Like arithmetic, it has lower precedence than function application; so you could also write `(fiveTimes "Hello!") ++ (threeTimes "Goodbye!")` to mean the same thing.

This trick of outputting new functions that remember previous inputs is called <dfn>Currying</dfn> (after <a href=https://en.wikipedia.org/wiki/Haskell_Curry target=_blank>Haskell Curry</a>). It lets us create functions that appear to take any number of values as input in a language that only allows one input per function. As you saw above, this technique is so common that Elm allows us to remove the parentheses both in the type annotations on curried functions:

```elm
String.repeat : Int -> String -> String
```

and in the invocations of those functions:

```elm
main = Text.plainText (String.repeat 5 "Hello!")
```

We say that function application is <dfn>left-associative</dfn> because Elm treats `a b c` like `(a b) c` instead of `a (b c)`, and the `->` in function types is <dfn>right-associative</dfn> because Elm treats `a -> b -> c` like `a -> (b -> c)` instead of `(a -> b) -> c`. You can add parentheses to force Elm to interpret your code in a particular way.

# Operators Revisited

You've actually seen quite a few curried functions already--they just had strange names, like `+` and `*`. When a function's name comprises symbols rather than letters, Elm treats it as an <dfn>infix operator</dfn>. The "infix" here means that you put the function name *between* the two inputs rather than *in front of* them like we did with `String.repeat`:

```elm
main = asText (1 + 2)
```

If you want to use an infix operator like a normal function, you can put its name in parentheses:

```elm
main = asText ((+) 1 2)
```

<p class=note>Keep in mind that the two sets of parentheses here mean two different things: the inner set tells Elm to treat `+` like a normal name instead of an infix operator, and the outer set prevents Elm from interpreting the chain of function applications as `(asText (+)) 1 2` since function application is left-associative.

Here you can see that `(+)` is another curried function: it takes a number as input and produces another function (which itself takes a number as input and produces the sum). You could write its type signature like this:

```elm
(+) : number -> number -> number
```

Or, equivalently, like this:

```elm
(+) : number -> (number -> number)
```

You can take advantage of the fact that (+) is a curried function by <dfn>partially applying</dfn> it:

```elm
addFive : number -> number
addFive = (+) 5

main = asText (addFive 7)
```

# Composition Decomposition

You can also use the `>>` operator like a normal name. It has a type annotation that looks like this:

```elm
(>>) : (a -> b) -> (b -> c) -> a -> c
```

Lowercase letters in a type are called <dfn>type variables</dfn>, because they vary based on where you use the function. You can replace a type variable with any type you like; for example, when we used the `>>` operator to compose `toString` and `Text.plainText`, you could annotate the type of `>>` as:

```elm
(>>) : (number -> String) -> (String -> Element) -> number -> Element
```

<p class=note>You can't replace the same type variable with two different types, however. If a function has the type `a -> a -> a`, it can be of type `String -> String -> String` or `Element -> Element -> Element`, but never `String -> Element -> String`.

From this type annotation, it might seem like `>>` should take three inputs: a `number -> String` function, a `String -> Element` function, and a number; then it would produce an Element. This is a perfectly fine way to think about `>>`: as a function that takes two functions and a value as its inputs and returns as output the result of applying those functions in a chain. You could use it like this:

```elm
main : Element
main = (>>) toString Text.plainText 4
```

This code first applies `toString` to 4, then applies `Text.plainText` to the result.

But we've talked about `>>` as an operator that takes just two functions as input, and produces as output another function that applies them in succession to its own input. You might annotate it like this:

```elm
(>>) : (number -> String) -> (String -> Element) -> (number -> Element)
```

The important thing here is that these annotations are the same: these two ways of thinking about `>>` are both useful and valid, and are in fact equivalent. This is just another instance of currying, and we were just partially applying `>>` when we used it as an operator!

You can partially apply `>>` to only one input as well:

```elm
withNumber = (>>) toString

main : Element
main = withNumber Text.plainText 100
```

`withNumber` is a function that takes a function and a number as input, converts the number to a String, and outputs the result of applying the input function to the String. We could annotate it like this:

```elm
withNumber : (String -> a) -> number -> a
```

Notice that `withNumber`'s type still has a type variable in it. Our partially applied function isn't picky about the output type of its input function--it could produce Strings, Elements, or even other functions.

We can even partially apply `withNumber`:

```elm
asText : number -> Element
asText = withNumber Text.plainText

main : Element
main = asText 100
```

In this instance, `withNumber` has type `(String -> Element) -> number -> Element`. We partially apply it to get a function `asText : number -> Element`.

# Flip

The `flip` function is a higher-order function that works on curried functions. It takes as input a function of two inputs and produces as output another function of two inputs with the roles of those inputs swapped. For example, while `(-)` subtracts its second input from its first, `flip (-)` subtracts its first input from its second.

Flip is useful for partially applying functions to inputs that come later in their definition:

```elm
repeatHello = flip String.repeat "Hello!"
repeatHi = flip String.repeat "Hi!"

main = Text.plainText (repeatHello 6 ++ repeatHi 4 ++ repeatHello 3)
```

<p class=note>Make sure you import the `String` module so you can use the `String.repeat` function.

Flip also allows you to swap the order of inputs to an operator:

```elm
(<<) = flip (>>)

asText = Text.plainText << toString
```

<p class=note>Elm includes this definition of backwards function composition by default.

# Application as an Operator

Elm has another function-related operator, `<|`, called the <dfn>application operator</dfn>. It takes a function and an input and applies the function to the input; that is, `f <| x` is the same as `f x`. This is useful because the operator `<|` has much lower precedence than normal function application; so instead of writing parentheses around nested function calls, you can use `<|`:

```elm
main = Text.plainText (toString 16)
main = Text.plainText <| toString 16
```

If you have more than one nested function application, you can use function composition to get rid of the other parentheses:

```elm
main = Text.plainText << toString <| sqrt 16
main = Text.plainText (toString (sqrt 16))
```

The application operator also allows you to treat function application like a normal function. You can, for example, define the backwards function application operator like this:

```elm
(|>) = flip (<|)
main = toString 16 |> Text.plainText
```

<p class=note>Elm includes this definition of `|>` by default.

# Aside: Creating Functions

So far we've created functions by composing and applying other functions. You can also create a function by explicitly naming its input:

```elm
square : number -> number
square x = x * x

main = asText (square 4)
```

When you apply a function defined in this way, Elm replaces each occurrence of the input name on the right hand side of the `=` with the input value you provide. For example, when we write `square 4`, Elm calculates `4 * 4` and uses the result as the output of `square`.

You can create a curried function by putting more than one input name before the `=` sign:

```elm
average : number -> number -> number
average x y = (x + y) / 2
```

# Lists of Things

<dfn>Lists</dfn> are another kind of value in Elm. They look like this:

```elm
evenNumbers : List number
evenNumbers = [2, 2, 4, 4, 6, 6]

noNumbers : List number
noNumbers = []

todo : List String
todo =
  [ "Learn Elm"
  , "Make Games"
  , "???"
  , "Profit!"
  ]
```

Each list can contain any number of items--even no items at all, in the case of `noNumbers`--but all the items in a list must be of the same type. You can't put `10` and `"Learn Elm"` into the same list, because one is a number and the other is a String. The type of a list is `List a`, where `a` is the type of each item in the list.

Lists can even contain functions, as long as they all have the same input and output types:

```elm
repeaters : List (String -> String)
repeaters = [String.repeat 2, String.repeat 5, String.repeat 10]
```

They can also contain other lists:

```elm
nestedLists : List (List number)
nestedLists = [[1, 2, 3], [4, 5], [6, 7, 8, 9]]
```

The `toString` function actually is actually an `a -> String` function--that is, it can convert any kind of value into a string. Before now it was only useful on numbers, but you can also use it to convert lists to Strings so you can display them:

```elm
main = Text.plainText (toString [1, 2, 3, 4])
```

Elm also provides the shortcut function `Text.asText : a -> Element`, which converts its input to a String and then outputs an Element with that String in a monospace font:

```elm
main = Text.asText [1, 2, 3, 4]
```

# Working with Lists

You can use the `List.length` function from the `List` module to compute the number of items in a list.

```elm
import List

main = Text.plainText (toString (List.length [4, 5, 6]))
```

Since `List.length` works on any kind of list, you could annotate it like this:

```elm
List.length : List a -> Int
```

The `List` module provides some useful functions for dealing with lists of numbers:

- `List.sum` adds the numbers in a list and outputs the sum.

  ```elm
  List.sum [5, 5, 7, 7, 9, 9]
  ```

- `List.product` multiplies the numbers in a list and outputs the product.

  ```elm
  List.product [1, 2, 3, 4]
  ```

- `List.maximum` outputs the largest number in a list.

  ```elm
  List.maximum [3, -5, 7, 2, 3]
  ```

- `List.minimum` outputs the smallest number in a list.

  ```elm
  List.minimum [3, -5, 7, 2, 3]
  ```

and for dealing with lists in general:

-  `List.append` takes two lists and outputs a new list with elements from both of the input lists.

  ```elm
  List.append [1, 2, 3] [4, 5, 6]
  ```

-  `List.repeat` takes a number <var>n</var> and a value and outputs a list with that value repeated <var>n</var> times.

  ```elm
  List.repeat 5 "Hello!"
  ```

Finally, if you want a list of then numbers between 1 and 5 (including 1 and 5), you can just write `[1..5]`.

# Map, 2, 3, 4

A useful higher-order function for dealing with lists is called `List.map`. It has the following type:

```elm
List.map : (a -> b) -> List a -> List b
```

<p class=idea>Just by looking at this type annotation, what do you think the `List.map` function does?

`List.map` takes as input a function from one type to another, and a list of values of that first type. It applies the function to each item of the list and outputs a new list with the results of each application. For example, these two declarations of `numbers` are the same:

```elm
numbers = List.map sqrt [1, 4, 9, 16]

numbers = [sqrt 1, sqrt 4, sqrt 9, sqrt 16]
```

You can also think of `map` as a function that turn functions which operate on a single value into functions that operate on lists of values.

```elm
sqrt : number -> number

listSqrt : List number -> List number
listSqrt = List.map sqrt
```

The `List` module also contains `List.map2`, `List.map3`, etc., of the following types:

```elm
List.map2 : (a -> b -> c) -> List a -> List b -> List c
List.map3 : (a -> b -> c -> d) -> List a -> List b -> List c -> List d
...
```

`map2` is like `map`, but it operates on curried functions of two inputs. For each item in the output list, it draws inputs from its two input lists:

```elm
sums : List number
sums = List.map2 (+) [1, 2, 3] [4, 5, 6]

greetings : List String
greetings =
  List.map2 (++)
  ["Hello ", "Good day ", "Hi "]
  ["Alice", "Bob", "Carol"]

main = Text.asText sums
```

<p class=idea>What happens when you use `map` instead of `map2` on a curried function of two inputs?

Similarly, `map3` and `map4` operate on curried functions of three and four inputs, respectively.

# Fold (from the Right)

`List.foldr` is another extremely useful function for dealing with lists. It lets you combine all the items in a list using a curried function of two inputs. Starting with a <dfn>base case</dfn> you supply, `List.foldr` applies the input function to the last item of the list and the base case; then to the second-to-last item of the list and the result of the previous application; and so on, until there are no more list items left. So when you write:

```elm
countUp = List.foldr (++) "" ["One", "Two", "Three"]
```

Elm computes:

```elm
countUp = "One" ++ ("Two" ++ ("Three" ++ ""))
```

If the list is empty, `List.foldr` just outputs the base case unchanged. If the operation doesn't make sense on empty lists, you can use `List.foldr1`, which uses the last item of the list as its base case:

```elm
countUp = List.foldr1 (++) ["One", "Two", "Three"]
countUp = "One" ++ ("Two" ++ "Three")
```

`List.foldr` describes a very general and very common pattern of functions that operate on lists. You can define all of the functions mentioned above in terms of it; for example, `List.sum` looks like this:

```elm
List.sum = List.foldr (+) 0
```

<p class=idea>Define `List.maximum` using a fold and the `max` function, which returns the larger of its two input numbers. Should you use `List.foldr` or `List.foldr1`?

# Filtering Lists

`List.filter` lets you create a new list with a subset of the items in the input list. It takes as input a function which decides whether to include each item in the final list. This function, called a <dfn>predicate</dfn>, returns a value of type Bool.

Bool (short for Boolean, named after <a href=https://en.wikipedia.org/wiki/George_Boole target=_blank>George Boole</a>) is a type with only two values--`True` and `False`. They mean just what they appear to mean--that something is true (e.g., `3 < 4`) or false (e.g., `5 > 10`), respectively. If the predicate returns `True` for an item, that item is included in the output of `List.filter`; if it returns `False`, that item is excluded.

For example, to select the items in a list greater than 10, you could write this:

```elm
numbers = [4, 6, 15, 4, 5, 20, 3, 26, 5, 9]

isLarge : number -> Bool
isLarge x = x > 10

largeNumbers = List.filter isLarge numbers
```

<p class=note>Predicates often have names that start with *is*, e.g. `isLarge` or `isEven` or `isActive`.

Or, more concisely:

```elm
largeNumbers = List.filter ((<) 10) numbers
```

<p class=idea>Why does this example use `(<) 10` instead of, for example, `(>) 10`? Can you rewrite it using `flip` and `(>)`?

Elm provides the basic comparison operators `<`, `<=` (for $\\leq$), `>=` (for $\\geq$), and `>`, as well as the equality operator `==` ($=$ is used for assignment, so Elm uses a different operator) and the inequality operator `/=` (which looks kind of like $\\neq$). The following are all `True`:

```elm
5 > 3
4 >= 4
4 == 4
5 /= 2
1 <= 1
2 < 7
```

You can combine Booleans using the operators `&&`, which outputs `True` only if both of its inputs are `True` (read this as *and*) and `||`, which outputs `True` if one or more of its inputs is `True` (read this as *or*). The following are all `True`:

```elm
3 < 4 && 5 < 6
1 > 2 || 3 == 3
1 < 2 || 3 < 2
4 == 4 || 5 == 5
```

Finally, the `not` function inverts a Bool value: it outputs `True` when given `False`, and `False` when given `True`.

# More List Functions

The `List` module provides a number of other functions for you to use in your programs. You can find the full list on the <a href=http://package.elm-lang.org/packages/elm-lang/core/latest/List target=_blank>Elm package website</a>, which lists each function with its type signature, a description, and an example of how to use it.

<p class=idea>You can explore the functions and values in other modules as well by clicking the <a href=http://package.elm-lang.org/packages/elm-lang/core/latest target=_blank>core</a> link at the top of the page. Try, for example <a href=http://package.elm-lang.org/packages/elm-lang/core/latest/Basics target=_blank>Basics</a> (automatically imported in every Elm file) or <a href=http://package.elm-lang.org/packages/elm-lang/core/latest/String target=_blank>String</a>.

# Exercises

1. Explain the difference between the expressions `String.repeat`, `String.repeat 5`, and `String.repeat 5 "Hello!"`. Give the type of each expression.

1. The `max` function has a type of `number -> number -> number` and returns the larger of its two inputs; similarly, `min` returns the smaller of its two inputs. Use these two functions to define:

  ```elm
  clamp : number -> number -> number -> number
  ```

  Where `clamp low high x` outputs the number between `low` and `high` (inclusive) which is closest to `x`; that is, `clamp low high x` outputs `low` if `x` is less than `low`, `high` if `x` is greater than `high`, and `x` otherwise.

  Use partial application and function composition to define clamp in terms of its first two inputs (`clamp low high = ...`).

1. Explain in words what each of the following functions do. Also give the type of each function.

  1. `String.repeat 5 >> String.repeat 3`
  1. `flip String.repeat "Hello" >> String.repeat 2`
  1. `min 4 >> flip String.repeat "A"`
  1. `(-) 4`
  1. `((-) >> (<|)) 4`

1. Write type annotations for the following type declarations:

  1. `alpha = max 4`
  1. `beta = String.repeat << (+) 4`
  1. `gamma = (>>) sqrt >> (>>)`
  1. `delta = flip >> flip`
  1. `epsilon = (>>) toString >> (|>)`

"""
  }
