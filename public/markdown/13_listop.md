# List Operators

> _Building and Modifying Musical Sequences_

## Introduction

In _bell_, list operators allow you to construct, modify, and transform lists (or lllls) efficiently. These operators are particularly useful for creating and manipulating musical sequences such as scales, chord progressions, and rhythmic patterns. This section introduces key list operators and demonstrates their use in musical contexts.

## Range Operator (`...`)

The range operator (`...`) is a quick way to create sequential lists, such as scales or rhythmic groupings. It generates a list of numbers from a starting value to an ending value.

### Syntax:

```py
<start>...<end>
```

### Examples:

1. Generating a Scale:

   ```py
   $scale = 1...8;
   print($scale); ## Outputs: 1 2 3 4 5 6 7 8
   ```

2. Generating MIDI Notes:

   ```py
   $notes = 60...72; ## MIDI notes for C4 to B4
   print($notes); ## Outputs: 60 61 62 ... 72
   ```

## Repeat Operator (:\*)

The repeat operator (:\*) repeats a list or sequence a specified number of times.

### Syntax:

```py
<list> :* <repetitions>
```

### Examples:

1. Repeating Notes:

```py
$pattern = C4 E4 G4 :* 3;
print($pattern); ## Outputs: C4 E4 G4 C4 E4 G4 C4 E4 G4
```

2. Repeating a Rhythm:

```py
$rhythm = 1/4 1/8 :* 2;
print($rhythm); ## Outputs: 1/4 1/8 1/4 1/8
```

## Append (`_=`) and prepend (`!_=`) compound operators

To add elements to an existing list, either at the beginning or end of it, we can do the following:

```py
$x = 3 4; ## some list
## appending
$x = $x 5 6; ## Output: 3 4 5 6
## prepending
$x = 1 2 $x ## Output: 1 2 3 4 5 6
```

However, _bell_ offers a shorthand to achieve the same, via the append (`_=`) and prepend (`!_=`) operators.

```py
$x = 3 4; ## some list
## appending
$x _= 5 6; ## Output: 3 4 5 6
## prepending
$x !_= 1 2 ## Output: 1 2 3 4 5 6
```

## Using List Operators Together

You can combine multiple list operators to create complex musical structures.

### Example: Generating a Repeating Scale Pattern

1. Create a scale using the range operator:

```py
$scale = 60...72; ## C4 to B4
```

2. Repeat the scale three times using :\*:

```py
$repeatedScale = $scale :* 3;
```

3. Concatenate a rhythm pattern:

```py
$rhythm = 1/4 :* 36; ## Repeats a quarter note rhythm for 36 notes
$pattern = $repeatedScale + $rhythm;
print($pattern);
```

## Exercises

### Exercise 1: Building a Scale

1. Use the range operator to create a major scale:

```py
$scale = 60...72; ## MIDI values for C4 to B4
```

2. Print the scale.

### Exercise 2: Repeating a Pattern

1. Create a list of rhythmic values:

```py
$rhythm = 1/4 1/8 1/8;
```

2. Use the repeat operator to repeat the rhythm four times.
3. Print the repeated rhythm.

### Exercise 3: Combining Melody and Rhythm

1. Create a melody:

```py
$melody = C4 E4 G4 F4;
```

2. Create a rhythm pattern:

```py
$rhythm = 1/4 1/8 1/8 1/2;
```

1. Concatenate the melody and rhythm to form a full pattern.

### Exercise 4: Generating a Scale Progression

1. Create three major scales for C, F, and G using the range operator:

```py
$Cmajor = 60...72;
$Fmajor = 65...77;
$Gmajor = 67...79;
```

2. Concatenate the scales into a progression:

```py
$progression = $Cmajor + $Fmajor + $Gmajor;
```

3. Print the full progression.

## FAQ

### Q: Can I use the range operator for descending sequences?

A: No, the range operator only generates ascending sequences. For descending sequences, use the rev function:

```py
$descending = (60...72).rev();
print($descending); ## Outputs: 72 71 70 ... 60
```

### Q: What happens if I repeat a list zero times?

A: Repeating a list zero times returns an empty list:

```py
$empty = C4 E4 G4 :* 0;
print($empty); ## Outputs: null
```

### Q: Can I combine operators with nested lists?

A: Yes, list operators work with nested lists as well. For example:

```py
$nested = [C4 [E4 G4]] :* 2;
print($nested); ## Outputs: [C4 [E4 G4]] [C4 [E4 G4]]
```

---

List operators provide powerful tools for generating and manipulating musical sequences in _bell_. Next, we’ll explore compound assignment operators, which simplify operations like modifying and updating variables.
