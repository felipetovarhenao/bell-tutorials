# Operators

> _Performing Logic, Arithmetic, and Transformations_

Operators are the foundation of performing calculations, comparisons, and logical operations in _bell_. They allow you to work with numbers, lists, and symbols. In this section, you’ll learn how to use basic operators and see how they can be applied to musical contexts.

---

## Arithmetic operators

In a [previous tutorial](05_expressions.md), we already touched upon some of the most common arithmetic operators, such as `+`, `-`, `*`, `/`, and more. Here are some extra examples of arithmetic operations:

### Generating scales

Using addition to generate scales in MIDI values:

```py
$scale = 0 2 4 5 7 9 11; ## major scale intervals from root
$root = 60; ## middle C
$cmajor = $scale + $root;
print($cmajor) ## Outputs: 60 62 64 65 67 69 71 (C major scale)
```

### Transposing Frequencies

Using multiplication to transpose a frequencies up an octave:

```py
$freqs = 100 200 300 400 500 600; ## A harmonic series
print($freqs * 2) ## Outputs: 200 400 600 800 1000 1200 (an octave higher)
```

### Pitch classes

Using the modulo operator to calculate pitch classes:

```py
$chord = 60 64 67;
$pcs = $chord % 12;
print($pcs) ## Outputs: 0 4 7 (remainders when dividing 60, 64, and 67 by 12)
```

---

## Comparison Operators

Comparison operators evaluate the relationship between two values and return either `1` if true, or `0` if false.

| Operator | Description              | Example  | Result        |
| -------- | ------------------------ | -------- | ------------- |
| `==`     | Equal to                 | `5 == 5` | `1` (_true_)  |
| `!=`     | Not equal to             | `5 != 3` | `1` (_true_)  |
| `<`      | Less than                | `3 < 5`  | `1` (_true_)  |
| `<=`     | Less than or equal to    | `5 <= 5` | `1` (_true_)  |
| `>`      | Greater than             | `7 > 4`  | `1` (_true_)  |
| `>=`     | Greater than or equal to | `8 >= 9` | `0` (_false_) |

---

## Examples

#### Comparing Pitch Heights

```py
$pitch1 = 60;
$pitch2 = 67;
print($pitch1 < $pitch2) ## Outputs: 1 (true)
```

#### Comparing Rhythm Durations

```py
$eighth = 1/8;
$quarter = 1/4;
print($eighth < $quarter) ## Outputs: 1 (true)
```

#### Comparing lists

---

## Logical Operators

Logical operators are used to combine or negate conditions.

| Operator | Description   | Example    | Result        |
| -------- | ------------- | ---------- | ------------- |
| `&&`     | Logical _AND_ | `1 && 0`   | `0` (_false_) |
| `&&`     | Logical _AND_ | `0 && 1`   | `0` (_false_) |
| `\|\|`   | Logical _OR_  | `1 \|\| 0` | `1` (_true_)  |
| `\|\|`   | Logical _OR_  | `0 \|\| 1` | `1` (_true_)  |
| `!`      | Logical _NOT_ | `!0`       | `1` (_true_)  |
| `!`      | Logical _NOT_ | `!1`       | `0` (_false_) |

---

## Examples

### Checking Multiple Conditions

Determine if a pitch is in a specific range:

```py
$pitch = 65; ## MIDI value
print($pitch > 60 && $pitch < 70) ## Outputs: 1 (true)
```

#### Explanation:

- **Comparison Operators (`>` and `<`)**:
  - `$pitch > 60`: This checks if the value of `$pitch` (`65`) is greater than `60`.
  - `$pitch < 70`: This checks if the value of `$pitch` is less than `70`.
- **Boolean AND Operator (`&&`)**:
  - Combines the two conditions to ensure both are true.
  - The expression evaluates to `1` (true) only if `$pitch > 60` and `$pitch < 70`.
- **Output**:
  - Since `$pitch` (`65`) is indeed greater than `60` and less than `70`, the combined condition evaluates to `1` (true), and `1` is printed.

### Applying OR for Note-to-Chord Matching

Check if a pitch is part of the C major triad:

```py
$pitch = G4;
print($pitch == C4 || $pitch == G4 || $pitch == E4) ## Outputs: 1 (true)
```

#### Explanation:

- **Comparison Operators (`==`)**:
  - `$pitch == C4`: This checks if `$pitch` is equal to `C4`.
  - `$pitch == G4`: This checks if `$pitch` is equal to `G4`.
  - `$pitch == E4`: This checks if `$pitch` is equal to `E4`.
- **Boolean OR Operator (`||`)**:
  - Combines the three conditions to check if any one of them is true.
  - The expression evaluates to `1` (true) if `$pitch` matches at least one of the values (`C4`, `G4`, or `E4`).
- **Output**:
  - Since `$pitch` is set to `G4`, the second condition (`$pitch == G4`) evaluates to 1 (true). As a result, the entire expression evaluates to `1`, and `1` is printed.
  - One non-trivial side effect in this example is that the comparison `$pitch == E4` is never evaluated by _bell_ because as soon as one of the comparisons is true, it stops checking.

---

## Combining Operators

You can combine multiple operators to form complex expressions.

### Example: Pitch class equivalence

Checking if two pitches in MIDI cents are pitch class equivalent.

```py

$pitch1 = 5700; ## A3 in MIDI cents
$pitch2 = 6900; ## A4 in MIDI cents
$interval = $pitch2 - $pitch1; ## 1200 or an octave
$equivalence = ($interval % 1200) == 0; ## check divides perfectly by 1200
print($equivalence) ## Outputs: 1 (true)
```

---

## Exercises

### Exercise 1: Calculating Intervals

1. Create variables for the MIDI values of `60` (C4) and `64` (E4).
2. Use subtraction to calculate the interval between them.
3. Print the result.

### Exercise 2: Logical Comparisons

1. Create a variable `$note = 62` (MIDI value).
2. Check if $note is in the range of 55 (G4) to 67 (G5).
3. Print the result.

---

## FAQ

### Q: Can I combine logical and arithmetic operators?

**A**: Yes, you can mix logical and arithmetic operations in the same expression:

```py
print((5 + 3) > 7 && (2 * 4) == 8) ## Outputs: 1
```

### Q: Is there a priority order for operators?

**A**: Yes, _bell_ follows standard precedence rules:

1. Parentheses `()`
2. Arithmetic operators (`+`, `-`, `*`, `/`, `%`, `**`)
3. Comparison operators (`<`, `<=`, `>`, `>=`, `==`, `!=`)
4. Logical operators (`&&`, and, `||`)

Use parentheses to clarify or override precedence.

### Q: Can I use operators on symbols?

**A**: Some operators, like `+`, work on symbols (e.g., concatenation):

```py
$label = "C" + "maj";
print($label) ## Outputs: Cmaj
```

---

With a general grasp of operators, you’re now ready to explore addresses, which allow you to access specific elements in complex lists and nested structures.
