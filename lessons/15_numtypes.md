# Numeric Types: Understanding and Using Numbers in bell

## Introduction

Numbers are central to programming, and bell provides a variety of numeric types tailored for both mathematical operations and musical applications. This section covers the different numeric types in bell, how they’re used, and how they relate to musical data like pitches, durations, and intervals.

## Numeric Types in bell

| Numeric Types | Description                                       | Examples       |
| ------------- | ------------------------------------------------- | -------------- |
| Integer       | Whole numbers, useful for counting or MIDI values | 60, 4, 100     |
| Float         | Numbers with decimal points, ideal for precision  | 3.14159, 440.0 |
| Rational      | Fractions, useful for rhythms or ratios           | 1/4, 3/2       |
| Pitch         | Specialized type for representing musical pitches | C4, A4, G#3    |

## 1. Integer

Integers are whole numbers without decimal points. They are commonly used for:

- MIDI note numbers.
- Counting beats or repetitions.

### Example: MIDI Note Numbers

```py
$note = 60; ## MIDI value for C4
$interval = 7; ## Perfect fifth
print($note + $interval); ## Outputs: 67 (G4)
```

## 2. Float

Floats are numbers with decimal points, allowing greater precision. They’re often used for:

- Frequencies (e.g., 440 Hz for A4).
- Microtonal adjustments.

### Example: Frequencies

```py
$freq = 440.0; ## Frequency of A4
print($freq * 2); ## Outputs: 880.0 (A5)
```

## 3. Rational

Rationals represent fractions, making them perfect for rhythmic values and ratios.

### Syntax:

```py
<num>/<den>
```

### Examples:

1. Rhythmic Durations:

```py
$rhythm = 1/4; ## Quarter note
print($rhythm * 2); ## Outputs: 1/2 (half note)
```

2. Ratios for Intervals:

```py
$ratio = 3/2; ## Perfect fifth
$baseFreq = 440; ## A4
print($baseFreq * $ratio); ## Outputs: 660
```

## 4. Pitch

Pitch is a specialized numeric type that maps musical note names to their equivalent MIDI or frequency values. bell simplifies working with pitches by letting you use intuitive note names.

### Basic Syntax:

```
<name><accidental><octave>
```

### Examples:

1. Chromatic Notes:

```py
$note = C4; ## Middle C
$sharpNote = F#3; ## F-sharp in the 3rd octave
print($note + 12); ## Outputs: C5 (one octave up)
```

2. Microtonal and Just Intonation (Advanced): bell supports advanced pitch representations, such as:

```py
$pitch = A4 + 50; ## Microtonal adjustment in cents
```

## Conversions Between Numeric Types

You can convert between types when needed. For example:

- Pitch to Frequency: Use the mc2f function.
- Frequency to Pitch: Use the f2mc function.

### Example: Convert C4 to Frequency

```py
$note = C4;
print(mc2f($note)); ## Outputs: 261.63 Hz
```

### Example: Convert Frequency to Pitch

```py
$freq = 440.0; ## A4
print(f2mc($freq)); ## Outputs: A4
```

## Numeric Operations in Musical Contexts

### Transposing Pitches

```py
$melody = C4 D4 E4 F4;
$transposed = $melody + 12; ## Transpose up an octave
print($transposed); ## Outputs: C5 D5 E5 F5
```

### Scaling Rhythms

```py
$rhythm = 1/4 1/8 1/8;
$doubleTime = $rhythm / 2; ## Double the speed
print($doubleTime); ## Outputs: 1/8 1/16 1/16
```

### Applying Frequency Ratios

```py
$baseFreq = 440.0; ## A4
$perfectFifth = 3/2;
print($baseFreq \* $perfectFifth); ## Outputs: 660.0 (E5)
```

## Exercises

### Exercise 1: Pitch Arithmetic

1. Create a variable for a note in MIDI:

```
$note = 60; ## C4
```

2. Transpose the note up by a major third (4 semitones).
3. Convert the resulting pitch to its frequency using mc2f.

### Exercise 2: Rhythmic Manipulation

1. Create a list of rhythmic values:

```py
$rhythm = 1/2 1/4 1/8;
```

2. Halve the rhythmic values (double the tempo).
3. Print the result.

### Exercise 3: Frequency Ratios

1. Create a base frequency for A4:

```py
$freq = 440.0;
```

2. Use a ratio of `3/2` to calculate the frequency of the perfect fifth above `A4`.
3. Print the frequency.

## Exercise 4: Melody Transformation

1. Create a melody using pitch names:

```py
$melody = C4 E4 G4 B4;
```

2. Transpose the melody down by an octave using subtraction.
3. Convert the transposed melody to frequencies using mc2f.

## FAQ

### Q: Can I mix numeric types in a calculation?

**A**: Yes, bell handles mixed types gracefully:

```py
print(440 * 3/2); ## Outputs: 660.0
```

### Q: How are pitches internally represented?

**A**: Pitches are represented as midicents (MIDI values scaled by 100). For example, C4 is 6000 midicents.

### Q: Can I use decimals for rhythms?

**A**: While rational numbers (fractions) are preferred for rhythms, you can use decimals for less conventional durations:

```py
$rhythm = 0.25; ## Equivalent to 1/4
```

---

Numeric types are crucial for both mathematical and musical operations in bell. With a solid understanding of these types, you can now tackle more complex tasks like conditionals, which allow you to introduce decision-making into your musical algorithms.

> Next up: [Conditionals – Making Decisions in Your Code](16_conditionals.md)
