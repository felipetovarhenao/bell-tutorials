# List-oriented functions

To manipulate these _lllls_ efficiently, _bell_ provides a wide range of functions. This section will teach you how to use some of these functions to transform your _lllls_.

---

## Common list functions

Below is a table of commonly used list-oriented functions in _bell_.

| Function | Purpose                            | Example                         | Output                 |
| -------- | ---------------------------------- | ------------------------------- | ---------------------- |
| `rev`    | Reverses the elements of a list    | `rev(C4 D4 E4 F4)`              | `F4 E4 D4 C4`          |
| `length` | Returns the number of elements     | `length(C4 E4 G4)`              | `3`                    |
| `depth`  | Returns the depth of a list        | `depth([C4 E4 G4] [F4 A4 C5])`  | `2`                    |
| `flat`   | Flattens a nested list to depth 1  | `flat([C4 [E4 G4]] [F4 A4 C5])` | `C4 E4 G4 F4 A4 C5`    |
| `thin`   | Removes duplicate elements         | `thin(C4 E4 C4 C4 G4)`          | `C4 E4 G4`             |
| `mc2f`   | Converts MIDI cents to frequencies | `mc2f(6000 6700)`               | `261.63 392.00`        |
| `f2mc`   | Converts frequencies to MIDI cents | `f2mc(440 523.25)`              | `A4 C5`                |
| `trans`  | Transposes a matrix-style list     | `trans([1 2 3] [10 20 30])`     | `[1 10] [2 20] [3 30]` |

As always, check the [bell reference documentation](/#/reference) for a more detailed break-down of each.

---

## Examples of data manipulation

### Reversing a melody

Use the `rev` function to reverse the order of pitches in a melody.

```py
$melody = C4 D4 E4 F4;
print(rev($melody)) ## Outputs: F4 E4 D4 C4
```

### Finding the length of a chord

Use the `length` function to count the number of pitches in a chord.

```py
$chord = C4 E4 G4;
print(length($chord)) ## Outputs: 3
```

### Flattening a nested progression

Use the `flat` function to reduce a nested chord progression into a single list of pitches.

```py
$progression = [C4 E4 G4] [F4 A4 C5];
print(flat($progression)) ## Outputs: C4 E4 G4 F4 A4 C5
```

---

## Combining list functions

You can chain multiple list functions together for more complex operations.

### Example 1: melody to scale

Use the `thin` and `sort` functions to infer the scale from a given melody.

```py
$melody = G4 C4 G4 C4 F4 D4 E4;
$scale = $melody.thin(); ## Outputs: G4 C4 F4 D4 E4
$scale = $scale.sort().print() ## Outputs: C4 D4 E4 F4 G4
```

### Example 2: converting frequencies to notes

Use `f2mc` to convert a list of frequencies to MIDI cents.

```py
$spectrum = 55 110 220 440 880;
print($spectrum.f2mc()) ## 3300. 4500. 5700. 6900. 8100.
```

---

## Depth and level arguments

Several _bell_ functions accept the `@mindepth`/`@minlevel` and `@maxdepth`/`@minlevel` arguments, which are generally the two last ones in the function argument list and accept each an integer number.

### Example 1: `rev` depth

```py
$x = [[1] [2]] [[3] [4]];
$a = rev($x @maxdepth 1); ## Reverse up to level 1 from top to bottom
$b = rev($x @depth 2 3); ## Reverse from levels 2 to 3
print($a); ## Outputs: [[3] [4]] [[1] [2]]
print($b) ## Outputs: [[2] [1]] [[4] [3]]
```

### Example 2: `flat` level

```py
$x = [[1] [2]] [[3] [4]];
$a = flat($x @maxlevel 1); ## Remove brackets up to level 1 from top to bottom
$b = flat($x @level 2 3); ## Remove brackets from levels 2 to 3
print($a); ## Outputs: [1] [2] [3] [4]
print($b) ## Outputs: [1 2] [3 4]
```

All those _bell_ functions also accept an attribute called `@depth`/`@level`, which controls the same parameters through a slightly different syntax: depth can either be a single integer, in which case it sets the `@maxdepth`/`@level` argument; or a list of two integers, setting respectively the `@mindepth`/`@maxlevel` and `@maxdepth`/`@maxlevel` attribute.

> The reason why some _bell_ functions use `level` and others use `depth` is not clear, but they have the same functionality. Always check the [reference documentation](/#/reference) to make sure you're using the correct named and positional arguments.

---

## Exercises

### Exercise 1: analyze a melody

1. Create a melody as a _llll_, in MIDI cents:
2. Print the `length` of the melody.
3. Infer the scale that the melody is based on, using the `thin` and `sort` functions.
4. Print the scale.

### Exercise 2: flatten a progression

1. Create a nested chord progression. For example:
   ```py
   $progression = [C4 E4 G4] [F4 A4 C5] [G4 B4 D5]
   ```
2. Flatten the progression into a single list of notes using `flat`.
3. Infer the scale of the progression using the `thin` and `sort` functions.
4. Print the scale.

### Exercise 3: frequency to note conversion

1. Create a list of pitches, using note names. For instance:

   ```py
   $notes = C4 Eb4 G4
   ```

2. Convert the pitches to frequencies using `mc2f`.
3. Print the resulting frequencies.

---

## FAQ

### Q: Can I combine list functions?

**A**: Yes, any function can be chained to another, in either syntax style. For example:

```py
$data = [C4 [E4 G4]] [F4 A4 C5];
$data.flat().sort().rev().print(); ## Output: C5 A4 G4 F4 E4 C4
print(rev(sort(flat($data)))) ## Same as above
```

### Q: How deep can a nested list go?

**A**: There’s no practical limit to nesting depth, but overly deep structures can make your code and data much more complex to handle.

### Q: What happens if I flatten a non-nested list?

**A**: Flattening a non-nested list does nothing. For example:

```py
$notes = C4 D4 E4;
print(flat($notes)) ## Outputs: C4 D4 E4
```

---

Now that you’ve explored list functions, you’re ready to dive into symbols, which are helpful for structuring _lllls_.
