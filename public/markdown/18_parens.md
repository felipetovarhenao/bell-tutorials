# Parentheses

> _Grouping and Organizing Complex Statements_

In _bell_, parentheses `()` are used to group and organize expressions, allowing you to control the order of operations, create compound statements, and write more readable code. Parentheses are essential when working with complex musical data or chaining multiple operations together.

## Why Use Parentheses?

1. Control Order of Operations: Ensure certain operations are performed before others.
2. Group Statements: Combine multiple actions into a single block.
3. Create Nested Structures: Manage complex musical transformations or calculations.

---

## Using Parentheses to Control Order of Operations

### Example: Transposing and Adding Rhythms

Without parentheses, _bell_ follows standard operator precedence. Use parentheses to override this when needed.

#### Without Parentheses:

```py
$result = 60 + 12 * 2; ## Multiplication happens first
print($result); ## Outputs: 84
```

#### With Parentheses:

```py
$result = (60 + 12) * 2; ## Addition happens first
print($result); ## Outputs: 144
```

### Musical Example: Combining Transposition and Scaling

```py
$melody = 60 62 64;
$transformed = ($melody + 12) * 2; ## Transpose up an octave, then double each value
print($transformed); ## Outputs: 144 148 152
```

---

## Grouping Compound Statements

Parentheses allow you to group multiple statements into a single block. The result of the last statement in the block is returned.

### Example: Grouping Statements in a Melody

```py
$result = (
    $melody = C4 D4 E4;
    print($melody); ## Prints the melody
    $melody + 12 ## Transposes the melody
);
print($result); ## Outputs: C5 D5 E5
```

---

## Using Parentheses with the Nullify Operator (;)

The **nullify operator** (`;`) discards the results of intermediate statements within parentheses.

### Example: Discarding Intermediate Results

```py
$result = (
    $note = 60;
    $note += 12; ## Transpose up an octave
    print($note); ## Prints: 72
    $note + 5 ## Only this result is returned
);
print($result); ## Outputs: 77
```

---

## Nesting Parentheses for Complex Logic

You can nest parentheses to structure your code logically, especially when combining multiple transformations.

### Example: Nested Melody Transformation

```py
$melody = C4 D4 E4;
$result = (
    $transposed = ($melody + 12); ## Transpose up an octave
    $scaled = ($transposed * 2); ## Double each note
    $scaled ## Return the final result
);
print($result); ## Outputs: 144 148 152
```

---

## Examples in Musical Contexts

### Example 1: Adjusting Rhythms in Steps

Group rhythmic adjustments into a single block:

```py
$rhythms = 1/4 1/8 1/16;
$transformed = (
    $halved = $rhythms / 2; ## Double the speed
    print($halved); ## Prints: 1/8 1/16 1/32
    $halved * 4 ## Quadruple the resulting durations
);
print($transformed); ## Outputs: 1/2 1/4 1/8
```

---

## Example 2: Conditional Melody Transformation

Apply different transformations based on conditions:

```py
$melody = C4 D4 E4;
$result = if 1 > 0 then (
    print("Condition is true");
    $melody + 12 ## Transpose up an octave
) else (
    $melody - 12 ## Transpose down an octave
);
print($result); ## Outputs: C5 D5 E5
```

---

## Exercises

### Exercise 1: Organizing Melody Transformations

1. Create a melody:
   ```py
   $melody = C4 D4 E4 F4;
   ```
2. Use parentheses to:
   - Transpose the melody up by a perfect fifth (7 semitones).
   - Double the transposed values.
3. Print the final result.

### Exercise 2: Chaining Rhythmic Adjustments

1. Create a list of rhythmic values:

   ```py
   $rhythms = 1/4 1/8 1/16;
   ```

2. Use parentheses to:
   - Halve the values.
   - Triple the halved values.
   - Collect and print the final result.

### Exercise 3: Nested Transformations

1. Create a nested list of notes and rhythms:

   ```py
   $data = [[C4 D4 E4] [1/4 1/8 1/16]];
   ```

2. Use parentheses to:
   - Flatten the notes and rhythms.
   - Scale the rhythmic values by 2.
   - Print the final result.

### Exercise 4: Complex Conditional Block

1. Create a melody:
   ```py
   $melody = C4 E4 G4;
   ```
2. Use an `if-else` block with parentheses to:
   - Transpose the melody up by an octave if the first note is below `D4`.
   - Transpose the melody down by a minor third otherwise.
3. Print the final result.

---

## FAQ

### Q: Can I use parentheses for readability only?

**A**: Yes, you can use parentheses to make your code more readable even when they aren’t strictly required:

```py
$result = 60 + (12 * 2); ## Easier to understand at a glance
```

### Q: What happens if I forget the closing parenthesis?

**A**: The _bell_ will throw a syntax error. Always ensure that every opening parenthesis has a corresponding closing parenthesis.

### Q: Can parentheses contain nested loops or conditionals?

**A**: Absolutely! Parentheses can encapsulate any block of code, including loops and conditionals:

```py
$result = (
    for $note in C4 D4 E4 collect $note + 12;
);
print($result); ## Outputs: C5 D5 E5
```

---

Parentheses provide a powerful way to group and organize your code, making it more readable and efficient. They’re especially useful when working with complex musical transformations or chaining multiple operations. Next, we’ll explore user-defined functions, the cornerstone of modular and reusable code in _bell_.
