# Addresses

> _Accessing Data in Nested Data Structures_

When working with _lllls_ (lists and nested lists), you'll often need to access specific elements within it. In _bell_, addresses allow you to pinpoint and retrieve elements from both simple and complex structures. This is particularly useful for handling musical data, such as retrieving individual notes from chords, specific measures from a score, or rhythm patterns from a sequence.

---

## Access Operator (`:`)

The colon (`:`) is the access operator in _bell_. It retrieves elements from a list based on their position (1-based indexing).

The basic syntax is `<llll>:<address>`.

---

## Simple Addresses

In flat lists, use a single number to access an element. Remember, _bell_ uses 1-based indexing (the first element is at position 1).

> This is different from many programming languages, where elements within a list are numbered starting from 0 (i.e., 0-based indexing).

### Example: Accessing Notes

```py
$chord = C4 E4 G4;
print($chord:1); ## Outputs: C4
print($chord:2); ## Outputs: E4
print($chord:3) ## Outputs: G4
```

---

## Nested Addresses

For nested lists, use a list of indices wrapped in parentheses to specify the path to the desired element.

### Example: Accessing Nested Elements

```py
$progression = [C4 E4 G4] [F4 A4 C5];
print($progression:1); ## Outputs: [C4 E4 G4]
print($progression:(2 1)) ## Outputs: F4
```

#### Explanation:

- `:1` retrieves the first chord `[C4 E4 G4]`.
- `:(2 1)` drills into the second chord (`[F4 A4 C5]`) and retrieves its first note (`F4`).

---

## Pick operator (`::`)

The double colon (`::`) is the pick operator. It retrieves elements from a list and removes their enclosing brackets, effectively "flattening" the top level of the sublist.

### Example: Picking Notes from Nested Chords

```py
$chord = [C4 E4 G4];
print($chord::1) ## Outputs: C4 E4 G4
```

#### Nested Example:

```py
$progression = [C4 [E4 G4]] [[F4 A4] C5];
print($progression::(1 2)) ## Outputs: E4 G4
```

### Examples

#### Accessing Notes from a Chord

Retrieve specific notes from a chord:

```py
$chord = C4 E4 G4;
print($chord:1); ## Outputs: C4
print($chord:3) ## Outputs: G4
```

### Accessing Measures in a Score

Access a bar from a two-bar progression:

```py
$score = [[C4 E4 G4] [F4 A4 C5]] [[G4 B4 D5] [A4 C5 E5]];
print($score::1); ## Outputs: [C4 E4 G4] [F4 A4 C5] (first bar)
print($score:L(2 2)) ## Outputs: A4 C5 E5 (second chord from second bar)
```

---

### Updating Values Via Addresses

We can also use the access operator to update elements within our _lllls_:

```py
$x = 1 2 3 4;
$x:1 = 5;
print($x) ## Outputs: 5 2 3 4
```

This also applies to nested lists.

```py
$x = [1 2 3] [4 5 [6]];
$x:(2 3 1) = 0;
print($x) ## Outputs: [1 2 3] [4 5 0]
```

#### Limits to pick operator (`::`)

One common mistake is to use the pick operator to update values within a list. This results in an error.

```py
$x = [1 2 3] [4 5 6];
$x::2 = 3 ## "unexpected assignment" error
```

---

## Exercises

### Exercise 1

1. Create a chord progression:

```py
$progression = [C4 E4 G4] [F4 A4 C5]
```

2. Use the operator `:` to access and print:
   - The second chord.
   - The first note of the second chord.

### Exercise 2

1. Create a passage of diads with nested pitch and rhythmic value pairs:

```py
$melody = [[C4 1/4] [D4 1/8]] [[E4 1/8] [F4 1/2]]
```

2. Use the operator `:` to access and print:
   - The first diad.
   - The second note of the second diad.

### Exercise 3

1. Create a nested list of chords and pick elements using `::`:

```py
$chords = [[C4 E4 G4] [F4 A4 C5]] [[G4 B4 D5] [A4 C5 E5]]
```

2. Use `::` to:

   - Retrieve the first chord.
   - Access the last chord's second note directly.

---

## FAQ

### Q: What happens if I access an invalid address?

**A**: You’ll get a `null` value. Always ensure the address exists in your list. For example:

```py
$chord = C4 E4 G4;
print($chord:4) ## null
```

However, if you pass a `null` value as an address, **you will get an error**.

```py
$a = null;
$x = 1 2 3;
print($x:$a) ## "Address can't be null" error
```

### Q: Can I use `null` in an address?

**A**: No, if you pass a `null` value as an address, **you will get an error**.

```py
$a = null;
$x = 1 2 3;
print($x:$a) ## "Address can't be null" error
```

### Q: How is the pick operator (`::`) different from the access operator (`:`)?

**A**: `:` retrieves elements in their original structure, while `::` retrieves elements **and** removes the top level of that sublist. Additionally, `:` allows to update values in a _llll_ whereas `::` is limited to retrieving elements.

```py
$x = [[1 2] [3 4]];
print($x:1); ## Outputs: [[1 2] [3 4]]
print($x::1); ## Outputs: [1 2] [3 4]
$x:2 = [5 6];
print($x) ## Outputs: [[1 2] [5 6]]
```

---

Having some familiarity with addresses, you can effectively navigate and manipulate complex musical structures in _bell_. Next, we’ll explore keys, which provide another way to structure and access data.
