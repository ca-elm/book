module Chapter.DataStructures where

data =
  { title = "Data Structures"
  , content = """

Up until this point, you've used lots of different values of lots of different types, but have only had one way of storing multiple values, namely: lists. A list is an example of an extremely simple data structure. In this section, we'll take a look at some of the other data structures available to you in elm.

# Union Types

<dfn>Union types</dfn> are essentially a way to join different types together, hence their name. They allow you to store many values of different types inside of a single data structure. For those of you with a Java background; as the <a href="http://elm-lang.org/learn/Union-Types.elm" target=_blank>Elm website</a> puts it: "Think of [union types] as enums on steroids."

Let's start off with defining a very simple union type:

```elm
type Animal = Rabbit | Dog | Cat

myBunny : Animal
myBunny = Rabbit

myPuppy : Animal
myPuppy = Dog

myKitty : Animal
myKitty = Cat
```

The first statement defines the type Animal such that something of the type Animal can have three possible values: Rabbit, Dog and Cat. In this case, the pipe (`|`) character is used to mean "or," in that an Animal can be a Rabbit **or** Dog **or** Cat. The rest of the code just creates a few Animals. As you can see from the type declarations, despite having a three different values, each still has the type Animal. This is similar to how the counting numbers are values of type Int.

Right now, it might seem like union types really are just enumerations, so let's now add in the data component. Union types can hold other types, hence their name! Let's define a Calculation type which represents a mathematical calculation. The Calculation can either work in which case we give it a result, or be invalid (e.g. dividing by zero) in which case we give it an error (Err) message:

```elm
type Calculation
  = Ok Float
  | Err String

goodMath : Calculation
goodMath = Ok 2.3

badMath : Calculation
badMath = Err "You can't divide by zero."

```
<p class=note> You'll notice that instead of number, here we use Float.   number is actually a special type which can be either an Int (an integer value) or a Float (a decimal number). Elm normally decides for you which type number should be, but when defining union types, you need to specify which you'd like to use. In this case, we want to be able to represent any value, even non-integer ones, so we use Float.

You can use union types in the way you would use any other type. In fact, you can even include union types in your union types! Let's try making our Calculation contain what mathematical operation it uses:

```elm
-- Operations are Add, Subtract, Multiply, Divide and Exp respectively
type Operation = Add | Sub | Mult | Div | Exp

type Calculation
  = Ok Operation Float
  | Err Operation String

goodMath : Calculation
goodMath = Ok Add 6

moreGoodMath : Calculation
moreGoodMath = Ok Div 5

badMath : Calculation
badMath = Err Div "You can't divide by zero!"
```

# Pattern Matching with Case Expressions

Now that we know what union types are and how to define them, let's look at creating some functions that make use of them. Let's start off with the animal type we defined before, and make a function that makes the given animal's sound. 

```elm
import Text

type Animal = Rabbit | Dog | Cat

introduce : Animal -> String
introduce animal =
  case animal of
    Rabbit -> "What's up doc?"
    Dog -> "Woof!"
    Cat -> "Meow!"
```

This function makes use of a case expression. A <dfn>case expression</dfn> looks at the value you give it, and checks the list of <dfn>patterns</dfn> to see if it matches any of them. In this case, Animals that are Rabbits match `Rabbit`, Dogs match `Dog` and Cats match `Cat`. 

Like how you can pattern match against the different values of the type Animal, you can patten match against values of other types like String and number. Additionally, you can pattern match with variables! These will match anything, and work almost exactly like arguments to functions. Let's use this to create the divide function, which divides two numbers, and returns a Calculation.

```elm
import Text
import List

type Operation = Add | Sub | Mult | Div | Exp

type Calculation
  = Ok Operation Float
  | Err Operation String

divide : number -> number -> Calculation
divide x y =
  case y of
    0 -> Err Div "You can't divide by zero!"
    anything -> Ok Div (x / y)

badMath : Calculation
badMath = divide 10 0

goodMath : Calculation
goodMath = divide 10 2

main = Text.asText goodMath
```

Here, `anything` gets assigned the value of y in the expression on its right, but we don't use it in this case. You can use that data if you want to! Pattern matching allows some really interesting constructs. Say we wanted to get just the result of a calculation. We can do this by <dfn>extracting</dfn> values from our union types through patten matching.

```elm
getResult : Calculation -> String
getResult calc =
  case calc of
    Ok operation result -> "Ok! Result was " ++ (toString result)
    Err operation message -> "Error! Result was " ++ message

main = Text.asText (getResult goodMath)
```

# Exercises



"""
  }
