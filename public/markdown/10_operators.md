# Basic operators

> _Arithmetic, Logical, and Beyond_

Operators are the foundation of performing calculations, comparisons, and logical operations in _bell_. They allow you to work with numbers, lists, symbols, and other types of data. In this section, you’ll learn how to use basic operators and see how they can be applied to musical contexts.

---

## Arithmetic Operators

Arithmetic operators perform mathematical calculations.

| Operator | Description            | Example  | Result |
| -------- | ---------------------- | -------- | ------ |
| `+`      | Addition               | `5 + 3`  | `8`    |
| `-`      | Subtraction            | `10 - 4` | `6`    |
| `*`      | Multiplication         | `7 * 2`  | `14`   |
| `/`      | Division               | `8 / 2`  | `4`    |
| `%`      | Modulo (remainder)     | `9 % 4`  | `1`    |
| `**`     | Exponentiation (power) | `2 ** 3` | `8`    |

---

## Examples in Musical Contexts

### Calculating Note Intervals

Use arithmetic operators to calculate the interval between two notes in MIDI values:

```py
$C4 = 60;
$E4 = 64;
$interval = $E4 - $C4;
print($interval) ## Outputs: 4 (major third)
```

### Doubling Note Frequencies

Doubling a note's frequency raises it by one octave:

```py
$freq = 440; ## Frequency of A4
print($freq * 2) ## Outputs: 880 (A5)
```

### Using Modulo for Rhythms

The modulo operator can determine rhythmic groupings:

```py
$beat = 7;
print($beat % 4) ## Outputs: 3 (remainder when dividing beats by 4)
```

---

## Comparison Operators

Comparison operators evaluate the relationship between two values and return either true (non-zero) or false (0).

| Operator | Description              | Example  | Result        |
| -------- | ------------------------ | -------- | ------------- |
| `==`     | Equal to                 | `5 == 5` | `1` (_true_)  |
| `!=`     | Not equal to             | `5 != 3` | `1` (_true_)  |
| `<`      | Less than                | `3 < 5`  | `1` (_true_)  |
| `<=`     | Less than or equal to    | `5 <= 5` | `1` (_true_)  |
| `>`      | Greater than             | `7 > 4`  | `1` (_true_)  |
| `>=`     | Greater than or equal to | `8 >= 9` | `0` (_false_) |

---

## Examples in Musical Contexts

#### Comparing Note Heights

```py
$C4 = 60;
$G4 = 67;
print($C4 < $G4); ## Outputs: true
```

#### Checking Rhythm Durations

```py
$short = 1/8;
$long = 1/4;
print($short < $long); ## Outputs: true
```

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

## Examples in Musical Contexts

### Checking Multiple Conditions

Determine if a note is in a specific range:

```py
$note = 65; ## MIDI value
print($note > 60 and $note < 70); ## Outputs: true
```

### Applying OR for Key Matching

Check if a note is part of either a C major or G major chord:

```py
$note = "G4";
print($note == "C4" or $note == "G4" or $note == "E4"); ## Outputs: true
```

---

## Combining Operators

You can combine multiple operators to form complex expressions.

### Example: Musical Transformation

1. Double the frequency of a note (octave up).
2. Add a second interval (perfect fifth).
3. Check if the resulting pitch is higher than a threshold.

```py
$freq = 220; ## A3
$octaveUp = $freq * 2; ## 440 (A4)
$withFifth = $octaveUp + (440 * (3/2)); ## Adds a fifth (E5)
print($withFifth > 500); ## Outputs: true
```

---

## Exercises

### Exercise 1: Calculating Intervals

1. Create variables for the MIDI values of C4 and E4.
2. Use subtraction to calculate the interval between them.
3. Print the result.

### Exercise 2: Rhythm Groupings

1. Create a variable $beats = 15.
2. Use the modulo operator % to divide $beats into groups of 4.
3. Print the remainder.

### Exercise 3: Logical Comparisons

1. Create a variable $note = 62 (MIDI value).
2. Check if $note is in the range of 60 (C4) to 72 (C5).
3. Print the result.

---

## Exercise 4: Combining Operators for Chord Validation

1. Create a llll for the notes of a C major chord:

```py
$chord = C4 E4 G4;
```

2. Use comparison and logical operators to check if a note is part of the chord:

```py
$note = "E4";
print($note == $chord:1 or $note == $chord:2 or $note == $chord:3);
```

3. Print the result.

---

## FAQ

### Q: Can I combine logical and arithmetic operators?

**A**: Yes, you can mix logical and arithmetic operations in the same expression:

```py
print((5 + 3) > 7 and (2 * 4) == 8); ## Outputs: true
```

### Q: Is there a priority order for operators?

**A**: Yes, _bell_ follows standard precedence rules:

1. Parentheses `()`
2. Arithmetic operators (+, -, \*, /, %, \*\*)
3. Comparison operators (<, <=, >, >=, ==, !=)
4. Logical operators (not, and, or)

Use parentheses to clarify or override precedence.

### Q: Can I use operators on symbols?

**A**: Some operators, like +, work on symbols (e.g., concatenation):

```py
$label = "C" + "maj";
print($label); ## Outputs: Cmaj
```

---

With a solid grasp of operators, you’re now ready to explore addresses, which allow you to access specific elements in complex lists and nested structures.
