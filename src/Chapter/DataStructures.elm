module Chapter.DataStructures where

data =
  { title = "Data Structures"
  , content = """

Elm provides a number of basic value types (number, String, Element, etc.), but it also allows you to create your own. These <dfn>data structures</dfn> let you store more than one piece of information (e.g., a full name and a nickname as two separate Strings) and more than one kind of information (e.g., an age and a name as a number and a String, respectively) in a single value.

# Records

You've already encountered one data structure--the List. Lists let you store an arbitrary number of similar things in one value. They are the appropriate data structure when you don't know exactly how many items there will be but you know they'll all have the same type.

By contrast, records allow you to store a fixed number of disparate things. You can store values of different types in a single record, but you have to know exactly how many values and what the type of each one is. Records look like this in Elm:

```elm
john = { first = "John", last = "Smith", age = 31 }
```

A record's components are called <dfn>fields</dfn>. Each field has a name and a value (for example, `first` and `"John"`). The type of the record is simply the types of each of its fields, surrounded by braces: (we use `Int` here instead of `number` because ages can only be whole numbers)

```elm
john : { first : String, last : String, age : Int }
john =
  { first = "John"
  , last = "Smith"
  , age = 31
  }
```

<p class=note>You can split a record onto multiple lines, as we did here, if it gets too long.

You can use a <dfn>type alias</dfn> to give a shorter name to record types:

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

<p class=note>The order of fields in a record doesn't matter. We could also have written `john` as `{ age = 31, last = "Smith", first = "John" }` and it would have the same type.

A type alias gives Elm a new name for an existing type. Wherever you use the name (in this case, `Person`), Elm will replace it with the equivalent type.

# Working with Records

To unpack data from a record, you can use Elm's dot syntax:

```elm
fullName = john.first ++ " " ++ john.last
```

If you leave out the name of the record, you'll get a function that takes in records and outputs the value of only that field.

```elm
ages = List.map .age [john, jane, alex]
```

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

The `|` here is pronounced as "where" and the `<-` as "gets," so we would say "p where age gets p's age plus one."

# Row Polymorphism

You might think the type of `grow` would be `{ age : Int } -> { age : Int }` in this new case, since it only operates on the `age` field of its input. However, if you try to use this type annotation:

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

<p class=note>Remember that Person is defined to be `{ first : String, last : String, age : Int }`.

Elm treats record types that are different in any way as distinct, so we get an error when we try to use `grow` on a Person. This is good, because if we were allowed to use `grow` on `john`, we would still only get back a value of type `{ age : Int }`, as the type annotation for `grow` indicates. We would have forgotten that the fields `first` and `last` in the Person type even existed.

The type of `grow` is actually `{ r | age : Int } -> { r | age : Int }`. The `r |` indicates that `grow` can take records of any type, as long as they have the fields to the right of `|`--in this case, an `age` field of type `Int`. This is called <dfn>row polymorphism</dfn>. The `r` here is a type variable that stands for the record with all of the fields we didn't list--when we use `grow` on `john`, for example, this would be the type `{ first : String, last : String }`.

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
