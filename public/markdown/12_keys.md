# Keys

> _Organizing and Accessing Data with Key-Value Pairs_

## Introduction

In _bell_, **keys** are a way to associate labels (_keys_) with values, creating so-called key-value pairs. Keys are particularly useful for organizing data in a structured and readable way. In musical contexts, keys can label chords, instruments, dynamics, or even entire sections of a composition, making your code more intuitive and easier to manage.

## What Are Keys?

A key-value pair in _bell_ is a data structure that associates a key (symbol) with a value. This is similar to dictionaries or associative arrays in other programming languages.

### Syntax:

```c
[ <key1> <value1> ] [ <key2> <value2> ] ... [ <keyN> <valueN> ]
```

### Example:

```py
$chord = ['tonic' C4 E4 G4];
```

Here:

- `'tonic'` is the key.
- `C4 E4 G4` is the value.

## Accessing Keys

You can retrieve a value associated with a key using the dot operator (.).

### Example: Accessing Chords by Key

```py
$chords = ['tonic' C4 E4 G4] ['dominant' G4 B4 D5];
print($chords.'tonic'); ## Outputs: C4 E4 G4
print($chords.'dominant'); ## Outputs: G4 B4 D5
```

## Adding and Modifying Key-Value Pairs

You can add or update key-value pairs dynamically.

### Example: Adding Keys

```py
$chords = [];
$chords += ['tonic' C4 E4 G4];
$chords += ['dominant' G4 B4 D5];
print($chords); ## Outputs: ['tonic' C4 E4 G4] ['dominant' G4 B4 D5]
```

### Example: Modifying Values

```py
$chords = ['tonic' C4 E4 G4];
$chords += ['tonic' C3 E3 G3]; ## Updates the value for 'tonic'
print($chords.'tonic'); ## Outputs: C3 E3 G3
```

## Examples in Musical Contexts

### Labeling Chords in a Progression

```py
$progression = ['tonic' C4 E4 G4] ['subdominant' F4 A4 C5] ['dominant' G4 B4 D5];
print($progression.'subdominant'); ## Outputs: F4 A4 C5
```

### Assigning Dynamics to a Melody

```py
$melody = ['phrase1' [C4 D4 E4]] ['phrase2' [F4 G4 A4]];
$dynamics = ['phrase1' mf] ['phrase2' p];
print($dynamics.'phrase1'); ## Outputs: mf
```

## Keys with Nested Structures

You can combine keys with nested lists for more complex data structures.

### Example: Organizing a Score

```
$score = [
    'section1' [[C4 E4 G4] [F4 A4 C5]],
    'section2' [[G4 B4 D5] [A4 C5 E5]]
];
print($score.'section1'); ## Outputs: [[C4 E4 G4] [F4 A4 C5]]
print($score.'section2':2:1); ## Outputs: A4
```

## Iterating Over Keys

You can use a loop to iterate through the keys in a list of key-value pairs.

### Example: Printing All Keys and Values

```py
$chords = ['tonic' C4 E4 G4] ['dominant' G4 B4 D5];
for $key in $chords::keys do (
    print($key);
    print($chords.$key);
);
```

## Exercises

### Exercise 1: Chord Dictionary

1. Create a llll of key-value pairs for a chord progression:

```py
$progression = ['tonic' C4 E4 G4] ['dominant' G4 B4 D5];
```

2. Access and print:
   - The tonic chord.
   - The dominant chord.

### Exercise 2: Organizing a Melody with Dynamics

1. Create a llll for a melody and its dynamics:

```py
$melody = ['phrase1' [C4 D4 E4]] ['phrase2' [F4 G4 A4]];
$dynamics = ['phrase1' mf] ['phrase2' p];
```

2. Print:

- The notes and dynamics of phrase1.
- The notes and dynamics of phrase2.

### Exercise 3: Nested Score Structure

1. Create a nested score with sections labeled as keys:

```py
$score = [
    'intro' [[C4 E4 G4] [F4 A4 C5]],
    'verse' [[G4 B4 D5] [A4 C5 E5]]
];
```

2. Access and print:

- All chords in the intro.
- The first chord in the verse.

### Exercise 4: Iterating Over Sections

1. Use a loop to print all section labels and their corresponding data in a score:

```py
$score = [
    'chorus' [[C4 D4 E4] [F4 G4 A4]],
    'bridge' [[A4 B4 C5] [D5 E5 F5]]
];
```

Example Output:

```lua
chorus: [[C4 D4 E4] [F4 G4 A4]]
bridge: [[A4 B4 C5] [D5 E5 F5]]
```

## FAQ

### Q: Can keys contain special characters or spaces?

**A**: Keys can contain special characters but not spaces unless enclosed in quotes:

```py
$example = ['key1' value1] ['key with spaces' value2];
```

### Q: How do I check if a key exists?

**A**: Use the ::keys function to list all keys and check for membership:

```py
$chords = ['tonic' C4 E4 G4];
print('tonic' in $chords::keys); ## Outputs: true
```

### Q: Can I store a null value in a key?

**A**: Yes, you can associate null with a key, which is useful for placeholders:

```py
$data = ['missing' null];
print($data.'missing'); ## Outputs: null
```

---

By mastering keys, you can create clean and efficient data structures that are both easy to read and manipulate. Next, we’ll dive into list operators, which provide powerful tools for working with sequences and repetitions in _bell_.
