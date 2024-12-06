# Addresses: Accessing Elements in Nested Data Structures

## Introduction

When working with _lllls_ (lists and nested lists), you'll often need to access specific elements within it. In _bell_, addresses allow you to pinpoint and retrieve elements from both simple and complex structures. This is particularly useful for handling musical data, such as retrieving individual notes from chords, specific measures from a score, or rhythm patterns from a sequence.

## Access Operator (:)

The colon (`:`) is the access operator in bell. It retrieves elements from a list based on their position (1-based indexing).

The basic syntax is `<list>:<address>`.

## Simple Addresses

In flat lists, use a single number to access an element. Remember, bell uses 1-based indexing (the first element is at position 1).

### Example: Accessing Notes

```py
$chord = C4 E4 G4;
print($chord:1); ## Outputs: C4
print($chord:2); ## Outputs: E4
print($chord:3); ## Outputs: G4
```

## Nested Addresses

For nested lists, use a list of indices to specify the path to the desired element.

### Example: Accessing Nested Elements

```py
$progression = [C4 E4 G4] [F4 A4 C5];
print($progression:1); ## Outputs: [C4 E4 G4]
print($progression:(2 1)); ## Outputs: F4
```

#### Explanation:

- `:1` retrieves the first chord `[C4 E4 G4]`.
- `:(2 1)` drills into the second chord ()`[F4 A4 C5]`) and retrieves its first note (`F4`).

## Picking Elements: Double Colon (`::`)

The double colon (`::`) is the pick operator. It retrieves elements from a list and removes their enclosing brackets, effectively "flattening" that layer.

### Example: Picking Notes from Nested Chords

```py
$chord = [C4 E4 G4];
print($chord::1); ## Outputs: C4 E4 G4
```

#### Nested Example:

```py
$progression = [C4 [E4 G4]] [[F4 A4] C5];
print($progression::(1 2)); ## Outputs: E4 G4
```

### Examples in Musical Contexts

#### Accessing Notes from a Chord

Retrieve specific notes from a chord:

```py
$chord = C4 E4 G4;
print($chord:1); ## Outputs: C4
print($chord:3); ## Outputs: G4
```

### Accessing Measures in a Score

Access measures from a multi-bar score:

```py
$score = [[C4 E4 G4] [F4 A4 C5]] [[G4 B4 D5] [A4 C5 E5]];
print($score:1); ## Outputs: [[C4 E4 G4] [F4 A4 C5]] (first measure)
print($score:(2 2)); ## Outputs: [A4 C5 E5] (second chord in the second measure)
```

### Flattening a Melody

Flatten a nested melody structure:

```py
$melody = [C4 [D4 E4]] [F4 G4];
print($melody::1); ## Outputs: C4 D4 E4
print(flat($melody)); ## Outputs: C4 D4 E4 F4 G4
```

## Exercises

### Exercise 1: Extracting Notes

1. Create a chord progression:

```
$progression = [C4 E4 G4] [F4 A4 C5];
```

2. Access and print:
   - The second chord.
   - The first note of the second chord.

### Exercise 2: Nested Melody

1. Create a melody with nested rhythmic values:

```py
$melody = [C4 1/4] [[D4 1/8] [E4 1/8]] [F4 1/2];
```

2. Access and print:
   - The first note and its rhythm.
   - The second note and its rhythm
   - Flatten the entire melody and print it.

### Exercise 3: Picking Elements

1. Create a nested list of chords and pick elements using :::

```py
$chords = [[C4 E4 G4] [F4 A4 C5]] [[G4 B4 D5] [A4 C5 E5]];
```

2. Use `::` to:

   - Retrieve and flatten the first chord.
   - Access the last chord's second note directly.

### Exercise 4: Complete Access Chain

1. Create a multi-bar progression:

```py
$score = [[[C4 E4 G4] [F4 A4 C5]] [[G4 B4 D5] [A4 C5 E5]]];
```

2. Access and print:
   - The first measure.
   - The first chord in the second measure.
   - The second note of the second chord in the first measure.

## FAQ

### Q: What happens if I access an invalid address?

**A**: You’ll get an error. Always ensure the address exists in your list. For example:

```py
$chord = C4 E4 G4;
print($chord:4); ## Error: Index out of range
```

### Q: Can I use null in an address?

**A**: No, addresses must reference valid indices. However, a null result can appear if the value being accessed doesn’t exist.

### Q: How is the double colon (`::`) different from `:`?

**A**: retrieves elements while keeping their original structure. `::` retrieves elements and flattens their brackets.

---

By mastering addresses, you can effectively navigate and manipulate complex musical structures in bell. Next, we’ll explore keys, which provide another way to structure and access data using symbolic labels.

> Next up: [Keys – Organizing and Accessing Data with Key-Value Pairs](10_keys.md)
