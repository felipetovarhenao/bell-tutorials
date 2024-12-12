# List-oriented functions

> _Basic Manipulation of lllls_

To manipulate these lists efficiently, _bell_ provides a wide range of functions to manipulate _lllls_. This section will teach you how to use some of these functions to transform your _lllls_.

---

## Common List Functions

Below is a table of commonly used list-oriented functions in _bell_.

| Function | Purpose                            | Example                         | Output                 |
| -------- | ---------------------------------- | ------------------------------- | ---------------------- |
| `rev`    | Reverses the elements of a list    | `rev(C4 D4 E4 F4)`              | `F4 E4 D4 C4`          |
| `length` | Returns the number of elements     | `length(C4 E4 G4)`              | `3`                    |
| `depth`  | Returns the depth of a list        | `depth([C4 E4 G4] [F4 A4 C5])`  | `2`                    |
| `flat`   | Flattens a nested list to depth 1  | `flat([C4 [E4 G4]] [F4 A4 C5])` | `C4 E4 G4 F4 A4 C5`    |
| `thin`   | Removes duplicate elements         | `thin(C4 E4 C4 C4 G4)`          | `C4 E4 G4`             |
| `mc2f`   | Converts MIDI cents to frequencies | `mc2f(6000 6700)`               | `261.63 392.00`        |
| `f2mc`   | Converts frequencies to MIDI cents | `f2mc(440 523.25)`              | `A4 C5`                |
| `trans`  | Transposes a matrix-style list     | `trans([1 2 3] [10 20 30])`     | `[1 10] [2 20] [3 30]` |

---

## Examples of Data Manipulation

### Reversing a Melody

Use the `rev` function to reverse the order of pitches in a melody.

```py
$melody = C4 D4 E4 F4;
print(rev($melody)) ## Outputs: F4 E4 D4 C4
```

### Finding the Length of a Chord

Use the `length` function to count the number of pitches in a chord.

```py
$chord = C4 E4 G4;
print(length($chord)) ## Outputs: 3
```

### Flattening a Nested Progression

Use the `flat` function to reduce a nested chord progression into a single list of pitches.

```py
$progression = [C4 E4 G4] [F4 A4 C5];
print(flat($progression)) ## Outputs: C4 E4 G4 F4 A4 C5
```

---

## Combining List Functions

You can chain multiple list functions together for more complex operations.

### Example 1: Melody to Scale

Use the `thin` and `sort` functions to infer the scale from a given melody.

```py
$melody = G4 C4 G4 C4 F4 D4 E4;
$scale = $melody.thin(); ## Outputs: G4 C4 F4 D4 E4
$scale = $scale.sort().print() ## Outputs: C4 D4 E4 F4 G4
```

### Example 2: Converting Frequencies to Notes

Use `f2mc` to convert a list of frequencies to MIDI cents.

```py
$spectrum = 55 110 220 440 880;
print($spectrum.f2mc()) ## 3300. 4500. 5700. 6900. 8100.
```

---

## Exercises

### Exercise 1: Analyze a Melody

1. Create a melody as a _llll_, in MIDI cents:
2. Print the `length` of the melody.
3. Infer the scale that the melody is based on, using the `thin` and `sort` functions.
4. Print the scale.

### Exercise 2: Flatten a Progression

1. Create a nested chord progression. For example:
   ```py
   $progression = [C4 E4 G4] [F4 A4 C5] [G4 B4 D5]
   ```
2. Flatten the progression into a single list of notes using `flat`.
3. Infer the scale of the progression using the `thin` and `sort` functions.
4. Print the scale.

### Exercise 4: Frequency to Note Conversion

1. Create a list of pitches, using note names. For instance:

   ```py
   $notes = C4 Eb4 G4
   ```

2. Convert the pitches to frequencies using `mc2f`.
3. Print the resulting frequencies.

---

## FAQ

### Q: Can I combine list functions?

**A**: Yes, any function can be chained to another, in either syntax style. For example:

```py
$data = [C4 [E4 G4]] [F4 A4 C5];
$data.flat().sort().rev().print(); ## Output: C5 A4 G4 F4 E4 C4
print(rev(sort(flat($data)))) ## Same as above
```

### Q: How deep can a nested list go?

**A**: There’s no practical limit to nesting depth, but overly deep structures can make your code and data much more complex to handle.

### Q: What happens if I flatten a non-nested list?

**A**: Flattening a non-nested list does nothing. For example:

```py
$notes = C4 D4 E4;
print(flat($notes)) ## Outputs: C4 D4 E4
```

---

Now that you’ve explored list functions, you’re ready to dive into symbols, which are helpful for structuring _lllls_.
