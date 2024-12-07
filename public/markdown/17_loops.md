# Loops

> _Repeating and Collecting Data in Your Programs_

### Introduction

In _bell_, loops allow you to repeat actions or iterate through lists, making them essential for generating patterns, modifying melodies, and applying transformations to musical data. With loops, you can automate repetitive tasks, collect results, or create dynamic musical sequences.

## Types of Loops in _bell_

### 1. `for` Loops

A for loop iterates through each element in a list. It is perfect for processing lllls such as melodies, rhythms, or chords.

Syntax:

`for $<var> in <list> <do|collect> <statement>;`

- `do`: Executes the statement but discards all intermediate results except the last one.
- `collect`: Executes the statement and gathers the results into a new list.

#### Example: Iterating Through a Melody

```py
$melody = C4 D4 E4 F4;
for $note in $melody do print($note);
```

##### Output:

```
C4
D4
E4
F4
```

### 2. `while` Loops

A `while` loop repeats as long as a condition remains true. Use this for dynamic operations where the number of repetitions isn't predetermined.

#### Syntax:

```
while <condition> <do|collect> <statement>;
```

#### Example: Repeating Until a Note Exceeds a Threshold

```py
$note = 60; ## C4
while $note < 72 collect (
    print($note);
    $note += 2; ## Transpose up by a major second
);
```

#### Output:

```
60
62
64
66
68
70
```

## `for` Loops in Musical Contexts

### Example 1: Transposing Notes

```py
$melody = C4 D4 E4 F4;
for $note in $melody collect $note + 12; ## Transpose up an octave
```

#### Output:

```
C5 D5 E5 F5
```

### Example 2: Doubling Rhythmic Values

```py
$rhythm = 1/4 1/8 1/8;
for $value in $rhythm collect $value * 2; ## Double each rhythm duration
```

#### Output:

`1/2 1/4 1/4`

## `while` Loops in Musical Contexts

### Example: Building a Scale Dynamically

```py
$note = 60; ## Start at C4
$scale = while $note <= 72 collect (
    $current = $note;
    $note += 2; ## Step by a major second
    $current
);
print($scale); ## Outputs: 60 62 64 66 68 70 72
```

## Combining do and collect

### Example: Printing Notes While Collecting Results

```py
$melody = C4 D4 E4 F4;
for $note in $melody do (
    print($note);
) collect $note + 12; ## Collects transposed notes
```

## Exercises

### Exercise 1: Iterating Over a Melody

1. Create a melody:

```py
$melody = C4 D4 E4 F4 G4;
```

2. Use a for loop to transpose each note up by a perfect fifth (7 semitones) and collect the result.

### Exercise 2: Scaling Rhythms

1. Create a list of rhythmic values:

```py
$rhythms = 1/4 1/8 1/16;
```

2. Use a for loop to double the value of each rhythm and collect the results.

### Exercise 3: Generating a Scale with a while Loop

1. Start with a note at MIDI 60 (C4).
2. Use a while loop to generate a major scale up to MIDI 72.
3. Collect the resulting scale.

### Exercise 4: Nested Loops for Chord Progressions

1. Create a list of root notes:

```py
$roots = C4 F4 G4;
```

2. Use a for loop to generate triads for each root note:
3. Add a major third and a perfect fifth to each root.
4. Collect the chords into a progression.

## FAQ

### Q: What’s the difference between do and collect?

**A**: The do keyword executes the loop but only keeps the last result. The collect keyword gathers results into a new list:

```py
$notes = C4 D4 E4;
for $note in $notes do print($note); ## Outputs each note, but no result is collected
for $note in $notes collect $note + 12; ## Collects transposed notes
```

### Q: How do I prevent infinite loops?

**A**: Ensure your while loop condition eventually becomes false. For example:

```py
$x = 0;
while $x < 10 do $x += 1; ## Stops when $x reaches 10
```

### Q: Can I loop over nested lists?

**A**: Yes! Use a loop to iterate over the top level, and a nested loop for inner elements:

```py
$progression = [[C4 E4 G4] [F4 A4 C5]];
for $chord in $progression do (
    for $note in $chord do print($note);
);
```

---

Loops are incredibly powerful for creating and manipulating musical data, whether you’re iterating through melodies, generating scales, or building chord progressions. Next, we’ll explore parentheses in compound statements, which allow you to group and organize your code effectively.
