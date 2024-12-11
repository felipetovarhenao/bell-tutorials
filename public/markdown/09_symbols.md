# Symbols

> _Making Data More Readable_

In _bell_, symbols are a data type used to represent textual information. Symbols are the equivalent of strings in other programming languages, and they’re particularly useful for, among other things, structuring data in a more human-readable way.

---

## Syntax

Symbols can be created in three ways:

### 1. Double Quotes (")

This is the most common way to define symbols.

```py
$name = "Iannis"
```

### 2. Single Quotes (')

Single quotes work the same as double quotes.

```py
$name = 'Anton'
```

### 3. Backtick (`` ` ``)

Symbols created with backticks terminate when they encounter a space. This makes backticks suitable for single words but unusable for multi-word symbols.

#### Example:

```py
$name = `Nadia ;
print($name) ## Outputs: Nadia
```

#### Caution:

For symbols with spaces, stick to double or single quotes:

```py
$name = `Wolfgang Amadeus Mozart;
print($name) ## Outputs: Wolfgang, assumes Wolfgang and Mozart are global variables
```

Similarly, make sure that you don't accidentally cause syntax errors:

- Incorrect (results in parsing error):
  ```py
  (`Cmaj7 `Gmaj7)
  ```
  > Here the _bell_ thinks the second symbol is `Gmaj7)` instead of `Gmaj7`, keeping the parentheses open.
- Correct:

  ```py
  (`Cmaj7 `Gmaj7 )
  ```

  > Here we leave space after `Gmaj7` to properly close the parenthesis

---

## Using Symbols in Musical Contexts

Symbols are often used to label or annotate musical data. Here are some basic scenarios:

### Naming Chords

```py
$chords = ['tonic' C4 E4 G4] ['dominant' G4 B4 D5]
```

### Labeling Rhythmic Patterns

```py
$rhythms = ['pattern1' 1/4 1/8 1/8 1/2] ['pattern2' 1/4 1/4 1/4 1/4]
```

### Structuring musical data

```py
$notesequence = (
   [[ "onset" 0 ] [ "pitch" C4 ] [ "duration" 1000 ] [ "velocity" 30 ]]
   [[ "onset" 500 ] [ "pitch" E4 ] [ "duration" 500 ] [ "velocity" 60 ]]
   [[ "onset" 750 ] [ "pitch" G4 ] [ "duration" 500 ] [ "velocity" 90 ]]
   [[ "onset" 1000 ] [ "pitch" C5 ] [ "duration" 1000 ] [ "velocity" 120 ]]
)
```

---

## Advantages of Using Symbols

1. **Human Readability**: Symbols make your code more intuitive, as they allow for assigning meaningful labels to data. Later on, we'll learn how to use symbols for [accessing data](12_keys.md).

2. **Debugging**: As we've seen in previous tutorials, using symbols helps you annotate data when debugging or inspecting complex code with the `print` function.

---

## Operations with Symbols

### Combining Symbols

You can concatenate symbols to build more complex strings.

#### Example:

```py
$name = "C" + "maj";
print($name) ## Outputs: Cmaj
```

However, you **cannot** concatenate symbols with other data types, such as numbers:

- Incorrect:
  ```py
  $name = "Cmaj" + 7 ## Outputs: null
  ```
- Correct:

  ```py
  $name = "Cmaj" + "7" ## Outputs: Cmaj7
  ```

### Symbols in Lists

Symbols can be included in _lllls_, just like notes or numbers.

#### Example:

```py
$info = ["C4" "quarter" "mezzo-piano"];
print($info) ## Outputs: C4 quarter mezzo-piano
```

---

## Exercises

### Exercise 1: Labeling Chords

1. Create a _llll_ that contains all diatonic triads in F major, each labeled with a symbol. For instance:

   ```py
   $chords = (
      ["F" F4 A4 C4]
      ["Gm" G4 Bb4 D5 ]
      ## continue here
   )
   ```

2. Print all chords.

### Exercise 2: Annotating Rhythms

1. Create a _llll_ of labeled rhythmic cells, each as a list of rational values (i.e., `1` is a whole note, `1/4` is a quarter note, `1/8` is an eighth note, etc.):

```py
$patterns = (
   [
      'cell1' 1/4 1/8 1/4 ## quarter eighth quarter
   ]
   [
      'cell2' ## your pattern here
   ]
   [
      'cell3' ## your pattern here
   ]
);
```

---

## FAQ

### Q: When should I use backticks over quotes?

**A**: It's a matter of preference. If you prefer using backticks, only use them for single-word symbols where no spaces are required. For multi-word labels, use double or single quotes.

### Q: Can I mix symbols with other data types in a list?

**A**: Yes, symbols can coexist with numbers, pitches, or other symbols in the same llll:

```py
$data = [ C4 1/4 'mezzo-piano' [ 0.2 3.4 "hi" ] ]
```

### Q: Can symbols contain special characters?

**A**: Yes, symbols can include special characters, but avoid unbalanced brackets or quotes to prevent syntax errors.

---

Symbols are a simple yet powerful tool for organizing and annotating your musical data. Next, you’ll learn about the `null` keyword, which we'll run into quite often when writing _bell_ code.
