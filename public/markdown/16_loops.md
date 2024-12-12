# Loops

> _Don't repeat yourself_

In _bell_, loops allow you to repeat actions or iterate through lists, making them essential for generating patterns, modifying melodies, and applying transformations to musical data. With loops, you can automate repetitive tasks, collect results, or create dynamic musical sequences.

---

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
for $note in $melody do print($note)
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

`while <condition> <do|collect> <statement>`

#### Example: Repeating Until a Note Exceeds a Threshold

```py
$note = 6000; ## C5
while $note < 7200 collect (
    print($note);
    $note += 200 ## Transpose up by a major second
)
```

#### Output:

```
6000
6200
6400
6600
6800
7000
```

---

## `for` Loops in Musical Contexts

### Example 1: Transposing Notes

```py
$melody = 6000 6200 6400 6500 6700;
$transp = for $note in $melody collect $note + 1200; ## Transpose up an octave
print($transp)
```

#### Output:

`7200 7400 7600 7700 7900`

### Example 2: Doubling Rhythmic Values

```py
$rhythm = 1/4 1/8 1/8;
for $value in $rhythm collect $value * 2 ## Double each rhythm duration
```

#### Output:

`1/2 1/4 1/4`

---

## `while` Loops in Musical Contexts

### Example: Building a Scale Dynamically

```py
$note = 6000; ## Start at C5
$scale = while $note <= 7200 collect (
    $current = $note;
    $note += 200; ## Step by a major second
    $current
);
print($scale) ## Outputs: 6000 6200 6400 6600 6800 7000 7200
```

---

## Combining `do` and `collect`

### Example: Printing Notes While Collecting Results

```py
$melody = C4 D4 E4 F4;
for $note in $melody collect (
    ## Collects transposed notes
    $note + 1200
)
```

## Exercises

### Exercise 1: Melody to Chords

1. Create a melody:

```py
$melody = C4 D4 E4 F4 G4
```

2. Use a `for` loop in which you print a major triad for each of the pitch values, using them as the triad's root.

### Exercise 2: Scale to Intervals

1. Create a list of rhythmic values:

```py
$scale = 6000 6200 6400 6500 6700 6900 7100
```

2. Use a `for` loop to print the intervals, in cents, between each of the pitch values.

### Exercise 3: Scale to Intervals

1. Intervals to Scale

```py
$root = 6000;
$intervals = 200 200 100 200 200 200 100
```

2. Use a `for` loop to construct a scale from a list of intervals. The intervals specify the distance, in cents, between adjacent pitches in the scale. Print the scale.

---

## FAQ

### Q: What’s the difference between `do` and `collect`?

**A**: The `do` keyword executes the loop but only keeps the last result. The `collect` keyword gathers results into a new list:

```py
$notes = 6000 6400 6700;
print(for $note in $notes do $note + 1200); ## Outputs: 7900
print(for $note in $notes collect $note + 1200) ## Outputs: 7200 7600 7900
```

### Q: How do I prevent infinite loops?

**A**: Ensure your `while` loop condition eventually becomes false. For example:

```py
$x = 0;
while $x < 10 do $x += 1 ## Stops when $x reaches 10
```

### Q: Can I loop over nested lists?

**A**: Yes! Use a loop to iterate over the top level, and a nested loop for inner elements:

```py
$progression = [C4 E4 G4] [F4 A4 C5];
for $chord in $progression do (
    for $note in $chord::1 do print($note)
)
```

---

Loops are incredibly powerful for creating and manipulating musical data, whether you’re iterating through melodies, generating scales, or building chord progressions. Next, we’ll explore user-defined functions, the cornerstone of modular and reusable code in _bell_.
