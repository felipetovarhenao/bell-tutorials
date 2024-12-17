# Functions

Functions are one of the most powerful tools in programming. In _bell_, functions allow you to perform operations on data, automate repetitive tasks, and design complex algorithms. Think of a function as a reusable block of code that takes input, performs an operation, and gives output.

> Actually, not all functions need to have both input and output, but we'll deal with these cases later.

---

## Understanding Functions

### What Are Functions?

A function in _bell_:

1. Has a name (e.g., `print`, `pow`, `random`).
2. Takes arguments (inputs that modify its behavior).
3. Returns a result.

### Syntax:

```
<function_name>(<arg1>, <arg2>, ..., <argN>)
```

### Example:

```py
print("hello world") ## Outputs: hello world
```

---

## Commonly Used Functions

1. `print`: Displays data we want on the _Max_ console. Useful for debugging and inspecting our code.

   ```py
   print(C4 E4 G4) ## Outputs: C4 E4 G4
   ```

2. `random`: Generates a random number in a given range.

   ```py
   print(random(1, 10)) ## Outputs a random number between 1 and 10
   ```

3. `pow`: Raises a number to a power (or list thereof).

   ```py
   print(pow(2, 0 1 2 8)) ## Outputs: 1 2 4 8
   ```

   > This is equivalent to using the `**` operator: `2 ** 3`.

4. `abs`: Returns the absolute value of a number (of list thereof).

   ```py
   $nums = -20 0 10 -3;
   print(abs($nums)) ## Outputs: 20 0 10 3
   ```

5. `round`: Rounds a number to the nearest integer.

   ```py
   $num = 2.034;
   print(round($num)) ## Outputs: 2
   ```

---

## Arguments in Functions

Arguments are values you pass to a function as inputs. They can be **positional** or **named**:

### Positional Arguments

Arguments are provided in the order the function expects. This requires knowing the order of arguments of the function:

#### Example:

```py
random(1, 10); ## Syntax: random(x, y) -> <random number>
pow(2, 3); ## pow(x, y) -> <power>
abs(-1) ## abs(x) -> <absolute value>
```

### Named Arguments

Arguments are specified by name, allowing flexibility in their order. This requires knowing the name of the function's arguments:

#### Syntax:

```
<function_name>(@<argname> <arg>, ..., @<argname> <arg>)
```

When using named arguments, commas between arguments are optional:

```
<function_name>(@<argname> <arg> ... @<argname> <arg>)
```

Luckily, many built-in functions in _bell_ follow a similar naming pattern for their arguments — in particular, math functions.

| Function | Arguments names (in positional order) | Description                                                      |
| -------- | ------------------------------------- | ---------------------------------------------------------------- |
| `abs`    | `@x`                                  | Returns the absolute value of a `x`.                             |
| `sin`    | `@x`                                  | Computes the sine of angle `x` (in radians).                     |
| `cos`    | `@x`                                  | Computes the cosine of angle `x` (in radians).                   |
| `log`    | `@x`                                  | Calculates the natural logarithm of a `x`.                       |
| `pow`    | `@x @y`                               | Raises `x` to the power of `y`.                                  |
| `max`    | `@x @y`                               | Returns the larger value between `x` and `y`.                    |
| `min`    | `@x @y`                               | Returns the smaller value between `x` and `y`.                   |
| `mod`    | `@x @y`                               | Returns the remainder of `x` divided by `y`.                     |
| `random` | `@x @y`                               | Returns a random integer number between `x` and `y` (inclusive). |

> These just some of many math functions available in _bell_.

#### Example:

```py
random(@x 1, @y 10); ## Same as above
random(@y 10 @x 1) ## Also works (different order, no commas)
```

When we use an incorrect argument name, _bell_ simply ignores the value assigned to that non-existent argument. To prevent bugs, make sure you spell the argument names correctly.

```py
random(@min 1 @max 10) ## Output: null
```

### Required vs Optional Arguments in Functions

In _bell_, function arguments can also be generally categorized as either **required** or **optional**. However, unlike some programming languages, _bell_ does **not** enforce required arguments strictly. If a required argument is omitted, the function will still run, but the missing argument will default to `null`. This often results in `null` evaluations for the function's output but does not raise an error.

#### Required Arguments

