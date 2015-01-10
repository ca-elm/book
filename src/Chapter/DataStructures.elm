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

A record's components are called <dfn>fields</dfn>. Each field has a name and a value (for example, `first` and `"John"`). The type of the record is simply the types of each of its fields, surrounded by braces:

```elm
john : { first : String, last : String, age : number }
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
  , age : number
  }

john : Person
john = { first = "John", last = "Smith", age = 31 }

jane : Person
jane = { first = "Jane", last = "Doe", age = 24 }

```

A type alias gives Elm a new name for an existing type. Wherever you use the name (in this case, `Person`), Elm will replace it with the equivalent type.

# Accessing

# Updating

# Union Types

# Pattern Matching with Case Expressions

# Exercises

"""
  }
