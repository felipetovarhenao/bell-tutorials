# Introduction to bell programming

## Hello world:
  - `print(“hello world”)`
  - Explain code structure.
## Comments:
  - Explanation (_What_ and _why_).
  - Syntax:
    - Single-line comments: Double hash — e.g., `## my comment`
    - Multiline comments: anything enclosed with #( and )#. Example:
        ```
        #( This comment
            spans
            multiple
            lines
        )#
        ```
## Variables:
  - Identifier vs stored value
  - Assignment operator
  - Local vs global scope: Local variables are prefixed with a `$` sign, while global variables are not.
  - Best practices:
    - Use local variables when possible.
    - If needed, Capitalize the variable name to prevent naming collision (explain namespacing). For instance, `Myvar` instead of `myvar`.
## Basic expressions:
  - Basic arithmetic
## Expressions and Statements:
  - What are they?
  - As in many computer languages, we can separate statements with the use of a semi-colon `;`, thus discarding the evaluated output of a given statement. In bell, this is known as the _nullify_ operator (see section about `null` keyword)
  - In the current version of bell (this will change in the next release), the last statement in a block of code cannot end in nullify.
  - Example:
    ```
    print(“hello world”); 
    1 2 3
    ```
## Lisp-like linked lists:
  - What are they? A Lisp-like linked list, or an llll for short, is a data structure capable to deal with nested lists, i.e. a list able to contain a similar list as one of its element. Lisp-like linked lists extend the idea of a simple list, with the possibility to add level of brackets.
  - Pronunciation: _ell ell ell ell_.
  - Syntax:
    - Implicit llll construction: list elements are constructed implicitly by typing each element next to each other, without commas or brackets.
    - Length: The length of a llll refers to the number of elements in a list.
    - Depth: lllls can be nested as desired, by including lllls as elements, each demarked by a bracket.
  - Examples:
    - A list of length 1 and depth 1:
      - `1`
    - A list of length 3 and depth 1:
      - `10 20 30`
    - A list of length 2 and depth 2:
      - `[1 2 3] [4 5 6]`
    - A list of length 3 and depth 3:
      - `[1 [2 3]] [4 5 6]`
  - Advantages:
    - Simple syntax.
    - Representation of complex data structures.
    - llll operations (vs. only element-wise operations) and functions.
      - scalar with scalar
      - llll with scalar
      - llll with llll
## Functions:
  - Explanation. What are functions.
  - Syntax: `<function_name>;(<arg1>, <arg2>, <arg3>);`
  - Examples:
    - `print(“hello”)`
    - `random(1, 10)` returns a random integer between 1 and 10
    - `pow(2, 3)` returns 8 (2 raised to the power of 3)
  - Function Arguments:
    - Explain.
  - Positional vs named arguments syntax: We can specify arguments in different ways, either based on their position, or more flexibly, by their name.
  
    - Syntax:
        - Positional: `<function>(<arg1> <val1>, <arg2> <val2>, …, <argN> <valN>)`
        - Named: `<function>(@<argname1> <val1>, @<argname>, <val2>)`
      
    - Named arguments may seem wordier, but provide the advantage of naming them in which ever order we choose, which might be helpful in some cases.
    - For example, the arithmser function generates an arithmetic series (short explanation)
    - Syntax:
    - Positional: `arithmser(1, 10, 2)` returns `1 3 5 7 9`
    - Named:
      - `arithmser(@start 1 @end 10 @step 2)`
      - `arithmser(@step 2 @start 1 @end 10)`
        - Notice we don’t need to specify the arguments in the same order as in the positional syntax.
  - Regular vs data-flow style syntax:
    - Bell provides us with two different ways of calling functions.
      - Regular syntax, which is the one we’ve used already `<function_name>(<arg1> <val1>…)`
      - Dataflow-style syntax: Common in languages such as javascript.
      `<arg1>.<function>(<arg2>)`
      
      - Examples:
        - Regular: 
        ```
        $x = 1 4 7; 
        pow($x, 2);
        ```
        - Dataflow style: 
        ```
        $x = 1 4 7; 
        $x.pow(2);
        ```
## List functions:
  - Some examples of list functions:
    - `rev`: reverses a list
    - `length`: size of a list
    - `depth`: depth of a list
    - `flat`: flattens a list (removes any brackets, forcing the list to be of depth 1).
    - `mc2f`: midicents to frequency conversion
    - `f2mc`: frequency to midicents conversion.
    - `thin`: removes duplicates in a list
