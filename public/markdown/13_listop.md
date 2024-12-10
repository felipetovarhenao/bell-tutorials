# List operators

> _Building and Modifying Musical Sequences_

In _bell_, list operators allows us to modify and transform lists (or _lllls_) efficiently. This section introduces common list operators and demonstrates their utility.

---

## Range Operator (`...`)

The range operator (`...`) is a quick way to create sequential lists, such as scales or rhythmic groupings. It generates a list of numbers from a starting value to an ending value.

### Syntax:

```py
<start>...<end>
```

### Examples:

1. Generating a harmonic series:

   ```py
   $ratios = 1...8;
   $fundamental = 55;
   $spectrum = $ratios * $fundamental;
   print($spectrum); ## Outputs: 55 110 165 220 275 330 385 440
   ```

2. Generating a chromatic scale:

   ```py
   $notes = 60...72; ## MIDI notes for C4 to B4
   print($notes); ## Outputs: 60 61 62 ... 72
   ```

---

## Repeat Operator (`:*`)

The repeat operator (`:*`) repeats a list or sequence a specified number of times.

### Syntax:

`<list> :* <repetitions>`

### Examples:

1. Creating melodic patterns:

```py
$pattern = (C4 D4 E4) :* 3;
print($pattern); ## Outputs: C4 D4 E4 C4 D4 E4 C4 D4 E4
```

Note that to repeat the list of pitches, we need to wrap them in parentheses. Otherwise the following happens:

```py
$pattern = C4 D4 E4 :* 3;
print($pattern); ## Outputs: C4 D4 E4 E4 E4
```

---

## Append (`_=`) and prepend (`!_=`) compound assignment operators

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

---

## Exercises

### Exercise 1: Building a Progression

1. Given the following variables, use the `_=` and `!_=` to update the `$progression` variable, such that it forms a `I IV V I` cadence:

```py
## don't edit this part of the code
$tonic = [C4 E4 G4];
$subdominant = [C4 F4 A4];
$dominant = [B3 D4 G4];
$progression = $subdominant;
## continue below
```

2. Print the progression.

### Exercise 2: Repeating a Pattern

1. Create a list of rhythmic values:

```py
$rhythm = 1/4 1/8 1/8;
```

2. Use the `:*` operator to repeat the rhythm four times.
3. Print the repeated rhythm.

### Exercise 3: Combining Melody and Rhythm

1. Using the `...` operator, generate the first 16 harmonics, in Hertz, of the frequency `55`.
2. Print the harmonic series.

---

## FAQ

### Q: Can I use the range operator for descending sequences?

A: No, the range operator only generates ascending sequences. For descending sequences, combine it with the `rev` function:

```py
$descending = rev(60...72);
print($descending); ## Outputs: 72 71 70 ... 60
```

### Q: What happens if I repeat a list zero times?

A: Repeating a list zero times returns an empty list (`null`):

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

List operators provide powerful tools for generating and manipulating data in _bell_. Next, we’ll explore compound assignment operators, which simplify operations like modifying and updating variables.
