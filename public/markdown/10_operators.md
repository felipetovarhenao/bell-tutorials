# Basic operators

> _Arithmetic, Logical, and Beyond_

Operators are the foundation of performing calculations, comparisons, and logical operations in _bell_. They allow you to work with numbers, lists, symbols, and other types of data. In this section, you’ll learn how to use basic operators and see how they can be applied to musical contexts.

---

## Operators and lists

In _bell_, operators can handle a variety of combinations, including operations between single values, lists (multiple values), or a combination of both. **This flexibility is one of the main strenghts of _bell_ as a programming language, making it very easy to manipulate complex data with simple expressions**. However, certain rules apply depending on the types involved in the operation.

### 1. One-to-one

When performing operations between two individual values (e.g., two numbers), the result is straightforward: the operation is applied directly.

```py
$x = 60; ## MIDI note for C4
$y = 7;  ## Interval of a perfect fifth
print($x + $y); ## Outputs: 67 (G4)
```

### 2. One-to-many

When one of the operands is a single value and the other one a list, the operation is applied to each element of the list individually.

```py
$scale = 60 62 64 65 67; ## MIDI pitch values: C4, D4, E4, F4, G4
print($scale + 12); ## Outputs: 72 74 76 77 79 (transposed up an octave)
```

### 3. Many-to-many

When two lists are used together in an operation, the operation is applied element-wise, meaning the first element of one list is combined with the first element of the other, the second with the second, and so on.

```py
$notes = 60 64 67;
$intervals = 12 -12 0; ## Transpose up an octave, down an octave, unchanged
$transposed = $notes + $intervals;
print($transposed); ## Outputs: 72 52 67
```

#### Caveat: List-List Operations with Unequal Lengths or Structures

If the two lists do not have the same length or structure, _bell_ automatically discards the extra elements from the longer list to match the shorter one. This can result in unexpected outputs if not accounted for.

```py
$pitches = 60 62;    ## Two notes
$intervals = 2 4 5;    ## Three intervals
print($pitches + $intervals); ## Outputs: 62 66 (extra interval is discarded)
```

##### Nested Lists:

The same principle applies to nested lists. If their structures do not align, _bell_ may discard mismatched elements.

```py
$list1 = [C4 E4] [G4];
$list2 = [2 4] [5 7];
print($list1 + $list2); ## Outputs: [C4+2 E4+4] [G4+5] (matching elements only)
```

---

## Examples in Musical Contexts

### Calculating Note Intervals

Use arithmetic operators to calculate the interval between two notes in MIDI values:

```py
$note1 = 60;
$note2 = 64;
$interval = $note2 - $note1;
print($interval) ## Outputs: 4 (major third)
```

### Transposing Frequencies

Multiplying a frequency value is equivalent to transposing it:

```py
$freq = 440; ## Frequency of A4
print($freq * 2) ## Outputs: 880 (A5 — an octave higher)
```

### Pitch classes

The modulo operator is useful for finding pitch classes:

```py
$chord = 60 64 67;
$pitchclass = $chord % 12;
print($pitchclass) ## Outputs: 0 4 7 (remainders when dividing 60, 64, and 67 by 12)
```

---

## Comparison Operators

Comparison operators evaluate the relationship between two values and return either `1` if true, or 0 if false.

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

#### Comparing Pitch Heights

```py
$pitch1 = 60;
$pitch2 = 67;
print($pitch1 < $pitch2); ## Outputs: 1 (true)
```

#### Comparing Rhythm Durations

```py
$short = 1/8;
$long = 1/4;
print($short < $long); ## Outputs: 1 (true)
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

## Examples in Musical Contexts

### Checking Multiple Conditions

Determine if a note is in a specific range:

```py
$note = 65; ## MIDI value
print($note > 60 && $note < 70); ## Outputs: 1 (true)
```

### Applying OR for Key Matching

Check if a note is part of either a C major or G major chord:

```py
$note = G4;
print($note == C4 || $note == G4 || $note == E4); ## Outputs: 1 (true)
```

---

## Combining Operators

You can combine multiple operators to form complex expressions.

### Example: Pitch class equivalence

Checking if two pitches in MIDIcents are pitch class equivalent.

```py

$pitch1 = 5700 ## A3 in MIDIcents
$pitch2 = 6900 ## A4 in MIDIcents
$interval = $pitch2 - $pitch1; ## 1200 or an octave
$equivalence = ($interval % 1200) == 0; ## check divides perfectly by 1200
print($equivalence); ## Outputs: 1 (true)
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

### Exercise 4: Combining Operators for Chord Validation

1. Create a llll for the notes of a C major chord:

```py
$chord = C4 E4 G4;
```

2. Use comparison and logical operators to check if a note is part of the chord:

```py
$note = "E4";
print($note == $chord:1 || $note == $chord:2 || $note == $chord:3);
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