## Symbols:
  - Equivalent to the concept of a string in other programming languages.
  - Syntax options:
    - Double quotes: `“hello world”`
    - Single quotes: `‘hello world’`
    - Back tick: `` `hello `world`` (since back-tick ends when a space is encountered, this results in a llll of two symbols). Usually not recommended to use, as it might lead to undesired errors. For instance `` `hello)`` is the same as `“hello)”`.
## Null keyword:
  - `null` is one of many keywords in bell. In this case, `null` represents nothing.
  - For instance, when we use the _nullify_ operator, this results in a null output for that statement or expression.
  - For instance:
    - The expression `1 2 3 4 5 6` (no nullify operator) `1 2 3 4 5 6`.
    - The expression `1 2 3; 4 5 6` returns `4 5 6` since `1 2 3` is discarded.
    - The expression `1 2 3; 4 5 6;` returns `null`.
## Basic operators:
  - Unary:
    - positive (`+`)
    - negative (`-`)
  - Binary:
    - Addition: `+`
    - Subtraction: `-`
    - Multiplication: `*`
    - Division: `/`
    - Modulo: `%`
    - Power: `<base> ** <exponent>`
## Addresses:
  - Since llll can be arbitrarily complex we need a way to access specific elements. The way we do this is by specifying an address, which describes what part of the list we want to retrieve.
  - Note: different from many programming langauges, bell (and bach) use 1-based indexing instead of 0-based indexing.
  - Syntax:
    - Access operator: the colon (:).
    - Syntax: `<llll>:<address>`
    - Example:
    ```
    $x = 10 20 30 40;
    $x:1; ## 10
    $x:2; ## 20
    $x:3; ## 30
    ```
  - Addresses for nested lists:
    - To access nested elements, we specify a list of indices (1-based)
    - Example: 
        ```
        $x = [0 1 2] [[3 4] 5];
        $x:1; ## returns [0 1 2]
        $x:(2); ## returns [[3 4] 5]
        $x:(1 2); ## returns 1
        $x:(2 1); ## returns [3 4]
        $x:(2 1 2); ## returns 4
        ```
  - Picking elements:
    - A short hand for accessing a list element and removing its top level brackets is to use to pick operator (:: or double colon). Here’s an example:
        ```
        $x = [1 2 3] [[4 5] 6];
        $x:1 ## returns [1 2 3]
        $x::1 ## returns 1 2 3
        $x::(1 2) ## returns 2
        $x::2 ## returns [4 5] 6
        ```
## Keys:
  - lllls structured as key-value pairs:
    ```
    $x = [<key1> <value1>] [<key2> <value2>] ... [<keyN> <valueN>]
    ```
  - Accessing keys:
    - Syntax: `<llll>.<key>`
  - Example:
    ```
    $chords = ['tonic' c5 e5 g5 ] ['dominant' b4 d5 g5];
    $chords.'tonic' ## returns c5 c4 g5
    $chords.'dominant' ## returns b4 d5 g5
    ```
## List operators:
  - Range operator:
    - A convenient way to build sequences of numbers:
      - `1...5` is the same as `1 2 3 4 5`
    - Caveats:
      - Must always be used in ascending order.
  - Repeat operator:
    - Syntax: `<llll> :* <repetitions>`
    - Example:
      - `1 2 3 4 :* 2` evaluates to `1 2 3 4 4`
      - `(1 2 3 4) :* 2` evaluates to `1 2 3 4 1 2 3 4`
## Compound assignment operators:
  - Examples
    - `$x = $x + 1 is equivalent to $x += 1`
    - `$x = $x - 3 is equivalent to $x -= 3`
    - `$x = $x * 4 is equivalent to $x *= 4`
## Numeric types:
  - Integer: (explain)
  - Float: (explain)
  - Rational: to represent fractions.
    - Syntax: `<num>/<den>`
  - Pitch types:
    - The pitch data type provides a more intuitive way of specifying pitch values, although they’re numerically equivalent to midicent values (`C5 = 6000`, `G4 = 5500`).
    - Although bell provides a highly flexible syntax for specifying pitch (including microtones and just intonation), it’s best to focus on the most basic syntax for now (chromatic):
      - Basic syntax: `<name><accidental><octave>`
    - Pitches are case-insensitive.
    - Examples:
      - `C4`, `F#3`, `Bb3`

    - Operations: Since they are stand-ins for midicent values, you can perform operations with them:
        - `C4 + 400` results in 5200 or E4.
        - `D5 + E0 (major third)` results in F#5 or 6600.
## Conditionals:
  - What are they? What are they for?
  - No boolean type: 0 is false, non-zero is true.
  - Syntax:
    - `if <condition> then <statement>;`
    - `if <condition> then <statement>; else <statement>`
    - `if <condition> then <statement>; else if <condition> then <statement> else <statement>.`
## Loops:
  - What are they?
  - Types:
    - For loops:
      - Basic syntax: `for $<var> in <llll> <do|collect> <statement>`
      - `do` vs `collect`:
        - The only difference between the two is that do discards the evaluation of every iteration except the last one, while collect keeps the output of the evaluation for each iteration, resulting in a llll.
      - Examples:
        ```
        for $i in 1...10 do $i * $i;
        for $x in 0...9 collect (
            $y = $x * 2; 
            $y + $y
        )
        ```
    - While loops:
      - Syntax: while `<condition> <do|collect> <statement>`
      - Examples:
        ```
        $x = 0; 
        $numbers = while $x < 10 collect (print($x); $x += 1)
        ```
      - Risks: infinite loops
## Parentheses in compound statements/expressions:
  - In bell, parentheses are much more flexible than traditional programming languages. At its most basic, we use them to isolate single operations within a given expression. For instance:
    ```
    $x = 2;
    $y = (1 + $x) * 3
    ```
    - Here the parenthesis ensures the addition between 1 and 2 is evaluated before the multiplication. The parentheses is evaluated to 3.
    - However, we can use parentheses to isolate and organize expressions in ever complex ways, by using the nullify operator.
      - For instance:
        ```
        $y = ($x = 2; print($x); $x + 1) * 3
        ```
        - Here the expression within the parentheses still evaluates to 3, as in the previous example. However, it contains multiple statements:
            - $x is defined
            - $x is printed
            - $x and 3 are added together.

        -  Although this example seems unnecessarily complicated, it shows how we can nest multiple statements whenever more complex evaluations are necessary.