These are the arguments that the function expects to be provided to produce meaningful output. If you omit these arguments, the function assumes their value to be `null`.

#### Example:

```py
pow(2) ## Output: null (missing the second argument)
```

In this example, `pow` expects two arguments: a base and an exponent. Without the second argument, the function evaluates to `null`.

#### Optional Arguments

Optional arguments have non-`null` default values, so you can omit them without affecting the function's ability to run. If not explicitly specified, the function will use its default behavior for these arguments.

#### Example:

Consider the `arithmser` function, which generates a series of evently spaced numbers (i.e., an _arithmetic series_):

**Syntax**: `arithmser(<start>, <end>, <step> 1, <maxcount> 0)`

```py
arithmser(60, @end 72) ## Outputs: 60 61 62 ... 72 (default step: 1)
```

Here, the `@step` and `@maxcount` arguments are optional. Since they are not provided, the function uses their default values: `@step` defaults to `1`, and `@maxcount` defaults to `0`.

> Also note that you can combine positional and named argument syntax, but positional arguments must always go before any named argument.

#### Best Practices

When using a function, always provide required arguments to avoid unexpected `null` evaluations.
Familiarize yourself with the optional arguments and their default values to customize function behavior when needed.
By understanding the distinction between required and optional arguments, you can write more predictable and effective code in _bell_.

---

## Example: Musical Scales

### Using `arithmser` to Generate a Scale

Since the `arithmser` function creates an arithmetic series, it's useful for generating sequences of evenly spaced numbers, such as a chromatic or whole-tone scale.

```py
$wholetone = arithmser(@start 6000, @end 7200, @step 200); ## Whole-tone scale (MIDI cents)
$chromatic = arithmser(@start 6000 @end 7200 @step 100); ## Chromatic scale (MIDI cents)
print("whole tone:" $wholetone); ## Outputs: 6000 6200 6400 6600 6800 7000 7200
print("chromatic:" $chromatic) ## Outputs: 6000 through 72
```

---

## Dataflow-Style Function Calls

_bell_ supports a dataflow syntax, which provides an alternative way of calling functions. In other words, it's completely up to you to use this style of syntax, or instead stick to the one we've been using in previous examples.

### Syntax:

```
<arg1>.<function>(<arg2>, ..., <argN>);
```

### Example:

```py
$x = 2;
$y = $x.pow(3);
$y.print() ## Outputs: 8
```

### Concatenating function calls

Functions can be concatenated, where the result of one function becomes the input of another, from left to right.

### Example:

```py
$base = 2;
$exp = 3.5;
$base.pow($exp).round().print() ## Output: 11.
```

This style of syntax, while completely optional, does provide some degree of readability (or _flow_ )to your code, as it shows how the output of one function becomes the input of the next.

---

## Exercises

### Exercise 1: Generating Random Chords

1. Use the `random` function to generate random MIDI cents values between `4800` (`C4`) and `7200` (`C6`).
2. Assign this numbers as a list, to a variable.
3. Print the result.

### Exercise 2: Create a random arpeggio

1. Use `arithmser` to create a diminished and augmented arpeggi starting at MIDI cents value `6000` (`C5`). Each arpeggio should be assigned to a different variable.
2. Use the `scramble` function to shuffle both arpeggios.
3. Print both arpeggios.
4. In a separate `.bell` file, repeat the same steps using _dataflow-style_ syntax.

---

## FAQ

### Q: Where can I explore all available functions in _bell_?

**A**: Check the [_bell_ functions reference](/#/reference) documentation to learn more about each of the built-in _bell_ functions.

### Q: Can a function have no arguments?

**A**: Yes, though all built-in functions in _bell_ do expect arguments. We will only run into _argument-less_ functions when dealing with _user-defined_ functions later on.

Also note that, while some dataflow-style function calls make it _seem_ like there are no arguments, that's not really the case.

```py
$x = 10;
$x.print() ## same as print($x)
```

### Q: Can I define my own functions?

**A**: Yes, _bell_ does support defining custom functions. To keep things simple, however, this will be covered much later.

### Q: What happens if I pass the wrong type of argument to a function?

**A**: The function will likely evaluate to `null`, but _bell_ won't raise an error.

---

Now that you’ve mastered functions, you’re ready to learn about list-oriented functions. These are specialized tools for manipulating complex data in _bell_.
