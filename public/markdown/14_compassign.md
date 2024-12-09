# Compound assignment operators

> _Shortcuts for Modifying Variables_

In _bell_, compound assignment operators are shortcuts that simplify common operations when modifying variables. Instead of writing out the full expression, you can use a compound operator to make your code shorter and more readable. This is particularly useful when working with musical data like incrementing beats, adjusting velocities, or transposing notes.

---

## What Are Compound Assignment Operators?

A compound assignment operator combines an arithmetic operation with assignment (=). For example, instead of writing:

```py
$x = $x + 5;
```

You can write:

```py
$x += 5;
```

---

## List of Compound Assignment Operators

| Operator | Description             | Example    | Equivalent To  |
| -------- | ----------------------- | ---------- | -------------- |
| `+=`     | Add and assign          | `$x += 3`  | `$x = $x + 3`  |
| `-=`     | Subtract and assign     | `$x -= 2`  | `$x = $x - 2`  |
| `*=`     | Multiply and assign     | `$x *= 4`  | `$x = $x * 4`  |
| `/=`     | Divide and assign       | `$x /= 2`  | `$x = $x / 2`  |
| `**=`    | Exponentiate and assign | `$x **= 3` | `$x = $x ** 3` |
| `%=`     | Modulo and assign       | `$x %= 4`  | `$x = $x % 4`  |

---

## Examples

### Transposing Notes

Use `+=` to transpose a melody up by a fixed interval (e.g., a major second):

```py
$melody = 60 62 64 65; ## MIDI notes for C4, D4, E4, F4
$melody += 2; ## Transpose each note up by 2 semitones
print($melody); ## Outputs: 62 64 66 67
```

## Adjusting Rhythmic Durations

Use `/=` to halve the rhythmic values of a pattern:

```py
$rhythm = 1/2 1/4 1/8;
$rhythm /= 2; ## Halve each rhythmic value
print($rhythm); ## Outputs: 1/4 1/8 1/16
```

---

## Doubling Note Frequencies

Use `*=` to double the frequency of a note (octave up):

```py
$freq = 440; ## Frequency of A4
$freq *= 2; ## Double the frequency
print($freq); ## Outputs: 880 (A5)
```

---

## Creating Repeating Patterns with Modulo

Use `%=` to cycle through a set of beats:

```py
$beat = 9;
$beat %= 4; ## Find the remainder when dividing by 4
print($beat); ## Outputs: 1
```

---

## Combining Compound Operators

You can chain compound operators for more complex transformations.

### Example: Modifying a Melody and Rhythm Together

```py
$melody = 60 62 64 65; ## MIDI notes
$melody += 2; ## Transpose up by 2 semitones
$melody *= 2; ## Double each note's value (for an effect like harmonics)
print($melody); ## Outputs: 124 128 132 134
```

---

## Exercises

### Exercise 1: Transposing a Melody

1. Create a melody:
   ```py
   $melody = 60 62 64 65 67; ## C4, D4, E4, F4, G4
   ```
2. Transpose the melody up by a perfect fifth (7 semitones) using `+=`.
3. Print the transposed melody.

---

## Exercise 2: Scaling Rhythms

1. Create a list of rhythmic durations:
   ```py
   $rhythm = 1/2 1/4 1/8 1/16;
   ```
2. Double the durations using \*=.
3. Print the scaled rhythm.

---

## Exercise 3: Modifying Frequencies

1. Create a variable for a note frequency:
   ```py
   $freq = 440; ## Frequency of A4
   ```
2. Octave up the frequency using `*=` twice.
3. Print the final frequency.

---

## Exercise 4: Beat Cycling

1. Create a variable for a beat position:

   ```py
   $beat = 15;
   ```

2. Use `%=` to cycle the beat within a 4-beat measure.
3. Print the resulting beat position.

---

## FAQ

### Q: Can I use compound operators with lists?

**A**: Yes! Compound operators apply to all elements of a list:

```py
$notes = 60 62 64;
$notes += 2; ## Transposes all notes up by 2
print($notes); ## Outputs: 62 64 66
```

### Q: Can I combine multiple compound operators in a single line?

**A**: No, compound operators must be used individually. However, you can use separate lines to apply multiple transformations:

```py
$x = 10;
$x += 5;
$x *= 2;
print($x); ## Outputs: 30
```

### Q: Do compound operators work with nested lists?

**A**: They work on the top-level elements of a list. For nested lists, you'll need to use specific addresses to modify individual elements.

---

Compound assignment operators provide efficient shortcuts for modifying variables, making them ideal for tasks like transposing melodies, scaling rhythms, or cycling through patterns. With this foundation, you’re ready to explore numeric types and how they can be applied to both musical and mathematical contexts.
