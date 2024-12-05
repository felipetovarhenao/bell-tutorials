# Variables: Storing and Organizing Data

## Introduction

Variables are the backbone of any programming language. In _bell_, variables are used to store and manipulate data such as numbers, text, lists, and even musical elements. Think of variables as labeled containers that hold values you can use or modify later.

## Declaring Variables

In _bell_, a variable is declared simply by assigning it a value using the assignment operator (`=`).

**Example**:

```py
$x = 10
```

Here, `$x` is the variable name, and `10` is the value stored in it.

## Local vs Global Variables

_bell_ distinguishes between **local** and **global** variables:

1. **Local Variables**:

   - Begin with a dollar sign (`$`), e.g., `$x`, `$note`, `$myvar`.
   - Used within a specific scope (e.g., inside a function — _more on this later on_).
   - Automatically discarded/forgotten when the scope ends.

2. **Global Variables**:
   - Do not begin with a dollar sign, e.g., x.
   - Available throughout the entire program.

### Example:

```py
$localvar = 5; ## Local variable
Globalvar = 10 ## Global variable
```

> **Tip**: Use local variables whenever possible to avoid unintended conflicts or errors in larger programs.

## Best Practices for Naming Variables

1. Be Descriptive:

   - Instead of $a, use $score, $length, or $pitch.

2. Avoid Naming Collisions:

   - Use capitalization to differentiate global variables (e.g., GlobalVar) from local variables (e.g., $globalVar).

3. Stick to a Naming Convention:
   - For readability, use _camelCase_ (`$myVariable`) or _snake_case_ (`$my_variable`) consistently.

## Examples of Assigning Variables

### Numbers:

```py
$x = 42; ## Assign an integer
$pi = 3.14159 ## Assign a floating-point number
```

### Strings:

```py
$name = "bell programming" ## Assign a text symbol
```

### Lists:

```py
$notes = C4 E4 G4 ## Assign a list of musical notes
```

## Reassigning Variables

You can change the value of a variable at any time by assigning it a new value.

### Example:

```py
$x = 10; ## Assign initial value
$x = $x + 5; ## Add 5 to the current value of $x
print($x) ## Output: 15
```

## Scope of Variables

The scope of a variable refers to where it can be accessed or modified. In bell:

1. Local variables:
   - Only accessible within the block of code where they are defined.
2. Global variables:
   - Accessible anywhere in the program.

### Example:

```py
$x = 10; ## Local variable
if $x > 5 then (
    $y = $x + 5; ## $y is local to this block
    print($y) ## Output: 15
)
## Trying to access $y here will cause an error
```

## Compound Assignment Operators

In _bell_, you can combine assignment with arithmetic operations for brevity.

### Examples:

```py
$x += 10; ## Add 10 to $x
$x -= 5;  ## Subtract 5 from $x
$x *= 2;  ## Multiply $x by 2
$x /= 4  ## Divide $x by 4
```

### Full Example:

```py
$x = 10;
$x += 5;  ## $x is now 15
$x *= 2;  ## $x is now 30
print($x) ## Output: 30
```

## Exercises

### Exercise 1: Storing Data

1. Declare a variable `$name` and assign it your name.
2. Declare another variable `$age` and assign it your age.
3. Print a message like: `Hello, my name is John and I am 25 years old.`

### Exercise 2: Reassigning Variables

1. Assign `$x = 10`.
2. Increment `$x` by `5` using `+=`.
3. Multiply `$x` by `2` using `*=`.
4. Print the final value of `$x`.

### Exercise 3: Local vs Global Variables

1. Create a global variable `Counter = 0`.
2. Inside a loop, create a local variable `$counter` that counts iterations.
3. Print both `Counter` and `$counter` to see the difference.

## FAQ

### Q: Can variable names start with a number?

**A**: No, variable names must begin with a letter or a `$`.

### Q: Can I use special characters in variable names?

**A**: Avoid special characters (e.g., `@`, `%`, `&`) in variable names, except for `$` in local variables.

### Q: What happens if I forget the $ for a local variable?

**A**: Without the `$`, bell treats the variable as global.

With variables under your belt, you're ready to tackle basic expressions and learn how to perform calculations in _bell_.

> Next up: [Basic Expressions – Performing Arithmetic and More](expressions.md)
