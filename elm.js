var Elm = Elm || { Native: {} };
Elm.Array = Elm.Array || {};
Elm.Array.make = function (_elm) {
   "use strict";
   _elm.Array = _elm.Array || {};
   if (_elm.Array.values)
   return _elm.Array.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Array",
   $Basics = Elm.Basics.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Array = Elm.Native.Array.make(_elm);
   var append = $Native$Array.append;
   var length = $Native$Array.length;
   var slice = $Native$Array.slice;
   var set = $Native$Array.set;
   var get = F2(function (i,
   array) {
      return _U.cmp(0,
      i) < 1 && _U.cmp(i,
      $Native$Array.length(array)) < 0 ? $Maybe.Just(A2($Native$Array.get,
      i,
      array)) : $Maybe.Nothing;
   });
   var push = $Native$Array.push;
   var empty = $Native$Array.empty;
   var filter = F2(function (isOkay,
   arr) {
      return function () {
         var update = F2(function (x,
         xs) {
            return isOkay(x) ? A2($Native$Array.push,
            x,
            xs) : xs;
         });
         return A3($Native$Array.foldl,
         update,
         $Native$Array.empty,
         arr);
      }();
   });
   var foldr = $Native$Array.foldr;
   var foldl = $Native$Array.foldl;
   var indexedMap = $Native$Array.indexedMap;
   var map = $Native$Array.map;
   var toIndexedList = function (array) {
      return A3($List.map2,
      F2(function (v0,v1) {
         return {ctor: "_Tuple2"
                ,_0: v0
                ,_1: v1};
      }),
      _L.range(0,
      $Native$Array.length(array) - 1),
      $Native$Array.toList(array));
   };
   var toList = $Native$Array.toList;
   var fromList = $Native$Array.fromList;
   var initialize = $Native$Array.initialize;
   var repeat = F2(function (n,e) {
      return A2(initialize,
      n,
      $Basics.always(e));
   });
   var Array = {ctor: "Array"};
   _elm.Array.values = {_op: _op
                       ,Array: Array
                       ,initialize: initialize
                       ,repeat: repeat
                       ,fromList: fromList
                       ,toList: toList
                       ,toIndexedList: toIndexedList
                       ,map: map
                       ,indexedMap: indexedMap
                       ,foldl: foldl
                       ,foldr: foldr
                       ,filter: filter
                       ,empty: empty
                       ,push: push
                       ,get: get
                       ,set: set
                       ,slice: slice
                       ,length: length
                       ,append: append};
   return _elm.Array.values;
};
Elm.Basics = Elm.Basics || {};
Elm.Basics.make = function (_elm) {
   "use strict";
   _elm.Basics = _elm.Basics || {};
   if (_elm.Basics.values)
   return _elm.Basics.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Basics",
   $Native$Basics = Elm.Native.Basics.make(_elm),
   $Native$Show = Elm.Native.Show.make(_elm),
   $Native$Utils = Elm.Native.Utils.make(_elm);
   var uncurry = F2(function (f,
   _v0) {
      return function () {
         switch (_v0.ctor)
         {case "_Tuple2": return A2(f,
              _v0._0,
              _v0._1);}
         _U.badCase($moduleName,
         "on line 460, column 19 to 24");
      }();
   });
   var curry = F3(function (f,
   a,
   b) {
      return f({ctor: "_Tuple2"
               ,_0: a
               ,_1: b});
   });
   var flip = F3(function (f,b,a) {
      return A2(f,a,b);
   });
   var snd = function (_v4) {
      return function () {
         switch (_v4.ctor)
         {case "_Tuple2": return _v4._1;}
         _U.badCase($moduleName,
         "on line 444, column 13 to 14");
      }();
   };
   var fst = function (_v8) {
      return function () {
         switch (_v8.ctor)
         {case "_Tuple2": return _v8._0;}
         _U.badCase($moduleName,
         "on line 440, column 13 to 14");
      }();
   };
   var always = F2(function (a,
   _v12) {
      return function () {
         return a;
      }();
   });
   var identity = function (x) {
      return x;
   };
   _op["<|"] = F2(function (f,x) {
      return f(x);
   });
   _op["|>"] = F2(function (x,f) {
      return f(x);
   });
   _op[">>"] = F3(function (f,
   g,
   x) {
      return g(f(x));
   });
   _op["<<"] = F3(function (g,
   f,
   x) {
      return g(f(x));
   });
   _op["++"] = $Native$Utils.append;
   var toString = $Native$Show.toString;
   var isInfinite = $Native$Basics.isInfinite;
   var isNaN = $Native$Basics.isNaN;
   var toFloat = $Native$Basics.toFloat;
   var ceiling = $Native$Basics.ceiling;
   var floor = $Native$Basics.floor;
   var truncate = $Native$Basics.truncate;
   var round = $Native$Basics.round;
   var otherwise = true;
   var not = $Native$Basics.not;
   var xor = $Native$Basics.xor;
   _op["||"] = $Native$Basics.or;
   _op["&&"] = $Native$Basics.and;
   var max = $Native$Basics.max;
   var min = $Native$Basics.min;
   var GT = {ctor: "GT"};
   var EQ = {ctor: "EQ"};
   var LT = {ctor: "LT"};
   var compare = $Native$Basics.compare;
   _op[">="] = $Native$Basics.ge;
   _op["<="] = $Native$Basics.le;
   _op[">"] = $Native$Basics.gt;
   _op["<"] = $Native$Basics.lt;
   _op["/="] = $Native$Basics.neq;
   _op["=="] = $Native$Basics.eq;
   var e = $Native$Basics.e;
   var pi = $Native$Basics.pi;
   var clamp = $Native$Basics.clamp;
   var logBase = $Native$Basics.logBase;
   var abs = $Native$Basics.abs;
   var negate = $Native$Basics.negate;
   var sqrt = $Native$Basics.sqrt;
   var atan2 = $Native$Basics.atan2;
   var atan = $Native$Basics.atan;
   var asin = $Native$Basics.asin;
   var acos = $Native$Basics.acos;
   var tan = $Native$Basics.tan;
   var sin = $Native$Basics.sin;
   var cos = $Native$Basics.cos;
   _op["^"] = $Native$Basics.exp;
   _op["%"] = $Native$Basics.mod;
   var rem = $Native$Basics.rem;
   _op["//"] = $Native$Basics.div;
   _op["/"] = $Native$Basics.floatDiv;
   _op["*"] = $Native$Basics.mul;
   _op["-"] = $Native$Basics.sub;
   _op["+"] = $Native$Basics.add;
   var toPolar = $Native$Basics.toPolar;
   var fromPolar = $Native$Basics.fromPolar;
   var turns = $Native$Basics.turns;
   var degrees = $Native$Basics.degrees;
   var radians = function (t) {
      return t;
   };
   _elm.Basics.values = {_op: _op
                        ,radians: radians
                        ,degrees: degrees
                        ,turns: turns
                        ,fromPolar: fromPolar
                        ,toPolar: toPolar
                        ,rem: rem
                        ,cos: cos
                        ,sin: sin
                        ,tan: tan
                        ,acos: acos
                        ,asin: asin
                        ,atan: atan
                        ,atan2: atan2
                        ,sqrt: sqrt
                        ,negate: negate
                        ,abs: abs
                        ,logBase: logBase
                        ,clamp: clamp
                        ,pi: pi
                        ,e: e
                        ,compare: compare
                        ,LT: LT
                        ,EQ: EQ
                        ,GT: GT
                        ,min: min
                        ,max: max
                        ,xor: xor
                        ,not: not
                        ,otherwise: otherwise
                        ,round: round
                        ,truncate: truncate
                        ,floor: floor
                        ,ceiling: ceiling
                        ,toFloat: toFloat
                        ,isNaN: isNaN
                        ,isInfinite: isInfinite
                        ,toString: toString
                        ,identity: identity
                        ,always: always
                        ,fst: fst
                        ,snd: snd
                        ,flip: flip
                        ,curry: curry
                        ,uncurry: uncurry};
   return _elm.Basics.values;
};
Elm.Book = Elm.Book || {};
Elm.Book.make = function (_elm) {
   "use strict";
   _elm.Book = _elm.Book || {};
   if (_elm.Book.values)
   return _elm.Book.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Book",
   $Basics = Elm.Basics.make(_elm),
   $Chapter = Elm.Chapter.make(_elm),
   $Color = Elm.Color.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $List = Elm.List.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $Slug = Elm.Slug.make(_elm),
   $Text = Elm.Text.make(_elm),
   $Theme = Elm.Theme.make(_elm),
   $Window = Elm.Window.make(_elm);
   var chapterSection = F2(function (_v0,
   dim) {
      return function () {
         return A2($Graphics$Element.above,
         A3($Theme.sectionTitle,
         _v0.slug,
         _v0.title,
         dim),
         A2($Theme.section,
         _v0.content,
         dim));
      }();
   });
   var contentsItem = function (_v2) {
      return function () {
         return $Graphics$Element.flow($Graphics$Element.down)(A2($Basics._op["++"],
         _L.fromArray([$Graphics$Element.link(A2($Basics._op["++"],
         "#",
         _v2.slug))($Text.leftAligned($Text.bold($Text.height(24)($Text.typeface($Theme.headingFace)($Text.color($Color.black)($Text.fromString(A2($Basics._op["++"],
         $Basics.toString(_v2.number),
         A2($Basics._op["++"],
         ". ",
         _v2.title)))))))))]),
         A2($Basics._op["++"],
         A2($List.indexedMap,
         F2(function (index,heading) {
            return $Graphics$Element.beside(A2($Graphics$Element.spacer,
            48,
            1))($Graphics$Element.link(A2($Basics._op["++"],
            "#",
            A2($Basics._op["++"],
            _v2.slug,
            A2($Basics._op["++"],
            "-",
            $Slug.slugify(heading)))))($Text.leftAligned($Text.color($Color.black)($Text.typeface($Theme.bodyFace)($Text.fromString(heading))))));
         }),
         _v2.headings),
         _L.fromArray([A2($Graphics$Element.spacer,
         1,
         16)]))));
      }();
   };
   var tableOfContents = function ($) {
      return $Graphics$Element.flow($Graphics$Element.down)($List.map(contentsItem)($));
   };
   var contentsSection = F2(function (chapters,
   dim) {
      return A2($Graphics$Element.above,
      A3($Theme.sectionTitle,
      "contents",
      "Contents",
      dim),
      A2($Theme.section,
      tableOfContents(chapters),
      dim));
   });
   var render = F3(function (title,
   chapters,
   dim) {
      return $Graphics$Element.flow($Graphics$Element.down)($List.map(F2(function (x,
      y) {
         return y(x);
      })(dim))(A2($Basics._op["++"],
      _L.fromArray([$Theme.bookTitle(title)
                   ,contentsSection(chapters)]),
      A2($List.map,
      chapterSection,
      chapters))));
   });
   var book = F2(function (title,
   chapters) {
      return A2($Signal.map,
      A2(render,title,chapters),
      $Window.dimensions);
   });
   _elm.Book.values = {_op: _op
                      ,book: book
                      ,render: render
                      ,contentsSection: contentsSection
                      ,tableOfContents: tableOfContents
                      ,contentsItem: contentsItem
                      ,chapterSection: chapterSection};
   return _elm.Book.values;
};
Elm.Chapter = Elm.Chapter || {};
Elm.Chapter.make = function (_elm) {
   "use strict";
   _elm.Chapter = _elm.Chapter || {};
   if (_elm.Chapter.values)
   return _elm.Chapter.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Chapter",
   $Basics = Elm.Basics.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Regex = Elm.Regex.make(_elm),
   $Slug = Elm.Slug.make(_elm),
   $String = Elm.String.make(_elm),
   $Theme = Elm.Theme.make(_elm);
   var heading = $Regex.regex("(^|[\n\r])#[ \\t]*(.+)");
   var match = function ($) {
      return $Maybe.withDefault("")($List.head($));
   };
   var processMarkdown = function (slug) {
      return A3($Regex.replace,
      $Regex.All,
      heading,
      function (_v0) {
         return function () {
            return function () {
               var h = match($List.tail(_v0.submatches));
               var b = match(_v0.submatches);
               return A2($Basics._op["++"],
               b,
               A2($Basics._op["++"],
               "<h1 id=",
               A2($Basics._op["++"],
               slug,
               A2($Basics._op["++"],
               "-",
               A2($Basics._op["++"],
               $Slug.slugify(h),
               A2($Basics._op["++"],
               ">",
               A2($Basics._op["++"],
               h,
               "</h1>")))))));
            }();
         }();
      });
   };
   var makeChapter = F2(function (i,
   chapter) {
      return function () {
         var slug = $Slug.slugify(chapter.title);
         return {_: {}
                ,content: $Theme.markdown(A2(processMarkdown,
                slug,
                chapter.content))
                ,headings: $List.map($String.dropLeft(2))($List.filter(function ($) {
                   return F2(function (x,y) {
                      return _U.eq(x,y);
                   })("#")($String.left(1)($));
                })(A2($String.split,
                "\n",
                chapter.content)))
                ,number: i + 1
                ,slug: slug
                ,title: chapter.title};
      }();
   });
   var makeChapters = $List.indexedMap(makeChapter);
   var Chapter = F5(function (a,
   b,
   c,
   d,
   e) {
      return {_: {}
             ,content: d
             ,headings: c
             ,number: e
             ,slug: b
             ,title: a};
   });
   var ChapterData = F2(function (a,
   b) {
      return {_: {}
             ,content: b
             ,title: a};
   });
   _elm.Chapter.values = {_op: _op
                         ,ChapterData: ChapterData
                         ,Chapter: Chapter
                         ,makeChapters: makeChapters
                         ,makeChapter: makeChapter
                         ,processMarkdown: processMarkdown
                         ,match: match
                         ,heading: heading};
   return _elm.Chapter.values;
};
Elm.Chapter = Elm.Chapter || {};
Elm.Chapter.DataStructures = Elm.Chapter.DataStructures || {};
Elm.Chapter.DataStructures.make = function (_elm) {
   "use strict";
   _elm.Chapter = _elm.Chapter || {};
   _elm.Chapter.DataStructures = _elm.Chapter.DataStructures || {};
   if (_elm.Chapter.DataStructures.values)
   return _elm.Chapter.DataStructures.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Chapter.DataStructures";
   var data = {_: {}
              ,content: "\n\nElm provides a number of basic value types (number, String, Element, etc.), but it also allows you to create your own. These <dfn>data structures</dfn> let you store more than one piece of information (e.g., a full name and a nickname as two separate Strings) and more than one kind of information (e.g., an age and a name as a number and a String, respectively) in a single value.\n\n# Records\n\nYou\'ve already encountered one data structure--the List. Lists let you store an arbitrary number of similar things in one value. They are the appropriate data structure when you don\'t know exactly how many items there will be but you know they\'ll all have the same type.\n\nBy contrast, records allow you to store a fixed number of disparate things. You can store values of different types in a single record, but you have to know exactly how many values and what the type of each one is. Records look like this in Elm:\n\n```elm\njohn = { first = \"John\", last = \"Smith\", age = 31 }\n```\n\nA record\'s components are called <dfn>fields</dfn>. Each field has a name and a value (for example, `first` and `\"John\"`). The type of the record is simply the types of each of its fields, surrounded by braces: (we use `Int` here instead of `number` because ages can only be whole numbers)\n\n```elm\njohn : { first : String, last : String, age : Int }\njohn =\n  { first = \"John\"\n  , last = \"Smith\"\n  , age = 31\n  }\n```\n\n<p class=note>You can split a record onto multiple lines, as we did here, if it gets too long.\n\nYou can use a <dfn>type alias</dfn> to give a shorter name to record types:\n\n```elm\ntype alias Person =\n  { first : String\n  , last : String\n  , age : Int\n  }\n\njohn : Person\njohn = { first = \"John\", last = \"Smith\", age = 31 }\n\njane : Person\njane = { first = \"Jane\", last = \"Doe\", age = 24 }\n\nalex : Person\nalex = { first = \"Alex\", last = \"Thompson\", age = 27 }\n```\n\n<p class=note>The order of fields in a record doesn\'t matter. We could also have written `john` as `{ age = 31, last = \"Smith\", first = \"John\" }` and it would have the same type.\n\nA type alias gives Elm a new name for an existing type. Wherever you use the name (in this case, `Person`), Elm will replace it with the equivalent type.\n\n# Working with Records\n\nTo unpack data from a record, you can use Elm\'s dot syntax:\n\n```elm\nfullName = john.first ++ \" \" ++ john.last\n```\n\nIf you leave out the name of the record, you\'ll get a function that takes in records and outputs the value of only that field.\n\n```elm\nages = List.map .age [john, jane, alex]\n```\n\n# Updating Records\n\nUsing record expressions and dot syntax, you can make a function `grow` which outputs a Person one year older than its input:\n\n```elm\ngrow p =\n  { age = p.age + 1\n  , first = p.first\n  , last = p.last\n  }\n```\n\nHowever, such functions become quite verbose as the number of fields in a record increases. Elm provides a <dfn>record update syntax</dfn> for creating a new record based on a previous one:\n\n```elm\ngrow p = { p | age <- p.age + 1 }\n```\n\nThe `|` here is pronounced as \"where\" and the `<-` as \"gets,\" so we would say \"p where age gets p\'s age plus one.\"\n\n# Row Polymorphism\n\nYou might think the type of `grow` would be `{ age : Int } -> { age : Int }` in this new case, since it only operates on the `age` field of its input. However, if you try to use this type annotation:\n\n```elm\ngrow : { age : Int } -> { age : Int }\ngrow p = { p | age <- p.age + 1 }\n\nolderJohn = grow john\n```\n\nElm will give you an error:\n\n```text\nType mismatch between the following types:\n        Person\n        { age : Int }\n    It is related to the following expression:\n        john\n```\n\n<p class=note>Remember that Person is defined to be `{ first : String, last : String, age : Int }`.\n\nElm treats record types that are different in any way as distinct, so we get an error when we try to use `grow` on a Person. This is good, because if we were allowed to use `grow` on `john`, we would still only get back a value of type `{ age : Int }`, as the type annotation for `grow` indicates. We would have forgotten that the fields `first` and `last` in the Person type even existed.\n\nThe type of `grow` is actually `{ r | age : Int } -> { r | age : Int }`. The `r |` indicates that `grow` can take records of any type, as long as they have the fields to the right of `|`--in this case, an `age` field of type `Int`. This is called <dfn>row polymorphism</dfn>. The `r` here is a type variable that stands for the record with all of the fields we didn\'t list--when we use `grow` on `john`, for example, this would be the type `{ first : String, last : String }`.\n\nUp until this point, you\'ve used lots of different values of lots of different types, but have only had one way of storing multiple values, namely: lists. A list is an example of an extremely simple data structure. In this section, we\'ll take a look at some of the other data structures available to you in Elm.\n\n# Union Types\n\n<dfn>Union types</dfn> are essentially a way to join different types together, hence their name. They allow you to store many values of different types inside of a single data structure. For those of you with a Java background; as the <a href=\"http://elm-lang.org/learn/Union-Types.elm\" target=_blank>Elm website</a> puts it: \"Think of [union types] as enums on steroids.\"\n\nLet\'s start off with defining a very simple union type:\n\n```elm\ntype Animal = Rabbit | Dog | Cat\n\nmyBunny : Animal\nmyBunny = Rabbit\n\nmyPuppy : Animal\nmyPuppy = Dog\n\nmyKitty : Animal\nmyKitty = Cat\n```\n\nThe first statement defines the type Animal such that something of the type Animal can have three possible values: Rabbit, Dog and Cat. In this case, the pipe (`|`) character is used to mean \"or,\" in that an Animal can be a Rabbit **or** Dog **or** Cat. The rest of the code just creates a few Animals. As you can see from the type declarations, despite having a three different values, each still has the type Animal. This is similar to how the counting numbers are values of type Int.\n\nRight now, it might seem like union types really are just enumerations, so let\'s now add in the data component. Union types can hold other types, hence their name! Let\'s define a Calculation type which represents a mathematical calculation. The Calculation can either work in which case we give it a result, or be invalid (e.g. dividing by zero) in which case we give it an error (Err) message:\n\n```elm\ntype Calculation\n  = Ok Float\n  | Err String\n\ngoodMath : Calculation\ngoodMath = Ok 2.3\n\nbadMath : Calculation\nbadMath = Err \"You can\'t divide by zero.\"\n\n```\n<p class=note> You\'ll notice that instead of number, here we use Float.   number is actually a special type which can be either an Int (an integer value) or a Float (a decimal number). Elm normally decides for you which type number should be, but when defining union types, you need to specify which you\'d like to use. In this case, we want to be able to represent any value, even non-integer ones, so we use Float.\n\nYou can use union types in the way you would use any other type. In fact, you can even include union types in your union types! Let\'s try making our Calculation contain what mathematical operation it uses:\n\n```elm\n-- Operations are Add, Subtract, Multiply, Divide and Exp respectively\ntype Operation = Add | Sub | Mult | Div | Exp\n\ntype Calculation\n  = Ok Operation Float\n  | Err Operation String\n\ngoodMath : Calculation\ngoodMath = Ok Add 6\n\nmoreGoodMath : Calculation\nmoreGoodMath = Ok Div 5\n\nbadMath : Calculation\nbadMath = Err Div \"You can\'t divide by zero!\"\n```\n\n# Pattern Matching with Case Expressions\n\nNow that we know what union types are and how to define them, let\'s look at creating some functions that make use of them. Let\'s start off with the animal type we defined before, and make a function that makes the given animal\'s sound. \n\n```elm\nimport Text\n\ntype Animal = Rabbit | Dog | Cat\n\nintroduce : Animal -> String\nintroduce animal =\n  case animal of\n    Rabbit -> \"What\'s up doc?\"\n    Dog -> \"Woof!\"\n    Cat -> \"Meow!\"\n```\n\nThis function makes use of a case expression. A <dfn>case expression</dfn> looks at the value you give it, and checks the list of <dfn>patterns</dfn> to see if it matches any of them. In this case, Animals that are Rabbits match `Rabbit`, Dogs match `Dog` and Cats match `Cat`. \n\nLike how you can pattern match against the different values of the type Animal, you can patten match against values of other types like String and number. Additionally, you can pattern match with variables! These will match anything, and work almost exactly like arguments to functions. Let\'s use this to create the divide function, which divides two numbers, and returns a Calculation.\n\n```elm\nimport Text\nimport List\n\ntype Operation = Add | Sub | Mult | Div | Exp | Sqrt\n\ntype Calculation\n  = Ok Operation Float\n  | Err Operation String\n\ndivide : number -> number -> Calculation\ndivide x y =\n  case y of\n    0 -> Err Div \"You can\'t divide by zero!\"\n    anything -> Ok Div (x / y)\n\nbadMath : Calculation\nbadMath = divide 10 0\n\ngoodMath : Calculation\ngoodMath = divide 10 2\n\nmain = Text.asText goodMath\n```\n\nHere, `anything` gets assigned the value of y in the expression on its right, but we don\'t use it. As it turns out, you can use that data if you want to! Pattern matching allows some really interesting constructs. Say we wanted to get just the result of a calculation. We can do this by <dfn>extracting</dfn> values from our union types through patten matching.\n\n```elm\ngetResult : Calculation -> String\ngetResult calc =\n  case calc of\n    Ok operation result -> \"Ok! Result was \" ++ (toString result)\n    Err operation message -> \"Error! Result was \" ++ message\n\nmain = Text.asText (getResult goodMath)\n```\n<p class=progress>\n\n# Exercises\n\n1. Create a valid top level declaration corresponding to each given type annotation.\n\n  ```elm\n  type Vehicle = Plane | Train | Car\n\n  alpha : { topic:String, notes:List String }\n\n  beta : { vehicle:Vehicle, topSpeed:Int }\n\n  gamma : { username:String, settings:List { name:String, enabled:Bool } }\n  ```\n\n2. Given that the following is valid, define the type Numeric.\n\n  ```elm\n  pi : Numeric\n  pi = 3.14\n  ```\n\n3. Given the definition of the union type Maybe below, create a function of type `Maybe String -> String` which extracts the value of a Maybe, or returns `\"The maybe had no value!\"` if the Maybe is Nothing.\n\n  ```elm\n  type Maybe a\n    = Just a\n    | Nothing\n  ```\n\n4. Given the type alias below, define the function `tickTock` of type `Time -> Time` which takes a time, and adds one to the time field.\n\n  ```elm\n    type alias Time = { score:Int, time:Int }\n  ```\n\n\n\n"
              ,title: "Data Structures"};
   _elm.Chapter.DataStructures.values = {_op: _op
                                        ,data: data};
   return _elm.Chapter.DataStructures.values;
};
Elm.Chapter = Elm.Chapter || {};
Elm.Chapter.ElmBasics = Elm.Chapter.ElmBasics || {};
Elm.Chapter.ElmBasics.make = function (_elm) {
   "use strict";
   _elm.Chapter = _elm.Chapter || {};
   _elm.Chapter.ElmBasics = _elm.Chapter.ElmBasics || {};
   if (_elm.Chapter.ElmBasics.values)
   return _elm.Chapter.ElmBasics.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Chapter.ElmBasics";
   var data = {_: {}
              ,content: "\n\nWe will be using the Elm programming language to create our games. In these first few chapters you\'ll learn how to program in Elm. Then you\'ll learn some topics specific to making games, and you\'ll get to make your own games using Elm.\n\nIn this first chapter, we\'ll use an online version of Elm. Later, we\'ll use <a href=https://github.com/nathan/lemma/releases target=_blank>Lemma</a>, a free Elm editing application, so that you can save your Elm programs. For now, just point your web browser to <a href=http://elm-lang.org/try target=_blank>elm-lang.org/try</a> and we\'ll get started.\n\n# A Greeting\n\nType the following into the space on the left side of the online editor.\n\n```elm\nimport Text\n\nmain = Text.plainText \"Hello!\"\n```\n\nClick the <button>Compile</button> button (or press <kbd class=shortcut><kbd>control</kbd>+<kbd>return</kbd></kbd>) to run your code in the space on the right side of the screen. You just wrote your first Elm program!\n\n# Import Declarations\n\n```elm\nimport Text\n```\n\nThe first line here is called an <dfn>import declaration</dfn>. It tells Elm what kind of functionality you\'re going to use later in the program. Each Elm <dfn>module</dfn> provides a different kind of functionality. In this case, we import the `Text` module so we can display text on the screen.\n\n<p class=note>Some other useful modules are `Keyboard`, for detecting key presses; `Graphics.Collage`, for displaying shapes on the screen; and `Random`, for generating random numbers. We will discuss these in more detail in later chapters.\n\nThe second line is empty. Elm ignores empty lines, but you can add them to organize your code and make it easier for humans to understand.\n\n# Top-level Declarations and Main\n\n```elm\nmain = Text.plainText \"Hello!\"\n```\n\nThis third line tells Elm what the program does. This is another kind of declaration, called a <dfn>top-level declaration</dfn>. It associates a <dfn>name</dfn>, e.g. *oneDozen*, with a <dfn>value</dfn>, e.g. the number 12. In Elm code, this looks like `oneDozen = 12`.\n\nYou can use the name anywhere you would use the value, and it will mean the same thing. For example, we could give our `\"Hello!\"` the name *greeting* and use that name instead:\n\n```elm\ngreeting = \"Hello!\"\nmain = Text.plainText greeting\n```\n\n`\"Hello!\"` is a kind of value called a <dfn>String</dfn>: Elm\'s name for a sequence of letters and other characters. We put quotation marks around \"Hello!\" so Elm interprets it as a String and not as Elm code--these quotation marks are *not* included in String itself.\n\n<p class=idea>Try changing the letters in the String `\"Hello!\"` to change your greeting. Press <button>Compile</button> to see your changes on the right side of the editor.\n\nIn our greeting program we associate the name *main* with another kind of value, called an <dfn>Element</dfn>: Elm\'s name for something that can be displayed on the screen. Elm recognizes the special name <dfn>main</dfn> and displays its associated value when you compile your program.\n\n<p class=idea>What happens when you change the name *main* to something else in your greeting program? Can you fix this by adding a declaration for *main* that uses the new name?\n\nThe value we\'re using (`Text.plainText \"Hello!\"`) is more complicated than a String, though. Elm can\'t display Strings directly because they have no formatting information like font, color, and size. We use the `plainText` <dfn>function</dfn> from the `Text` module we imported earlier to turn a String into an Element with the default formatting information.\n\n# Functions\n\nFunctions (like `plainText`) turn one thing (called an <dfn>input</dfn>) into another (called an <dfn>output</dfn>). They can be as simple as `sqrt`, whose output is the square root of its input number--or as complex as `image`, whose output is an Element that displays a picture from your computer on the screen.\n\nTo use a function on an input value, you write the function and the input next to each other with a space in the middle, like `Text.plainText \"Hello!\"`. `Text.plainText` is the function here, and `\"Hello!\"` is the input. In Elm, using a function on an input is called <dfn>applying</dfn> the function to the input.\n\n<p class=note>An important property of Elm functions is that their output is always the same if they are given the same input. If we give the `sqrt` function a 4 as input, it can\'t sometimes output a 2 and sometimes output a -2. Keep this in mind if you have experience with another programming language like C or Java, since it is not true in those languages.\n\nFunctions are another kind of value, so we can associate them with names using top-level declarations:\n\n```elm\nmyPlainText = Text.plainText\n\nmain = myPlainText \"Hello!\"\n```\n\nThis will be more useful when we define our own functions later.\n\n# Type Annotations\n\nWe\'ve mentioned a few different types already, like String and Element. Elm lets us describe the types of top-level declarations in our code, so we can understand it better and so Elm can tell us if we made a mistake somewhere. Describing the type of a top-level declaration looks like this:\n\n```elm\ngreeting : String\ngreeting = \"Hello!\"\n\nmain = Text.plainText \"Hello!\"\n```\n\nYou can read the `:` as \"is a value of type,\" so in this case you would say \"greeting is a value of type String.\" This <dfn>type annotation</dfn> has to go on the line directly above the top-level declaration it describes.\n\nWe can tell Elm the type of `main` too, but we have to import the Element type from the `Graphics.Element` module first.\n\n```elm\nimport Text\nimport Graphics.Element (Element)\n\ngreeting : String\ngreeting = \"Hello!\"\n\nmain : Element\nmain = Text.plainText greeting\n```\n\n# Function Types\n\nFunctions have types too. A function type looks like `input -> output`; for example the type the `Text.plainText` function is:\n\n```elm\nText.plainText : String -> Element\n```\n\nThe `->` is pronounced \"to,\" as in \"Text.plainText has a type of String to Element.\" This reminds you that `Text.plainText` takes in String values as input and converts them *to* Element values as output.\n\n# Type Errors\n\nIf any of your type annotations don\'t match the types of their respective declarations, Elm will generate an error message when you compile your program. For example, if we try to make `greeting` have a function value instead of a String one:\n\n```elm\ngreeting : String\ngreeting = Text.plainText\n```\n\nElm will generate this error message:\n\n```text\nType mismatch between the following types:\n\n       String -> Graphics.Element.Element\n\n       String\n\n   It is related to the following expression:\n\n   Text.plainText\n```\n\nThis tells us the two conflicting types (the String type we provided in the annotation, and the function type `String -> Graphics.Element.Element` of the value we provided), and the part of your code where the issue arose (`Text.plainText`).\n\n# Numbers and Arithmetic\n\n<dfn>Numbers</dfn> are another kind of value in Elm. Unlike Strings, you don\'t need to put any special marks around them in your Elm code.\n\n```elm\noneDozen : number\noneDozen = 12\n```\n\n<p class=note>The other types you\'ve encountered have capitalized names, but the name of the `number` type is lowercase. In Elm, there are really two different kinds of numbers: Float and Int. Using `number` tells Elm to pick the best one for the situation.\n\nYou can use the traditional arithmetic operators (`+`, `-`, `*`, and `/`) to manipulate numbers in your Elm code. The circumference of a circle with radius 5, for example, would be:\n\n```elm\ncircumference = 2 * pi * 5\npi = 3.14159\n```\n\n# Converting Numbers to Strings\n\nIf you try to display the result of that calculation with `main = Text.plainText circumference`, Elm gives you a type error:\n\n```text\nType mismatch between the following types:\n\n       Float\n\n       String\n\n   It is related to the following expression:\n\n   circumference\n```\n\n`Text.plainText` expects a String as input, but we\'re giving it a Float (one of Elm\'s number types). The `toString` function allows us to convert numbers to Strings, that is:\n\n```elm\ntoString : number -> String\n```\n\nIf we put our circumference (a number) into the `toString` function, we\'ll get a String as output; we can then feed that String into the `Text.plainText` function and get an Element to display on the screen.\n\n```elm\nmain = Text.plainText (toString circumference)\n```\n\n# Function Composition\n\nFeeding the output of one function into the input of another is called <dfn>function composition</dfn>. This is such a useful thing to do that Elm has a special operator `>>` for composing functions:\n\n```elm\nasText : number -> Element\nasText = toString >> Text.plainText\n```\n\n`asText` is a new function that takes a number as input, runs it through `toString` (producing a String), and then runs the result through `Text.plainText`, finally producing an Element as its own output. You can tell from the type annotation `number -> Element` on `asText` that we\'ve \"cut out the middleman\": `asText` has the input type of `toString`, but the output type of `Text.plainText`.\n\n<p class=note>In order to compose two functions, the output type of the first function has to be the same as the input type of the second function--this allows us to pass the output of the first into the input of the second. In this case, if you look at the two function types `number -> String` and `String -> Element`, you can see that they share the String type.\n\nNow you have all the tools you need to display numbers directly:\n\n```elm\nmain : Element\nmain = asText circumference\n```\n\n<p class=idea>Elm can do all kinds of math for you. Try calculating the volume ($V = \\frac{4}{3} \\pi r^3$) of a sphere with radius 5, or the average of 5, 7, 10, and 14.\n\n# Precedence\n\nYou don\'t need to give your calculations a name. You can use them directly as the input to another function, but you have to surround them with parentheses:\n\n```elm\nmain : Element\nmain = asText (6 / 2)\n```\n\nIf you forget a set of parentheses (for example, `main = asText 6 / 2`), you\'ll get a type error like this:\n\n```text\nType mismatch between the following types:\n\n       Float\n\n       Graphics.Element.Element\n\n   It is related to the following expression:\n\n   (asText 6) / 2\n```\n\nElm prefers to add parentheses around uses of a function rather than arithmetic calculations. We say that function applications have higher <dfn>precedence</dfn> than the calculations, meaning that Elm will do the application first and the arithmetic second (feed 6 into `asText`, then divide whatever it outputs by 2--which doesn\'t work, because an Element isn\'t a number). We can add our own parentheses to change how Elm interprets precedence in our code (divide 6 by 2, and then use that result as the input to `asText`).\n\n# Exercises\n\n1. Delete everything you have in the online editor. Write a program from scratch to show the text \"Hello again!\" in the space on the right side of the screen. Make sure you understand how each part of your program works--if you find yourself looking back at the example code, re-read the relevant section and start over.\n\n1. Write type annotations for the following declarations:\n\n    1. `alpha = \"Hello!\"`\n    1. `beta = toString`\n    1. `gamma = Text.plainText`\n    1. `delta = toString 5`\n    1. `epsilon = toString >> Text.plainText`\n\n  <p class=note>The names in these declarations have no significance. They are simply there so you can write, for example, `alpha : ...`.\n\n1. Write a program to calculate and display the average of the numbers 4, 9, 16, and 25. Try this first without using the `asText` function from the [Function Composition](#elm-basics-function-composition) section, and then modify your program to use `asText`. Which program do you think is easier to understand?\n\n1. Answer the following questions about the functions `f`, `g`, and `h` with these type annotations:\n\n   ```elm\n   f : String -> number\n   g : String -> Element\n   h : number -> String\n   ```\n\n    1. Can you compose the functions `f` and `g` as `f >> g`? If so: what is the type of the result? If not: explain.\n    1. What about composing `f` and `h` as `f >> h`? If you can do this: what is the type of the result? If not: explain.\n    1. What is the type of `f >> h >> g`?\n\n        <p class=note>You can treat this as `(f >> h) >> g` or `f >> (h >> g)`; both mean the same thing. We say that function composition, like addition, satisfies the <dfn>associative property</dfn>.\n\n1. The `sqrt` function takes a number as input and outputs its square root. Use the function composition operator to create a function `fourthRoot` which outputs the fourth root of its argument. Test your function by writing a program to display the fourth root of 16 (the answer should be 2).\n\n"
              ,title: "Elm Basics"};
   _elm.Chapter.ElmBasics.values = {_op: _op
                                   ,data: data};
   return _elm.Chapter.ElmBasics.values;
};
Elm.Chapter = Elm.Chapter || {};
Elm.Chapter.HigherOrderFunctions = Elm.Chapter.HigherOrderFunctions || {};
Elm.Chapter.HigherOrderFunctions.make = function (_elm) {
   "use strict";
   _elm.Chapter = _elm.Chapter || {};
   _elm.Chapter.HigherOrderFunctions = _elm.Chapter.HigherOrderFunctions || {};
   if (_elm.Chapter.HigherOrderFunctions.values)
   return _elm.Chapter.HigherOrderFunctions.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Chapter.HigherOrderFunctions";
   var data = {_: {}
              ,content: "\n\nAn important concept in Elm is that functions are values just like numbers, Strings, and Elements. In this chapter, we\'ll explore different kinds of higher-order functions: functions whose inputs or outputs are themselves functions.\n\n# Currying\n\nType this program into the editor:\n\n```elm\nimport Text\nimport String\n\nmain = Text.plainText (String.repeat 5 \"Hello!\")\n```\n\nYou\'ll notice that we imported the String module, which has more useful functions for dealing with String-type values. `String.repeat` is a function that repeats a String the number of times you give it. It\'s similar to the functions you\'ve seen in the past, but it looks like it takes two inputs. It has the following type annotation:\n\n```elm\nString.repeat : Int -> String -> String\n```\n\n<p class=note>Int (one of Elm\'s number types) is short for integer. This means you can\'t give `String.repeat` a value with a decimal point like 4.35.\n\nBut, as we mentioned above, all functions take one input and turn it into one output. There\'s a trick here: you can also write the declaration for `main` like this:\n\n```elm\nmain = Text.plainText ((String.repeat 5) \"Hello!\")\n```\n\nAdding parentheses to the type annotation for `String.repeat` makes this even more clear:\n\n```elm\nString.repeat : Int -> (String -> String)\n```\n\nThat is, `String.repeat` really just takes one input: a number. It outputs a function, of type `String -> String`, which takes a String and repeats it that same number of times. This new function remembers the input number you gave to `String.repeat` and uses that number to produce its own outputs (Strings).\n\nJust like any other function, you can save the output that `String.repeat` produces and use it later in your code:\n\n```elm\nfiveTimes : String -> String\nfiveTimes = String.repeat 5\n\nthreeTimes : String -> String\nthreeTimes = String.repeat 3\n\nmain = Text.plainText (fiveTimes \"Hello!\" ++ threeTimes \"Goodbye!\")\n```\n\n<p class=note>The `++` operator you see here <dfn>concatenates</dfn> the two strings: it creates a new string with the letters in the first string (`\"Hello!Hello!Hello!Hello!Hello!\"`) followed by the letters in the second (`\"Goodbye!Goodbye!Goodbye!\"`). Like arithmetic, it has lower precedence than function application; so you could also write `(fiveTimes \"Hello!\") ++ (threeTimes \"Goodbye!\")` to mean the same thing.\n\nThis trick of outputting new functions that remember previous inputs is called <dfn>Currying</dfn> (after <a href=https://en.wikipedia.org/wiki/Haskell_Curry target=_blank>Haskell Curry</a>). It lets us create functions that appear to take any number of values as input in a language that only allows one input per function. As you saw above, this technique is so common that Elm allows us to remove the parentheses both in the type annotations on curried functions:\n\n```elm\nString.repeat : Int -> String -> String\n```\n\nand in the invocations of those functions:\n\n```elm\nmain = Text.plainText (String.repeat 5 \"Hello!\")\n```\n\nWe say that function application is <dfn>left-associative</dfn> because Elm treats `a b c` like `(a b) c` instead of `a (b c)`, and the `->` in function types is <dfn>right-associative</dfn> because Elm treats `a -> b -> c` like `a -> (b -> c)` instead of `(a -> b) -> c`. You can add parentheses to force Elm to interpret your code in a particular way.\n\n# Operators Revisited\n\nYou\'ve actually seen quite a few curried functions already--they just had strange names, like `+` and `*`. When a function\'s name comprises symbols rather than letters, Elm treats it as an <dfn>infix operator</dfn>. The \"infix\" here means that you put the function name *between* the two inputs rather than *in front of* them like we did with `String.repeat`:\n\n```elm\nmain = asText (1 + 2)\n```\n\nIf you want to use an infix operator like a normal function, you can put its name in parentheses:\n\n```elm\nmain = asText ((+) 1 2)\n```\n\n<p class=note>Keep in mind that the two sets of parentheses here mean two different things: the inner set tells Elm to treat `+` like a normal name instead of an infix operator, and the outer set prevents Elm from interpreting the chain of function applications as `(asText (+)) 1 2` since function application is left-associative.\n\nHere you can see that `(+)` is another curried function: it takes a number as input and produces another function (which itself takes a number as input and produces the sum). You could write its type signature like this:\n\n```elm\n(+) : number -> number -> number\n```\n\nOr, equivalently, like this:\n\n```elm\n(+) : number -> (number -> number)\n```\n\nYou can take advantage of the fact that (+) is a curried function by <dfn>partially applying</dfn> it:\n\n```elm\naddFive : number -> number\naddFive = (+) 5\n\nmain = asText (addFive 7)\n```\n\n# Composition Decomposition\n\nYou can also use the `>>` operator like a normal name. It has a type annotation that looks like this:\n\n```elm\n(>>) : (a -> b) -> (b -> c) -> a -> c\n```\n\nLowercase letters in a type are called <dfn>type variables</dfn>, because they vary based on where you use the function. You can replace a type variable with any type you like; for example, when we used the `>>` operator to compose `toString` and `Text.plainText`, you could annotate the type of `>>` as:\n\n```elm\n(>>) : (number -> String) -> (String -> Element) -> number -> Element\n```\n\n<p class=note>You can\'t replace the same type variable with two different types, however. If a function has the type `a -> a -> a`, it can be of type `String -> String -> String` or `Element -> Element -> Element`, but never `String -> Element -> String`.\n\nFrom this type annotation, it might seem like `>>` should take three inputs: a `number -> String` function, a `String -> Element` function, and a number; then it would produce an Element. This is a perfectly fine way to think about `>>`: as a function that takes two functions and a value as its inputs and returns as output the result of applying those functions in a chain. You could use it like this:\n\n```elm\nmain : Element\nmain = (>>) toString Text.plainText 4\n```\n\nThis code first applies `toString` to 4, then applies `Text.plainText` to the result.\n\nBut we\'ve talked about `>>` as an operator that takes just two functions as input, and produces as output another function that applies them in succession to its own input. You might annotate it like this:\n\n```elm\n(>>) : (number -> String) -> (String -> Element) -> (number -> Element)\n```\n\nThe important thing here is that these annotations are the same: these two ways of thinking about `>>` are both useful and valid, and are in fact equivalent. This is just another instance of currying, and we were just partially applying `>>` when we used it as an operator!\n\nYou can partially apply `>>` to only one input as well:\n\n```elm\nwithNumber = (>>) toString\n\nmain : Element\nmain = withNumber Text.plainText 100\n```\n\n`withNumber` is a function that takes a function and a number as input, converts the number to a String, and outputs the result of applying the input function to the String. We could annotate it like this:\n\n```elm\nwithNumber : (String -> a) -> number -> a\n```\n\nNotice that `withNumber`\'s type still has a type variable in it. Our partially applied function isn\'t picky about the output type of its input function--it could produce Strings, Elements, or even other functions.\n\nWe can even partially apply `withNumber`:\n\n```elm\nasText : number -> Element\nasText = withNumber Text.plainText\n\nmain : Element\nmain = asText 100\n```\n\nIn this instance, `withNumber` has type `(String -> Element) -> number -> Element`. We partially apply it to get a function `asText : number -> Element`.\n\n# Flip\n\nThe `flip` function is a higher-order function that works on curried functions. It takes as input a function of two inputs and produces as output another function of two inputs with the roles of those inputs swapped. For example, while `(-)` subtracts its second input from its first, `flip (-)` subtracts its first input from its second.\n\nFlip is useful for partially applying functions to inputs that come later in their definition:\n\n```elm\nrepeatHello = flip String.repeat \"Hello!\"\nrepeatHi = flip String.repeat \"Hi!\"\n\nmain = Text.plainText (repeatHello 6 ++ repeatHi 4 ++ repeatHello 3)\n```\n\n<p class=note>Make sure you import the `String` module so you can use the `String.repeat` function.\n\nFlip also allows you to swap the order of inputs to an operator:\n\n```elm\n(<<) = flip (>>)\n\nasText = Text.plainText << toString\n```\n\n<p class=note>Elm includes this definition of backwards function composition by default.\n\n# Application as an Operator\n\nElm has another function-related operator, `<|`, called the <dfn>application operator</dfn>. It takes a function and an input and applies the function to the input; that is, `f <| x` is the same as `f x`. This is useful because the operator `<|` has much lower precedence than normal function application; so instead of writing parentheses around nested function calls, you can use `<|`:\n\n```elm\nmain = Text.plainText (toString 16)\nmain = Text.plainText <| toString 16\n```\n\nIf you have more than one nested function application, you can use function composition to get rid of the other parentheses:\n\n```elm\nmain = Text.plainText << toString <| sqrt 16\nmain = Text.plainText (toString (sqrt 16))\n```\n\nThe application operator also allows you to treat function application like a normal function. You can, for example, define the backwards function application operator like this:\n\n```elm\n(|>) = flip (<|)\nmain = toString 16 |> Text.plainText\n```\n\n<p class=note>Elm includes this definition of `|>` by default.\n\n# Aside: Creating Functions\n\nSo far we\'ve created functions by composing and applying other functions. You can also create a function by explicitly naming its input:\n\n```elm\nsquare : number -> number\nsquare x = x * x\n\nmain = asText (square 4)\n```\n\nWhen you apply a function defined in this way, Elm replaces each occurrence of the input name on the right hand side of the `=` with the input value you provide. For example, when we write `square 4`, Elm calculates `4 * 4` and uses the result as the output of `square`.\n\nYou can create a curried function by putting more than one input name before the `=` sign:\n\n```elm\naverage : number -> number -> number\naverage x y = (x + y) / 2\n```\n\n# Lists of Things\n\n<dfn>Lists</dfn> are another kind of value in Elm. They look like this:\n\n```elm\nevenNumbers : List number\nevenNumbers = [2, 2, 4, 4, 6, 6]\n\nnoNumbers : List number\nnoNumbers = []\n\ntodo : List String\ntodo =\n  [ \"Learn Elm\"\n  , \"Make Games\"\n  , \"???\"\n  , \"Profit!\"\n  ]\n```\n\nEach list can contain any number of items--even no items at all, in the case of `noNumbers`--but all the items in a list must be of the same type. You can\'t put `10` and `\"Learn Elm\"` into the same list, because one is a number and the other is a String. The type of a list is `List a`, where `a` is the type of each item in the list.\n\nLists can even contain functions, as long as they all have the same input and output types:\n\n```elm\nrepeaters : List (String -> String)\nrepeaters = [String.repeat 2, String.repeat 5, String.repeat 10]\n```\n\nThey can also contain other lists:\n\n```elm\nnestedLists : List (List number)\nnestedLists = [[1, 2, 3], [4, 5], [6, 7, 8, 9]]\n```\n\nThe `toString` function actually is actually an `a -> String` function--that is, it can convert any kind of value into a string. Before now it was only useful on numbers, but you can also use it to convert lists to Strings so you can display them:\n\n```elm\nmain = Text.plainText (toString [1, 2, 3, 4])\n```\n\nElm also provides the shortcut function `Text.asText : a -> Element`, which converts its input to a String and then outputs an Element with that String in a monospace font:\n\n```elm\nmain = Text.asText [1, 2, 3, 4]\n```\n\n# Working with Lists\n\nYou can use the `List.length` function from the `List` module to compute the number of items in a list.\n\n```elm\nimport List\n\nmain = Text.plainText (toString (List.length [4, 5, 6]))\n```\n\nSince `List.length` works on any kind of list, you could annotate it like this:\n\n```elm\nList.length : List a -> Int\n```\n\nThe `List` module provides some useful functions for dealing with lists of numbers:\n\n- `List.sum` adds the numbers in a list and outputs the sum.\n\n  ```elm\n  List.sum [5, 5, 7, 7, 9, 9]\n  ```\n\n- `List.product` multiplies the numbers in a list and outputs the product.\n\n  ```elm\n  List.product [1, 2, 3, 4]\n  ```\n\n- `List.maximum` outputs the largest number in a list.\n\n  ```elm\n  List.maximum [3, -5, 7, 2, 3]\n  ```\n\n- `List.minimum` outputs the smallest number in a list.\n\n  ```elm\n  List.minimum [3, -5, 7, 2, 3]\n  ```\n\nand for dealing with lists in general:\n\n-  `List.append` takes two lists and outputs a new list with elements from both of the input lists.\n\n  ```elm\n  List.append [1, 2, 3] [4, 5, 6]\n  ```\n\n-  `List.repeat` takes a number <var>n</var> and a value and outputs a list with that value repeated <var>n</var> times.\n\n  ```elm\n  List.repeat 5 \"Hello!\"\n  ```\n\nFinally, if you want a list of then numbers between 1 and 5 (including 1 and 5), you can just write `[1..5]`.\n\n# Map, 2, 3, 4\n\nA useful higher-order function for dealing with lists is called `List.map`. It has the following type:\n\n```elm\nList.map : (a -> b) -> List a -> List b\n```\n\n<p class=idea>Just by looking at this type annotation, what do you think the `List.map` function does?\n\n`List.map` takes as input a function from one type to another, and a list of values of that first type. It applies the function to each item of the list and outputs a new list with the results of each application. For example, these two declarations of `numbers` are the same:\n\n```elm\nnumbers = List.map sqrt [1, 4, 9, 16]\n\nnumbers = [sqrt 1, sqrt 4, sqrt 9, sqrt 16]\n```\n\nYou can also think of `map` as a function that turn functions which operate on a single value into functions that operate on lists of values.\n\n```elm\nsqrt : number -> number\n\nlistSqrt : List number -> List number\nlistSqrt = List.map sqrt\n```\n\nThe `List` module also contains `List.map2`, `List.map3`, etc., of the following types:\n\n```elm\nList.map2 : (a -> b -> c) -> List a -> List b -> List c\nList.map3 : (a -> b -> c -> d) -> List a -> List b -> List c -> List d\n...\n```\n\n`map2` is like `map`, but it operates on curried functions of two inputs. For each item in the output list, it draws inputs from its two input lists:\n\n```elm\nsums : List number\nsums = List.map2 (+) [1, 2, 3] [4, 5, 6]\n\ngreetings : List String\ngreetings =\n  List.map2 (++)\n  [\"Hello \", \"Good day \", \"Hi \"]\n  [\"Alice\", \"Bob\", \"Carol\"]\n\nmain = Text.asText sums\n```\n\n<p class=idea>What happens when you use `map` instead of `map2` on a curried function of two inputs?\n\nSimilarly, `map3` and `map4` operate on curried functions of three and four inputs, respectively.\n\n# Fold (from the Right)\n\n`List.foldr` is another extremely useful function for dealing with lists. It lets you combine all the items in a list using a curried function of two inputs. Starting with a <dfn>base case</dfn> you supply, `List.foldr` applies the input function to the last item of the list and the base case; then to the second-to-last item of the list and the result of the previous application; and so on, until there are no more list items left. So when you write:\n\n```elm\ncountUp = List.foldr (++) \"\" [\"One\", \"Two\", \"Three\"]\n```\n\nElm computes:\n\n```elm\ncountUp = \"One\" ++ (\"Two\" ++ (\"Three\" ++ \"\"))\n```\n\nIf the list is empty, `List.foldr` just outputs the base case unchanged. If the operation doesn\'t make sense on empty lists, you can use `List.foldr1`, which uses the last item of the list as its base case:\n\n```elm\ncountUp = List.foldr1 (++) [\"One\", \"Two\", \"Three\"]\ncountUp = \"One\" ++ (\"Two\" ++ \"Three\")\n```\n\n`List.foldr` describes a very general and very common pattern of functions that operate on lists. You can define all of the functions mentioned above in terms of it; for example, `List.sum` looks like this:\n\n```elm\nList.sum = List.foldr (+) 0\n```\n\n<p class=idea>Define `List.maximum` using a fold and the `max` function, which returns the larger of its two input numbers. Should you use `List.foldr` or `List.foldr1`?\n\n# Filtering Lists\n\n`List.filter` lets you create a new list with a subset of the items in the input list. It takes as input a function which decides whether to include each item in the final list. This function, called a <dfn>predicate</dfn>, returns a value of type Bool.\n\nBool (short for Boolean, named after <a href=https://en.wikipedia.org/wiki/George_Boole target=_blank>George Boole</a>) is a type with only two values--`True` and `False`. They mean just what they appear to mean--that something is true (e.g., `3 < 4`) or false (e.g., `5 > 10`), respectively. If the predicate returns `True` for an item, that item is included in the output of `List.filter`; if it returns `False`, that item is excluded.\n\nFor example, to select the items in a list greater than 10, you could write this:\n\n```elm\nnumbers = [4, 6, 15, 4, 5, 20, 3, 26, 5, 9]\n\nisLarge : number -> Bool\nisLarge x = x > 10\n\nlargeNumbers = List.filter isLarge numbers\n```\n\n<p class=note>Predicates often have names that start with *is*, e.g. `isLarge` or `isEven` or `isActive`.\n\nOr, more concisely:\n\n```elm\nlargeNumbers = List.filter ((<) 10) numbers\n```\n\n<p class=idea>Why does this example use `(<) 10` instead of, for example, `(>) 10`? Can you rewrite it using `flip` and `(>)`?\n\nElm provides the basic comparison operators `<`, `<=` (for $\\leq$), `>=` (for $\\geq$), and `>`, as well as the equality operator `==` ($=$ is used for assignment, so Elm uses a different operator) and the inequality operator `/=` (which looks kind of like $\\neq$). The following are all `True`:\n\n```elm\n5 > 3\n4 >= 4\n4 == 4\n5 /= 2\n1 <= 1\n2 < 7\n```\n\nYou can combine Booleans using the operators `&&`, which outputs `True` only if both of its inputs are `True` (read this as *and*) and `||`, which outputs `True` if one or more of its inputs is `True` (read this as *or*). The following are all `True`:\n\n```elm\n3 < 4 && 5 < 6\n1 > 2 || 3 == 3\n1 < 2 || 3 < 2\n4 == 4 || 5 == 5\n```\n\nFinally, the `not` function inverts a Bool value: it outputs `True` when given `False`, and `False` when given `True`.\n\n# More List Functions\n\nThe `List` module provides a number of other functions for you to use in your programs. You can find the full list on the <a href=http://package.elm-lang.org/packages/elm-lang/core/latest/List target=_blank>Elm package website</a>, which lists each function with its type signature, a description, and an example of how to use it.\n\n<p class=idea>You can explore the functions and values in other modules as well by clicking the <a href=http://package.elm-lang.org/packages/elm-lang/core/latest target=_blank>core</a> link at the top of the page. Try, for example <a href=http://package.elm-lang.org/packages/elm-lang/core/latest/Basics target=_blank>Basics</a> (automatically imported in every Elm file) or <a href=http://package.elm-lang.org/packages/elm-lang/core/latest/String target=_blank>String</a>.\n\n# Exercises\n\n1. Explain the difference between the expressions `String.repeat`, `String.repeat 5`, and `String.repeat 5 \"Hello!\"`. Give the type of each expression.\n\n1. The `max` function has a type of `number -> number -> number` and returns the larger of its two inputs; similarly, `min` returns the smaller of its two inputs. Use these two functions to define:\n\n  ```elm\n  clamp : number -> number -> number -> number\n  ```\n\n  Where `clamp low high x` outputs the number between `low` and `high` (inclusive) which is closest to `x`; that is, `clamp low high x` outputs `low` if `x` is less than `low`, `high` if `x` is greater than `high`, and `x` otherwise.\n\n  Use partial application and function composition to define clamp in terms of its first two inputs (`clamp low high = ...`).\n\n1. Explain in words what each of the following functions do. Also give the type of each function.\n\n  1. `String.repeat 5 >> String.repeat 3`\n  1. `flip String.repeat \"Hello\" >> String.repeat 2`\n  1. `min 4 >> flip String.repeat \"A\"`\n  1. `(-) 4`\n  1. `((-) >> (<|)) 4`\n\n1. Write type annotations for the following type declarations:\n\n  1. `alpha = max 4`\n  1. `beta = String.repeat << (+) 4`\n  1. `gamma = (>>) sqrt >> (>>)`\n  1. `delta = flip >> flip`\n  1. `epsilon = (>>) toString >> (|>)`\n\n1. Define `range : List number -> number`, which returns the difference between the smallest and largest elements in a list.\n\n1. `List.head` outputs the first item of a list and `List.tail` outputs all but the first element; for example, `List.head [1, 2, 3]` is 1 and `List.tail [1, 2, 3]` is `[2, 3]`. Use these two functions to define `joinWords`, which takes a list of Strings and outputs a String formed by joining the strings together with spaces, e.g., `joinWords [\"a\", \"few\", \"words\"]` would be `\"a few words\"`.\n\n1. Write type annotations for the following declarations:\n\n  1. `alpha = List.foldr (++) \"...\"`\n  1. `beta = List.map (++)`\n  1. `gamma = List.map2 (++)`\n  1. `delta = List.foldr (>>)`\n  1. `epsilon = flip List.map [1, 2, 3]`\n  1. `zeta = List.map (|>) [1, 2, 3]`\n\n1. Write a function `reasonable : List number -> List number`, which outputs the numbers in its input list that are between 1 and 100 (inclusive).\n\n1. Define `iterate : Int -> (a -> a) -> a -> a`, which takes a number and a function <var>f</var> and returns a function which repeatedly applies <var>f</var> the given number of times. For example, `iterate 3 ((++) \".\") \"Hello?\"` would give `\"...Hello?\"`.\n\n  You may find it helpful to use the `always` function, which takes two inputs and always returns the first one (i.e., `always x y = x`), or the `identity` function, which returns its input unchanged (i.e., `identity x = x`).\n\n"
              ,title: "Higher-order Functions"};
   _elm.Chapter.HigherOrderFunctions.values = {_op: _op
                                              ,data: data};
   return _elm.Chapter.HigherOrderFunctions.values;
};
Elm.Chapter = Elm.Chapter || {};
Elm.Chapter.TimeAndSpace = Elm.Chapter.TimeAndSpace || {};
Elm.Chapter.TimeAndSpace.make = function (_elm) {
   "use strict";
   _elm.Chapter = _elm.Chapter || {};
   _elm.Chapter.TimeAndSpace = _elm.Chapter.TimeAndSpace || {};
   if (_elm.Chapter.TimeAndSpace.values)
   return _elm.Chapter.TimeAndSpace.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Chapter.TimeAndSpace";
   var data = {_: {}
              ,content: "\n\nSo far, you\'ve been working Elm programs that display static text. In this chapter, you\'ll learn how to make your programs vary over time and how to make them display 2D graphics.\n\n# Signals of Things\n\n# Map (Again)\n\n# Fold (from the Past)\n\n# Making a Collage\n\n# Shapes and Colors\n\n# Transformations\n\n# Groups\n\n# Paths\n\n# Exercises\n\n"
              ,title: "Time And Space"};
   _elm.Chapter.TimeAndSpace.values = {_op: _op
                                      ,data: data};
   return _elm.Chapter.TimeAndSpace.values;
};
Elm.Chapter = Elm.Chapter || {};
Elm.Chapter.UserInput = Elm.Chapter.UserInput || {};
Elm.Chapter.UserInput.make = function (_elm) {
   "use strict";
   _elm.Chapter = _elm.Chapter || {};
   _elm.Chapter.UserInput = _elm.Chapter.UserInput || {};
   if (_elm.Chapter.UserInput.values)
   return _elm.Chapter.UserInput.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Chapter.UserInput";
   var data = {_: {}
              ,content: "\n\nAnimations are great, but they\'re not what we set out to create. Games, unlike animations, are interactive, so in this chapter you\'ll learn how to respond to user input from the mouse and keyboard.\n\n# Movement with the Keyboard\n\n# Instantaneous Actions\n\n# Exercises\n\n"
              ,title: "User Input"};
   _elm.Chapter.UserInput.values = {_op: _op
                                   ,data: data};
   return _elm.Chapter.UserInput.values;
};
Elm.Char = Elm.Char || {};
Elm.Char.make = function (_elm) {
   "use strict";
   _elm.Char = _elm.Char || {};
   if (_elm.Char.values)
   return _elm.Char.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Char",
   $Native$Char = Elm.Native.Char.make(_elm);
   var fromCode = $Native$Char.fromCode;
   var toCode = $Native$Char.toCode;
   var toLocaleLower = $Native$Char.toLocaleLower;
   var toLocaleUpper = $Native$Char.toLocaleUpper;
   var toLower = $Native$Char.toLower;
   var toUpper = $Native$Char.toUpper;
   var isHexDigit = $Native$Char.isHexDigit;
   var isOctDigit = $Native$Char.isOctDigit;
   var isDigit = $Native$Char.isDigit;
   var isLower = $Native$Char.isLower;
   var isUpper = $Native$Char.isUpper;
   _elm.Char.values = {_op: _op
                      ,isUpper: isUpper
                      ,isLower: isLower
                      ,isDigit: isDigit
                      ,isOctDigit: isOctDigit
                      ,isHexDigit: isHexDigit
                      ,toUpper: toUpper
                      ,toLower: toLower
                      ,toLocaleUpper: toLocaleUpper
                      ,toLocaleLower: toLocaleLower
                      ,toCode: toCode
                      ,fromCode: fromCode};
   return _elm.Char.values;
};
Elm.Color = Elm.Color || {};
Elm.Color.make = function (_elm) {
   "use strict";
   _elm.Color = _elm.Color || {};
   if (_elm.Color.values)
   return _elm.Color.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Color",
   $Basics = Elm.Basics.make(_elm);
   var Radial = F5(function (a,
   b,
   c,
   d,
   e) {
      return {ctor: "Radial"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d
             ,_4: e};
   });
   var radial = Radial;
   var Linear = F3(function (a,
   b,
   c) {
      return {ctor: "Linear"
             ,_0: a
             ,_1: b
             ,_2: c};
   });
   var linear = Linear;
   var fmod = F2(function (f,n) {
      return function () {
         var integer = $Basics.floor(f);
         return $Basics.toFloat(A2($Basics._op["%"],
         integer,
         n)) + f - $Basics.toFloat(integer);
      }();
   });
   var rgbToHsl = F3(function (red,
   green,
   blue) {
      return function () {
         var b = $Basics.toFloat(blue) / 255;
         var g = $Basics.toFloat(green) / 255;
         var r = $Basics.toFloat(red) / 255;
         var cMax = A2($Basics.max,
         A2($Basics.max,r,g),
         b);
         var cMin = A2($Basics.min,
         A2($Basics.min,r,g),
         b);
         var c = cMax - cMin;
         var lightness = (cMax + cMin) / 2;
         var saturation = _U.eq(lightness,
         0) ? 0 : c / (1 - $Basics.abs(2 * lightness - 1));
         var hue = $Basics.degrees(60) * (_U.eq(cMax,
         r) ? A2(fmod,
         (g - b) / c,
         6) : _U.eq(cMax,
         g) ? (b - r) / c + 2 : _U.eq(cMax,
         b) ? (r - g) / c + 4 : _U.badIf($moduleName,
         "between lines 141 and 143"));
         return {ctor: "_Tuple3"
                ,_0: hue
                ,_1: saturation
                ,_2: lightness};
      }();
   });
   var hslToRgb = F3(function (hue,
   saturation,
   lightness) {
      return function () {
         var hue$ = hue / $Basics.degrees(60);
         var chroma = (1 - $Basics.abs(2 * lightness - 1)) * saturation;
         var x = chroma * (1 - $Basics.abs(A2(fmod,
         hue$,
         2) - 1));
         var $ = _U.cmp(hue$,
         0) < 0 ? {ctor: "_Tuple3"
                  ,_0: 0
                  ,_1: 0
                  ,_2: 0} : _U.cmp(hue$,
         1) < 0 ? {ctor: "_Tuple3"
                  ,_0: chroma
                  ,_1: x
                  ,_2: 0} : _U.cmp(hue$,
         2) < 0 ? {ctor: "_Tuple3"
                  ,_0: x
                  ,_1: chroma
                  ,_2: 0} : _U.cmp(hue$,
         3) < 0 ? {ctor: "_Tuple3"
                  ,_0: 0
                  ,_1: chroma
                  ,_2: x} : _U.cmp(hue$,
         4) < 0 ? {ctor: "_Tuple3"
                  ,_0: 0
                  ,_1: x
                  ,_2: chroma} : _U.cmp(hue$,
         5) < 0 ? {ctor: "_Tuple3"
                  ,_0: x
                  ,_1: 0
                  ,_2: chroma} : _U.cmp(hue$,
         6) < 0 ? {ctor: "_Tuple3"
                  ,_0: chroma
                  ,_1: 0
                  ,_2: x} : {ctor: "_Tuple3"
                            ,_0: 0
                            ,_1: 0
                            ,_2: 0},
         r = $._0,
         g = $._1,
         b = $._2;
         var m = lightness - chroma / 2;
         return {ctor: "_Tuple3"
                ,_0: r + m
                ,_1: g + m
                ,_2: b + m};
      }();
   });
   var toRgb = function (color) {
      return function () {
         switch (color.ctor)
         {case "HSLA":
            return function () {
                 var $ = A3(hslToRgb,
                 color._0,
                 color._1,
                 color._2),
                 r = $._0,
                 g = $._1,
                 b = $._2;
                 return {_: {}
                        ,alpha: color._3
                        ,blue: $Basics.round(255 * b)
                        ,green: $Basics.round(255 * g)
                        ,red: $Basics.round(255 * r)};
              }();
            case "RGBA": return {_: {}
                                ,alpha: color._3
                                ,blue: color._2
                                ,green: color._1
                                ,red: color._0};}
         _U.badCase($moduleName,
         "between lines 115 and 123");
      }();
   };
   var toHsl = function (color) {
      return function () {
         switch (color.ctor)
         {case "HSLA": return {_: {}
                              ,alpha: color._3
                              ,hue: color._0
                              ,lightness: color._2
                              ,saturation: color._1};
            case "RGBA":
            return function () {
                 var $ = A3(rgbToHsl,
                 color._0,
                 color._1,
                 color._2),
                 h = $._0,
                 s = $._1,
                 l = $._2;
                 return {_: {}
                        ,alpha: color._3
                        ,hue: h
                        ,lightness: l
                        ,saturation: s};
              }();}
         _U.badCase($moduleName,
         "between lines 105 and 112");
      }();
   };
   var HSLA = F4(function (a,
   b,
   c,
   d) {
      return {ctor: "HSLA"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d};
   });
   var hsla = F4(function (hue,
   saturation,
   lightness,
   alpha) {
      return A4(HSLA,
      hue - $Basics.turns($Basics.toFloat($Basics.floor(hue / (2 * $Basics.pi)))),
      saturation,
      lightness,
      alpha);
   });
   var hsl = F3(function (hue,
   saturation,
   lightness) {
      return A4(hsla,
      hue,
      saturation,
      lightness,
      1);
   });
   var complement = function (color) {
      return function () {
         switch (color.ctor)
         {case "HSLA": return A4(hsla,
              color._0 + $Basics.degrees(180),
              color._1,
              color._2,
              color._3);
            case "RGBA":
            return function () {
                 var $ = A3(rgbToHsl,
                 color._0,
                 color._1,
                 color._2),
                 h = $._0,
                 s = $._1,
                 l = $._2;
                 return A4(hsla,
                 h + $Basics.degrees(180),
                 s,
                 l,
                 color._3);
              }();}
         _U.badCase($moduleName,
         "between lines 96 and 102");
      }();
   };
   var grayscale = function (p) {
      return A4(HSLA,0,0,1 - p,1);
   };
   var greyscale = function (p) {
      return A4(HSLA,0,0,1 - p,1);
   };
   var RGBA = F4(function (a,
   b,
   c,
   d) {
      return {ctor: "RGBA"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d};
   });
   var rgba = RGBA;
   var rgb = F3(function (r,g,b) {
      return A4(RGBA,r,g,b,1);
   });
   var lightRed = A4(RGBA,
   239,
   41,
   41,
   1);
   var red = A4(RGBA,204,0,0,1);
   var darkRed = A4(RGBA,
   164,
   0,
   0,
   1);
   var lightOrange = A4(RGBA,
   252,
   175,
   62,
   1);
   var orange = A4(RGBA,
   245,
   121,
   0,
   1);
   var darkOrange = A4(RGBA,
   206,
   92,
   0,
   1);
   var lightYellow = A4(RGBA,
   255,
   233,
   79,
   1);
   var yellow = A4(RGBA,
   237,
   212,
   0,
   1);
   var darkYellow = A4(RGBA,
   196,
   160,
   0,
   1);
   var lightGreen = A4(RGBA,
   138,
   226,
   52,
   1);
   var green = A4(RGBA,
   115,
   210,
   22,
   1);
   var darkGreen = A4(RGBA,
   78,
   154,
   6,
   1);
   var lightBlue = A4(RGBA,
   114,
   159,
   207,
   1);
   var blue = A4(RGBA,
   52,
   101,
   164,
   1);
   var darkBlue = A4(RGBA,
   32,
   74,
   135,
   1);
   var lightPurple = A4(RGBA,
   173,
   127,
   168,
   1);
   var purple = A4(RGBA,
   117,
   80,
   123,
   1);
   var darkPurple = A4(RGBA,
   92,
   53,
   102,
   1);
   var lightBrown = A4(RGBA,
   233,
   185,
   110,
   1);
   var brown = A4(RGBA,
   193,
   125,
   17,
   1);
   var darkBrown = A4(RGBA,
   143,
   89,
   2,
   1);
   var black = A4(RGBA,0,0,0,1);
   var white = A4(RGBA,
   255,
   255,
   255,
   1);
   var lightGrey = A4(RGBA,
   238,
   238,
   236,
   1);
   var grey = A4(RGBA,
   211,
   215,
   207,
   1);
   var darkGrey = A4(RGBA,
   186,
   189,
   182,
   1);
   var lightGray = A4(RGBA,
   238,
   238,
   236,
   1);
   var gray = A4(RGBA,
   211,
   215,
   207,
   1);
   var darkGray = A4(RGBA,
   186,
   189,
   182,
   1);
   var lightCharcoal = A4(RGBA,
   136,
   138,
   133,
   1);
   var charcoal = A4(RGBA,
   85,
   87,
   83,
   1);
   var darkCharcoal = A4(RGBA,
   46,
   52,
   54,
   1);
   _elm.Color.values = {_op: _op
                       ,RGBA: RGBA
                       ,HSLA: HSLA
                       ,rgba: rgba
                       ,rgb: rgb
                       ,hsla: hsla
                       ,hsl: hsl
                       ,grayscale: grayscale
                       ,greyscale: greyscale
                       ,complement: complement
                       ,toHsl: toHsl
                       ,toRgb: toRgb
                       ,fmod: fmod
                       ,rgbToHsl: rgbToHsl
                       ,hslToRgb: hslToRgb
                       ,Linear: Linear
                       ,Radial: Radial
                       ,linear: linear
                       ,radial: radial
                       ,lightRed: lightRed
                       ,red: red
                       ,darkRed: darkRed
                       ,lightOrange: lightOrange
                       ,orange: orange
                       ,darkOrange: darkOrange
                       ,lightYellow: lightYellow
                       ,yellow: yellow
                       ,darkYellow: darkYellow
                       ,lightGreen: lightGreen
                       ,green: green
                       ,darkGreen: darkGreen
                       ,lightBlue: lightBlue
                       ,blue: blue
                       ,darkBlue: darkBlue
                       ,lightPurple: lightPurple
                       ,purple: purple
                       ,darkPurple: darkPurple
                       ,lightBrown: lightBrown
                       ,brown: brown
                       ,darkBrown: darkBrown
                       ,black: black
                       ,white: white
                       ,lightGrey: lightGrey
                       ,grey: grey
                       ,darkGrey: darkGrey
                       ,lightGray: lightGray
                       ,gray: gray
                       ,darkGray: darkGray
                       ,lightCharcoal: lightCharcoal
                       ,charcoal: charcoal
                       ,darkCharcoal: darkCharcoal};
   return _elm.Color.values;
};
Elm.Contents = Elm.Contents || {};
Elm.Contents.make = function (_elm) {
   "use strict";
   _elm.Contents = _elm.Contents || {};
   if (_elm.Contents.values)
   return _elm.Contents.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Contents",
   $Chapter = Elm.Chapter.make(_elm),
   $Chapter$DataStructures = Elm.Chapter.DataStructures.make(_elm),
   $Chapter$ElmBasics = Elm.Chapter.ElmBasics.make(_elm),
   $Chapter$HigherOrderFunctions = Elm.Chapter.HigherOrderFunctions.make(_elm),
   $Chapter$TimeAndSpace = Elm.Chapter.TimeAndSpace.make(_elm),
   $Chapter$UserInput = Elm.Chapter.UserInput.make(_elm);
   var chapters = $Chapter.makeChapters(_L.fromArray([$Chapter$ElmBasics.data
                                                     ,$Chapter$HigherOrderFunctions.data
                                                     ,$Chapter$DataStructures.data
                                                     ,$Chapter$TimeAndSpace.data
                                                     ,$Chapter$UserInput.data]));
   _elm.Contents.values = {_op: _op
                          ,chapters: chapters};
   return _elm.Contents.values;
};
Elm.Dict = Elm.Dict || {};
Elm.Dict.make = function (_elm) {
   "use strict";
   _elm.Dict = _elm.Dict || {};
   if (_elm.Dict.values)
   return _elm.Dict.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Dict",
   $Basics = Elm.Basics.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Debug = Elm.Native.Debug.make(_elm),
   $String = Elm.String.make(_elm);
   var foldr = F3(function (f,
   acc,
   t) {
      return function () {
         switch (t.ctor)
         {case "RBEmpty":
            switch (t._0.ctor)
              {case "LBlack": return acc;}
              break;
            case "RBNode": return A3(foldr,
              f,
              A3(f,
              t._1,
              t._2,
              A3(foldr,f,acc,t._4)),
              t._3);}
         _U.badCase($moduleName,
         "between lines 409 and 417");
      }();
   });
   var keys = function (dict) {
      return A3(foldr,
      F3(function (key,
      value,
      keyList) {
         return A2($List._op["::"],
         key,
         keyList);
      }),
      _L.fromArray([]),
      dict);
   };
   var values = function (dict) {
      return A3(foldr,
      F3(function (key,
      value,
      valueList) {
         return A2($List._op["::"],
         value,
         valueList);
      }),
      _L.fromArray([]),
      dict);
   };
   var toList = function (dict) {
      return A3(foldr,
      F3(function (key,value,list) {
         return A2($List._op["::"],
         {ctor: "_Tuple2"
         ,_0: key
         ,_1: value},
         list);
      }),
      _L.fromArray([]),
      dict);
   };
   var foldl = F3(function (f,
   acc,
   dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBlack": return acc;}
              break;
            case "RBNode": return A3(foldl,
              f,
              A3(f,
              dict._1,
              dict._2,
              A3(foldl,f,acc,dict._3)),
              dict._4);}
         _U.badCase($moduleName,
         "between lines 398 and 406");
      }();
   });
   var isBBlack = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBBlack": return true;}
              break;
            case "RBNode":
            switch (dict._0.ctor)
              {case "BBlack": return true;}
              break;}
         return false;
      }();
   };
   var showFlag = function (f) {
      return function () {
         switch (f.ctor)
         {case "Insert": return "Insert";
            case "Remove": return "Remove";
            case "Same": return "Same";}
         _U.badCase($moduleName,
         "between lines 174 and 180");
      }();
   };
   var Same = {ctor: "Same"};
   var Remove = {ctor: "Remove"};
   var Insert = {ctor: "Insert"};
   var get = F2(function (targetKey,
   dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBlack":
                 return $Maybe.Nothing;}
              break;
            case "RBNode":
            return function () {
                 var _v29 = A2($Basics.compare,
                 targetKey,
                 dict._1);
                 switch (_v29.ctor)
                 {case "EQ":
                    return $Maybe.Just(dict._2);
                    case "GT": return A2(get,
                      targetKey,
                      dict._4);
                    case "LT": return A2(get,
                      targetKey,
                      dict._3);}
                 _U.badCase($moduleName,
                 "between lines 130 and 136");
              }();}
         _U.badCase($moduleName,
         "between lines 125 and 136");
      }();
   });
   var member = F2(function (key,
   dict) {
      return function () {
         var _v30 = A2(get,key,dict);
         switch (_v30.ctor)
         {case "Just": return true;
            case "Nothing": return false;}
         _U.badCase($moduleName,
         "between lines 139 and 141");
      }();
   });
   var max = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            return $Native$Debug.crash("(max Empty) is not defined");
            case "RBNode":
            switch (dict._4.ctor)
              {case "RBEmpty":
                 return {ctor: "_Tuple2"
                        ,_0: dict._1
                        ,_1: dict._2};}
              return max(dict._4);}
         _U.badCase($moduleName,
         "between lines 101 and 122");
      }();
   };
   var min = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBlack":
                 return $Native$Debug.crash("(min Empty) is not defined");}
              break;
            case "RBNode":
            switch (dict._3.ctor)
              {case "RBEmpty":
                 switch (dict._3._0.ctor)
                   {case "LBlack":
                      return {ctor: "_Tuple2"
                             ,_0: dict._1
                             ,_1: dict._2};}
                   break;}
              return min(dict._3);}
         _U.badCase($moduleName,
         "between lines 88 and 96");
      }();
   };
   var RBEmpty = function (a) {
      return {ctor: "RBEmpty"
             ,_0: a};
   };
   var RBNode = F5(function (a,
   b,
   c,
   d,
   e) {
      return {ctor: "RBNode"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d
             ,_4: e};
   });
   var showLColor = function (color) {
      return function () {
         switch (color.ctor)
         {case "LBBlack":
            return "LBBlack";
            case "LBlack": return "LBlack";}
         _U.badCase($moduleName,
         "between lines 71 and 73");
      }();
   };
   var LBBlack = {ctor: "LBBlack"};
   var LBlack = {ctor: "LBlack"};
   var empty = RBEmpty(LBlack);
   var map = F2(function (f,dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBlack":
                 return RBEmpty(LBlack);}
              break;
            case "RBNode": return A5(RBNode,
              dict._0,
              dict._1,
              A2(f,dict._1,dict._2),
              A2(map,f,dict._3),
              A2(map,f,dict._4));}
         _U.badCase($moduleName,
         "between lines 386 and 395");
      }();
   });
   var showNColor = function (c) {
      return function () {
         switch (c.ctor)
         {case "BBlack": return "BBlack";
            case "Black": return "Black";
            case "NBlack": return "NBlack";
            case "Red": return "Red";}
         _U.badCase($moduleName,
         "between lines 57 and 61");
      }();
   };
   var reportRemBug = F4(function (msg,
   c,
   lgot,
   rgot) {
      return $Native$Debug.crash($String.concat(_L.fromArray(["Internal red-black tree invariant violated, expected "
                                                             ,msg
                                                             ," and got "
                                                             ,showNColor(c)
                                                             ,"/"
                                                             ,lgot
                                                             ,"/"
                                                             ,rgot
                                                             ,"\nPlease report this bug to <https://github.com/elm-lang/Elm/issues>"])));
   });
   var NBlack = {ctor: "NBlack"};
   var BBlack = {ctor: "BBlack"};
   var Black = {ctor: "Black"};
   var ensureBlackRoot = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBlack": return dict;}
              break;
            case "RBNode":
            switch (dict._0.ctor)
              {case "Black": return dict;
                 case "Red": return A5(RBNode,
                   Black,
                   dict._1,
                   dict._2,
                   dict._3,
                   dict._4);}
              break;}
         _U.badCase($moduleName,
         "between lines 146 and 158");
      }();
   };
   var blackish = function (t) {
      return function () {
         switch (t.ctor)
         {case "RBEmpty": return true;
            case "RBNode":
            return _U.eq(t._0,
              Black) || _U.eq(t._0,BBlack);}
         _U.badCase($moduleName,
         "between lines 331 and 333");
      }();
   };
   var blacken = function (t) {
      return function () {
         switch (t.ctor)
         {case "RBEmpty":
            return RBEmpty(LBlack);
            case "RBNode": return A5(RBNode,
              Black,
              t._1,
              t._2,
              t._3,
              t._4);}
         _U.badCase($moduleName,
         "between lines 370 and 372");
      }();
   };
   var Red = {ctor: "Red"};
   var moreBlack = function (color) {
      return function () {
         switch (color.ctor)
         {case "BBlack":
            return $Native$Debug.crash("Can\'t make a double black node more black!");
            case "Black": return BBlack;
            case "NBlack": return Red;
            case "Red": return Black;}
         _U.badCase($moduleName,
         "between lines 236 and 240");
      }();
   };
   var lessBlack = function (color) {
      return function () {
         switch (color.ctor)
         {case "BBlack": return Black;
            case "Black": return Red;
            case "NBlack":
            return $Native$Debug.crash("Can\'t make a negative black node less black!");
            case "Red": return NBlack;}
         _U.badCase($moduleName,
         "between lines 245 and 249");
      }();
   };
   var lessBlackTree = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBBlack":
                 return RBEmpty(LBlack);}
              break;
            case "RBNode": return A5(RBNode,
              lessBlack(dict._0),
              dict._1,
              dict._2,
              dict._3,
              dict._4);}
         _U.badCase($moduleName,
         "between lines 254 and 256");
      }();
   };
   var redden = function (t) {
      return function () {
         switch (t.ctor)
         {case "RBEmpty":
            return $Native$Debug.crash("can\'t make a Leaf red");
            case "RBNode": return A5(RBNode,
              Red,
              t._1,
              t._2,
              t._3,
              t._4);}
         _U.badCase($moduleName,
         "between lines 378 and 383");
      }();
   };
   var balance_node = function (t) {
      return function () {
         var assemble = function (col) {
            return function (xk) {
               return function (xv) {
                  return function (yk) {
                     return function (yv) {
                        return function (zk) {
                           return function (zv) {
                              return function (a) {
                                 return function (b) {
                                    return function (c) {
                                       return function (d) {
                                          return A5(RBNode,
                                          lessBlack(col),
                                          yk,
                                          yv,
                                          A5(RBNode,Black,xk,xv,a,b),
                                          A5(RBNode,Black,zk,zv,c,d));
                                       };
                                    };
                                 };
                              };
                           };
                        };
                     };
                  };
               };
            };
         };
         return blackish(t) ? function () {
            switch (t.ctor)
            {case "RBNode":
               switch (t._3.ctor)
                 {case "RBNode":
                    switch (t._3._0.ctor)
                      {case "Red":
                         switch (t._3._3.ctor)
                           {case "RBNode":
                              switch (t._3._3._0.ctor)
                                {case "Red":
                                   return assemble(t._0)(t._3._3._1)(t._3._3._2)(t._3._1)(t._3._2)(t._1)(t._2)(t._3._3._3)(t._3._3._4)(t._3._4)(t._4);}
                                break;}
                           switch (t._3._4.ctor)
                           {case "RBNode":
                              switch (t._3._4._0.ctor)
                                {case "Red":
                                   return assemble(t._0)(t._3._1)(t._3._2)(t._3._4._1)(t._3._4._2)(t._1)(t._2)(t._3._3)(t._3._4._3)(t._3._4._4)(t._4);}
                                break;}
                           break;}
                      break;}
                 switch (t._4.ctor)
                 {case "RBNode":
                    switch (t._4._0.ctor)
                      {case "Red":
                         switch (t._4._3.ctor)
                           {case "RBNode":
                              switch (t._4._3._0.ctor)
                                {case "Red":
                                   return assemble(t._0)(t._1)(t._2)(t._4._3._1)(t._4._3._2)(t._4._1)(t._4._2)(t._3)(t._4._3._3)(t._4._3._4)(t._4._4);}
                                break;}
                           switch (t._4._4.ctor)
                           {case "RBNode":
                              switch (t._4._4._0.ctor)
                                {case "Red":
                                   return assemble(t._0)(t._1)(t._2)(t._4._1)(t._4._2)(t._4._4._1)(t._4._4._2)(t._3)(t._4._3)(t._4._4._3)(t._4._4._4);}
                                break;}
                           break;}
                      break;}
                 switch (t._0.ctor)
                 {case "BBlack":
                    switch (t._4.ctor)
                      {case "RBNode":
                         switch (t._4._0.ctor)
                           {case "NBlack":
                              switch (t._4._3.ctor)
                                {case "RBNode":
                                   switch (t._4._3._0.ctor)
                                     {case "Black":
                                        return function () {
                                             switch (t._4._4.ctor)
                                             {case "RBNode":
                                                switch (t._4._4._0.ctor)
                                                  {case "Black":
                                                     return A5(RBNode,
                                                       Black,
                                                       t._4._3._1,
                                                       t._4._3._2,
                                                       A5(RBNode,
                                                       Black,
                                                       t._1,
                                                       t._2,
                                                       t._3,
                                                       t._4._3._3),
                                                       A5(balance,
                                                       Black,
                                                       t._4._1,
                                                       t._4._2,
                                                       t._4._3._4,
                                                       redden(t._4._4)));}
                                                  break;}
                                             return t;
                                          }();}
                                     break;}
                                break;}
                           break;}
                      switch (t._3.ctor)
                      {case "RBNode":
                         switch (t._3._0.ctor)
                           {case "NBlack":
                              switch (t._3._4.ctor)
                                {case "RBNode":
                                   switch (t._3._4._0.ctor)
                                     {case "Black":
                                        return function () {
                                             switch (t._3._3.ctor)
                                             {case "RBNode":
                                                switch (t._3._3._0.ctor)
                                                  {case "Black":
                                                     return A5(RBNode,
                                                       Black,
                                                       t._3._4._1,
                                                       t._3._4._2,
                                                       A5(balance,
                                                       Black,
                                                       t._3._1,
                                                       t._3._2,
                                                       redden(t._3._3),
                                                       t._3._4._3),
                                                       A5(RBNode,
                                                       Black,
                                                       t._1,
                                                       t._2,
                                                       t._3._4._4,
                                                       t._4));}
                                                  break;}
                                             return t;
                                          }();}
                                     break;}
                                break;}
                           break;}
                      break;}
                 break;}
            return t;
         }() : t;
      }();
   };
   var balance = F5(function (c,
   k,
   v,
   l,
   r) {
      return balance_node(A5(RBNode,
      c,
      k,
      v,
      l,
      r));
   });
   var bubble = F5(function (c,
   k,
   v,
   l,
   r) {
      return isBBlack(l) || isBBlack(r) ? A5(balance,
      moreBlack(c),
      k,
      v,
      lessBlackTree(l),
      lessBlackTree(r)) : A5(RBNode,
      c,
      k,
      v,
      l,
      r);
   });
   var remove_max = F5(function (c,
   k,
   v,
   l,
   r) {
      return function () {
         switch (r.ctor)
         {case "RBEmpty": return A3(rem,
              c,
              l,
              r);
            case "RBNode": return A5(bubble,
              c,
              k,
              v,
              l,
              A5(remove_max,
              r._0,
              r._1,
              r._2,
              r._3,
              r._4));}
         _U.badCase($moduleName,
         "between lines 315 and 320");
      }();
   });
   var rem = F3(function (c,l,r) {
      return function () {
         var _v169 = {ctor: "_Tuple2"
                     ,_0: l
                     ,_1: r};
         switch (_v169.ctor)
         {case "_Tuple2":
            switch (_v169._0.ctor)
              {case "RBEmpty":
                 switch (_v169._1.ctor)
                   {case "RBEmpty":
                      return function () {
                           switch (c.ctor)
                           {case "Black":
                              return RBEmpty(LBBlack);
                              case "Red":
                              return RBEmpty(LBlack);}
                           _U.badCase($moduleName,
                           "between lines 274 and 278");
                        }();
                      case "RBNode":
                      return function () {
                           var _v191 = {ctor: "_Tuple3"
                                       ,_0: c
                                       ,_1: _v169._0._0
                                       ,_2: _v169._1._0};
                           switch (_v191.ctor)
                           {case "_Tuple3":
                              switch (_v191._0.ctor)
                                {case "Black":
                                   switch (_v191._1.ctor)
                                     {case "LBlack":
                                        switch (_v191._2.ctor)
                                          {case "Red": return A5(RBNode,
                                               Black,
                                               _v169._1._1,
                                               _v169._1._2,
                                               _v169._1._3,
                                               _v169._1._4);}
                                          break;}
                                     break;}
                                break;}
                           return A4(reportRemBug,
                           "Black/LBlack/Red",
                           c,
                           showLColor(_v169._0._0),
                           showNColor(_v169._1._0));
                        }();}
                   break;
                 case "RBNode":
                 switch (_v169._1.ctor)
                   {case "RBEmpty":
                      return function () {
                           var _v195 = {ctor: "_Tuple3"
                                       ,_0: c
                                       ,_1: _v169._0._0
                                       ,_2: _v169._1._0};
                           switch (_v195.ctor)
                           {case "_Tuple3":
                              switch (_v195._0.ctor)
                                {case "Black":
                                   switch (_v195._1.ctor)
                                     {case "Red":
                                        switch (_v195._2.ctor)
                                          {case "LBlack":
                                             return A5(RBNode,
                                               Black,
                                               _v169._0._1,
                                               _v169._0._2,
                                               _v169._0._3,
                                               _v169._0._4);}
                                          break;}
                                     break;}
                                break;}
                           return A4(reportRemBug,
                           "Black/Red/LBlack",
                           c,
                           showNColor(_v169._0._0),
                           showLColor(_v169._1._0));
                        }();
                      case "RBNode":
                      return function () {
                           var l$ = A5(remove_max,
                           _v169._0._0,
                           _v169._0._1,
                           _v169._0._2,
                           _v169._0._3,
                           _v169._0._4);
                           var r = A5(RBNode,
                           _v169._1._0,
                           _v169._1._1,
                           _v169._1._2,
                           _v169._1._3,
                           _v169._1._4);
                           var l = A5(RBNode,
                           _v169._0._0,
                           _v169._0._1,
                           _v169._0._2,
                           _v169._0._3,
                           _v169._0._4);
                           var $ = max(l),
                           k = $._0,
                           v = $._1;
                           return A5(bubble,c,k,v,l$,r);
                        }();}
                   break;}
              break;}
         _U.badCase($moduleName,
         "between lines 272 and 301");
      }();
   });
   var update = F3(function (k,
   alter,
   dict) {
      return function () {
         var up = function (dict) {
            return function () {
               switch (dict.ctor)
               {case "RBEmpty":
                  switch (dict._0.ctor)
                    {case "LBlack":
                       return function () {
                            var _v206 = alter($Maybe.Nothing);
                            switch (_v206.ctor)
                            {case "Just":
                               return {ctor: "_Tuple2"
                                      ,_0: Insert
                                      ,_1: A5(RBNode,
                                      Red,
                                      k,
                                      _v206._0,
                                      empty,
                                      empty)};
                               case "Nothing":
                               return {ctor: "_Tuple2"
                                      ,_0: Same
                                      ,_1: empty};}
                            _U.badCase($moduleName,
                            "between lines 186 and 190");
                         }();}
                    break;
                  case "RBNode":
                  return function () {
                       var _v208 = A2($Basics.compare,
                       k,
                       dict._1);
                       switch (_v208.ctor)
                       {case "EQ": return function () {
                               var _v209 = alter($Maybe.Just(dict._2));
                               switch (_v209.ctor)
                               {case "Just":
                                  return {ctor: "_Tuple2"
                                         ,_0: Same
                                         ,_1: A5(RBNode,
                                         dict._0,
                                         dict._1,
                                         _v209._0,
                                         dict._3,
                                         dict._4)};
                                  case "Nothing":
                                  return {ctor: "_Tuple2"
                                         ,_0: Remove
                                         ,_1: A3(rem,
                                         dict._0,
                                         dict._3,
                                         dict._4)};}
                               _U.badCase($moduleName,
                               "between lines 193 and 198");
                            }();
                          case "GT": return function () {
                               var $ = up(dict._4),
                               flag = $._0,
                               newRight = $._1;
                               return function () {
                                  switch (flag.ctor)
                                  {case "Insert":
                                     return {ctor: "_Tuple2"
                                            ,_0: Insert
                                            ,_1: A5(balance,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            dict._3,
                                            newRight)};
                                     case "Remove":
                                     return {ctor: "_Tuple2"
                                            ,_0: Remove
                                            ,_1: A5(bubble,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            dict._3,
                                            newRight)};
                                     case "Same":
                                     return {ctor: "_Tuple2"
                                            ,_0: Same
                                            ,_1: A5(RBNode,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            dict._3,
                                            newRight)};}
                                  _U.badCase($moduleName,
                                  "between lines 207 and 212");
                               }();
                            }();
                          case "LT": return function () {
                               var $ = up(dict._3),
                               flag = $._0,
                               newLeft = $._1;
                               return function () {
                                  switch (flag.ctor)
                                  {case "Insert":
                                     return {ctor: "_Tuple2"
                                            ,_0: Insert
                                            ,_1: A5(balance,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            newLeft,
                                            dict._4)};
                                     case "Remove":
                                     return {ctor: "_Tuple2"
                                            ,_0: Remove
                                            ,_1: A5(bubble,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            newLeft,
                                            dict._4)};
                                     case "Same":
                                     return {ctor: "_Tuple2"
                                            ,_0: Same
                                            ,_1: A5(RBNode,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            newLeft,
                                            dict._4)};}
                                  _U.badCase($moduleName,
                                  "between lines 200 and 205");
                               }();
                            }();}
                       _U.badCase($moduleName,
                       "between lines 191 and 212");
                    }();}
               _U.badCase($moduleName,
               "between lines 184 and 212");
            }();
         };
         var $ = up(dict),
         flag = $._0,
         updatedDict = $._1;
         return function () {
            switch (flag.ctor)
            {case "Insert":
               return ensureBlackRoot(updatedDict);
               case "Remove":
               return blacken(updatedDict);
               case "Same":
               return updatedDict;}
            _U.badCase($moduleName,
            "between lines 214 and 220");
         }();
      }();
   });
   var insert = F3(function (key,
   value,
   dict) {
      return A3(update,
      key,
      $Basics.always($Maybe.Just(value)),
      dict);
   });
   var singleton = F2(function (key,
   value) {
      return A3(insert,
      key,
      value,
      RBEmpty(LBlack));
   });
   var union = F2(function (t1,
   t2) {
      return A3(foldl,
      insert,
      t2,
      t1);
   });
   var fromList = function (assocs) {
      return A3($List.foldl,
      F2(function (_v214,dict) {
         return function () {
            switch (_v214.ctor)
            {case "_Tuple2":
               return A3(insert,
                 _v214._0,
                 _v214._1,
                 dict);}
            _U.badCase($moduleName,
            "on line 458, column 38 to 59");
         }();
      }),
      empty,
      assocs);
   };
   var filter = F2(function (predicate,
   dictionary) {
      return function () {
         var add = F3(function (key,
         value,
         dict) {
            return A2(predicate,
            key,
            value) ? A3(insert,
            key,
            value,
            dict) : dict;
         });
         return A3(foldl,
         add,
         empty,
         dictionary);
      }();
   });
   var intersect = F2(function (t1,
   t2) {
      return A2(filter,
      F2(function (k,_v218) {
         return function () {
            return A2(member,k,t2);
         }();
      }),
      t1);
   });
   var partition = F2(function (predicate,
   dict) {
      return function () {
         var add = F3(function (key,
         value,
         _v220) {
            return function () {
               switch (_v220.ctor)
               {case "_Tuple2":
                  return A2(predicate,
                    key,
                    value) ? {ctor: "_Tuple2"
                             ,_0: A3(insert,
                             key,
                             value,
                             _v220._0)
                             ,_1: _v220._1} : {ctor: "_Tuple2"
                                              ,_0: _v220._0
                                              ,_1: A3(insert,
                                              key,
                                              value,
                                              _v220._1)};}
               _U.badCase($moduleName,
               "between lines 479 and 481");
            }();
         });
         return A3(foldl,
         add,
         {ctor: "_Tuple2"
         ,_0: empty
         ,_1: empty},
         dict);
      }();
   });
   var remove = F2(function (key,
   dict) {
      return A3(update,
      key,
      $Basics.always($Maybe.Nothing),
      dict);
   });
   var diff = F2(function (t1,t2) {
      return A3(foldl,
      F3(function (k,v,t) {
         return A2(remove,k,t);
      }),
      t1,
      t2);
   });
   _elm.Dict.values = {_op: _op
                      ,empty: empty
                      ,singleton: singleton
                      ,insert: insert
                      ,update: update
                      ,get: get
                      ,remove: remove
                      ,member: member
                      ,filter: filter
                      ,partition: partition
                      ,foldl: foldl
                      ,foldr: foldr
                      ,map: map
                      ,union: union
                      ,intersect: intersect
                      ,diff: diff
                      ,keys: keys
                      ,values: values
                      ,toList: toList
                      ,fromList: fromList};
   return _elm.Dict.values;
};
Elm.Graphics = Elm.Graphics || {};
Elm.Graphics.Element = Elm.Graphics.Element || {};
Elm.Graphics.Element.make = function (_elm) {
   "use strict";
   _elm.Graphics = _elm.Graphics || {};
   _elm.Graphics.Element = _elm.Graphics.Element || {};
   if (_elm.Graphics.Element.values)
   return _elm.Graphics.Element.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Graphics.Element",
   $Basics = Elm.Basics.make(_elm),
   $Color = Elm.Color.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Graphics$Element = Elm.Native.Graphics.Element.make(_elm);
   var DOut = {ctor: "DOut"};
   var outward = DOut;
   var DIn = {ctor: "DIn"};
   var inward = DIn;
   var DRight = {ctor: "DRight"};
   var right = DRight;
   var DLeft = {ctor: "DLeft"};
   var left = DLeft;
   var DDown = {ctor: "DDown"};
   var down = DDown;
   var DUp = {ctor: "DUp"};
   var up = DUp;
   var Position = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,horizontal: a
             ,vertical: b
             ,x: c
             ,y: d};
   });
   var Relative = function (a) {
      return {ctor: "Relative"
             ,_0: a};
   };
   var relative = Relative;
   var Absolute = function (a) {
      return {ctor: "Absolute"
             ,_0: a};
   };
   var absolute = Absolute;
   var N = {ctor: "N"};
   var bottomLeftAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: N
             ,vertical: N
             ,x: x
             ,y: y};
   });
   var Z = {ctor: "Z"};
   var middle = {_: {}
                ,horizontal: Z
                ,vertical: Z
                ,x: Relative(0.5)
                ,y: Relative(0.5)};
   var midLeft = _U.replace([["horizontal"
                             ,N]
                            ,["x",Absolute(0)]],
   middle);
   var middleAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: Z
             ,vertical: Z
             ,x: x
             ,y: y};
   });
   var midLeftAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: N
             ,vertical: Z
             ,x: x
             ,y: y};
   });
   var midBottomAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: Z
             ,vertical: N
             ,x: x
             ,y: y};
   });
   var P = {ctor: "P"};
   var topLeft = {_: {}
                 ,horizontal: N
                 ,vertical: P
                 ,x: Absolute(0)
                 ,y: Absolute(0)};
   var bottomLeft = _U.replace([["vertical"
                                ,N]],
   topLeft);
   var topRight = _U.replace([["horizontal"
                              ,P]],
   topLeft);
   var bottomRight = _U.replace([["horizontal"
                                 ,P]],
   bottomLeft);
   var midRight = _U.replace([["horizontal"
                              ,P]],
   midLeft);
   var midTop = _U.replace([["vertical"
                            ,P]
                           ,["y",Absolute(0)]],
   middle);
   var midBottom = _U.replace([["vertical"
                               ,N]],
   midTop);
   var topLeftAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: N
             ,vertical: P
             ,x: x
             ,y: y};
   });
   var topRightAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: P
             ,vertical: P
             ,x: x
             ,y: y};
   });
   var bottomRightAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: P
             ,vertical: N
             ,x: x
             ,y: y};
   });
   var midRightAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: P
             ,vertical: Z
             ,x: x
             ,y: y};
   });
   var midTopAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: Z
             ,vertical: P
             ,x: x
             ,y: y};
   });
   var Tiled = {ctor: "Tiled"};
   var Cropped = function (a) {
      return {ctor: "Cropped"
             ,_0: a};
   };
   var Fitted = {ctor: "Fitted"};
   var Plain = {ctor: "Plain"};
   var Custom = {ctor: "Custom"};
   var RawHtml = {ctor: "RawHtml"};
   var Spacer = {ctor: "Spacer"};
   var Flow = F2(function (a,b) {
      return {ctor: "Flow"
             ,_0: a
             ,_1: b};
   });
   var Container = F2(function (a,
   b) {
      return {ctor: "Container"
             ,_0: a
             ,_1: b};
   });
   var Image = F4(function (a,
   b,
   c,
   d) {
      return {ctor: "Image"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d};
   });
   var link = F2(function (href,
   e) {
      return function () {
         var p = e.props;
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["href"
                                    ,href]],
                p)};
      }();
   });
   var tag = F2(function (name,e) {
      return function () {
         var p = e.props;
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["tag"
                                    ,name]],
                p)};
      }();
   });
   var color = F2(function (c,e) {
      return function () {
         var p = e.props;
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["color"
                                    ,$Maybe.Just(c)]],
                p)};
      }();
   });
   var opacity = F2(function (o,
   e) {
      return function () {
         var p = e.props;
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["opacity"
                                    ,o]],
                p)};
      }();
   });
   var height = F2(function (nh,
   e) {
      return function () {
         var p = e.props;
         var props = function () {
            var _v0 = e.element;
            switch (_v0.ctor)
            {case "Image":
               return _U.replace([["width"
                                  ,$Basics.round($Basics.toFloat(_v0._1) / $Basics.toFloat(_v0._2) * $Basics.toFloat(nh))]],
                 p);}
            return p;
         }();
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["height"
                                    ,nh]],
                p)};
      }();
   });
   var width = F2(function (nw,e) {
      return function () {
         var p = e.props;
         var props = function () {
            var _v5 = e.element;
            switch (_v5.ctor)
            {case "Image":
               return _U.replace([["height"
                                  ,$Basics.round($Basics.toFloat(_v5._2) / $Basics.toFloat(_v5._1) * $Basics.toFloat(nw))]],
                 p);
               case "RawHtml":
               return _U.replace([["height"
                                  ,$Basics.snd(A2($Native$Graphics$Element.htmlHeight,
                                  nw,
                                  e.element))]],
                 p);}
            return p;
         }();
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["width"
                                    ,nw]],
                props)};
      }();
   });
   var size = F3(function (w,h,e) {
      return A2(height,
      h,
      A2(width,w,e));
   });
   var sizeOf = function (e) {
      return {ctor: "_Tuple2"
             ,_0: e.props.width
             ,_1: e.props.height};
   };
   var heightOf = function (e) {
      return e.props.height;
   };
   var widthOf = function (e) {
      return e.props.width;
   };
   var Element = F2(function (a,
   b) {
      return {_: {}
             ,element: b
             ,props: a};
   });
   var Properties = F9(function (a,
   b,
   c,
   d,
   e,
   f,
   g,
   h,
   i) {
      return {_: {}
             ,click: i
             ,color: e
             ,height: c
             ,hover: h
             ,href: f
             ,id: a
             ,opacity: d
             ,tag: g
             ,width: b};
   });
   var newElement = F3(function (w,
   h,
   e) {
      return {_: {}
             ,element: e
             ,props: A9(Properties,
             $Native$Graphics$Element.guid({ctor: "_Tuple0"}),
             w,
             h,
             1,
             $Maybe.Nothing,
             "",
             "",
             {ctor: "_Tuple0"},
             {ctor: "_Tuple0"})};
   });
   var image = F3(function (w,
   h,
   src) {
      return A3(newElement,
      w,
      h,
      A4(Image,Plain,w,h,src));
   });
   var fittedImage = F3(function (w,
   h,
   src) {
      return A3(newElement,
      w,
      h,
      A4(Image,Fitted,w,h,src));
   });
   var croppedImage = F4(function (pos,
   w,
   h,
   src) {
      return A3(newElement,
      w,
      h,
      A4(Image,Cropped(pos),w,h,src));
   });
   var tiledImage = F3(function (w,
   h,
   src) {
      return A3(newElement,
      w,
      h,
      A4(Image,Tiled,w,h,src));
   });
   var container = F4(function (w,
   h,
   pos,
   e) {
      return A3(newElement,
      w,
      h,
      A2(Container,pos,e));
   });
   var spacer = F2(function (w,h) {
      return A3(newElement,
      w,
      h,
      Spacer);
   });
   var empty = A2(spacer,0,0);
   var flow = F2(function (dir,
   es) {
      return function () {
         var newFlow = F2(function (w,
         h) {
            return A3(newElement,
            w,
            h,
            A2(Flow,dir,es));
         });
         var hs = A2($List.map,
         heightOf,
         es);
         var ws = A2($List.map,
         widthOf,
         es);
         return _U.eq(es,
         _L.fromArray([])) ? empty : function () {
            switch (dir.ctor)
            {case "DDown":
               return A2(newFlow,
                 $List.maximum(ws),
                 $List.sum(hs));
               case "DIn": return A2(newFlow,
                 $List.maximum(ws),
                 $List.maximum(hs));
               case "DLeft": return A2(newFlow,
                 $List.sum(ws),
                 $List.maximum(hs));
               case "DOut": return A2(newFlow,
                 $List.maximum(ws),
                 $List.maximum(hs));
               case "DRight":
               return A2(newFlow,
                 $List.sum(ws),
                 $List.maximum(hs));
               case "DUp": return A2(newFlow,
                 $List.maximum(ws),
                 $List.sum(hs));}
            _U.badCase($moduleName,
            "between lines 280 and 291");
         }();
      }();
   });
   var above = F2(function (hi,
   lo) {
      return A3(newElement,
      A2($Basics.max,
      widthOf(hi),
      widthOf(lo)),
      heightOf(hi) + heightOf(lo),
      A2(Flow,
      DDown,
      _L.fromArray([hi,lo])));
   });
   var below = F2(function (lo,
   hi) {
      return A3(newElement,
      A2($Basics.max,
      widthOf(hi),
      widthOf(lo)),
      heightOf(hi) + heightOf(lo),
      A2(Flow,
      DDown,
      _L.fromArray([hi,lo])));
   });
   var beside = F2(function (lft,
   rht) {
      return A3(newElement,
      widthOf(lft) + widthOf(rht),
      A2($Basics.max,
      heightOf(lft),
      heightOf(rht)),
      A2(Flow,
      right,
      _L.fromArray([lft,rht])));
   });
   var layers = function (es) {
      return function () {
         var hs = A2($List.map,
         heightOf,
         es);
         var ws = A2($List.map,
         widthOf,
         es);
         return A3(newElement,
         $List.maximum(ws),
         $List.maximum(hs),
         A2(Flow,DOut,es));
      }();
   };
   _elm.Graphics.Element.values = {_op: _op
                                  ,Properties: Properties
                                  ,Element: Element
                                  ,empty: empty
                                  ,widthOf: widthOf
                                  ,heightOf: heightOf
                                  ,sizeOf: sizeOf
                                  ,width: width
                                  ,height: height
                                  ,size: size
                                  ,opacity: opacity
                                  ,color: color
                                  ,tag: tag
                                  ,link: link
                                  ,newElement: newElement
                                  ,Image: Image
                                  ,Container: Container
                                  ,Flow: Flow
                                  ,Spacer: Spacer
                                  ,RawHtml: RawHtml
                                  ,Custom: Custom
                                  ,Plain: Plain
                                  ,Fitted: Fitted
                                  ,Cropped: Cropped
                                  ,Tiled: Tiled
                                  ,image: image
                                  ,fittedImage: fittedImage
                                  ,croppedImage: croppedImage
                                  ,tiledImage: tiledImage
                                  ,P: P
                                  ,Z: Z
                                  ,N: N
                                  ,Absolute: Absolute
                                  ,Relative: Relative
                                  ,Position: Position
                                  ,container: container
                                  ,spacer: spacer
                                  ,DUp: DUp
                                  ,DDown: DDown
                                  ,DLeft: DLeft
                                  ,DRight: DRight
                                  ,DIn: DIn
                                  ,DOut: DOut
                                  ,flow: flow
                                  ,above: above
                                  ,below: below
                                  ,beside: beside
                                  ,layers: layers
                                  ,absolute: absolute
                                  ,relative: relative
                                  ,middle: middle
                                  ,topLeft: topLeft
                                  ,topRight: topRight
                                  ,bottomLeft: bottomLeft
                                  ,bottomRight: bottomRight
                                  ,midLeft: midLeft
                                  ,midRight: midRight
                                  ,midTop: midTop
                                  ,midBottom: midBottom
                                  ,middleAt: middleAt
                                  ,topLeftAt: topLeftAt
                                  ,topRightAt: topRightAt
                                  ,bottomLeftAt: bottomLeftAt
                                  ,bottomRightAt: bottomRightAt
                                  ,midLeftAt: midLeftAt
                                  ,midRightAt: midRightAt
                                  ,midTopAt: midTopAt
                                  ,midBottomAt: midBottomAt
                                  ,up: up
                                  ,down: down
                                  ,left: left
                                  ,right: right
                                  ,inward: inward
                                  ,outward: outward};
   return _elm.Graphics.Element.values;
};
Elm.Html = Elm.Html || {};
Elm.Html.make = function (_elm) {
   "use strict";
   _elm.Html = _elm.Html || {};
   if (_elm.Html.values)
   return _elm.Html.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Html",
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $VirtualDom = Elm.VirtualDom.make(_elm);
   var fromElement = $VirtualDom.fromElement;
   var toElement = $VirtualDom.toElement;
   var text = $VirtualDom.text;
   var node = $VirtualDom.node;
   var body = node("body");
   var section = node("section");
   var nav = node("nav");
   var article = node("article");
   var aside = node("aside");
   var h1 = node("h1");
   var h2 = node("h2");
   var h3 = node("h3");
   var h4 = node("h4");
   var h5 = node("h5");
   var h6 = node("h6");
   var header = node("header");
   var footer = node("footer");
   var address = node("address");
   var main$ = node("main");
   var p = node("p");
   var hr = node("hr");
   var pre = node("pre");
   var blockquote = node("blockquote");
   var ol = node("ol");
   var ul = node("ul");
   var li = node("li");
   var dl = node("dl");
   var dt = node("dt");
   var dd = node("dd");
   var figure = node("figure");
   var figcaption = node("figcaption");
   var div = node("div");
   var a = node("a");
   var em = node("em");
   var strong = node("strong");
   var small = node("small");
   var s = node("s");
   var cite = node("cite");
   var q = node("q");
   var dfn = node("dfn");
   var abbr = node("abbr");
   var time = node("time");
   var code = node("code");
   var $var = node("var");
   var samp = node("samp");
   var kbd = node("kbd");
   var sub = node("sub");
   var sup = node("sup");
   var i = node("i");
   var b = node("b");
   var u = node("u");
   var mark = node("mark");
   var ruby = node("ruby");
   var rt = node("rt");
   var rp = node("rp");
   var bdi = node("bdi");
   var bdo = node("bdo");
   var span = node("span");
   var br = node("br");
   var wbr = node("wbr");
   var ins = node("ins");
   var del = node("del");
   var img = node("img");
   var iframe = node("iframe");
   var embed = node("embed");
   var object = node("object");
   var param = node("param");
   var video = node("video");
   var audio = node("audio");
   var source = node("source");
   var track = node("track");
   var canvas = node("canvas");
   var svg = node("svg");
   var math = node("math");
   var table = node("table");
   var caption = node("caption");
   var colgroup = node("colgroup");
   var col = node("col");
   var tbody = node("tbody");
   var thead = node("thead");
   var tfoot = node("tfoot");
   var tr = node("tr");
   var td = node("td");
   var th = node("th");
   var form = node("form");
   var fieldset = node("fieldset");
   var legend = node("legend");
   var label = node("label");
   var input = node("input");
   var button = node("button");
   var select = node("select");
   var datalist = node("datalist");
   var optgroup = node("optgroup");
   var option = node("option");
   var textarea = node("textarea");
   var keygen = node("keygen");
   var output = node("output");
   var progress = node("progress");
   var meter = node("meter");
   var details = node("details");
   var summary = node("summary");
   var menuitem = node("menuitem");
   var menu = node("menu");
   _elm.Html.values = {_op: _op
                      ,node: node
                      ,text: text
                      ,toElement: toElement
                      ,fromElement: fromElement
                      ,body: body
                      ,section: section
                      ,nav: nav
                      ,article: article
                      ,aside: aside
                      ,h1: h1
                      ,h2: h2
                      ,h3: h3
                      ,h4: h4
                      ,h5: h5
                      ,h6: h6
                      ,header: header
                      ,footer: footer
                      ,address: address
                      ,main$: main$
                      ,p: p
                      ,hr: hr
                      ,pre: pre
                      ,blockquote: blockquote
                      ,ol: ol
                      ,ul: ul
                      ,li: li
                      ,dl: dl
                      ,dt: dt
                      ,dd: dd
                      ,figure: figure
                      ,figcaption: figcaption
                      ,div: div
                      ,a: a
                      ,em: em
                      ,strong: strong
                      ,small: small
                      ,s: s
                      ,cite: cite
                      ,q: q
                      ,dfn: dfn
                      ,abbr: abbr
                      ,time: time
                      ,code: code
                      ,$var: $var
                      ,samp: samp
                      ,kbd: kbd
                      ,sub: sub
                      ,sup: sup
                      ,i: i
                      ,b: b
                      ,u: u
                      ,mark: mark
                      ,ruby: ruby
                      ,rt: rt
                      ,rp: rp
                      ,bdi: bdi
                      ,bdo: bdo
                      ,span: span
                      ,br: br
                      ,wbr: wbr
                      ,ins: ins
                      ,del: del
                      ,img: img
                      ,iframe: iframe
                      ,embed: embed
                      ,object: object
                      ,param: param
                      ,video: video
                      ,audio: audio
                      ,source: source
                      ,track: track
                      ,canvas: canvas
                      ,svg: svg
                      ,math: math
                      ,table: table
                      ,caption: caption
                      ,colgroup: colgroup
                      ,col: col
                      ,tbody: tbody
                      ,thead: thead
                      ,tfoot: tfoot
                      ,tr: tr
                      ,td: td
                      ,th: th
                      ,form: form
                      ,fieldset: fieldset
                      ,legend: legend
                      ,label: label
                      ,input: input
                      ,button: button
                      ,select: select
                      ,datalist: datalist
                      ,optgroup: optgroup
                      ,option: option
                      ,textarea: textarea
                      ,keygen: keygen
                      ,output: output
                      ,progress: progress
                      ,meter: meter
                      ,details: details
                      ,summary: summary
                      ,menuitem: menuitem
                      ,menu: menu};
   return _elm.Html.values;
};
Elm.Json = Elm.Json || {};
Elm.Json.Decode = Elm.Json.Decode || {};
Elm.Json.Decode.make = function (_elm) {
   "use strict";
   _elm.Json = _elm.Json || {};
   _elm.Json.Decode = _elm.Json.Decode || {};
   if (_elm.Json.Decode.values)
   return _elm.Json.Decode.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Json.Decode",
   $Array = Elm.Array.make(_elm),
   $Dict = Elm.Dict.make(_elm),
   $Json$Encode = Elm.Json.Encode.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Json = Elm.Native.Json.make(_elm),
   $Result = Elm.Result.make(_elm);
   var tuple8 = $Native$Json.decodeTuple8;
   var tuple7 = $Native$Json.decodeTuple7;
   var tuple6 = $Native$Json.decodeTuple6;
   var tuple5 = $Native$Json.decodeTuple5;
   var tuple4 = $Native$Json.decodeTuple4;
   var tuple3 = $Native$Json.decodeTuple3;
   var tuple2 = $Native$Json.decodeTuple2;
   var tuple1 = $Native$Json.decodeTuple1;
   var succeed = $Native$Json.succeed;
   var fail = $Native$Json.fail;
   var andThen = $Native$Json.andThen;
   var customDecoder = $Native$Json.customDecoder;
   var decodeValue = $Native$Json.runDecoderValue;
   var value = $Native$Json.decodeValue;
   var maybe = $Native$Json.decodeMaybe;
   var $null = $Native$Json.decodeNull;
   var array = $Native$Json.decodeArray;
   var list = $Native$Json.decodeList;
   var bool = $Native$Json.decodeBool;
   var $int = $Native$Json.decodeInt;
   var $float = $Native$Json.decodeFloat;
   var string = $Native$Json.decodeString;
   var oneOf = $Native$Json.oneOf;
   var keyValuePairs = $Native$Json.decodeKeyValuePairs;
   var object8 = $Native$Json.decodeObject8;
   var object7 = $Native$Json.decodeObject7;
   var object6 = $Native$Json.decodeObject6;
   var object5 = $Native$Json.decodeObject5;
   var object4 = $Native$Json.decodeObject4;
   var object3 = $Native$Json.decodeObject3;
   var object2 = $Native$Json.decodeObject2;
   var object1 = $Native$Json.decodeObject1;
   _op[":="] = $Native$Json.decodeField;
   var at = F2(function (fields,
   decoder) {
      return A3($List.foldr,
      F2(function (x,y) {
         return A2(_op[":="],x,y);
      }),
      decoder,
      fields);
   });
   var decodeString = $Native$Json.runDecoderString;
   var map = $Native$Json.decodeObject1;
   var dict = function (decoder) {
      return A2(map,
      $Dict.fromList,
      keyValuePairs(decoder));
   };
   var Decoder = {ctor: "Decoder"};
   _elm.Json.Decode.values = {_op: _op
                             ,Decoder: Decoder
                             ,map: map
                             ,decodeString: decodeString
                             ,at: at
                             ,object1: object1
                             ,object2: object2
                             ,object3: object3
                             ,object4: object4
                             ,object5: object5
                             ,object6: object6
                             ,object7: object7
                             ,object8: object8
                             ,keyValuePairs: keyValuePairs
                             ,dict: dict
                             ,oneOf: oneOf
                             ,string: string
                             ,$float: $float
                             ,$int: $int
                             ,bool: bool
                             ,list: list
                             ,array: array
                             ,$null: $null
                             ,maybe: maybe
                             ,value: value
                             ,decodeValue: decodeValue
                             ,customDecoder: customDecoder
                             ,andThen: andThen
                             ,fail: fail
                             ,succeed: succeed
                             ,tuple1: tuple1
                             ,tuple2: tuple2
                             ,tuple3: tuple3
                             ,tuple4: tuple4
                             ,tuple5: tuple5
                             ,tuple6: tuple6
                             ,tuple7: tuple7
                             ,tuple8: tuple8};
   return _elm.Json.Decode.values;
};
Elm.Json = Elm.Json || {};
Elm.Json.Encode = Elm.Json.Encode || {};
Elm.Json.Encode.make = function (_elm) {
   "use strict";
   _elm.Json = _elm.Json || {};
   _elm.Json.Encode = _elm.Json.Encode || {};
   if (_elm.Json.Encode.values)
   return _elm.Json.Encode.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Json.Encode",
   $Array = Elm.Array.make(_elm),
   $Native$Json = Elm.Native.Json.make(_elm);
   var list = $Native$Json.encodeList;
   var array = $Native$Json.encodeArray;
   var object = $Native$Json.encodeObject;
   var $null = $Native$Json.encodeNull;
   var bool = $Native$Json.identity;
   var $float = $Native$Json.identity;
   var $int = $Native$Json.identity;
   var string = $Native$Json.identity;
   var encode = $Native$Json.encode;
   var Value = {ctor: "Value"};
   _elm.Json.Encode.values = {_op: _op
                             ,Value: Value
                             ,encode: encode
                             ,string: string
                             ,$int: $int
                             ,$float: $float
                             ,bool: bool
                             ,$null: $null
                             ,object: object
                             ,array: array
                             ,list: list};
   return _elm.Json.Encode.values;
};
Elm.Katex = Elm.Katex || {};
Elm.Katex.make = function (_elm) {
   "use strict";
   _elm.Katex = _elm.Katex || {};
   if (_elm.Katex.values)
   return _elm.Katex.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Katex",
   $Native$Katex = Elm.Native.Katex.make(_elm);
   var css = "\n@font-face{font-family:KaTeX_AMS;src:url(base/fonts/KaTeX_AMS-Regular.eot);src:url(base/fonts/KaTeX_AMS-Regular.eot#iefix) format(\'embedded-opentype\'),url(base/fonts/KaTeX_AMS-Regular.woff2) format(\'woff2\'),url(base/fonts/KaTeX_AMS-Regular.woff) format(\'woff\'),url(base/fonts/KaTeX_AMS-Regular.ttf) format(\'ttf\');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Caligraphic;src:url(base/fonts/KaTeX_Caligraphic-Bold.eot);src:url(base/fonts/KaTeX_Caligraphic-Bold.eot#iefix) format(\'embedded-opentype\'),url(base/fonts/KaTeX_Caligraphic-Bold.woff2) format(\'woff2\'),url(base/fonts/KaTeX_Caligraphic-Bold.woff) format(\'woff\'),url(base/fonts/KaTeX_Caligraphic-Bold.ttf) format(\'ttf\');font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Caligraphic;src:url(base/fonts/KaTeX_Caligraphic-Regular.eot);src:url(base/fonts/KaTeX_Caligraphic-Regular.eot#iefix) format(\'embedded-opentype\'),url(base/fonts/KaTeX_Caligraphic-Regular.woff2) format(\'woff2\'),url(base/fonts/KaTeX_Caligraphic-Regular.woff) format(\'woff\'),url(base/fonts/KaTeX_Caligraphic-Regular.ttf) format(\'ttf\');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Fraktur;src:url(base/fonts/KaTeX_Fraktur-Bold.eot);src:url(base/fonts/KaTeX_Fraktur-Bold.eot#iefix) format(\'embedded-opentype\'),url(base/fonts/KaTeX_Fraktur-Bold.woff2) format(\'woff2\'),url(base/fonts/KaTeX_Fraktur-Bold.woff) format(\'woff\'),url(base/fonts/KaTeX_Fraktur-Bold.ttf) format(\'ttf\');font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Fraktur;src:url(base/fonts/KaTeX_Fraktur-Regular.eot);src:url(base/fonts/KaTeX_Fraktur-Regular.eot#iefix) format(\'embedded-opentype\'),url(base/fonts/KaTeX_Fraktur-Regular.woff2) format(\'woff2\'),url(base/fonts/KaTeX_Fraktur-Regular.woff) format(\'woff\'),url(base/fonts/KaTeX_Fraktur-Regular.ttf) format(\'ttf\');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Greek;src:url(base/fonts/KaTeX_Greek-Bold.eot);src:url(base/fonts/KaTeX_Greek-Bold.eot#iefix) format(\'embedded-opentype\'),url(base/fonts/KaTeX_Greek-Bold.woff2) format(\'woff2\'),url(base/fonts/KaTeX_Greek-Bold.woff) format(\'woff\'),url(base/fonts/KaTeX_Greek-Bold.ttf) format(\'ttf\');font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Greek;src:url(base/fonts/KaTeX_Greek-BoldItalic.eot);src:url(base/fonts/KaTeX_Greek-BoldItalic.eot#iefix) format(\'embedded-opentype\'),url(base/fonts/KaTeX_Greek-BoldItalic.woff2) format(\'woff2\'),url(base/fonts/KaTeX_Greek-BoldItalic.woff) format(\'woff\'),url(base/fonts/KaTeX_Greek-BoldItalic.ttf) format(\'ttf\');font-weight:700;font-style:italic}@font-face{font-family:KaTeX_Greek;src:url(base/fonts/KaTeX_Greek-Italic.eot);src:url(base/fonts/KaTeX_Greek-Italic.eot#iefix) format(\'embedded-opentype\'),url(base/fonts/KaTeX_Greek-Italic.woff2) format(\'woff2\'),url(base/fonts/KaTeX_Greek-Italic.woff) format(\'woff\'),url(base/fonts/KaTeX_Greek-Italic.ttf) format(\'ttf\');font-weight:400;font-style:italic}@font-face{font-family:KaTeX_Greek;src:url(base/fonts/KaTeX_Greek-Regular.eot);src:url(base/fonts/KaTeX_Greek-Regular.eot#iefix) format(\'embedded-opentype\'),url(base/fonts/KaTeX_Greek-Regular.woff2) format(\'woff2\'),url(base/fonts/KaTeX_Greek-Regular.woff) format(\'woff\'),url(base/fonts/KaTeX_Greek-Regular.ttf) format(\'ttf\');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Main;src:url(base/fonts/KaTeX_Main-Bold.eot);src:url(base/fonts/KaTeX_Main-Bold.eot#iefix) format(\'embedded-opentype\'),url(base/fonts/KaTeX_Main-Bold.woff2) format(\'woff2\'),url(base/fonts/KaTeX_Main-Bold.woff) format(\'woff\'),url(base/fonts/KaTeX_Main-Bold.ttf) format(\'ttf\');font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Main;src:url(base/fonts/KaTeX_Main-Italic.eot);src:url(base/fonts/KaTeX_Main-Italic.eot#iefix) format(\'embedded-opentype\'),url(base/fonts/KaTeX_Main-Italic.woff2) format(\'woff2\'),url(base/fonts/KaTeX_Main-Italic.woff) format(\'woff\'),url(base/fonts/KaTeX_Main-Italic.ttf) format(\'ttf\');font-weight:400;font-style:italic}@font-face{font-family:KaTeX_Main;src:url(base/fonts/KaTeX_Main-Regular.eot);src:url(base/fonts/KaTeX_Main-Regular.eot#iefix) format(\'embedded-opentype\'),url(base/fonts/KaTeX_Main-Regular.woff2) format(\'woff2\'),url(base/fonts/KaTeX_Main-Regular.woff) format(\'woff\'),url(base/fonts/KaTeX_Main-Regular.ttf) format(\'ttf\');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Math;src:url(base/fonts/KaTeX_Math-BoldItalic.eot);src:url(base/fonts/KaTeX_Math-BoldItalic.eot#iefix) format(\'embedded-opentype\'),url(base/fonts/KaTeX_Math-BoldItalic.woff2) format(\'woff2\'),url(base/fonts/KaTeX_Math-BoldItalic.woff) format(\'woff\'),url(base/fonts/KaTeX_Math-BoldItalic.ttf) format(\'ttf\');font-weight:700;font-style:italic}@font-face{font-family:KaTeX_Math;src:url(base/fonts/KaTeX_Math-Italic.eot);src:url(base/fonts/KaTeX_Math-Italic.eot#iefix) format(\'embedded-opentype\'),url(base/fonts/KaTeX_Math-Italic.woff2) format(\'woff2\'),url(base/fonts/KaTeX_Math-Italic.woff) format(\'woff\'),url(base/fonts/KaTeX_Math-Italic.ttf) format(\'ttf\');font-weight:400;font-style:italic}@font-face{font-family:KaTeX_Math;src:url(base/fonts/KaTeX_Math-Regular.eot);src:url(base/fonts/KaTeX_Math-Regular.eot#iefix) format(\'embedded-opentype\'),url(base/fonts/KaTeX_Math-Regular.woff2) format(\'woff2\'),url(base/fonts/KaTeX_Math-Regular.woff) format(\'woff\'),url(base/fonts/KaTeX_Math-Regular.ttf) format(\'ttf\');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_SansSerif;src:url(base/fonts/KaTeX_SansSerif-Bold.eot);src:url(base/fonts/KaTeX_SansSerif-Bold.eot#iefix) format(\'embedded-opentype\'),url(base/fonts/KaTeX_SansSerif-Bold.woff2) format(\'woff2\'),url(base/fonts/KaTeX_SansSerif-Bold.woff) format(\'woff\'),url(base/fonts/KaTeX_SansSerif-Bold.ttf) format(\'ttf\');font-weight:700;font-style:normal}@font-face{font-family:KaTeX_SansSerif;src:url(base/fonts/KaTeX_SansSerif-Italic.eot);src:url(base/fonts/KaTeX_SansSerif-Italic.eot#iefix) format(\'embedded-opentype\'),url(base/fonts/KaTeX_SansSerif-Italic.woff2) format(\'woff2\'),url(base/fonts/KaTeX_SansSerif-Italic.woff) format(\'woff\'),url(base/fonts/KaTeX_SansSerif-Italic.ttf) format(\'ttf\');font-weight:400;font-style:italic}@font-face{font-family:KaTeX_SansSerif;src:url(base/fonts/KaTeX_SansSerif-Regular.eot);src:url(base/fonts/KaTeX_SansSerif-Regular.eot#iefix) format(\'embedded-opentype\'),url(base/fonts/KaTeX_SansSerif-Regular.woff2) format(\'woff2\'),url(base/fonts/KaTeX_SansSerif-Regular.woff) format(\'woff\'),url(base/fonts/KaTeX_SansSerif-Regular.ttf) format(\'ttf\');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Script;src:url(base/fonts/KaTeX_Script-Regular.eot);src:url(base/fonts/KaTeX_Script-Regular.eot#iefix) format(\'embedded-opentype\'),url(base/fonts/KaTeX_Script-Regular.woff2) format(\'woff2\'),url(base/fonts/KaTeX_Script-Regular.woff) format(\'woff\'),url(base/fonts/KaTeX_Script-Regular.ttf) format(\'ttf\');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size1;src:url(base/fonts/KaTeX_Size1-Regular.eot);src:url(base/fonts/KaTeX_Size1-Regular.eot#iefix) format(\'embedded-opentype\'),url(base/fonts/KaTeX_Size1-Regular.woff2) format(\'woff2\'),url(base/fonts/KaTeX_Size1-Regular.woff) format(\'woff\'),url(base/fonts/KaTeX_Size1-Regular.ttf) format(\'ttf\');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size2;src:url(base/fonts/KaTeX_Size2-Regular.eot);src:url(base/fonts/KaTeX_Size2-Regular.eot#iefix) format(\'embedded-opentype\'),url(base/fonts/KaTeX_Size2-Regular.woff2) format(\'woff2\'),url(base/fonts/KaTeX_Size2-Regular.woff) format(\'woff\'),url(base/fonts/KaTeX_Size2-Regular.ttf) format(\'ttf\');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size3;src:url(base/fonts/KaTeX_Size3-Regular.eot);src:url(base/fonts/KaTeX_Size3-Regular.eot#iefix) format(\'embedded-opentype\'),url(base/fonts/KaTeX_Size3-Regular.woff2) format(\'woff2\'),url(base/fonts/KaTeX_Size3-Regular.woff) format(\'woff\'),url(base/fonts/KaTeX_Size3-Regular.ttf) format(\'ttf\');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size4;src:url(base/fonts/KaTeX_Size4-Regular.eot);src:url(base/fonts/KaTeX_Size4-Regular.eot#iefix) format(\'embedded-opentype\'),url(base/fonts/KaTeX_Size4-Regular.woff2) format(\'woff2\'),url(base/fonts/KaTeX_Size4-Regular.woff) format(\'woff\'),url(base/fonts/KaTeX_Size4-Regular.ttf) format(\'ttf\');font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Typewriter;src:url(base/fonts/KaTeX_Typewriter-Regular.eot);src:url(base/fonts/KaTeX_Typewriter-Regular.eot#iefix) format(\'embedded-opentype\'),url(base/fonts/KaTeX_Typewriter-Regular.woff2) format(\'woff2\'),url(base/fonts/KaTeX_Typewriter-Regular.woff) format(\'woff\'),url(base/fonts/KaTeX_Typewriter-Regular.ttf) format(\'ttf\');font-weight:400;font-style:normal}.katex{font:400 1.21em KaTeX_Main;line-height:1.2;white-space:nowrap}.katex .base,.katex .katex-inner,.katex .strut{display:inline-block}.katex .mathit{font-family:KaTeX_Math;font-style:italic}.katex .amsrm{font-family:KaTeX_AMS}.katex .textstyle>.mord+.mop{margin-left:.16667em}.katex .textstyle>.mord+.mbin{margin-left:.22222em}.katex .textstyle>.mord+.mrel{margin-left:.27778em}.katex .textstyle>.mop+.mop,.katex .textstyle>.mop+.mord,.katex .textstyle>.mord+.minner{margin-left:.16667em}.katex .textstyle>.mop+.mrel{margin-left:.27778em}.katex .textstyle>.mop+.minner{margin-left:.16667em}.katex .textstyle>.mbin+.minner,.katex .textstyle>.mbin+.mop,.katex .textstyle>.mbin+.mopen,.katex .textstyle>.mbin+.mord{margin-left:.22222em}.katex .textstyle>.mrel+.minner,.katex .textstyle>.mrel+.mop,.katex .textstyle>.mrel+.mopen,.katex .textstyle>.mrel+.mord{margin-left:.27778em}.katex .textstyle>.mclose+.mop{margin-left:.16667em}.katex .textstyle>.mclose+.mbin{margin-left:.22222em}.katex .textstyle>.mclose+.mrel{margin-left:.27778em}.katex .textstyle>.mclose+.minner,.katex .textstyle>.minner+.mop,.katex .textstyle>.minner+.mord,.katex .textstyle>.mpunct+.mclose,.katex .textstyle>.mpunct+.minner,.katex .textstyle>.mpunct+.mop,.katex .textstyle>.mpunct+.mopen,.katex .textstyle>.mpunct+.mord,.katex .textstyle>.mpunct+.mpunct,.katex .textstyle>.mpunct+.mrel{margin-left:.16667em}.katex .textstyle>.minner+.mbin{margin-left:.22222em}.katex .textstyle>.minner+.mrel{margin-left:.27778em}.katex .mclose+.mop,.katex .minner+.mop,.katex .mop+.mop,.katex .mop+.mord,.katex .mord+.mop,.katex .textstyle>.minner+.minner,.katex .textstyle>.minner+.mopen,.katex .textstyle>.minner+.mpunct{margin-left:.16667em}.katex .reset-textstyle.textstyle{font-size:1em}.katex .reset-textstyle.scriptstyle{font-size:.7em}.katex .reset-textstyle.scriptscriptstyle{font-size:.5em}.katex .reset-scriptstyle.textstyle{font-size:1.42857em}.katex .reset-scriptstyle.scriptstyle{font-size:1em}.katex .reset-scriptstyle.scriptscriptstyle{font-size:.71429em}.katex .reset-scriptscriptstyle.textstyle{font-size:2em}.katex .reset-scriptscriptstyle.scriptstyle{font-size:1.4em}.katex .reset-scriptscriptstyle.scriptscriptstyle{font-size:1em}.katex .style-wrap{position:relative}.katex .vlist{display:inline-block}.katex .vlist>span{display:block;height:0;position:relative}.katex .vlist>span>span{display:inline-block}.katex .vlist .baseline-fix{display:inline-table;table-layout:fixed}.katex .msupsub{text-align:left}.katex .mfrac>span>span{text-align:center}.katex .mfrac .frac-line{width:100%}.katex .mfrac .frac-line:before{border-bottom-style:solid;border-bottom-width:1px;content:\"\";display:block}.katex .mfrac .frac-line:after{border-bottom-style:solid;border-bottom-width:.04em;content:\"\";display:block;margin-top:-1px}.katex .mspace{display:inline-block}.katex .mspace.negativethinspace{margin-left:-.16667em}.katex .mspace.thinspace{width:.16667em}.katex .mspace.mediumspace{width:.22222em}.katex .mspace.thickspace{width:.27778em}.katex .mspace.enspace{width:.5em}.katex .mspace.quad{width:1em}.katex .mspace.qquad{width:2em}.katex .llap,.katex .rlap{width:0;position:relative}.katex .llap>.inner,.katex .rlap>.inner{position:absolute}.katex .llap>.fix,.katex .rlap>.fix{display:inline-block}.katex .llap>.inner{right:0}.katex .rlap>.inner{left:0}.katex .katex-logo .a{font-size:.75em;margin-left:-.32em;position:relative;top:-.2em}.katex .katex-logo .t{margin-left:-.23em}.katex .katex-logo .e{margin-left:-.1667em;position:relative;top:.2155em}.katex .katex-logo .x{margin-left:-.125em}.katex .rule{display:inline-block;border-style:solid;position:relative}.katex .overline .overline-line{width:100%}.katex .overline .overline-line:before{border-bottom-style:solid;border-bottom-width:1px;content:\"\";display:block}.katex .overline .overline-line:after{border-bottom-style:solid;border-bottom-width:.04em;content:\"\";display:block;margin-top:-1px}.katex .sqrt>.sqrt-sign{position:relative}.katex .sqrt .sqrt-line{width:100%}.katex .sqrt .sqrt-line:before{border-bottom-style:solid;border-bottom-width:1px;content:\"\";display:block}.katex .sqrt .sqrt-line:after{border-bottom-style:solid;border-bottom-width:.04em;content:\"\";display:block;margin-top:-1px}.katex .fontsize-ensurer,.katex .sizing{display:inline-block}.katex .fontsize-ensurer.reset-size1.size1,.katex .sizing.reset-size1.size1{font-size:1em}.katex .fontsize-ensurer.reset-size1.size2,.katex .sizing.reset-size1.size2{font-size:1.4em}.katex .fontsize-ensurer.reset-size1.size3,.katex .sizing.reset-size1.size3{font-size:1.6em}.katex .fontsize-ensurer.reset-size1.size4,.katex .sizing.reset-size1.size4{font-size:1.8em}.katex .fontsize-ensurer.reset-size1.size5,.katex .sizing.reset-size1.size5{font-size:2em}.katex .fontsize-ensurer.reset-size1.size6,.katex .sizing.reset-size1.size6{font-size:2.4em}.katex .fontsize-ensurer.reset-size1.size7,.katex .sizing.reset-size1.size7{font-size:2.88em}.katex .fontsize-ensurer.reset-size1.size8,.katex .sizing.reset-size1.size8{font-size:3.46em}.katex .fontsize-ensurer.reset-size1.size9,.katex .sizing.reset-size1.size9{font-size:4.14em}.katex .fontsize-ensurer.reset-size1.size10,.katex .sizing.reset-size1.size10{font-size:4.98em}.katex .fontsize-ensurer.reset-size2.size1,.katex .sizing.reset-size2.size1{font-size:.71428571em}.katex .fontsize-ensurer.reset-size2.size2,.katex .sizing.reset-size2.size2{font-size:1em}.katex .fontsize-ensurer.reset-size2.size3,.katex .sizing.reset-size2.size3{font-size:1.14285714em}.katex .fontsize-ensurer.reset-size2.size4,.katex .sizing.reset-size2.size4{font-size:1.28571429em}.katex .fontsize-ensurer.reset-size2.size5,.katex .sizing.reset-size2.size5{font-size:1.42857143em}.katex .fontsize-ensurer.reset-size2.size6,.katex .sizing.reset-size2.size6{font-size:1.71428571em}.katex .fontsize-ensurer.reset-size2.size7,.katex .sizing.reset-size2.size7{font-size:2.05714286em}.katex .fontsize-ensurer.reset-size2.size8,.katex .sizing.reset-size2.size8{font-size:2.47142857em}.katex .fontsize-ensurer.reset-size2.size9,.katex .sizing.reset-size2.size9{font-size:2.95714286em}.katex .fontsize-ensurer.reset-size2.size10,.katex .sizing.reset-size2.size10{font-size:3.55714286em}.katex .fontsize-ensurer.reset-size3.size1,.katex .sizing.reset-size3.size1{font-size:.625em}.katex .fontsize-ensurer.reset-size3.size2,.katex .sizing.reset-size3.size2{font-size:.875em}.katex .fontsize-ensurer.reset-size3.size3,.katex .sizing.reset-size3.size3{font-size:1em}.katex .fontsize-ensurer.reset-size3.size4,.katex .sizing.reset-size3.size4{font-size:1.125em}.katex .fontsize-ensurer.reset-size3.size5,.katex .sizing.reset-size3.size5{font-size:1.25em}.katex .fontsize-ensurer.reset-size3.size6,.katex .sizing.reset-size3.size6{font-size:1.5em}.katex .fontsize-ensurer.reset-size3.size7,.katex .sizing.reset-size3.size7{font-size:1.8em}.katex .fontsize-ensurer.reset-size3.size8,.katex .sizing.reset-size3.size8{font-size:2.1625em}.katex .fontsize-ensurer.reset-size3.size9,.katex .sizing.reset-size3.size9{font-size:2.5875em}.katex .fontsize-ensurer.reset-size3.size10,.katex .sizing.reset-size3.size10{font-size:3.1125em}.katex .fontsize-ensurer.reset-size4.size1,.katex .sizing.reset-size4.size1{font-size:.55555556em}.katex .fontsize-ensurer.reset-size4.size2,.katex .sizing.reset-size4.size2{font-size:.77777778em}.katex .fontsize-ensurer.reset-size4.size3,.katex .sizing.reset-size4.size3{font-size:.88888889em}.katex .fontsize-ensurer.reset-size4.size4,.katex .sizing.reset-size4.size4{font-size:1em}.katex .fontsize-ensurer.reset-size4.size5,.katex .sizing.reset-size4.size5{font-size:1.11111111em}.katex .fontsize-ensurer.reset-size4.size6,.katex .sizing.reset-size4.size6{font-size:1.33333333em}.katex .fontsize-ensurer.reset-size4.size7,.katex .sizing.reset-size4.size7{font-size:1.6em}.katex .fontsize-ensurer.reset-size4.size8,.katex .sizing.reset-size4.size8{font-size:1.92222222em}.katex .fontsize-ensurer.reset-size4.size9,.katex .sizing.reset-size4.size9{font-size:2.3em}.katex .fontsize-ensurer.reset-size4.size10,.katex .sizing.reset-size4.size10{font-size:2.76666667em}.katex .fontsize-ensurer.reset-size5.size1,.katex .sizing.reset-size5.size1{font-size:.5em}.katex .fontsize-ensurer.reset-size5.size2,.katex .sizing.reset-size5.size2{font-size:.7em}.katex .fontsize-ensurer.reset-size5.size3,.katex .sizing.reset-size5.size3{font-size:.8em}.katex .fontsize-ensurer.reset-size5.size4,.katex .sizing.reset-size5.size4{font-size:.9em}.katex .fontsize-ensurer.reset-size5.size5,.katex .sizing.reset-size5.size5{font-size:1em}.katex .fontsize-ensurer.reset-size5.size6,.katex .sizing.reset-size5.size6{font-size:1.2em}.katex .fontsize-ensurer.reset-size5.size7,.katex .sizing.reset-size5.size7{font-size:1.44em}.katex .fontsize-ensurer.reset-size5.size8,.katex .sizing.reset-size5.size8{font-size:1.73em}.katex .fontsize-ensurer.reset-size5.size9,.katex .sizing.reset-size5.size9{font-size:2.07em}.katex .fontsize-ensurer.reset-size5.size10,.katex .sizing.reset-size5.size10{font-size:2.49em}.katex .fontsize-ensurer.reset-size6.size1,.katex .sizing.reset-size6.size1{font-size:.41666667em}.katex .fontsize-ensurer.reset-size6.size2,.katex .sizing.reset-size6.size2{font-size:.58333333em}.katex .fontsize-ensurer.reset-size6.size3,.katex .sizing.reset-size6.size3{font-size:.66666667em}.katex .fontsize-ensurer.reset-size6.size4,.katex .sizing.reset-size6.size4{font-size:.75em}.katex .fontsize-ensurer.reset-size6.size5,.katex .sizing.reset-size6.size5{font-size:.83333333em}.katex .fontsize-ensurer.reset-size6.size6,.katex .sizing.reset-size6.size6{font-size:1em}.katex .fontsize-ensurer.reset-size6.size7,.katex .sizing.reset-size6.size7{font-size:1.2em}.katex .fontsize-ensurer.reset-size6.size8,.katex .sizing.reset-size6.size8{font-size:1.44166667em}.katex .fontsize-ensurer.reset-size6.size9,.katex .sizing.reset-size6.size9{font-size:1.725em}.katex .fontsize-ensurer.reset-size6.size10,.katex .sizing.reset-size6.size10{font-size:2.075em}.katex .fontsize-ensurer.reset-size7.size1,.katex .sizing.reset-size7.size1{font-size:.34722222em}.katex .fontsize-ensurer.reset-size7.size2,.katex .sizing.reset-size7.size2{font-size:.48611111em}.katex .fontsize-ensurer.reset-size7.size3,.katex .sizing.reset-size7.size3{font-size:.55555556em}.katex .fontsize-ensurer.reset-size7.size4,.katex .sizing.reset-size7.size4{font-size:.625em}.katex .fontsize-ensurer.reset-size7.size5,.katex .sizing.reset-size7.size5{font-size:.69444444em}.katex .fontsize-ensurer.reset-size7.size6,.katex .sizing.reset-size7.size6{font-size:.83333333em}.katex .fontsize-ensurer.reset-size7.size7,.katex .sizing.reset-size7.size7{font-size:1em}.katex .fontsize-ensurer.reset-size7.size8,.katex .sizing.reset-size7.size8{font-size:1.20138889em}.katex .fontsize-ensurer.reset-size7.size9,.katex .sizing.reset-size7.size9{font-size:1.4375em}.katex .fontsize-ensurer.reset-size7.size10,.katex .sizing.reset-size7.size10{font-size:1.72916667em}.katex .fontsize-ensurer.reset-size8.size1,.katex .sizing.reset-size8.size1{font-size:.28901734em}.katex .fontsize-ensurer.reset-size8.size2,.katex .sizing.reset-size8.size2{font-size:.40462428em}.katex .fontsize-ensurer.reset-size8.size3,.katex .sizing.reset-size8.size3{font-size:.46242775em}.katex .fontsize-ensurer.reset-size8.size4,.katex .sizing.reset-size8.size4{font-size:.52023121em}.katex .fontsize-ensurer.reset-size8.size5,.katex .sizing.reset-size8.size5{font-size:.57803468em}.katex .fontsize-ensurer.reset-size8.size6,.katex .sizing.reset-size8.size6{font-size:.69364162em}.katex .fontsize-ensurer.reset-size8.size7,.katex .sizing.reset-size8.size7{font-size:.83236994em}.katex .fontsize-ensurer.reset-size8.size8,.katex .sizing.reset-size8.size8{font-size:1em}.katex .fontsize-ensurer.reset-size8.size9,.katex .sizing.reset-size8.size9{font-size:1.19653179em}.katex .fontsize-ensurer.reset-size8.size10,.katex .sizing.reset-size8.size10{font-size:1.43930636em}.katex .fontsize-ensurer.reset-size9.size1,.katex .sizing.reset-size9.size1{font-size:.24154589em}.katex .fontsize-ensurer.reset-size9.size2,.katex .sizing.reset-size9.size2{font-size:.33816425em}.katex .fontsize-ensurer.reset-size9.size3,.katex .sizing.reset-size9.size3{font-size:.38647343em}.katex .fontsize-ensurer.reset-size9.size4,.katex .sizing.reset-size9.size4{font-size:.43478261em}.katex .fontsize-ensurer.reset-size9.size5,.katex .sizing.reset-size9.size5{font-size:.48309179em}.katex .fontsize-ensurer.reset-size9.size6,.katex .sizing.reset-size9.size6{font-size:.57971014em}.katex .fontsize-ensurer.reset-size9.size7,.katex .sizing.reset-size9.size7{font-size:.69565217em}.katex .fontsize-ensurer.reset-size9.size8,.katex .sizing.reset-size9.size8{font-size:.83574879em}.katex .fontsize-ensurer.reset-size9.size9,.katex .sizing.reset-size9.size9{font-size:1em}.katex .fontsize-ensurer.reset-size9.size10,.katex .sizing.reset-size9.size10{font-size:1.20289855em}.katex .fontsize-ensurer.reset-size10.size1,.katex .sizing.reset-size10.size1{font-size:.20080321em}.katex .fontsize-ensurer.reset-size10.size2,.katex .sizing.reset-size10.size2{font-size:.2811245em}.katex .fontsize-ensurer.reset-size10.size3,.katex .sizing.reset-size10.size3{font-size:.32128514em}.katex .fontsize-ensurer.reset-size10.size4,.katex .sizing.reset-size10.size4{font-size:.36144578em}.katex .fontsize-ensurer.reset-size10.size5,.katex .sizing.reset-size10.size5{font-size:.40160643em}.katex .fontsize-ensurer.reset-size10.size6,.katex .sizing.reset-size10.size6{font-size:.48192771em}.katex .fontsize-ensurer.reset-size10.size7,.katex .sizing.reset-size10.size7{font-size:.57831325em}.katex .fontsize-ensurer.reset-size10.size8,.katex .sizing.reset-size10.size8{font-size:.69477912em}.katex .fontsize-ensurer.reset-size10.size9,.katex .sizing.reset-size10.size9{font-size:.8313253em}.katex .fontsize-ensurer.reset-size10.size10,.katex .sizing.reset-size10.size10{font-size:1em}.katex .delimsizing.size1{font-family:KaTeX_Size1}.katex .delimsizing.size2{font-family:KaTeX_Size2}.katex .delimsizing.size3{font-family:KaTeX_Size3}.katex .delimsizing.size4{font-family:KaTeX_Size4}.katex .delimsizing.mult .delim-size1>span{font-family:KaTeX_Size1}.katex .delimsizing.mult .delim-size4>span{font-family:KaTeX_Size4}.katex .nulldelimiter{display:inline-block;width:.12em}.katex .op-symbol{position:relative}.katex .op-symbol.small-op{font-family:KaTeX_Size1}.katex .op-symbol.large-op{font-family:KaTeX_Size2}.katex .accent>.vlist>span,.katex .op-limits>.vlist>span{text-align:center}.katex .accent .accent-body>span{width:0}.katex .accent .accent-body.accent-vec>span{position:relative;left:.326em}\n";
   var convert = $Native$Katex.convert;
   _elm.Katex.values = {_op: _op
                       ,convert: convert
                       ,css: css};
   return _elm.Katex.values;
};
Elm.List = Elm.List || {};
Elm.List.make = function (_elm) {
   "use strict";
   _elm.List = _elm.List || {};
   if (_elm.List.values)
   return _elm.List.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "List",
   $Basics = Elm.Basics.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$List = Elm.Native.List.make(_elm);
   var sortWith = $Native$List.sortWith;
   var sortBy = $Native$List.sortBy;
   var sort = $Native$List.sort;
   var repeat = $Native$List.repeat;
   var drop = $Native$List.drop;
   var take = $Native$List.take;
   var map5 = $Native$List.map5;
   var map4 = $Native$List.map4;
   var map3 = $Native$List.map3;
   var map2 = $Native$List.map2;
   var append = $Native$List.append;
   var any = $Native$List.any;
   var all = $Native$List.all;
   var length = $Native$List.length;
   var filter = $Native$List.filter;
   var scanl1 = $Native$List.scanl1;
   var scanl = $Native$List.scanl;
   var foldr1 = $Native$List.foldr1;
   var foldl1 = $Native$List.foldl1;
   var maximum = foldl1($Basics.max);
   var minimum = foldl1($Basics.min);
   var foldr = $Native$List.foldr;
   var concat = function (lists) {
      return A3(foldr,
      append,
      _L.fromArray([]),
      lists);
   };
   var foldl = $Native$List.foldl;
   var sum = function (numbers) {
      return A3(foldl,
      F2(function (x,y) {
         return x + y;
      }),
      0,
      numbers);
   };
   var product = function (numbers) {
      return A3(foldl,
      F2(function (x,y) {
         return x * y;
      }),
      1,
      numbers);
   };
   var indexedMap = F2(function (f,
   xs) {
      return A3(map2,
      f,
      _L.range(0,length(xs) - 1),
      xs);
   });
   var map = $Native$List.map;
   var concatMap = F2(function (f,
   list) {
      return concat(A2(map,
      f,
      list));
   });
   var member = $Native$List.member;
   var isEmpty = function (xs) {
      return function () {
         switch (xs.ctor)
         {case "[]": return true;}
         return false;
      }();
   };
   var tail = $Native$List.tail;
   var head = $Native$List.head;
   _op["::"] = $Native$List.cons;
   var maybeCons = F3(function (f,
   mx,
   xs) {
      return function () {
         var _v1 = f(mx);
         switch (_v1.ctor)
         {case "Just":
            return A2(_op["::"],_v1._0,xs);
            case "Nothing": return xs;}
         _U.badCase($moduleName,
         "between lines 162 and 169");
      }();
   });
   var filterMap = F2(function (f,
   xs) {
      return A3(foldr,
      maybeCons(f),
      _L.fromArray([]),
      xs);
   });
   var reverse = A2(foldl,
   F2(function (x,y) {
      return A2(_op["::"],x,y);
   }),
   _L.fromArray([]));
   var partition = F2(function (pred,
   list) {
      return function () {
         var step = F2(function (x,
         _v3) {
            return function () {
               switch (_v3.ctor)
               {case "_Tuple2":
                  return pred(x) ? {ctor: "_Tuple2"
                                   ,_0: A2(_op["::"],x,_v3._0)
                                   ,_1: _v3._1} : {ctor: "_Tuple2"
                                                  ,_0: _v3._0
                                                  ,_1: A2(_op["::"],x,_v3._1)};}
               _U.badCase($moduleName,
               "between lines 271 and 273");
            }();
         });
         return A3(foldr,
         step,
         {ctor: "_Tuple2"
         ,_0: _L.fromArray([])
         ,_1: _L.fromArray([])},
         list);
      }();
   });
   var unzip = function (pairs) {
      return function () {
         var step = F2(function (_v7,
         _v8) {
            return function () {
               switch (_v8.ctor)
               {case "_Tuple2":
                  return function () {
                       switch (_v7.ctor)
                       {case "_Tuple2":
                          return {ctor: "_Tuple2"
                                 ,_0: A2(_op["::"],_v7._0,_v8._0)
                                 ,_1: A2(_op["::"],
                                 _v7._1,
                                 _v8._1)};}
                       _U.badCase($moduleName,
                       "on line 309, column 12 to 28");
                    }();}
               _U.badCase($moduleName,
               "on line 309, column 12 to 28");
            }();
         });
         return A3(foldr,
         step,
         {ctor: "_Tuple2"
         ,_0: _L.fromArray([])
         ,_1: _L.fromArray([])},
         pairs);
      }();
   };
   var intersperse = F2(function (sep,
   xs) {
      return function () {
         switch (xs.ctor)
         {case "::": return function () {
                 var step = F2(function (x,
                 rest) {
                    return A2(_op["::"],
                    sep,
                    A2(_op["::"],x,rest));
                 });
                 var spersed = A3(foldr,
                 step,
                 _L.fromArray([]),
                 xs._1);
                 return A2(_op["::"],
                 xs._0,
                 spersed);
              }();
            case "[]":
            return _L.fromArray([]);}
         _U.badCase($moduleName,
         "between lines 320 and 331");
      }();
   });
   _elm.List.values = {_op: _op
                      ,head: head
                      ,tail: tail
                      ,isEmpty: isEmpty
                      ,member: member
                      ,map: map
                      ,indexedMap: indexedMap
                      ,foldl: foldl
                      ,foldr: foldr
                      ,foldl1: foldl1
                      ,foldr1: foldr1
                      ,scanl: scanl
                      ,scanl1: scanl1
                      ,filter: filter
                      ,filterMap: filterMap
                      ,maybeCons: maybeCons
                      ,length: length
                      ,reverse: reverse
                      ,all: all
                      ,any: any
                      ,append: append
                      ,concat: concat
                      ,concatMap: concatMap
                      ,sum: sum
                      ,product: product
                      ,maximum: maximum
                      ,minimum: minimum
                      ,partition: partition
                      ,map2: map2
                      ,map3: map3
                      ,map4: map4
                      ,map5: map5
                      ,unzip: unzip
                      ,intersperse: intersperse
                      ,take: take
                      ,drop: drop
                      ,repeat: repeat
                      ,sort: sort
                      ,sortBy: sortBy
                      ,sortWith: sortWith};
   return _elm.List.values;
};
Elm.Main = Elm.Main || {};
Elm.Main.make = function (_elm) {
   "use strict";
   _elm.Main = _elm.Main || {};
   if (_elm.Main.values)
   return _elm.Main.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Main",
   $Book = Elm.Book.make(_elm),
   $Contents = Elm.Contents.make(_elm);
   var title = _P.portOut("title",
   function (v) {
      return v;
   },
   "Game Programming");
   var main = A2($Book.book,
   title,
   $Contents.chapters);
   _elm.Main.values = {_op: _op
                      ,main: main};
   return _elm.Main.values;
};
Elm.Markdown = Elm.Markdown || {};
Elm.Markdown.make = function (_elm) {
   "use strict";
   _elm.Markdown = _elm.Markdown || {};
   if (_elm.Markdown.values)
   return _elm.Markdown.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Markdown",
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $Html = Elm.Html.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Markdown = Elm.Native.Markdown.make(_elm);
   var toElementWith = $Native$Markdown.toElementWith;
   var toHtmlWith = $Native$Markdown.toHtmlWith;
   var defaultOptions = {_: {}
                        ,githubFlavored: $Maybe.Just({_: {}
                                                     ,breaks: false
                                                     ,tables: false})
                        ,sanitize: false
                        ,smartypants: false};
   var Options = F3(function (a,
   b,
   c) {
      return {_: {}
             ,githubFlavored: a
             ,sanitize: b
             ,smartypants: c};
   });
   var toElement = function (string) {
      return A2($Native$Markdown.toElementWith,
      defaultOptions,
      string);
   };
   var toHtml = function (string) {
      return A2($Native$Markdown.toHtmlWith,
      defaultOptions,
      string);
   };
   _elm.Markdown.values = {_op: _op
                          ,toHtml: toHtml
                          ,toElement: toElement
                          ,Options: Options
                          ,defaultOptions: defaultOptions
                          ,toHtmlWith: toHtmlWith
                          ,toElementWith: toElementWith};
   return _elm.Markdown.values;
};
Elm.Maybe = Elm.Maybe || {};
Elm.Maybe.make = function (_elm) {
   "use strict";
   _elm.Maybe = _elm.Maybe || {};
   if (_elm.Maybe.values)
   return _elm.Maybe.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Maybe";
   var withDefault = F2(function ($default,
   maybe) {
      return function () {
         switch (maybe.ctor)
         {case "Just": return maybe._0;
            case "Nothing":
            return $default;}
         _U.badCase($moduleName,
         "between lines 45 and 56");
      }();
   });
   var Nothing = {ctor: "Nothing"};
   var oneOf = function (maybes) {
      return function () {
         switch (maybes.ctor)
         {case "::": return function () {
                 switch (maybes._0.ctor)
                 {case "Just": return maybes._0;
                    case "Nothing":
                    return oneOf(maybes._1);}
                 _U.badCase($moduleName,
                 "between lines 64 and 73");
              }();
            case "[]": return Nothing;}
         _U.badCase($moduleName,
         "between lines 59 and 73");
      }();
   };
   var andThen = F2(function (maybeValue,
   callback) {
      return function () {
         switch (maybeValue.ctor)
         {case "Just":
            return callback(maybeValue._0);
            case "Nothing": return Nothing;}
         _U.badCase($moduleName,
         "between lines 110 and 112");
      }();
   });
   var Just = function (a) {
      return {ctor: "Just",_0: a};
   };
   var map = F2(function (f,
   maybe) {
      return function () {
         switch (maybe.ctor)
         {case "Just":
            return Just(f(maybe._0));
            case "Nothing": return Nothing;}
         _U.badCase($moduleName,
         "between lines 76 and 107");
      }();
   });
   _elm.Maybe.values = {_op: _op
                       ,andThen: andThen
                       ,map: map
                       ,withDefault: withDefault
                       ,oneOf: oneOf
                       ,Just: Just
                       ,Nothing: Nothing};
   return _elm.Maybe.values;
};
Elm.Native.Array = {};
Elm.Native.Array.make = function(elm) {
    elm.Native = elm.Native || {};
    elm.Native.Array = elm.Native.Array || {};
    if (elm.Native.Array.values) return elm.Native.Array.values;
    if ('values' in Elm.Native.Array)
      return elm.Native.Array.values = Elm.Native.Array.values;

    var List = Elm.Native.List.make(elm);

    // A RRB-Tree has two distinct data types.
    // Leaf -> "height"  is always 0
    //         "table"   is an array of elements
    // Node -> "height"  is always greater than 0
    //         "table"   is an array of child nodes
    //         "lengths" is an array of accumulated lengths of the child nodes

    // M is the maximal table size. 32 seems fast. E is the allowed increase
    // of search steps when concatting to find an index. Lower values will 
    // decrease balancing, but will increase search steps.
    var M = 32;
    var E = 2;

    // An empty array.
    var empty = { ctor:"_Array", height:0, table:new Array() };

    function get(i, array) {
        if (i < 0 || i >= length(array)) {
            throw new Error("Index " + i + " is out of range. Check the length of " +
                            "your array first or use getMaybe or getWithDefault.");
        }
        return unsafeGet(i, array);
    }

    function unsafeGet(i, array) {
      for (var x = array.height; x > 0; x--) {
        var slot = i >> (x * 5);
        while (array.lengths[slot] <= i) {
          slot++;
        }
        if (slot > 0) {
          i -= array.lengths[slot - 1];
        }
        array = array.table[slot];
      }
      return array.table[i];
    }

    // Sets the value at the index i. Only the nodes leading to i will get
    // copied and updated.
    function set(i, item, array) {
      if (i < 0 || length(array) <= i) {
        return array;
      }
      return unsafeSet(i, item, array);
    }

    function unsafeSet(i, item, array) {
      array = nodeCopy(array);

      if (array.height == 0) {
        array.table[i] = item;
      } else {
        var slot = getSlot(i, array);
        if (slot > 0) {
          i -= array.lengths[slot - 1];
        }
        array.table[slot] = unsafeSet(i, item, array.table[slot]);
      }
      return array;
    }

    function initialize(len, f) {
      if (len == 0) { return empty; }
      var h = Math.floor(Math.log(len)/Math.log(M));
      return initialize_(f, h, 0, len);
    }

    function initialize_(f, h, from, to) {
      if (h == 0) {
        var table = new Array((to - from) % (M + 1));
        for (var i = 0; i < table.length; i++) {
          table[i] = f(from + i);
        }
        return { ctor:"_Array", height:0, table:table };
      }

      var step = Math.pow(M, h);
      var table = new Array(Math.ceil((to - from) / step));
      var lengths = new Array(table.length);
      for (var i = 0; i < table.length; i++) {
        table[i] = initialize_( f, h - 1, from + (i * step)
                              , Math.min(from + ((i + 1) * step), to));
        lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
      }
      return { ctor:"_Array", height:h, table:table, lengths:lengths };
    }

    function fromList(list) {
      if (list == List.Nil) { return empty; }

      // Allocate M sized blocks (table) and write list elements to it.
      var table = new Array(M);
      var nodes = new Array();
      var i = 0;

      while (list.ctor !== '[]') {
        table[i] = list._0;
        list = list._1;
        i++;

        // table is full, so we can push a leaf containing it into the
        // next node.
        if (i == M) {
          fromListPush({ ctor:"_Array", height:0, table:table }
                      , nodes);
          table = new Array(M);
          i = 0;
        }
      }

      // Maybe there is something left on the table.
      if (i > 0) {
        fromListPush({ ctor:"_Array", height:0, table:table.splice(0,i) }
                    , nodes);
      }

      // Go through all of the nodes and eventually push them into higher nodes.
      for (var h = 0; h < nodes.length - 1; h++) {
        if (nodes[h].table.length > 0) {
          fromListPush(nodes[h], nodes);
        }
      }

      var head = nodes[nodes.length - 1];
      if (head.height > 0 && head.table.length == 1) {
        return head.table[0];
      } else {
        return head;
      }
    }

    // Push a node into a higher node as a child.
    function fromListPush(toPush, nodes) {
      var h = toPush.height;

      // Maybe the node on this height does not exist.
      if (nodes.length == h) {
        nodes.push({ ctor:"_Array", height:h + 1
                                  , table:new Array()
                                  , lengths:new Array() });
      }

      nodes[h].table.push(toPush);
      var len = length(toPush);
      if (nodes[h].lengths.length > 0) {
        len += nodes[h].lengths[nodes[h].lengths.length - 1];
      }
      nodes[h].lengths.push(len);

      if (nodes[h].table.length == M) {
        fromListPush(nodes[h], nodes);
        nodes[h] = { ctor:"_Array", height:h + 1
                                  , table:new Array()
                                  , lengths:new Array() };
      }
    }

    // Pushes an item via push_ to the bottom right of a tree.
    function push(item, a) {
      var pushed = push_(item, a);
      if (pushed !== null) {
        return pushed;
      }

      var newTree = create(item, a.height);
      return siblise(a, newTree);
    }

    // Recursively tries to push an item to the bottom-right most
    // tree possible. If there is no space left for the item,
    // null will be returned.
    function push_(item, a) {
      // Handle resursion stop at leaf level.
      if (a.height == 0) {
        if (a.table.length < M) {
          var newA = { ctor:"_Array", height:0, table:a.table.slice() };
          newA.table.push(item);
          return newA;
        } else {
          return null;
        }
      }

      // Recursively push
      var pushed = push_(item, botRight(a));

      // There was space in the bottom right tree, so the slot will
      // be updated.
      if (pushed != null) {
        var newA = nodeCopy(a);
        newA.table[newA.table.length - 1] = pushed;
        newA.lengths[newA.lengths.length - 1]++;
        return newA
      }

      // When there was no space left, check if there is space left
      // for a new slot with a tree which contains only the item
      // at the bottom.
      if (a.table.length < M) {
        var newSlot = create(item, a.height - 1);
        var newA = nodeCopy(a);
        newA.table.push(newSlot);
        newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
        return newA
      } else {
        return null;
      }
    }

    // Converts an array into a list of elements.
    function toList(a) {
      return toList_(List.Nil, a);
    }

    function toList_(list, a) {
      for (var i = a.table.length - 1; i >= 0; i--) {
        list = a.height == 0 ? List.Cons(a.table[i], list) : toList_(list, a.table[i]);
      }
      return list;
    }

    // Maps a function over the elements of an array.
    function map(f, a) {
      var newA = { ctor:"_Array", height:a.height, table:new Array(a.table) };
      if (a.height > 0) { newA.lengths = a.lengths; }
      for (var i = 0; i < a.table.length; i++) {
        newA.table[i] = a.height == 0 ? f(a.table[i]) : map(f, a.table[i]);
      }
      return newA;
    }

    // Maps a function over the elements with their index as first argument.
    function indexedMap(f, a) {
      return indexedMap_(f, a, 0);
    }

    function indexedMap_(f, a, from) {
      var newA = { ctor:"_Array", height:a.height, table:new Array(a.table) };
      if (a.height > 0) { newA.lengths = a.lengths; }
      for (var i = 0; i < a.table.length; i++) {
        newA.table[i] = a.height == 0 ? A2(f, from + i, a.table[i])
                                      : indexedMap_( f, a.table[i]
                                                   , i == 0 ? 0 : a.lengths[i - 1]);
      }
      return newA;
    }

    function foldl(f, b, a) {
      if (a.height == 0) {
        for (var i = 0; i < a.table.length; i++) {
          b = A2(f, a.table[i], b);
        }
      } else {
        for (var i = 0; i < a.table.length; i++) {
          b = foldl(f, b, a.table[i]);
        }
      }
      return b;
    }

    function foldr(f, b, a) {
      if (a.height == 0) {
        for (var i = a.table.length; i--; ) {
          b = A2(f, a.table[i], b);
        }
      } else {
        for (var i = a.table.length; i--; ) {
          b = foldr(f, b, a.table[i]);
        }
      }
      return b;
    }

    // TODO: currently, it slices the right, then the left. This can be
    // optimized.
    function slice(from, to, a) {
      if (from < 0) { from += length(a); }
      if (to < 0)   { to += length(a); }
      return sliceLeft(from, sliceRight(to, a));
    }

    function sliceRight(to, a) {
      if (to == length(a)) {
        return a;
      }

      // Handle leaf level.
      if (a.height == 0) {
        var newA = { ctor:"_Array", height:0 };
        newA.table = a.table.slice(0, to);
        return newA;
      }

      // Slice the right recursively.
      var right = getSlot(to, a);
      var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

      // Maybe the a node is not even needed, as sliced contains the whole slice.
      if (right == 0) {
        return sliced;
      }

      // Create new node.
      var newA = { ctor:"_Array", height:a.height
                                , table:a.table.slice(0, right)
                                , lengths:a.lengths.slice(0, right) };
      if (sliced.table.length > 0) {
        newA.table[right] = sliced;
        newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
      }
      return newA;
    }

    function sliceLeft(from, a) {
      if (from == 0) {
        return a;
      }

      // Handle leaf level.
      if (a.height == 0) {
        var newA = { ctor:"_Array", height:0 };
        newA.table = a.table.slice(from, a.table.length + 1);
        return newA;
      }

      // Slice the left recursively.
      var left = getSlot(from, a);
      var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

      // Maybe the a node is not even needed, as sliced contains the whole slice.
      if (left == a.table.length - 1) {
        return sliced;
      }

      // Create new node.
      var newA = { ctor:"_Array", height:a.height
                                , table:a.table.slice(left, a.table.length + 1)
                                , lengths:new Array(a.table.length - left) };
      newA.table[0] = sliced;
      var len = 0;
      for (var i = 0; i < newA.table.length; i++) {
        len += length(newA.table[i]);
        newA.lengths[i] = len;
      }

      return newA;
    }

    // Appends two trees.
    function append(a,b) {
      if (a.table.length === 0) {
        return b;
      }
      if (b.table.length === 0) {
        return a;
      }

      var c = append_(a, b);

      // Check if both nodes can be crunshed together.
      if (c[0].table.length + c[1].table.length <= M) {
        if (c[0].table.length === 0) {
          return c[1];
        }
        if (c[1].table.length === 0) {
          return c[0];
        }

        // Adjust .table and .lengths
        c[0].table = c[0].table.concat(c[1].table);
        if (c[0].height > 0) {
          var len = length(c[0]);
          for (var i = 0; i < c[1].lengths.length; i++) {
            c[1].lengths[i] += len;
          }
          c[0].lengths = c[0].lengths.concat(c[1].lengths);
        }

        return c[0];
      }

      if (c[0].height > 0) {
        var toRemove = calcToRemove(a, b);
        if (toRemove > E) {
          c = shuffle(c[0], c[1], toRemove);
        }
      }

      return siblise(c[0], c[1]);
    }

    // Returns an array of two nodes; right and left. One node _may_ be empty.
    function append_(a, b) {
      if (a.height === 0 && b.height === 0) {
        return [a, b];
      }

      if (a.height !== 1 || b.height !== 1) {
        if (a.height === b.height) {
          a = nodeCopy(a);
          b = nodeCopy(b);
          var appended = append_(botRight(a), botLeft(b));

          insertRight(a, appended[1]);
          insertLeft(b, appended[0]);
        } else if (a.height > b.height) {
          a = nodeCopy(a);
          var appended = append_(botRight(a), b);

          insertRight(a, appended[0]);
          b = parentise(appended[1], appended[1].height + 1);
        } else {
          b = nodeCopy(b);
          var appended = append_(a, botLeft(b));

          var left = appended[0].table.length === 0 ? 0 : 1;
          var right = left === 0 ? 1 : 0;
          insertLeft(b, appended[left]);
          a = parentise(appended[right], appended[right].height + 1);
        }
      }

      // Check if balancing is needed and return based on that.
      if (a.table.length === 0 || b.table.length === 0) {
        return [a,b];
      }

      var toRemove = calcToRemove(a, b);
      if (toRemove <= E) {
        return [a,b];
      }
      return shuffle(a, b, toRemove);
    }

    // Helperfunctions for append_. Replaces a child node at the side of the parent.
    function insertRight(parent, node) {
      var index = parent.table.length - 1;
      parent.table[index] = node;
      parent.lengths[index] = length(node)
      parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
    }

    function insertLeft(parent, node) {
      if (node.table.length > 0) {
        parent.table[0] = node;
        parent.lengths[0] = length(node);

        var len = length(parent.table[0]);
        for (var i = 1; i < parent.lengths.length; i++) {
          len += length(parent.table[i]);
          parent.lengths[i] = len;
        }
      } else {
        parent.table.shift();
        for (var i = 1; i < parent.lengths.length; i++) {
          parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
        }
        parent.lengths.shift();
      }
    }

    // Returns the extra search steps for E. Refer to the paper.
    function calcToRemove(a, b) {
      var subLengths = 0;
      for (var i = 0; i < a.table.length; i++) {
        subLengths += a.table[i].table.length;
      }
      for (var i = 0; i < b.table.length; i++) {
        subLengths += b.table[i].table.length;
      }

      var toRemove = a.table.length + b.table.length
      return toRemove - (Math.floor((subLengths - 1) / M) + 1);
    }

    // get2, set2 and saveSlot are helpers for accessing elements over two arrays.
    function get2(a, b, index) {
      return index < a.length ? a[index] : b[index - a.length];
    }

    function set2(a, b, index, value) {
      if (index < a.length) {
        a[index] = value;
      } else {
        b[index - a.length] = value;
      }
    }

    function saveSlot(a, b, index, slot) {
      set2(a.table, b.table, index, slot);

      var l = (index == 0 || index == a.lengths.length) ?
                0 : get2(a.lengths, a.lengths, index - 1);
      set2(a.lengths, b.lengths, index, l + length(slot));
    }

    // Creates a node or leaf with a given length at their arrays for perfomance.
    // Is only used by shuffle.
    function createNode(h, length) {
      if (length < 0) { length = 0; }
      var a = { ctor:"_Array", height:h, table:new Array(length) };
      if (h > 0) {
        a.lengths = new Array(length);
      }
      return a;
    }

    // Returns an array of two balanced nodes.
    function shuffle(a, b, toRemove) {
      var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
      var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

      // Skip the slots with size M. More precise: copy the slot references
      // to the new node
      var read = 0;
      while (get2(a.table, b.table, read).table.length % M == 0) {
        set2(newA.table, newB.table, read, get2(a.table, b.table, read));
        set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
        read++;
      }

      // Pulling items from left to right, caching in a slot before writing
      // it into the new nodes.
      var write = read;
      var slot = new createNode(a.height - 1, 0);
      var from = 0;

      // If the current slot is still containing data, then there will be at
      // least one more write, so we do not break this loop yet.
      while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove) {
        // Find out the max possible items for copying.
        var source = get2(a.table, b.table, read);
        var to = Math.min(M - slot.table.length, source.table.length)

        // Copy and adjust size table.
        slot.table = slot.table.concat(source.table.slice(from, to));
        if (slot.height > 0) {
          var len = slot.lengths.length;
          for (var i = len; i < len + to - from; i++) {
            slot.lengths[i] = length(slot.table[i]);
            slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
          }
        }

        from += to;

        // Only proceed to next slots[i] if the current one was
        // fully copied.
        if (source.table.length <= to) {
          read++; from = 0;
        }

        // Only create a new slot if the current one is filled up.
        if (slot.table.length == M) {
          saveSlot(newA, newB, write, slot);
          slot = createNode(a.height - 1,0);
          write++;
        }
      }

      // Cleanup after the loop. Copy the last slot into the new nodes.
      if (slot.table.length > 0) {
        saveSlot(newA, newB, write, slot);
        write++;
      }

      // Shift the untouched slots to the left
      while (read < a.table.length + b.table.length ) {
        saveSlot(newA, newB, write, get2(a.table, b.table, read));
        read++; write++;
      }

      return [newA, newB];
    }

    // Navigation functions
    function botRight(a) { return a.table[a.table.length - 1]; }
    function botLeft(a)  { return a.table[0]; }

    // Copies a node for updating. Note that you should not use this if
    // only updating only one of "table" or "lengths" for performance reasons.
    function nodeCopy(a) {
      var newA = { ctor:"_Array", height:a.height
                                , table:a.table.slice() };
      if (a.height > 0) { newA.lengths = a.lengths.slice(); }
      return newA;
    }

    // Returns how many items are in the tree.
    function length(array) {
      if (array.height == 0) {
        return array.table.length;
      } else {
        return array.lengths[array.lengths.length - 1];
      }
    }

    // Calculates in which slot of "table" the item probably is, then
    // find the exact slot via forward searching in  "lengths". Returns the index.
    function getSlot(i, a) {
      var slot = i >> (5 * a.height);
      while (a.lengths[slot] <= i) {
        slot++;
      }
      return slot;
    }

    // Recursively creates a tree with a given height containing
    // only the given item.
    function create(item, h) {
      if (h == 0) {
        return { ctor:"_Array", height:0
                              , table:[item] };
      } else {
        return { ctor:"_Array", height:h
                              , table:[create(item, h - 1)]
                              , lengths:[1] };
      }
    }

    // Recursively creates a tree that contains the given tree.
    function parentise(tree, h) {
      if (h == tree.height) {
        return tree;
      } else {
        return { ctor:"_Array", height:h
                              , table:[parentise(tree, h - 1)]
                              , lengths:[length(tree)] };
      }
    }

    // Emphasizes blood brotherhood beneath two trees.
    function siblise(a, b) {
      return { ctor:"_Array", height:a.height + 1
                            , table:[a, b]
                            , lengths:[length(a), length(a) + length(b)] };
    }

    function toJSArray(a) {
      var jsArray = new Array(length(a));
      toJSArray_(jsArray, 0, a);
      return jsArray;
    }

    function toJSArray_(jsArray, i, a) {
      for (var t = 0; t < a.table.length; t++) {
        if (a.height == 0) {
          jsArray[i + t] = a.table[t];
        } else {
          var inc = t == 0 ? 0 : a.lengths[t - 1];
          toJSArray_(jsArray, i + inc, a.table[t]);
        }
      }
    }

    function fromJSArray(jsArray) {
      if (jsArray.length == 0) { return empty; }
      var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
      return fromJSArray_(jsArray, h, 0, jsArray.length);
    }

    function fromJSArray_(jsArray, h, from, to) {
      if (h == 0) {
        return { ctor:"_Array", height:0
                              , table:jsArray.slice(from, to) };
      }

      var step = Math.pow(M, h);
      var table = new Array(Math.ceil((to - from) / step));
      var lengths = new Array(table.length);
      for (var i = 0; i < table.length; i++) {
        table[i] = fromJSArray_( jsArray, h - 1, from + (i * step)
                               , Math.min(from + ((i + 1) * step), to));
        lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
      }
      return { ctor:"_Array", height:h, table:table, lengths:lengths };
    }

    Elm.Native.Array.values = {
      empty:empty,
      fromList:fromList,
      toList:toList,
      initialize:F2(initialize),
      append:F2(append),
      push:F2(push),
      slice:F3(slice),
      get:F2(get),
      set:F3(set),
      map:F2(map),
      indexedMap:F2(indexedMap),
      foldl:F3(foldl),
      foldr:F3(foldr),
      length:length,

      toJSArray:toJSArray,
      fromJSArray:fromJSArray
    };

    return elm.Native.Array.values = Elm.Native.Array.values;
}


Elm.Native.Basics = {};
Elm.Native.Basics.make = function(elm) {
  elm.Native = elm.Native || {};
  elm.Native.Basics = elm.Native.Basics || {};
  if (elm.Native.Basics.values) return elm.Native.Basics.values;

  var Utils = Elm.Native.Utils.make(elm);

  function div(a, b) {
      return (a/b)|0;
  }
  function rem(a, b) {
      return a % b;
  }
  function mod(a, b) {
        if (b === 0) {
            throw new Error("Cannot perform mod 0. Division by zero error.");
        }
        var r = a % b;
        var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r+b) : -mod(-a,-b));

        return m === b ? 0 : m;
  }
  function logBase(base, n) {
      return Math.log(n) / Math.log(base);
  }
  function negate(n) {
      return -n;
  }
  function abs(n) {
      return n < 0 ? -n : n;
  }

  function min(a, b) {
      return Utils.cmp(a,b) < 0 ? a : b;
  }
  function max(a, b) {
      return Utils.cmp(a,b) > 0 ? a : b;
  }
  function clamp(lo, hi, n) {
      return Utils.cmp(n,lo) < 0 ? lo : Utils.cmp(n,hi) > 0 ? hi : n;
  }

  function xor(a, b) {
      return a !== b;
  }
  function not(b) {
      return !b;
  }
  function isInfinite(n) {
      return n === Infinity || n === -Infinity
  }

  function truncate(n) {
      return n|0;
  }

  function degrees(d) {
      return d * Math.PI / 180;
  }
  function turns(t) {
      return 2 * Math.PI * t;
  }
  function fromPolar(point) {
      var r = point._0;
      var t = point._1;
      return Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
  }
  function toPolar(point) {
      var x = point._0;
      var y = point._1;
      return Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y,x));
  }

  var basics = {
      div: F2(div),
      rem: F2(rem),
      mod: F2(mod),

      pi: Math.PI,
      e: Math.E,
      cos: Math.cos,
      sin: Math.sin,
      tan: Math.tan,
      acos: Math.acos,
      asin: Math.asin,
      atan: Math.atan,
      atan2: F2(Math.atan2),

      degrees:  degrees,
      turns:  turns,
      fromPolar:  fromPolar,
      toPolar:  toPolar,

      sqrt: Math.sqrt,
      logBase: F2(logBase),
      negate: negate,
      abs: abs,
      min: F2(min),
      max: F2(max),
      clamp: F3(clamp),
      compare: Utils.compare,

      xor: F2(xor),
      not: not,

      truncate: truncate,
      ceiling: Math.ceil,
      floor: Math.floor,
      round: Math.round,
      toFloat: function(x) { return x; },
      isNaN: isNaN,
      isInfinite: isInfinite
  };

  return elm.Native.Basics.values = basics;
};

Elm.Native.Char = {};
Elm.Native.Char.make = function(elm) {
    elm.Native = elm.Native || {};
    elm.Native.Char = elm.Native.Char || {};
    if (elm.Native.Char.values) return elm.Native.Char.values;

    var Utils = Elm.Native.Utils.make(elm);

    function isBetween(lo,hi) { return function(chr) {
	var c = chr.charCodeAt(0);
	return lo <= c && c <= hi;
    };
                              }
    var isDigit = isBetween('0'.charCodeAt(0),'9'.charCodeAt(0));
    var chk1 = isBetween('a'.charCodeAt(0),'f'.charCodeAt(0));
    var chk2 = isBetween('A'.charCodeAt(0),'F'.charCodeAt(0));

    return elm.Native.Char.values = {
        fromCode : function(c) { return String.fromCharCode(c); },
        toCode   : function(c) { return c.toUpperCase().charCodeAt(0); },
        toUpper  : function(c) { return Utils.chr(c.toUpperCase()); },
        toLower  : function(c) { return Utils.chr(c.toLowerCase()); },
        toLocaleUpper : function(c) { return Utils.chr(c.toLocaleUpperCase()); },
        toLocaleLower : function(c) { return Utils.chr(c.toLocaleLowerCase()); },
        isLower    : isBetween('a'.charCodeAt(0),'z'.charCodeAt(0)),
        isUpper    : isBetween('A'.charCodeAt(0),'Z'.charCodeAt(0)),
        isDigit    : isDigit,
        isOctDigit : isBetween('0'.charCodeAt(0),'7'.charCodeAt(0)),
        isHexDigit : function(c) { return isDigit(c) || chk1(c) || chk2(c); }
    };
};

Elm.Native.Color = {};
Elm.Native.Color.make = function(elm) {
    elm.Native = elm.Native || {};
    elm.Native.Color = elm.Native.Color || {};
    if (elm.Native.Color.values) return elm.Native.Color.values;

    function toCss(c) {
        var format = '';
        var colors = '';
        if (c.ctor === 'RGBA') {
            format = 'rgb';
            colors = c._0 + ', ' + c._1 + ', ' + c._2;
        } else {
            format = 'hsl';
            colors = (c._0 * 180 / Math.PI) + ', ' +
                     (c._1 * 100) + '%, ' +
                     (c._2 * 100) + '%';
        }
        if (c._3 === 1) {
            return format + '(' + colors + ')';
        } else {
            return format + 'a(' + colors + ', ' + c._3 + ')';
        }
    }

    return elm.Native.Color.values = {
        toCss:toCss
    };

};

Elm.Native.Debug = {};
Elm.Native.Debug.make = function(elm) {
    elm.Native = elm.Native || {};
    elm.Native.Debug = elm.Native.Debug || {};
    if (elm.Native.Debug.values)
    {
        return elm.Native.Debug.values;
    }

    var toString = Elm.Native.Show.make(elm).toString;

    function log(tag, value)
    {
        var msg = tag + ': ' + toString(value);
        var process = process || {};
        if (process.stdout) {
            process.stdout.write(msg);
        } else {
            console.log(msg);
        }
        return value;
    }

    function crash(message)
    {
        throw new Error(message);
    }

    function tracePath(tag, form)
    {
        if (elm.debug)
        {
            return elm.debug.trace(tag, form);
        }
        return form;
    }

    function watch(tag, value)
    {
        if (elm.debug)
        {
            elm.debug.watch(tag, value);
        }
        return value;
    }

    function watchSummary(tag, summarize, value)
    {
        if (elm.debug)
        {
            elm.debug.watch(tag, summarize(value));
        }
        return value;
    }

    return elm.Native.Debug.values = {
        crash: crash,
        tracePath: F2(tracePath),
        log: F2(log),
        watch: F2(watch),
        watchSummary:F3(watchSummary),
    };
};


// setup
Elm.Native = Elm.Native || {};
Elm.Native.Graphics = Elm.Native.Graphics || {};
Elm.Native.Graphics.Element = Elm.Native.Graphics.Element || {};

// definition
Elm.Native.Graphics.Element.make = function(localRuntime) {
    'use strict';

    // attempt to short-circuit
    localRuntime.Native = localRuntime.Native || {};
    localRuntime.Native.Graphics = localRuntime.Native.Graphics || {};
    localRuntime.Native.Graphics.Element = localRuntime.Native.Graphics.Element || {};
    if ('values' in localRuntime.Native.Graphics.Element) {
        return localRuntime.Native.Graphics.Element.values;
    }

    var Color = Elm.Native.Color.make(localRuntime);
    var List = Elm.Native.List.make(localRuntime);
    var Utils = Elm.Native.Utils.make(localRuntime);


    function createNode(elementType) {
        var node = document.createElement(elementType);
        node.style.padding = "0";
        node.style.margin = "0";
        return node;
    }

    function setProps(elem, node) {
        var props = elem.props;

        var element = elem.element;
        var width = props.width - (element.adjustWidth || 0);
        var height = props.height - (element.adjustHeight || 0);
        node.style.width  = (width |0) + 'px';
        node.style.height = (height|0) + 'px';

        if (props.opacity !== 1) {
            node.style.opacity = props.opacity;
        }

        if (props.color.ctor === 'Just') {
            node.style.backgroundColor = Color.toCss(props.color._0);
        }

        if (props.tag !== '') {
            node.id = props.tag;
        }

        if (props.hover.ctor !== '_Tuple0') {
            addHover(node, props.hover);
        }

        if (props.click.ctor !== '_Tuple0') {
            addClick(node, props.click);
        }

        if (props.href !== '') {
            var anchor = createNode('a');
            anchor.href = props.href;
            anchor.style.display = 'block';
            anchor.style.pointerEvents = 'auto';
            anchor.appendChild(node);
            node = anchor;
        }

        return node;
    }

    function addClick(e, handler) {
        e.style.pointerEvents = 'auto';
        e.elm_click_handler = handler;
        function trigger(ev) {
            e.elm_click_handler(Utils.Tuple0);
            ev.stopPropagation();
        }
        e.elm_click_trigger = trigger;
        e.addEventListener('click', trigger);
    }

    function removeClick(e, handler) {
        if (e.elm_click_trigger) {
            e.removeEventListener('click', e.elm_click_trigger);
            e.elm_click_trigger = null;
            e.elm_click_handler = null;
        }
    }

    function addHover(e, handler) {
        e.style.pointerEvents = 'auto';
        e.elm_hover_handler = handler;
        e.elm_hover_count = 0;

        function over(evt) {
            if (e.elm_hover_count++ > 0) return;
            e.elm_hover_handler(true);
            evt.stopPropagation();
        }
        function out(evt) {
            if (e.contains(evt.toElement || evt.relatedTarget)) return;
            e.elm_hover_count = 0;
            e.elm_hover_handler(false);
            evt.stopPropagation();
        }
        e.elm_hover_over = over;
        e.elm_hover_out = out;
        e.addEventListener('mouseover', over);
        e.addEventListener('mouseout', out);
    }

    function removeHover(e) {
        e.elm_hover_handler = null;
        if (e.elm_hover_over) {
            e.removeEventListener('mouseover', e.elm_hover_over);
            e.elm_hover_over = null;
        }
        if (e.elm_hover_out) {
            e.removeEventListener('mouseout', e.elm_hover_out);
            e.elm_hover_out = null;
        }
    }

    function image(props, img) {
        switch (img._0.ctor) {
        case 'Plain':   return plainImage(img._3);
        case 'Fitted':  return fittedImage(props.width, props.height, img._3);
        case 'Cropped': return croppedImage(img,props.width,props.height,img._3);
        case 'Tiled':   return tiledImage(img._3);
        }
    }

    function plainImage(src) {
        var img = createNode('img');
        img.src = src;
        img.name = src;
        img.style.display = "block";
        return img;
    }

    function tiledImage(src) {
        var div = createNode('div');
        div.style.backgroundImage = 'url(' + src + ')';
        return div;
    }

    function fittedImage(w, h, src) {
        var div = createNode('div');
        div.style.background = 'url(' + src + ') no-repeat center';
        div.style.webkitBackgroundSize = 'cover';
        div.style.MozBackgroundSize = 'cover';
        div.style.OBackgroundSize = 'cover';
        div.style.backgroundSize = 'cover';
        return div;
    }

    function croppedImage(elem, w, h, src) {
        var pos = elem._0._0;
        var e = createNode('div');
        e.style.overflow = "hidden";

        var img = createNode('img');
        img.onload = function() {
            var sw = w / elem._1, sh = h / elem._2;
            img.style.width = ((this.width * sw)|0) + 'px';
            img.style.height = ((this.height * sh)|0) + 'px';
            img.style.marginLeft = ((- pos._0 * sw)|0) + 'px';
            img.style.marginTop = ((- pos._1 * sh)|0) + 'px';
        };
        img.src = src;
        img.name = src;
        e.appendChild(img);
        return e;
    }

    function goOut(node) {
        node.style.position = 'absolute';
        return node;
    }
    function goDown(node) {
        return node;
    }
    function goRight(node) {
        node.style.styleFloat = 'left';
        node.style.cssFloat = 'left';
        return node;
    }

    var directionTable = {
        DUp    : goDown,
        DDown  : goDown,
        DLeft  : goRight,
        DRight : goRight,
        DIn    : goOut,
        DOut   : goOut
    };
    function needsReversal(dir) {
        return dir == 'DUp' || dir == 'DLeft' || dir == 'DIn';
    }

    function flow(dir,elist) {
        var array = List.toArray(elist);
        var container = createNode('div');
        var goDir = directionTable[dir];
        if (goDir == goOut) {
            container.style.pointerEvents = 'none';
        }
        if (needsReversal(dir)) {
            array.reverse();
        }
        var len = array.length;
        for (var i = 0; i < len; ++i) {
            container.appendChild(goDir(render(array[i])));
        }
        return container;
    }

    function toPos(pos) {
        switch(pos.ctor) {
        case "Absolute": return  pos._0 + "px";
        case "Relative": return (pos._0 * 100) + "%";
        }
    }

    // must clear right, left, top, bottom, and transform
    // before calling this function
    function setPos(pos,elem,e) {
        var element = elem.element;
        var props = elem.props;
        var w = props.width + (element.adjustWidth ? element.adjustWidth : 0);
        var h = props.height + (element.adjustHeight ? element.adjustHeight : 0);

        e.style.position = 'absolute';
        e.style.margin = 'auto';
        var transform = '';
        switch(pos.horizontal.ctor) {
        case 'P': e.style.right = toPos(pos.x); e.style.removeProperty('left'); break;
        case 'Z': transform = 'translateX(' + ((-w/2)|0) + 'px) ';
        case 'N': e.style.left = toPos(pos.x); e.style.removeProperty('right'); break;
        }
        switch(pos.vertical.ctor) {
        case 'N': e.style.bottom = toPos(pos.y); e.style.removeProperty('top'); break;
        case 'Z': transform += 'translateY(' + ((-h/2)|0) + 'px)';
        case 'P': e.style.top = toPos(pos.y); e.style.removeProperty('bottom'); break;
        }
        if (transform !== '') {
            addTransform(e.style, transform);
        }
        return e;
    }

    function addTransform(style, transform) {
        style.transform       = transform;
        style.msTransform     = transform;
        style.MozTransform    = transform;
        style.webkitTransform = transform;
        style.OTransform      = transform;
    }

    function container(pos,elem) {
        var e = render(elem);
        setPos(pos, elem, e);
        var div = createNode('div');
        div.style.position = 'relative';
        div.style.overflow = 'hidden';
        div.appendChild(e);
        return div;
    }

    function rawHtml(elem) {
        var html = elem.html;
        var guid = elem.guid;
        var align = elem.align;

        var div = createNode('div');
        div.innerHTML = html;
        div.style.visibility = "hidden";
        if (align) {
            div.style.textAlign = align;
        }
        div.style.visibility = 'visible';
        div.style.pointerEvents = 'auto';
        return div;
    }

    function render(elem) {
        return setProps(elem, makeElement(elem));
    }
    function makeElement(e) {
        var elem = e.element;
        switch(elem.ctor) {
        case 'Image':     return image(e.props, elem);
        case 'Flow':      return flow(elem._0.ctor, elem._1);
        case 'Container': return container(elem._0, elem._1);
        case 'Spacer':    return createNode('div');
        case 'RawHtml':   return rawHtml(elem);
        case 'Custom':    return elem.render(elem.model);
        }
    }

    function updateAndReplace(node, curr, next) {
        var newNode = update(node, curr, next);
        if (newNode !== node) {
            node.parentNode.replaceChild(newNode, node);
        }
        return newNode;
    }

    function update(node, curr, next) {
        var rootNode = node;
        if (node.tagName === 'A') {
            node = node.firstChild;
        }
        if (curr.props.id === next.props.id) {
            updateProps(node, curr, next);
            return rootNode;
        }
        if (curr.element.ctor !== next.element.ctor) {
            return render(next);
        }
        var nextE = next.element;
        var currE = curr.element;
        switch(nextE.ctor) {
        case "Spacer":
            updateProps(node, curr, next);
            return rootNode;

        case "RawHtml":
            if(currE.html.valueOf() !== nextE.html.valueOf()) {
                node.innerHTML = nextE.html;
            }
            updateProps(node, curr, next);
            return rootNode;

        case "Image":
            if (nextE._0.ctor === 'Plain') {
                if (nextE._3 !== currE._3) {
                    node.src = nextE._3;
                }
            } else if (!Utils.eq(nextE,currE) ||
                       next.props.width !== curr.props.width ||
                       next.props.height !== curr.props.height) {
                return render(next);
            }
            updateProps(node, curr, next);
            return rootNode;

        case "Flow":
            var arr = List.toArray(nextE._1);
            for (var i = arr.length; i--; ) {
                arr[i] = arr[i].element.ctor;
            }
            if (nextE._0.ctor !== currE._0.ctor) {
                return render(next);
            }
            var nexts = List.toArray(nextE._1);
            var kids = node.childNodes;
            if (nexts.length !== kids.length) {
                return render(next);
            }
            var currs = List.toArray(currE._1);
            var dir = nextE._0.ctor;
            var goDir = directionTable[dir];
            var toReverse = needsReversal(dir);
            var len = kids.length;
            for (var i = len; i-- ;) {
                var subNode = kids[toReverse ? len - i - 1 : i];
                goDir(updateAndReplace(subNode, currs[i], nexts[i]));
            }
            updateProps(node, curr, next);
            return rootNode;

        case "Container":
            var subNode = node.firstChild;
            var newSubNode = updateAndReplace(subNode, currE._1, nextE._1);
            setPos(nextE._0, nextE._1, newSubNode);
            updateProps(node, curr, next);
            return rootNode;

        case "Custom":
            if (currE.type === nextE.type) {
                var updatedNode = nextE.update(node, currE.model, nextE.model);
                updateProps(updatedNode, curr, next);
                return updatedNode;
            } else {
                return render(next);
            }
        }
    }

    function updateProps(node, curr, next) {
        var nextProps = next.props;
        var currProps = curr.props;

        var element = next.element;
        var width = nextProps.width - (element.adjustWidth || 0);
        var height = nextProps.height - (element.adjustHeight || 0);
        if (width !== currProps.width) {
            node.style.width = (width|0) + 'px';
        }
        if (height !== currProps.height) {
            node.style.height = (height|0) + 'px';
        }

        if (nextProps.opacity !== currProps.opacity) {
            node.style.opacity = nextProps.opacity;
        }

        var nextColor = nextProps.color.ctor === 'Just'
            ? Color.toCss(nextProps.color._0)
            : '';
        if (node.style.backgroundColor !== nextColor) {
            node.style.backgroundColor = nextColor;
        }

        if (nextProps.tag !== currProps.tag) {
            node.id = nextProps.tag;
        }

        if (nextProps.href !== currProps.href) {
            if (currProps.href === '') {
                // add a surrounding href
                var anchor = createNode('a');
                anchor.href = nextProps.href;
                anchor.style.display = 'block';
                anchor.style.pointerEvents = 'auto';

                node.parentNode.replaceChild(anchor, node);
                anchor.appendChild(node);
            } else if (nextProps.href === '') {
                // remove the surrounding href
                var anchor = node.parentNode;
                anchor.parentNode.replaceChild(node, anchor);
            } else {
                // just update the link
                node.parentNode.href = nextProps.href;
            }
        }

        // update click and hover handlers
        var removed = false;

        // update hover handlers
        if (currProps.hover.ctor === '_Tuple0') {
            if (nextProps.hover.ctor !== '_Tuple0') {
                addHover(node, nextProps.hover);
            }
        }
        else {
            if (nextProps.hover.ctor === '_Tuple0') {
                removed = true;
                removeHover(node);
            }
            else {
                node.elm_hover_handler = nextProps.hover;
            }
        }

        // update click handlers
        if (currProps.click.ctor === '_Tuple0') {
            if (nextProps.click.ctor !== '_Tuple0') {
                addClick(node, nextProps.click);
            }
        }
        else {
            if (nextProps.click.ctor === '_Tuple0') {
                removed = true;
                removeClick(node);
            } else {
                node.elm_click_handler = nextProps.click;
            }
        }

        // stop capturing clicks if 
        if (removed
            && nextProps.hover.ctor === '_Tuple0'
            && nextProps.click.ctor === '_Tuple0')
        {
            node.style.pointerEvents = 'none';
        }
    }


    function htmlHeight(width, rawHtml) {
        // create dummy node
        var temp = document.createElement('div');
        temp.innerHTML = rawHtml.html;
        if (width > 0) {
            temp.style.width = width + "px";
        }
        temp.style.visibility = "hidden";
        temp.style.styleFloat = "left";
        temp.style.cssFloat   = "left";

        document.body.appendChild(temp);

        // get dimensions
        var style = window.getComputedStyle(temp, null);
        var w = Math.ceil(style.getPropertyValue("width").slice(0,-2) - 0);
        var h = Math.ceil(style.getPropertyValue("height").slice(0,-2) - 0);
        document.body.removeChild(temp);
        return Utils.Tuple2(w,h);
    }


    return localRuntime.Native.Graphics.Element.values = {
        render: render,
        update: update,
        updateAndReplace: updateAndReplace,

        createNode: createNode,
        addTransform: addTransform,
        htmlHeight: F2(htmlHeight),
        guid: Utils.guid
    };

};

Elm.Native.Json = {};
Elm.Native.Json.make = function(localRuntime) {
    localRuntime.Native = localRuntime.Native || {};
    localRuntime.Native.Json = localRuntime.Native.Json || {};
    if (localRuntime.Native.Json.values) {
        return localRuntime.Native.Json.values;
    }

    var ElmArray = Elm.Native.Array.make(localRuntime);
    var List = Elm.Native.List.make(localRuntime);
    var Maybe = Elm.Maybe.make(localRuntime);
    var Result = Elm.Result.make(localRuntime);
    var Utils = Elm.Native.Utils.make(localRuntime);


    function crash(expected, actual) {
        throw new Error(
            'expecting ' + expected + ' but got ' + JSON.stringify(actual)
        );
    }


    // PRIMITIVE VALUES

    function decodeNull(successValue) {
        return function(value) {
            if (value === null) {
                return successValue;
            }
            crash('null', value);
        };
    }


    function decodeString(value) {
        if (typeof value === 'string' || value instanceof String) {
            return value;
        }
        crash('a String', value);
    }


    function decodeFloat(value) {
        if (typeof value === 'number') {
            return value;
        }
        crash('a Float', value);
    }


    function decodeInt(value) {
        if (typeof value === 'number' && (value|0) === value) {
            return value;
        }
        crash('an Int', value);
    }


    function decodeBool(value) {
        if (typeof value === 'boolean') {
            return value;
        }
        crash('a Bool', value);
    }


    // ARRAY

    function decodeArray(decoder) {
        return function(value) {
            if (value instanceof Array) {
                var len = value.length;
                var array = new Array(len);
                for (var i = len; i-- ; ) {
                    array[i] = decoder(value[i]);
                }
                return ElmArray.fromJSArray(array);
            }
            crash('an Array', value);
        };
    }


    // LIST

    function decodeList(decoder) {
        return function(value) {
            if (value instanceof Array) {
                var len = value.length;
                var list = List.Nil;
                for (var i = len; i-- ; ) {
                    list = List.Cons( decoder(value[i]), list );
                }
                return list;
            }
            crash('a List', value);
        };
    }


    // MAYBE

    function decodeMaybe(decoder) {
        return function(value) {
            try {
                return Maybe.Just(decoder(value));
            } catch(e) {
                return Maybe.Nothing;
            }
        };
    }


    // FIELDS

    function decodeField(field, decoder) {
        return function(value) {
            var subValue = value[field];
            if (subValue !== undefined) {
                return decoder(subValue);
            }
            crash("an object with field '" + field + "'", value);
        };
    }


    // OBJECTS

    function decodeKeyValuePairs(decoder) {
        return function(value) {
            var isObject =
                typeof value === 'object'
                    && value !== null
                    && !(value instanceof Array);

            if (isObject) {
                var keyValuePairs = List.Nil;
                for (var key in value) {
                    var elmValue = decoder(value[key]);
                    var pair = Utils.Tuple2(key, elmValue);
                    keyValuePairs = List.Cons(pair, keyValuePairs);
                }
                return keyValuePairs;
            }

            crash("an object", value);
        };
    }

    function decodeObject1(f, d1) {
        return function(value) {
            return f(d1(value));
        };
    }

    function decodeObject2(f, d1, d2) {
        return function(value) {
            return A2( f, d1(value), d2(value) );
        };
    }

    function decodeObject3(f, d1, d2, d3) {
        return function(value) {
            return A3( f, d1(value), d2(value), d3(value) );
        };
    }

    function decodeObject4(f, d1, d2, d3, d4) {
        return function(value) {
            return A4( f, d1(value), d2(value), d3(value), d4(value) );
        };
    }

    function decodeObject5(f, d1, d2, d3, d4, d5) {
        return function(value) {
            return A5( f, d1(value), d2(value), d3(value), d4(value), d5(value) );
        };
    }

    function decodeObject6(f, d1, d2, d3, d4, d5, d6) {
        return function(value) {
            return A6( f,
                d1(value),
                d2(value),
                d3(value),
                d4(value),
                d5(value),
                d6(value)
            );
        };
    }

    function decodeObject7(f, d1, d2, d3, d4, d5, d6, d7) {
        return function(value) {
            return A7( f,
                d1(value),
                d2(value),
                d3(value),
                d4(value),
                d5(value),
                d6(value),
                d7(value)
            );
        };
    }

    function decodeObject8(f, d1, d2, d3, d4, d5, d6, d7, d8) {
        return function(value) {
            return A8( f,
                d1(value),
                d2(value),
                d3(value),
                d4(value),
                d5(value),
                d6(value),
                d7(value),
                d8(value)
            );
        };
    }


    // TUPLES

    function decodeTuple1(f, d1) {
        return function(value) {
            if ( !(value instanceof Array) || value.length !== 1 ) {
                crash('a Tuple of length 1', value);
            }
            return f( d1(value[0]) );
        };
    }

    function decodeTuple2(f, d1, d2) {
        return function(value) {
            if ( !(value instanceof Array) || value.length !== 2 ) {
                crash('a Tuple of length 2', value);
            }
            return A2( f, d1(value[0]), d2(value[1]) );
        };
    }

    function decodeTuple3(f, d1, d2, d3) {
        return function(value) {
            if ( !(value instanceof Array) || value.length !== 3 ) {
                crash('a Tuple of length 3', value);
            }
            return A3( f, d1(value[0]), d2(value[1]), d3(value[2]) );
        };
    }


    function decodeTuple4(f, d1, d2, d3, d4) {
        return function(value) {
            if ( !(value instanceof Array) || value.length !== 4 ) {
                crash('a Tuple of length 4', value);
            }
            return A4( f, d1(value[0]), d2(value[1]), d3(value[2]), d4(value[3]) );
        };
    }


    function decodeTuple5(f, d1, d2, d3, d4, d5) {
        return function(value) {
            if ( !(value instanceof Array) || value.length !== 5 ) {
                crash('a Tuple of length 5', value);
            }
            return A5( f,
                d1(value[0]),
                d2(value[1]),
                d3(value[2]),
                d4(value[3]),
                d5(value[4])
            );
        };
    }


    function decodeTuple6(f, d1, d2, d3, d4, d5, d6) {
        return function(value) {
            if ( !(value instanceof Array) || value.length !== 6 ) {
                crash('a Tuple of length 6', value);
            }
            return A6( f,
                d1(value[0]),
                d2(value[1]),
                d3(value[2]),
                d4(value[3]),
                d5(value[4]),
                d6(value[5])
            );
        };
    }

    function decodeTuple7(f, d1, d2, d3, d4, d5, d6, d7) {
        return function(value) {
            if ( !(value instanceof Array) || value.length !== 7 ) {
                crash('a Tuple of length 7', value);
            }
            return A7( f,
                d1(value[0]),
                d2(value[1]),
                d3(value[2]),
                d4(value[3]),
                d5(value[4]),
                d6(value[5]),
                d7(value[6])
            );
        };
    }


    function decodeTuple8(f, d1, d2, d3, d4, d5, d6, d7, d8) {
        return function(value) {
            if ( !(value instanceof Array) || value.length !== 8 ) {
                crash('a Tuple of length 8', value);
            }
            return A8( f,
                d1(value[0]),
                d2(value[1]),
                d3(value[2]),
                d4(value[3]),
                d5(value[4]),
                d6(value[5]),
                d7(value[6]),
                d8(value[7])
            );
        };
    }


    // CUSTOM DECODERS

    function decodeValue(value) {
        return value;
    }

    function runDecoderValue(decoder, value) {
        try {
            return Result.Ok(decoder(value));
        } catch(e) {
            return Result.Err(e.message);
        }
    }

    function customDecoder(decoder, callback) {
        return function(value) {
            var result = callback(decoder(value));
            if (result.ctor === 'Err') {
                throw new Error('custom decoder failed: ' + result._0);
            }
            return result._0;
        }
    }

    function andThen(decode, callback) {
        return function(value) {
            var result = decode(value);
            return callback(result)(value);
        }
    }

    function fail(msg) {
        return function(value) {
            throw new Error(msg);
        }
    }

    function succeed(successValue) {
        return function(value) {
            return successValue;
        }
    }


    // ONE OF MANY

    function oneOf(decoders) {
        return function(value) {
            var errors = [];
            var temp = decoders;
            while (temp.ctor !== '[]') {
                try {
                    return temp._0(value);
                } catch(e) {
                    errors.push(e.message);
                }
                temp = temp._1;
            }
            throw new Error('expecting one of the following:\n    ' + errors.join('\n    '));
        }
    }

    function get(decoder, value) {
        try {
            return Result.Ok(decoder(value));
        } catch(e) {
            return Result.Err(e.message);
        }
    }


    // ENCODE / DECODE

    function runDecoderString(decoder, string) {
        try {
            return Result.Ok(decoder(JSON.parse(string)));
        } catch(e) {
            return Result.Err(e.message);
        }
    }

    function encode(indentLevel, value) {
        return JSON.stringify(value, null, indentLevel);
    }

    function identity(value) {
        return value;
    }

    function encodeObject(keyValuePairs) {
        var obj = {};
        while (keyValuePairs.ctor !== '[]') {
            var pair = keyValuePairs._0;
            obj[pair._0] = pair._1;
            keyValuePairs = keyValuePairs._1;
        }
        return obj;
    }

    return localRuntime.Native.Json.values = {
        encode: F2(encode),
        runDecoderString: F2(runDecoderString),
        runDecoderValue: F2(runDecoderValue),

        get: F2(get),
        oneOf: oneOf,

        decodeNull: decodeNull,
        decodeInt: decodeInt,
        decodeFloat: decodeFloat,
        decodeString: decodeString,
        decodeBool: decodeBool,

        decodeMaybe: decodeMaybe,

        decodeList: decodeList,
        decodeArray: decodeArray,

        decodeField: F2(decodeField),

        decodeObject1: F2(decodeObject1),
        decodeObject2: F3(decodeObject2),
        decodeObject3: F4(decodeObject3),
        decodeObject4: F5(decodeObject4),
        decodeObject5: F6(decodeObject5),
        decodeObject6: F7(decodeObject6),
        decodeObject7: F8(decodeObject7),
        decodeObject8: F9(decodeObject8),
        decodeKeyValuePairs: decodeKeyValuePairs,

        decodeTuple1: F2(decodeTuple1),
        decodeTuple2: F3(decodeTuple2),
        decodeTuple3: F4(decodeTuple3),
        decodeTuple4: F5(decodeTuple4),
        decodeTuple5: F6(decodeTuple5),
        decodeTuple6: F7(decodeTuple6),
        decodeTuple7: F8(decodeTuple7),
        decodeTuple8: F9(decodeTuple8),

        andThen: F2(andThen),
        decodeValue: decodeValue,
        customDecoder: F2(customDecoder),
        fail: fail,
        succeed: succeed,

        identity: identity,
        encodeNull: null,
        encodeArray: ElmArray.toJSArray,
        encodeList: List.toArray,
        encodeObject: encodeObject

    };

};

Elm.Native = Elm.Native || {};
Elm.Native.Katex = Elm.Native.Katex || {};

Elm.Native.Katex.make = function(runtime) {
  'use strict';

  if (Elm.Native.Katex.values) {
    return Elm.Native.Katex.values;
  }

  var BLOCK_RE = /\$\$\$\n([^]+?)\n\$\$\$/g;
  var INLINE_RE = /\$([^$]+)\$/g;

  function convert(string) {
    string = string.replace(BLOCK_RE, function(_, formula) {
      return '<div class=block-math><div><div>' + formula.split("\n").map(function(line) {
        return katex.renderToString("\\displaystyle{" + line + "}");
      }).join('</div><div>') + '</div></div></div>';
    }).replace(INLINE_RE, function(_, formula) {
      return katex.renderToString(formula);
    });
    return string;
  }

  return Elm.Native.Katex.values = {convert: convert};
};

// KaTeX 0.1.1
// @license MIT
(function(e){if("function"==typeof bootstrap)bootstrap("katex",e);else if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeKatex=e}else"undefined"!=typeof window?window.katex=e():global.katex=e()})(function(){var e,t,i,h,a;return function l(e,t,i){function h(s,r){if(!t[s]){if(!e[s]){var p=typeof require=="function"&&require;if(!r&&p)return p(s,!0);if(a)return a(s,!0);throw new Error("Cannot find module '"+s+"'")}var c=t[s]={exports:{}};e[s][0].call(c.exports,function(t){var i=e[s][1][t];return h(i?i:t)},c,c.exports,l,e,t,i)}return t[s].exports}var a=typeof require=="function"&&require;for(var s=0;s<i.length;s++)h(i[s]);return h}({1:[function(e,t,i){var h=e("./src/ParseError");var a=e("./src/buildTree");var l=e("./src/parseTree");var s=e("./src/utils");var r=function(e,t){s.clearNode(t);var i=l(e);var h=a(i).toNode();t.appendChild(h)};if(typeof document!=="undefined"){if(document.compatMode!=="CSS1Compat"){typeof console!=="undefined"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your "+"website has a suitable doctype.");r=function(){throw new h("KaTeX doesn't work in quirks mode.")}}}var p=function(e){var t=l(e);return a(t).toMarkup()};t.exports={render:r,renderToString:p,ParseError:h}},{"./src/ParseError":4,"./src/buildTree":8,"./src/parseTree":13,"./src/utils":15}],2:[function(e,t,i){var h=e("./ParseError");function a(e){this._input=e}function l(e,t,i){this.text=e;this.data=t;this.position=i}var s=[/^[/|@.""`0-9a-zA-Z]/,/^[*+-]/,/^[=<>:]/,/^[,;]/,/^['\^_{}]/,/^[(\[]/,/^[)\]?!]/,/^~/];var r=[/^[a-zA-Z0-9`!@*()-=+\[\]'";:?\/.,]/,/^[{}]/,/^~/];var p=/^\s*/;var c=/^( +|\\  +)/;var g=/^\\(?:[a-zA-Z]+|.)/;a.prototype._innerLex=function(e,t,i){var a=this._input.slice(e);var s;if(i){s=a.match(p)[0];e+=s.length;a=a.slice(s.length)}else{s=a.match(c);if(s!==null){return new l(" ",null,e+s[0].length)}}if(a.length===0){return new l("EOF",null,e)}var r;if(r=a.match(g)){return new l(r[0],null,e+r[0].length)}else{for(var d=0;d<t.length;d++){var n=t[d];if(r=a.match(n)){return new l(r[0],null,e+r[0].length)}}}throw new h("Unexpected character: '"+a[0]+"'",this,e)};var d=/^(#[a-z0-9]+|[a-z]+)/i;a.prototype._innerLexColor=function(e){var t=this._input.slice(e);var i=t.match(p)[0];e+=i.length;t=t.slice(i.length);var a;if(a=t.match(d)){return new l(a[0],null,e+a[0].length)}else{throw new h("Invalid color",this,e)}};var n=/^(-?)\s*(\d+(?:\.\d*)?|\.\d+)\s*([a-z]{2})/;a.prototype._innerLexSize=function(e){var t=this._input.slice(e);var i=t.match(p)[0];e+=i.length;t=t.slice(i.length);var a;if(a=t.match(n)){var s=a[3];if(s!=="em"&&s!=="ex"){throw new h("Invalid unit: '"+s+"'",this,e)}return new l(a[0],{number:+(a[1]+a[2]),unit:s},e+a[0].length)}throw new h("Invalid size",this,e)};a.prototype._innerLexWhitespace=function(e){var t=this._input.slice(e);var i=t.match(p)[0];e+=i.length;return new l(i,null,e)};a.prototype.lex=function(e,t){if(t==="math"){return this._innerLex(e,s,true)}else if(t==="text"){return this._innerLex(e,r,false)}else if(t==="color"){return this._innerLexColor(e)}else if(t==="size"){return this._innerLexSize(e)}else if(t==="whitespace"){return this._innerLexWhitespace(e)}};t.exports=a},{"./ParseError":4}],3:[function(e,t,i){function h(e,t,i,h,a){this.style=e;this.color=i;this.size=t;if(h===undefined){h=e}this.parentStyle=h;if(a===undefined){a=t}this.parentSize=a}h.prototype.withStyle=function(e){return new h(e,this.size,this.color,this.style,this.size)};h.prototype.withSize=function(e){return new h(this.style,e,this.color,this.style,this.size)};h.prototype.withColor=function(e){return new h(this.style,this.size,e,this.style,this.size)};h.prototype.reset=function(){return new h(this.style,this.size,this.color,this.style,this.size)};var a={"katex-blue":"#6495ed","katex-orange":"#ffa500","katex-pink":"#ff00af","katex-red":"#df0030","katex-green":"#28ae7b","katex-gray":"gray","katex-purple":"#9d38bd"};h.prototype.getColor=function(){return a[this.color]||this.color};t.exports=h},{}],4:[function(e,t,i){function h(e,t,i){var a="KaTeX parse error: "+e;if(t!==undefined&&i!==undefined){a+=" at position "+i+": ";var l=t._input;l=l.slice(0,i)+"\u0332"+l.slice(i);var s=Math.max(0,i-15);var r=i+15;a+=l.slice(s,r)}var p=new Error(a);p.name="ParseError";p.__proto__=h.prototype;p.position=i;return p}h.prototype.__proto__=Error.prototype;t.exports=h},{}],5:[function(e,t,i){var h=e("./functions");var a=e("./Lexer");var l=e("./symbols");var s=e("./utils");var r=e("./ParseError");function p(e){this.lexer=new a(e)}function c(e,t,i){this.type=e;this.value=t;this.mode=i}function g(e,t){this.result=e;this.position=t}function d(e,t,i,h,a,l){this.result=e;this.isFunction=t;this.allowedInText=i;this.numArgs=h;this.numOptionalArgs=a;this.argTypes=l}p.prototype.expect=function(e,t){if(e.text!==t){throw new r("Expected '"+t+"', got '"+e.text+"'",this.lexer,e.position)}};p.prototype.parse=function(e){var t=this.parseInput(0,"math");return t.result};p.prototype.parseInput=function(e,t){var i=this.parseExpression(e,t,false,null);var h=this.lexer.lex(i.position,t);this.expect(h,"EOF");return i};p.prototype.parseExpression=function(e,t,i,h){var a=[];while(true){var l=this.lexer.lex(e,t);if(h!=null&&l.text===h){break}var s=this.parseAtom(e,t);if(!s){break}if(i&&s.result.type==="infix"){break}a.push(s.result);e=s.position}return new g(this.handleInfixNodes(a,t),e)};p.prototype.handleInfixNodes=function(e,t){var i=-1;var a;var l;for(var s=0;s<e.length;s++){var p=e[s];if(p.type==="infix"){if(i!==-1){throw new r("only one infix operator per group",this.lexer,-1)}i=s;l=p.value.replaceWith;a=h.funcs[l]}}if(i!==-1){var g,d;var n=e.slice(0,i);var o=e.slice(i+1);if(n.length===1&&n[0].type==="ordgroup"){g=n[0]}else{g=new c("ordgroup",n,t)}if(o.length===1&&o[0].type==="ordgroup"){d=o[0]}else{d=new c("ordgroup",o,t)}var w=a.handler(l,g,d);return[new c(w.type,w,t)]}else{return e}};var n=1;p.prototype.handleSupSubscript=function(e,t,i,a){var l=this.parseGroup(e,t);if(!l){throw new r("Expected group after '"+i+"'",this.lexer,e)}else if(l.numArgs>0){var s=h.getGreediness(l.result.result);if(s>n){return this.parseFunction(e,t)}else{throw new r("Got function '"+l.result.result+"' with no arguments "+"as "+a,this.lexer,e)}}else{return l.result}};p.prototype.parseAtom=function(e,t){var i=this.parseImplicitGroup(e,t);if(t==="text"){return i}var h;if(!i){h=e;i=undefined}else{h=i.position}var a;var l;var s;while(true){var p=this.lexer.lex(h,t);if(p.text==="^"){if(a){throw new r("Double superscript",this.lexer,h)}s=this.handleSupSubscript(p.position,t,p.text,"superscript");h=s.position;a=s.result}else if(p.text==="_"){if(l){throw new r("Double subscript",this.lexer,h)}s=this.handleSupSubscript(p.position,t,p.text,"subscript");h=s.position;l=s.result}else if(p.text==="'"){var d=new c("textord","\\prime",t);var n=[d];h=p.position;while((p=this.lexer.lex(h,t)).text==="'"){n.push(d);h=p.position}a=new c("ordgroup",n,t)}else{break}}if(a||l){return new g(new c("supsub",{base:i&&i.result,sup:a,sub:l},t),h)}else{return i}};var o=["\\tiny","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"];var w=["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"];p.prototype.parseImplicitGroup=function(e,t){var i=this.parseSymbol(e,t);if(!i||!i.result){return this.parseFunction(e,t)}var h=i.result.result;var a;if(h==="\\left"){var l=this.parseFunction(e,t);a=this.parseExpression(l.position,t,false,"}");var p=this.parseSymbol(a.position,t);if(p&&p.result.result==="\\right"){var d=this.parseFunction(a.position,t);return new g(new c("leftright",{body:a.result,left:l.result.value.value,right:d.result.value.value},t),d.position)}else{throw new r("Missing \\right",this.lexer,a.position)}}else if(h==="\\right"){return null}else if(s.contains(o,h)){a=this.parseExpression(i.result.position,t,false,"}");return new g(new c("sizing",{size:"size"+(s.indexOf(o,h)+1),value:a.result},t),a.position)}else if(s.contains(w,h)){a=this.parseExpression(i.result.position,t,true,"}");return new g(new c("styling",{style:h.slice(1,h.length-5),value:a.result},t),a.position)}else{return this.parseFunction(e,t)}};p.prototype.parseFunction=function(e,t){var i=this.parseGroup(e,t);if(i){if(i.isFunction){var a=i.result.result;if(t==="text"&&!i.allowedInText){throw new r("Can't use function '"+a+"' in text mode",this.lexer,i.position)}var l=i.result.position;var s;var p=i.numArgs+i.numOptionalArgs;if(p>0){var d=h.getGreediness(a);var n=[a];var o=[l];for(var w=0;w<p;w++){var k=i.argTypes&&i.argTypes[w];var u;if(w<i.numOptionalArgs){if(k){u=this.parseSpecialGroup(l,k,t,true)}else{u=this.parseOptionalGroup(l,t)}if(!u){n.push(null);o.push(l);continue}}else{if(k){u=this.parseSpecialGroup(l,k,t)}else{u=this.parseGroup(l,t)}if(!u){throw new r("Expected group after '"+i.result.result+"'",this.lexer,l)}}var m;if(u.numArgs>0){var f=h.getGreediness(u.result.result);if(f>d){m=this.parseFunction(l,t)}else{throw new r("Got function '"+u.result.result+"' as "+"argument to function '"+i.result.result+"'",this.lexer,u.result.position-1)}}else{m=u.result}n.push(m.result);o.push(m.position);l=m.position}n.push(o);s=h.funcs[a].handler.apply(this,n)}else{s=h.funcs[a].handler.apply(this,[a])}return new g(new c(s.type,s,t),l)}else{return i.result}}else{return null}};p.prototype.parseSpecialGroup=function(e,t,i,h){if(t==="color"||t==="size"){var a=this.lexer.lex(e,i);if(h&&a.text!=="["){return null}this.expect(a,h?"[":"{");var l=this.lexer.lex(a.position,t);var s;if(t==="color"){s=l.text}else{s=l.data}var r=this.lexer.lex(l.position,i);this.expect(r,h?"]":"}");return new d(new g(new c(t,s,i),r.position),false)}else if(t==="text"){var p=this.lexer.lex(e,"whitespace");e=p.position}if(h){return this.parseOptionalGroup(e,t)}else{return this.parseGroup(e,t)}};p.prototype.parseGroup=function(e,t){var i=this.lexer.lex(e,t);if(i.text==="{"){var h=this.parseExpression(i.position,t,false,"}");var a=this.lexer.lex(h.position,t);this.expect(a,"}");return new d(new g(new c("ordgroup",h.result,t),a.position),false)}else{return this.parseSymbol(e,t)}};p.prototype.parseOptionalGroup=function(e,t){var i=this.lexer.lex(e,t);if(i.text==="["){var h=this.parseExpression(i.position,t,false,"]");var a=this.lexer.lex(h.position,t);this.expect(a,"]");return new d(new g(new c("ordgroup",h.result,t),a.position),false)}else{return null}};p.prototype.parseSymbol=function(e,t){var i=this.lexer.lex(e,t);if(h.funcs[i.text]){var a=h.funcs[i.text];var s=a.argTypes;if(s){s=s.slice();for(var r=0;r<s.length;r++){if(s[r]==="original"){s[r]=t}}}return new d(new g(i.text,i.position),true,a.allowedInText,a.numArgs,a.numOptionalArgs,s)}else if(l[t][i.text]){return new d(new g(new c(l[t][i.text].group,i.text,t),i.position),false)}else{return null}};t.exports=p},{"./Lexer":2,"./ParseError":4,"./functions":12,"./symbols":14,"./utils":15}],6:[function(e,t,i){function h(e,t,i,h){this.id=e;this.size=t;this.cramped=h;this.sizeMultiplier=i}h.prototype.sup=function(){return w[k[this.id]]};h.prototype.sub=function(){return w[u[this.id]]};h.prototype.fracNum=function(){return w[m[this.id]]};h.prototype.fracDen=function(){return w[f[this.id]]};h.prototype.cramp=function(){return w[v[this.id]]};h.prototype.cls=function(){return n[this.size]+(this.cramped?" cramped":" uncramped")};h.prototype.reset=function(){return o[this.size]};var a=0;var l=1;var s=2;var r=3;var p=4;var c=5;var g=6;var d=7;var n=["displaystyle textstyle","textstyle","scriptstyle","scriptscriptstyle"];var o=["reset-textstyle","reset-textstyle","reset-scriptstyle","reset-scriptscriptstyle"];var w=[new h(a,0,1,false),new h(l,0,1,true),new h(s,1,1,false),new h(r,1,1,true),new h(p,2,.7,false),new h(c,2,.7,true),new h(g,3,.5,false),new h(d,3,.5,true)];var k=[p,c,p,c,g,d,g,d];var u=[c,c,c,c,d,d,d,d];var m=[s,r,p,c,g,d,g,d];var f=[r,r,c,c,d,d,d,d];var v=[l,l,r,r,c,c,d,d];t.exports={DISPLAY:w[a],TEXT:w[s],SCRIPT:w[p],SCRIPTSCRIPT:w[g]}},{}],7:[function(e,t,i){var h=e("./domTree");var a=e("./fontMetrics");var l=e("./symbols");var s=function(e,t,i,s,r){if(l[i][e]&&l[i][e].replace){e=l[i][e].replace}var p=a.getCharacterMetrics(e,t);var c;if(p){c=new h.symbolNode(e,p.height,p.depth,p.italic,p.skew,r)}else{typeof console!=="undefined"&&console.warn("No character metrics for '"+e+"' in style '"+t+"'");c=new h.symbolNode(e,0,0,0,0,r)}if(s){c.style.color=s}return c};var r=function(e,t,i,h){return s(e,"Math-Italic",t,i,h.concat(["mathit"]))};var p=function(e,t,i,h){if(l[t][e].font==="main"){return s(e,"Main-Regular",t,i,h)}else{return s(e,"AMS-Regular",t,i,h.concat(["amsrm"]))}};var c=function(e){var t=0;var i=0;var h=0;if(e.children){for(var a=0;a<e.children.length;a++){if(e.children[a].height>t){t=e.children[a].height}if(e.children[a].depth>i){i=e.children[a].depth}if(e.children[a].maxFontSize>h){h=e.children[a].maxFontSize}}}e.height=t;e.depth=i;e.maxFontSize=h};var g=function(e,t,i){var a=new h.span(e,t);c(a);if(i){a.style.color=i}return a};var d=function(e){var t=new h.documentFragment(e);c(t);return t};var n=function(e,t){var i=g([],[new h.symbolNode("\u200b")]);i.style.fontSize=t/e.style.sizeMultiplier+"em";var a=g(["fontsize-ensurer","reset-"+e.size,"size5"],[i]);return a};var o=function(e,t,i,a){var l;var s;var r;if(t==="individualShift"){var p=e;e=[p[0]];l=-p[0].shift-p[0].elem.depth;s=l;for(r=1;r<p.length;r++){var c=-p[r].shift-s-p[r].elem.depth;var d=c-(p[r-1].elem.height+p[r-1].elem.depth);s=s+c;e.push({type:"kern",size:d});e.push(p[r])}}else if(t==="top"){var o=i;for(r=0;r<e.length;r++){if(e[r].type==="kern"){o-=e[r].size}else{o-=e[r].elem.height+e[r].elem.depth}}l=o}else if(t==="bottom"){l=-i}else if(t==="shift"){l=-e[0].elem.depth-i}else if(t==="firstBaseline"){l=-e[0].elem.depth}else{l=0}var w=0;for(r=0;r<e.length;r++){if(e[r].type==="elem"){w=Math.max(w,e[r].elem.maxFontSize)}}var k=n(a,w);var u=[];s=l;for(r=0;r<e.length;r++){if(e[r].type==="kern"){s+=e[r].size}else{var m=e[r].elem;var f=-m.depth-s;s+=m.height+m.depth;var v=g([],[k,m]);v.height-=f;v.depth+=f;v.style.top=f+"em";u.push(v)}}var y=g(["baseline-fix"],[k,new h.symbolNode("\u200b")]);u.push(y);var x=g(["vlist"],u);x.height=Math.max(s,x.height);x.depth=Math.max(-l,x.depth);return x};t.exports={makeSymbol:s,mathit:r,mathrm:p,makeSpan:g,makeFragment:d,makeVList:o}},{"./domTree":10,"./fontMetrics":11,"./symbols":14}],8:[function(e,t,i){var h=e("./Options");var a=e("./ParseError");var l=e("./Style");var s=e("./buildCommon");var r=e("./delimiter");var p=e("./domTree");var c=e("./fontMetrics");var g=e("./utils");var d=s.makeSpan;var n=function(e,t,i){var h=[];for(var a=0;a<e.length;a++){var l=e[a];h.push(y(l,t,i));i=l}return h};var o={mathord:"mord",textord:"mord",bin:"mbin",rel:"mrel",text:"mord",open:"mopen",close:"mclose",inner:"minner",frac:"minner",spacing:"mord",punct:"mpunct",ordgroup:"mord",op:"mop",katex:"mord",overline:"mord",rule:"mord",leftright:"minner",sqrt:"mord",accent:"mord"};var w=function(e){if(e==null){return o.mathord}else if(e.type==="supsub"){return w(e.value.base)}else if(e.type==="llap"||e.type==="rlap"){return w(e.value)}else if(e.type==="color"){return w(e.value.value)}else if(e.type==="sizing"){return w(e.value.value)}else if(e.type==="styling"){return w(e.value.value)}else if(e.type==="delimsizing"){return o[e.value.delimType]}else{return o[e.type]}};var k=function(e,t){if(!e){return false}else if(e.type==="op"){return e.value.limits&&t.style.size===l.DISPLAY.size}else if(e.type==="accent"){return m(e.value.base)}else{return null}};var u=function(e){if(!e){return false}else if(e.type==="ordgroup"){if(e.value.length===1){return u(e.value[0])}else{return e}}else if(e.type==="color"){if(e.value.value.length===1){return u(e.value.value[0])}else{return e}}else{return e}};var m=function(e){var t=u(e);return t.type==="mathord"||t.type==="textord"||t.type==="bin"||t.type==="rel"||t.type==="inner"||t.type==="open"||t.type==="close"||t.type==="punct"};var f={mathord:function(e,t,i){return s.mathit(e.value,e.mode,t.getColor(),["mord"])},textord:function(e,t,i){return s.mathrm(e.value,e.mode,t.getColor(),["mord"])},bin:function(e,t,i){var h="mbin";var a=i;while(a&&a.type=="color"){var l=a.value.value;a=l[l.length-1]}if(!i||g.contains(["mbin","mopen","mrel","mop","mpunct"],w(a))){e.type="textord";h="mord"}return s.mathrm(e.value,e.mode,t.getColor(),[h])},rel:function(e,t,i){return s.mathrm(e.value,e.mode,t.getColor(),["mrel"])},open:function(e,t,i){return s.mathrm(e.value,e.mode,t.getColor(),["mopen"])},close:function(e,t,i){return s.mathrm(e.value,e.mode,t.getColor(),["mclose"])},inner:function(e,t,i){return s.mathrm(e.value,e.mode,t.getColor(),["minner"])},punct:function(e,t,i){return s.mathrm(e.value,e.mode,t.getColor(),["mpunct"])},ordgroup:function(e,t,i){return d(["mord",t.style.cls()],n(e.value,t.reset()))},text:function(e,t,i){return d(["text","mord",t.style.cls()],n(e.value.body,t.reset()))},color:function(e,t,i){var h=n(e.value.value,t.withColor(e.value.color),i);return new s.makeFragment(h)},supsub:function(e,t,i){if(k(e.value.base,t)){return f[e.value.base.type](e,t,i)}var h=y(e.value.base,t.reset());var a,r,g,n;if(e.value.sup){g=y(e.value.sup,t.withStyle(t.style.sup()));a=d([t.style.reset(),t.style.sup().cls()],[g])}if(e.value.sub){n=y(e.value.sub,t.withStyle(t.style.sub()));r=d([t.style.reset(),t.style.sub().cls()],[n])}var o,u;if(m(e.value.base)){o=0;u=0}else{o=h.height-c.metrics.supDrop;u=h.depth+c.metrics.subDrop}var v;if(t.style===l.DISPLAY){v=c.metrics.sup1}else if(t.style.cramped){v=c.metrics.sup3}else{v=c.metrics.sup2}var x=l.TEXT.sizeMultiplier*t.style.sizeMultiplier;var b=.5/c.metrics.ptPerEm/x+"em";var z;if(!e.value.sup){u=Math.max(u,c.metrics.sub1,n.height-.8*c.metrics.xHeight);z=s.makeVList([{type:"elem",elem:r}],"shift",u,t);z.children[0].style.marginRight=b;if(h instanceof p.symbolNode){z.children[0].style.marginLeft=-h.italic+"em"}}else if(!e.value.sub){o=Math.max(o,v,g.depth+.25*c.metrics.xHeight);z=s.makeVList([{type:"elem",elem:a}],"shift",-o,t);z.children[0].style.marginRight=b}else{o=Math.max(o,v,g.depth+.25*c.metrics.xHeight);u=Math.max(u,c.metrics.sub2);var S=c.metrics.defaultRuleThickness;if(o-g.depth-(n.height-u)<4*S){u=4*S-(o-g.depth)+n.height;var T=.8*c.metrics.xHeight-(o-g.depth);if(T>0){o+=T;u-=T}}z=s.makeVList([{type:"elem",elem:r,shift:u},{type:"elem",elem:a,shift:-o}],"individualShift",null,t);if(h instanceof p.symbolNode){z.children[0].style.marginLeft=-h.italic+"em"}z.children[0].style.marginRight=b;z.children[1].style.marginRight=b}return d([w(e.value.base)],[h,z])},genfrac:function(e,t,i){var h=t.style;if(e.value.size==="display"){h=l.DISPLAY}else if(e.value.size==="text"){h=l.TEXT}var a=h.fracNum();var p=h.fracDen();var g=y(e.value.numer,t.withStyle(a));var n=d([h.reset(),a.cls()],[g]);var o=y(e.value.denom,t.withStyle(p));var w=d([h.reset(),p.cls()],[o]);var k;if(e.value.hasBarLine){k=c.metrics.defaultRuleThickness/t.style.sizeMultiplier}else{k=0}var u;var m;var f;if(h.size===l.DISPLAY.size){u=c.metrics.num1;if(k>0){m=3*k}else{m=7*c.metrics.defaultRuleThickness}f=c.metrics.denom1}else{if(k>0){u=c.metrics.num2;m=k}else{u=c.metrics.num3;m=3*c.metrics.defaultRuleThickness}f=c.metrics.denom2}var v;if(k===0){var x=u-g.depth-(o.height-f);if(x<m){u+=.5*(m-x);f+=.5*(m-x)}v=s.makeVList([{type:"elem",elem:w,shift:f},{type:"elem",elem:n,shift:-u}],"individualShift",null,t)}else{var b=c.metrics.axisHeight;if(u-g.depth-(b+.5*k)<m){u+=m-(u-g.depth-(b+.5*k))}if(b-.5*k-(o.height-f)<m){f+=m-(b-.5*k-(o.height-f))}var z=d([t.style.reset(),l.TEXT.cls(),"frac-line"]);z.height=k;var S=-(b-.5*k);v=s.makeVList([{type:"elem",elem:w,shift:f},{type:"elem",elem:z,shift:S},{type:"elem",elem:n,shift:-u}],"individualShift",null,t)}v.height*=h.sizeMultiplier/t.style.sizeMultiplier;v.depth*=h.sizeMultiplier/t.style.sizeMultiplier;var T=[d(["mfrac"],[v])];var M;if(h.size===l.DISPLAY.size){M=c.metrics.delim1}else{M=c.metrics.getDelim2(h)}if(e.value.leftDelim!=null){T.unshift(r.customSizedDelim(e.value.leftDelim,M,true,t.withStyle(h),e.mode))}if(e.value.rightDelim!=null){T.push(r.customSizedDelim(e.value.rightDelim,M,true,t.withStyle(h),e.mode))}return d(["minner",t.style.reset(),h.cls()],T,t.getColor())},spacing:function(e,t,i){if(e.value==="\\ "||e.value==="\\space"||e.value===" "||e.value==="~"){return d(["mord","mspace"],[s.mathrm(e.value,e.mode)])}else{var h={"\\qquad":"qquad","\\quad":"quad","\\enspace":"enspace","\\;":"thickspace","\\:":"mediumspace","\\,":"thinspace","\\!":"negativethinspace"};return d(["mord","mspace",h[e.value]])}},llap:function(e,t,i){var h=d(["inner"],[y(e.value.body,t.reset())]);var a=d(["fix"],[]);return d(["llap",t.style.cls()],[h,a])},rlap:function(e,t,i){var h=d(["inner"],[y(e.value.body,t.reset())]);var a=d(["fix"],[]);return d(["rlap",t.style.cls()],[h,a])},op:function(e,t,i){var h;var a;var r=false;if(e.type==="supsub"){h=e.value.sup;a=e.value.sub;e=e.value.base;r=true}var p=["\\smallint"];var n=false;if(t.style.size===l.DISPLAY.size&&e.value.symbol&&!g.contains(p,e.value.body)){n=true}var o;var w=0;var k=0;if(e.value.symbol){var u=n?"Size2-Regular":"Size1-Regular";o=s.makeSymbol(e.value.body,u,"math",t.getColor(),["op-symbol",n?"large-op":"small-op","mop"]);w=(o.height-o.depth)/2-c.metrics.axisHeight*t.style.sizeMultiplier;k=o.italic}else{var m=[];for(var f=1;f<e.value.body.length;f++){m.push(s.mathrm(e.value.body[f],e.mode))}o=d(["mop"],m,t.getColor())}if(r){o=d([],[o]);var v,x,b,z;if(h){var S=y(h,t.withStyle(t.style.sup()));v=d([t.style.reset(),t.style.sup().cls()],[S]);x=Math.max(c.metrics.bigOpSpacing1,c.metrics.bigOpSpacing3-S.depth)}if(a){var T=y(a,t.withStyle(t.style.sub()));b=d([t.style.reset(),t.style.sub().cls()],[T]);z=Math.max(c.metrics.bigOpSpacing2,c.metrics.bigOpSpacing4-T.height)}var M,R,C;if(!h){R=o.height-w;M=s.makeVList([{type:"kern",size:c.metrics.bigOpSpacing5},{type:"elem",elem:b},{type:"kern",size:z},{type:"elem",elem:o}],"top",R,t);M.children[0].style.marginLeft=-k+"em"}else if(!a){C=o.depth+w;M=s.makeVList([{type:"elem",elem:o},{type:"kern",size:x},{type:"elem",elem:v},{type:"kern",size:c.metrics.bigOpSpacing5}],"bottom",C,t);M.children[1].style.marginLeft=k+"em"}else if(!h&&!a){return o}else{C=c.metrics.bigOpSpacing5+b.height+b.depth+z+o.depth+w;M=s.makeVList([{type:"kern",size:c.metrics.bigOpSpacing5},{type:"elem",elem:b},{type:"kern",size:z},{type:"elem",elem:o},{type:"kern",size:x},{type:"elem",elem:v},{type:"kern",size:c.metrics.bigOpSpacing5}],"bottom",C,t);M.children[0].style.marginLeft=-k+"em";M.children[2].style.marginLeft=k+"em"}return d(["mop","op-limits"],[M])}else{if(e.value.symbol){o.style.top=w+"em"}return o}},katex:function(e,t,i){var h=d(["k"],[s.mathrm("K",e.mode)]);var a=d(["a"],[s.mathrm("A",e.mode)]);a.height=(a.height+.2)*.75;a.depth=(a.height-.2)*.75;var l=d(["t"],[s.mathrm("T",e.mode)]);var r=d(["e"],[s.mathrm("E",e.mode)]);r.height=r.height-.2155;r.depth=r.depth+.2155;var p=d(["x"],[s.mathrm("X",e.mode)]);return d(["katex-logo"],[h,a,l,r,p],t.getColor())},overline:function(e,t,i){var h=y(e.value.body,t.withStyle(t.style.cramp()));var a=c.metrics.defaultRuleThickness/t.style.sizeMultiplier;var r=d([t.style.reset(),l.TEXT.cls(),"overline-line"]);r.height=a;r.maxFontSize=1;var p=s.makeVList([{type:"elem",elem:h},{type:"kern",size:3*a},{type:"elem",elem:r},{type:"kern",size:a}],"firstBaseline",null,t);return d(["overline","mord"],[p],t.getColor())},sqrt:function(e,t,i){var h=y(e.value.body,t.withStyle(t.style.cramp()));var a=c.metrics.defaultRuleThickness/t.style.sizeMultiplier;var p=d([t.style.reset(),l.TEXT.cls(),"sqrt-line"],[],t.getColor());p.height=a;p.maxFontSize=1;var g=a;if(t.style.id<l.TEXT.id){g=c.metrics.xHeight}var n=a+g/4;var o=(h.height+h.depth)*t.style.sizeMultiplier;var w=o+n+a;var k=d(["sqrt-sign"],[r.customSizedDelim("\\surd",w,false,t,e.mode)],t.getColor());var u=k.height+k.depth-a;if(u>h.height+h.depth+n){n=(n+u-h.height-h.depth)/2}var m=-(h.height+n+a)+k.height;k.style.top=m+"em";k.height-=m;k.depth+=m;var f;if(h.height===0&&h.depth===0){f=d()}else{f=s.makeVList([{type:"elem",elem:h},{type:"kern",size:n},{type:"elem",elem:p},{type:"kern",size:a}],"firstBaseline",null,t)}return d(["sqrt","mord"],[k,f])},sizing:function(e,t,i){var h=n(e.value.value,t.withSize(e.value.size),i);var a=d(["mord"],[d(["sizing","reset-"+t.size,e.value.size,t.style.cls()],h)]);var l=v[e.value.size];a.maxFontSize=l*t.style.sizeMultiplier;return a},styling:function(e,t,i){var h={display:l.DISPLAY,text:l.TEXT,script:l.SCRIPT,scriptscript:l.SCRIPTSCRIPT};var a=h[e.value.style];var s=n(e.value.value,t.withStyle(a),i);return d([t.style.reset(),a.cls()],s)},delimsizing:function(e,t,i){var h=e.value.value;if(h==="."){return d([o[e.value.delimType]])}return d([o[e.value.delimType]],[r.sizedDelim(h,e.value.size,t,e.mode)])},leftright:function(e,t,i){var h=n(e.value.body,t.reset());var a=0;var l=0;for(var s=0;s<h.length;s++){a=Math.max(h[s].height,a);l=Math.max(h[s].depth,l)}a*=t.style.sizeMultiplier;l*=t.style.sizeMultiplier;var p;if(e.value.left==="."){p=d(["nulldelimiter"])}else{p=r.leftRightDelim(e.value.left,a,l,t,e.mode)}h.unshift(p);var c;if(e.value.right==="."){c=d(["nulldelimiter"])}else{c=r.leftRightDelim(e.value.right,a,l,t,e.mode)}h.push(c);return d(["minner",t.style.cls()],h,t.getColor())},rule:function(e,t,i){var h=d(["mord","rule"],[],t.getColor());var a=0;if(e.value.shift){a=e.value.shift.number;if(e.value.shift.unit==="ex"){a*=c.metrics.xHeight}}var l=e.value.width.number;if(e.value.width.unit==="ex"){l*=c.metrics.xHeight}var s=e.value.height.number;if(e.value.height.unit==="ex"){s*=c.metrics.xHeight}a/=t.style.sizeMultiplier;l/=t.style.sizeMultiplier;s/=t.style.sizeMultiplier;h.style.borderRightWidth=l+"em";h.style.borderTopWidth=s+"em";h.style.bottom=a+"em";h.width=l;h.height=s+a;h.depth=-a;return h},accent:function(e,t,i){var h=e.value.base;var a;if(e.type==="supsub"){var l=e;e=l.value.base;h=e.value.base;l.value.base=h;a=y(l,t.reset(),i)}var r=y(h,t.withStyle(t.style.cramp()));var p;if(m(h)){var g=u(h);var n=y(g,t.withStyle(t.style.cramp()));p=n.skew}else{p=0}var o=Math.min(r.height,c.metrics.xHeight);var w=s.makeSymbol(e.value.accent,"Main-Regular","math",t.getColor());w.italic=0;var k=e.value.accent==="\\vec"?"accent-vec":null;var f=d(["accent-body",k],[d([],[w])]);f=s.makeVList([{type:"elem",elem:r},{type:"kern",size:-o},{type:"elem",elem:f}],"firstBaseline",null,t);f.children[1].style.marginLeft=2*p+"em";var v=d(["mord","accent"],[f]);if(a){a.children[0]=v;a.height=Math.max(v.height,a.height);a.classes[0]="mord";return a}else{return v}}};var v={size1:.5,size2:.7,size3:.8,size4:.9,size5:1,size6:1.2,size7:1.44,size8:1.73,size9:2.07,size10:2.49};var y=function(e,t,i){if(!e){return d()}if(f[e.type]){var h=f[e.type](e,t,i);var l;if(t.style!==t.parentStyle){l=t.style.sizeMultiplier/t.parentStyle.sizeMultiplier;h.height*=l;h.depth*=l}if(t.size!==t.parentSize){l=v[t.size]/v[t.parentSize];h.height*=l;h.depth*=l}return h}else{throw new a("Got group of unknown type: '"+e.type+"'")}};var x=function(e){var t=new h(l.TEXT,"size5","");var i=n(e,t);var a=d(["base",t.style.cls()],i);var s=d(["strut"]);var r=d(["strut","bottom"]);s.style.height=a.height+"em";r.style.height=a.height+a.depth+"em";r.style.verticalAlign=-a.depth+"em";var p=d(["katex"],[d(["katex-inner"],[s,r,a])]);return p};t.exports=x},{"./Options":3,"./ParseError":4,"./Style":6,"./buildCommon":7,"./delimiter":9,"./domTree":10,"./fontMetrics":11,"./utils":15}],9:[function(e,t,i){var h=e("./ParseError");var a=e("./Style");var l=e("./buildCommon");var s=e("./fontMetrics");var r=e("./symbols");var p=e("./utils");var c=l.makeSpan;var g=function(e,t){if(r.math[e]&&r.math[e].replace){return s.getCharacterMetrics(r.math[e].replace,t)}else{return s.getCharacterMetrics(e,t)}};var d=function(e,t,i){return l.makeSymbol(e,"Size"+t+"-Regular",i)};var n=function(e,t,i){var h=c(["style-wrap",i.style.reset(),t.cls()],[e]);var a=t.sizeMultiplier/i.style.sizeMultiplier;h.height*=a;h.depth*=a;h.maxFontSize=t.sizeMultiplier;return h};var o=function(e,t,i,h,a){var r=l.makeSymbol(e,"Main-Regular",a);var p=n(r,t,h);if(i){var c=(1-h.style.sizeMultiplier/t.sizeMultiplier)*s.metrics.axisHeight;p.style.top=c+"em";p.height-=c;p.depth+=c}return p};var w=function(e,t,i,h,l){var r=d(e,t,l);var p=n(c(["delimsizing","size"+t],[r],h.getColor()),a.TEXT,h);if(i){var g=(1-h.style.sizeMultiplier)*s.metrics.axisHeight;p.style.top=g+"em";p.height-=g;p.depth+=g}return p};var k=function(e,t,i){var h;if(t==="Size1-Regular"){h="delim-size1"}else if(t==="Size4-Regular"){h="delim-size4"}var a=c(["delimsizinginner",h],[c([],[l.makeSymbol(e,t,i)])]);return{type:"elem",elem:a}};var u=function(e,t,i,h,r){var p,d,o,w;p=o=w=e;d=null;var u="Size1-Regular";if(e==="\\uparrow"){o=w="\u23d0"}else if(e==="\\Uparrow"){o=w="\u2016"}else if(e==="\\downarrow"){p=o="\u23d0"}else if(e==="\\Downarrow"){p=o="\u2016"}else if(e==="\\updownarrow"){p="\\uparrow";o="\u23d0";w="\\downarrow"}else if(e==="\\Updownarrow"){p="\\Uparrow";o="\u2016";w="\\Downarrow"}else if(e==="["||e==="\\lbrack"){p="\u23a1";o="\u23a2";w="\u23a3";u="Size4-Regular"}else if(e==="]"||e==="\\rbrack"){p="\u23a4";o="\u23a5";w="\u23a6";u="Size4-Regular"}else if(e==="\\lfloor"){o=p="\u23a2";w="\u23a3";u="Size4-Regular"}else if(e==="\\lceil"){p="\u23a1";o=w="\u23a2";u="Size4-Regular"}else if(e==="\\rfloor"){o=p="\u23a5";w="\u23a6";u="Size4-Regular"}else if(e==="\\rceil"){p="\u23a4";o=w="\u23a5";u="Size4-Regular"}else if(e==="("){p="\u239b";o="\u239c";w="\u239d";u="Size4-Regular"}else if(e===")"){p="\u239e";o="\u239f";w="\u23a0";u="Size4-Regular"}else if(e==="\\{"||e==="\\lbrace"){p="\u23a7";d="\u23a8";w="\u23a9";o="\u23aa";u="Size4-Regular"}else if(e==="\\}"||e==="\\rbrace"){p="\u23ab";d="\u23ac";w="\u23ad";o="\u23aa";u="Size4-Regular"}else if(e==="\\surd"){p="\ue001";w="\u23b7";o="\ue000";u="Size4-Regular"}var m=g(p,u);var f=m.height+m.depth;var v=g(o,u);var y=v.height+v.depth;var x=g(w,u);var b=x.height+x.depth;var z,S;if(d!==null){z=g(d,u);S=z.height+z.depth}var T=f+b;if(d!==null){T+=S}while(T<t){T+=y;if(d!==null){T+=y}}var M=s.metrics.axisHeight;if(i){M*=h.style.sizeMultiplier}var R=T/2-M;var C=[];C.push(k(w,u,r));var A;if(d===null){var E=T-f-b;var P=Math.ceil(E/y);for(A=0;A<P;A++){C.push(k(o,u,r))}}else{var I=T/2-f-S/2;var L=Math.ceil(I/y);var O=T/2-f-S/2;var D=Math.ceil(O/y);for(A=0;A<L;A++){C.push(k(o,u,r))}C.push(k(d,u,r));for(A=0;A<D;A++){C.push(k(o,u,r))}}C.push(k(p,u,r));var q=l.makeVList(C,"bottom",R,h);return n(c(["delimsizing","mult"],[q],h.getColor()),a.TEXT,h)};var m=["(",")","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","\\lceil","\\rceil","\\surd"];var f=["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert"];var v=["<",">","\\langle","\\rangle","/","\\backslash"];var y=[0,1.2,1.8,2.4,3];var x=function(e,t,i,a){if(e==="<"){e="\\langle"}else if(e===">"){e="\\rangle"}if(p.contains(m,e)||p.contains(v,e)){return w(e,t,false,i,a)}else if(p.contains(f,e)){return u(e,y[t],false,i,a)}else{throw new h("Illegal delimiter: '"+e+"'")}};var b=[{type:"small",style:a.SCRIPTSCRIPT},{type:"small",style:a.SCRIPT},{type:"small",style:a.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}];var z=[{type:"small",style:a.SCRIPTSCRIPT},{type:"small",style:a.SCRIPT},{type:"small",style:a.TEXT},{type:"stack"}];var S=[{type:"small",style:a.SCRIPTSCRIPT},{type:"small",style:a.SCRIPT},{type:"small",style:a.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}];var T=function(e){if(e.type==="small"){return"Main-Regular"}else if(e.type==="large"){return"Size"+e.size+"-Regular"}else if(e.type==="stack"){return"Size4-Regular"}};var M=function(e,t,i,h){var a=Math.min(2,3-h.style.size);for(var l=a;l<i.length;l++){if(i[l].type==="stack"){break}var s=g(e,T(i[l]));var r=s.height+s.depth;if(i[l].type==="small"){r*=i[l].style.sizeMultiplier
}if(r>t){return i[l]}}return i[i.length-1]};var R=function(e,t,i,h,a){if(e==="<"){e="\\langle"}else if(e===">"){e="\\rangle"}var l;if(p.contains(v,e)){l=b}else if(p.contains(m,e)){l=S}else{l=z}var s=M(e,t,l,h);if(s.type==="small"){return o(e,s.style,i,h,a)}else if(s.type==="large"){return w(e,s.size,i,h,a)}else if(s.type==="stack"){return u(e,t,i,h,a)}};var C=function(e,t,i,h,a){var l=s.metrics.axisHeight*h.style.sizeMultiplier;var r=901;var p=5/s.metrics.ptPerEm;var c=Math.max(t-l,i+l);var g=Math.max(c/500*r,2*c-p);return R(e,g,true,h,a)};t.exports={sizedDelim:x,customSizedDelim:R,leftRightDelim:C}},{"./ParseError":4,"./Style":6,"./buildCommon":7,"./fontMetrics":11,"./symbols":14,"./utils":15}],10:[function(e,t,i){var h=e("./utils");var a=function(e){e=e.slice();for(var t=e.length-1;t>=0;t--){if(!e[t]){e.splice(t,1)}}return e.join(" ")};function l(e,t,i,h,a,l){this.classes=e||[];this.children=t||[];this.height=i||0;this.depth=h||0;this.maxFontSize=a||0;this.style=l||{}}l.prototype.toNode=function(){var e=document.createElement("span");e.className=a(this.classes);for(var t in this.style){if(this.style.hasOwnProperty(t)){e.style[t]=this.style[t]}}for(var i=0;i<this.children.length;i++){e.appendChild(this.children[i].toNode())}return e};l.prototype.toMarkup=function(){var e="<span";if(this.classes.length){e+=' class="';e+=h.escape(a(this.classes));e+='"'}var t="";for(var i in this.style){if(this.style.hasOwnProperty(i)){t+=h.hyphenate(i)+":"+this.style[i]+";"}}if(t){e+=' style="'+h.escape(t)+'"'}e+=">";for(var l=0;l<this.children.length;l++){e+=this.children[l].toMarkup()}e+="</span>";return e};function s(e,t,i,h){this.children=e||[];this.height=t||0;this.depth=i||0;this.maxFontSize=h||0}s.prototype.toNode=function(){var e=document.createDocumentFragment();for(var t=0;t<this.children.length;t++){e.appendChild(this.children[t].toNode())}return e};s.prototype.toMarkup=function(){var e="";for(var t=0;t<this.children.length;t++){e+=this.children[t].toMarkup()}return e};function r(e,t,i,h,a,l,s){this.value=e||"";this.height=t||0;this.depth=i||0;this.italic=h||0;this.skew=a||0;this.classes=l||[];this.style=s||{};this.maxFontSize=0}r.prototype.toNode=function(){var e=document.createTextNode(this.value);var t=null;if(this.italic>0){t=document.createElement("span");t.style.marginRight=this.italic+"em"}if(this.classes.length>0){t=t||document.createElement("span");t.className=a(this.classes)}for(var i in this.style){if(this.style.hasOwnProperty(i)){t=t||document.createElement("span");t.style[i]=this.style[i]}}if(t){t.appendChild(e);return t}else{return e}};r.prototype.toMarkup=function(){var e=false;var t="<span";if(this.classes.length){e=true;t+=' class="';t+=h.escape(a(this.classes));t+='"'}var i="";if(this.italic>0){i+="margin-right:"+this.italic+"em;"}for(var l in this.style){if(this.style.hasOwnProperty(l)){i+=h.hyphenate(l)+":"+this.style[l]+";"}}if(i){e=true;t+=' style="'+h.escape(i)+'"'}var s=h.escape(this.value);if(e){t+=">";t+=s;t+="</span>";return t}else{return s}};t.exports={span:l,documentFragment:s,symbolNode:r}},{"./utils":15}],11:[function(e,t,i){var h=e("./Style");var a=.025;var l=0;var s=0;var r=0;var p=.431;var c=1;var g=0;var d=.677;var n=.394;var o=.444;var w=.686;var k=.345;var u=.413;var m=.363;var f=.289;var v=.15;var y=.247;var x=.386;var b=.05;var z=2.39;var S=1.01;var T=.81;var M=.71;var R=.25;var C=0;var A=0;var E=0;var P=0;var I=.431;var L=1;var O=0;var D=.04;var q=.111;var F=.166;var _=.2;var B=.6;var G=.1;var N=10;var X={xHeight:p,quad:c,num1:d,num2:n,num3:o,denom1:w,denom2:k,sup1:u,sup2:m,sup3:f,sub1:v,sub2:y,supDrop:x,subDrop:b,axisHeight:R,defaultRuleThickness:D,bigOpSpacing1:q,bigOpSpacing2:F,bigOpSpacing3:_,bigOpSpacing4:B,bigOpSpacing5:G,ptPerEm:N,delim1:z,getDelim2:function(e){if(e.size===h.TEXT.size){return S}else if(e.size===h.SCRIPT.size){return T}else if(e.size===h.SCRIPTSCRIPT.size){return M}throw new Error("Unexpected style size: "+e.size)}};var H={"AMS-Regular":{10003:{depth:0,height:.69224,italic:0,skew:0},10016:{depth:0,height:.69224,italic:0,skew:0},1008:{depth:0,height:.43056,italic:.04028,skew:0},107:{depth:0,height:.68889,italic:0,skew:0},10731:{depth:.11111,height:.69224,italic:0,skew:0},10846:{depth:.19444,height:.75583,italic:0,skew:0},10877:{depth:.13667,height:.63667,italic:0,skew:0},10878:{depth:.13667,height:.63667,italic:0,skew:0},10885:{depth:.25583,height:.75583,italic:0,skew:0},10886:{depth:.25583,height:.75583,italic:0,skew:0},10887:{depth:.13597,height:.63597,italic:0,skew:0},10888:{depth:.13597,height:.63597,italic:0,skew:0},10889:{depth:.26167,height:.75726,italic:0,skew:0},10890:{depth:.26167,height:.75726,italic:0,skew:0},10891:{depth:.48256,height:.98256,italic:0,skew:0},10892:{depth:.48256,height:.98256,italic:0,skew:0},10901:{depth:.13667,height:.63667,italic:0,skew:0},10902:{depth:.13667,height:.63667,italic:0,skew:0},10933:{depth:.25142,height:.75726,italic:0,skew:0},10934:{depth:.25142,height:.75726,italic:0,skew:0},10935:{depth:.26167,height:.75726,italic:0,skew:0},10936:{depth:.26167,height:.75726,italic:0,skew:0},10937:{depth:.26167,height:.75726,italic:0,skew:0},10938:{depth:.26167,height:.75726,italic:0,skew:0},10949:{depth:.25583,height:.75583,italic:0,skew:0},10950:{depth:.25583,height:.75583,italic:0,skew:0},10955:{depth:.28481,height:.79383,italic:0,skew:0},10956:{depth:.28481,height:.79383,italic:0,skew:0},165:{depth:0,height:.675,italic:.025,skew:0},174:{depth:.15559,height:.69224,italic:0,skew:0},240:{depth:0,height:.68889,italic:0,skew:0},295:{depth:0,height:.68889,italic:0,skew:0},57350:{depth:.08167,height:.58167,italic:0,skew:0},57351:{depth:.08167,height:.58167,italic:0,skew:0},57352:{depth:.08167,height:.58167,italic:0,skew:0},57353:{depth:0,height:.43056,italic:.04028,skew:0},57356:{depth:.25142,height:.75726,italic:0,skew:0},57357:{depth:.25142,height:.75726,italic:0,skew:0},57358:{depth:.41951,height:.91951,italic:0,skew:0},57359:{depth:.30274,height:.79383,italic:0,skew:0},57360:{depth:.30274,height:.79383,italic:0,skew:0},57361:{depth:.41951,height:.91951,italic:0,skew:0},57366:{depth:.25142,height:.75726,italic:0,skew:0},57367:{depth:.25142,height:.75726,italic:0,skew:0},57368:{depth:.25142,height:.75726,italic:0,skew:0},57369:{depth:.25142,height:.75726,italic:0,skew:0},57370:{depth:.13597,height:.63597,italic:0,skew:0},57371:{depth:.13597,height:.63597,italic:0,skew:0},65:{depth:0,height:.68889,italic:0,skew:0},66:{depth:0,height:.68889,italic:0,skew:0},67:{depth:0,height:.68889,italic:0,skew:0},68:{depth:0,height:.68889,italic:0,skew:0},69:{depth:0,height:.68889,italic:0,skew:0},70:{depth:0,height:.68889,italic:0,skew:0},71:{depth:0,height:.68889,italic:0,skew:0},710:{depth:0,height:.825,italic:0,skew:0},72:{depth:0,height:.68889,italic:0,skew:0},73:{depth:0,height:.68889,italic:0,skew:0},732:{depth:0,height:.9,italic:0,skew:0},74:{depth:.16667,height:.68889,italic:0,skew:0},75:{depth:0,height:.68889,italic:0,skew:0},76:{depth:0,height:.68889,italic:0,skew:0},77:{depth:0,height:.68889,italic:0,skew:0},770:{depth:0,height:.825,italic:0,skew:0},771:{depth:0,height:.9,italic:0,skew:0},78:{depth:0,height:.68889,italic:0,skew:0},79:{depth:.16667,height:.68889,italic:0,skew:0},80:{depth:0,height:.68889,italic:0,skew:0},81:{depth:.16667,height:.68889,italic:0,skew:0},82:{depth:0,height:.68889,italic:0,skew:0},8245:{depth:0,height:.54986,italic:0,skew:0},83:{depth:0,height:.68889,italic:0,skew:0},84:{depth:0,height:.68889,italic:0,skew:0},8463:{depth:0,height:.68889,italic:0,skew:0},8487:{depth:0,height:.68889,italic:0,skew:0},8498:{depth:0,height:.68889,italic:0,skew:0},85:{depth:0,height:.68889,italic:0,skew:0},8502:{depth:0,height:.68889,italic:0,skew:0},8503:{depth:0,height:.68889,italic:0,skew:0},8504:{depth:0,height:.68889,italic:0,skew:0},8513:{depth:0,height:.68889,italic:0,skew:0},8592:{depth:-.03598,height:.46402,italic:0,skew:0},8594:{depth:-.03598,height:.46402,italic:0,skew:0},86:{depth:0,height:.68889,italic:0,skew:0},8602:{depth:-.13313,height:.36687,italic:0,skew:0},8603:{depth:-.13313,height:.36687,italic:0,skew:0},8606:{depth:.01354,height:.52239,italic:0,skew:0},8608:{depth:.01354,height:.52239,italic:0,skew:0},8610:{depth:.01354,height:.52239,italic:0,skew:0},8611:{depth:.01354,height:.52239,italic:0,skew:0},8619:{depth:0,height:.54986,italic:0,skew:0},8620:{depth:0,height:.54986,italic:0,skew:0},8621:{depth:-.13313,height:.37788,italic:0,skew:0},8622:{depth:-.13313,height:.36687,italic:0,skew:0},8624:{depth:0,height:.69224,italic:0,skew:0},8625:{depth:0,height:.69224,italic:0,skew:0},8630:{depth:0,height:.43056,italic:0,skew:0},8631:{depth:0,height:.43056,italic:0,skew:0},8634:{depth:.08198,height:.58198,italic:0,skew:0},8635:{depth:.08198,height:.58198,italic:0,skew:0},8638:{depth:.19444,height:.69224,italic:0,skew:0},8639:{depth:.19444,height:.69224,italic:0,skew:0},8642:{depth:.19444,height:.69224,italic:0,skew:0},8643:{depth:.19444,height:.69224,italic:0,skew:0},8644:{depth:.1808,height:.675,italic:0,skew:0},8646:{depth:.1808,height:.675,italic:0,skew:0},8647:{depth:.1808,height:.675,italic:0,skew:0},8648:{depth:.19444,height:.69224,italic:0,skew:0},8649:{depth:.1808,height:.675,italic:0,skew:0},8650:{depth:.19444,height:.69224,italic:0,skew:0},8651:{depth:.01354,height:.52239,italic:0,skew:0},8652:{depth:.01354,height:.52239,italic:0,skew:0},8653:{depth:-.13313,height:.36687,italic:0,skew:0},8654:{depth:-.13313,height:.36687,italic:0,skew:0},8655:{depth:-.13313,height:.36687,italic:0,skew:0},8666:{depth:.13667,height:.63667,italic:0,skew:0},8667:{depth:.13667,height:.63667,italic:0,skew:0},8669:{depth:-.13313,height:.37788,italic:0,skew:0},87:{depth:0,height:.68889,italic:0,skew:0},8705:{depth:0,height:.825,italic:0,skew:0},8708:{depth:0,height:.68889,italic:0,skew:0},8709:{depth:.08167,height:.58167,italic:0,skew:0},8717:{depth:0,height:.43056,italic:0,skew:0},8722:{depth:-.03598,height:.46402,italic:0,skew:0},8724:{depth:.08198,height:.69224,italic:0,skew:0},8726:{depth:.08167,height:.58167,italic:0,skew:0},8733:{depth:0,height:.69224,italic:0,skew:0},8736:{depth:0,height:.69224,italic:0,skew:0},8737:{depth:0,height:.69224,italic:0,skew:0},8738:{depth:.03517,height:.52239,italic:0,skew:0},8739:{depth:.08167,height:.58167,italic:0,skew:0},8740:{depth:.25142,height:.74111,italic:0,skew:0},8741:{depth:.08167,height:.58167,italic:0,skew:0},8742:{depth:.25142,height:.74111,italic:0,skew:0},8756:{depth:0,height:.69224,italic:0,skew:0},8757:{depth:0,height:.69224,italic:0,skew:0},8764:{depth:-.13313,height:.36687,italic:0,skew:0},8765:{depth:-.13313,height:.37788,italic:0,skew:0},8769:{depth:-.13313,height:.36687,italic:0,skew:0},8770:{depth:-.03625,height:.46375,italic:0,skew:0},8774:{depth:.30274,height:.79383,italic:0,skew:0},8776:{depth:-.01688,height:.48312,italic:0,skew:0},8778:{depth:.08167,height:.58167,italic:0,skew:0},8782:{depth:.06062,height:.54986,italic:0,skew:0},8783:{depth:.06062,height:.54986,italic:0,skew:0},8785:{depth:.08198,height:.58198,italic:0,skew:0},8786:{depth:.08198,height:.58198,italic:0,skew:0},8787:{depth:.08198,height:.58198,italic:0,skew:0},8790:{depth:0,height:.69224,italic:0,skew:0},8791:{depth:.22958,height:.72958,italic:0,skew:0},8796:{depth:.08198,height:.91667,italic:0,skew:0},88:{depth:0,height:.68889,italic:0,skew:0},8806:{depth:.25583,height:.75583,italic:0,skew:0},8807:{depth:.25583,height:.75583,italic:0,skew:0},8808:{depth:.25142,height:.75726,italic:0,skew:0},8809:{depth:.25142,height:.75726,italic:0,skew:0},8812:{depth:.25583,height:.75583,italic:0,skew:0},8814:{depth:.20576,height:.70576,italic:0,skew:0},8815:{depth:.20576,height:.70576,italic:0,skew:0},8816:{depth:.30274,height:.79383,italic:0,skew:0},8817:{depth:.30274,height:.79383,italic:0,skew:0},8818:{depth:.22958,height:.72958,italic:0,skew:0},8819:{depth:.22958,height:.72958,italic:0,skew:0},8822:{depth:.1808,height:.675,italic:0,skew:0},8823:{depth:.1808,height:.675,italic:0,skew:0},8828:{depth:.13667,height:.63667,italic:0,skew:0},8829:{depth:.13667,height:.63667,italic:0,skew:0},8830:{depth:.22958,height:.72958,italic:0,skew:0},8831:{depth:.22958,height:.72958,italic:0,skew:0},8832:{depth:.20576,height:.70576,italic:0,skew:0},8833:{depth:.20576,height:.70576,italic:0,skew:0},8840:{depth:.30274,height:.79383,italic:0,skew:0},8841:{depth:.30274,height:.79383,italic:0,skew:0},8842:{depth:.13597,height:.63597,italic:0,skew:0},8843:{depth:.13597,height:.63597,italic:0,skew:0},8847:{depth:.03517,height:.54986,italic:0,skew:0},8848:{depth:.03517,height:.54986,italic:0,skew:0},8858:{depth:.08198,height:.58198,italic:0,skew:0},8859:{depth:.08198,height:.58198,italic:0,skew:0},8861:{depth:.08198,height:.58198,italic:0,skew:0},8862:{depth:0,height:.675,italic:0,skew:0},8863:{depth:0,height:.675,italic:0,skew:0},8864:{depth:0,height:.675,italic:0,skew:0},8865:{depth:0,height:.675,italic:0,skew:0},8872:{depth:0,height:.69224,italic:0,skew:0},8873:{depth:0,height:.69224,italic:0,skew:0},8874:{depth:0,height:.69224,italic:0,skew:0},8876:{depth:0,height:.68889,italic:0,skew:0},8877:{depth:0,height:.68889,italic:0,skew:0},8878:{depth:0,height:.68889,italic:0,skew:0},8879:{depth:0,height:.68889,italic:0,skew:0},8882:{depth:.03517,height:.54986,italic:0,skew:0},8883:{depth:.03517,height:.54986,italic:0,skew:0},8884:{depth:.13667,height:.63667,italic:0,skew:0},8885:{depth:.13667,height:.63667,italic:0,skew:0},8888:{depth:0,height:.54986,italic:0,skew:0},8890:{depth:.19444,height:.43056,italic:0,skew:0},8891:{depth:.19444,height:.69224,italic:0,skew:0},8892:{depth:.19444,height:.69224,italic:0,skew:0},89:{depth:0,height:.68889,italic:0,skew:0},8901:{depth:0,height:.54986,italic:0,skew:0},8903:{depth:.08167,height:.58167,italic:0,skew:0},8905:{depth:.08167,height:.58167,italic:0,skew:0},8906:{depth:.08167,height:.58167,italic:0,skew:0},8907:{depth:0,height:.69224,italic:0,skew:0},8908:{depth:0,height:.69224,italic:0,skew:0},8909:{depth:-.03598,height:.46402,italic:0,skew:0},8910:{depth:0,height:.54986,italic:0,skew:0},8911:{depth:0,height:.54986,italic:0,skew:0},8912:{depth:.03517,height:.54986,italic:0,skew:0},8913:{depth:.03517,height:.54986,italic:0,skew:0},8914:{depth:0,height:.54986,italic:0,skew:0},8915:{depth:0,height:.54986,italic:0,skew:0},8916:{depth:0,height:.69224,italic:0,skew:0},8918:{depth:.0391,height:.5391,italic:0,skew:0},8919:{depth:.0391,height:.5391,italic:0,skew:0},8920:{depth:.03517,height:.54986,italic:0,skew:0},8921:{depth:.03517,height:.54986,italic:0,skew:0},8922:{depth:.38569,height:.88569,italic:0,skew:0},8923:{depth:.38569,height:.88569,italic:0,skew:0},8926:{depth:.13667,height:.63667,italic:0,skew:0},8927:{depth:.13667,height:.63667,italic:0,skew:0},8928:{depth:.30274,height:.79383,italic:0,skew:0},8929:{depth:.30274,height:.79383,italic:0,skew:0},8934:{depth:.23222,height:.74111,italic:0,skew:0},8935:{depth:.23222,height:.74111,italic:0,skew:0},8936:{depth:.23222,height:.74111,italic:0,skew:0},8937:{depth:.23222,height:.74111,italic:0,skew:0},8938:{depth:.20576,height:.70576,italic:0,skew:0},8939:{depth:.20576,height:.70576,italic:0,skew:0},8940:{depth:.30274,height:.79383,italic:0,skew:0},8941:{depth:.30274,height:.79383,italic:0,skew:0},8994:{depth:.19444,height:.69224,italic:0,skew:0},8995:{depth:.19444,height:.69224,italic:0,skew:0},90:{depth:0,height:.68889,italic:0,skew:0},9416:{depth:.15559,height:.69224,italic:0,skew:0},9484:{depth:0,height:.69224,italic:0,skew:0},9488:{depth:0,height:.69224,italic:0,skew:0},9492:{depth:0,height:.37788,italic:0,skew:0},9496:{depth:0,height:.37788,italic:0,skew:0},9585:{depth:.19444,height:.68889,italic:0,skew:0},9586:{depth:.19444,height:.74111,italic:0,skew:0},9632:{depth:0,height:.675,italic:0,skew:0},9633:{depth:0,height:.675,italic:0,skew:0},9650:{depth:0,height:.54986,italic:0,skew:0},9651:{depth:0,height:.54986,italic:0,skew:0},9654:{depth:.03517,height:.54986,italic:0,skew:0},9660:{depth:0,height:.54986,italic:0,skew:0},9661:{depth:0,height:.54986,italic:0,skew:0},9664:{depth:.03517,height:.54986,italic:0,skew:0},9674:{depth:.11111,height:.69224,italic:0,skew:0},9733:{depth:.19444,height:.69224,italic:0,skew:0},989:{depth:.08167,height:.58167,italic:0,skew:0}},"Main-Bold":{100:{depth:0,height:.69444,italic:0,skew:0},101:{depth:0,height:.44444,italic:0,skew:0},102:{depth:0,height:.69444,italic:.10903,skew:0},10216:{depth:.25,height:.75,italic:0,skew:0},10217:{depth:.25,height:.75,italic:0,skew:0},103:{depth:.19444,height:.44444,italic:.01597,skew:0},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.69444,italic:0,skew:0},106:{depth:.19444,height:.69444,italic:0,skew:0},107:{depth:0,height:.69444,italic:0,skew:0},108:{depth:0,height:.69444,italic:0,skew:0},10815:{depth:0,height:.68611,italic:0,skew:0},109:{depth:0,height:.44444,italic:0,skew:0},10927:{depth:.19667,height:.69667,italic:0,skew:0},10928:{depth:.19667,height:.69667,italic:0,skew:0},110:{depth:0,height:.44444,italic:0,skew:0},111:{depth:0,height:.44444,italic:0,skew:0},112:{depth:.19444,height:.44444,italic:0,skew:0},113:{depth:.19444,height:.44444,italic:0,skew:0},114:{depth:0,height:.44444,italic:0,skew:0},115:{depth:0,height:.44444,italic:0,skew:0},116:{depth:0,height:.63492,italic:0,skew:0},117:{depth:0,height:.44444,italic:0,skew:0},118:{depth:0,height:.44444,italic:.01597,skew:0},119:{depth:0,height:.44444,italic:.01597,skew:0},120:{depth:0,height:.44444,italic:0,skew:0},121:{depth:.19444,height:.44444,italic:.01597,skew:0},122:{depth:0,height:.44444,italic:0,skew:0},123:{depth:.25,height:.75,italic:0,skew:0},124:{depth:.25,height:.75,italic:0,skew:0},125:{depth:.25,height:.75,italic:0,skew:0},126:{depth:.35,height:.34444,italic:0,skew:0},168:{depth:0,height:.69444,italic:0,skew:0},172:{depth:0,height:.44444,italic:0,skew:0},175:{depth:0,height:.59611,italic:0,skew:0},176:{depth:0,height:.69444,italic:0,skew:0},177:{depth:.13333,height:.63333,italic:0,skew:0},180:{depth:0,height:.69444,italic:0,skew:0},215:{depth:.13333,height:.63333,italic:0,skew:0},247:{depth:.13333,height:.63333,italic:0,skew:0},305:{depth:0,height:.44444,italic:0,skew:0},33:{depth:0,height:.69444,italic:0,skew:0},34:{depth:0,height:.69444,italic:0,skew:0},35:{depth:.19444,height:.69444,italic:0,skew:0},36:{depth:.05556,height:.75,italic:0,skew:0},37:{depth:.05556,height:.75,italic:0,skew:0},38:{depth:0,height:.69444,italic:0,skew:0},39:{depth:0,height:.69444,italic:0,skew:0},40:{depth:.25,height:.75,italic:0,skew:0},41:{depth:.25,height:.75,italic:0,skew:0},42:{depth:0,height:.75,italic:0,skew:0},43:{depth:.13333,height:.63333,italic:0,skew:0},44:{depth:.19444,height:.15556,italic:0,skew:0},45:{depth:0,height:.44444,italic:0,skew:0},46:{depth:0,height:.15556,italic:0,skew:0},47:{depth:.25,height:.75,italic:0,skew:0},48:{depth:0,height:.64444,italic:0,skew:0},49:{depth:0,height:.64444,italic:0,skew:0},50:{depth:0,height:.64444,italic:0,skew:0},51:{depth:0,height:.64444,italic:0,skew:0},52:{depth:0,height:.64444,italic:0,skew:0},53:{depth:0,height:.64444,italic:0,skew:0},54:{depth:0,height:.64444,italic:0,skew:0},55:{depth:0,height:.64444,italic:0,skew:0},56:{depth:0,height:.64444,italic:0,skew:0},567:{depth:.19444,height:.44444,italic:0,skew:0},57:{depth:0,height:.64444,italic:0,skew:0},58:{depth:0,height:.44444,italic:0,skew:0},59:{depth:.19444,height:.44444,italic:0,skew:0},60:{depth:.08556,height:.58556,italic:0,skew:0},61:{depth:-.10889,height:.39111,italic:0,skew:0},62:{depth:.08556,height:.58556,italic:0,skew:0},63:{depth:0,height:.69444,italic:0,skew:0},64:{depth:0,height:.69444,italic:0,skew:0},65:{depth:0,height:.68611,italic:0,skew:0},66:{depth:0,height:.68611,italic:0,skew:0},67:{depth:0,height:.68611,italic:0,skew:0},68:{depth:0,height:.68611,italic:0,skew:0},69:{depth:0,height:.68611,italic:0,skew:0},70:{depth:0,height:.68611,italic:0,skew:0},71:{depth:0,height:.68611,italic:0,skew:0},710:{depth:0,height:.69444,italic:0,skew:0},711:{depth:0,height:.63194,italic:0,skew:0},713:{depth:0,height:.59611,italic:0,skew:0},714:{depth:0,height:.69444,italic:0,skew:0},715:{depth:0,height:.69444,italic:0,skew:0},72:{depth:0,height:.68611,italic:0,skew:0},728:{depth:0,height:.69444,italic:0,skew:0},729:{depth:0,height:.69444,italic:0,skew:0},73:{depth:0,height:.68611,italic:0,skew:0},730:{depth:0,height:.69444,italic:0,skew:0},732:{depth:0,height:.69444,italic:0,skew:0},74:{depth:0,height:.68611,italic:0,skew:0},75:{depth:0,height:.68611,italic:0,skew:0},76:{depth:0,height:.68611,italic:0,skew:0},768:{depth:0,height:.69444,italic:0,skew:0},769:{depth:0,height:.69444,italic:0,skew:0},77:{depth:0,height:.68611,italic:0,skew:0},770:{depth:0,height:.69444,italic:0,skew:0},771:{depth:0,height:.69444,italic:0,skew:0},772:{depth:0,height:.59611,italic:0,skew:0},774:{depth:0,height:.69444,italic:0,skew:0},775:{depth:0,height:.69444,italic:0,skew:0},776:{depth:0,height:.69444,italic:0,skew:0},778:{depth:0,height:.69444,italic:0,skew:0},779:{depth:0,height:.69444,italic:0,skew:0},78:{depth:0,height:.68611,italic:0,skew:0},780:{depth:0,height:.63194,italic:0,skew:0},79:{depth:0,height:.68611,italic:0,skew:0},80:{depth:0,height:.68611,italic:0,skew:0},81:{depth:.19444,height:.68611,italic:0,skew:0},82:{depth:0,height:.68611,italic:0,skew:0},8211:{depth:0,height:.44444,italic:.03194,skew:0},8212:{depth:0,height:.44444,italic:.03194,skew:0},8216:{depth:0,height:.69444,italic:0,skew:0},8217:{depth:0,height:.69444,italic:0,skew:0},8220:{depth:0,height:.69444,italic:0,skew:0},8221:{depth:0,height:.69444,italic:0,skew:0},8224:{depth:.19444,height:.69444,italic:0,skew:0},8225:{depth:.19444,height:.69444,italic:0,skew:0},824:{depth:.19444,height:.69444,italic:0,skew:0},8242:{depth:0,height:.55556,italic:0,skew:0},83:{depth:0,height:.68611,italic:0,skew:0},84:{depth:0,height:.68611,italic:0,skew:0},8407:{depth:0,height:.72444,italic:.15486,skew:0},8463:{depth:0,height:.69444,italic:0,skew:0},8465:{depth:0,height:.69444,italic:0,skew:0},8467:{depth:0,height:.69444,italic:0,skew:0},8472:{depth:.19444,height:.44444,italic:0,skew:0},8476:{depth:0,height:.69444,italic:0,skew:0},85:{depth:0,height:.68611,italic:0,skew:0},8501:{depth:0,height:.69444,italic:0,skew:0},8592:{depth:-.10889,height:.39111,italic:0,skew:0},8593:{depth:.19444,height:.69444,italic:0,skew:0},8594:{depth:-.10889,height:.39111,italic:0,skew:0},8595:{depth:.19444,height:.69444,italic:0,skew:0},8596:{depth:-.10889,height:.39111,italic:0,skew:0},8597:{depth:.25,height:.75,italic:0,skew:0},8598:{depth:.19444,height:.69444,italic:0,skew:0},8599:{depth:.19444,height:.69444,italic:0,skew:0},86:{depth:0,height:.68611,italic:.01597,skew:0},8600:{depth:.19444,height:.69444,italic:0,skew:0},8601:{depth:.19444,height:.69444,italic:0,skew:0},8636:{depth:-.10889,height:.39111,italic:0,skew:0},8637:{depth:-.10889,height:.39111,italic:0,skew:0},8640:{depth:-.10889,height:.39111,italic:0,skew:0},8641:{depth:-.10889,height:.39111,italic:0,skew:0},8656:{depth:-.10889,height:.39111,italic:0,skew:0},8657:{depth:.19444,height:.69444,italic:0,skew:0},8658:{depth:-.10889,height:.39111,italic:0,skew:0},8659:{depth:.19444,height:.69444,italic:0,skew:0},8660:{depth:-.10889,height:.39111,italic:0,skew:0},8661:{depth:.25,height:.75,italic:0,skew:0},87:{depth:0,height:.68611,italic:.01597,skew:0},8704:{depth:0,height:.69444,italic:0,skew:0},8706:{depth:0,height:.69444,italic:.06389,skew:0},8707:{depth:0,height:.69444,italic:0,skew:0},8709:{depth:.05556,height:.75,italic:0,skew:0},8711:{depth:0,height:.68611,italic:0,skew:0},8712:{depth:.08556,height:.58556,italic:0,skew:0},8715:{depth:.08556,height:.58556,italic:0,skew:0},8722:{depth:.13333,height:.63333,italic:0,skew:0},8723:{depth:.13333,height:.63333,italic:0,skew:0},8725:{depth:.25,height:.75,italic:0,skew:0},8726:{depth:.25,height:.75,italic:0,skew:0},8727:{depth:-.02778,height:.47222,italic:0,skew:0},8728:{depth:-.02639,height:.47361,italic:0,skew:0},8729:{depth:-.02639,height:.47361,italic:0,skew:0},8730:{depth:.18,height:.82,italic:0,skew:0},8733:{depth:0,height:.44444,italic:0,skew:0},8734:{depth:0,height:.44444,italic:0,skew:0},8736:{depth:0,height:.69224,italic:0,skew:0},8739:{depth:.25,height:.75,italic:0,skew:0},8741:{depth:.25,height:.75,italic:0,skew:0},8743:{depth:0,height:.55556,italic:0,skew:0},8744:{depth:0,height:.55556,italic:0,skew:0},8745:{depth:0,height:.55556,italic:0,skew:0},8746:{depth:0,height:.55556,italic:0,skew:0},8747:{depth:.19444,height:.69444,italic:.12778,skew:0},8764:{depth:-.10889,height:.39111,italic:0,skew:0},8768:{depth:.19444,height:.69444,italic:0,skew:0},8771:{depth:.00222,height:.50222,italic:0,skew:0},8776:{depth:.02444,height:.52444,italic:0,skew:0},8781:{depth:.00222,height:.50222,italic:0,skew:0},88:{depth:0,height:.68611,italic:0,skew:0},8801:{depth:.00222,height:.50222,italic:0,skew:0},8804:{depth:.19667,height:.69667,italic:0,skew:0},8805:{depth:.19667,height:.69667,italic:0,skew:0},8810:{depth:.08556,height:.58556,italic:0,skew:0},8811:{depth:.08556,height:.58556,italic:0,skew:0},8826:{depth:.08556,height:.58556,italic:0,skew:0},8827:{depth:.08556,height:.58556,italic:0,skew:0},8834:{depth:.08556,height:.58556,italic:0,skew:0},8835:{depth:.08556,height:.58556,italic:0,skew:0},8838:{depth:.19667,height:.69667,italic:0,skew:0},8839:{depth:.19667,height:.69667,italic:0,skew:0},8846:{depth:0,height:.55556,italic:0,skew:0},8849:{depth:.19667,height:.69667,italic:0,skew:0},8850:{depth:.19667,height:.69667,italic:0,skew:0},8851:{depth:0,height:.55556,italic:0,skew:0},8852:{depth:0,height:.55556,italic:0,skew:0},8853:{depth:.13333,height:.63333,italic:0,skew:0},8854:{depth:.13333,height:.63333,italic:0,skew:0},8855:{depth:.13333,height:.63333,italic:0,skew:0},8856:{depth:.13333,height:.63333,italic:0,skew:0},8857:{depth:.13333,height:.63333,italic:0,skew:0},8866:{depth:0,height:.69444,italic:0,skew:0},8867:{depth:0,height:.69444,italic:0,skew:0},8868:{depth:0,height:.69444,italic:0,skew:0},8869:{depth:0,height:.69444,italic:0,skew:0},89:{depth:0,height:.68611,italic:.02875,skew:0},8900:{depth:-.02639,height:.47361,italic:0,skew:0},8901:{depth:-.02639,height:.47361,italic:0,skew:0},8902:{depth:-.02778,height:.47222,italic:0,skew:0},8968:{depth:.25,height:.75,italic:0,skew:0},8969:{depth:.25,height:.75,italic:0,skew:0},8970:{depth:.25,height:.75,italic:0,skew:0},8971:{depth:.25,height:.75,italic:0,skew:0},8994:{depth:-.13889,height:.36111,italic:0,skew:0},8995:{depth:-.13889,height:.36111,italic:0,skew:0},90:{depth:0,height:.68611,italic:0,skew:0},91:{depth:.25,height:.75,italic:0,skew:0},915:{depth:0,height:.68611,italic:0,skew:0},916:{depth:0,height:.68611,italic:0,skew:0},92:{depth:.25,height:.75,italic:0,skew:0},920:{depth:0,height:.68611,italic:0,skew:0},923:{depth:0,height:.68611,italic:0,skew:0},926:{depth:0,height:.68611,italic:0,skew:0},928:{depth:0,height:.68611,italic:0,skew:0},93:{depth:.25,height:.75,italic:0,skew:0},931:{depth:0,height:.68611,italic:0,skew:0},933:{depth:0,height:.68611,italic:0,skew:0},934:{depth:0,height:.68611,italic:0,skew:0},936:{depth:0,height:.68611,italic:0,skew:0},937:{depth:0,height:.68611,italic:0,skew:0},94:{depth:0,height:.69444,italic:0,skew:0},95:{depth:.31,height:.13444,italic:.03194,skew:0},96:{depth:0,height:.69444,italic:0,skew:0},9651:{depth:.19444,height:.69444,italic:0,skew:0},9657:{depth:-.02778,height:.47222,italic:0,skew:0},9661:{depth:.19444,height:.69444,italic:0,skew:0},9667:{depth:-.02778,height:.47222,italic:0,skew:0},97:{depth:0,height:.44444,italic:0,skew:0},9711:{depth:.19444,height:.69444,italic:0,skew:0},98:{depth:0,height:.69444,italic:0,skew:0},9824:{depth:.12963,height:.69444,italic:0,skew:0},9825:{depth:.12963,height:.69444,italic:0,skew:0},9826:{depth:.12963,height:.69444,italic:0,skew:0},9827:{depth:.12963,height:.69444,italic:0,skew:0},9837:{depth:0,height:.75,italic:0,skew:0},9838:{depth:.19444,height:.69444,italic:0,skew:0},9839:{depth:.19444,height:.69444,italic:0,skew:0},99:{depth:0,height:.44444,italic:0,skew:0}},"Main-Italic":{100:{depth:0,height:.69444,italic:.10333,skew:0},101:{depth:0,height:.43056,italic:.07514,skew:0},102:{depth:.19444,height:.69444,italic:.21194,skew:0},103:{depth:.19444,height:.43056,italic:.08847,skew:0},104:{depth:0,height:.69444,italic:.07671,skew:0},105:{depth:0,height:.65536,italic:.1019,skew:0},106:{depth:.19444,height:.65536,italic:.14467,skew:0},107:{depth:0,height:.69444,italic:.10764,skew:0},108:{depth:0,height:.69444,italic:.10333,skew:0},109:{depth:0,height:.43056,italic:.07671,skew:0},110:{depth:0,height:.43056,italic:.07671,skew:0},111:{depth:0,height:.43056,italic:.06312,skew:0},112:{depth:.19444,height:.43056,italic:.06312,skew:0},113:{depth:.19444,height:.43056,italic:.08847,skew:0},114:{depth:0,height:.43056,italic:.10764,skew:0},115:{depth:0,height:.43056,italic:.08208,skew:0},116:{depth:0,height:.61508,italic:.09486,skew:0},117:{depth:0,height:.43056,italic:.07671,skew:0},118:{depth:0,height:.43056,italic:.10764,skew:0},119:{depth:0,height:.43056,italic:.10764,skew:0},120:{depth:0,height:.43056,italic:.12042,skew:0},121:{depth:.19444,height:.43056,italic:.08847,skew:0},122:{depth:0,height:.43056,italic:.12292,skew:0},126:{depth:.35,height:.31786,italic:.11585,skew:0},163:{depth:0,height:.69444,italic:0,skew:0},305:{depth:0,height:.43056,italic:.07671,skew:0},33:{depth:0,height:.69444,italic:.12417,skew:0},34:{depth:0,height:.69444,italic:.06961,skew:0},35:{depth:.19444,height:.69444,italic:.06616,skew:0},37:{depth:.05556,height:.75,italic:.13639,skew:0},38:{depth:0,height:.69444,italic:.09694,skew:0},39:{depth:0,height:.69444,italic:.12417,skew:0},40:{depth:.25,height:.75,italic:.16194,skew:0},41:{depth:.25,height:.75,italic:.03694,skew:0},42:{depth:0,height:.75,italic:.14917,skew:0},43:{depth:.05667,height:.56167,italic:.03694,skew:0},44:{depth:.19444,height:.10556,italic:0,skew:0},45:{depth:0,height:.43056,italic:.02826,skew:0},46:{depth:0,height:.10556,italic:0,skew:0},47:{depth:.25,height:.75,italic:.16194,skew:0},48:{depth:0,height:.64444,italic:.13556,skew:0},49:{depth:0,height:.64444,italic:.13556,skew:0},50:{depth:0,height:.64444,italic:.13556,skew:0},51:{depth:0,height:.64444,italic:.13556,skew:0},52:{depth:.19444,height:.64444,italic:.13556,skew:0},53:{depth:0,height:.64444,italic:.13556,skew:0},54:{depth:0,height:.64444,italic:.13556,skew:0},55:{depth:.19444,height:.64444,italic:.13556,skew:0},56:{depth:0,height:.64444,italic:.13556,skew:0},567:{depth:.19444,height:.43056,italic:.03736,skew:0},57:{depth:0,height:.64444,italic:.13556,skew:0},58:{depth:0,height:.43056,italic:.0582,skew:0},59:{depth:.19444,height:.43056,italic:.0582,skew:0},61:{depth:-.13313,height:.36687,italic:.06616,skew:0},63:{depth:0,height:.69444,italic:.1225,skew:0},64:{depth:0,height:.69444,italic:.09597,skew:0},65:{depth:0,height:.68333,italic:0,skew:0},66:{depth:0,height:.68333,italic:.10257,skew:0},67:{depth:0,height:.68333,italic:.14528,skew:0},68:{depth:0,height:.68333,italic:.09403,skew:0},69:{depth:0,height:.68333,italic:.12028,skew:0},70:{depth:0,height:.68333,italic:.13305,skew:0},71:{depth:0,height:.68333,italic:.08722,skew:0},72:{depth:0,height:.68333,italic:.16389,skew:0},73:{depth:0,height:.68333,italic:.15806,skew:0},74:{depth:0,height:.68333,italic:.14028,skew:0},75:{depth:0,height:.68333,italic:.14528,skew:0},76:{depth:0,height:.68333,italic:0,skew:0},768:{depth:0,height:.69444,italic:0,skew:0},769:{depth:0,height:.69444,italic:.09694,skew:0},77:{depth:0,height:.68333,italic:.16389,skew:0},770:{depth:0,height:.69444,italic:.06646,skew:0},771:{depth:0,height:.66786,italic:.11585,skew:0},772:{depth:0,height:.56167,italic:.10333,skew:0},774:{depth:0,height:.69444,italic:.10806,skew:0},775:{depth:0,height:.66786,italic:.11752,skew:0},776:{depth:0,height:.66786,italic:.10474,skew:0},778:{depth:0,height:.69444,italic:0,skew:0},779:{depth:0,height:.69444,italic:.1225,skew:0},78:{depth:0,height:.68333,italic:.16389,skew:0},780:{depth:0,height:.62847,italic:.08295,skew:0},79:{depth:0,height:.68333,italic:.09403,skew:0},80:{depth:0,height:.68333,italic:.10257,skew:0},81:{depth:.19444,height:.68333,italic:.09403,skew:0},82:{depth:0,height:.68333,italic:.03868,skew:0},8211:{depth:0,height:.43056,italic:.09208,skew:0},8212:{depth:0,height:.43056,italic:.09208,skew:0},8216:{depth:0,height:.69444,italic:.12417,skew:0},8217:{depth:0,height:.69444,italic:.12417,skew:0},8220:{depth:0,height:.69444,italic:.1685,skew:0},8221:{depth:0,height:.69444,italic:.06961,skew:0},83:{depth:0,height:.68333,italic:.11972,skew:0},84:{depth:0,height:.68333,italic:.13305,skew:0},8463:{depth:0,height:.68889,italic:0,skew:0},85:{depth:0,height:.68333,italic:.16389,skew:0},86:{depth:0,height:.68333,italic:.18361,skew:0},87:{depth:0,height:.68333,italic:.18361,skew:0},88:{depth:0,height:.68333,italic:.15806,skew:0},89:{depth:0,height:.68333,italic:.19383,skew:0},90:{depth:0,height:.68333,italic:.14528,skew:0},91:{depth:.25,height:.75,italic:.1875,skew:0},915:{depth:0,height:.68333,italic:.13305,skew:0},916:{depth:0,height:.68333,italic:0,skew:0},920:{depth:0,height:.68333,italic:.09403,skew:0},923:{depth:0,height:.68333,italic:0,skew:0},926:{depth:0,height:.68333,italic:.15294,skew:0},928:{depth:0,height:.68333,italic:.16389,skew:0},93:{depth:.25,height:.75,italic:.10528,skew:0},931:{depth:0,height:.68333,italic:.12028,skew:0},933:{depth:0,height:.68333,italic:.11111,skew:0},934:{depth:0,height:.68333,italic:.05986,skew:0},936:{depth:0,height:.68333,italic:.11111,skew:0},937:{depth:0,height:.68333,italic:.10257,skew:0},94:{depth:0,height:.69444,italic:.06646,skew:0},95:{depth:.31,height:.12056,italic:.09208,skew:0},97:{depth:0,height:.43056,italic:.07671,skew:0},98:{depth:0,height:.69444,italic:.06312,skew:0},99:{depth:0,height:.43056,italic:.05653,skew:0}},"Main-Regular":{32:{depth:-0,height:0,italic:0,skew:0},160:{depth:-0,height:0,italic:0,skew:0},8230:{depth:-0,height:.12,italic:0,skew:0},8773:{depth:-.022,height:.589,italic:0,skew:0},8800:{depth:.215,height:.716,italic:0,skew:0},8942:{depth:.03,height:.9,italic:0,skew:0},8943:{depth:-.19,height:.31,italic:0,skew:0},8945:{depth:-.1,height:.82,italic:0,skew:0},100:{depth:0,height:.69444,italic:0,skew:0},101:{depth:0,height:.43056,italic:0,skew:0},102:{depth:0,height:.69444,italic:.07778,skew:0},10216:{depth:.25,height:.75,italic:0,skew:0},10217:{depth:.25,height:.75,italic:0,skew:0},103:{depth:.19444,height:.43056,italic:.01389,skew:0},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.66786,italic:0,skew:0},106:{depth:.19444,height:.66786,italic:0,skew:0},107:{depth:0,height:.69444,italic:0,skew:0},108:{depth:0,height:.69444,italic:0,skew:0},10815:{depth:0,height:.68333,italic:0,skew:0},109:{depth:0,height:.43056,italic:0,skew:0},10927:{depth:.13597,height:.63597,italic:0,skew:0},10928:{depth:.13597,height:.63597,italic:0,skew:0},110:{depth:0,height:.43056,italic:0,skew:0},111:{depth:0,height:.43056,italic:0,skew:0},112:{depth:.19444,height:.43056,italic:0,skew:0},113:{depth:.19444,height:.43056,italic:0,skew:0},114:{depth:0,height:.43056,italic:0,skew:0},115:{depth:0,height:.43056,italic:0,skew:0},116:{depth:0,height:.61508,italic:0,skew:0},117:{depth:0,height:.43056,italic:0,skew:0},118:{depth:0,height:.43056,italic:.01389,skew:0},119:{depth:0,height:.43056,italic:.01389,skew:0},120:{depth:0,height:.43056,italic:0,skew:0},121:{depth:.19444,height:.43056,italic:.01389,skew:0},122:{depth:0,height:.43056,italic:0,skew:0},123:{depth:.25,height:.75,italic:0,skew:0},124:{depth:.25,height:.75,italic:0,skew:0},125:{depth:.25,height:.75,italic:0,skew:0},126:{depth:.35,height:.31786,italic:0,skew:0},168:{depth:0,height:.66786,italic:0,skew:0},172:{depth:0,height:.43056,italic:0,skew:0},175:{depth:0,height:.56778,italic:0,skew:0},176:{depth:0,height:.69444,italic:0,skew:0},177:{depth:.08333,height:.58333,italic:0,skew:0},180:{depth:0,height:.69444,italic:0,skew:0},215:{depth:.08333,height:.58333,italic:0,skew:0},247:{depth:.08333,height:.58333,italic:0,skew:0},305:{depth:0,height:.43056,italic:0,skew:0},33:{depth:0,height:.69444,italic:0,skew:0},34:{depth:0,height:.69444,italic:0,skew:0},35:{depth:.19444,height:.69444,italic:0,skew:0},36:{depth:.05556,height:.75,italic:0,skew:0},37:{depth:.05556,height:.75,italic:0,skew:0},38:{depth:0,height:.69444,italic:0,skew:0},39:{depth:0,height:.69444,italic:0,skew:0},40:{depth:.25,height:.75,italic:0,skew:0},41:{depth:.25,height:.75,italic:0,skew:0},42:{depth:0,height:.75,italic:0,skew:0},43:{depth:.08333,height:.58333,italic:0,skew:0},44:{depth:.19444,height:.10556,italic:0,skew:0},45:{depth:0,height:.43056,italic:0,skew:0},46:{depth:0,height:.10556,italic:0,skew:0},47:{depth:.25,height:.75,italic:0,skew:0},48:{depth:0,height:.64444,italic:0,skew:0},49:{depth:0,height:.64444,italic:0,skew:0},50:{depth:0,height:.64444,italic:0,skew:0},51:{depth:0,height:.64444,italic:0,skew:0},52:{depth:0,height:.64444,italic:0,skew:0},53:{depth:0,height:.64444,italic:0,skew:0},54:{depth:0,height:.64444,italic:0,skew:0},55:{depth:0,height:.64444,italic:0,skew:0},56:{depth:0,height:.64444,italic:0,skew:0},567:{depth:.19444,height:.43056,italic:0,skew:0},57:{depth:0,height:.64444,italic:0,skew:0},58:{depth:0,height:.43056,italic:0,skew:0},59:{depth:.19444,height:.43056,italic:0,skew:0},60:{depth:.0391,height:.5391,italic:0,skew:0},61:{depth:-.13313,height:.36687,italic:0,skew:0},62:{depth:.0391,height:.5391,italic:0,skew:0},63:{depth:0,height:.69444,italic:0,skew:0},64:{depth:0,height:.69444,italic:0,skew:0},65:{depth:0,height:.68333,italic:0,skew:0},66:{depth:0,height:.68333,italic:0,skew:0},67:{depth:0,height:.68333,italic:0,skew:0},68:{depth:0,height:.68333,italic:0,skew:0},69:{depth:0,height:.68333,italic:0,skew:0},70:{depth:0,height:.68333,italic:0,skew:0},71:{depth:0,height:.68333,italic:0,skew:0},710:{depth:0,height:.69444,italic:0,skew:0},711:{depth:0,height:.62847,italic:0,skew:0},713:{depth:0,height:.56778,italic:0,skew:0},714:{depth:0,height:.69444,italic:0,skew:0},715:{depth:0,height:.69444,italic:0,skew:0},72:{depth:0,height:.68333,italic:0,skew:0},728:{depth:0,height:.69444,italic:0,skew:0},729:{depth:0,height:.66786,italic:0,skew:0},73:{depth:0,height:.68333,italic:0,skew:0},730:{depth:0,height:.69444,italic:0,skew:0},732:{depth:0,height:.66786,italic:0,skew:0},74:{depth:0,height:.68333,italic:0,skew:0},75:{depth:0,height:.68333,italic:0,skew:0},76:{depth:0,height:.68333,italic:0,skew:0},768:{depth:0,height:.69444,italic:0,skew:0},769:{depth:0,height:.69444,italic:0,skew:0},77:{depth:0,height:.68333,italic:0,skew:0},770:{depth:0,height:.69444,italic:0,skew:0},771:{depth:0,height:.66786,italic:0,skew:0},772:{depth:0,height:.56778,italic:0,skew:0},774:{depth:0,height:.69444,italic:0,skew:0},775:{depth:0,height:.66786,italic:0,skew:0},776:{depth:0,height:.66786,italic:0,skew:0},778:{depth:0,height:.69444,italic:0,skew:0},779:{depth:0,height:.69444,italic:0,skew:0},78:{depth:0,height:.68333,italic:0,skew:0},780:{depth:0,height:.62847,italic:0,skew:0},79:{depth:0,height:.68333,italic:0,skew:0},80:{depth:0,height:.68333,italic:0,skew:0},81:{depth:.19444,height:.68333,italic:0,skew:0},82:{depth:0,height:.68333,italic:0,skew:0},8211:{depth:0,height:.43056,italic:.02778,skew:0},8212:{depth:0,height:.43056,italic:.02778,skew:0},8216:{depth:0,height:.69444,italic:0,skew:0},8217:{depth:0,height:.69444,italic:0,skew:0},8220:{depth:0,height:.69444,italic:0,skew:0},8221:{depth:0,height:.69444,italic:0,skew:0},8224:{depth:.19444,height:.69444,italic:0,skew:0},8225:{depth:.19444,height:.69444,italic:0,skew:0},824:{depth:.19444,height:.69444,italic:0,skew:0},8242:{depth:0,height:.55556,italic:0,skew:0},83:{depth:0,height:.68333,italic:0,skew:0},84:{depth:0,height:.68333,italic:0,skew:0},8407:{depth:0,height:.71444,italic:.15382,skew:0},8463:{depth:0,height:.68889,italic:0,skew:0},8465:{depth:0,height:.69444,italic:0,skew:0},8467:{depth:0,height:.69444,italic:0,skew:.11111},8472:{depth:.19444,height:.43056,italic:0,skew:.11111},8476:{depth:0,height:.69444,italic:0,skew:0},85:{depth:0,height:.68333,italic:0,skew:0},8501:{depth:0,height:.69444,italic:0,skew:0},8592:{depth:-.13313,height:.36687,italic:0,skew:0},8593:{depth:.19444,height:.69444,italic:0,skew:0},8594:{depth:-.13313,height:.36687,italic:0,skew:0},8595:{depth:.19444,height:.69444,italic:0,skew:0},8596:{depth:-.13313,height:.36687,italic:0,skew:0},8597:{depth:.25,height:.75,italic:0,skew:0},8598:{depth:.19444,height:.69444,italic:0,skew:0},8599:{depth:.19444,height:.69444,italic:0,skew:0},86:{depth:0,height:.68333,italic:.01389,skew:0},8600:{depth:.19444,height:.69444,italic:0,skew:0},8601:{depth:.19444,height:.69444,italic:0,skew:0},8636:{depth:-.13313,height:.36687,italic:0,skew:0},8637:{depth:-.13313,height:.36687,italic:0,skew:0},8640:{depth:-.13313,height:.36687,italic:0,skew:0},8641:{depth:-.13313,height:.36687,italic:0,skew:0},8656:{depth:-.13313,height:.36687,italic:0,skew:0},8657:{depth:.19444,height:.69444,italic:0,skew:0},8658:{depth:-.13313,height:.36687,italic:0,skew:0},8659:{depth:.19444,height:.69444,italic:0,skew:0},8660:{depth:-.13313,height:.36687,italic:0,skew:0},8661:{depth:.25,height:.75,italic:0,skew:0},87:{depth:0,height:.68333,italic:.01389,skew:0},8704:{depth:0,height:.69444,italic:0,skew:0},8706:{depth:0,height:.69444,italic:.05556,skew:.08334},8707:{depth:0,height:.69444,italic:0,skew:0},8709:{depth:.05556,height:.75,italic:0,skew:0},8711:{depth:0,height:.68333,italic:0,skew:0},8712:{depth:.0391,height:.5391,italic:0,skew:0},8715:{depth:.0391,height:.5391,italic:0,skew:0},8722:{depth:.08333,height:.58333,italic:0,skew:0},8723:{depth:.08333,height:.58333,italic:0,skew:0},8725:{depth:.25,height:.75,italic:0,skew:0},8726:{depth:.25,height:.75,italic:0,skew:0},8727:{depth:-.03472,height:.46528,italic:0,skew:0},8728:{depth:-.05555,height:.44445,italic:0,skew:0},8729:{depth:-.05555,height:.44445,italic:0,skew:0},8730:{depth:.2,height:.8,italic:0,skew:0},8733:{depth:0,height:.43056,italic:0,skew:0},8734:{depth:0,height:.43056,italic:0,skew:0},8736:{depth:0,height:.69224,italic:0,skew:0},8739:{depth:.25,height:.75,italic:0,skew:0},8741:{depth:.25,height:.75,italic:0,skew:0},8743:{depth:0,height:.55556,italic:0,skew:0},8744:{depth:0,height:.55556,italic:0,skew:0},8745:{depth:0,height:.55556,italic:0,skew:0},8746:{depth:0,height:.55556,italic:0,skew:0},8747:{depth:.19444,height:.69444,italic:.11111,skew:0},8764:{depth:-.13313,height:.36687,italic:0,skew:0},8768:{depth:.19444,height:.69444,italic:0,skew:0},8771:{depth:-.03625,height:.46375,italic:0,skew:0},8776:{depth:-.01688,height:.48312,italic:0,skew:0},8781:{depth:-.03625,height:.46375,italic:0,skew:0},88:{depth:0,height:.68333,italic:0,skew:0},8801:{depth:-.03625,height:.46375,italic:0,skew:0},8804:{depth:.13597,height:.63597,italic:0,skew:0},8805:{depth:.13597,height:.63597,italic:0,skew:0},8810:{depth:.0391,height:.5391,italic:0,skew:0},8811:{depth:.0391,height:.5391,italic:0,skew:0},8826:{depth:.0391,height:.5391,italic:0,skew:0},8827:{depth:.0391,height:.5391,italic:0,skew:0},8834:{depth:.0391,height:.5391,italic:0,skew:0},8835:{depth:.0391,height:.5391,italic:0,skew:0},8838:{depth:.13597,height:.63597,italic:0,skew:0},8839:{depth:.13597,height:.63597,italic:0,skew:0},8846:{depth:0,height:.55556,italic:0,skew:0},8849:{depth:.13597,height:.63597,italic:0,skew:0},8850:{depth:.13597,height:.63597,italic:0,skew:0},8851:{depth:0,height:.55556,italic:0,skew:0},8852:{depth:0,height:.55556,italic:0,skew:0},8853:{depth:.08333,height:.58333,italic:0,skew:0},8854:{depth:.08333,height:.58333,italic:0,skew:0},8855:{depth:.08333,height:.58333,italic:0,skew:0},8856:{depth:.08333,height:.58333,italic:0,skew:0},8857:{depth:.08333,height:.58333,italic:0,skew:0},8866:{depth:0,height:.69444,italic:0,skew:0},8867:{depth:0,height:.69444,italic:0,skew:0},8868:{depth:0,height:.69444,italic:0,skew:0},8869:{depth:0,height:.69444,italic:0,skew:0},89:{depth:0,height:.68333,italic:.025,skew:0},8900:{depth:-.05555,height:.44445,italic:0,skew:0},8901:{depth:-.05555,height:.44445,italic:0,skew:0},8902:{depth:-.03472,height:.46528,italic:0,skew:0},8968:{depth:.25,height:.75,italic:0,skew:0},8969:{depth:.25,height:.75,italic:0,skew:0},8970:{depth:.25,height:.75,italic:0,skew:0},8971:{depth:.25,height:.75,italic:0,skew:0},8994:{depth:-.14236,height:.35764,italic:0,skew:0},8995:{depth:-.14236,height:.35764,italic:0,skew:0},90:{depth:0,height:.68333,italic:0,skew:0},91:{depth:.25,height:.75,italic:0,skew:0},915:{depth:0,height:.68333,italic:0,skew:0},916:{depth:0,height:.68333,italic:0,skew:0},92:{depth:.25,height:.75,italic:0,skew:0},920:{depth:0,height:.68333,italic:0,skew:0},923:{depth:0,height:.68333,italic:0,skew:0},926:{depth:0,height:.68333,italic:0,skew:0},928:{depth:0,height:.68333,italic:0,skew:0},93:{depth:.25,height:.75,italic:0,skew:0},931:{depth:0,height:.68333,italic:0,skew:0},933:{depth:0,height:.68333,italic:0,skew:0},934:{depth:0,height:.68333,italic:0,skew:0},936:{depth:0,height:.68333,italic:0,skew:0},937:{depth:0,height:.68333,italic:0,skew:0},94:{depth:0,height:.69444,italic:0,skew:0},95:{depth:.31,height:.12056,italic:.02778,skew:0},96:{depth:0,height:.69444,italic:0,skew:0},9651:{depth:.19444,height:.69444,italic:0,skew:0},9657:{depth:-.03472,height:.46528,italic:0,skew:0},9661:{depth:.19444,height:.69444,italic:0,skew:0},9667:{depth:-.03472,height:.46528,italic:0,skew:0},97:{depth:0,height:.43056,italic:0,skew:0},9711:{depth:.19444,height:.69444,italic:0,skew:0},98:{depth:0,height:.69444,italic:0,skew:0},9824:{depth:.12963,height:.69444,italic:0,skew:0},9825:{depth:.12963,height:.69444,italic:0,skew:0},9826:{depth:.12963,height:.69444,italic:0,skew:0},9827:{depth:.12963,height:.69444,italic:0,skew:0},9837:{depth:0,height:.75,italic:0,skew:0},9838:{depth:.19444,height:.69444,italic:0,skew:0},9839:{depth:.19444,height:.69444,italic:0,skew:0},99:{depth:0,height:.43056,italic:0,skew:0}},"Math-BoldItalic":{100:{depth:0,height:.69444,italic:0,skew:0},1009:{depth:.19444,height:.44444,italic:0,skew:0},101:{depth:0,height:.44444,italic:0,skew:0},1013:{depth:0,height:.44444,italic:0,skew:0},102:{depth:.19444,height:.69444,italic:.11042,skew:0},103:{depth:.19444,height:.44444,italic:.03704,skew:0},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.69326,italic:0,skew:0},106:{depth:.19444,height:.69326,italic:.0622,skew:0},107:{depth:0,height:.69444,italic:.01852,skew:0},108:{depth:0,height:.69444,italic:.0088,skew:0},109:{depth:0,height:.44444,italic:0,skew:0},110:{depth:0,height:.44444,italic:0,skew:0},111:{depth:0,height:.44444,italic:0,skew:0},112:{depth:.19444,height:.44444,italic:0,skew:0},113:{depth:.19444,height:.44444,italic:.03704,skew:0},114:{depth:0,height:.44444,italic:.03194,skew:0},115:{depth:0,height:.44444,italic:0,skew:0},116:{depth:0,height:.63492,italic:0,skew:0},117:{depth:0,height:.44444,italic:0,skew:0},118:{depth:0,height:.44444,italic:.03704,skew:0},119:{depth:0,height:.44444,italic:.02778,skew:0},120:{depth:0,height:.44444,italic:0,skew:0},121:{depth:.19444,height:.44444,italic:.03704,skew:0},122:{depth:0,height:.44444,italic:.04213,skew:0},47:{depth:.19444,height:.69444,italic:0,skew:0},65:{depth:0,height:.68611,italic:0,skew:0},66:{depth:0,height:.68611,italic:.04835,skew:0},67:{depth:0,height:.68611,italic:.06979,skew:0},68:{depth:0,height:.68611,italic:.03194,skew:0},69:{depth:0,height:.68611,italic:.05451,skew:0},70:{depth:0,height:.68611,italic:.15972,skew:0},71:{depth:0,height:.68611,italic:0,skew:0},72:{depth:0,height:.68611,italic:.08229,skew:0},73:{depth:0,height:.68611,italic:.07778,skew:0},74:{depth:0,height:.68611,italic:.10069,skew:0},75:{depth:0,height:.68611,italic:.06979,skew:0},76:{depth:0,height:.68611,italic:0,skew:0},77:{depth:0,height:.68611,italic:.11424,skew:0},78:{depth:0,height:.68611,italic:.11424,skew:0},79:{depth:0,height:.68611,italic:.03194,skew:0},80:{depth:0,height:.68611,italic:.15972,skew:0},81:{depth:.19444,height:.68611,italic:0,skew:0},82:{depth:0,height:.68611,italic:.00421,skew:0},83:{depth:0,height:.68611,italic:.05382,skew:0},84:{depth:0,height:.68611,italic:.15972,skew:0},85:{depth:0,height:.68611,italic:.11424,skew:0},86:{depth:0,height:.68611,italic:.25555,skew:0},87:{depth:0,height:.68611,italic:.15972,skew:0},88:{depth:0,height:.68611,italic:.07778,skew:0},89:{depth:0,height:.68611,italic:.25555,skew:0},90:{depth:0,height:.68611,italic:.06979,skew:0},915:{depth:0,height:.68611,italic:.15972,skew:0},916:{depth:0,height:.68611,italic:0,skew:0},920:{depth:0,height:.68611,italic:.03194,skew:0},923:{depth:0,height:.68611,italic:0,skew:0},926:{depth:0,height:.68611,italic:.07458,skew:0},928:{depth:0,height:.68611,italic:.08229,skew:0},931:{depth:0,height:.68611,italic:.05451,skew:0},933:{depth:0,height:.68611,italic:.15972,skew:0},934:{depth:0,height:.68611,italic:0,skew:0},936:{depth:0,height:.68611,italic:.11653,skew:0},937:{depth:0,height:.68611,italic:.04835,skew:0},945:{depth:0,height:.44444,italic:0,skew:0},946:{depth:.19444,height:.69444,italic:.03403,skew:0},947:{depth:.19444,height:.44444,italic:.06389,skew:0},948:{depth:0,height:.69444,italic:.03819,skew:0},949:{depth:0,height:.44444,italic:0,skew:0},950:{depth:.19444,height:.69444,italic:.06215,skew:0},951:{depth:.19444,height:.44444,italic:.03704,skew:0},952:{depth:0,height:.69444,italic:.03194,skew:0},953:{depth:0,height:.44444,italic:0,skew:0},954:{depth:0,height:.44444,italic:0,skew:0},955:{depth:0,height:.69444,italic:0,skew:0},956:{depth:.19444,height:.44444,italic:0,skew:0},957:{depth:0,height:.44444,italic:.06898,skew:0},958:{depth:.19444,height:.69444,italic:.03021,skew:0},959:{depth:0,height:.44444,italic:0,skew:0},960:{depth:0,height:.44444,italic:.03704,skew:0},961:{depth:.19444,height:.44444,italic:0,skew:0},962:{depth:.09722,height:.44444,italic:.07917,skew:0},963:{depth:0,height:.44444,italic:.03704,skew:0},964:{depth:0,height:.44444,italic:.13472,skew:0},965:{depth:0,height:.44444,italic:.03704,skew:0},966:{depth:.19444,height:.44444,italic:0,skew:0},967:{depth:.19444,height:.44444,italic:0,skew:0},968:{depth:.19444,height:.69444,italic:.03704,skew:0},969:{depth:0,height:.44444,italic:.03704,skew:0},97:{depth:0,height:.44444,italic:0,skew:0},977:{depth:0,height:.69444,italic:0,skew:0},98:{depth:0,height:.69444,italic:0,skew:0},981:{depth:.19444,height:.69444,italic:0,skew:0},982:{depth:0,height:.44444,italic:.03194,skew:0},99:{depth:0,height:.44444,italic:0,skew:0}},"Math-Italic":{100:{depth:0,height:.69444,italic:0,skew:.16667},1009:{depth:.19444,height:.43056,italic:0,skew:.08334},101:{depth:0,height:.43056,italic:0,skew:.05556},1013:{depth:0,height:.43056,italic:0,skew:.05556},102:{depth:.19444,height:.69444,italic:.10764,skew:.16667},103:{depth:.19444,height:.43056,italic:.03588,skew:.02778},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.65952,italic:0,skew:0},106:{depth:.19444,height:.65952,italic:.05724,skew:0},107:{depth:0,height:.69444,italic:.03148,skew:0},108:{depth:0,height:.69444,italic:.01968,skew:.08334},109:{depth:0,height:.43056,italic:0,skew:0},110:{depth:0,height:.43056,italic:0,skew:0},111:{depth:0,height:.43056,italic:0,skew:.05556},112:{depth:.19444,height:.43056,italic:0,skew:.08334},113:{depth:.19444,height:.43056,italic:.03588,skew:.08334},114:{depth:0,height:.43056,italic:.02778,skew:.05556},115:{depth:0,height:.43056,italic:0,skew:.05556},116:{depth:0,height:.61508,italic:0,skew:.08334},117:{depth:0,height:.43056,italic:0,skew:.02778},118:{depth:0,height:.43056,italic:.03588,skew:.02778},119:{depth:0,height:.43056,italic:.02691,skew:.08334},120:{depth:0,height:.43056,italic:0,skew:.02778},121:{depth:.19444,height:.43056,italic:.03588,skew:.05556},122:{depth:0,height:.43056,italic:.04398,skew:.05556},47:{depth:.19444,height:.69444,italic:0,skew:0},65:{depth:0,height:.68333,italic:0,skew:.13889},66:{depth:0,height:.68333,italic:.05017,skew:.08334},67:{depth:0,height:.68333,italic:.07153,skew:.08334},68:{depth:0,height:.68333,italic:.02778,skew:.05556},69:{depth:0,height:.68333,italic:.05764,skew:.08334},70:{depth:0,height:.68333,italic:.13889,skew:.08334},71:{depth:0,height:.68333,italic:0,skew:.08334},72:{depth:0,height:.68333,italic:.08125,skew:.05556},73:{depth:0,height:.68333,italic:.07847,skew:.11111},74:{depth:0,height:.68333,italic:.09618,skew:.16667},75:{depth:0,height:.68333,italic:.07153,skew:.05556},76:{depth:0,height:.68333,italic:0,skew:.02778},77:{depth:0,height:.68333,italic:.10903,skew:.08334},78:{depth:0,height:.68333,italic:.10903,skew:.08334},79:{depth:0,height:.68333,italic:.02778,skew:.08334},80:{depth:0,height:.68333,italic:.13889,skew:.08334},81:{depth:.19444,height:.68333,italic:0,skew:.08334},82:{depth:0,height:.68333,italic:.00773,skew:.08334},83:{depth:0,height:.68333,italic:.05764,skew:.08334},84:{depth:0,height:.68333,italic:.13889,skew:.08334},85:{depth:0,height:.68333,italic:.10903,skew:.02778},86:{depth:0,height:.68333,italic:.22222,skew:0},87:{depth:0,height:.68333,italic:.13889,skew:0},88:{depth:0,height:.68333,italic:.07847,skew:.08334},89:{depth:0,height:.68333,italic:.22222,skew:0},90:{depth:0,height:.68333,italic:.07153,skew:.08334},915:{depth:0,height:.68333,italic:.13889,skew:.08334},916:{depth:0,height:.68333,italic:0,skew:.16667},920:{depth:0,height:.68333,italic:.02778,skew:.08334},923:{depth:0,height:.68333,italic:0,skew:.16667},926:{depth:0,height:.68333,italic:.07569,skew:.08334},928:{depth:0,height:.68333,italic:.08125,skew:.05556},931:{depth:0,height:.68333,italic:.05764,skew:.08334},933:{depth:0,height:.68333,italic:.13889,skew:.05556},934:{depth:0,height:.68333,italic:0,skew:.08334},936:{depth:0,height:.68333,italic:.11,skew:.05556},937:{depth:0,height:.68333,italic:.05017,skew:.08334},945:{depth:0,height:.43056,italic:.0037,skew:.02778},946:{depth:.19444,height:.69444,italic:.05278,skew:.08334},947:{depth:.19444,height:.43056,italic:.05556,skew:0},948:{depth:0,height:.69444,italic:.03785,skew:.05556},949:{depth:0,height:.43056,italic:0,skew:.08334},950:{depth:.19444,height:.69444,italic:.07378,skew:.08334},951:{depth:.19444,height:.43056,italic:.03588,skew:.05556},952:{depth:0,height:.69444,italic:.02778,skew:.08334},953:{depth:0,height:.43056,italic:0,skew:.05556},954:{depth:0,height:.43056,italic:0,skew:0},955:{depth:0,height:.69444,italic:0,skew:0},956:{depth:.19444,height:.43056,italic:0,skew:.02778},957:{depth:0,height:.43056,italic:.06366,skew:.02778},958:{depth:.19444,height:.69444,italic:.04601,skew:.11111},959:{depth:0,height:.43056,italic:0,skew:.05556},960:{depth:0,height:.43056,italic:.03588,skew:0},961:{depth:.19444,height:.43056,italic:0,skew:.08334},962:{depth:.09722,height:.43056,italic:.07986,skew:.08334},963:{depth:0,height:.43056,italic:.03588,skew:0},964:{depth:0,height:.43056,italic:.1132,skew:.02778},965:{depth:0,height:.43056,italic:.03588,skew:.02778},966:{depth:.19444,height:.43056,italic:0,skew:.08334},967:{depth:.19444,height:.43056,italic:0,skew:.05556},968:{depth:.19444,height:.69444,italic:.03588,skew:.11111},969:{depth:0,height:.43056,italic:.03588,skew:0},97:{depth:0,height:.43056,italic:0,skew:0},977:{depth:0,height:.69444,italic:0,skew:.08334},98:{depth:0,height:.69444,italic:0,skew:0},981:{depth:.19444,height:.69444,italic:0,skew:.08334},982:{depth:0,height:.43056,italic:.02778,skew:0},99:{depth:0,height:.43056,italic:0,skew:.05556}},"Math-Regular":{100:{depth:0,height:.69444,italic:0,skew:.16667},1009:{depth:.19444,height:.43056,italic:0,skew:.08334},101:{depth:0,height:.43056,italic:0,skew:.05556},1013:{depth:0,height:.43056,italic:0,skew:.05556},102:{depth:.19444,height:.69444,italic:.10764,skew:.16667},103:{depth:.19444,height:.43056,italic:.03588,skew:.02778},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.65952,italic:0,skew:0},106:{depth:.19444,height:.65952,italic:.05724,skew:0},107:{depth:0,height:.69444,italic:.03148,skew:0},108:{depth:0,height:.69444,italic:.01968,skew:.08334},109:{depth:0,height:.43056,italic:0,skew:0},110:{depth:0,height:.43056,italic:0,skew:0},111:{depth:0,height:.43056,italic:0,skew:.05556},112:{depth:.19444,height:.43056,italic:0,skew:.08334},113:{depth:.19444,height:.43056,italic:.03588,skew:.08334},114:{depth:0,height:.43056,italic:.02778,skew:.05556},115:{depth:0,height:.43056,italic:0,skew:.05556},116:{depth:0,height:.61508,italic:0,skew:.08334},117:{depth:0,height:.43056,italic:0,skew:.02778},118:{depth:0,height:.43056,italic:.03588,skew:.02778},119:{depth:0,height:.43056,italic:.02691,skew:.08334},120:{depth:0,height:.43056,italic:0,skew:.02778},121:{depth:.19444,height:.43056,italic:.03588,skew:.05556},122:{depth:0,height:.43056,italic:.04398,skew:.05556},65:{depth:0,height:.68333,italic:0,skew:.13889},66:{depth:0,height:.68333,italic:.05017,skew:.08334},67:{depth:0,height:.68333,italic:.07153,skew:.08334},68:{depth:0,height:.68333,italic:.02778,skew:.05556},69:{depth:0,height:.68333,italic:.05764,skew:.08334},70:{depth:0,height:.68333,italic:.13889,skew:.08334},71:{depth:0,height:.68333,italic:0,skew:.08334},72:{depth:0,height:.68333,italic:.08125,skew:.05556},73:{depth:0,height:.68333,italic:.07847,skew:.11111},74:{depth:0,height:.68333,italic:.09618,skew:.16667},75:{depth:0,height:.68333,italic:.07153,skew:.05556},76:{depth:0,height:.68333,italic:0,skew:.02778},77:{depth:0,height:.68333,italic:.10903,skew:.08334},78:{depth:0,height:.68333,italic:.10903,skew:.08334},79:{depth:0,height:.68333,italic:.02778,skew:.08334},80:{depth:0,height:.68333,italic:.13889,skew:.08334},81:{depth:.19444,height:.68333,italic:0,skew:.08334},82:{depth:0,height:.68333,italic:.00773,skew:.08334},83:{depth:0,height:.68333,italic:.05764,skew:.08334},84:{depth:0,height:.68333,italic:.13889,skew:.08334},85:{depth:0,height:.68333,italic:.10903,skew:.02778},86:{depth:0,height:.68333,italic:.22222,skew:0},87:{depth:0,height:.68333,italic:.13889,skew:0},88:{depth:0,height:.68333,italic:.07847,skew:.08334},89:{depth:0,height:.68333,italic:.22222,skew:0},90:{depth:0,height:.68333,italic:.07153,skew:.08334},915:{depth:0,height:.68333,italic:.13889,skew:.08334},916:{depth:0,height:.68333,italic:0,skew:.16667},920:{depth:0,height:.68333,italic:.02778,skew:.08334},923:{depth:0,height:.68333,italic:0,skew:.16667},926:{depth:0,height:.68333,italic:.07569,skew:.08334},928:{depth:0,height:.68333,italic:.08125,skew:.05556},931:{depth:0,height:.68333,italic:.05764,skew:.08334},933:{depth:0,height:.68333,italic:.13889,skew:.05556},934:{depth:0,height:.68333,italic:0,skew:.08334},936:{depth:0,height:.68333,italic:.11,skew:.05556},937:{depth:0,height:.68333,italic:.05017,skew:.08334},945:{depth:0,height:.43056,italic:.0037,skew:.02778},946:{depth:.19444,height:.69444,italic:.05278,skew:.08334},947:{depth:.19444,height:.43056,italic:.05556,skew:0},948:{depth:0,height:.69444,italic:.03785,skew:.05556},949:{depth:0,height:.43056,italic:0,skew:.08334},950:{depth:.19444,height:.69444,italic:.07378,skew:.08334},951:{depth:.19444,height:.43056,italic:.03588,skew:.05556},952:{depth:0,height:.69444,italic:.02778,skew:.08334},953:{depth:0,height:.43056,italic:0,skew:.05556},954:{depth:0,height:.43056,italic:0,skew:0},955:{depth:0,height:.69444,italic:0,skew:0},956:{depth:.19444,height:.43056,italic:0,skew:.02778},957:{depth:0,height:.43056,italic:.06366,skew:.02778},958:{depth:.19444,height:.69444,italic:.04601,skew:.11111},959:{depth:0,height:.43056,italic:0,skew:.05556},960:{depth:0,height:.43056,italic:.03588,skew:0},961:{depth:.19444,height:.43056,italic:0,skew:.08334},962:{depth:.09722,height:.43056,italic:.07986,skew:.08334},963:{depth:0,height:.43056,italic:.03588,skew:0},964:{depth:0,height:.43056,italic:.1132,skew:.02778},965:{depth:0,height:.43056,italic:.03588,skew:.02778},966:{depth:.19444,height:.43056,italic:0,skew:.08334},967:{depth:.19444,height:.43056,italic:0,skew:.05556},968:{depth:.19444,height:.69444,italic:.03588,skew:.11111},969:{depth:0,height:.43056,italic:.03588,skew:0},97:{depth:0,height:.43056,italic:0,skew:0},977:{depth:0,height:.69444,italic:0,skew:.08334},98:{depth:0,height:.69444,italic:0,skew:0},981:{depth:.19444,height:.69444,italic:0,skew:.08334},982:{depth:0,height:.43056,italic:.02778,skew:0},99:{depth:0,height:.43056,italic:0,skew:.05556}},"Size1-Regular":{8748:{depth:.306,height:.805,italic:.19445,skew:0},8749:{depth:.306,height:.805,italic:.19445,skew:0},10216:{depth:.35001,height:.85,italic:0,skew:0},10217:{depth:.35001,height:.85,italic:0,skew:0},10752:{depth:.25001,height:.75,italic:0,skew:0},10753:{depth:.25001,height:.75,italic:0,skew:0},10754:{depth:.25001,height:.75,italic:0,skew:0},10756:{depth:.25001,height:.75,italic:0,skew:0},10758:{depth:.25001,height:.75,italic:0,skew:0},123:{depth:.35001,height:.85,italic:0,skew:0},125:{depth:.35001,height:.85,italic:0,skew:0},40:{depth:.35001,height:.85,italic:0,skew:0},41:{depth:.35001,height:.85,italic:0,skew:0},47:{depth:.35001,height:.85,italic:0,skew:0},710:{depth:0,height:.72222,italic:0,skew:0},732:{depth:0,height:.72222,italic:0,skew:0},770:{depth:0,height:.72222,italic:0,skew:0},771:{depth:0,height:.72222,italic:0,skew:0},8214:{depth:-99e-5,height:.601,italic:0,skew:0},8593:{depth:1e-5,height:.6,italic:0,skew:0},8595:{depth:1e-5,height:.6,italic:0,skew:0},8657:{depth:1e-5,height:.6,italic:0,skew:0},8659:{depth:1e-5,height:.6,italic:0,skew:0},8719:{depth:.25001,height:.75,italic:0,skew:0},8720:{depth:.25001,height:.75,italic:0,skew:0},8721:{depth:.25001,height:.75,italic:0,skew:0},8730:{depth:.35001,height:.85,italic:0,skew:0},8739:{depth:-.00599,height:.606,italic:0,skew:0},8741:{depth:-.00599,height:.606,italic:0,skew:0},8747:{depth:.30612,height:.805,italic:.19445,skew:0},8750:{depth:.30612,height:.805,italic:.19445,skew:0},8896:{depth:.25001,height:.75,italic:0,skew:0},8897:{depth:.25001,height:.75,italic:0,skew:0},8898:{depth:.25001,height:.75,italic:0,skew:0},8899:{depth:.25001,height:.75,italic:0,skew:0},8968:{depth:.35001,height:.85,italic:0,skew:0},8969:{depth:.35001,height:.85,italic:0,skew:0},8970:{depth:.35001,height:.85,italic:0,skew:0},8971:{depth:.35001,height:.85,italic:0,skew:0},91:{depth:.35001,height:.85,italic:0,skew:0},9168:{depth:-99e-5,height:.601,italic:0,skew:0},92:{depth:.35001,height:.85,italic:0,skew:0},93:{depth:.35001,height:.85,italic:0,skew:0}},"Size2-Regular":{8748:{depth:.862,height:1.36,italic:.44445,skew:0},8749:{depth:.862,height:1.36,italic:.44445,skew:0},10216:{depth:.65002,height:1.15,italic:0,skew:0},10217:{depth:.65002,height:1.15,italic:0,skew:0},10752:{depth:.55001,height:1.05,italic:0,skew:0},10753:{depth:.55001,height:1.05,italic:0,skew:0},10754:{depth:.55001,height:1.05,italic:0,skew:0},10756:{depth:.55001,height:1.05,italic:0,skew:0},10758:{depth:.55001,height:1.05,italic:0,skew:0},123:{depth:.65002,height:1.15,italic:0,skew:0},125:{depth:.65002,height:1.15,italic:0,skew:0},40:{depth:.65002,height:1.15,italic:0,skew:0},41:{depth:.65002,height:1.15,italic:0,skew:0},47:{depth:.65002,height:1.15,italic:0,skew:0},710:{depth:0,height:.75,italic:0,skew:0},732:{depth:0,height:.75,italic:0,skew:0},770:{depth:0,height:.75,italic:0,skew:0},771:{depth:0,height:.75,italic:0,skew:0},8719:{depth:.55001,height:1.05,italic:0,skew:0},8720:{depth:.55001,height:1.05,italic:0,skew:0},8721:{depth:.55001,height:1.05,italic:0,skew:0},8730:{depth:.65002,height:1.15,italic:0,skew:0},8747:{depth:.86225,height:1.36,italic:.44445,skew:0},8750:{depth:.86225,height:1.36,italic:.44445,skew:0},8896:{depth:.55001,height:1.05,italic:0,skew:0},8897:{depth:.55001,height:1.05,italic:0,skew:0},8898:{depth:.55001,height:1.05,italic:0,skew:0},8899:{depth:.55001,height:1.05,italic:0,skew:0},8968:{depth:.65002,height:1.15,italic:0,skew:0},8969:{depth:.65002,height:1.15,italic:0,skew:0},8970:{depth:.65002,height:1.15,italic:0,skew:0},8971:{depth:.65002,height:1.15,italic:0,skew:0},91:{depth:.65002,height:1.15,italic:0,skew:0},92:{depth:.65002,height:1.15,italic:0,skew:0},93:{depth:.65002,height:1.15,italic:0,skew:0}},"Size3-Regular":{10216:{depth:.95003,height:1.45,italic:0,skew:0},10217:{depth:.95003,height:1.45,italic:0,skew:0},123:{depth:.95003,height:1.45,italic:0,skew:0},125:{depth:.95003,height:1.45,italic:0,skew:0},40:{depth:.95003,height:1.45,italic:0,skew:0},41:{depth:.95003,height:1.45,italic:0,skew:0},47:{depth:.95003,height:1.45,italic:0,skew:0},710:{depth:0,height:.75,italic:0,skew:0},732:{depth:0,height:.75,italic:0,skew:0},770:{depth:0,height:.75,italic:0,skew:0},771:{depth:0,height:.75,italic:0,skew:0},8730:{depth:.95003,height:1.45,italic:0,skew:0},8968:{depth:.95003,height:1.45,italic:0,skew:0},8969:{depth:.95003,height:1.45,italic:0,skew:0},8970:{depth:.95003,height:1.45,italic:0,skew:0},8971:{depth:.95003,height:1.45,italic:0,skew:0},91:{depth:.95003,height:1.45,italic:0,skew:0},92:{depth:.95003,height:1.45,italic:0,skew:0},93:{depth:.95003,height:1.45,italic:0,skew:0}},"Size4-Regular":{10216:{depth:1.25003,height:1.75,italic:0,skew:0},10217:{depth:1.25003,height:1.75,italic:0,skew:0},123:{depth:1.25003,height:1.75,italic:0,skew:0},125:{depth:1.25003,height:1.75,italic:0,skew:0},40:{depth:1.25003,height:1.75,italic:0,skew:0},41:{depth:1.25003,height:1.75,italic:0,skew:0},47:{depth:1.25003,height:1.75,italic:0,skew:0},57344:{depth:-.00499,height:.605,italic:0,skew:0},57345:{depth:-.00499,height:.605,italic:0,skew:0},57680:{depth:0,height:.12,italic:0,skew:0},57681:{depth:0,height:.12,italic:0,skew:0},57682:{depth:0,height:.12,italic:0,skew:0},57683:{depth:0,height:.12,italic:0,skew:0},710:{depth:0,height:.825,italic:0,skew:0},732:{depth:0,height:.825,italic:0,skew:0},770:{depth:0,height:.825,italic:0,skew:0},771:{depth:0,height:.825,italic:0,skew:0},8730:{depth:1.25003,height:1.75,italic:0,skew:0},8968:{depth:1.25003,height:1.75,italic:0,skew:0},8969:{depth:1.25003,height:1.75,italic:0,skew:0},8970:{depth:1.25003,height:1.75,italic:0,skew:0},8971:{depth:1.25003,height:1.75,italic:0,skew:0},91:{depth:1.25003,height:1.75,italic:0,skew:0},9115:{depth:.64502,height:1.155,italic:0,skew:0},9116:{depth:1e-5,height:.6,italic:0,skew:0},9117:{depth:.64502,height:1.155,italic:0,skew:0},9118:{depth:.64502,height:1.155,italic:0,skew:0},9119:{depth:1e-5,height:.6,italic:0,skew:0},9120:{depth:.64502,height:1.155,italic:0,skew:0},9121:{depth:.64502,height:1.155,italic:0,skew:0},9122:{depth:-99e-5,height:.601,italic:0,skew:0},9123:{depth:.64502,height:1.155,italic:0,skew:0},9124:{depth:.64502,height:1.155,italic:0,skew:0},9125:{depth:-99e-5,height:.601,italic:0,skew:0},9126:{depth:.64502,height:1.155,italic:0,skew:0},9127:{depth:1e-5,height:.9,italic:0,skew:0},9128:{depth:.65002,height:1.15,italic:0,skew:0},9129:{depth:.90001,height:0,italic:0,skew:0},9130:{depth:0,height:.3,italic:0,skew:0},9131:{depth:1e-5,height:.9,italic:0,skew:0},9132:{depth:.65002,height:1.15,italic:0,skew:0},9133:{depth:.90001,height:0,italic:0,skew:0},9143:{depth:.88502,height:.915,italic:0,skew:0},92:{depth:1.25003,height:1.75,italic:0,skew:0},93:{depth:1.25003,height:1.75,italic:0,skew:0}}};
var V=function(e,t){return H[t][e.charCodeAt(0)]};t.exports={metrics:X,getCharacterMetrics:V}},{"./Style":6}],12:[function(e,t,i){var h=e("./utils");var a=e("./ParseError");var l={"\\sqrt":{numArgs:1,numOptionalArgs:1,handler:function(e,t,i,h){if(t!=null){throw new a("Optional arguments to \\sqrt aren't supported yet",this.lexer,h[1]-1)}return{type:"sqrt",body:i}}},"\\text":{numArgs:1,argTypes:["text"],greediness:2,handler:function(e,t){var i;if(t.type==="ordgroup"){i=t.value}else{i=[t]}return{type:"text",body:i}}},"\\color":{numArgs:2,allowedInText:true,argTypes:["color","original"],handler:function(e,t,i){var h;if(i.type==="ordgroup"){h=i.value}else{h=[i]}return{type:"color",color:t.value,value:h}}},"\\overline":{numArgs:1,handler:function(e,t){return{type:"overline",body:t}}},"\\rule":{numArgs:2,numOptionalArgs:1,argTypes:["size","size","size"],handler:function(e,t,i,h){return{type:"rule",shift:t&&t.value,width:i.value,height:h.value}}},"\\KaTeX":{numArgs:0,handler:function(e){return{type:"katex"}}}};var s={"\\bigl":{type:"open",size:1},"\\Bigl":{type:"open",size:2},"\\biggl":{type:"open",size:3},"\\Biggl":{type:"open",size:4},"\\bigr":{type:"close",size:1},"\\Bigr":{type:"close",size:2},"\\biggr":{type:"close",size:3},"\\Biggr":{type:"close",size:4},"\\bigm":{type:"rel",size:1},"\\Bigm":{type:"rel",size:2},"\\biggm":{type:"rel",size:3},"\\Biggm":{type:"rel",size:4},"\\big":{type:"textord",size:1},"\\Big":{type:"textord",size:2},"\\bigg":{type:"textord",size:3},"\\Bigg":{type:"textord",size:4}};var r=["(",")","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","\\lceil","\\rceil","<",">","\\langle","\\rangle","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."];var p=[{funcs:["\\blue","\\orange","\\pink","\\red","\\green","\\gray","\\purple"],data:{numArgs:1,allowedInText:true,handler:function(e,t){var i;if(t.type==="ordgroup"){i=t.value}else{i=[t]}return{type:"color",color:"katex-"+e.slice(1),value:i}}}},{funcs:["\\arcsin","\\arccos","\\arctan","\\arg","\\cos","\\cosh","\\cot","\\coth","\\csc","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\tan","\\tanh"],data:{numArgs:0,handler:function(e){return{type:"op",limits:false,symbol:false,body:e}}}},{funcs:["\\det","\\gcd","\\inf","\\lim","\\liminf","\\limsup","\\max","\\min","\\Pr","\\sup"],data:{numArgs:0,handler:function(e){return{type:"op",limits:true,symbol:false,body:e}}}},{funcs:["\\int","\\iint","\\iiint","\\oint"],data:{numArgs:0,handler:function(e){return{type:"op",limits:false,symbol:true,body:e}}}},{funcs:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint"],data:{numArgs:0,handler:function(e){return{type:"op",limits:true,symbol:true,body:e}}}},{funcs:["\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom"],data:{numArgs:2,greediness:2,handler:function(e,t,i){var h;var a=null;var l=null;var s="auto";switch(e){case"\\dfrac":case"\\frac":case"\\tfrac":h=true;break;case"\\dbinom":case"\\binom":case"\\tbinom":h=false;a="(";l=")";break;default:throw new Error("Unrecognized genfrac command")}switch(e){case"\\dfrac":case"\\dbinom":s="display";break;case"\\tfrac":case"\\tbinom":s="text";break}return{type:"genfrac",numer:t,denom:i,hasBarLine:h,leftDelim:a,rightDelim:l,size:s}}}},{funcs:["\\llap","\\rlap"],data:{numArgs:1,allowedInText:true,handler:function(e,t){return{type:e.slice(1),body:t}}}},{funcs:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg","\\left","\\right"],data:{numArgs:1,handler:function(e,t,i){if(!h.contains(r,t.value)){throw new a("Invalid delimiter: '"+t.value+"' after '"+e+"'",this.lexer,i[1])}if(e==="\\left"||e==="\\right"){return{type:"leftright",value:t.value}}else{return{type:"delimsizing",size:s[e].size,delimType:s[e].type,value:t.value}}}}},{funcs:["\\tiny","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],data:{numArgs:0}},{funcs:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],data:{numArgs:0}},{funcs:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot"],data:{numArgs:1,handler:function(e,t){return{type:"accent",accent:e,base:t}}}},{funcs:["\\over","\\choose"],data:{numArgs:0,handler:function(e){var t;switch(e){case"\\over":t="\\frac";break;case"\\choose":t="\\binom";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",replaceWith:t}}}}];var c=function(e,t){for(var i=0;i<e.length;i++){l[e[i]]=t}};for(var g=0;g<p.length;g++){c(p[g].funcs,p[g].data)}var d=function(e){if(l[e].greediness===undefined){return 1}else{return l[e].greediness}};for(var n in l){if(l.hasOwnProperty(n)){var o=l[n];l[n]={numArgs:o.numArgs,argTypes:o.argTypes,greediness:o.greediness===undefined?1:o.greediness,allowedInText:o.allowedInText?o.allowedInText:false,numOptionalArgs:o.numOptionalArgs===undefined?0:o.numOptionalArgs,handler:o.handler}}}t.exports={funcs:l,getGreediness:d}},{"./ParseError":4,"./utils":15}],13:[function(e,t,i){var h=e("./Parser");var a=function(e){var t=new h(e);return t.parse()};t.exports=a},{"./Parser":5}],14:[function(e,t,i){var h={math:{"`":{font:"main",group:"textord",replace:"\u2018"},"\\$":{font:"main",group:"textord",replace:"$"},"\\%":{font:"main",group:"textord",replace:"%"},"\\_":{font:"main",group:"textord",replace:"_"},"\\angle":{font:"main",group:"textord",replace:"\u2220"},"\\infty":{font:"main",group:"textord",replace:"\u221e"},"\\prime":{font:"main",group:"textord",replace:"\u2032"},"\\triangle":{font:"main",group:"textord",replace:"\u25b3"},"\\Gamma":{font:"main",group:"textord",replace:"\u0393"},"\\Delta":{font:"main",group:"textord",replace:"\u0394"},"\\Theta":{font:"main",group:"textord",replace:"\u0398"},"\\Lambda":{font:"main",group:"textord",replace:"\u039b"},"\\Xi":{font:"main",group:"textord",replace:"\u039e"},"\\Pi":{font:"main",group:"textord",replace:"\u03a0"},"\\Sigma":{font:"main",group:"textord",replace:"\u03a3"},"\\Upsilon":{font:"main",group:"textord",replace:"\u03a5"},"\\Phi":{font:"main",group:"textord",replace:"\u03a6"},"\\Psi":{font:"main",group:"textord",replace:"\u03a8"},"\\Omega":{font:"main",group:"textord",replace:"\u03a9"},"\\neg":{font:"main",group:"textord",replace:"\xac"},"\\lnot":{font:"main",group:"textord",replace:"\xac"},"\\top":{font:"main",group:"textord",replace:"\u22a4"},"\\bot":{font:"main",group:"textord",replace:"\u22a5"},"\\emptyset":{font:"main",group:"textord",replace:"\u2205"},"\\varnothing":{font:"ams",group:"textord",replace:"\u2205"},"\\alpha":{font:"main",group:"mathord",replace:"\u03b1"},"\\beta":{font:"main",group:"mathord",replace:"\u03b2"},"\\gamma":{font:"main",group:"mathord",replace:"\u03b3"},"\\delta":{font:"main",group:"mathord",replace:"\u03b4"},"\\epsilon":{font:"main",group:"mathord",replace:"\u03f5"},"\\zeta":{font:"main",group:"mathord",replace:"\u03b6"},"\\eta":{font:"main",group:"mathord",replace:"\u03b7"},"\\theta":{font:"main",group:"mathord",replace:"\u03b8"},"\\iota":{font:"main",group:"mathord",replace:"\u03b9"},"\\kappa":{font:"main",group:"mathord",replace:"\u03ba"},"\\lambda":{font:"main",group:"mathord",replace:"\u03bb"},"\\mu":{font:"main",group:"mathord",replace:"\u03bc"},"\\nu":{font:"main",group:"mathord",replace:"\u03bd"},"\\xi":{font:"main",group:"mathord",replace:"\u03be"},"\\omicron":{font:"main",group:"mathord",replace:"o"},"\\pi":{font:"main",group:"mathord",replace:"\u03c0"},"\\rho":{font:"main",group:"mathord",replace:"\u03c1"},"\\sigma":{font:"main",group:"mathord",replace:"\u03c3"},"\\tau":{font:"main",group:"mathord",replace:"\u03c4"},"\\upsilon":{font:"main",group:"mathord",replace:"\u03c5"},"\\phi":{font:"main",group:"mathord",replace:"\u03d5"},"\\chi":{font:"main",group:"mathord",replace:"\u03c7"},"\\psi":{font:"main",group:"mathord",replace:"\u03c8"},"\\omega":{font:"main",group:"mathord",replace:"\u03c9"},"\\varepsilon":{font:"main",group:"mathord",replace:"\u03b5"},"\\vartheta":{font:"main",group:"mathord",replace:"\u03d1"},"\\varpi":{font:"main",group:"mathord",replace:"\u03d6"},"\\varrho":{font:"main",group:"mathord",replace:"\u03f1"},"\\varsigma":{font:"main",group:"mathord",replace:"\u03c2"},"\\varphi":{font:"main",group:"mathord",replace:"\u03c6"},"*":{font:"main",group:"bin",replace:"\u2217"},"+":{font:"main",group:"bin"},"-":{font:"main",group:"bin",replace:"\u2212"},"\\cdot":{font:"main",group:"bin",replace:"\u22c5"},"\\circ":{font:"main",group:"bin",replace:"\u2218"},"\\div":{font:"main",group:"bin",replace:"\xf7"},"\\pm":{font:"main",group:"bin",replace:"\xb1"},"\\times":{font:"main",group:"bin",replace:"\xd7"},"\\cap":{font:"main",group:"bin",replace:"\u2229"},"\\cup":{font:"main",group:"bin",replace:"\u222a"},"\\setminus":{font:"main",group:"bin",replace:"\u2216"},"\\land":{font:"main",group:"bin",replace:"\u2227"},"\\lor":{font:"main",group:"bin",replace:"\u2228"},"\\wedge":{font:"main",group:"bin",replace:"\u2227"},"\\vee":{font:"main",group:"bin",replace:"\u2228"},"\\surd":{font:"main",group:"textord",replace:"\u221a"},"(":{font:"main",group:"open"},"[":{font:"main",group:"open"},"\\langle":{font:"main",group:"open",replace:"\u27e8"},"\\lvert":{font:"main",group:"open",replace:"\u2223"},")":{font:"main",group:"close"},"]":{font:"main",group:"close"},"?":{font:"main",group:"close"},"!":{font:"main",group:"close"},"\\rangle":{font:"main",group:"close",replace:"\u27e9"},"\\rvert":{font:"main",group:"close",replace:"\u2223"},"=":{font:"main",group:"rel"},"<":{font:"main",group:"rel"},">":{font:"main",group:"rel"},":":{font:"main",group:"rel"},"\\approx":{font:"main",group:"rel",replace:"\u2248"},"\\cong":{font:"main",group:"rel",replace:"\u2245"},"\\ge":{font:"main",group:"rel",replace:"\u2265"},"\\geq":{font:"main",group:"rel",replace:"\u2265"},"\\gets":{font:"main",group:"rel",replace:"\u2190"},"\\in":{font:"main",group:"rel",replace:"\u2208"},"\\notin":{font:"main",group:"rel",replace:"\u2209"},"\\subset":{font:"main",group:"rel",replace:"\u2282"},"\\supset":{font:"main",group:"rel",replace:"\u2283"},"\\subseteq":{font:"main",group:"rel",replace:"\u2286"},"\\supseteq":{font:"main",group:"rel",replace:"\u2287"},"\\nsubseteq":{font:"ams",group:"rel",replace:"\u2288"},"\\nsupseteq":{font:"ams",group:"rel",replace:"\u2289"},"\\models":{font:"main",group:"rel",replace:"\u22a8"},"\\leftarrow":{font:"main",group:"rel",replace:"\u2190"},"\\le":{font:"main",group:"rel",replace:"\u2264"},"\\leq":{font:"main",group:"rel",replace:"\u2264"},"\\ne":{font:"main",group:"rel",replace:"\u2260"},"\\neq":{font:"main",group:"rel",replace:"\u2260"},"\\rightarrow":{font:"main",group:"rel",replace:"\u2192"},"\\to":{font:"main",group:"rel",replace:"\u2192"},"\\ngeq":{font:"ams",group:"rel",replace:"\u2271"},"\\nleq":{font:"ams",group:"rel",replace:"\u2270"},"\\!":{font:"main",group:"spacing"},"\\ ":{font:"main",group:"spacing",replace:"\xa0"},"~":{font:"main",group:"spacing",replace:"\xa0"},"\\,":{font:"main",group:"spacing"},"\\:":{font:"main",group:"spacing"},"\\;":{font:"main",group:"spacing"},"\\enspace":{font:"main",group:"spacing"},"\\qquad":{font:"main",group:"spacing"},"\\quad":{font:"main",group:"spacing"},"\\space":{font:"main",group:"spacing",replace:"\xa0"},",":{font:"main",group:"punct"},";":{font:"main",group:"punct"},"\\colon":{font:"main",group:"punct",replace:":"},"\\barwedge":{font:"ams",group:"textord",replace:"\u22bc"},"\\veebar":{font:"ams",group:"textord",replace:"\u22bb"},"\\odot":{font:"main",group:"textord",replace:"\u2299"},"\\oplus":{font:"main",group:"textord",replace:"\u2295"},"\\otimes":{font:"main",group:"textord",replace:"\u2297"},"\\partial":{font:"main",group:"textord",replace:"\u2202"},"\\oslash":{font:"main",group:"textord",replace:"\u2298"},"\\circledcirc":{font:"ams",group:"textord",replace:"\u229a"},"\\boxdot":{font:"ams",group:"textord",replace:"\u22a1"},"\\bigtriangleup":{font:"main",group:"textord",replace:"\u25b3"},"\\bigtriangledown":{font:"main",group:"textord",replace:"\u25bd"},"\\dagger":{font:"main",group:"textord",replace:"\u2020"},"\\diamond":{font:"main",group:"textord",replace:"\u22c4"},"\\star":{font:"main",group:"textord",replace:"\u22c6"},"\\triangleleft":{font:"main",group:"textord",replace:"\u25c3"},"\\triangleright":{font:"main",group:"textord",replace:"\u25b9"},"\\{":{font:"main",group:"open",replace:"{"},"\\}":{font:"main",group:"close",replace:"}"},"\\lbrace":{font:"main",group:"open",replace:"{"},"\\rbrace":{font:"main",group:"close",replace:"}"},"\\lbrack":{font:"main",group:"open",replace:"["},"\\rbrack":{font:"main",group:"close",replace:"]"},"\\lfloor":{font:"main",group:"open",replace:"\u230a"},"\\rfloor":{font:"main",group:"close",replace:"\u230b"},"\\lceil":{font:"main",group:"open",replace:"\u2308"},"\\rceil":{font:"main",group:"close",replace:"\u2309"},"\\backslash":{font:"main",group:"textord",replace:"\\"},"|":{font:"main",group:"textord",replace:"\u2223"},"\\vert":{font:"main",group:"textord",replace:"\u2223"},"\\|":{font:"main",group:"textord",replace:"\u2225"},"\\Vert":{font:"main",group:"textord",replace:"\u2225"},"\\uparrow":{font:"main",group:"textord",replace:"\u2191"},"\\Uparrow":{font:"main",group:"textord",replace:"\u21d1"},"\\downarrow":{font:"main",group:"textord",replace:"\u2193"},"\\Downarrow":{font:"main",group:"textord",replace:"\u21d3"},"\\updownarrow":{font:"main",group:"textord",replace:"\u2195"},"\\Updownarrow":{font:"main",group:"textord",replace:"\u21d5"},"\\coprod":{font:"math",group:"op",replace:"\u2210"},"\\bigvee":{font:"math",group:"op",replace:"\u22c1"},"\\bigwedge":{font:"math",group:"op",replace:"\u22c0"},"\\biguplus":{font:"math",group:"op",replace:"\u2a04"},"\\bigcap":{font:"math",group:"op",replace:"\u22c2"},"\\bigcup":{font:"math",group:"op",replace:"\u22c3"},"\\int":{font:"math",group:"op",replace:"\u222b"},"\\intop":{font:"math",group:"op",replace:"\u222b"},"\\iint":{font:"math",group:"op",replace:"\u222c"},"\\iiint":{font:"math",group:"op",replace:"\u222d"},"\\prod":{font:"math",group:"op",replace:"\u220f"},"\\sum":{font:"math",group:"op",replace:"\u2211"},"\\bigotimes":{font:"math",group:"op",replace:"\u2a02"},"\\bigoplus":{font:"math",group:"op",replace:"\u2a01"},"\\bigodot":{font:"math",group:"op",replace:"\u2a00"},"\\oint":{font:"math",group:"op",replace:"\u222e"},"\\bigsqcup":{font:"math",group:"op",replace:"\u2a06"},"\\smallint":{font:"math",group:"op",replace:"\u222b"},"\\ldots":{font:"main",group:"punct",replace:"\u2026"},"\\cdots":{font:"main",group:"inner",replace:"\u22ef"},"\\ddots":{font:"main",group:"inner",replace:"\u22f1"},"\\vdots":{font:"main",group:"textord",replace:"\u22ee"},"\\acute":{font:"main",group:"accent",replace:"\xb4"},"\\grave":{font:"main",group:"accent",replace:"`"},"\\ddot":{font:"main",group:"accent",replace:"\xa8"},"\\tilde":{font:"main",group:"accent",replace:"~"},"\\bar":{font:"main",group:"accent",replace:"\xaf"},"\\breve":{font:"main",group:"accent",replace:"\u02d8"},"\\check":{font:"main",group:"accent",replace:"\u02c7"},"\\hat":{font:"main",group:"accent",replace:"^"},"\\vec":{font:"main",group:"accent",replace:"\u20d7"},"\\dot":{font:"main",group:"accent",replace:"\u02d9"}},text:{"\\ ":{font:"main",group:"spacing",replace:"\xa0"}," ":{font:"main",group:"spacing",replace:"\xa0"},"~":{font:"main",group:"spacing",replace:"\xa0"}}};var a='0123456789/@."';for(var l=0;l<a.length;l++){var s=a.charAt(l);h.math[s]={font:"main",group:"textord"}}var r="0123456789`!@*()-=+[]'\";:?/.,";for(var l=0;l<r.length;l++){var s=r.charAt(l);h.text[s]={font:"main",group:"textord"}}var p="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(var l=0;l<p.length;l++){var s=p.charAt(l);h.math[s]={font:"main",group:"mathord"};h.text[s]={font:"main",group:"textord"}}t.exports=h},{}],15:[function(e,t,i){var h=Array.prototype.indexOf;var a=function(e,t){if(e==null){return-1}if(h&&e.indexOf===h){return e.indexOf(t)}var i=0,a=e.length;for(;i<a;i++){if(e[i]===t){return i}}return-1};var l=function(e,t){return a(e,t)!==-1};var s=/([A-Z])/g;var r=function(e){return e.replace(s,"-$1").toLowerCase()};var p={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"};var c=/[&><"']/g;function g(e){return p[e]}function d(e){return(""+e).replace(c,g)}var n;if(typeof document!=="undefined"){var o=document.createElement("span");if("textContent"in o){n=function(e,t){e.textContent=t}}else{n=function(e,t){e.innerText=t}}}function w(e){n(e,"")}t.exports={contains:l,escape:d,hyphenate:r,indexOf:a,setTextContent:n,clearNode:w}},{}]},{},[1])(1)});

Elm.Native.List = {};
Elm.Native.List.make = function(elm) {
    elm.Native = elm.Native || {};
    elm.Native.List = elm.Native.List || {};
    if (elm.Native.List.values) return elm.Native.List.values;
    if ('values' in Elm.Native.List)
        return elm.Native.List.values = Elm.Native.List.values;

    var Utils = Elm.Native.Utils.make(elm);

    var Nil = Utils.Nil;
    var Cons = Utils.Cons;

    function throwError(f) {
        throw new Error("Function '" + f + "' expects a non-empty list!");
    }

    function toArray(xs) {
        var out = [];
        while (xs.ctor !== '[]') {
            out.push(xs._0);
            xs = xs._1;
        }
        return out;
    }

    function fromArray(arr) {
        var out = Nil;
        for (var i = arr.length; i--; ) {
            out = Cons(arr[i], out);
        }
        return out;
    }

    function range(lo,hi) {
        var lst = Nil;
        if (lo <= hi) {
            do { lst = Cons(hi,lst) } while (hi-->lo);
        }
        return lst
    }

    function head(v) {
        return v.ctor === '[]' ? throwError('head') : v._0;
    }
    function tail(v) {
        return v.ctor === '[]' ? throwError('tail') : v._1;
    }

    function map(f, xs) {
        var arr = [];
        while (xs.ctor !== '[]') {
            arr.push(f(xs._0));
            xs = xs._1;
        }
        return fromArray(arr);
    }

    // f defined similarly for both foldl and foldr (NB: different from Haskell)
    // ie, foldl : (a -> b -> b) -> b -> [a] -> b
    function foldl(f, b, xs) {
        var acc = b;
        while (xs.ctor !== '[]') {
            acc = A2(f, xs._0, acc);
            xs = xs._1;
        }
        return acc;
    }

    function foldr(f, b, xs) {
        var arr = toArray(xs);
        var acc = b;
        for (var i = arr.length; i--; ) {
            acc = A2(f, arr[i], acc);
        }
        return acc;
    }

    function foldl1(f, xs) {
        return xs.ctor === '[]' ? throwError('foldl1') : foldl(f, xs._0, xs._1);
    }

    function foldr1(f, xs) {
        if (xs.ctor === '[]') { throwError('foldr1'); }
        var arr = toArray(xs);
        var acc = arr.pop();
        for (var i = arr.length; i--; ) {
            acc = A2(f, arr[i], acc);
        }
        return acc;
    }

    function scanl(f, b, xs) {
        var arr = toArray(xs);
        arr.unshift(b);
        var len = arr.length;
        for (var i = 1; i < len; ++i) {
            arr[i] = A2(f, arr[i], arr[i-1]);
        }
        return fromArray(arr);
    }

    function scanl1(f, xs) {
        return xs.ctor === '[]' ? throwError('scanl1') : scanl(f, xs._0, xs._1);
    }

    function filter(pred, xs) {
        var arr = [];
        while (xs.ctor !== '[]') {
            if (pred(xs._0)) { arr.push(xs._0); }
            xs = xs._1;
        }
        return fromArray(arr);
    }

    function length(xs) {
        var out = 0;
        while (xs.ctor !== '[]') {
            out += 1;
            xs = xs._1;
        }
        return out;
    }

    function member(x, xs) {
        while (xs.ctor !== '[]') {
            if (Utils.eq(x,xs._0)) return true;
            xs = xs._1;
        }
        return false;
    }

    function append(xs, ys) {
        if (xs.ctor === '[]') {
            return ys;
        }
        var root = Cons(xs._0, Nil);
        var curr = root;
        xs = xs._1;
        while (xs.ctor !== '[]') {
            curr._1 = Cons(xs._0, Nil);
            xs = xs._1;
            curr = curr._1;
        }
        curr._1 = ys;
        return root;
    }

    function all(pred, xs) {
        while (xs.ctor !== '[]') {
            if (!pred(xs._0)) return false;
            xs = xs._1;
        }
        return true;
    }

    function any(pred, xs) {
        while (xs.ctor !== '[]') {
            if (pred(xs._0)) return true;
            xs = xs._1;
        }
        return false;
    }

    function map2(f, xs, ys) {
        var arr = [];
        while (xs.ctor !== '[]' && ys.ctor !== '[]') {
            arr.push(A2(f, xs._0, ys._0));
            xs = xs._1;
            ys = ys._1;
        }
        return fromArray(arr);
    }

    function map3(f, xs, ys, zs) {
        var arr = [];
        while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]') {
            arr.push(A3(f, xs._0, ys._0, zs._0));
            xs = xs._1;
            ys = ys._1;
            zs = zs._1;
        }
        return fromArray(arr);
    }

    function map4(f, ws, xs, ys, zs) {
        var arr = [];
        while (   ws.ctor !== '[]'
               && xs.ctor !== '[]'
               && ys.ctor !== '[]'
               && zs.ctor !== '[]')
        {
            arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
            ws = ws._1;
            xs = xs._1;
            ys = ys._1;
            zs = zs._1;
        }
        return fromArray(arr);
    }

    function map5(f, vs, ws, xs, ys, zs) {
        var arr = [];
        while (   vs.ctor !== '[]'
               && ws.ctor !== '[]'
               && xs.ctor !== '[]'
               && ys.ctor !== '[]'
               && zs.ctor !== '[]')
        {
            arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
            vs = vs._1;
            ws = ws._1;
            xs = xs._1;
            ys = ys._1;
            zs = zs._1;
        }
        return fromArray(arr);
    }

    function sort(xs) {
        return fromArray(toArray(xs).sort(Utils.cmp));
    }

    function sortBy(f, xs) {
        return fromArray(toArray(xs).sort(function(a,b){
            return Utils.cmp(f(a), f(b));
        }));
    }

    function sortWith(f, xs) {
        return fromArray(toArray(xs).sort(function(a,b){
            var ord = f(a)(b).ctor;
            return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
        }));
    }

    function take(n, xs) {
        var arr = [];
        while (xs.ctor !== '[]' && n > 0) {
            arr.push(xs._0);
            xs = xs._1;
            --n;
        }
        return fromArray(arr);
    }

    function drop(n, xs) {
        while (xs.ctor !== '[]' && n > 0) {
            xs = xs._1;
            --n;
        }
        return xs;
    }

    function repeat(n, x) {
        var arr = [];
        var pattern = [x];
        while (n > 0) {
            if (n & 1) arr = arr.concat(pattern);
            n >>= 1, pattern = pattern.concat(pattern);
        }
        return fromArray(arr);
    }


    Elm.Native.List.values = {
        Nil:Nil,
        Cons:Cons,
        cons:F2(Cons),
        toArray:toArray,
        fromArray:fromArray,
        range:range,
        append: F2(append),

        head:head,
        tail:tail,

        map:F2(map),
        foldl:F3(foldl),
        foldr:F3(foldr),

        foldl1:F2(foldl1),
        foldr1:F2(foldr1),
        scanl:F3(scanl),
        scanl1:F2(scanl1),
        filter:F2(filter),
        length:length,
        member:F2(member),

        all:F2(all),
        any:F2(any),
        map2:F3(map2),
        map3:F4(map3),
        map4:F5(map4),
        map5:F6(map5),
        sort:sort,
        sortBy:F2(sortBy),
        sortWith:F2(sortWith),
        take:F2(take),
        drop:F2(drop),
        repeat:F2(repeat)
    };
    return elm.Native.List.values = Elm.Native.List.values;

};


// setup
Elm.Native = Elm.Native || {};
Elm.Native.Markdown = Elm.Native.Markdown || {};

// definition
Elm.Native.Markdown.make = function(localRuntime) {
    'use strict';

    // attempt to short-circuit
    if ('values' in Elm.Native.Markdown) {
        return Elm.Native.Markdown.values;
    }

    var Text = Elm.Text.make(localRuntime);

    /**
     * marked - a markdown parser
     * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
     * https://github.com/chjj/marked
     */
    (function(){var block={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:noop,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:noop,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:noop,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};block.bullet=/(?:[*+-]|\d+\.)/;block.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;block.item=replace(block.item,"gm")(/bull/g,block.bullet)();block.list=replace(block.list)(/bull/g,block.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+block.def.source+")")();block.blockquote=replace(block.blockquote)("def",block.def)();block._tag="(?!(?:"+"a|em|strong|small|s|cite|q|dfn|abbr|data|time|code"+"|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo"+"|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b";block.html=replace(block.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,block._tag)();block.paragraph=replace(block.paragraph)("hr",block.hr)("heading",block.heading)("lheading",block.lheading)("blockquote",block.blockquote)("tag","<"+block._tag)("def",block.def)();block.normal=merge({},block);block.gfm=merge({},block.normal,{fences:/^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,paragraph:/^/});block.gfm.paragraph=replace(block.paragraph)("(?!","(?!"+block.gfm.fences.source.replace("\\1","\\2")+"|"+block.list.source.replace("\\1","\\3")+"|")();block.tables=merge({},block.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/});function Lexer(options){this.tokens=[];this.tokens.links={};this.options=options||marked.defaults;this.rules=block.normal;if(this.options.gfm){if(this.options.tables){this.rules=block.tables}else{this.rules=block.gfm}}}Lexer.rules=block;Lexer.lex=function(src,options){var lexer=new Lexer(options);return lexer.lex(src)};Lexer.prototype.lex=function(src){src=src.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n");return this.token(src,true)};Lexer.prototype.token=function(src,top,bq){var src=src.replace(/^ +$/gm,""),next,loose,cap,bull,b,item,space,i,l;while(src){if(cap=this.rules.newline.exec(src)){src=src.substring(cap[0].length);if(cap[0].length>1){this.tokens.push({type:"space"})}}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);cap=cap[0].replace(/^ {4}/gm,"");this.tokens.push({type:"code",text:!this.options.pedantic?cap.replace(/\n+$/,""):cap});continue}if(cap=this.rules.fences.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"code",lang:cap[2],text:cap[3]});continue}if(cap=this.rules.heading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[1].length,text:cap[2]});continue}if(top&&(cap=this.rules.nptable.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].split(/ *\| */)}this.tokens.push(item);continue}if(cap=this.rules.lheading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[2]==="="?1:2,text:cap[1]});continue}if(cap=this.rules.hr.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"hr"});continue}if(cap=this.rules.blockquote.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"blockquote_start"});cap=cap[0].replace(/^ *> ?/gm,"");this.token(cap,top,true);this.tokens.push({type:"blockquote_end"});continue}if(cap=this.rules.list.exec(src)){src=src.substring(cap[0].length);bull=cap[2];this.tokens.push({type:"list_start",ordered:bull.length>1});cap=cap[0].match(this.rules.item);next=false;l=cap.length;i=0;for(;i<l;i++){item=cap[i];space=item.length;item=item.replace(/^ *([*+-]|\d+\.) +/,"");if(~item.indexOf("\n ")){space-=item.length;item=!this.options.pedantic?item.replace(new RegExp("^ {1,"+space+"}","gm"),""):item.replace(/^ {1,4}/gm,"")}if(this.options.smartLists&&i!==l-1){b=block.bullet.exec(cap[i+1])[0];if(bull!==b&&!(bull.length>1&&b.length>1)){src=cap.slice(i+1).join("\n")+src;i=l-1}}loose=next||/\n\n(?!\s*$)/.test(item);if(i!==l-1){next=item.charAt(item.length-1)==="\n";if(!loose)loose=next}this.tokens.push({type:loose?"loose_item_start":"list_item_start"});this.token(item,false,bq);this.tokens.push({type:"list_item_end"})}this.tokens.push({type:"list_end"});continue}if(cap=this.rules.html.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:cap[1]==="pre"||cap[1]==="script"||cap[1]==="style",text:cap[0]});continue}if(!bq&&top&&(cap=this.rules.def.exec(src))){src=src.substring(cap[0].length);this.tokens.links[cap[1].toLowerCase()]={href:cap[2],title:cap[3]};continue}if(top&&(cap=this.rules.table.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/(?: *\| *)?\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */)}this.tokens.push(item);continue}if(top&&(cap=this.rules.paragraph.exec(src))){src=src.substring(cap[0].length);this.tokens.push({type:"paragraph",text:cap[1].charAt(cap[1].length-1)==="\n"?cap[1].slice(0,-1):cap[1]});continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"text",text:cap[0]});continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return this.tokens};var inline={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:noop,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:noop,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};inline._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;inline._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;inline.link=replace(inline.link)("inside",inline._inside)("href",inline._href)();inline.reflink=replace(inline.reflink)("inside",inline._inside)();inline.normal=merge({},inline);inline.pedantic=merge({},inline.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/});inline.gfm=merge({},inline.normal,{escape:replace(inline.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:replace(inline.text)("]|","~]|")("|","|https?://|")()});inline.breaks=merge({},inline.gfm,{br:replace(inline.br)("{2,}","*")(),text:replace(inline.gfm.text)("{2,}","*")()});function InlineLexer(links,options){this.options=options||marked.defaults;this.links=links;this.rules=inline.normal;this.renderer=this.options.renderer||new Renderer;this.renderer.options=this.options;if(!this.links){throw new Error("Tokens array requires a `links` property.")}if(this.options.gfm){if(this.options.breaks){this.rules=inline.breaks}else{this.rules=inline.gfm}}else if(this.options.pedantic){this.rules=inline.pedantic}}InlineLexer.rules=inline;InlineLexer.output=function(src,links,options){var inline=new InlineLexer(links,options);return inline.output(src)};InlineLexer.prototype.output=function(src){var out="",link,text,href,cap;while(src){if(cap=this.rules.escape.exec(src)){src=src.substring(cap[0].length);out+=cap[1];continue}if(cap=this.rules.autolink.exec(src)){src=src.substring(cap[0].length);if(cap[2]==="@"){text=cap[1].charAt(6)===":"?this.mangle(cap[1].substring(7)):this.mangle(cap[1]);href=this.mangle("mailto:")+text}else{text=escape(cap[1]);href=text}out+=this.renderer.link(href,null,text);continue}if(!this.inLink&&(cap=this.rules.url.exec(src))){src=src.substring(cap[0].length);text=escape(cap[1]);href=text;out+=this.renderer.link(href,null,text);continue}if(cap=this.rules.tag.exec(src)){if(!this.inLink&&/^<a /i.test(cap[0])){this.inLink=true}else if(this.inLink&&/^<\/a>/i.test(cap[0])){this.inLink=false}src=src.substring(cap[0].length);out+=this.options.sanitize?escape(cap[0]):cap[0];continue}if(cap=this.rules.link.exec(src)){src=src.substring(cap[0].length);this.inLink=true;out+=this.outputLink(cap,{href:cap[2],title:cap[3]});this.inLink=false;continue}if((cap=this.rules.reflink.exec(src))||(cap=this.rules.nolink.exec(src))){src=src.substring(cap[0].length);link=(cap[2]||cap[1]).replace(/\s+/g," ");link=this.links[link.toLowerCase()];if(!link||!link.href){out+=cap[0].charAt(0);src=cap[0].substring(1)+src;continue}this.inLink=true;out+=this.outputLink(cap,link);this.inLink=false;continue}if(cap=this.rules.strong.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.strong(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.em.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.em(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.codespan(escape(cap[2],true));continue}if(cap=this.rules.br.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.br();continue}if(cap=this.rules.del.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.del(this.output(cap[1]));continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);out+=escape(this.smartypants(cap[0]));continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return out};InlineLexer.prototype.outputLink=function(cap,link){var href=escape(link.href),title=link.title?escape(link.title):null;return cap[0].charAt(0)!=="!"?this.renderer.link(href,title,this.output(cap[1])):this.renderer.image(href,title,escape(cap[1]))};InlineLexer.prototype.smartypants=function(text){if(!this.options.smartypants)return text;return text.replace(/--/g,"—").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")};InlineLexer.prototype.mangle=function(text){var out="",l=text.length,i=0,ch;for(;i<l;i++){ch=text.charCodeAt(i);if(Math.random()>.5){ch="x"+ch.toString(16)}out+="&#"+ch+";"}return out};function Renderer(options){this.options=options||{}}Renderer.prototype.code=function(code,lang,escaped){if(this.options.highlight){var out=this.options.highlight(code,lang);if(out!=null&&out!==code){escaped=true;code=out}}if(!lang){return"<pre><code>"+(escaped?code:escape(code,true))+"\n</code></pre>"}return'<pre><code class="'+this.options.langPrefix+escape(lang,true)+'">'+(escaped?code:escape(code,true))+"\n</code></pre>\n"};Renderer.prototype.blockquote=function(quote){return"<blockquote>\n"+quote+"</blockquote>\n"};Renderer.prototype.html=function(html){return html};Renderer.prototype.heading=function(text,level,raw){return"<h"+level+' id="'+this.options.headerPrefix+raw.toLowerCase().replace(/[^\w]+/g,"-")+'">'+text+"</h"+level+">\n"};Renderer.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"};Renderer.prototype.list=function(body,ordered){var type=ordered?"ol":"ul";return"<"+type+">\n"+body+"</"+type+">\n"};Renderer.prototype.listitem=function(text){return"<li>"+text+"</li>\n"};Renderer.prototype.paragraph=function(text){return"<p>"+text+"</p>\n"};Renderer.prototype.table=function(header,body){return"<table>\n"+"<thead>\n"+header+"</thead>\n"+"<tbody>\n"+body+"</tbody>\n"+"</table>\n"};Renderer.prototype.tablerow=function(content){return"<tr>\n"+content+"</tr>\n"};Renderer.prototype.tablecell=function(content,flags){var type=flags.header?"th":"td";var tag=flags.align?"<"+type+' style="text-align:'+flags.align+'">':"<"+type+">";return tag+content+"</"+type+">\n"};Renderer.prototype.strong=function(text){return"<strong>"+text+"</strong>"};Renderer.prototype.em=function(text){return"<em>"+text+"</em>"};Renderer.prototype.codespan=function(text){return"<code>"+text+"</code>"};Renderer.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"};Renderer.prototype.del=function(text){return"<del>"+text+"</del>"};Renderer.prototype.link=function(href,title,text){if(this.options.sanitize){try{var prot=decodeURIComponent(unescape(href)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return""}if(prot.indexOf("javascript:")===0){return""}}var out='<a href="'+href+'"';if(title){out+=' title="'+title+'"'}out+=">"+text+"</a>";return out};Renderer.prototype.image=function(href,title,text){var out='<img src="'+href+'" alt="'+text+'"';if(title){out+=' title="'+title+'"'}out+=this.options.xhtml?"/>":">";return out};function Parser(options){this.tokens=[];this.token=null;this.options=options||marked.defaults;this.options.renderer=this.options.renderer||new Renderer;this.renderer=this.options.renderer;this.renderer.options=this.options}Parser.parse=function(src,options,renderer){var parser=new Parser(options,renderer);return parser.parse(src)};Parser.prototype.parse=function(src){this.inline=new InlineLexer(src.links,this.options,this.renderer);this.tokens=src.reverse();var out="";while(this.next()){out+=this.tok()}return out};Parser.prototype.next=function(){return this.token=this.tokens.pop()};Parser.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0};Parser.prototype.parseText=function(){var body=this.token.text;while(this.peek().type==="text"){body+="\n"+this.next().text}return this.inline.output(body)};Parser.prototype.tok=function(){switch(this.token.type){case"space":{return""}case"hr":{return this.renderer.hr()}case"heading":{return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text)}case"code":{return this.renderer.code(this.token.text,this.token.lang,this.token.escaped)}case"table":{var header="",body="",i,row,cell,flags,j;cell="";for(i=0;i<this.token.header.length;i++){flags={header:true,align:this.token.align[i]};cell+=this.renderer.tablecell(this.inline.output(this.token.header[i]),{header:true,align:this.token.align[i]})}header+=this.renderer.tablerow(cell);for(i=0;i<this.token.cells.length;i++){row=this.token.cells[i];cell="";for(j=0;j<row.length;j++){cell+=this.renderer.tablecell(this.inline.output(row[j]),{header:false,align:this.token.align[j]})}body+=this.renderer.tablerow(cell)}return this.renderer.table(header,body)}case"blockquote_start":{var body="";while(this.next().type!=="blockquote_end"){body+=this.tok()}return this.renderer.blockquote(body)}case"list_start":{var body="",ordered=this.token.ordered;while(this.next().type!=="list_end"){body+=this.tok()}return this.renderer.list(body,ordered)}case"list_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.token.type==="text"?this.parseText():this.tok()}return this.renderer.listitem(body)}case"loose_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.tok()}return this.renderer.listitem(body)}case"html":{var html=!this.token.pre&&!this.options.pedantic?this.inline.output(this.token.text):this.token.text;return this.renderer.html(html)}case"paragraph":{return this.renderer.paragraph(this.inline.output(this.token.text))}case"text":{return this.renderer.paragraph(this.parseText())}}};function escape(html,encode){return html.replace(!encode?/&(?!#?\w+;)/g:/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function unescape(html){return html.replace(/&([#\w]+);/g,function(_,n){n=n.toLowerCase();if(n==="colon")return":";if(n.charAt(0)==="#"){return n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1))}return""})}function replace(regex,opt){regex=regex.source;opt=opt||"";return function self(name,val){if(!name)return new RegExp(regex,opt);val=val.source||val;val=val.replace(/(^|[^\[])\^/g,"$1");regex=regex.replace(name,val);return self}}function noop(){}noop.exec=noop;function merge(obj){var i=1,target,key;for(;i<arguments.length;i++){target=arguments[i];for(key in target){if(Object.prototype.hasOwnProperty.call(target,key)){obj[key]=target[key]}}}return obj}function marked(src,opt,callback){if(callback||typeof opt==="function"){if(!callback){callback=opt;opt=null}opt=merge({},marked.defaults,opt||{});var highlight=opt.highlight,tokens,pending,i=0;try{tokens=Lexer.lex(src,opt)}catch(e){return callback(e)}pending=tokens.length;var done=function(err){if(err){opt.highlight=highlight;return callback(err)}var out;try{out=Parser.parse(tokens,opt)}catch(e){err=e}opt.highlight=highlight;return err?callback(err):callback(null,out)};if(!highlight||highlight.length<3){return done()}delete opt.highlight;if(!pending)return done();for(;i<tokens.length;i++){(function(token){if(token.type!=="code"){return--pending||done()}return highlight(token.text,token.lang,function(err,code){if(err)return done(err);if(code==null||code===token.text){return--pending||done()}token.text=code;token.escaped=true;--pending||done()})})(tokens[i])}return}try{if(opt)opt=merge({},marked.defaults,opt);return Parser.parse(Lexer.lex(src,opt),opt)}catch(e){e.message+="\nPlease report this to https://github.com/chjj/marked.";if((opt||marked.defaults).silent){return"<p>An error occured:</p><pre>"+escape(e.message+"",true)+"</pre>"}throw e}}marked.options=marked.setOptions=function(opt){merge(marked.defaults,opt);return marked};marked.defaults={gfm:true,tables:true,breaks:false,pedantic:false,sanitize:false,smartLists:false,silent:false,highlight:null,langPrefix:"lang-",smartypants:false,headerPrefix:"",renderer:new Renderer,xhtml:false};marked.Parser=Parser;marked.parser=Parser.parse;marked.Renderer=Renderer;marked.Lexer=Lexer;marked.lexer=Lexer.lex;marked.InlineLexer=InlineLexer;marked.inlineLexer=InlineLexer.output;marked.parse=marked;if(typeof module!=="undefined"&&typeof exports==="object"){module.exports=marked}else if(typeof define==="function"&&define.amd){define(function(){return marked})}else{this.marked=marked}}).call(function(){return this||(typeof window!=="undefined"?window:global)}());

    marked.setOptions({
        highlight: function (code, lang) {
            if (typeof hljs !== 'undefined'
                && lang
                && hljs.listLanguages().indexOf(lang) >= 0) {
                return hljs.highlight(lang, code, true).value;
            }
            return code;
        }
    });

    function formatOptions(options) {
        var gfm = options.githubFlavored;
        if (gfm.ctor === 'Just') {
            return {
                gfm: true,
                tables: gfm.tables,
                breaks: gfm.breaks,
                sanitize: options.sanitize,
                smartypants: options.smartypants
            }
        }
        else {
            return {
                gfm: false,
                tables: false,
                breaks: false,
                sanitize: options.sanitize,
                smartypants: options.smartypants
            }
        }
    }

    function toHtmlWith(options, rawMarkdown) {
        var widget = {
            type: "Widget",

            init: function () {
                var html = marked(rawMarkdown, formatOptions(options));
                var div = document.createElement('div');
                div.innerHTML = html;
                return div;
            },

            update: function (previous, node) {
                var html = marked(rawMarkdown, formatOptions(options));
                node.innerHTML = html;
                return node;
            }
        };
        return widget;
    }

    function toElementWith(options, rawMarkdown) {
        return Text.markdown(marked(rawMarkdown, formatOptions(options)));
    }

    return Elm.Native.Markdown.values = {
        toHtmlWith: F2(toHtmlWith),
        toElementWith: F2(toElementWith)
    };
};
Elm.Native.Ports = {};
Elm.Native.Ports.make = function(localRuntime) {
    localRuntime.Native = localRuntime.Native || {};
    localRuntime.Native.Ports = localRuntime.Native.Ports || {};
    if (localRuntime.Native.Ports.values) {
        return localRuntime.Native.Ports.values;
    }

    var Signal;

    function incomingSignal(converter) {
        converter.isSignal = true;
        return converter;
    }

    function outgoingSignal(converter) {
        if (!Signal) {
            Signal = Elm.Signal.make(localRuntime);
        }
        return function(signal) {
            var subscribers = []
            function subscribe(handler) {
                subscribers.push(handler);
            }
            function unsubscribe(handler) {
                subscribers.pop(subscribers.indexOf(handler));
            }
            A2( Signal.map, function(value) {
                var val = converter(value);
                var len = subscribers.length;
                for (var i = 0; i < len; ++i) {
                    subscribers[i](val);
                }
            }, signal);
            return { subscribe:subscribe, unsubscribe:unsubscribe };
        }
    }

    function portIn(name, converter) {
        var jsValue = localRuntime.ports.incoming[name];
        if (jsValue === undefined) {
            throw new Error("Initialization Error: port '" + name +
                            "' was not given an input!");
        }
        localRuntime.ports.uses[name] += 1;
        try {
            var elmValue = converter(jsValue);
        } catch(e) {
            throw new Error("Initialization Error on port '" + name + "': \n" + e.message);
        }

        // just return a static value if it is not a signal
        if (!converter.isSignal) {
            return elmValue;
        }

        // create a signal if necessary
        if (!Signal) {
            Signal = Elm.Signal.make(localRuntime);
        }
        var signal = Signal.constant(elmValue);
        function send(jsValue) {
            try {
                var elmValue = converter(jsValue);
            } catch(e) {
                throw new Error("Error sending to port '" + name + "': \n" + e.message);
            }
            setTimeout(function() {
                localRuntime.notify(signal.id, elmValue);
            }, 0);
        }
        localRuntime.ports.outgoing[name] = { send:send };
        return signal;
    }

    function portOut(name, converter, value) {
        try {
            localRuntime.ports.outgoing[name] = converter(value);
        } catch(e) {
            throw new Error("Initialization Error on port '" + name + "': \n" + e.message);
        }
        return value;
    }

    return localRuntime.Native.Ports.values = {
        incomingSignal: incomingSignal,
        outgoingSignal: outgoingSignal,
        portOut: portOut,
        portIn: portIn
    };
};


Elm.Native.Regex = {};
Elm.Native.Regex.make = function(elm) {
    elm.Native = elm.Native || {};
    elm.Native.Regex = elm.Native.Regex || {};
    if (elm.Native.Regex.values) return elm.Native.Regex.values;
    if ('values' in Elm.Native.Regex)
        return elm.Native.Regex.values = Elm.Native.Regex.values;

    var List = Elm.Native.List.make(elm);
    var Maybe = Elm.Maybe.make(elm);

    function escape(str) {
        return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }
    function caseInsensitive(re) {
        return new RegExp(re.source, 'gi');
    }
    function regex(raw) {
        return new RegExp(raw, 'g');
    }

    function contains(re, string) {
        return string.match(re) !== null;
    }

    function find(n, re, str) {
        n = n.ctor === "All" ? Infinity : n._0;
        var out = [];
        var number = 0;
        var string = str;
        var result;
        while (number++ < n && (result = re.exec(string))) {
            var i = result.length - 1;
            var subs = new Array(i);
            while (i > 0) {
                var submatch = result[i];
                subs[--i] = submatch === undefined
                    ? Maybe.Nothing
                    : Maybe.Just(submatch);
            }
            out.push({
                _:{},
                match: result[0],
                submatches: List.fromArray(subs),
                index: result.index,
                number: number
            });
        }
        return List.fromArray(out);
    }

    function replace(n, re, replacer, string) {
        n = n.ctor === "All" ? Infinity : n._0;
        var count = 0;
        function jsReplacer(match) {
            if (count++ > n) return match;
            var i = arguments.length-3;
            var submatches = new Array(i);
            while (i > 0) {
                var submatch = arguments[i];
                submatches[--i] = submatch === undefined
                    ? Maybe.Nothing
                    : Maybe.Just(submatch);
            }
            return replacer({
                _:{},
                match:match,
                submatches:List.fromArray(submatches),
                index:arguments[i-1],
                number:count
            });
        }
        return string.replace(re, jsReplacer);
    }

    function split(n, re, str) {
        if (n === Infinity) {
            return List.fromArray(string.split(re));
        }
        var string = str;
        var result;
        var out = [];
        var start = re.lastIndex;
        while (n--) {
            if (!(result = re.exec(string))) break;
            out.push(string.slice(start, result.index));
            start = re.lastIndex;
        }
        out.push(string.slice(start));
        return List.fromArray(out);
    }

    return Elm.Native.Regex.values = {
        regex: regex,
        caseInsensitive: caseInsensitive,
        escape: escape,

        contains: F2(contains),
        find: F3(find),
        replace: F4(replace),
        split: F3(split)
    };
};


if (!Elm.fullscreen) {

    (function() {
        'use strict';

        var Display = { FULLSCREEN: 0, COMPONENT: 1, NONE: 2 };

        Elm.fullscreen = function(module, ports) {
            var container = document.createElement('div');
            document.body.appendChild(container);
            return init(Display.FULLSCREEN, container, module, ports || {});
        };

        Elm.embed = function(module, container, ports) {
            var tag = container.tagName;
            if (tag !== 'DIV') {
                throw new Error('Elm.node must be given a DIV, not a ' + tag + '.');
            }
            return init(Display.COMPONENT, container, module, ports || {});
        };

        Elm.worker = function(module, ports) {
            return init(Display.NONE, {}, module, ports || {});
        };

        function init(display, container, module, ports, moduleToReplace) {
            // defining state needed for an instance of the Elm RTS
            var inputs = [];

            /* OFFSET
             * Elm's time traveling debugger lets you pause time. This means
             * "now" may be shifted a bit into the past. By wrapping Date.now()
             * we can manage this.
             */
            var timer = {
                now: function() {
                    return Date.now();
                }
            };

            var updateInProgress = false;
            function notify(id, v) {
                if (updateInProgress) {
                    throw new Error(
                        'The notify function has been called synchronously!\n' +
                        'This can lead to frames being dropped.\n' +
                        'Definitely report this to <https://github.com/elm-lang/Elm/issues>\n');
                }
                updateInProgress = true;
                var timestep = timer.now();
                for (var i = inputs.length; i--; ) {
                    inputs[i].recv(timestep, id, v);
                }
                updateInProgress = false;
            }
            function setTimeout(func, delay) {
                window.setTimeout(func, delay);
            }

            var listeners = [];
            function addListener(relevantInputs, domNode, eventName, func) {
                domNode.addEventListener(eventName, func);
                var listener = {
                    relevantInputs: relevantInputs,
                    domNode: domNode,
                    eventName: eventName,
                    func: func
                };
                listeners.push(listener);
            }

            var portUses = {}
            for (var key in ports) {
                portUses[key] = 0;
            }
            // create the actual RTS. Any impure modules will attach themselves to this
            // object. This permits many Elm programs to be embedded per document.
            var elm = {
                notify: notify,
                setTimeout: setTimeout,
                node: container,
                addListener: addListener,
                inputs: inputs,
                timer: timer,
                ports: { incoming:ports, outgoing:{}, uses:portUses },

                isFullscreen: function() { return display === Display.FULLSCREEN; },
                isEmbed: function() { return display === Display.COMPONENT; },
                isWorker: function() { return display === Display.NONE; }
            };

            function swap(newModule) {
                removeListeners(listeners);
                var div = document.createElement('div');
                var newElm = init(display, div, newModule, ports, elm);
                inputs = [];
                // elm.swap = newElm.swap;
                return newElm;
            }

            function dispose() {
                removeListeners(listeners);
                inputs = [];
            }

            var Module = {};
            try {
                Module = module.make(elm);
                checkPorts(elm);
            }
            catch (error) {
                if (typeof container.appendChild == 'undefined') {
                    console.log(error.message);
                } else {
                    container.appendChild(errorNode(error.message));
                }
                throw error;
            }
            inputs = filterDeadInputs(inputs);
            filterListeners(inputs, listeners);
            addReceivers(elm.ports.outgoing);
            if (display !== Display.NONE) {
                var graphicsNode = initGraphics(elm, Module);
            }
            if (typeof moduleToReplace !== 'undefined') {
                hotSwap(moduleToReplace, elm);

                // rerender scene if graphics are enabled.
                if (typeof graphicsNode !== 'undefined') {
                    graphicsNode.recv(0, true, 0);
                }
            }

            return {
                swap:swap,
                ports:elm.ports.outgoing,
                dispose:dispose
            };
        };

        function checkPorts(elm) {
            var portUses = elm.ports.uses;
            for (var key in portUses) {
                var uses = portUses[key]
                if (uses === 0) {
                    throw new Error(
                        "Initialization Error: provided port '" + key +
                        "' to a module that does not take it as in input.\n" +
                        "Remove '" + key + "' from the module initialization code.");
                } else if (uses > 1) {
                    throw new Error(
                        "Initialization Error: port '" + key +
                        "' has been declared multiple times in the Elm code.\n" +
                        "Remove declarations until there is exactly one.");
                }
            }
        }

        function errorNode(message) {
            var code = document.createElement('code');

            var lines = message.split('\n');
            code.appendChild(document.createTextNode(lines[0]));
            code.appendChild(document.createElement('br'));
            code.appendChild(document.createElement('br'));
            for (var i = 1; i < lines.length; ++i) {
                code.appendChild(document.createTextNode('\u00A0 \u00A0 ' + lines[i]));
                code.appendChild(document.createElement('br'));
            }
            code.appendChild(document.createElement('br'));
            code.appendChild(document.createTextNode("Open the developer console for more details."));
            return code;
        }


        //// FILTER SIGNALS ////

        // TODO: move this code into the signal module and create a function
        // Signal.initializeGraph that actually instantiates everything.

        function filterListeners(inputs, listeners) {
            loop:
            for (var i = listeners.length; i--; ) {
                var listener = listeners[i];
                for (var j = inputs.length; j--; ) {
                    if (listener.relevantInputs.indexOf(inputs[j].id) >= 0) {
                        continue loop;
                    }
                }
                listener.domNode.removeEventListener(listener.eventName, listener.func);
            }
        }

        function removeListeners(listeners) {
            for (var i = listeners.length; i--; ) {
                var listener = listeners[i];
                listener.domNode.removeEventListener(listener.eventName, listener.func);
            }
        }

        // add receivers for built-in ports if they are defined
        function addReceivers(ports) {
            if ('log' in ports) {
                ports.log.subscribe(function(v) { console.log(v) });
            }
            if ('stdout' in ports) {
                var process = process || {};
                var handler = process.stdout
                    ? function(v) { process.stdout.write(v); }
                    : function(v) { console.log(v); };
                ports.stdout.subscribe(handler);
            }
            if ('stderr' in ports) {
                var process = process || {};
                var handler = process.stderr
                    ? function(v) { process.stderr.write(v); }
                    : function(v) { console.log('Error:' + v); };
                ports.stderr.subscribe(handler);
            }
            if ('title' in ports) {
                if (typeof ports.title === 'string') {
                    document.title = ports.title;
                } else {
                    ports.title.subscribe(function(v) { document.title = v; });
                }
            }
            if ('redirect' in ports) {
                ports.redirect.subscribe(function(v) {
                    if (v.length > 0) window.location = v;
                });
            }
            if ('favicon' in ports) {
                if (typeof ports.favicon === 'string') {
                    changeFavicon(ports.favicon);
                } else {
                    ports.favicon.subscribe(changeFavicon);
                }
            }
            function changeFavicon(src) {
                var link = document.createElement('link');
                var oldLink = document.getElementById('elm-favicon');
                link.id = 'elm-favicon';
                link.rel = 'shortcut icon';
                link.href = src;
                if (oldLink) {
                    document.head.removeChild(oldLink);
                }
                document.head.appendChild(link);
            }
        }


        function filterDeadInputs(inputs) {
            var temp = [];
            for (var i = inputs.length; i--; ) {
                if (isAlive(inputs[i])) temp.push(inputs[i]);
            }
            return temp;
        }


        function isAlive(input) {
            if (!('defaultNumberOfKids' in input)) return true;
            var len = input.kids.length;
            if (len === 0) return false;
            if (len > input.defaultNumberOfKids) return true;
            var alive = false;
            for (var i = len; i--; ) {
                alive = alive || isAlive(input.kids[i]);
            }
            return alive;
        }


        ////  RENDERING  ////

        function initGraphics(elm, Module) {
            if (!('main' in Module)) {
                throw new Error("'main' is missing! What do I display?!");
            }

            var signalGraph = Module.main;

            // make sure the signal graph is actually a signal & extract the visual model
            var Signal = Elm.Signal.make(elm);
            if (!('recv' in signalGraph)) {
                signalGraph = Signal.constant(signalGraph);
            }
            var initialScene = signalGraph.value;

            // Figure out what the render functions should be
            var render;
            var update;
            if (initialScene.props) {
                var Element = Elm.Native.Graphics.Element.make(elm);
                render = Element.render;
                update = Element.updateAndReplace;
            } else {
                var VirtualDom = Elm.Native.VirtualDom.make(elm);
                render = VirtualDom.render;
                update = VirtualDom.updateAndReplace;
            }

            // Add the initialScene to the DOM
            var container = elm.node;
            var node = render(initialScene);
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            container.appendChild(node);

            var _requestAnimationFrame =
                typeof requestAnimationFrame !== 'undefined'
                    ? requestAnimationFrame
                    : function(cb) { setTimeout(cb, 1000/60); }
                    ;

            // domUpdate is called whenever the main Signal changes.
            //
            // domUpdate and drawCallback implement a small state machine in order
            // to schedule only 1 draw per animation frame. This enforces that
            // once draw has been called, it will not be called again until the
            // next frame.
            //
            // drawCallback is scheduled whenever
            // 1. The state transitions from PENDING_REQUEST to EXTRA_REQUEST, or
            // 2. The state transitions from NO_REQUEST to PENDING_REQUEST
            //
            // Invariants:
            // 1. In the NO_REQUEST state, there is never a scheduled drawCallback.
            // 2. In the PENDING_REQUEST and EXTRA_REQUEST states, there is always exactly 1
            //    scheduled drawCallback.
            var NO_REQUEST = 0;
            var PENDING_REQUEST = 1;
            var EXTRA_REQUEST = 2;
            var state = NO_REQUEST;
            var savedScene = initialScene;
            var scheduledScene = initialScene;

            function domUpdate(newScene) {
                scheduledScene = newScene;

                switch (state) {
                    case NO_REQUEST:
                        _requestAnimationFrame(drawCallback);
                        state = PENDING_REQUEST;
                        return;
                    case PENDING_REQUEST:
                        state = PENDING_REQUEST;
                        return;
                    case EXTRA_REQUEST:
                        state = PENDING_REQUEST;
                        return;
                }
            }

            function drawCallback() {
                switch (state) {
                    case NO_REQUEST:
                        // This state should not be possible. How can there be no
                        // request, yet somehow we are actively fulfilling a
                        // request?
                        throw new Error(
                            "Unexpected draw callback.\n" +
                            "Please report this to <https://github.com/elm-lang/core/issues>."
                        );

                    case PENDING_REQUEST:
                        // At this point, we do not *know* that another frame is
                        // needed, but we make an extra request to rAF just in
                        // case. It's possible to drop a frame if rAF is called
                        // too late, so we just do it preemptively.
                        _requestAnimationFrame(drawCallback);
                        state = EXTRA_REQUEST;

                        // There's also stuff we definitely need to draw.
                        draw();
                        return;

                    case EXTRA_REQUEST:
                        // Turns out the extra request was not needed, so we will
                        // stop calling rAF. No reason to call it all the time if
                        // no one needs it.
                        state = NO_REQUEST;
                        return;
                }
            }

            function draw() {
                update(elm.node.firstChild, savedScene, scheduledScene);
                if (elm.Native.Window) {
                    elm.Native.Window.values.resizeIfNeeded();
                }
                savedScene = scheduledScene;
            }

            var renderer = A2(Signal.map, domUpdate, signalGraph);

            // must check for resize after 'renderer' is created so
            // that changes show up.
            if (elm.Native.Window) {
                elm.Native.Window.values.resizeIfNeeded();
            }

            return renderer;
        }

        //// HOT SWAPPING ////

        // Returns boolean indicating if the swap was successful.
        // Requires that the two signal graphs have exactly the same
        // structure.
        function hotSwap(from, to) {
            function similar(nodeOld,nodeNew) {
                var idOkay = nodeOld.id === nodeNew.id;
                var lengthOkay = nodeOld.kids.length === nodeNew.kids.length;
                return idOkay && lengthOkay;
            }
            function swap(nodeOld,nodeNew) {
                nodeNew.value = nodeOld.value;
                return true;
            }
            var canSwap = depthFirstTraversals(similar, from.inputs, to.inputs);
            if (canSwap) {
                depthFirstTraversals(swap, from.inputs, to.inputs);
            }
            from.node.parentNode.replaceChild(to.node, from.node);

            return canSwap;
        }

        // Returns false if the node operation f ever fails.
        function depthFirstTraversals(f, queueOld, queueNew) {
            if (queueOld.length !== queueNew.length) return false;
            queueOld = queueOld.slice(0);
            queueNew = queueNew.slice(0);

            var seen = [];
            while (queueOld.length > 0 && queueNew.length > 0) {
                var nodeOld = queueOld.pop();
                var nodeNew = queueNew.pop();
                if (seen.indexOf(nodeOld.id) < 0) {
                    if (!f(nodeOld, nodeNew)) return false;
                    queueOld = queueOld.concat(nodeOld.kids);
                    queueNew = queueNew.concat(nodeNew.kids);
                    seen.push(nodeOld.id);
                }
            }
            return true;
        }
    }());

    function F2(fun) {
        function wrapper(a) { return function(b) { return fun(a,b) } }
        wrapper.arity = 2;
        wrapper.func = fun;
        return wrapper;
    }

    function F3(fun) {
        function wrapper(a) {
            return function(b) { return function(c) { return fun(a,b,c) }}
        }
        wrapper.arity = 3;
        wrapper.func = fun;
        return wrapper;
    }

    function F4(fun) {
        function wrapper(a) { return function(b) { return function(c) {
            return function(d) { return fun(a,b,c,d) }}}
        }
        wrapper.arity = 4;
        wrapper.func = fun;
        return wrapper;
    }

    function F5(fun) {
        function wrapper(a) { return function(b) { return function(c) {
            return function(d) { return function(e) { return fun(a,b,c,d,e) }}}}
        }
        wrapper.arity = 5;
        wrapper.func = fun;
        return wrapper;
    }

    function F6(fun) {
        function wrapper(a) { return function(b) { return function(c) {
            return function(d) { return function(e) { return function(f) {
            return fun(a,b,c,d,e,f) }}}}}
        }
        wrapper.arity = 6;
        wrapper.func = fun;
        return wrapper;
    }

    function F7(fun) {
        function wrapper(a) { return function(b) { return function(c) {
            return function(d) { return function(e) { return function(f) {
            return function(g) { return fun(a,b,c,d,e,f,g) }}}}}}
        }
        wrapper.arity = 7;
        wrapper.func = fun;
        return wrapper;
    }

    function F8(fun) {
        function wrapper(a) { return function(b) { return function(c) {
            return function(d) { return function(e) { return function(f) {
            return function(g) { return function(h) {
            return fun(a,b,c,d,e,f,g,h)}}}}}}}
        }
        wrapper.arity = 8;
        wrapper.func = fun;
        return wrapper;
    }

    function F9(fun) {
        function wrapper(a) { return function(b) { return function(c) {
            return function(d) { return function(e) { return function(f) {
            return function(g) { return function(h) { return function(i) {
            return fun(a,b,c,d,e,f,g,h,i) }}}}}}}}
        }
        wrapper.arity = 9;
        wrapper.func = fun;
        return wrapper;
    }

    function A2(fun,a,b) {
        return fun.arity === 2
            ? fun.func(a,b)
            : fun(a)(b);
    }
    function A3(fun,a,b,c) {
        return fun.arity === 3
            ? fun.func(a,b,c)
            : fun(a)(b)(c);
    }
    function A4(fun,a,b,c,d) {
        return fun.arity === 4
            ? fun.func(a,b,c,d)
            : fun(a)(b)(c)(d);
    }
    function A5(fun,a,b,c,d,e) {
        return fun.arity === 5
            ? fun.func(a,b,c,d,e)
            : fun(a)(b)(c)(d)(e);
    }
    function A6(fun,a,b,c,d,e,f) {
        return fun.arity === 6
            ? fun.func(a,b,c,d,e,f)
            : fun(a)(b)(c)(d)(e)(f);
    }
    function A7(fun,a,b,c,d,e,f,g) {
        return fun.arity === 7
            ? fun.func(a,b,c,d,e,f,g)
            : fun(a)(b)(c)(d)(e)(f)(g);
    }
    function A8(fun,a,b,c,d,e,f,g,h) {
        return fun.arity === 8
            ? fun.func(a,b,c,d,e,f,g,h)
            : fun(a)(b)(c)(d)(e)(f)(g)(h);
    }
    function A9(fun,a,b,c,d,e,f,g,h,i) {
        return fun.arity === 9
            ? fun.func(a,b,c,d,e,f,g,h,i)
            : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
    }
}
Elm.Native.Show = {};
Elm.Native.Show.make = function(elm) {
    elm.Native = elm.Native || {};
    elm.Native.Show = elm.Native.Show || {};
    if (elm.Native.Show.values)
    {
        return elm.Native.Show.values;
    }

    var _Array;
    var Dict;
    var List;
    var Utils = Elm.Native.Utils.make(elm);

    var toString = function(v) {
        var type = typeof v;
        if (type === "function") {
            var name = v.func ? v.func.name : v.name;
            return '<function' + (name === '' ? '' : ': ') + name + '>';
        }
        else if (type === "boolean") {
            return v ? "True" : "False";
        }
        else if (type === "number") {
            return v + "";
        }
        else if ((v instanceof String) && v.isChar) {
            return "'" + addSlashes(v, true) + "'";
        }
        else if (type === "string") {
            return '"' + addSlashes(v, false) + '"';
        }
        else if (type === "object" && '_' in v && probablyPublic(v)) {
            var output = [];
            for (var k in v._) {
                for (var i = v._[k].length; i--; ) {
                    output.push(k + " = " + toString(v._[k][i]));
                }
            }
            for (var k in v) {
                if (k === '_') continue;
                output.push(k + " = " + toString(v[k]));
            }
            if (output.length === 0) {
                return "{}";
            }
            return "{ " + output.join(", ") + " }";
        }
        else if (type === "object" && 'ctor' in v) {
            if (v.ctor.substring(0,6) === "_Tuple") {
                var output = [];
                for (var k in v) {
                    if (k === 'ctor') continue;
                    output.push(toString(v[k]));
                }
                return "(" + output.join(",") + ")";
            }
            else if (v.ctor === "_Array") {
                if (!_Array) {
                    _Array = Elm.Array.make(elm);
                }
                var list = _Array.toList(v);
                return "Array.fromList " + toString(list);
            }
            else if (v.ctor === "::") {
                var output = '[' + toString(v._0);
                v = v._1;
                while (v.ctor === "::") {
                    output += "," + toString(v._0);
                    v = v._1;
                }
                return output + ']';
            }
            else if (v.ctor === "[]") {
                return "[]";
            }
            else if (v.ctor === "RBNode" || v.ctor === "RBEmpty") {
                if (!Dict) {
                    Dict = Elm.Dict.make(elm);
                }
                if (!List) {
                    List = Elm.List.make(elm);
                }
                var list = Dict.toList(v);
                var name = "Dict";
                if (list.ctor === "::" && list._0._1.ctor === "_Tuple0") {
                    name = "Set";
                    list = A2(List.map, function(x){return x._0}, list);
                }
                return name + ".fromList " + toString(list);
            }
            else {
                var output = "";
                for (var i in v) {
                    if (i === 'ctor') continue;
                    var str = toString(v[i]);
                    var parenless = str[0] === '{' || str[0] === '<' || str.indexOf(' ') < 0;
                    output += ' ' + (parenless ? str : '(' + str + ')');
                }
                return v.ctor + output;
            }
        }
        if (type === 'object' && 'recv' in v) {
            return '<signal>';
        }
        return "<internal structure>";
    };

    function addSlashes(str, isChar) {
        var s = str.replace(/\\/g, '\\\\')
                  .replace(/\n/g, '\\n')
                  .replace(/\t/g, '\\t')
                  .replace(/\r/g, '\\r')
                  .replace(/\v/g, '\\v')
                  .replace(/\0/g, '\\0');
        if (isChar) {
            return s.replace(/\'/g, "\\'")
        } else {
            return s.replace(/\"/g, '\\"');
        }
    }

    function probablyPublic(v) {
        var keys = Object.keys(v);
        var len = keys.length;
        if (len === 3
            && 'props' in v
            && 'element' in v)
        {
            return false;
        }
        else if (len === 5
            && 'horizontal' in v
            && 'vertical' in v
            && 'x' in v
            && 'y' in v)
        {
            return false;
        }
        else if (len === 7
            && 'theta' in v
            && 'scale' in v
            && 'x' in v
            && 'y' in v
            && 'alpha' in v
            && 'form' in v)
        {
            return false;
        }
        return true;
    }

    return elm.Native.Show.values = {
        toString: toString
    };
};


Elm.Native.Signal = {};
Elm.Native.Signal.make = function(localRuntime) {

  localRuntime.Native = localRuntime.Native || {};
  localRuntime.Native.Signal = localRuntime.Native.Signal || {};
  if (localRuntime.Native.Signal.values) {
      return localRuntime.Native.Signal.values;
  }

  var Utils = Elm.Native.Utils.make(localRuntime);

  function broadcastToKids(node, timestep, changed) {
    var kids = node.kids;
    for (var i = kids.length; i--; ) {
      kids[i].recv(timestep, changed, node.id);
    }
  }

  function Input(base) {
    this.id = Utils.guid();
    this.value = base;
    this.kids = [];
    this.defaultNumberOfKids = 0;
    this.recv = function(timestep, eid, v) {
      var changed = eid === this.id;
      if (changed) {
        this.value = v;
      }
      broadcastToKids(this, timestep, changed);
      return changed;
    };
    localRuntime.inputs.push(this);
  }

  function LiftN(update, args) {
    this.id = Utils.guid();
    this.value = update();
    this.kids = [];

    var n = args.length;
    var count = 0;
    var isChanged = false;

    this.recv = function(timestep, changed, parentID) {
      ++count;
      if (changed) { isChanged = true; }
      if (count == n) {
        if (isChanged) { this.value = update(); }
        broadcastToKids(this, timestep, isChanged);
        isChanged = false;
        count = 0;
      }
    };
    for (var i = n; i--; ) { args[i].kids.push(this); }
  }

  function map(func, a) {
    function update() { return func(a.value); }
    return new LiftN(update, [a]);
  }
  function map2(func, a, b) {
    function update() { return A2( func, a.value, b.value ); }
    return new LiftN(update, [a,b]);
  }
  function map3(func, a, b, c) {
    function update() { return A3( func, a.value, b.value, c.value ); }
    return new LiftN(update, [a,b,c]);
  }
  function map4(func, a, b, c, d) {
    function update() { return A4( func, a.value, b.value, c.value, d.value ); }
    return new LiftN(update, [a,b,c,d]);
  }
  function map5(func, a, b, c, d, e) {
    function update() { return A5( func, a.value, b.value, c.value, d.value, e.value ); }
    return new LiftN(update, [a,b,c,d,e]);
  }

  function Foldp(step, state, input) {
    this.id = Utils.guid();
    this.value = state;
    this.kids = [];

    this.recv = function(timestep, changed, parentID) {
      if (changed) {
          this.value = A2( step, input.value, this.value );
      }
      broadcastToKids(this, timestep, changed);
    };
    input.kids.push(this);
  }

  function foldp(step, state, input) {
      return new Foldp(step, state, input);
  }

  function DropIf(pred,base,input) {
    this.id = Utils.guid();
    this.value = pred(input.value) ? base : input.value;
    this.kids = [];
    this.recv = function(timestep, changed, parentID) {
      var chng = changed && !pred(input.value);
      if (chng) { this.value = input.value; }
      broadcastToKids(this, timestep, chng);
    };
    input.kids.push(this);
  }

  function DropRepeats(input) {
    this.id = Utils.guid();
    this.value = input.value;
    this.kids = [];
    this.recv = function(timestep, changed, parentID) {
      var chng = changed && !Utils.eq(this.value,input.value);
      if (chng) { this.value = input.value; }
      broadcastToKids(this, timestep, chng);
    };
    input.kids.push(this);
  }

  function timestamp(a) {
    function update() { return Utils.Tuple2(localRuntime.timer.now(), a.value); }
    return new LiftN(update, [a]);
  }

  function SampleOn(s1,s2) {
    this.id = Utils.guid();
    this.value = s2.value;
    this.kids = [];

    var count = 0;
    var isChanged = false;

    this.recv = function(timestep, changed, parentID) {
      if (parentID === s1.id) isChanged = changed;
      ++count;
      if (count == 2) {
        if (isChanged) { this.value = s2.value; }
        broadcastToKids(this, timestep, isChanged);
        count = 0;
        isChanged = false;
      }
    };
    s1.kids.push(this);
    s2.kids.push(this);
  }

  function sampleOn(s1,s2) { return new SampleOn(s1,s2); }

  function delay(t,s) {
      var delayed = new Input(s.value);
      var firstEvent = true;
      function update(v) {
        if (firstEvent) {
            firstEvent = false; return;
        }
        setTimeout(function() {
            localRuntime.notify(delayed.id, v);
        }, t);
      }
      function first(a,b) { return a; }
      return new SampleOn(delayed, map2(F2(first), delayed, map(update,s)));
  }

  function Merge(s1,s2) {
      this.id = Utils.guid();
      this.value = s1.value;
      this.kids = [];

      var next = null;
      var count = 0;
      var isChanged = false;

      this.recv = function(timestep, changed, parentID) {
        ++count;
        if (changed) {
            isChanged = true;
            if (parentID == s2.id && next === null) { next = s2.value; }
            if (parentID == s1.id) { next = s1.value; }
        }

        if (count == 2) {
            if (isChanged) { this.value = next; next = null; }
            broadcastToKids(this, timestep, isChanged);
            isChanged = false;
            count = 0;
        }
      };
      s1.kids.push(this);
      s2.kids.push(this);
  }

  function merge(s1,s2) {
      return new Merge(s1,s2);
  }


    // SIGNAL INPUTS

    function input(initialValue) {
        return new Input(initialValue);
    }

    function send(input, value) {
        return function() {
            localRuntime.notify(input.id, value);
        };
    }

    function subscribe(input) {
        return input;
    }


  return localRuntime.Native.Signal.values = {
    constant : function(v) { return new Input(v); },
    map  : F2(map ),
    map2 : F3(map2),
    map3 : F4(map3),
    map4 : F5(map4),
    map5 : F6(map5),
    foldp : F3(foldp),
    delay : F2(delay),
    merge : F2(merge),
    keepIf : F3(function(pred,base,sig) {
      return new DropIf(function(x) {return !pred(x);},base,sig); }),
    dropIf : F3(function(pred,base,sig) { return new DropIf(pred,base,sig); }),
    dropRepeats : function(s) { return new DropRepeats(s);},
    sampleOn : F2(sampleOn),
    timestamp : timestamp,
    input: input,
    send: F2(send),
    subscribe: subscribe
  };
};

Elm.Native.String = {};
Elm.Native.String.make = function(elm) {
    elm.Native = elm.Native || {};
    elm.Native.String = elm.Native.String || {};
    if (elm.Native.String.values) return elm.Native.String.values;
    if ('values' in Elm.Native.String) {
        return elm.Native.String.values = Elm.Native.String.values;
    }

    var Char = Elm.Char.make(elm);
    var List = Elm.Native.List.make(elm);
    var Maybe = Elm.Maybe.make(elm);
    var Result = Elm.Result.make(elm);
    var Utils = Elm.Native.Utils.make(elm);

    function isEmpty(str) {
        return str.length === 0;
    }
    function cons(chr,str) {
        return chr + str;
    }
    function uncons(str) {
        var hd;
        return (hd = str[0])
            ? Maybe.Just(Utils.Tuple2(Utils.chr(hd), str.slice(1)))
            : Maybe.Nothing;
    }
    function append(a,b) {
        return a + b;
    }
    function concat(strs) {
        return List.toArray(strs).join('');
    }
    function length(str) {
        return str.length;
    }
    function map(f,str) {
        var out = str.split('');
        for (var i = out.length; i--; ) {
            out[i] = f(Utils.chr(out[i]));
        }
        return out.join('');
    }
    function filter(pred,str) {
        return str.split('').map(Utils.chr).filter(pred).join('');
    }
    function reverse(str) {
        return str.split('').reverse().join('');
    }
    function foldl(f,b,str) {
        var len = str.length;
        for (var i = 0; i < len; ++i) {
            b = A2(f, Utils.chr(str[i]), b);
        }
        return b;
    }
    function foldr(f,b,str) {
        for (var i = str.length; i--; ) {
            b = A2(f, Utils.chr(str[i]), b);
        }
        return b;
    }

    function split(sep, str) {
        return List.fromArray(str.split(sep));
    }
    function join(sep, strs) {
        return List.toArray(strs).join(sep);
    }
    function repeat(n, str) {
        var result = '';
        while (n > 0) {
            if (n & 1) result += str;
            n >>= 1, str += str;
        }
        return result;
    }

    function slice(start, end, str) {
        return str.slice(start,end);
    }
    function left(n, str) {
        return n < 1 ? "" : str.slice(0,n);
    }
    function right(n, str) {
        return n < 1 ? "" : str.slice(-n);
    }
    function dropLeft(n, str) {
        return n < 1 ? str : str.slice(n);
    }
    function dropRight(n, str) {
        return n < 1 ? str : str.slice(0,-n);
    }

    function pad(n,chr,str) {
        var half = (n - str.length) / 2;
        return repeat(Math.ceil(half),chr) + str + repeat(half|0,chr);
    }
    function padRight(n,chr,str) {
        return str + repeat(n - str.length, chr);
    }
    function padLeft(n,chr,str) {
        return repeat(n - str.length, chr) + str;
    }

    function trim(str) {
        return str.trim();
    }
    function trimLeft(str) {
        return str.trimLeft();
    }
    function trimRight(str) {
        return str.trimRight();
    }

    function words(str) {
        return List.fromArray(str.trim().split(/\s+/g));
    }
    function lines(str) {
        return List.fromArray(str.split(/\r\n|\r|\n/g));
    }

    function toUpper(str) {
        return str.toUpperCase();
    }
    function toLower(str) {
        return str.toLowerCase();
    }

    function any(pred, str) {
        for (var i = str.length; i--; ) {
            if (pred(Utils.chr(str[i]))) return true;
        }
        return false;
    }
    function all(pred, str) {
        for (var i = str.length; i--; ) {
            if (!pred(Utils.chr(str[i]))) return false;
        }
        return true;
    }

    function contains(sub, str) {
        return str.indexOf(sub) > -1;
    }
    function startsWith(sub, str) {
        return str.indexOf(sub) === 0;
    }
    function endsWith(sub, str) {
        return str.length >= sub.length &&
               str.lastIndexOf(sub) === str.length - sub.length;
    }
    function indexes(sub, str) {
        var subLen = sub.length;
        var i = 0;
        var is = [];
        while ((i = str.indexOf(sub, i)) > -1) {
            is.push(i);
            i = i + subLen;
        }
        return List.fromArray(is);
    }

    function toInt(s) {
        var len = s.length;
        if (len === 0) {
            return Result.Err("could not convert string '" + s + "' to an Int" );
        }
        var start = 0;
        if (s[0] == '-') {
            if (len === 1) {
                return Result.Err("could not convert string '" + s + "' to an Int" );
            }
            start = 1;
        }
        for (var i = start; i < len; ++i) {
            if (!Char.isDigit(s[i])) {
                return Result.Err("could not convert string '" + s + "' to an Int" );
            }
        }
        return Result.Ok(parseInt(s, 10));
    }

    function toFloat(s) {
        var len = s.length;
        if (len === 0) {
            return Result.Err("could not convert string '" + s + "' to a Float" );
        }
        var start = 0;
        if (s[0] == '-') {
            if (len === 1) {
                return Result.Err("could not convert string '" + s + "' to a Float" );
            }
            start = 1;
        }
        var dotCount = 0;
        for (var i = start; i < len; ++i) {
            if (Char.isDigit(s[i])) {
                continue;
            }
            if (s[i] === '.') {
                dotCount += 1;
                if (dotCount <= 1) {
                    continue;
                }
            }
            return Result.Err("could not convert string '" + s + "' to a Float" );
        }
        return Result.Ok(parseFloat(s));
    }

    function toList(str) {
        return List.fromArray(str.split('').map(Utils.chr));
    }
    function fromList(chars) {
        return List.toArray(chars).join('');
    }

    return Elm.Native.String.values = {
        isEmpty: isEmpty,
        cons: F2(cons),
        uncons: uncons,
        append: F2(append),
        concat: concat,
        length: length,
        map: F2(map),
        filter: F2(filter),
        reverse: reverse,
        foldl: F3(foldl),
        foldr: F3(foldr),

        split: F2(split),
        join: F2(join),
        repeat: F2(repeat),

        slice: F3(slice),
        left: F2(left),
        right: F2(right),
        dropLeft: F2(dropLeft),
        dropRight: F2(dropRight),

        pad: F3(pad),
        padLeft: F3(padLeft),
        padRight: F3(padRight),

        trim: trim,
        trimLeft: trimLeft,
        trimRight: trimRight,

        words: words,
        lines: lines,

        toUpper: toUpper,
        toLower: toLower,

        any: F2(any),
        all: F2(all),

        contains: F2(contains),
        startsWith: F2(startsWith),
        endsWith: F2(endsWith),
        indexes: F2(indexes),

        toInt: toInt,
        toFloat: toFloat,
        toList: toList,
        fromList: fromList
    };
};

Elm.Native.Text = {};
Elm.Native.Text.make = function(elm) {
    elm.Native = elm.Native || {};
    elm.Native.Text = elm.Native.Text || {};
    if (elm.Native.Text.values) return elm.Native.Text.values;

    var toCss = Elm.Native.Color.make(elm).toCss;
    var Element = Elm.Graphics.Element.make(elm);
    var NativeElement = Elm.Native.Graphics.Element.make(elm);
    var List = Elm.Native.List.make(elm);
    var Utils = Elm.Native.Utils.make(elm);

    function makeSpaces(s) {
        if (s.length == 0) { return s; }
        var arr = s.split('');
        if (arr[0] == ' ') { arr[0] = "&nbsp;" }      
        for (var i = arr.length; --i; ) {
            if (arr[i][0] == ' ' && arr[i-1] == ' ') {
                arr[i-1] = arr[i-1] + arr[i];
                arr[i] = '';
            }
        }
        for (var i = arr.length; i--; ) {
            if (arr[i].length > 1 && arr[i][0] == ' ') {
                var spaces = arr[i].split('');
                for (var j = spaces.length - 2; j >= 0; j -= 2) {
                    spaces[j] = '&nbsp;';
                }
                arr[i] = spaces.join('');
            }
        }
        arr = arr.join('');
        if (arr[arr.length-1] === " ") {
            return arr.slice(0,-1) + '&nbsp;';
        }
        return arr;
    }

    function properEscape(str) {
        if (str.length == 0) return str;
        str = str //.replace(/&/g,  "&#38;")
            .replace(/"/g,  '&#34;')
            .replace(/'/g,  "&#39;")
            .replace(/</g,  "&#60;")
            .replace(/>/g,  "&#62;")
            .replace(/\n/g, "<br/>");
        var arr = str.split('<br/>');
        for (var i = arr.length; i--; ) {
            arr[i] = makeSpaces(arr[i]);
        }
        return arr.join('<br/>');
    }

    function fromString(str) {
        return Utils.txt(properEscape(str));
    }

    function append(xs, ys) {
        return Utils.txt(Utils.makeText(xs) + Utils.makeText(ys));
    }

    // conversions from Elm values to CSS
    function toTypefaces(list) {
        var typefaces = List.toArray(list);
        for (var i = typefaces.length; i--; ) {
            var typeface = typefaces[i];
            if (typeface.indexOf(' ') > -1) {
                typefaces[i] = "'" + typeface + "'";
            }
        }
        return typefaces.join(',');
    }
    function toLine(line) {
        var ctor = line.ctor;
        return ctor === 'Under' ? 'underline' :
               ctor === 'Over'  ? 'overline'  : 'line-through';
    }

    // setting styles of Text
    function style(style, text) {
        var newText = '<span style="color:' + toCss(style.color) + ';'
        if (style.typeface.ctor !== '[]') {
            newText += 'font-family:' + toTypefaces(style.typeface) + ';'
        }
        if (style.height.ctor !== "Nothing") {
            newText += 'font-size:' + style.height._0 + 'px;';
        }
        if (style.bold) {
            newText += 'font-weight:bold;';
        }
        if (style.italic) {
            newText += 'font-style:italic;';
        }
        if (style.line.ctor !== 'Nothing') {
            newText += 'text-decoration:' + toLine(style.line._0) + ';';
        }
        newText += '">' + Utils.makeText(text) + '</span>'
        return Utils.txt(newText);
    }
    function height(px, text) {
        return { style: 'font-size:' + px + 'px;', text:text }
    }
    function typeface(names, text) {
        return { style: 'font-family:' + toTypefaces(names) + ';', text:text }
    }
    function monospace(text) {
        return { style: 'font-family:monospace;', text:text }
    }
    function italic(text) {
        return { style: 'font-style:italic;', text:text }
    }
    function bold(text) {
        return { style: 'font-weight:bold;', text:text }
    }
    function link(href, text) {
        return { href: fromString(href), text:text };
    }
    function line(line, text) {
        return { style: 'text-decoration:' + toLine(line) + ';', text:text };
    }

    function color(color, text) {
        return { style: 'color:' + toCss(color) + ';', text:text };
    }

    function block(align) {
        return function(text) {
            var raw = {
                ctor :'RawHtml',
                html : Utils.makeText(text),
                align: align
            };
            var pos = A2(NativeElement.htmlHeight, 0, raw);
            return A3(Element.newElement, pos._0, pos._1, raw);
        }
    }

    function markdown(text) {
        var raw = {
            ctor:'RawHtml',
            html: text,
            align: null
        };
        var pos = A2(NativeElement.htmlHeight, 0, raw);
        return A3(Element.newElement, pos._0, pos._1, raw);
    }

    return elm.Native.Text.values = {
        fromString: fromString,
        append: F2(append),

        height : F2(height),
        italic : italic,
        bold : bold,
        line : F2(line),
        monospace : monospace,
        typeface : F2(typeface),
        color : F2(color),
        link : F2(link),
        style : F2(style),

        leftAligned  : block('left'),
        rightAligned : block('right'),
        centered     : block('center'),
        justified    : block('justify'),
        markdown     : markdown,

        toTypefaces:toTypefaces,
        toLine:toLine
    };
};

Elm.Native = Elm.Native || {};
Elm.Native.Utils = {};
Elm.Native.Utils.make = function(localRuntime) {

    localRuntime.Native = localRuntime.Native || {};
    localRuntime.Native.Utils = localRuntime.Native.Utils || {};
    if (localRuntime.Native.Utils.values) {
        return localRuntime.Native.Utils.values;
    }

    function eq(l,r) {
        var stack = [{'x': l, 'y': r}]
        while (stack.length > 0) {
            var front = stack.pop();
            var x = front.x;
            var y = front.y;
            if (x === y) continue;
            if (typeof x === "object") {
                var c = 0;
                for (var i in x) {
                    ++c;
                    if (i in y) {
                        if (i !== 'ctor') {
                            stack.push({ 'x': x[i], 'y': y[i] });
                        }
                    } else {
                        return false;
                    }
                }
                if ('ctor' in x) {
                    stack.push({'x': x.ctor, 'y': y.ctor});
                }
                if (c !== Object.keys(y).length) {
                    return false;
                };
            } else if (typeof x === 'function') {
                throw new Error('Equality error: general function equality is ' +
                                'undecidable, and therefore, unsupported');
            } else {
                return false;
            }
        }
        return true;
    }

    // code in Generate/JavaScript.hs depends on the particular
    // integer values assigned to LT, EQ, and GT
    var LT = -1, EQ = 0, GT = 1, ord = ['LT','EQ','GT'];
    function compare(x,y) { return { ctor: ord[cmp(x,y)+1] } }
    function cmp(x,y) {
        var ord;
        if (typeof x !== 'object'){
            return x === y ? EQ : x < y ? LT : GT;
        }
        else if (x.isChar){
            var a = x.toString();
            var b = y.toString();
            return a === b ? EQ : a < b ? LT : GT;
        }
        else if (x.ctor === "::" || x.ctor === "[]") {
            while (true) {
                if (x.ctor === "[]" && y.ctor === "[]") return EQ;
                if (x.ctor !== y.ctor) return x.ctor === '[]' ? LT : GT;
                ord = cmp(x._0, y._0);
                if (ord !== EQ) return ord;
                x = x._1;
                y = y._1;
            }
        }
        else if (x.ctor.slice(0,6) === '_Tuple') {
            var n = x.ctor.slice(6) - 0;
            var err = 'cannot compare tuples with more than 6 elements.';
            if (n === 0) return EQ;
            if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
            if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
            if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
            if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
            if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
            if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
            if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
            return EQ;
        }
        else {
            throw new Error('Comparison error: comparison is only defined on ints, ' +
                            'floats, times, chars, strings, lists of comparable values, ' +
                            'and tuples of comparable values.');
        }
    }


    var Tuple0 = { ctor: "_Tuple0" };
    function Tuple2(x,y) {
        return {
            ctor: "_Tuple2",
            _0: x,
            _1: y
        };
    }

    function chr(c) {
        var x = new String(c);
        x.isChar = true;
        return x;
    }

    function txt(str) {
        var t = new String(str);
        t.text = true;
        return t;
    }

    function makeText(text) {
        var style = '';
        var href = '';
        while (true) {
            if (text.style) {
                style += text.style;
                text = text.text;
                continue;
            }
            if (text.href) {
                href = text.href;
                text = text.text;
                continue;
            }
            if (href) {
                text = '<a href="' + href + '">' + text + '</a>';
            }
            if (style) {
                text = '<span style="' + style + '">' + text + '</span>';
            }
            return text;
        }
    }

    var count = 0;
    function guid(_) {
        return count++
    }

    function copy(oldRecord) {
        var newRecord = {};
        for (var key in oldRecord) {
            var value = key === '_'
                ? copy(oldRecord._)
                : oldRecord[key]
                ;
            newRecord[key] = value;
        }
        return newRecord;
    }

    function remove(key, oldRecord) {
        var record = copy(oldRecord);
        if (key in record._) {
            record[key] = record._[key][0];
            record._[key] = record._[key].slice(1);
            if (record._[key].length === 0) {
                delete record._[key];
            }
        } else {
            delete record[key];
        }
        return record;
    }

    function replace(keyValuePairs, oldRecord) {
        var record = copy(oldRecord);
        for (var i = keyValuePairs.length; i--; ) {
            var pair = keyValuePairs[i];
            record[pair[0]] = pair[1];
        }
        return record;
    }

    function insert(key, value, oldRecord) {
        var newRecord = copy(oldRecord);
        if (key in newRecord) {
            var values = newRecord._[key];
            var copiedValues = values ? values.slice(0) : [];
            newRecord._[key] = [newRecord[key]].concat(copiedValues);
        }
        newRecord[key] = value;
        return newRecord;
    }

    function getXY(e) {
        var posx = 0;
        var posy = 0;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        } else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }

        if (localRuntime.isEmbed()) {
            var rect = localRuntime.node.getBoundingClientRect();
            var relx = rect.left + document.body.scrollLeft + document.documentElement.scrollLeft;
            var rely = rect.top + document.body.scrollTop + document.documentElement.scrollTop;
            // TODO: figure out if there is a way to avoid rounding here
            posx = posx - Math.round(relx) - localRuntime.node.clientLeft;
            posy = posy - Math.round(rely) - localRuntime.node.clientTop;
        }
        return Tuple2(posx, posy);
    }


    //// LIST STUFF ////

    var Nil = { ctor:'[]' };

    function Cons(hd,tl) {
        return {
            ctor: "::",
            _0: hd,
            _1: tl
        };
    }

    function append(xs,ys) {
        // append Text
        if (xs.text || ys.text) {
            return txt(makeText(xs) + makeText(ys));
        }

        // append Strings
        if (typeof xs === "string") {
            return xs + ys;
        }

        // append Lists
        if (xs.ctor === '[]') {
            return ys;
        }
        var root = Cons(xs._0, Nil);
        var curr = root;
        xs = xs._1;
        while (xs.ctor !== '[]') {
            curr._1 = Cons(xs._0, Nil);
            xs = xs._1;
            curr = curr._1;
        }
        curr._1 = ys;
        return root;
    }

    //// RUNTIME ERRORS ////

    function indent(lines) {
        return '\n' + lines.join('\n');
    }

    function badCase(moduleName, span) { 
        var msg = indent([
            'Non-exhaustive pattern match in case-expression.',
            'Make sure your patterns cover every case!'
        ]);
        throw new Error('Runtime error in module ' + moduleName + ' (' + span + ')' + msg);
    }

    function badIf(moduleName, span) { 
        var msg = indent([
            'Non-exhaustive pattern match in multi-way-if expression.',
            'It is best to use \'otherwise\' as the last branch of multi-way-if.'
        ]);
        throw new Error('Runtime error in module ' + moduleName + ' (' + span + ')' + msg);
    }


    function badPort(expected, received) { 
        var msg = indent([
            'Expecting ' + expected + ' but was given ',
            JSON.stringify(received)
        ]);
        throw new Error('Runtime error when sending values through a port.' + msg);
    }


    return localRuntime.Native.Utils.values = {
        eq:eq,
        cmp:cmp,
        compare:F2(compare),
        Tuple0:Tuple0,
        Tuple2:Tuple2,
        chr:chr,
        txt:txt,
        makeText:makeText,
        copy: copy,
        remove: remove,
        replace: replace,
        insert: insert,
        guid: guid,
        getXY: getXY,

        Nil: Nil,
        Cons: Cons,
        append: F2(append),

        badCase: badCase,
        badIf: badIf,
        badPort: badPort
    };
};

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = createHash

function createHash(elem) {
    var attributes = elem.attributes
    var hash = {}

    if (attributes === null || attributes === undefined) {
        return hash
    }

    for (var i = 0; i < attributes.length; i++) {
        var attr = attributes[i]

        if (attr.name.substr(0,5) !== "data-") {
            continue
        }

        hash[attr.name.substr(5)] = attr.value
    }

    return hash
}

},{}],2:[function(require,module,exports){
var createStore = require("weakmap-shim/create-store")
var Individual = require("individual")

var createHash = require("./create-hash.js")

var hashStore = Individual("__DATA_SET_WEAKMAP@3", createStore())

module.exports = DataSet

function DataSet(elem) {
    var store = hashStore(elem)

    if (!store.hash) {
        store.hash = createHash(elem)
    }

    return store.hash
}

},{"./create-hash.js":1,"individual":3,"weakmap-shim/create-store":4}],3:[function(require,module,exports){
(function (global){
var root = typeof window !== 'undefined' ?
    window : typeof global !== 'undefined' ?
    global : {};

module.exports = Individual

function Individual(key, value) {
    if (root[key]) {
        return root[key]
    }

    Object.defineProperty(root, key, {
        value: value
        , configurable: true
    })

    return value
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
var hiddenStore = require('./hidden-store.js');

module.exports = createStore;

function createStore() {
    var key = {};

    return function (obj) {
        if (typeof obj !== 'object' || obj === null) {
            throw new Error('Weakmap-shim: Key must be object')
        }

        var store = obj.valueOf(key);
        return store && store.identity === key ?
            store : hiddenStore(obj, key);
    };
}

},{"./hidden-store.js":5}],5:[function(require,module,exports){
module.exports = hiddenStore;

function hiddenStore(obj, key) {
    var store = { identity: key };
    var valueOf = obj.valueOf;

    Object.defineProperty(obj, "valueOf", {
        value: function (value) {
            return value !== key ?
                valueOf.apply(this, arguments) : store;
        },
        writable: true
    });

    return store;
}

},{}],6:[function(require,module,exports){
var DataSet = require("data-set")

module.exports = addEvent

function addEvent(target, type, handler) {
    var ds = DataSet(target)
    var events = ds[type]

    if (!events) {
        ds[type] = handler
    } else if (Array.isArray(events)) {
        if (events.indexOf(handler) === -1) {
            events.push(handler)
        }
    } else if (events !== handler) {
        ds[type] = [events, handler]
    }
}

},{"data-set":2}],7:[function(require,module,exports){
var globalDocument = require("global/document")
var DataSet = require("data-set")
var createStore = require("weakmap-shim/create-store")

var addEvent = require("./add-event.js")
var removeEvent = require("./remove-event.js")
var ProxyEvent = require("./proxy-event.js")

var HANDLER_STORE = createStore()

module.exports = DOMDelegator

function DOMDelegator(document) {
    document = document || globalDocument

    this.target = document.documentElement
    this.events = {}
    this.rawEventListeners = {}
    this.globalListeners = {}
}

DOMDelegator.prototype.addEventListener = addEvent
DOMDelegator.prototype.removeEventListener = removeEvent

DOMDelegator.prototype.allocateHandle =
    function allocateHandle(func) {
        var handle = new Handle()

        HANDLER_STORE(handle).func = func;

        return handle
    }

DOMDelegator.prototype.transformHandle =
    function transformHandle(handle, lambda) {
        var func = HANDLER_STORE(handle).func

        return this.allocateHandle(function (ev) {
            var result = lambda(ev)
            if (result) {
                func(result)
            }
        })
    }

DOMDelegator.prototype.addGlobalEventListener =
    function addGlobalEventListener(eventName, fn) {
        var listeners = this.globalListeners[eventName] || [];
        if (listeners.indexOf(fn) === -1) {
            listeners.push(fn)
        }

        this.globalListeners[eventName] = listeners;
    }

DOMDelegator.prototype.removeGlobalEventListener =
    function removeGlobalEventListener(eventName, fn) {
        var listeners = this.globalListeners[eventName] || [];

        var index = listeners.indexOf(fn)
        if (index !== -1) {
            listeners.splice(index, 1)
        }
    }

DOMDelegator.prototype.listenTo = function listenTo(eventName) {
    if (this.events[eventName]) {
        return
    }

    this.events[eventName] = true

    var listener = this.rawEventListeners[eventName]
    if (!listener) {
        listener = this.rawEventListeners[eventName] =
            createHandler(eventName, this)
    }

    this.target.addEventListener(eventName, listener, true)
}

DOMDelegator.prototype.unlistenTo = function unlistenTo(eventName) {
    if (!this.events[eventName]) {
        return
    }

    this.events[eventName] = false
    var listener = this.rawEventListeners[eventName]

    if (!listener) {
        throw new Error("dom-delegator#unlistenTo: cannot " +
            "unlisten to " + eventName)
    }

    this.target.removeEventListener(eventName, listener, true)
}

function createHandler(eventName, delegator) {
    var globalListeners = delegator.globalListeners;
    var delegatorTarget = delegator.target;

    return handler

    function handler(ev) {
        var globalHandlers = globalListeners[eventName] || []

        if (globalHandlers.length > 0) {
            var globalEvent = new ProxyEvent(ev);
            globalEvent.currentTarget = delegatorTarget;
            callListeners(globalHandlers, globalEvent)
        }

        findAndInvokeListeners(ev.target, ev, eventName)
    }
}

function findAndInvokeListeners(elem, ev, eventName) {
    var listener = getListener(elem, eventName)

    if (listener && listener.handlers.length > 0) {
        var listenerEvent = new ProxyEvent(ev);
        listenerEvent.currentTarget = listener.currentTarget
        callListeners(listener.handlers, listenerEvent)

        if (listenerEvent._bubbles) {
            var nextTarget = listener.currentTarget.parentNode
            findAndInvokeListeners(nextTarget, ev, eventName)
        }
    }
}

function getListener(target, type) {
    // terminate recursion if parent is `null`
    if (target === null) {
        return null
    }

    var ds = DataSet(target)
    // fetch list of handler fns for this event
    var handler = ds[type]
    var allHandler = ds.event

    if (!handler && !allHandler) {
        return getListener(target.parentNode, type)
    }

    var handlers = [].concat(handler || [], allHandler || [])
    return new Listener(target, handlers)
}

function callListeners(handlers, ev) {
    handlers.forEach(function (handler) {
        if (typeof handler === "function") {
            handler(ev)
        } else if (typeof handler.handleEvent === "function") {
            handler.handleEvent(ev)
        } else if (handler.type === "dom-delegator-handle") {
            HANDLER_STORE(handler).func(ev)
        } else {
            throw new Error("dom-delegator: unknown handler " +
                "found: " + JSON.stringify(handlers));
        }
    })
}

function Listener(target, handlers) {
    this.currentTarget = target
    this.handlers = handlers
}

function Handle() {
    this.type = "dom-delegator-handle"
}

},{"./add-event.js":6,"./proxy-event.js":15,"./remove-event.js":16,"data-set":2,"global/document":10,"weakmap-shim/create-store":13}],8:[function(require,module,exports){
var Individual = require("individual")
var cuid = require("cuid")
var globalDocument = require("global/document")

var DOMDelegator = require("./dom-delegator.js")

var delegatorCache = Individual("__DOM_DELEGATOR_CACHE@9", {
    delegators: {}
})
var commonEvents = [
    "blur", "change", "click",  "contextmenu", "dblclick",
    "error","focus", "focusin", "focusout", "input", "keydown",
    "keypress", "keyup", "load", "mousedown", "mouseup",
    "resize", "scroll", "select", "submit", "touchcancel",
    "touchend", "touchstart", "unload"
]

/*  Delegator is a thin wrapper around a singleton `DOMDelegator`
        instance.

    Only one DOMDelegator should exist because we do not want
        duplicate event listeners bound to the DOM.

    `Delegator` will also `listenTo()` all events unless 
        every caller opts out of it
*/
module.exports = Delegator

function Delegator(opts) {
    opts = opts || {}
    var document = opts.document || globalDocument

    var cacheKey = document["__DOM_DELEGATOR_CACHE_TOKEN@9"]

    if (!cacheKey) {
        cacheKey =
            document["__DOM_DELEGATOR_CACHE_TOKEN@9"] = cuid()
    }

    var delegator = delegatorCache.delegators[cacheKey]

    if (!delegator) {
        delegator = delegatorCache.delegators[cacheKey] =
            new DOMDelegator(document)
    }

    if (opts.defaultEvents !== false) {
        for (var i = 0; i < commonEvents.length; i++) {
            delegator.listenTo(commonEvents[i])
        }
    }

    return delegator
}



},{"./dom-delegator.js":7,"cuid":9,"global/document":10,"individual":11}],9:[function(require,module,exports){
/**
 * cuid.js
 * Collision-resistant UID generator for browsers and node.
 * Sequential for fast db lookups and recency sorting.
 * Safe for element IDs and server-side lookups.
 *
 * Extracted from CLCTR
 * 
 * Copyright (c) Eric Elliott 2012
 * MIT License
 */

/*global window, navigator, document, require, process, module */
(function (app) {
  'use strict';
  var namespace = 'cuid',
    c = 0,
    blockSize = 4,
    base = 36,
    discreteValues = Math.pow(base, blockSize),

    pad = function pad(num, size) {
      var s = "000000000" + num;
      return s.substr(s.length-size);
    },

    randomBlock = function randomBlock() {
      return pad((Math.random() *
            discreteValues << 0)
            .toString(base), blockSize);
    },

    safeCounter = function () {
      c = (c < discreteValues) ? c : 0;
      c++; // this is not subliminal
      return c - 1;
    },

    api = function cuid() {
      // Starting with a lowercase letter makes
      // it HTML element ID friendly.
      var letter = 'c', // hard-coded allows for sequential access

        // timestamp
        // warning: this exposes the exact date and time
        // that the uid was created.
        timestamp = (new Date().getTime()).toString(base),

        // Prevent same-machine collisions.
        counter,

        // A few chars to generate distinct ids for different
        // clients (so different computers are far less
        // likely to generate the same id)
        fingerprint = api.fingerprint(),

        // Grab some more chars from Math.random()
        random = randomBlock() + randomBlock();

        counter = pad(safeCounter().toString(base), blockSize);

      return  (letter + timestamp + counter + fingerprint + random);
    };

  api.slug = function slug() {
    var date = new Date().getTime().toString(36),
      counter,
      print = api.fingerprint().slice(0,1) +
        api.fingerprint().slice(-1),
      random = randomBlock().slice(-2);

      counter = safeCounter().toString(36).slice(-4);

    return date.slice(-2) + 
      counter + print + random;
  };

  api.globalCount = function globalCount() {
    // We want to cache the results of this
    var cache = (function calc() {
        var i,
          count = 0;

        for (i in window) {
          count++;
        }

        return count;
      }());

    api.globalCount = function () { return cache; };
    return cache;
  };

  api.fingerprint = function browserPrint() {
    return pad((navigator.mimeTypes.length +
      navigator.userAgent.length).toString(36) +
      api.globalCount().toString(36), 4);
  };

  // don't change anything from here down.
  if (app.register) {
    app.register(namespace, api);
  } else if (typeof module !== 'undefined') {
    module.exports = api;
  } else {
    app[namespace] = api;
  }

}(this.applitude || this));

},{}],10:[function(require,module,exports){
(function (global){
var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = require('min-document');

if (typeof document !== 'undefined') {
    module.exports = document;
} else {
    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }

    module.exports = doccy;
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"min-document":40}],11:[function(require,module,exports){
module.exports=require(3)
},{}],12:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],13:[function(require,module,exports){
module.exports=require(4)
},{"./hidden-store.js":14}],14:[function(require,module,exports){
module.exports=require(5)
},{}],15:[function(require,module,exports){
var inherits = require("inherits")

var ALL_PROPS = [
    "altKey", "bubbles", "cancelable", "ctrlKey",
    "eventPhase", "metaKey", "relatedTarget", "shiftKey",
    "target", "timeStamp", "type", "view", "which"
]
var KEY_PROPS = ["char", "charCode", "key", "keyCode"]
var MOUSE_PROPS = [
    "button", "buttons", "clientX", "clientY", "layerX",
    "layerY", "offsetX", "offsetY", "pageX", "pageY",
    "screenX", "screenY", "toElement"
]

var rkeyEvent = /^key|input/
var rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/

module.exports = ProxyEvent

function ProxyEvent(ev) {
    if (!(this instanceof ProxyEvent)) {
        return new ProxyEvent(ev)
    }

    if (rkeyEvent.test(ev.type)) {
        return new KeyEvent(ev)
    } else if (rmouseEvent.test(ev.type)) {
        return new MouseEvent(ev)
    }

    for (var i = 0; i < ALL_PROPS.length; i++) {
        var propKey = ALL_PROPS[i]
        this[propKey] = ev[propKey]
    }

    this._rawEvent = ev
    this._bubbles = false;
}

ProxyEvent.prototype.preventDefault = function () {
    this._rawEvent.preventDefault()
}

ProxyEvent.prototype.startPropagation = function () {
    this._bubbles = true;
}

function MouseEvent(ev) {
    for (var i = 0; i < ALL_PROPS.length; i++) {
        var propKey = ALL_PROPS[i]
        this[propKey] = ev[propKey]
    }

    for (var j = 0; j < MOUSE_PROPS.length; j++) {
        var mousePropKey = MOUSE_PROPS[j]
        this[mousePropKey] = ev[mousePropKey]
    }

    this._rawEvent = ev
}

inherits(MouseEvent, ProxyEvent)

function KeyEvent(ev) {
    for (var i = 0; i < ALL_PROPS.length; i++) {
        var propKey = ALL_PROPS[i]
        this[propKey] = ev[propKey]
    }

    for (var j = 0; j < KEY_PROPS.length; j++) {
        var keyPropKey = KEY_PROPS[j]
        this[keyPropKey] = ev[keyPropKey]
    }

    this._rawEvent = ev
}

inherits(KeyEvent, ProxyEvent)

},{"inherits":12}],16:[function(require,module,exports){
var DataSet = require("data-set")

module.exports = removeEvent

function removeEvent(target, type, handler) {
    var ds = DataSet(target)
    var events = ds[type]

    if (!events) {
        return
    } else if (Array.isArray(events)) {
        var index = events.indexOf(handler)
        if (index !== -1) {
            events.splice(index, 1)
        }
    } else if (events === handler) {
        ds[type] = null
    }
}

},{"data-set":2}],17:[function(require,module,exports){
var isObject = require("is-object")
var isHook = require("vtree/is-vhook")

module.exports = applyProperties

function applyProperties(node, props, previous) {
    for (var propName in props) {
        var propValue = props[propName]

        if (propValue === undefined) {
            removeProperty(node, props, previous, propName);
        } else if (isHook(propValue)) {
            propValue.hook(node,
                propName,
                previous ? previous[propName] : undefined)
        } else {
            if (isObject(propValue)) {
                patchObject(node, props, previous, propName, propValue);
            } else if (propValue !== undefined) {
                node[propName] = propValue
            }
        }
    }
}

function removeProperty(node, props, previous, propName) {
    if (previous) {
        var previousValue = previous[propName]

        if (!isHook(previousValue)) {
            if (propName === "attributes") {
                for (var attrName in previousValue) {
                    node.removeAttribute(attrName)
                }
            } else if (propName === "style") {
                for (var i in previousValue) {
                    node.style[i] = ""
                }
            } else if (typeof previousValue === "string") {
                node[propName] = ""
            } else {
                node[propName] = null
            }
        }
    }
}

function patchObject(node, props, previous, propName, propValue) {
    var previousValue = previous ? previous[propName] : undefined

    // Set attributes
    if (propName === "attributes") {
        for (var attrName in propValue) {
            var attrValue = propValue[attrName]

            if (attrValue === undefined) {
                node.removeAttribute(attrName)
            } else {
                node.setAttribute(attrName, attrValue)
            }
        }

        return
    }

    if(previousValue && isObject(previousValue) &&
        getPrototype(previousValue) !== getPrototype(propValue)) {
        node[propName] = propValue
        return
    }

    if (!isObject(node[propName])) {
        node[propName] = {}
    }

    var replacer = propName === "style" ? "" : undefined

    for (var k in propValue) {
        var value = propValue[k]
        node[propName][k] = (value === undefined) ? replacer : value
    }
}

function getPrototype(value) {
    if (Object.getPrototypeOf) {
        return Object.getPrototypeOf(value)
    } else if (value.__proto__) {
        return value.__proto__
    } else if (value.constructor) {
        return value.constructor.prototype
    }
}

},{"is-object":21,"vtree/is-vhook":29}],18:[function(require,module,exports){
var document = require("global/document")

var applyProperties = require("./apply-properties")

var isVNode = require("vtree/is-vnode")
var isVText = require("vtree/is-vtext")
var isWidget = require("vtree/is-widget")
var handleThunk = require("vtree/handle-thunk")

module.exports = createElement

function createElement(vnode, opts) {
    var doc = opts ? opts.document || document : document
    var warn = opts ? opts.warn : null

    vnode = handleThunk(vnode).a

    if (isWidget(vnode)) {
        return vnode.init()
    } else if (isVText(vnode)) {
        return doc.createTextNode(vnode.text)
    } else if (!isVNode(vnode)) {
        if (warn) {
            warn("Item is not a valid virtual dom node", vnode)
        }
        return null
    }

    var node = (vnode.namespace === null) ?
        doc.createElement(vnode.tagName) :
        doc.createElementNS(vnode.namespace, vnode.tagName)

    var props = vnode.properties
    applyProperties(node, props)

    var children = vnode.children

    for (var i = 0; i < children.length; i++) {
        var childNode = createElement(children[i], opts)
        if (childNode) {
            node.appendChild(childNode)
        }
    }

    return node
}

},{"./apply-properties":17,"global/document":20,"vtree/handle-thunk":27,"vtree/is-vnode":30,"vtree/is-vtext":31,"vtree/is-widget":32}],19:[function(require,module,exports){
// Maps a virtual DOM tree onto a real DOM tree in an efficient manner.
// We don't want to read all of the DOM nodes in the tree so we use
// the in-order tree indexing to eliminate recursion down certain branches.
// We only recurse into a DOM node if we know that it contains a child of
// interest.

var noChild = {}

module.exports = domIndex

function domIndex(rootNode, tree, indices, nodes) {
    if (!indices || indices.length === 0) {
        return {}
    } else {
        indices.sort(ascending)
        return recurse(rootNode, tree, indices, nodes, 0)
    }
}

function recurse(rootNode, tree, indices, nodes, rootIndex) {
    nodes = nodes || {}


    if (rootNode) {
        if (indexInRange(indices, rootIndex, rootIndex)) {
            nodes[rootIndex] = rootNode
        }

        var vChildren = tree.children

        if (vChildren) {

            var childNodes = rootNode.childNodes

            for (var i = 0; i < tree.children.length; i++) {
                rootIndex += 1

                var vChild = vChildren[i] || noChild
                var nextIndex = rootIndex + (vChild.count || 0)

                // skip recursion down the tree if there are no nodes down here
                if (indexInRange(indices, rootIndex, nextIndex)) {
                    recurse(childNodes[i], vChild, indices, nodes, rootIndex)
                }

                rootIndex = nextIndex
            }
        }
    }

    return nodes
}

// Binary search for an index in the interval [left, right]
function indexInRange(indices, left, right) {
    if (indices.length === 0) {
        return false
    }

    var minIndex = 0
    var maxIndex = indices.length - 1
    var currentIndex
    var currentItem

    while (minIndex <= maxIndex) {
        currentIndex = ((maxIndex + minIndex) / 2) >> 0
        currentItem = indices[currentIndex]

        if (minIndex === maxIndex) {
            return currentItem >= left && currentItem <= right
        } else if (currentItem < left) {
            minIndex = currentIndex + 1
        } else  if (currentItem > right) {
            maxIndex = currentIndex - 1
        } else {
            return true
        }
    }

    return false;
}

function ascending(a, b) {
    return a > b ? 1 : -1
}

},{}],20:[function(require,module,exports){
module.exports=require(10)
},{"min-document":40}],21:[function(require,module,exports){
module.exports = isObject

function isObject(x) {
    return typeof x === "object" && x !== null
}

},{}],22:[function(require,module,exports){
var nativeIsArray = Array.isArray
var toString = Object.prototype.toString

module.exports = nativeIsArray || isArray

function isArray(obj) {
    return toString.call(obj) === "[object Array]"
}

},{}],23:[function(require,module,exports){
var applyProperties = require("./apply-properties")

var isWidget = require("vtree/is-widget")
var VPatch = require("vtree/vpatch")

var render = require("./create-element")
var updateWidget = require("./update-widget")

module.exports = applyPatch

function applyPatch(vpatch, domNode, renderOptions) {
    var type = vpatch.type
    var vNode = vpatch.vNode
    var patch = vpatch.patch

    switch (type) {
        case VPatch.REMOVE:
            return removeNode(domNode, vNode)
        case VPatch.INSERT:
            return insertNode(domNode, patch, renderOptions)
        case VPatch.VTEXT:
            return stringPatch(domNode, vNode, patch, renderOptions)
        case VPatch.WIDGET:
            return widgetPatch(domNode, vNode, patch, renderOptions)
        case VPatch.VNODE:
            return vNodePatch(domNode, vNode, patch, renderOptions)
        case VPatch.ORDER:
            reorderChildren(domNode, patch)
            return domNode
        case VPatch.PROPS:
            applyProperties(domNode, patch, vNode.properties)
            return domNode
        case VPatch.THUNK:
            return replaceRoot(domNode,
                renderOptions.patch(domNode, patch, renderOptions))
        default:
            return domNode
    }
}

function removeNode(domNode, vNode) {
    var parentNode = domNode.parentNode

    if (parentNode) {
        parentNode.removeChild(domNode)
    }

    destroyWidget(domNode, vNode);

    return null
}

function insertNode(parentNode, vNode, renderOptions) {
    var newNode = render(vNode, renderOptions)

    if (parentNode) {
        parentNode.appendChild(newNode)
    }

    return parentNode
}

function stringPatch(domNode, leftVNode, vText, renderOptions) {
    var newNode

    if (domNode.nodeType === 3) {
        domNode.replaceData(0, domNode.length, vText.text)
        newNode = domNode
    } else {
        var parentNode = domNode.parentNode
        newNode = render(vText, renderOptions)

        if (parentNode) {
            parentNode.replaceChild(newNode, domNode)
        }
    }

    destroyWidget(domNode, leftVNode)

    return newNode
}

function widgetPatch(domNode, leftVNode, widget, renderOptions) {
    if (updateWidget(leftVNode, widget)) {
        return widget.update(leftVNode, domNode) || domNode
    }

    var parentNode = domNode.parentNode
    var newWidget = render(widget, renderOptions)

    if (parentNode) {
        parentNode.replaceChild(newWidget, domNode)
    }

    destroyWidget(domNode, leftVNode)

    return newWidget
}

function vNodePatch(domNode, leftVNode, vNode, renderOptions) {
    var parentNode = domNode.parentNode
    var newNode = render(vNode, renderOptions)

    if (parentNode) {
        parentNode.replaceChild(newNode, domNode)
    }

    destroyWidget(domNode, leftVNode)

    return newNode
}

function destroyWidget(domNode, w) {
    if (typeof w.destroy === "function" && isWidget(w)) {
        w.destroy(domNode)
    }
}

function reorderChildren(domNode, bIndex) {
    var children = []
    var childNodes = domNode.childNodes
    var len = childNodes.length
    var i
    var reverseIndex = bIndex.reverse

    for (i = 0; i < len; i++) {
        children.push(domNode.childNodes[i])
    }

    var insertOffset = 0
    var move
    var node
    var insertNode
    for (i = 0; i < len; i++) {
        move = bIndex[i]
        if (move !== undefined && move !== i) {
            // the element currently at this index will be moved later so increase the insert offset
            if (reverseIndex[i] > i) {
                insertOffset++
            }

            node = children[move]
            insertNode = childNodes[i + insertOffset] || null
            if (node !== insertNode) {
                domNode.insertBefore(node, insertNode)
            }

            // the moved element came from the front of the array so reduce the insert offset
            if (move < i) {
                insertOffset--
            }
        }

        // element at this index is scheduled to be removed so increase insert offset
        if (i in bIndex.removes) {
            insertOffset++
        }
    }
}

function replaceRoot(oldRoot, newRoot) {
    if (oldRoot && newRoot && oldRoot !== newRoot && oldRoot.parentNode) {
        console.log(oldRoot)
        oldRoot.parentNode.replaceChild(newRoot, oldRoot)
    }

    return newRoot;
}

},{"./apply-properties":17,"./create-element":18,"./update-widget":25,"vtree/is-widget":32,"vtree/vpatch":37}],24:[function(require,module,exports){
var document = require("global/document")
var isArray = require("x-is-array")

var domIndex = require("./dom-index")
var patchOp = require("./patch-op")
module.exports = patch

function patch(rootNode, patches) {
    return patchRecursive(rootNode, patches)
}

function patchRecursive(rootNode, patches, renderOptions) {
    var indices = patchIndices(patches)

    if (indices.length === 0) {
        return rootNode
    }

    var index = domIndex(rootNode, patches.a, indices)
    var ownerDocument = rootNode.ownerDocument

    if (!renderOptions) {
        renderOptions = { patch: patchRecursive }
        if (ownerDocument !== document) {
            renderOptions.document = ownerDocument
        }
    }

    for (var i = 0; i < indices.length; i++) {
        var nodeIndex = indices[i]
        rootNode = applyPatch(rootNode,
            index[nodeIndex],
            patches[nodeIndex],
            renderOptions)
    }

    return rootNode
}

function applyPatch(rootNode, domNode, patchList, renderOptions) {
    if (!domNode) {
        return rootNode
    }

    var newNode

    if (isArray(patchList)) {
        for (var i = 0; i < patchList.length; i++) {
            newNode = patchOp(patchList[i], domNode, renderOptions)

            if (domNode === rootNode) {
                rootNode = newNode
            }
        }
    } else {
        newNode = patchOp(patchList, domNode, renderOptions)

        if (domNode === rootNode) {
            rootNode = newNode
        }
    }

    return rootNode
}

function patchIndices(patches) {
    var indices = []

    for (var key in patches) {
        if (key !== "a") {
            indices.push(Number(key))
        }
    }

    return indices
}

},{"./dom-index":19,"./patch-op":23,"global/document":20,"x-is-array":22}],25:[function(require,module,exports){
var isWidget = require("vtree/is-widget")

module.exports = updateWidget

function updateWidget(a, b) {
    if (isWidget(a) && isWidget(b)) {
        if ("name" in a && "name" in b) {
            return a.id === b.id
        } else {
            return a.init === b.init
        }
    }

    return false
}

},{"vtree/is-widget":32}],26:[function(require,module,exports){
var isArray = require("x-is-array")
var isObject = require("is-object")

var VPatch = require("./vpatch")
var isVNode = require("./is-vnode")
var isVText = require("./is-vtext")
var isWidget = require("./is-widget")
var isThunk = require("./is-thunk")
var handleThunk = require("./handle-thunk")

module.exports = diff

function diff(a, b) {
    var patch = { a: a }
    walk(a, b, patch, 0)
    return patch
}

function walk(a, b, patch, index) {
    if (a === b) {
        if (isThunk(a) || isThunk(b)) {
            thunks(a, b, patch, index)
        } else {
            hooks(b, patch, index)
        }
        return
    }

    var apply = patch[index]

    if (b == null) {
        apply = appendPatch(apply, new VPatch(VPatch.REMOVE, a, b))
        destroyWidgets(a, patch, index)
    } else if (isThunk(a) || isThunk(b)) {
        thunks(a, b, patch, index)
    } else if (isVNode(b)) {
        if (isVNode(a)) {
            if (a.tagName === b.tagName &&
                a.namespace === b.namespace &&
                a.key === b.key) {
                var propsPatch = diffProps(a.properties, b.properties, b.hooks)
                if (propsPatch) {
                    apply = appendPatch(apply,
                        new VPatch(VPatch.PROPS, a, propsPatch))
                }
                apply = diffChildren(a, b, patch, apply, index)
            } else {
                apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
                destroyWidgets(a, patch, index)
            }
        } else {
            apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
            destroyWidgets(a, patch, index)
        }
    } else if (isVText(b)) {
        if (!isVText(a)) {
            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
            destroyWidgets(a, patch, index)
        } else if (a.text !== b.text) {
            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
        }
    } else if (isWidget(b)) {
        apply = appendPatch(apply, new VPatch(VPatch.WIDGET, a, b))

        if (!isWidget(a)) {
            destroyWidgets(a, patch, index)
        }
    }

    if (apply) {
        patch[index] = apply
    }
}

function diffProps(a, b, hooks) {
    var diff

    for (var aKey in a) {
        if (!(aKey in b)) {
            diff = diff || {}
            diff[aKey] = undefined
        }

        var aValue = a[aKey]
        var bValue = b[aKey]

        if (hooks && aKey in hooks) {
            diff = diff || {}
            diff[aKey] = bValue
        } else {
            if (isObject(aValue) && isObject(bValue)) {
                if (getPrototype(bValue) !== getPrototype(aValue)) {
                    diff = diff || {}
                    diff[aKey] = bValue
                } else {
                    var objectDiff = diffProps(aValue, bValue)
                    if (objectDiff) {
                        diff = diff || {}
                        diff[aKey] = objectDiff
                    }
                }
            } else if (aValue !== bValue) {
                diff = diff || {}
                diff[aKey] = bValue
            }
        }
    }

    for (var bKey in b) {
        if (!(bKey in a)) {
            diff = diff || {}
            diff[bKey] = b[bKey]
        }
    }

    return diff
}

function getPrototype(value) {
    if (Object.getPrototypeOf) {
        return Object.getPrototypeOf(value)
    } else if (value.__proto__) {
        return value.__proto__
    } else if (value.constructor) {
        return value.constructor.prototype
    }
}

function diffChildren(a, b, patch, apply, index) {
    var aChildren = a.children
    var bChildren = reorder(aChildren, b.children)

    var aLen = aChildren.length
    var bLen = bChildren.length
    var len = aLen > bLen ? aLen : bLen

    for (var i = 0; i < len; i++) {
        var leftNode = aChildren[i]
        var rightNode = bChildren[i]
        index += 1

        if (!leftNode) {
            if (rightNode) {
                // Excess nodes in b need to be added
                apply = appendPatch(apply,
                    new VPatch(VPatch.INSERT, null, rightNode))
            }
        } else if (!rightNode) {
            if (leftNode) {
                // Excess nodes in a need to be removed
                patch[index] = new VPatch(VPatch.REMOVE, leftNode, null)
                destroyWidgets(leftNode, patch, index)
            }
        } else {
            walk(leftNode, rightNode, patch, index)
        }

        if (isVNode(leftNode) && leftNode.count) {
            index += leftNode.count
        }
    }

    if (bChildren.moves) {
        // Reorder nodes last
        apply = appendPatch(apply, new VPatch(VPatch.ORDER, a, bChildren.moves))
    }

    return apply
}

// Patch records for all destroyed widgets must be added because we need
// a DOM node reference for the destroy function
function destroyWidgets(vNode, patch, index) {
    if (isWidget(vNode)) {
        if (typeof vNode.destroy === "function") {
            patch[index] = new VPatch(VPatch.REMOVE, vNode, null)
        }
    } else if (isVNode(vNode) && vNode.hasWidgets) {
        var children = vNode.children
        var len = children.length
        for (var i = 0; i < len; i++) {
            var child = children[i]
            index += 1

            destroyWidgets(child, patch, index)

            if (isVNode(child) && child.count) {
                index += child.count
            }
        }
    }
}

// Create a sub-patch for thunks
function thunks(a, b, patch, index) {
    var nodes = handleThunk(a, b);
    var thunkPatch = diff(nodes.a, nodes.b)
    if (hasPatches(thunkPatch)) {
        patch[index] = new VPatch(VPatch.THUNK, null, thunkPatch)
    }
}

function hasPatches(patch) {
    for (var index in patch) {
        if (index !== "a") {
            return true;
        }
    }

    return false;
}

// Execute hooks when two nodes are identical
function hooks(vNode, patch, index) {
    if (isVNode(vNode)) {
        if (vNode.hooks) {
            patch[index] = new VPatch(VPatch.PROPS, vNode.hooks, vNode.hooks)
        }

        if (vNode.descendantHooks) {
            var children = vNode.children
            var len = children.length
            for (var i = 0; i < len; i++) {
                var child = children[i]
                index += 1

                hooks(child, patch, index)

                if (isVNode(child) && child.count) {
                    index += child.count
                }
            }
        }
    }
}

// List diff, naive left to right reordering
function reorder(aChildren, bChildren) {

    var bKeys = keyIndex(bChildren)

    if (!bKeys) {
        return bChildren
    }

    var aKeys = keyIndex(aChildren)

    if (!aKeys) {
        return bChildren
    }

    var bMatch = {}, aMatch = {}

    for (var key in bKeys) {
        bMatch[bKeys[key]] = aKeys[key]
    }

    for (var key in aKeys) {
        aMatch[aKeys[key]] = bKeys[key]
    }

    var aLen = aChildren.length
    var bLen = bChildren.length
    var len = aLen > bLen ? aLen : bLen
    var shuffle = []
    var freeIndex = 0
    var i = 0
    var moveIndex = 0
    var moves = {}
    var removes = moves.removes = {}
    var reverse = moves.reverse = {}
    var hasMoves = false

    while (freeIndex < len) {
        var move = aMatch[i]
        if (move !== undefined) {
            shuffle[i] = bChildren[move]
            if (move !== moveIndex) {
                moves[move] = moveIndex
                reverse[moveIndex] = move
                hasMoves = true
            }
            moveIndex++
        } else if (i in aMatch) {
            shuffle[i] = undefined
            removes[i] = moveIndex++
            hasMoves = true
        } else {
            while (bMatch[freeIndex] !== undefined) {
                freeIndex++
            }

            if (freeIndex < len) {
                var freeChild = bChildren[freeIndex]
                if (freeChild) {
                    shuffle[i] = freeChild
                    if (freeIndex !== moveIndex) {
                        hasMoves = true
                        moves[freeIndex] = moveIndex
                        reverse[moveIndex] = freeIndex
                    }
                    moveIndex++
                }
                freeIndex++
            }
        }
        i++
    }

    if (hasMoves) {
        shuffle.moves = moves
    }

    return shuffle
}

function keyIndex(children) {
    var i, keys

    for (i = 0; i < children.length; i++) {
        var child = children[i]

        if (child.key !== undefined) {
            keys = keys || {}
            keys[child.key] = i
        }
    }

    return keys
}

function appendPatch(apply, patch) {
    if (apply) {
        if (isArray(apply)) {
            apply.push(patch)
        } else {
            apply = [apply, patch]
        }

        return apply
    } else {
        return patch
    }
}

},{"./handle-thunk":27,"./is-thunk":28,"./is-vnode":30,"./is-vtext":31,"./is-widget":32,"./vpatch":37,"is-object":33,"x-is-array":34}],27:[function(require,module,exports){
var isVNode = require("./is-vnode")
var isVText = require("./is-vtext")
var isWidget = require("./is-widget")
var isThunk = require("./is-thunk")

module.exports = handleThunk

function handleThunk(a, b) {
    var renderedA = a
    var renderedB = b

    if (isThunk(b)) {
        renderedB = renderThunk(b, a)
    }

    if (isThunk(a)) {
        renderedA = renderThunk(a, null)
    }

    return {
        a: renderedA,
        b: renderedB
    }
}

function renderThunk(thunk, previous) {
    var renderedThunk = thunk.vnode

    if (!renderedThunk) {
        renderedThunk = thunk.vnode = thunk.render(previous)
    }

    if (!(isVNode(renderedThunk) ||
            isVText(renderedThunk) ||
            isWidget(renderedThunk))) {
        throw new Error("thunk did not return a valid node");
    }

    return renderedThunk
}

},{"./is-thunk":28,"./is-vnode":30,"./is-vtext":31,"./is-widget":32}],28:[function(require,module,exports){
module.exports = isThunk

function isThunk(t) {
    return t && t.type === "Thunk"
}

},{}],29:[function(require,module,exports){
module.exports = isHook

function isHook(hook) {
    return hook && typeof hook.hook === "function" &&
        !hook.hasOwnProperty("hook")
}

},{}],30:[function(require,module,exports){
var version = require("./version")

module.exports = isVirtualNode

function isVirtualNode(x) {
    return x && x.type === "VirtualNode" && x.version === version
}

},{"./version":35}],31:[function(require,module,exports){
var version = require("./version")

module.exports = isVirtualText

function isVirtualText(x) {
    return x && x.type === "VirtualText" && x.version === version
}

},{"./version":35}],32:[function(require,module,exports){
module.exports = isWidget

function isWidget(w) {
    return w && w.type === "Widget"
}

},{}],33:[function(require,module,exports){
module.exports=require(21)
},{}],34:[function(require,module,exports){
module.exports=require(22)
},{}],35:[function(require,module,exports){
module.exports = "1"

},{}],36:[function(require,module,exports){
var version = require("./version")
var isVNode = require("./is-vnode")
var isWidget = require("./is-widget")
var isVHook = require("./is-vhook")

module.exports = VirtualNode

var noProperties = {}
var noChildren = []

function VirtualNode(tagName, properties, children, key, namespace) {
    this.tagName = tagName
    this.properties = properties || noProperties
    this.children = children || noChildren
    this.key = key != null ? String(key) : undefined
    this.namespace = (typeof namespace === "string") ? namespace : null

    var count = (children && children.length) || 0
    var descendants = 0
    var hasWidgets = false
    var descendantHooks = false
    var hooks

    for (var propName in properties) {
        if (properties.hasOwnProperty(propName)) {
            var property = properties[propName]
            if (isVHook(property)) {
                if (!hooks) {
                    hooks = {}
                }

                hooks[propName] = property
            }
        }
    }

    for (var i = 0; i < count; i++) {
        var child = children[i]
        if (isVNode(child)) {
            descendants += child.count || 0

            if (!hasWidgets && child.hasWidgets) {
                hasWidgets = true
            }

            if (!descendantHooks && (child.hooks || child.descendantHooks)) {
                descendantHooks = true
            }
        } else if (!hasWidgets && isWidget(child)) {
            if (typeof child.destroy === "function") {
                hasWidgets = true
            }
        }
    }

    this.count = count + descendants
    this.hasWidgets = hasWidgets
    this.hooks = hooks
    this.descendantHooks = descendantHooks
}

VirtualNode.prototype.version = version
VirtualNode.prototype.type = "VirtualNode"

},{"./is-vhook":29,"./is-vnode":30,"./is-widget":32,"./version":35}],37:[function(require,module,exports){
var version = require("./version")

VirtualPatch.NONE = 0
VirtualPatch.VTEXT = 1
VirtualPatch.VNODE = 2
VirtualPatch.WIDGET = 3
VirtualPatch.PROPS = 4
VirtualPatch.ORDER = 5
VirtualPatch.INSERT = 6
VirtualPatch.REMOVE = 7
VirtualPatch.THUNK = 8

module.exports = VirtualPatch

function VirtualPatch(type, vNode, patch) {
    this.type = Number(type)
    this.vNode = vNode
    this.patch = patch
}

VirtualPatch.prototype.version = version
VirtualPatch.prototype.type = "VirtualPatch"

},{"./version":35}],38:[function(require,module,exports){
var version = require("./version")

module.exports = VirtualText

function VirtualText(text) {
    this.text = String(text)
}

VirtualText.prototype.version = version
VirtualText.prototype.type = "VirtualText"

},{"./version":35}],39:[function(require,module,exports){

var VNode = require('vtree/vnode');
var VText = require('vtree/vtext');
var diff = require('vtree/diff');
var patch = require('vdom/patch');
var createElement = require('vdom/create-element');
var DataSet = require("data-set");
var Delegator = require("dom-delegator");
var isHook = require("vtree/is-vhook");

Elm.Native.VirtualDom = {};
Elm.Native.VirtualDom.make = function(elm) {
    elm.Native = elm.Native || {};
    elm.Native.VirtualDom = elm.Native.VirtualDom || {};
    if (elm.Native.VirtualDom.values) {
        return elm.Native.VirtualDom.values;
    }

    // This manages event listeners. Somehow...
    var delegator = Delegator();

    var NativeElement = Elm.Native.Graphics.Element.make(elm);
    var Element = Elm.Graphics.Element.make(elm);
    var Json = Elm.Native.Json.make(elm);
    var List = Elm.Native.List.make(elm);
    var Utils = Elm.Native.Utils.make(elm);

    function listToObject(list) {
        var object = {};
        while (list.ctor !== '[]') {
            var entry = list._0;
            object[entry.key] = entry.value;
            list = list._1;
        }
        return object;
    }

    function node(name, propertyList, contents) {
        var props = listToObject(propertyList);

        var key, namespace;
        // support keys
        if (props.key !== undefined) {
            key = props.key;
            props.key = undefined;
        }

        // support namespace
        if (props.namespace !== undefined) {
            namespace = props.namespace;
            props.namespace = undefined;
        }

        // ensure that setting text of an input does not move the cursor
        var useSoftSet =
            name === 'input'
            && props.value !== undefined
            && !isHook(props.value);

        if (useSoftSet) {
            props.value = SoftSetHook(props.value);
        }

        return new VNode(name, props, List.toArray(contents), key, namespace);
    }

    function property(key, value) {
        return {
            key: key,
            value: value
        };
    }

    function on(name, decoder, createMessage) {
        function eventHandler(event) {
            var value = A2(Json.runDecoderValue, decoder, event);
            if (value.ctor === 'Ok') {
                createMessage(value._0)();
            }
        }
        return property(name, DataSetHook(eventHandler));
    }

    function DataSetHook(value) {
        if (!(this instanceof DataSetHook)) {
            return new DataSetHook(value);
        }

        this.value = value;
    }

    DataSetHook.prototype.hook = function (node, propertyName) {
        var ds = DataSet(node);
        ds[propertyName] = this.value;
    };


    function SoftSetHook(value) {
      if (!(this instanceof SoftSetHook)) {
        return new SoftSetHook(value);
      }

      this.value = value;
    }

    SoftSetHook.prototype.hook = function (node, propertyName) {
      if (node[propertyName] !== this.value) {
        node[propertyName] = this.value;
      }
    };

    function text(string) {
        return new VText(string);
    }

    function fromElement(element) {
        return {
            type: "Widget",

            element: element,

            init: function () {
                return NativeElement.render(element);
            },

            update: function (previous, node) {
                return NativeElement.update(node, previous.element, element);
            }
        };
    }

    function toElement(width, height, html) {
        return A3(Element.newElement, width, height,
                  { ctor: 'Custom'
                  , type: 'evancz/elm-html'
                  , render: render
                  , update: update
                  , model: html
                  });
    }

    function render(model) {
        var element = NativeElement.createNode('div');
        element.appendChild(createElement(model));
        return element;
    }

    function update(node, oldModel, newModel) {
        updateAndReplace(node.firstChild, oldModel, newModel);
        return node;
    }

    function updateAndReplace(node, oldModel, newModel) {
        var patches = diff(oldModel, newModel);
        var newNode = patch(node, patches);
        if (newNode !== node) {
            node.parentNode.replaceChild(newNode, node);
        }
        return newNode;
    }

    function lazyRef(fn, a) {
        function thunk() {
            return fn(a);
        }
        return new Thunk(fn, [a], thunk);
    }

    function lazyRef2(fn, a, b) {
        function thunk() {
            return A2(fn, a, b);
        }
        return new Thunk(fn, [a,b], thunk);
    }

    function lazyRef3(fn, a, b, c) {
        function thunk() {
            return A3(fn, a, b, c);
        }
        return new Thunk(fn, [a,b,c], thunk);
    }

    function Thunk(fn, args, thunk) {
        this.fn = fn;
        this.args = args;
        this.vnode = null;
        this.key = undefined;
        this.thunk = thunk;
    }

    Thunk.prototype.type = "Thunk";
    Thunk.prototype.update = updateThunk;
    Thunk.prototype.render = renderThunk;

    function shouldUpdate(current, previous) {
        if (current.fn !== previous.fn) {
            return true;
        }

        // if it's the same function, we know the number of args must match
        var cargs = current.args;
        var pargs = previous.args;

        for (var i = cargs.length; i--; ) {
            if (cargs[i] !== pargs[i]) {
                return true;
            }
        }

        return false;
    }

    function updateThunk(previous, domNode) {
        if (!shouldUpdate(this, previous)) {
            this.vnode = previous.vnode;
            return;
        }

        if (!this.vnode) {
            this.vnode = this.thunk();
        }

        var patches = diff(previous.vnode, this.vnode);
        patch(domNode, patches);
    }

    function renderThunk() {
        return this.thunk();
    }

    return Elm.Native.VirtualDom.values = {
        node: F3(node),
        text: text,
        on: F3(on),

        property: F2(property),

        lazy: F2(lazyRef),
        lazy2: F3(lazyRef2),
        lazy3: F4(lazyRef3),

        toElement: F3(toElement),
        fromElement: fromElement,

        render: createElement,
        updateAndReplace: updateAndReplace
    };
};

},{"data-set":2,"dom-delegator":8,"vdom/create-element":18,"vdom/patch":24,"vtree/diff":26,"vtree/is-vhook":29,"vtree/vnode":36,"vtree/vtext":38}],40:[function(require,module,exports){

},{}]},{},[39]);

Elm.Native = Elm.Native || {};
Elm.Native.Window = {};
Elm.Native.Window.make = function(localRuntime) {

    localRuntime.Native = localRuntime.Native || {};
    localRuntime.Native.Window = localRuntime.Native.Window || {};
    if (localRuntime.Native.Window.values) {
        return localRuntime.Native.Window.values;
    }

    var Signal = Elm.Signal.make(localRuntime);
    var NS = Elm.Native.Signal.make(localRuntime);
    var Tuple2 = Elm.Native.Utils.make(localRuntime).Tuple2;

    function getWidth() {
        return localRuntime.node.clientWidth;
    }
    function getHeight() {
        if (localRuntime.isFullscreen()) {
            return window.innerHeight;
        }
        return localRuntime.node.clientHeight;
    }

    var dimensions = NS.input(Tuple2(getWidth(), getHeight()));
    dimensions.defaultNumberOfKids = 2;

    // Do not move width and height into Elm. By setting the default number of kids,
    // the resize listener can be detached.
    var width  = A2(Signal.map, function(p){return p._0;}, dimensions);
    width.defaultNumberOfKids = 0;

    var height = A2(Signal.map, function(p){return p._1;}, dimensions);
    height.defaultNumberOfKids = 0;

    function resizeIfNeeded() {
        // Do not trigger event if the dimensions have not changed.
        // This should be most of the time.
        var w = getWidth();
        var h = getHeight();
        if (dimensions.value._0 === w && dimensions.value._1 === h) return;

        setTimeout(function () {
            // Check again to see if the dimensions have changed.
            // It is conceivable that the dimensions have changed
            // again while some other event was being processed.
            var w = getWidth();
            var h = getHeight();
            if (dimensions.value._0 === w && dimensions.value._1 === h) return;
            localRuntime.notify(dimensions.id, Tuple2(w,h));
        }, 0);
    }
    localRuntime.addListener([dimensions.id], window, 'resize', resizeIfNeeded);

    return localRuntime.Native.Window.values = {
        dimensions: dimensions,
        width: width,
        height: height,
        resizeIfNeeded: resizeIfNeeded
    };

};

Elm.Regex = Elm.Regex || {};
Elm.Regex.make = function (_elm) {
   "use strict";
   _elm.Regex = _elm.Regex || {};
   if (_elm.Regex.values)
   return _elm.Regex.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Regex",
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Regex = Elm.Native.Regex.make(_elm);
   var split = $Native$Regex.split;
   var replace = $Native$Regex.replace;
   var find = $Native$Regex.find;
   var AtMost = function (a) {
      return {ctor: "AtMost"
             ,_0: a};
   };
   var All = {ctor: "All"};
   var Match = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,index: c
             ,match: a
             ,number: d
             ,submatches: b};
   });
   var contains = $Native$Regex.contains;
   var caseInsensitive = $Native$Regex.caseInsensitive;
   var regex = $Native$Regex.regex;
   var escape = $Native$Regex.escape;
   var Regex = {ctor: "Regex"};
   _elm.Regex.values = {_op: _op
                       ,Regex: Regex
                       ,escape: escape
                       ,regex: regex
                       ,caseInsensitive: caseInsensitive
                       ,contains: contains
                       ,Match: Match
                       ,All: All
                       ,AtMost: AtMost
                       ,find: find
                       ,replace: replace
                       ,split: split};
   return _elm.Regex.values;
};
Elm.Result = Elm.Result || {};
Elm.Result.make = function (_elm) {
   "use strict";
   _elm.Result = _elm.Result || {};
   if (_elm.Result.values)
   return _elm.Result.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Result",
   $Maybe = Elm.Maybe.make(_elm);
   var toMaybe = function (result) {
      return function () {
         switch (result.ctor)
         {case "Err":
            return $Maybe.Nothing;
            case "Ok":
            return $Maybe.Just(result._0);}
         _U.badCase($moduleName,
         "between lines 158 and 171");
      }();
   };
   var Err = function (a) {
      return {ctor: "Err",_0: a};
   };
   var andThen = F2(function (result,
   callback) {
      return function () {
         switch (result.ctor)
         {case "Err":
            return Err(result._0);
            case "Ok":
            return callback(result._0);}
         _U.badCase($moduleName,
         "between lines 120 and 139");
      }();
   });
   var Ok = function (a) {
      return {ctor: "Ok",_0: a};
   };
   var map = F2(function (func,
   ra) {
      return function () {
         switch (ra.ctor)
         {case "Err": return Err(ra._0);
            case "Ok":
            return Ok(func(ra._0));}
         _U.badCase($moduleName,
         "between lines 35 and 46");
      }();
   });
   var map2 = F3(function (func,
   ra,
   rb) {
      return function () {
         var _v9 = {ctor: "_Tuple2"
                   ,_0: ra
                   ,_1: rb};
         switch (_v9.ctor)
         {case "_Tuple2":
            switch (_v9._0.ctor)
              {case "Err":
                 return Err(_v9._0._0);
                 case "Ok": switch (_v9._1.ctor)
                   {case "Ok": return Ok(A2(func,
                        _v9._0._0,
                        _v9._1._0));}
                   break;}
              switch (_v9._1.ctor)
              {case "Err":
                 return Err(_v9._1._0);}
              break;}
         _U.badCase($moduleName,
         "between lines 49 and 52");
      }();
   });
   var map3 = F4(function (func,
   ra,
   rb,
   rc) {
      return function () {
         var _v16 = {ctor: "_Tuple3"
                    ,_0: ra
                    ,_1: rb
                    ,_2: rc};
         switch (_v16.ctor)
         {case "_Tuple3":
            switch (_v16._0.ctor)
              {case "Err":
                 return Err(_v16._0._0);
                 case "Ok": switch (_v16._1.ctor)
                   {case "Ok":
                      switch (_v16._2.ctor)
                        {case "Ok": return Ok(A3(func,
                             _v16._0._0,
                             _v16._1._0,
                             _v16._2._0));}
                        break;}
                   break;}
              switch (_v16._1.ctor)
              {case "Err":
                 return Err(_v16._1._0);}
              switch (_v16._2.ctor)
              {case "Err":
                 return Err(_v16._2._0);}
              break;}
         _U.badCase($moduleName,
         "between lines 57 and 61");
      }();
   });
   var map4 = F5(function (func,
   ra,
   rb,
   rc,
   rd) {
      return function () {
         var _v26 = {ctor: "_Tuple4"
                    ,_0: ra
                    ,_1: rb
                    ,_2: rc
                    ,_3: rd};
         switch (_v26.ctor)
         {case "_Tuple4":
            switch (_v26._0.ctor)
              {case "Err":
                 return Err(_v26._0._0);
                 case "Ok": switch (_v26._1.ctor)
                   {case "Ok":
                      switch (_v26._2.ctor)
                        {case "Ok":
                           switch (_v26._3.ctor)
                             {case "Ok": return Ok(A4(func,
                                  _v26._0._0,
                                  _v26._1._0,
                                  _v26._2._0,
                                  _v26._3._0));}
                             break;}
                        break;}
                   break;}
              switch (_v26._1.ctor)
              {case "Err":
                 return Err(_v26._1._0);}
              switch (_v26._2.ctor)
              {case "Err":
                 return Err(_v26._2._0);}
              switch (_v26._3.ctor)
              {case "Err":
                 return Err(_v26._3._0);}
              break;}
         _U.badCase($moduleName,
         "between lines 66 and 71");
      }();
   });
   var map5 = F6(function (func,
   ra,
   rb,
   rc,
   rd,
   re) {
      return function () {
         var _v39 = {ctor: "_Tuple5"
                    ,_0: ra
                    ,_1: rb
                    ,_2: rc
                    ,_3: rd
                    ,_4: re};
         switch (_v39.ctor)
         {case "_Tuple5":
            switch (_v39._0.ctor)
              {case "Err":
                 return Err(_v39._0._0);
                 case "Ok": switch (_v39._1.ctor)
                   {case "Ok":
                      switch (_v39._2.ctor)
                        {case "Ok":
                           switch (_v39._3.ctor)
                             {case "Ok":
                                switch (_v39._4.ctor)
                                  {case "Ok": return Ok(A5(func,
                                       _v39._0._0,
                                       _v39._1._0,
                                       _v39._2._0,
                                       _v39._3._0,
                                       _v39._4._0));}
                                  break;}
                             break;}
                        break;}
                   break;}
              switch (_v39._1.ctor)
              {case "Err":
                 return Err(_v39._1._0);}
              switch (_v39._2.ctor)
              {case "Err":
                 return Err(_v39._2._0);}
              switch (_v39._3.ctor)
              {case "Err":
                 return Err(_v39._3._0);}
              switch (_v39._4.ctor)
              {case "Err":
                 return Err(_v39._4._0);}
              break;}
         _U.badCase($moduleName,
         "between lines 76 and 117");
      }();
   });
   var formatError = F2(function (f,
   result) {
      return function () {
         switch (result.ctor)
         {case "Err":
            return Err(f(result._0));
            case "Ok":
            return Ok(result._0);}
         _U.badCase($moduleName,
         "between lines 142 and 155");
      }();
   });
   var fromMaybe = F2(function (err,
   maybe) {
      return function () {
         switch (maybe.ctor)
         {case "Just":
            return Ok(maybe._0);
            case "Nothing":
            return Err(err);}
         _U.badCase($moduleName,
         "between lines 174 and 176");
      }();
   });
   _elm.Result.values = {_op: _op
                        ,Ok: Ok
                        ,Err: Err
                        ,map: map
                        ,map2: map2
                        ,map3: map3
                        ,map4: map4
                        ,map5: map5
                        ,andThen: andThen
                        ,formatError: formatError
                        ,toMaybe: toMaybe
                        ,fromMaybe: fromMaybe};
   return _elm.Result.values;
};
Elm.Signal = Elm.Signal || {};
Elm.Signal.make = function (_elm) {
   "use strict";
   _elm.Signal = _elm.Signal || {};
   if (_elm.Signal.values)
   return _elm.Signal.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Signal",
   $Basics = Elm.Basics.make(_elm),
   $List = Elm.List.make(_elm),
   $Native$Signal = Elm.Native.Signal.make(_elm);
   var subscribe = $Native$Signal.subscribe;
   var send = $Native$Signal.send;
   var channel = $Native$Signal.input;
   var Message = {ctor: "Message"};
   var Channel = {ctor: "Channel"};
   _op["~"] = F2(function (sf,s) {
      return A3($Native$Signal.map2,
      F2(function (f,x) {
         return f(x);
      }),
      sf,
      s);
   });
   _op["<~"] = F2(function (f,s) {
      return A2($Native$Signal.map,
      f,
      s);
   });
   var sampleOn = $Native$Signal.sampleOn;
   var dropRepeats = $Native$Signal.dropRepeats;
   var dropIf = $Native$Signal.dropIf;
   var keepIf = $Native$Signal.keepIf;
   var keepWhen = F3(function (bs,
   def,
   sig) {
      return A2(_op["<~"],
      $Basics.snd,
      A3(keepIf,
      $Basics.fst,
      {ctor: "_Tuple2"
      ,_0: false
      ,_1: def},
      A2(_op["~"],
      A2(_op["<~"],
      F2(function (v0,v1) {
         return {ctor: "_Tuple2"
                ,_0: v0
                ,_1: v1};
      }),
      A2(sampleOn,sig,bs)),
      sig)));
   });
   var dropWhen = function (bs) {
      return keepWhen(A2(_op["<~"],
      $Basics.not,
      bs));
   };
   var merge = $Native$Signal.merge;
   var mergeMany = function (signals) {
      return A2($List.foldr1,
      merge,
      signals);
   };
   var foldp = $Native$Signal.foldp;
   var map5 = $Native$Signal.map5;
   var map4 = $Native$Signal.map4;
   var map3 = $Native$Signal.map3;
   var map2 = $Native$Signal.map2;
   var map = $Native$Signal.map;
   var constant = $Native$Signal.constant;
   var Signal = {ctor: "Signal"};
   _elm.Signal.values = {_op: _op
                        ,Signal: Signal
                        ,constant: constant
                        ,map: map
                        ,map2: map2
                        ,map3: map3
                        ,map4: map4
                        ,map5: map5
                        ,foldp: foldp
                        ,merge: merge
                        ,mergeMany: mergeMany
                        ,keepIf: keepIf
                        ,dropIf: dropIf
                        ,keepWhen: keepWhen
                        ,dropWhen: dropWhen
                        ,dropRepeats: dropRepeats
                        ,sampleOn: sampleOn
                        ,Channel: Channel
                        ,Message: Message
                        ,channel: channel
                        ,send: send
                        ,subscribe: subscribe};
   return _elm.Signal.values;
};
Elm.Slug = Elm.Slug || {};
Elm.Slug.make = function (_elm) {
   "use strict";
   _elm.Slug = _elm.Slug || {};
   if (_elm.Slug.values)
   return _elm.Slug.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Slug",
   $Basics = Elm.Basics.make(_elm),
   $Regex = Elm.Regex.make(_elm),
   $String = Elm.String.make(_elm);
   var nonAlpha = $Regex.regex("\\W+");
   var slugify = function ($) {
      return A3($Regex.replace,
      $Regex.All,
      nonAlpha,
      $Basics.always("-"))($String.toLower($));
   };
   _elm.Slug.values = {_op: _op
                      ,slugify: slugify};
   return _elm.Slug.values;
};
Elm.String = Elm.String || {};
Elm.String.make = function (_elm) {
   "use strict";
   _elm.String = _elm.String || {};
   if (_elm.String.values)
   return _elm.String.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "String",
   $Maybe = Elm.Maybe.make(_elm),
   $Native$String = Elm.Native.String.make(_elm),
   $Result = Elm.Result.make(_elm);
   var fromList = $Native$String.fromList;
   var toList = $Native$String.toList;
   var toFloat = $Native$String.toFloat;
   var toInt = $Native$String.toInt;
   var indices = $Native$String.indexes;
   var indexes = $Native$String.indexes;
   var endsWith = $Native$String.endsWith;
   var startsWith = $Native$String.startsWith;
   var contains = $Native$String.contains;
   var all = $Native$String.all;
   var any = $Native$String.any;
   var toLower = $Native$String.toLower;
   var toUpper = $Native$String.toUpper;
   var lines = $Native$String.lines;
   var words = $Native$String.words;
   var trimRight = $Native$String.trimRight;
   var trimLeft = $Native$String.trimLeft;
   var trim = $Native$String.trim;
   var padRight = $Native$String.padRight;
   var padLeft = $Native$String.padLeft;
   var pad = $Native$String.pad;
   var dropRight = $Native$String.dropRight;
   var dropLeft = $Native$String.dropLeft;
   var right = $Native$String.right;
   var left = $Native$String.left;
   var slice = $Native$String.slice;
   var repeat = $Native$String.repeat;
   var join = $Native$String.join;
   var split = $Native$String.split;
   var foldr = $Native$String.foldr;
   var foldl = $Native$String.foldl;
   var reverse = $Native$String.reverse;
   var filter = $Native$String.filter;
   var map = $Native$String.map;
   var length = $Native$String.length;
   var concat = $Native$String.concat;
   var append = $Native$String.append;
   var uncons = $Native$String.uncons;
   var cons = $Native$String.cons;
   var fromChar = function ($char) {
      return A2(cons,$char,"");
   };
   var isEmpty = $Native$String.isEmpty;
   _elm.String.values = {_op: _op
                        ,isEmpty: isEmpty
                        ,cons: cons
                        ,fromChar: fromChar
                        ,uncons: uncons
                        ,append: append
                        ,concat: concat
                        ,length: length
                        ,map: map
                        ,filter: filter
                        ,reverse: reverse
                        ,foldl: foldl
                        ,foldr: foldr
                        ,split: split
                        ,join: join
                        ,repeat: repeat
                        ,slice: slice
                        ,left: left
                        ,right: right
                        ,dropLeft: dropLeft
                        ,dropRight: dropRight
                        ,pad: pad
                        ,padLeft: padLeft
                        ,padRight: padRight
                        ,trim: trim
                        ,trimLeft: trimLeft
                        ,trimRight: trimRight
                        ,words: words
                        ,lines: lines
                        ,toUpper: toUpper
                        ,toLower: toLower
                        ,any: any
                        ,all: all
                        ,contains: contains
                        ,startsWith: startsWith
                        ,endsWith: endsWith
                        ,indexes: indexes
                        ,indices: indices
                        ,toInt: toInt
                        ,toFloat: toFloat
                        ,toList: toList
                        ,fromList: fromList};
   return _elm.String.values;
};
Elm.Text = Elm.Text || {};
Elm.Text.make = function (_elm) {
   "use strict";
   _elm.Text = _elm.Text || {};
   if (_elm.Text.values)
   return _elm.Text.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Text",
   $Basics = Elm.Basics.make(_elm),
   $Color = Elm.Color.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Text = Elm.Native.Text.make(_elm);
   var markdown = $Native$Text.markdown;
   var justified = $Native$Text.justified;
   var centered = $Native$Text.centered;
   var rightAligned = $Native$Text.rightAligned;
   var leftAligned = $Native$Text.leftAligned;
   var line = $Native$Text.line;
   var italic = $Native$Text.italic;
   var bold = $Native$Text.bold;
   var color = $Native$Text.color;
   var height = $Native$Text.height;
   var link = $Native$Text.link;
   var monospace = $Native$Text.monospace;
   var typeface = $Native$Text.typeface;
   var style = $Native$Text.style;
   var append = $Native$Text.append;
   var fromString = $Native$Text.fromString;
   var empty = fromString("");
   var concat = function (texts) {
      return A3($List.foldr,
      append,
      empty,
      texts);
   };
   var join = F2(function (seperator,
   texts) {
      return concat(A2($List.intersperse,
      seperator,
      texts));
   });
   var plainText = function (str) {
      return leftAligned(fromString(str));
   };
   var asText = function (value) {
      return leftAligned(monospace(fromString($Basics.toString(value))));
   };
   var defaultStyle = {_: {}
                      ,bold: false
                      ,color: $Color.black
                      ,height: $Maybe.Nothing
                      ,italic: false
                      ,line: $Maybe.Nothing
                      ,typeface: _L.fromArray([])};
   var Style = F6(function (a,
   b,
   c,
   d,
   e,
   f) {
      return {_: {}
             ,bold: d
             ,color: c
             ,height: b
             ,italic: e
             ,line: f
             ,typeface: a};
   });
   var Through = {ctor: "Through"};
   var Over = {ctor: "Over"};
   var Under = {ctor: "Under"};
   var Text = {ctor: "Text"};
   _elm.Text.values = {_op: _op
                      ,Text: Text
                      ,Under: Under
                      ,Over: Over
                      ,Through: Through
                      ,Style: Style
                      ,defaultStyle: defaultStyle
                      ,fromString: fromString
                      ,empty: empty
                      ,append: append
                      ,concat: concat
                      ,join: join
                      ,style: style
                      ,typeface: typeface
                      ,monospace: monospace
                      ,link: link
                      ,height: height
                      ,color: color
                      ,bold: bold
                      ,italic: italic
                      ,line: line
                      ,leftAligned: leftAligned
                      ,rightAligned: rightAligned
                      ,centered: centered
                      ,justified: justified
                      ,plainText: plainText
                      ,markdown: markdown
                      ,asText: asText};
   return _elm.Text.values;
};
Elm.Theme = Elm.Theme || {};
Elm.Theme.make = function (_elm) {
   "use strict";
   _elm.Theme = _elm.Theme || {};
   if (_elm.Theme.values)
   return _elm.Theme.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Theme",
   $Basics = Elm.Basics.make(_elm),
   $Color = Elm.Color.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $Katex = Elm.Katex.make(_elm),
   $Markdown = Elm.Markdown.make(_elm),
   $String = Elm.String.make(_elm),
   $Text = Elm.Text.make(_elm);
   var centeredIn = F2(function (e,
   _v0) {
      return function () {
         switch (_v0.ctor)
         {case "_Tuple2":
            return function () {
                 var margin = A2($Graphics$Element.spacer,
                 1,
                 8);
                 var cw = A2($Basics.min,
                 600,
                 _v0._0 - 16);
                 var sl = (_v0._0 - cw) / 2 | 0;
                 var sr = _v0._0 - cw - sl;
                 return A2($Graphics$Element.flow,
                 $Graphics$Element.down,
                 _L.fromArray([margin
                              ,A2($Graphics$Element.beside,
                              A2($Graphics$Element.beside,
                              A2($Graphics$Element.spacer,
                              sl,
                              1),
                              A2($Graphics$Element.width,
                              cw,
                              e)),
                              A2($Graphics$Element.spacer,
                              sr,
                              1))
                              ,margin]));
              }();}
         _U.badCase($moduleName,
         "between lines 213 and 221");
      }();
   });
   var section = F2(function (e,
   dim) {
      return A2($Graphics$Element.below,
      A2($Graphics$Element.spacer,
      1,
      128),
      A2(centeredIn,e,dim));
   });
   var cssFace = $String.join(", ");
   var codeFace = _L.fromArray(["Menlo"
                               ,"Monaco"
                               ,"Consolas"
                               ,"Courier New"
                               ,"monospace"]);
   var bodyFace = _L.fromArray(["Helvetica Neue"
                               ,"Helvetica"
                               ,"Arial"
                               ,"sans-serif"]);
   var headingFace = _L.fromArray(["Georgia"
                                  ,"serif"]);
   var bookTitle = F2(function (content,
   _v4) {
      return function () {
         switch (_v4.ctor)
         {case "_Tuple2":
            return $Graphics$Element.above(A2($Graphics$Element.spacer,
              1,
              64))(A2($Basics.flip,
              centeredIn,
              {ctor: "_Tuple2"
              ,_0: _v4._0
              ,_1: _v4._1})($Text.leftAligned($Text.typeface(headingFace)($Text.bold($Text.height(_U.cmp(_v4._0,
              600) > 0 ? 72 : _U.cmp(_v4._0,
              500) > 0 ? 60 : _U.cmp(_v4._0,
              370) > 0 ? 48 : 36)($Text.fromString(content)))))));}
         _U.badCase($moduleName,
         "between lines 185 and 195");
      }();
   });
   var sectionTitle = F3(function (name,
   title,
   _v8) {
      return function () {
         switch (_v8.ctor)
         {case "_Tuple2":
            return $Graphics$Element.below(A2($Graphics$Element.spacer,
              1,
              8))($Graphics$Element.below(A2($Graphics$Element.color,
              $Color.lightGray,
              A2($Graphics$Element.spacer,
              _v8._0,
              1)))(A2($Basics.flip,
              centeredIn,
              {ctor: "_Tuple2"
              ,_0: _v8._0
              ,_1: _v8._1})($Graphics$Element.above(A2($Graphics$Element.spacer,
              1,
              48))($Graphics$Element.tag(name)($Text.leftAligned($Text.typeface(headingFace)($Text.bold($Text.height(36)($Text.fromString(title))))))))));}
         _U.badCase($moduleName,
         "between lines 199 and 208");
      }();
   });
   var css = A2($Basics._op["++"],
   "\n<style>\na {\n  color: #05c !important;\n  text-decoration: none;\n}\na:hover {\n  text-decoration: underline;\n}\na:active {\n  color: #038 !important;\n  text-decoration: underline;\n}\nh1 {\n  font: bold 24px ",
   A2($Basics._op["++"],
   cssFace(headingFace),
   A2($Basics._op["++"],
   ";\n  margin: 3rem 0 1rem;\n}\np, ul, ol, table {\n  font-family: ",
   A2($Basics._op["++"],
   cssFace(bodyFace),
   A2($Basics._op["++"],
   ";\n  margin: 0 0 1rem;\n  line-height: 1.5;\n}\ntable {\n  border-collapse: collapse;\n  margin: 0 auto;\n}\ntd, th {\n  text-align: left;\n  border: 1px solid #ddd;\n  padding: 0.3rem 0.5rem;\n}\nol ol {\n  list-style: lower-latin;\n}\n.idea {\n  padding-left: 2rem;\n  position: relative;\n}\n.idea::before {\n  content: \"\";\n  border: 0.325rem solid transparent;\n  border-left: 0.5rem solid;\n  border-right: 0;\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  left: 0.5rem;\n  top: 0.5rem;\n}\n.note, .hint {\n  border-left: 0.3rem solid rgba(0,0,0,.1);\n  color: rgba(0,0,0,.6);\n  padding-left: 0.7rem;\n  margin-left: 1rem;\n}\n.note::before,\n.hint::before {\n  content: \"Note:\";\n  margin-right: 0.3rem;\n  font-weight: 600;\n}\n.hint::before {\n  content: \"Hint:\";\n}\n.at-risk {\n  opacity: .3;\n  color: #a00;\n}\n.progress {\n  background-color: #ffc;\n  padding: 16px;\n  margin: 6rem 1rem 1rem;\n  box-shadow: 0 5px 16px rgba(0,0,0,.1), 0 0 0 1px rgba(0,0,0,.06);\n}\n.progress::before {\n  white-space: pre-wrap;\n  content: \'This text is a work in progress. That\\\'s all we have so far! Check again tomorrow and there might be more material here.\';\n}\ncode {\n  display: inline-block;\n  background: #f5f5f5;\n  border-radius: 0.25rem;\n  font-family: ",
   A2($Basics._op["++"],
   cssFace(codeFace),
   A2($Basics._op["++"],
   ";\n  font-size: 13px;\n  padding: 0.1rem 0.3rem;\n  margin: 0 0.125rem;\n}\npre {\n  display: block;\n  margin: 0 0 1rem;\n  text-align: center;\n}\npre > code {\n  padding: 0.6rem;\n  text-align: left;\n  max-width: 100%;\n  box-sizing: border-box;\n  overflow: auto;\n}\ncode::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n  background: #eee;\n  border-radius: 0 0 3px 3px;\n}\ncode::-webkit-scrollbar:vertical {\n  border-radius: 0 3px 3px 0;\n}\ncode::-webkit-scrollbar:corner-present {\n  border-bottom-right-radius: 0;\n}\ncode::-webkit-scrollbar-thumb {\n  background: #aaa;\n  border-radius: 100px;\n}\ncode::-webkit-scrollbar-corner {\n  background: #eee;\n  border-radius: 0 0 3px 0;\n}\nkbd {\n  font: inherit;\n  font-size: 0.875rem;\n}\nkbd:not(.shortcut) {\n  border-radius: 0.25rem;\n  padding: 0.125rem 0.375rem;\n  margin: 0 0.125rem;\n  background: #555;\n  color: rgba(255,255,255,.85);\n  font-weight: 300;\n  box-shadow: 0 0.2rem #222;\n}\ndfn {\n  font-style: normal;\n  font-weight: 600;\n}\n.block-math {\n  text-align: center;\n  margin: 0 0 1rem;\n}\n.block-math > div {\n  text-align: left;\n  display: inline-block;\n}\n",
   A2($Basics._op["++"],
   $Katex.css,
   "\n</style>\n"))))))));
   var mdOptions = function () {
      var o = $Markdown.defaultOptions;
      return _U.replace([["smartypants"
                         ,true]],
      o);
   }();
   var markdown = function (md) {
      return $Markdown.toElementWith(mdOptions)($Katex.convert(A2($Basics._op["++"],
      css,
      md)));
   };
   _elm.Theme.values = {_op: _op
                       ,markdown: markdown
                       ,mdOptions: mdOptions
                       ,css: css
                       ,headingFace: headingFace
                       ,bodyFace: bodyFace
                       ,codeFace: codeFace
                       ,cssFace: cssFace
                       ,bookTitle: bookTitle
                       ,sectionTitle: sectionTitle
                       ,centeredIn: centeredIn
                       ,section: section};
   return _elm.Theme.values;
};
Elm.VirtualDom = Elm.VirtualDom || {};
Elm.VirtualDom.make = function (_elm) {
   "use strict";
   _elm.VirtualDom = _elm.VirtualDom || {};
   if (_elm.VirtualDom.values)
   return _elm.VirtualDom.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "VirtualDom",
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $Json$Decode = Elm.Json.Decode.make(_elm),
   $Native$VirtualDom = Elm.Native.VirtualDom.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   var lazy3 = $Native$VirtualDom.lazy3;
   var lazy2 = $Native$VirtualDom.lazy2;
   var lazy = $Native$VirtualDom.lazy;
   var on = $Native$VirtualDom.on;
   var property = $Native$VirtualDom.property;
   var Property = {ctor: "Property"};
   var fromElement = $Native$VirtualDom.fromElement;
   var toElement = $Native$VirtualDom.toElement;
   var text = $Native$VirtualDom.text;
   var node = $Native$VirtualDom.node;
   var Node = {ctor: "Node"};
   _elm.VirtualDom.values = {_op: _op
                            ,Node: Node
                            ,node: node
                            ,text: text
                            ,toElement: toElement
                            ,fromElement: fromElement
                            ,Property: Property
                            ,property: property
                            ,on: on
                            ,lazy: lazy
                            ,lazy2: lazy2
                            ,lazy3: lazy3};
   return _elm.VirtualDom.values;
};
Elm.Window = Elm.Window || {};
Elm.Window.make = function (_elm) {
   "use strict";
   _elm.Window = _elm.Window || {};
   if (_elm.Window.values)
   return _elm.Window.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Window",
   $Native$Window = Elm.Native.Window.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   var height = $Native$Window.height;
   var width = $Native$Window.width;
   var dimensions = $Native$Window.dimensions;
   _elm.Window.values = {_op: _op
                        ,dimensions: dimensions
                        ,width: width
                        ,height: height};
   return _elm.Window.values;
};
