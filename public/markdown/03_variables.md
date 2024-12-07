# Variables

> _Storing and Organizing Data_

Variables are the backbone of any programming language. In _bell_, variables are used to store and manipulate data such as numbers, text, lists, and even pitches. Think of variables as labeled containers that hold values you can use or modify later.

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
   - Used within a specific scope (e.g., inside a function — _more on this later_).
   - Automatically discarded/forgotten when the scope ends.

2. **Global Variables**:
   - Do not begin with a dollar sign, e.g., `x`, `note`, `myvar`.
   - Available throughout the entire program, including other scripts.

### Example:

```py
$localvar = 5; ## Local variable
Globalvar = 10 ## Global variable
```

> **Tip**: Use local variables whenever possible to avoid unintended conflicts or errors in larger programs.

## Best Practices for Naming Variables

1. Be Descriptive:

   - Instead of `$a`, use `$score`, `$length`, or `$pitch`.

2. Avoid Naming Collisions:

   - Use local variables (e.g., `$print`) or capitalized global variables (e.g., `Print`) to differentiate them from _bell_'s built-in functions (e.g., `print`).

3. Stick to a Naming Convention:
   - For readability, use _camelCase_ (`$myVariable`), _snake_case_ (`$my_variable`), or _flatcase_ (`$myvariable`), consistently.

## Examples of Assigning Variables

### Numbers:

```py
$x = 42; ## Assign an integer
$pi = 3.14159 ## Assign a floating-point number
```

### Symbols:

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

The scope of a variable refers to where it can be accessed or modified. In _bell_:

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

## Exercises

### Exercise 1: Storing Data

1. Declare a variable `$name` and assign it your name.
2. Declare another variable `$age` and assign it your age.
3. Print a message like: `Hello, my name is John and I am 25 years old.`

### Exercise 2: Reassigning Variables

1. Assign `$x = 10`.
2. Change the value of `$x` to a different value.
3. Print the new value of `$x`.

### Exercise 3: Local vs Global Variables

1. Create a global variable `Counter = 0` and a local variable `$counter = 1`.
2. In a separate `.bell` file, print both variables to confirm that only `Counter` has a value. What value does `$counter` have?

## FAQ

### Q: Can variable names start with a number?

**A**: No, variable names must begin with a letter or a `$`. Numbers in variable names must be preceded by an alphabetic character.

```py
## Incorrect
$1var = 1;
## Correct:
$var1 = 2
```

### Q: Can I use special characters in variable names?

**A**: Avoid special characters (e.g., `@`, `%`, `&`) in variable names, except for `$` in local variables.

### Q: What happens if I forget the `$` for a local variable?

**A**: Without the `$`, _bell_ treats the variable as global.

---

With variables under your belt, you're ready to tackle basic expressions and learn how to perform calculations in _bell_.
