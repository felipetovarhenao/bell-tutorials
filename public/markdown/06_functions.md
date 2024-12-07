# Functions

> _Performing Operations on Musical Data_

Functions are one of the most powerful tools in programming. In _bell_, functions allow you to perform operations on musical data, automate repetitive tasks, and compose algorithmic structures. Think of a function as a reusable block of code that takes input, performs an operation, and gives output.

## Understanding Functions

### What Are Functions?

A function in _bell_:

1. Has a name (e.g., `print`, `pow`, `random`).
2. Takes arguments (optional inputs that modify its behavior).
3. Returns a result.

### Syntax:

```c
<function_name>(<arg1>, <arg2>, ..., <argN>);
```

### Example:

```py
print("hello world"); ## Outputs: hello world
```

## Commonly Used Functions in Music Programming

1. `print`: Displays text, numbers, or musical data.

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

4. `length`: Returns the _length_ of a list.

   ```py
   $chord = C4 E4 G4;
   print(length($chord)); ## Outputs: 3
   ```

5. `rev`: Reverses a list.

   ```py
   $melody = C4 D4 E4 F4;
   print(rev($melody)); ## Outputs: F4 E4 D4 C4
   ```

## Arguments in Functions

Arguments are values you pass to a function. They can be **positional** or **named**:

### Positional Arguments

Arguments are provided in the order the function expects:

```py
random(1, 10); ## Generates a random number between 1 and 10
```

### Named Arguments

Arguments are specified by name, allowing flexibility in their order:

```py
random(@min 1, @max 10); ## Same as above
```

## Example: Musical Scales

### Using `arithmser` to Generate a Scale

The `arithmser` function creates an arithmetic series, which is useful for generating scales.

#### Syntax:

```py
arithmser(@start <value>, @end <value>, @step <value>);
```

#### Example:

```py
$scale = arithmser(@start 60, @end 72, @step 2); ## Major scale in MIDI numbers
print($scale); ## Outputs: 60 62 64 66 68 70 72
```

## Dataflow-Style Function Calls

_bell_ supports a dataflow syntax, where functions are called on an object directly. This is especially intuitive for manipulating musical data.

### Syntax:

```c
<object>.<function>(<arg1>, <arg2>, ...);
```

### Example: Reversing a Melody

```py
$melody = C4 D4 E4 F4;
print($melody.rev()); ## Outputs: F4 E4 D4 C4
```

## Nested Functions

Functions can be nested, where the result of one function becomes the input of another.

### Example: Randomize and Reverse

```py
$notes = C4 D4 E4 F4;
print($notes.rev().random(1, 4)); ## Outputs a random n
```

## Exercises

### Exercise 1: Generating Random Chords

1. Use the `random` function to generate three random MIDI note numbers between 48 (C3) and 72 (C5).

2. Combine these numbers into a chord and print the result.

Example:

```py
$chord = random(48, 72) random(48, 72) random(48, 72);
print($chord);
```

### Exercise 2: Create and Manipulate a Melody

1. Use arithmser to create a major scale starting at MIDI note 60 (C4).

```py
$scale = arithmser(@start 60, @end 72, @step 2);
```

2. Reverse the scale using rev.
3. Print both the original and reversed scales.

### Exercise 3: Exploring List Functions

1. Create a chord progression:

```py
$progression = [C4 E4 G4] [F4 A4 C5] [G4 B4 D5];
```

2. Print the length of the progression.
3. Flatten the progression using flat and print the result.

### Exercise 4: Combining Functions for a Musical Pattern

1. Create a list of rhythmic values:

```py
$rhythms = 1/4 1/8 1/8 1/2;
```

2. Reverse the rhythms.
3. Combine the reversed rhythms with a melody using a nested list structure.

```py
$melody = [C4 D4 E4 F4];
$pattern = [$melody, $rhythms.rev()];
print($pattern);
```

## FAQ

### Q: Can a function have no arguments?

**A**: Yes, some functions like `length` and `rev` don't require arguments:

```py
$notes = C4 D4 E4 F4;
print(length($notes)); ## Outputs: 4
```

### Q: Can I define my own functions?

**A**: While this primer focuses on built-in functions, _bell_ supports defining custom functions. This will be covered in advanced topics.

### Q: What happens if I pass the wrong type of argument?

**A**: _bell_ will throw an error. For example, passing a string to pow (which expects numbers) will cause an error.

---

Now that you’ve mastered functions, you’re ready to learn about list functions in depth. These are specialized tools for manipulating musical data in _bell_.
