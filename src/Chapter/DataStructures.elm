module Chapter.DataStructures where

data =
  { title = "Data Structures"
  , content = """

Up until this point, you've used lots of different values of lots of different types, but have only had one way of storing multiple values, namely: lists. A list is an example of an extremely simple data structure. In this section, we'll take a look at some of the other data structures available to you in elm.

# Union Types

<dfn>Union types</dfn> are essentially a way to join different types together, hence their name. They allow you to store many values of different types inside of a single data structure. For those of you with a java background; as the <a href="http://elm-lang.org/learn/Union-Types.elm">Elm website</a> puts it: "Think of [union types] as enums on steroids."

Let's start off with defining a very simple union type:

```elm
type Animal
  = Rabbit
  | Dog
  | Cat

myBunny : Animal
myBunny = Rabbit

myPuppy : Animal
myPuppy = Dog

myKitty : Animal
myKitty = Cat
```
<p class=note>You might have noticed that the definition of Animal is written on multiple lines after the first indented. This is allowed (and often encouraged!) in Elm. Doing this has no impact on the program, so the first statement could have been written as `type Animal = Rabbit | Dog | Cat`, but the code is much cleaner when the statement is split up across multiple lines.

The first statement defines the type Animal such that something of the type Animal can have three possible values: Rabbit, Dog and Cat. In this case, the pipe (`|`) character is used to mean "or," in that an Animal can be a Rabbit **or** Dog **or** Cat. The rest of the code just creates a few Animals. As you can see from the type declarations, despite having a three different values, each still has the type Animal.

Right now, it might seem like union types really are just enumerations, so let's now add in the data component. Let's say we want to keep some information about each different animal. For the rabbits, we need to know their color, but for dogs and cats we need to know their owner's name and the Animal's age. Let's redefine Animal so that it allows for this.

```elm
type Animal
  = Rabbit String
  | Dog String Int
  | Cat String Int

myBunny : Animal
myBunny = Rabbit "white"

cindysPuppy : Animal
cindysPuppy = Dog "Cindy" 3

johnsCat : Animal
johnsCat = Cat "John" 2
```
<p class=note> You'll notice that instead of `number`, here we use `Int`.   `number` is actually a special type which can be either an `Int` (an integer value) or a `Float` (a decimal number). Elm normally decides for you which type `number` should be, but when defining union types, you need to specify which you'd like to use. In this case, we only want whole number ages, so we use `Int`.

<p class=note>`Rabbit String`, `Dog String Int`, `Cat String Int` are all the different <dfn>type constructors</dfn> of Animal. They're called this because they are used to create or *construct* values of the type Animal.

You can use union types in the way you would use any other type. You can make functions that operate on and with them (we'll get to that soon!), you can display them with Text.asText, you can even use them in other union types! Now that we know we can use union types in other union types, we can do some cool things. Let's try redefining Animal again to keep track of each Animal's age, if it's wild or domestic, and its owner if it is domestic. We'll do this using a second union type which we'll call Owner.

```elm
type Owner
  = Domestic String
  | Wild

type Animal
  = Rabbit Owner Int
  | Dog Owner Int
  | Cat Owner Int

wildBunny : Animal
wildBunny = Rabbit (Wild) 3

myPuppy : Animal
myPuppy = Dog (Domestic "Me") 8

johnsCat : Animal
johnsCat = Cat (Domestic "John") 7
```

# Pattern Matching with Case Expressions

Now that we know what union types are and how to define them, let's look at creating some functions that make use of them. First, we'll define a function which checks if an Animal (a type we defined in the last section) is domestic or not.

<p class="note"> In this example, we'll make use of a new type called `Bool` (short for Boolean). A Bool can be have a value of either `True` or `False` and as you might have guessed represent a statement being either true or false. In this case, the function will return `True` if the Animal is a cat, and `False` if the animal is a Dog or Rabbit.

```elm
import Text

...

isRabbit : Animal -> Bool
isRabbit mysteryPet =
  case mysteryPet of
    Rabbit owner age -> True
    Dog owner age -> False
    Cat owner age -> False

main = Text.asText (isRabbit johnsCat)

```

As you can see, the program outputs false. If you switch `johnsCat` with `wildBunny` in the top level declaration of main, you'll see the result changes to true, as expected.

Let's break this function down so we can better understand what's going on. This function uses what's called a <dfn>case expression</dfn>. Case expressions let us look at a union type and change the results of a function depending on its value. The case expression begins with `case mysteryPet of`. This tells Elm which union type we want to use in our case expression. In this example, we want to use `mysteryPet`. You might have noticed that all of the following lines are indented one level further. This is to let Elm know that they're a part of the case expression rather than the rest of the function. Next, we have `Rabbit owner age -> True`. Case expressions make use of a very cool aspect of functional programming called <dfn>pattern matching</dfn>. In this case, the pattern is `Rabbit owner age`, so the entire line is saying if the union type in question matches the pattern, return True. Because all Rabbits are created using the a constructor that matches this pattern, when presented with a Rabbit, the function returns true. The remaining two lines check for Dogs and Cats and return False.

Now you may be wondering why in the pattern matching, we have to include `owner` and `age`. In case statements, these additional artificats act sort of like arguments to a function, in that in the part of the line after the arrow, they are replaced with the respective value found in the union type you're using the case statement on. Knowing this, we can do some interesting things. Let's try making a function that converts human years into rabbit/dog/cat years. (Think: "My dog is 3 years old, so he's 12 in dog years.")

```elm
getAnimalAge : Animal -> number
getAge mysterypet =
  case mysteryPet of
    Rabbit owner age -> age * 9
    Dog owner age -> age * 4
    Cat owner age -> age * 3

main = Text.asText (getAge myPuppy)
```

As expected, the program outputs 32, which is 8 (the age of myPuppy), times 4.

<p class=note>A quick disclaimer, I couldn't find a reputable source so I made these age conversions up. They're probablly really far off, so don't try to actually make use of them.


# Records

# Accessing

# Updating

# Exercises

"""
  }
