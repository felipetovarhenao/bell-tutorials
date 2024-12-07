# Variables

> _Storing and Organizing Data_

Variables are the backbone of any programming language. In _bell_, variables are used to store and manipulate data such as numbers, text, lists, and even pitches. Think of variables as labeled containers that hold values you can use or modify later.

---

## Declaring Variables

In _bell_, a variable is declared simply by assigning it a value using the assignment operator (`=`).

**Example**:

```py
$x = 10
```

Here, `$x` is the variable name, and `10` is the value stored in it.

---

## Variables and Default Values

In _bell_, variables are assumed to have a value before they are used. However, unlike many other programming languages, _bell_ does not raise an error if a variable is used without having been assigned a value. Instead, the variable is automatically treated as having a default value of `null`.

### Example:

```py
print($somevar); ## Outputs: null
```

This behavior can be convenient, but it also requires careful attention to ensure your code behaves as expected.

```py
$note = 60; ## Assign a value
print($note); ## Outputs: 60
```

If you’re unsure whether a variable has been assigned, you can check for `null`:

```py
if $note == null then print("$note variable is null");
```

> This is a preview of [conditional statements](16_conditionals.md), which will be covered later.

---

## Local vs Global Variables

_bell_ distinguishes between **local** and **global** variables:

1. **Local Variables**:

   - Begin with a dollar sign (`$`), e.g., `$x`, `$note`, `$myvar`.
   - Used within a specific scope (e.g., inside a function — _more on this later_).
   - Automatically discarded/forgotten when the scope ends.

2. **Global Variables**:
   - Do not begin with a dollar sign, e.g., `X`, `Note`, `Myvar`.
   - Available throughout the entire program, including other scripts.

### Example:

```py
$localvar = 5; ## Local variable
Globalvar = 10 ## Global variable
```

---

## Best Practices for Naming Variables

### 1. Be Descriptive:

- Instead of `$a`, use `$score`, `$length`, or `$pitch`.

### 2. Avoid Naming Collisions:

- To avoid unintended conflicts or errors in larger programs, use local variables whenever possible. However, if you need to use global variables, it's recommended to use capitalization (i.e., `Globalvar` instead of `globalvar` ).
- This helps differentiate your variables from _bell_'s built-in functions — for instance, `Pitch` and `$pitch` won't collide with _bell_'s `pitch` function.
- This also applies to so-called _pseudovariables variables_, which will be explored in more detail later. Some of these include `$x1`, `$p1`, `$l1`, `$do1`, `$dx1`, and other similarly named variables. For now, simply avoid naming variables with two or less letters followed by digits.

### 3. Stick to a Naming Convention:

- For readability, use _camelCase_ (`$myVariable`), _snake_case_ (`$my_variable`), or _flatcase_ (`$myvariable`), consistently. I personally prefer using _flatcase_ when writing _bell_ code.

---

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

---

## Reassigning Variables

You can change the value of a variable at any time by assigning it a new value.

### Example:

```py
$x = 10; ## Assign initial value
print($x); ## Output: 10
$x = 15; ## Change the value
print($x) ## Output: 15
```

---

## Scope of Variables

The scope of a variable refers to where it can be accessed or modified. In _bell_:

#### 1. Local variables:

- Only accessible within the _bell_ file are defined in.

> In some cases, certain local variables may be accessible within specific blocks of code in our _bell_ file. However, we won't have to worry about this until we deal with _user-defined functions_ much later.

#### 2. Global variables:

- Accessible anywhere in the program, including other scripts.

> Note that this is only true for the duration of your session. That is, if you restart _bellplay~_, any declared global variables prior to closing it are forgotten.

### Example:

- Let's say we have a script titled `first.bell`:
  ```py
  Var = "I'm a global variable!";
  $var = "I'm a local variable!";
  print(Var); ## Output: "I'm a global variable!"
  print($var) ## Output: "I'm a local variable!"
  ```
- In some other script, title `second.bell`:
  ```py
  print(Var); ## Output: "I'm a global variable!"
  print($var) ## Output: null
  ```
  Both local and global variables are available in `first.bell`, but only the global variable is recognized in `second.bell`.

---

## Exercises

### Exercise 1: Storing Data

1. Declare a variable `$name` and assign it your name.
2. Declare another variable `$age` and assign it your age.
3. Print a message like: `Hello, my name is John and I am 25 years old.`

### Exercise 2: Reassigning Variables

1. Assign `$x = 10`.
2. Print the value of `$x`.
3. Change the value of `$x` to a different value.
4. Print the new value of `$x`.

### Exercise 3: Local vs Global Variables

1. In one `.bell` file, declare a global variable `Counter = 0` and a local variable `$counter = 1`.
2. In a separate `.bell` file, print both variables to confirm that only `Counter` has a value. What value does `$counter` have?

---

## FAQ

### Q: Can variable names start with a number?

**A**: No, variable names must begin with a letter or a `$`. Numbers in variable names must be preceded by an alphabetic character. As mentioned earlier, also avoid naming local variables with digits preceded by two or less letters — e.g. `$<letter1><digit>` or `$<letter1><letter2><digit>`.

```py
## Incorrect
$1var = 1;
## Also incorrect
$x1 = 2; ## $x1 is a pseudovariable in bell
## Correct:
$var1 = 2
```

### Q: Can I use special characters in variable names?

**A**: Avoid special characters (e.g., `@`, `%`, `&`) in variable names, except for `$` in local variables.

### Q: What happens if I forget the `$` for a local variable?

**A**: Without the `$`, _bell_ treats the variable as global.

---

With variables under your belt, you're ready to tackle basic expressions and learn how to perform calculations in _bell_.
