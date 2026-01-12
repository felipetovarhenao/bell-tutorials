# Lisp-like linked lists

A _Lisp-like linked list_, or _llll_ for short, is one of the most unique and fundamental data structures in _bell_. The _llll_ (pronounced _"ell-ell-ell-ell"_) is an advanced type of list that allows for nesting values, including other _lllls_, enabling you to structure and manipulate data hierarchically — as such, they are a very effective way of representing musical data, such as chords, progressions, melodies, scores, etc. In a way, everything in _bell_ is a list, as we'll see later.

In this section, you’ll learn the basics of _lllls_, their syntax, and how to use them to represent complex musical data.

---

## What can _lllls_ do?

A _llll_ is a list that can:

- Contain multiple elements (e.g., numbers, symbols, pitches), including a single element or no elements at all.
- Be nested, meaning a list that can include other lists as elements.

This makes _lllls_ ideal for representing hierarchical musical structures, such as chords, measures, rhythms, and more.

> Note that throughout these tutorials we'll use the terms _list_ and _llll_ interchangeably.

---

## _llll_ syntax

### Implicit _llll_ construction

You can create a simple _llll_ by writing elements next to each other, separated by spaces:

```py
$tempi = 60 80 120
```

### One-element lists

By the same token, the following can be thought of as a list with a single element:

```py
$x = 10
```

### Nested _lllls_

Use square brackets `[ ]` to group elements into nested lists:

```py
$progression = [C4 E4 G4] [F4 A4 C5]
```

### _llll_ terminology

- **Length**: The number of elements in a list.
- **Depth**: The number of levels of nesting in a list.

#### Examples:

```py
$note = C4; ## Length: 1, Depth: 1
$chord = C4 E4 G4; ## Length: 3, Depth: 1
$progression = [C4 E4 G4] [F4 A4 C5]; ## Length: 2, Depth: 2
$passage = [[C4] [E4 G4]] [[F4 A4] [C5]] ## Length: 2, Depth: 3
```

---

## Why use _lllls_?

1. **Hierarchical Organization**: Perfect for handling multi-level (i.e., hierarchical) data.
2. **Flexibility**: Perform operations on individual elements, entire lists, or nested structures — i.e., _one-to-one_, _one-to-many_, _many-to-many_. More on this in later tutorials.

---

## Examples: representing musical data

### Chords as lists

```py
$chord = C4 E4 G4
```

### Chord progressions as nested lists

```py
$progression = [C4 E4 G4] [F4 A4 C5] [G4 B4 D5]
```

### A melody with rhythmic values

```py
$melody = [C4 1/4] [D4 1/8] [E4 1/8] [F4 1/2]
```

Here, each sublist represents a pitch and rhythmic value pair.

---

## Exercises

### Exercise 1: chord progressions

1. Create a _llll_ representing a chord progression of your choice, using MIDI cents as the pitch unit. Each chord should include at least three pitches.
2. Print the progression.

### Exercise 2: melody with rhythms

1. Write a melody of your choosing as a _llll_, where each element is a sublist containing pitch (in MIDI cents) and duration (milliseconds) values:

   ```
   $melody = [ <pitch1> <dur1> ] [ <pitch2> <dur2> ] ... [ <pitchN> <durN> ]
   ```

2. Print the melody

### Exercise 3: complex nested structures

1. Create a _llll_ to represent a `I-IV-V-I` progression in G major, using pitch syntax:
   ```
   [ <root1> <third1> <fifth1> ] ... [ <root4> <third4> <fifth4> ]
   ```
2. Print the progression.

---

## FAQ

### Q: Can I mix data types in a _llll_?

**A**: Yes, _lllls_ can hold any combination of data types (e.g., numbers, symbols, pitches, or even other _lllls_). Data types will be covered later.

### Q: Is there a size limit on _lllls_?

**A**: No. You can have _lllls_ as large as your computer memory can handle.

---

Now that we've covered _lllls_, you're ready to cover basic expressions and learn how to perform calculations in _bell_
