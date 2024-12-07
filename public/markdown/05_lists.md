# Lisp-Like Linked Lists (lllls)

> _Working with Nested Data Structures_

## Introduction

A _Lisp-like linked list_, or _llll_ for short, is one of the most fundamental data structures in _bell_. _lllls_ (pronounced _"ell-ell-ell-ells"_) are an advanced type of list data type that allow for nesting values, including lists, enabling you to structure and manipulate data hierarchically — as such as they are very effective way of representing musical data, such as chords, progressions, melodies, scores, etc.

In this section, you’ll learn the basics of _lllls_, their syntax, and how to use them to represent complex musical data.

## What can _lllls_ do?

A _llll_ is a list that can:

- Contain multiple elements (e.g., numbers, symbols, pitches).
- Be nested, meaning a list that can include other lists as elements.

This makes _lllls_ ideal for representing hierarchical musical structures, such as chords, measures, rhythms, and more.

## llll Syntax

### Implicit llll Construction

You can create a simple llll by writing elements next to each other, separated by spaces:

```py
$tempi = 60 80 120
```

### Nested lllls

Use square brackets [ ] to group elements into nested lists:

```py
$progression = [C4 E4 G4] [F4 A4 C5]
```

### llll Terminology

- **Length**: The number of elements in a list.
- **Depth**: The number of levels of nesting in a list.

#### Examples:

```py
$note = C4 ## Length: 1, Depth: 1
$chord = C4 E4 G4 ## Length: 3, Depth: 1
$progression = [C4 E4 G4] [F4 A4 C5] ## Length: 2, Depth: 2
$passage = [[C4] [E4 G4]] [[F4 A4] [C5]] ## Length: 2, Depth: 3
```

## Why Use _lllls_?

1. **Simple Syntax**: Easily represent sequences or nested structures.
2. **Hierarchical Organization**: Perfect for handling multi-level musical data.
3. **Flexibility**: Perform operations on individual elements, entire lists, or nested structures — i.e., _one-to-one_, _one-to-many_, _many-to-many_.

## Examples: Representing Musical Data

### Chords as Lists

```py
$chord = C4 E4 G4
```

### Chord Progressions as Nested Lists

```py
$progression = [C4 E4 G4] [F4 A4 C5] [G4 B4 D5]
```

### A Melody with Rhythmic Values

```py
$melody = [C4 1/4] [D4 1/8] [E4 1/8] [F4 1/2]
```

Here, each sublist represents a note and its rhythmic value.

## Exercises

### Exercise 1: Chord Progressions

1. Create a _llll_ representing a chord progression of your choice. Each chord should include three notes.
2. Print the progression.

### Exercise 2: Melody with Rhythms

1. Represent a melody with its corresponding rhythmic values as a llll:

```
$melody = [C4 1/4] [D4 1/8] [E4 1/8] [F4 1/2]
```

2. Print the rhythmic value of the second note.
3. Flatten the melody into a single list and print it.

### Exercise 3: Complex Nested Structures

1. Create a llll to represent a four-bar melody, where each bar contains a nested list of notes:

```py
$fourBarMelody = [[C4 E4 G4] [D4 F4 A4]] [[E4 G4 B4] [F4 A4 C5]]
```

2. Access and print the second bar.
3. Access the second note in the first chord of the second bar.
4. Flatten the entire melody and print it.

## FAQ

### Q: Can I mix data types in a _llll_?

**A**: Yes, _lllls_ can hold any combination of data types (e.g., numbers, strings, notes, or even other _lllls_). Data types will be covered later on.

### Q: Is there a size limit on _lllls_?

**A**: No. You can have _lllls_ as large as your computer memory can handle.

---

Now that you’ve mastered _lllls_, you’re ready to explore functions, which will allow you to manipulate musical data in powerful ways.
