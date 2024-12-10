# Keys

> _Organizing and Accessing Data with Key-Value Pairs_

In _bell_, **keys** are a way to associate labels (_keys_) with values, creating so-called _key-value_ pairs. Keys are particularly useful for organizing data in a structured and readable way. In musical contexts, keys can label chords, instruments, dynamics, or even entire sections of a composition, making your code more intuitive and easier to manage.

---

## What Are Keys?

A key-value pair in _bell_ is a data structure that associates a key with a value. This is similar to dictionaries or associative arrays in other programming languages.

### Syntax:

```c
[ <key1> <value1> ] [ <key2> <value2> ] ... [ <keyN> <valueN> ]
```

### Example:

```py
$chord = ['tonic' C4 E4 G4]
```

**Here**:

- `'tonic'` is the key.
- `C4 E4 G4` is the value.

Note that, even though keys are usually symbols, they can be any data type (excluding lists).

```py
$chord [1 C4 E4 G4]
```

**Here**:

- `1` is the key.
- `C4 E4 G4` is the value.

In other words, the first value within any bracketed list can serve or be thought of as that list's key.

---

## Accessing Keys

You can retrieve a value associated with a key using the dot operator (`.`).

### Example: Accessing Chords by Key

```py
$chords = ['tonic' C4 E4 G4] ['dominant' G4 B4 D5];
print($chords.'tonic'); ## Outputs: C4 E4 G4
print($chords.'dominant'); ## Outputs: G4 B4 D5
```

---

## Adding and Modifying Key-Value Pairs

You can update key-value pairs through variable assignments.

### Example: Updating Values Via Keys

```py
$chords = ['chord1' C4 E4 G4] ['chord2' D4 F4 A4];
$chords."chord1" = D4 G4 B4;
print($chords); ## Outputs: ['chord1' D4 G4 B4] ['chord2' D4 F4 A4]
```

To update single values, you can also combine the dot (`.`) and access (`:`) operators.

```py
$chords = ['chord1' C4 E4 G4] ['chord2' D4 F4 A4];
$chords."chord2":3 = Ab4;
print($chords."chord2"); ## Outputs: D4 F4 Ab4
```

---

## Exercises

### Exercise 1: Access Chord Progression

1. Create a _llll_ of _key-value_ pairs for a chord progression:

```py
$progression = ['tonic' C4 E4 G4] ['subdominant' F4 A4 C5] ['dominant' G4 B4 D5];
```

2. Use `.` and `:` operators to access and print:
   - The tonic chord.
   - The second note of the subdominant chord.
   - The first note of the dominant chord.

### Exercise 2: Update Chord Progression

1. Create a _llll_ of _key-value_ pairs for a chord progression:

```py
$progression = ['tonic' C4 E4 G4] ['subdominant' F4 A4 C5] ['dominant' G4 B4 D5];
```

2. Use the `.` and `:` operators to change the progression from major to minor. You should only update the third of each chord.

---

## FAQ

### Q: Can keys contain special characters or spaces?

**A**: Keys can contain special characters but not spaces unless enclosed in quotes:

```py
$example = ['key1' value1] ['key with spaces' value2];
```

### Q: What happens when I try to access a key that doesn't exist?

**A**: The expression evaluates to `null`.

```py
$example = ['Kaija' 'Papillon'] ['Chaya' 'Sahaf'];
print($example."Salvatore") ## Outputs: null
```

### What happens when I try to update the value of a non-existent key?

**A**: It ignores the assignment, keeping the _llll_ unchanged.

```py
$x = ["key1" 1];
$x."key2" = 2;
print($x) ## [ "key1" 1 ]
```

### Q: Can I store a null value in a key?

**A**: Yes, you can associate `null` with a key, which is useful for placeholders:

```py
$data = ['missing' null];
print($data.'missing'); ## Outputs: null
$data."missing" = "just kidding!";
print($data) ## Outputs: [ "missing" "just kidding!" ]
```

### Q: How do I check if a key exists?

**A**: One way is to check if the value for that key is `null`:

```py
$chords = ['tonic' C4 E4 G4];
print($chord."dominant" == null) ## Outputs: 1
```

However, this is somewhat limited, since it can also mean that the key exists but currently has no value associated with it:

```py
$chords = ['tonic' C4 E4 G4] ['dominant'];
print($chord."dominant" == null) ## Outputs: 1
```

To truly check if a key doesn't exist, it would likely involve iterating through the _llll_, which will be covered in the [loops](17_loops.md) tutorial.

---

By mastering keys, you can create clean and efficient data structures that are both easy to read and manipulate. Next, we’ll dive into list operators, which provide powerful tools for working with sequences and repetitions in _bell_.
