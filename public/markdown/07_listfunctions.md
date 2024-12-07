# List Functions

> _Advanced Operations on Musical Data_

## Introduction

In _bell_, lists (or _lllls_) are central to representing and organizing musical data, whether it's a melody, a chord progression, or rhythmic patterns. To manipulate these lists efficiently, bell provides a wide range of list functions. This section will teach you how to use these functions to transform and analyze musical data.

## Common List Functions

Below is a table of commonly used list functions in bell. Each function is paired with examples in a musical context.

| Function | Purpose                            | Example                         | Result              |
| -------- | ---------------------------------- | ------------------------------- | ------------------- |
| `rev`    | Reverses the elements of a list    | `rev(C4 D4 E4 F4)`              | `F4 E4 D4 C4`       |
| `length` | Returns the number of elements     | `length(C4 E4 G4)`              | `3`                 |
| `depth`  | Returns the depth of a list        | `depth([C4 E4 G4] [F4 A4 C5])`  | `2`                 |
| `flat`   | Flattens a nested list to depth 1  | `flat([C4 [E4 G4]] [F4 A4 C5])` | `C4 E4 G4 F4 A4 C5` |
| `thin`   | Removes duplicate elements         | `thin(C4 E4 C4 C4 G4)`          | `C4 E4 G4`          |
| `mc2f`   | Converts MIDI notes to frequencies | `mc2f(C4 G4)`                   | `261.63 392.00`     |
| `f2mc`   | Converts frequencies to MIDI notes | `f2mc(440 523.25)`              | `A4 C5`             |

## Examples of Musical Data Manipulation

### Reversing a Melody

Use the `rev` function to reverse the order of notes in a melody.

```py
$melody = C4 D4 E4 F4;
print($melody.rev()) ## Outputs: F4 E4 D4 C4
```

### Finding the Length of a Chord

The `length` function counts the number of notes in a chord.

```py
$chord = C4 E4 G4;
print(length($chord)) ## Outputs: 3
```

### Flattening a Nested Progression

Use the `flat` function to reduce a nested chord progression into a single list of notes.

```py
$progression = [C4 E4 G4] [F4 A4 C5];
print(flat($progression)); ## Outputs: C4 E4 G4 F4 A4 C5
```

### Removing Duplicates from a Scale

The `thin` function removes duplicate notes, which can be useful when cleaning up generated scales or sequences.

```py
$scale = C4 E4 G4 C4 E4;
print(thin($scale)); ## Outputs: C4 E4 G4
```

## Combining List Functions

You can chain multiple list functions together for more complex operations.

### Example: Generate and Transform a Scale

1. Create a chromatic scale using arithmser.
2. Reverse the scale with rev.
3. Flatten the scale (if it’s nested).
4. Print the transformed scale.

```py
$chromatic = arithmser(@start 60, @end 72, @step 1); ## MIDI notes for C4 to B4
print($chromatic.rev().flat()) ## Outputs: 71 70 69 ... 60
```

## Real-World Music Examples

### Generating and Cleaning a Random Melody

1. Use `random` to generate a list of random notes.
2. Remove duplicates with `thin`.
3. Reverse the melody for variety.

```py
$randomMelody = random(48, 72) random(48, 72) random(48, 72) random(48, 72);
$cleanedMelody = $randomMelody.thin().rev();
print($cleanedMelody)
```

### Converting Frequencies to Notes

Use `f2mc` to map a list of frequencies back to musical notes.

```py
$frequencies = 440 392 523.25;
print($frequencies.f2mc()) ## Outputs: A4 G4 C5
```

## Exercises

### Exercise 1: Analyze a Melody

1. Create a melody as a `llll`:
   ```py
   $melody = C4 D4 E4 F4 G4;
   ```
2. Print the length of the melody.
3. Reverse the melody and print it.

### Exercise 2: Flatten a Progression

1. Create a nested chord progression:
   ```py
   $progression = [C4 E4 G4] [F4 A4 C5] [G4 B4 D5];
   ```
2. Flatten the progression into a single list of notes using `flat`.
3. Print the flattened progression.

### Exercise 3: Clean Up a Scale

1. Create a scale with duplicate notes:
   ```py
   $scale = C4 D4 E4 C4 G4 D4;
   ```
2. Remove the duplicates using thin.
3. Print the cleaned scale.

### Exercise 4: Frequency to Note Conversion

1. Create a list of frequencies corresponding to musical pitches:
   ```py
   $frequencies = 261.63 329.63 392.00;
   ```
2. Convert the frequencies to MIDI notes using `f2mc`.
3. Print the resulting notes.

## FAQ

### Q: Can I combine list functions?

**A**: Yes, functions like flat, rev, and thin can be chained together. For example:

```py
$data = [C4 [E4 G4]] [F4 A4 C5];
print($data.flat().rev())
```

### Q: How deep can a nested list go?

**A**: There’s no practical limit to nesting depth, but overly deep structures can make your code harder to read and maintain.

### Q: What happens if I flatten a non-nested list?

**A**: Flattening a non-nested list does nothing. For example:

```py
$notes = C4 D4 E4;
print(flat($notes)) ## Outputs: C4 D4 E4
```

Now that you’ve explored list functions, you’re ready to dive into symbols, which are crucial for representing textual data like note names and other musical labels.
