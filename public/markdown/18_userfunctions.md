# User-Defined Functions

> Creating Custom Functionality

Functions allow us to write reusable blocks of code, but until now, we've only worked with built-in functions. In this tutorial, we’ll learn how to define our own functions in bell.

---

## What Are User-Defined Functions?

A user-defined function is a custom block of code that you define and can reuse in your program. It can take arguments, perform an operation, and return a result.

### Syntax

Here’s the general syntax for creating a function:

`$arg1 [= <default1>], $arg2 [= <default2>], ... $argN [= <defaultN>] -> <function_body>`

Let’s break this down:

- **Arguments**:
  - `$arg1`, `$arg2`, `...`, `$argN`: The inputs your function accepts, if any.
  - You can set default values for arguments using the assignment operator (`=`).
- **Function body**:
  - The code executed when your function is called.
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

### 2. Single Argument

A function that takes one input:

```py
$square = $x -> $x ** 2;
print($square(4)) ## Outputs: 16
```

### 3. Multiple Arguments

Functions can take multiple arguments:

```py
$sumofsquares = $x, $y -> (
   $z = $x ** 2 + $y ** 2;
   $z
);
print($sumofsquares(3, 4)) ## Outputs: 25
```

### 4. Default Values

Arguments can have default values:

```py
$add = ($x, $y = 10 -> $x + $y);
print($add(5)); ## Outputs: 15
print($add(5 @y 20)) ## Outputs: 25
```

---

## Scope

The scope of variables in a function is limited to its body. Local variables within a function are not accessible outside of it, and local variables outside of it are not available within it, unless if explicitly referenced. Only global variables can be accessed and modified from within a function definition.

```py
$localvar = "I'm a local variable!";
Globalvar = "I'm a global variable!";

$scopetest = -> (
   print($localvar);
   print(Globalvar)
);
$scopetest();
## Outputs:
## null
## I'm a global variable!
print($localvar) ## I'm a local variable!
```

---

## Lifted Variables

If you want a function to access local variables defined outside that function's body, use the lifting operator `-^`.

```py
$outer = 5;
$myfunc = $x -^ $outer -> $x + $outer;
print($myfunc(10)) ## Outputs: 15
```

You can lift multiple variables:

```py
$var1 = 2;
$var2 = 3;
$multiply = $x, $y -^ $var1, $var2 -> $x * $var1 + $y * $var2;
print($multiply(4, 5)) ## Outputs: 23
```

---

## Exercises

### Exercise 1: A Function with Multiple Arguments

1. Write a function that calculates the area of a rectangle:

```py
$area = $length, $width -> $length * $width
```

2. Test it with $area(5, 10).

### Exercise 2: Default Argument Values

1. Create a function that adds two numbers, with a default value of 5 for the second argument:

```py
$add = $x, $y = 5 -> $x + $y;
```

2. Test it with $add(10) and $add(10, 20).

### Exercise 3: Using Lifted Variables

1. Define two variables:

```py
$offset = 2;
$scale = 3;
```

2. Create a function that uses these variables:

```py
$transform = $x -^ $offset, $scale -> ($x + $offset) * $scale;
```

3. Test it with $transform(4).

---

## FAQ

### Q: What happens if I omit an argument without a default value?

**A**: The function evaluates to null.

### Q: Can a function return multiple values?

**A**: Yes, return a llll:

```py
$multi_return = $x -> $x $x ** 2 $x ** 3;
print($multi_return(2)) ## Outputs: 2 4 8
```

---

User-defined functions unlock powerful possibilities. Experiment with these examples to deepen your understanding!
