# Symbols

> _Working with Text in Musical Contexts_

In _bell_, symbols are a data type used to represent textual information. Symbols are the equivalent of strings in other programming languages, and they’re particularly useful for labeling or naming elements in your code, such as note names, chord names, or rhythmic patterns, etc.

## Symbol Syntax

Symbols can be created in three ways:

### 1. Double Quotes (")

This is the most common and versatile way to define symbols.

```py
$note = "C4"
```

### 2. Single Quotes (')

Single quotes work the same as double quotes.

```py
$note = 'C4'
```

### 3. Backtick (`` ` ``)

Symbols created with backticks terminate when they encounter a space. This makes backticks suitable for single words but tricky for multi-word symbols.

#### Example:

```py
$note = `C4
print($note); ## Outputs: C4
```

#### Caution:

```py
$chord = `C4 E4 G4
print($chord); ## Outputs: C4, assumes E4 and G4 are global variables
```

For multi-word symbols, stick to double or single quotes.

## Using Symbols in Musical Contexts

Symbols are often used to label or annotate musical data. Here are some common scenarios:

### Naming Chords

```py
$chords = ['tonic' C4 E4 G4] ['dominant' G4 B4 D5];
print($chords.'tonic'); ## Outputs: C4 E4 G4
```

### Labeling Rhythmic Patterns

```py
$rhythms = ['pattern1' 1/4 1/8 1/8 1/2] ['pattern2' 1/4 1/4 1/4 1/4];
print($rhythms.'pattern1'); ## Outputs: 1/4 1/8 1/8 1/2
```

## Advantages of Using Symbols

1. **Human Readability**: Symbols make your code more intuitive, as they allow for meaningful labels like "verse", "chorus", or "C major".

2. **Flexible Data Handling**: Symbols are versatile and can be used in lists, keys, or standalone annotations.

3. **Avoiding Errors**: Using symbols prevents accidental reinterpretation of text as a numeric or functional element.

## Operations with Symbols

### Combining Symbols

You can concatenate symbols to build more complex strings.

#### Example:

```py
$name = "C" + "maj";
print($name) ## Outputs: Cmaj
```

### Symbols in Lists

Symbols can be included in lllls, just like notes or numbers.

#### Example:

```py
$info = ["C4" "quarter" "mezzo-piano"];
print($info); ## Outputs: C4 quarter mezzo-piano
```

## Exercises

### Exercise 1: Labeling Chords

1. Create a llll of labeled chords:

```py
$chords = ['tonic' C4 E4 G4] ['subdominant' F4 A4 C5];
```

2. Access and print the notes of the "tonic" chord.

### Exercise 2: Annotating Rhythms

1. Create a llll of rhythmic patterns with labels:

```py
$patterns = ['pattern1' 1/4 1/8 1/8 1/2] ['pattern2' 1/4 1/4 1/4 1/4];
```

2. Access and print the second rhythmic pattern.

### Exercise 3: Building Dynamic Labels

1. Create a variable `$baseName = "melody"`.
2. Create a new label by concatenating `$baseName` with `"1"`.
3. Use this label to annotate a list of notes:
   ```py
   $melodies = [$baseName + "1" C4 D4 E4 F4];
   print($melodies);
   ```

### Exercise 4: Caution with Backticks

1. Create a chord name using the backtick syntax:
   ```py
   $chord = `Cmaj7
   ```
2. Print the chord name.
3. Try adding a second chord in the same backtick line and note what happens.

## FAQ

### Q: When should I use backticks over quotes?

**A**: Use backticks only for single-word symbols where no spaces are required. For multi-word labels, use double or single quotes.

### Q: Can I mix symbols with other data types in a list?

**A**: Yes, symbols can coexist with numbers, notes, or other symbols in the same llll:

```py
$data = [ "C4" 1/4 'mezzo-piano' ];
```

### Q: Can symbols contain special characters?

**A**: Yes, symbols can include special characters, but avoid unbalanced brackets or quotes to prevent syntax errors.

---

Symbols are a simple yet powerful tool for organizing and annotating your musical data. Next, you’ll learn about the null keyword, which represents “nothingness” and plays an essential role in structuring your programs.
