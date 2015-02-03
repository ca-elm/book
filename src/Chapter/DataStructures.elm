module Chapter.DataStructures where

data =
  { title = "Data Structures"
  , content = """

Elm provides a number of basic value types (number, String, Element, etc.), but it also allows you to create your own. These <dfn>data structures</dfn> let you store more than one piece of information (e.g., a full name and a nickname as two separate Strings) and more than one kind of information (e.g., an age and a name as a number and a String, respectively) in a single value.

# Records

You've already encountered one data structure--the list. Lists let you store an arbitrary number of similar things in a single value. They are the appropriate data structure when you don't know exactly how many items there might be but you know they'll all have the same type.

By contrast, records allow you to store a fixed number of disparate things in a single value. You can store values of different types in a single record, but you have to know exactly how many values and what the type of each one is. Records store each constituent value in a named component called a <dfn>field</dfn>. They look like this in Elm:

```elm
john = { first = "John", last = "Smith", age = 31 }
```

In this example, `john` is a record with three fields--`first`, `last`, and `age`--each with an associated value after the `=`. The type of this record is simply a listing of the types of its fields, separated by commas and surrounded by braces: (we use `Int` here instead of `number` because ages can only be whole numbers)

```elm
john : { first : String, last : String, age : Int }
john =
  { first = "John"
  , last = "Smith"
  , age = 31
  }
```

<p class=note>You can split a record onto multiple lines, as we did here, if it gets too long. When you do, make sure to *indent* these subsequent lines so that Elm interprets them as part of the same declaration.

Since each field has a name, the order in which the fields appear does not matter. We could also write `john` as `{ age = 31, last = "Smith", first = "John" }` and it would be exactly the same value. Similarly, the types `{ first : String, last : String, age : Int }` and `{ last : String, age : Int, first : String }` mean exactly the same thing.

You can use a <dfn>type alias</dfn> to give a shorter name to a record type:

```elm
type alias Person =
  { first : String
  , last : String
  , age : Int
  }

john : Person
john = { first = "John", last = "Smith", age = 31 }

jane : Person
jane = { first = "Jane", last = "Doe", age = 24 }

alex : Person
alex = { first = "Alex", last = "Thompson", age = 27 }
```

A type alias gives Elm a new name equivalent to  an existing type. Wherever you use the name (in this case, `Person`), Elm will replace it with the corresponding type.

# Working with Records

To unpack data from a record, you can use Elm's dot syntax, which selects the value of a single field from a record. For example, we could compute John's full name by appending his first and last names, separated by a space:

```elm
full = john.first ++ " " ++ john.last
```

You can read the `.` like a possessive, as in "john's age" for `john.age`. Field access has even higher precedence than function application, so the expression `"Hi, " ++ john.first` means the same thing as `"Hi, " ++ (john.first)`; similarly, `toString john.age` means the same thing as `toString (john.age)`.

If you leave out the record part of this selection syntax (leaving just a `.` followed by a field name), you'll get a function that takes in a record and outputs the value of that field.

```elm
ages = List.map .age [john, jane, alex]
```

<p class=note>The spaces in this example are significant: `List.map .age` tells Elm to apply `List.map` to the `.age` function, whereas `List.map.age` tells Elm to select the `age` field from `List.map`.

# Updating Records

Using record expressions and dot syntax, you can make a function `grow` which outputs a Person one year older than its input:

```elm
grow p =
  { age = p.age + 1
  , first = p.first
  , last = p.last
  }
```

However, such functions become quite verbose as the number of fields in a record increases. Elm provides a <dfn>record update syntax</dfn> for creating a new record based on a previous one:

```elm
grow p = { p | age <- p.age + 1 }
```

The `|` here is pronounced as "where" and the `<-` as "gets," so we would say "p where age gets p's age plus one." You can update more than one field of the base record by placing commas between the updates:

```elm
swapNames p = { p
              | first <- p.last
              , last <- p.first
              }
```

# Row Polymorphism

You might think the type of our new `grow` function would be `{ age : Int } -> { age : Int }`, since it only operates on the `age` field of its input. However, if you try to use this type annotation:

```elm
grow : { age : Int } -> { age : Int }
grow p = { p | age <- p.age + 1 }

olderJohn = grow john
```

Elm will give you an error:

```text
Type mismatch between the following types:
        Person
        { age : Int }
    It is related to the following expression:
        john
```

<p class=note>Remember that Person is defined as `{ first : String, last : String, age : Int }`.

Elm treats record types that don't have the same fields as incompatible, so we get an error when we try to use `grow` on a Person. This is good, because if we were allowed to use `grow` on `john`, we would still only get back a value of type `{ age : Int }`, as the type annotation for `grow` indicates. We would have forgotten that the fields `first` and `last` in the Person type even existed!

The type of `grow` is actually `{ r | age : Int } -> { r | age : Int }`. The `r |` indicates that `grow` can take records of any type, as long as they have the fields to the right of the `|`--in this case, an `age` field of type `Int`. This is called <dfn>row polymorphism</dfn>. The `r` here is a type variable that stands for the record with all of the fields we didn't list--when we use `grow` on `john`, for example, this would be the type `{ first : String, last : String }`.

# Union Types

Suppose we want to represent a deck of cards in Elm. Since each card contains two pieces of information (rank and suit), we could use a record like this:

```elm
type alias Card = { rank : Int, suit : String }

twoOfSpades : Card
twoOfSpades = { rank = 2, suit = "spades" }
```

But this encoding isn't good for two reasons. First, we have to remember which String corresponds to each suit (`"spades"` and `"Spades"` and `"SPADES"` are all different); Elm won't tell us if we make a mistake somewhere, since all of those possibilities fit into the data types we used. Second, our type allows invalid cards: Elm will happily accept `{ rank = 2, suit = "notasuit" }` as a Card.

<dfn>Union types</dfn> allow us to define new types comprising only the values we specify. For example:

```elm
type Suit = Spades | Hearts | Diamonds | Clubs
```

This line tells Elm to create a new type Suit which contains only the values `Spades`, `Hearts`, `Diamonds`, and `Clubs` (these are called <dfn>variants</dfn> of the type Suit). You can read the `|` as "or," so you might read this type declaration as "Suit is a type whose values are either Spades, Hearts, Diamonds, or Clubs."

<p class=note>Keep in mind that Suit is the name of a *type* but `Spades` is the name of a *value* of type Suit.

Each variant of a union type can also contain associated values. Let's define a Calculation type which represents a mathematical calculation. The Calculation can either work in which case we give it a result, or be invalid (e.g. dividing by zero) in which case we give it an error (Err) message:

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

type Operation = Add | Sub | Mult | Div | Exp | Sqrt

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

Here, `anything` gets assigned the value of y in the expression on its right, but we don't use it. As it turns out, you can use that data if you want to! Pattern matching allows some really interesting constructs. Say we wanted to get just the result of a calculation. We can do this by <dfn>extracting</dfn> values from our union types through patten matching.

```elm
getResult : Calculation -> String
getResult calc =
  case calc of
    Ok operation result -> "Ok! Result was " ++ (toString result)
    Err operation message -> "Error! Result was " ++ message

main = Text.asText (getResult goodMath)
```

# Recursive Types

# Polymorphic Types

<p class=progress>

# Exercises

1. Create a valid top level declaration corresponding to each given type annotation.

  ```elm
  type Vehicle = Plane | Train | Car

  alpha : { topic:String, notes:List String }

  beta : { vehicle:Vehicle, topSpeed:Int }

  gamma : { username:String, settings:List { name:String, enabled:Bool } }
  ```

2. Given that the following is valid, define the type Numeric.

  ```elm
  pi : Numeric
  pi = 3.14
  ```

3. Given the definition of the union type Maybe below, create a function of type `Maybe String -> String` which extracts the value of a Maybe, or returns `"The maybe had no value!"` if the Maybe is Nothing.

  ```elm
  type Maybe a
    = Just a
    | Nothing
  ```

4. Given the type alias below, define the function `tickTock` of type `Time -> Time` which takes a time, and adds one to the time field.

  ```elm
    type alias Time = { score:Int, time:Int }
  ```

"""
  }
