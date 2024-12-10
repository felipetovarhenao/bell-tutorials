# Numeric types

> _Understanding and Using Numbers in bell_

Numbers are central to programming, and _bell_ provides a variety of numeric types tailored for both mathematical operations and musical data representation. This section covers the different numeric types in _bell_ and how they’re used.

---

## Numeric Types in _bell_

In _bell_, there are four types of numeric data.

| Numeric Types | Abbreviation | Description                 | Examples           |
| ------------- | ------------ | --------------------------- | ------------------ |
| integer       | `int`        | Whole numbers               | `60`, `4`, `100`   |
| float         | `float`      | Numbers with decimal points | `3.14159`, `440.0` |
| rational      | `rat`        | Fractional values           | `1/4`, `3/2`       |
| pitch         | `pitch`      | Musical pitch specification | `C4`, `A4`, `G#3`  |

We can use the `is` function to verify the data type of any value in _bell_, including numeric data types.

---

## 1. Integer

Integers are whole numbers without decimal points.

### Example

```py
$note = 60; ## MIDI value for C4
$interval = 7; ## Perfect fifth
print(is($note) is($interval)); ## Outputs: int int
print($note + $interval) ## Outputs: 67 (G4)
```

---

## 2. Float

Floats, also referred to as _real_ numbers, are numbers with decimal points, allowing greater numeric precision.

### Example

```py
$freq = 440.0; ## Frequency of A4
$ratio = 1.5; ## Just fifth ratio
print(is($freq) is($ratio)); ## real real
print($freq * $ratio) ## Outputs: 660.0 (E5)
```

> In _bell_, _real_ is the same as the `float` data type.

---

## 3. Rational

Rationals represent fractional values, which are particularly useful for representing relative rhythmic units and frequency ratios in a more readable way.

### Syntax:

`<num>/<den>`

### Example:

```py
$rhythm = 1/4; ## Quarter note
$mul = 2; ## multiple
print(is($rhythm) is($mul)) ## rat int
print($rhythm * 2) ## Outputs: 1/2 (half note)
```

---

## 4. Pitch

In _bell_, the `pitch` data type is a specialized numeric type that uses musical note name syntax as a placeholder for the equivalent in MIDI cents. This allows for more a intuitive way to specify pitch data over raw numbers.

### Basic Syntax

The syntax for pitch specification is fairly straightforward:

`<whitekey><optional:accidentals><octave>`

Where the available accidentals are:

| Accidental | Name          | Shift     |
| ---------- | ------------- | --------- |
| `#`        | sharp         | +1/2 tone |
| `b`        | flat          | -1/2 tone |
| `x`        | double-sharp  | +1 tone   |
| `q`        | quarter-sharp | +1/4 tone |
| `d`        | quarter-flat  | -1/4 tone |
| `^`        | eighth-sharp  | +1/8 tone |
| `v`        | eighth-flat   | -1/8 tone |

> Notice that there is no option for the double-flat accidental. To do this, we simply use `b` twice.

#### Examples:

| Syntax | Description          | MIDI cents value |
| ------ | -------------------- | ---------------- |
| `C5`   | C natural (middle C) | `6000`           |
| `Ab4`  | A flat               | `5600`           |
| `Bbb4` | B double flat        | `5700`           |
| `G#4`  | G sharp              | `5600`           |
| `Fx6`  | F double-sharp       | `7900`           |
| `Bq4`  | B quarter-sharp      | `5950`           |
| `Bd4`  | B quarter-flat       | `5850`           |
| `D^5`  | D eighth-sharp       | `6225`           |
| `Dv5`  | D eighth-flat        | `6175`           |
| `D#q5` | D 3/4 sharp          | `6350`           |

>

### Advanced Syntax

While the syntax above can be sufficient for most cases, it's still limited to eighth-tones as the smallest tone division. For more fine-tuned pitch specifications, the following syntax can be used:

`<whitekey><optional:accidental><octave><+|-><accidental_as_rational>t`

#### Examples:

| Syntax      | Description                          | MIDI cents value |
| ----------- | ------------------------------------ | ---------------- |
| `C5+1/2t`   | C natural (middle C) plus a semitone | `6100`           |
| `Ab4-1/4t`  | A flat minus a quarter tone          | `5550`           |
| `G4-1/12t`  | G minus a twelfth tone               | `5483.333333`    |
| `Fq6+1/12t` | F quarter-sharp plus a twelfth tone  | `7766.666667`    |

For these more highly specific cases, however, it can sometimes be easier to use integers or floats as pitch specification instead.

---

## Conversions Between Numeric Types (Casting)

We can convert between numeric types using the `int`, `float`, `rat`, and `pitch` functions to convert any number to integer, float, rational, or pitch, respectively.

> Converting the data type of one value to another is typically referred to as **type casting**.

### Examples

#### Casting to `float`

```py
$x = float(1);
print($x is($x)) ## Outputs: 1.0 real
```

#### Casting to `int`

```py
$x = int(3.6);
print($x is($x)) ## Outputs: 3 integer
```

> Note that `int` truncates the decimal part of the input value, so make sure you take that into account.

#### Casting to `pitch`

```py
$x = pitch(6525);
print($x is($x)) ## Outputs: F^5 pitch
```

#### Casting to `rat`

```py
$x = rat(2.25);
print($x is($x)) ## Outputs: 9/4 rational
```

---

## Numeric Operations in Musical Contexts

As the following examples illustrate, it's possible to mix numeric data types in expressions.

### Pitch Transposition

```py
$pitch = C5; ## Middle C
$shift = 1200; ## Octave in MIDI cents
$transposed = $melody + $shift; ## Transpose up an octave
print($transposed) ## Outputs: C5 D5 E5 F5
```

### Scaling Rhythms

```py
$rhythm = 1/4 1/8 1/8;
$faster = $rhythm / 2; ## Double the speed
print($faster) ## Outputs: 1/8 1/16 1/16
```

### Applying Frequency Ratios

```py
$freq = 440.0; ## A4
$ratio = 3/2;
print($freq * $ratio) ## Outputs: 660.0 (E5)
```

---

## Exercises

### Exercise 1: Pitch Arithmetic

1. Create a variable for a note in MIDI cents:

```py
$pitch = 6000 ## C4
```

2. Transpose the note up by a major third (4 semitones).
3. Cast the resulting MIDI cents value as `pitch` and print it.

### Exercise 2: Duration Value

1. Given the following variables:

```py
$tempo = 60; ## beats per minute
$value = 3/8 ## dotted quarter note
```

2. Calculate the duration of `$value` in milliseconds.
3. Cast the result as `float` and print the result.

### Exercise 3: Scale Specification

1. Using `pitch` syntax, specify the pitch values for a Db major triad, using a different variable for each pitch (e.g., `$root`, `$third`, `$fifth`):

2. For each pitch, cast the value as `int` and print it.

---

## FAQ

### Q: Can I mix numeric types in a calculation?

**A**: Yes, _bell_ handles mixed types gracefully:

```py
print(440 * 3/2) ## Outputs: 660
```

### Q: How are pitches internally represented?

**A**: Pitches are represented as midicents (MIDI values scaled by 100). For example, `C4` is `6000` MIDI cents.

### Q: Can I use decimals instead of rationals?

**A**: While rational numbers (fractions) are very useful for representing frequency ratios and proportional rhythmic values, you can certainly use decimals to do so - especially for values that are less amenable for rational representation:

```py
$value = rat(1.414) ## Outputs: 707/500
```

---

Numeric types are crucial for both mathematical and musical operations in _bell_. With a solid understanding of these types, you're ready to tackle lists, which are crucial for representing complex data in _bell_.
