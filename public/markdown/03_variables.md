# Variables

Variables are the backbone of any programming language. In _bell_, and programming more broadly, variables are used to store reusable data such as numbers, symbols, and lists. Think of variables as labeled containers that hold values you can use or modify later.

---

## Declaring variables

In _bell_, a variable is declared or initialized simply by assigning it a value using the assignment operator (`=`).

**Example**:

```py
$x = 10
```

Here, `$x` is the variable name, and `10` is the value stored in it. Note that the variable name is largely arbitrary and up to you to choose.

---

## Variables and default values

In _bell_, variables are assumed to have been declared before they are used. However, unlike many other programming languages, _bell_ does not raise an error if a variable is used without having been first assigned a value. Instead, the variable is automatically treated as having a default value of `null` (stay tuned to learn what `null` means).

### Example:

```py
print($somevar) ## Outputs: null
```

This behavior can be convenient, but it also requires careful attention to ensure your code behaves as expected.

```py
$note = 60; ## Assign a value
print($note) ## Outputs: 60
```

---

## Local vs global variables

_bell_ distinguishes between **local** and **global** variables:

1. **Local Variables**:

   - Begin with a dollar sign (`$`), e.g., `$x`, `$note`, `$myvar`.
   - Can only be used/accessed within a specific scope — more on this later.

2. **Global Variables**:
   - Do not begin with a dollar sign, e.g., `x`, `Note`, `Myvar`.
   - Available throughout the entire program, including other scripts.

### Example:

```py
$localvar = 5; ## Local variable
Globalvar = 10 ## Global variable
```

---

## Scope of variables

The scope of a variable refers to where it can be accessed or modified. In _bell_:

#### 1. local variables:

- Only accessible within the _bell_ file they are defined in.

> In some cases, certain local variables may be accessible within specific blocks of code in our _bell_ file. However, we won't have to worry about this until we deal with _user-defined functions_ much later.

#### 2. global variables:

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
- In some other script, titled `second.bell`:
  ```py
  print(Var); ## Output: "I'm a global variable!"
  print($var) ## Output: null
  ```
  Both local and global variables are available in `first.bell`, but only the global variable is recognized in `second.bell`.

---

## Best practices for naming variables

### 1. be descriptive:

- Generally speaking, using meaningful variables names such as `$score`, `$length`, or `$pitch` is preferable over non-descript ones, such as `$a`, `$t`, or `$l`.

### 2. avoid naming collisions:

- To avoid unintended conflicts or errors in larger programs, use local variables whenever possible. However, if you need to use global variables, it's recommended to use capitalization (i.e., `Globalvar` instead of `globalvar` ).
- This helps differentiate your variables from _bell_'s built-in functions — for instance, `Pitch` and `$pitch` won't collide with _bell_'s `pitch` function.
- This also applies to so-called _pseudovariables variables_, which will be explored in more detail later. Some of these include `$x1`, `$p1`, `$l1`, `$do1`, `$dx1`, and other similarly named variables. For now, simply avoid naming variables with two or less letters followed by digits.

### 3. stick to a naming convention:

- For readability, use a single naming style, such as _camelCase_ (`$myVariable`), _snake_case_ (`$my_variable`), or _flatcase_ (`$myvariable`), consistently. For _bell_ code, I personally prefer using _flatcase_, but you can use whichever convention is more readable to you.

---

## Examples of assigning variables

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
$notes = C4 E4 G4 ## Assign a list of pitches
```

> Each of these data types — numbers, symbols, and lists — will be covered in more detail soon.

---

## Reassigning variables

You can change the value of a variable at any time by assigning it a new value.

### Example:

```py
$x = 10; ## Assign initial value
print($x); ## Output: 10
$x = 15; ## Change the value
print($x) ## Output: 15
```

---

## Exercises

### Exercise 1: storing data

1. Declare a variable `$name` and assign it your name, as a symbol.
2. Declare another variable `$age` and assign it your age.
3. Print a message like: `Hello, my name is John and I am 25 years old.`

### Exercise 2: reassigning variables

1. Assign `$x = 10`.
2. Print the value of `$x`.
3. Change the value of `$x` to a different value.
4. Print the new value of `$x`.

### Exercise 3: local vs global variables

1. In one `.bell` file, declare a global variable `Counter = 0` and a local variable `$counter = 1`.
2. In a separate `.bell` file, print both variables to confirm that only `Counter` has a value. What value does `$counter` have?

---

## FAQ

### Q: can variable names start with a number?

**A**: No, variable names must begin with a letter, even when prefixed by a `$`. Numbers in variable names must be preceded by an alphabetic character. As mentioned earlier, also avoid naming local variables with digits preceded by two or less letters — e.g. `$<letter1><digit>` or `$<letter1><letter2><digit>`.

```py
## Incorrect
$1var = 1;
## Also incorrect
$x1 = 2; ## $x1 is a pseudovariable in bell
## Correct:
$var1 = 2
```

If you're curious, you can learn more about pseudo-variables [here](/#/pseudovariables).

### Q: Can I use special characters in variable names?

**A**: Avoid special characters (e.g., `@`, `%`, `&`) in variable names, except for `$` in local variables.

### Q: Chat happens if I forget the `$` for a local variable?

**A**: Without the `$`, _bell_ treats the variable as global.

---

With variables under your belt, it's time to take a closer look at the available numeric data types in _bell_.
