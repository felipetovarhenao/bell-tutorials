# User-defined functions

Until now, we've only worked with built-in functions in _bell_. In this tutorial, we’ll learn how to define our own functions, allowing us to avoid redundancy and increase readability and efficiency.

---

## What are user-defined functions?

A user-defined function is a custom block of code that you define and can reuse in your program. Just like any other function, it can take arguments, perform an operation, and return a result.

### Syntax

Here’s the full syntax for creating a function:

```
[$<arg1> [= <default1>], ... $<argN> [= <defaultN>]]
   [-^ $<lifted_variable1>, ... $<lifted_variableN>]
      -> <function_body>
```

Let’s break this down:

- **Arguments** (_optional_):
  - `$<arg1>`, `...`, `$<argN>`: The inputs your function accepts, if any. Not that they must be named as local variables (i.e., prefixed with `$`).
  - You can optionally set default values for arguments using the assignment operator (`=`).
- **Lifted variables** (_optional_)
  - This will be explained in more detail shortly, but it's an optional part of the syntax that allows us to bring existing local variables into our function definition. When used, this is preceded by the lifting operator (`-^`).
- **Function body**:
  - The code executed when your function is called. This is always preceded by the arrow operator (`->`).
  - Enclosed within parentheses if it spans multiple statements.

---

## Examples

### 1. No Arguments

A simple function with no inputs:

```py
$greet = -> print("Hello, world!");
$greet() ## Outputs: Hello, world!
```

Multi-line functions use parentheses:

```py
$printmessages = -> (
   print("Message 1");
   print("Message 2")
);
$printmessages()
## Output:
## Message 1
## Message 2
```

### 2. Single argument

A function that takes one argument:

```py
$square = $x -> $x ** 2;
print($square(4)) ## Outputs: 16
```

### 3. Multiple arguments

Functions can take multiple arguments:

```py
$sumofsquares = $x, $y -> (
   $a = $x ** 2;
   $b = $y ** 2;
   $a + $b
);
print($sumofsquares(3, 4)) ## Outputs: 25
```

### 4. Default values

Arguments can have default values:

```py
$add = ($x, $y = 10 -> $x + $y);
print($add(5)); ## Outputs: 15
print($add(5 @y 20)) ## Outputs: 25
```

---

## Scope

A few things to consider when it comes to scoping in user-defined functions:

- Local variables defined _within_ a function are **not** accessible outside of it
- Local variables defined _outside_ of a function are **not** available within it, unless explicitly referenced via the lifting operator (`-^`) — more on this soon.
- Global variables can be accessed and modified from within a function definition.

```py
$localvar = "I'm a local variable!";
Globalvar = "I'm a global variable!";

$scopefun = -> (
   $insidevar = "I'm inside the function!";
   print($insidevar);
   print($localvar);
   print(Globalvar)
);
$scopefun();
## Outputs:
## I'm inside the function!
## null
## I'm a global variable!
print($insidevar); ## Outputs: null
print($localvar) ## Outputs: I'm a local variable!
```

---

## Lifted variables

When we need a function to access local variables defined outside the function's body, we can use the lifting operator (`-^`).

```py
$outer = 5;
$myfunc = $x -^ $outer -> $x + $outer;
print($myfunc(10)) ## Outputs: 15
```

You can also lift multiple variables:

```py
$var1 = 2;
$var2 = 3;
$multiply = $x, $y -^ $var1, $var2 -> $x * $var1 + $y * $var2;
print($multiply(4, 5)) ## Outputs: 23
```

---

## Exercises

### Exercise 1: a function with multiple arguments

1. Write a function that calculates the area of a rectangle:

```py
$area = $length, $width -> $length * $width
```

2. Test it with `$area(5, 10)`.

### Exercise 2: default argument values

1. Create a function that adds two numbers, with a default value of `5` for the second argument:

```py
$add = $x, $y = 5 -> $x + $y;
```

2. Test it with `$add(10)` and `$add(10, 20)`.

### Exercise 3: using lifted variables

1. Define two variables:

```py
$offset = 2;
$scale = 3;
```

2. Create a function that uses these variables:

```py
$transform = $x -^ $offset, $scale -> ($x + $offset) * $scale
```

3. Test it with `$transform(4)`.

---

## FAQ

### Q: What happens if I omit an argument without a default value?

**A**: That value will default to `null`, likely causing the overall function to evaluate to `null`.

### Q: Can a function return multiple values?

**A**: Yes, simply return a _llll_:

```py
$powers = $x -> $x ** (0...3);
print($powers(2)) ## Outputs: 1 2 4 8
```

---

User-defined functions unlock powerful possibilities. Experiment with these examples to deepen your understanding! Next we'll learn about passing functions as arguments to other functions.
