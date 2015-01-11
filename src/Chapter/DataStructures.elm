module Chapter.DataStructures where

data =
  { title = "Data Structures"
  , content = """

Elm provides a number of basic value types (number, String, Element, etc.), but it also allows you to create your own. These <dfn>data structures</dfn> allow you to store more than one piece of information (e.g., a full name and a nickname as two separate Strings) and more than one kind of information (e.g., an age and a name as a number and a String, respectively) in a single value.

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

<p class=progress>

# Union Types

# Pattern Matching with Case Expressions

# Polymorphic Types

# Recursive Types

# Exercises

"""
  }
