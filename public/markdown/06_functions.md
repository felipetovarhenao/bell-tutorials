# Functions

> _Performing Operations on Musical Data_

Functions are one of the most powerful tools in programming. In _bell_, functions allow you to perform operations on data, automate repetitive tasks, and design complex algorithms. Think of a function as a reusable block of code that takes input, performs an operation, and gives output.

---

## Understanding Functions

### What Are Functions?

A function in _bell_:

1. Has a name (e.g., `print`, `pow`, `random`).
2. Takes arguments (optional inputs that modify its behavior).
3. Returns a result.

### Syntax:

```
<function_name>(<arg1>, <arg2>, ..., <argN>);
```

### Example:

```py
print("hello world"); ## Outputs: hello world
```

---

## Commonly Used Functions

1. `print`: Displays data we want on the _Max_ console. Useful for debugging and inspecting our code.

   ```py
   print(C4 E4 G4); ## Outputs: C4 E4 G4
   ```

2. `random`: Generates a random number in a given range.

   ```py
   print(random(1, 10)); ## Outputs a random number between 1 and 10
   ```

3. `pow`: Raises a number to a power.

   ```py
   print(pow(2, 3)); ## Outputs: 8
   ```

   > This is equivalent to using the `**` operator: `2 ** 3`.

4. `abs`: Returns the absolute value of a number.

   ```py
   $num = -20;
   print(abs($num)); ## Outputs: 20
   ```

5. `round`: Rounds a number to the nearest integer.

   ```py
   $num = 2.034;
   print(round($num)); ## Outputs: 2
   ```

## Arguments in Functions

Arguments are values you pass to a function. They can be **positional** or **named**:

### Positional Arguments

Arguments are provided in the order the function expects. This requires knowing the order of arguments of the function:

#### Example:

```py
random(1, 10); ## Generates a random number between 1 and 10
```

### Named Arguments

Arguments are specified by name, allowing flexibility in their order. This requires knowing the name of the function's arguments:

#### Syntax:

```
<function_name>(@<argname> <arg>, ..., @<argname> <arg>);
```

When using named arguments, commas between arguments are optional:

```
<function_name>(@<argname> <arg> ... @<argname> <arg>);
```

#### Example:

```py
random(@min 1, @max 10); ## Same as above
random(@max 10 @min 1); ## Also works (different order, no commas)
```

When we use an incorrect argument name, _bell_ simply ignores the value assigned to that non-existent argument. To prevent bugs, make sure you spell the argument names correctly.

```py
random(@minimum 1 @maximum 10) ## Output: null
```

---

## Example: Musical Scales

### Using `arithmser` to Generate a Scale

The `arithmser` function creates an arithmetic series, which is useful for generating sequences of evenly spaced numbers, such as a chromatic or whole-tone scale.

#### Example:

```py
$wholetone = arithmser(@start 60, @end 72, @step 2); ## Whole-tone scale (MIDI)
$chromatic = arithmser(@start 60 @end 72 @step 1); ## Chromatic scale (MIDI)
print("whole tone:" $wholetone); ## Outputs: 60 62 64 66 68 70 72
print("chromatic:" $chromatic); ## Outputs: 60 through 72
```

---

## Dataflow-Style Function Calls

_bell_ supports a dataflow syntax, which provides an alternative way of calling functions.

### Syntax:

```
<arg1>.<function>(<arg2>, ..., <argN>);
```

### Example:

```py
$x = 2;
print($x.pow(3)); ## Outputs: 8
```

### Concatenating function calls

Functions can be concatenated, where the result of one function becomes the input of another, from left to right.

### Example:

```py
$base = 2;
$exp = 3.5;
$base.pow($exp).round().print(); ## Output: 11.
```

---

## Exercises

### Exercise 1: Generating Random Chords

1. Use the `random` function to generate random random MIDI note values between 48 (C4) and 72 (C6).
2. Assign this numbers as a list, to a variable.
3. Print the result.

Example:

```py
$chord = random(48, 72) random(48, 72) random(48, 72);
print($chord);
```

### Exercise 2: Create a random arpeggio

1. Use `arithmser` to create a diminished and augmented arpeggio starting at MIDI note 60 (C5). Each arpeggio should be assigned to a different variable.
2. Use the `scramble` function to shuffle both arpeggios.
3. Print both arpeggios.
4. In a separate `.bell` file, repeat the same steps using _dataflow-style_ syntax.

---

## FAQ

### Q: Can a function have no arguments?

**A**: Yes, though all built-in functions in _bell_ do expect arguments. We will only run into _argument-less_ functions when dealing with _user-defined_ functions later on. While some dataflow-style function calls make it _seem_ like there are no arguments, that's not really the case.

```py
$x = 10;
$x.print() ## $x is still an argument of print
```

### Q: Can I define my own functions?

**A**: Yes, _bell_ does support defining custom functions. To keep things simple, however, this will be covered much later.

### Q: What happens if I pass the wrong type of argument to a function?

**A**: The function will likely evaluate to `null`, but _bell_ won't raise an error.

---

Now that you’ve mastered functions, you’re ready to learn about list-oriented functions. These are specialized tools for manipulating complex data in _bell_.
