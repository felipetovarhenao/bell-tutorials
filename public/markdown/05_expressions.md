# Basic expressions

> _Performing Arithmetic and More_

Expressions are the building blocks of any program. In _bell_, expressions can involve numbers, symbols, lists, and other data types, and they are evaluated to produce a result. This section introduces basic arithmetic operations, how to combine expressions, and how to use them effectively.

---

## Arithmetic Operations

### Common Operations

_bell_ provides several basic arithmetic operators, including but not limited to:

| Operation          | Operator | Example  | Result |
| ------------------ | -------- | -------- | ------ |
| Addition           | `+`      | `5 + 3`  | `8`    |
| Subtraction        | `-`      | `10 - 4` | `6`    |
| Multiplication     | `*`      | `7 * 2`  | `14`   |
| Division           | `/`      | `8 / 2`  | `4`    |
| Modulo (remainder) | `%`      | `9 % 4`  | `1`    |
| Power              | `**`     | `2 ** 3` | `8`    |

Later on, we will spend a bit more time exploring other _bell_ operators, but these are a good starting point.

### Examples

#### Addition and Subtraction

```py
$x = 10;
$y = 5;
print($x + $y); ## Output: 15
print($x - $y) ## Output: 5
```

#### Multiplication and Division

```py
$length = 8;
$width = 4;
print($length * $width); ## Output: 32
print($length / $width) ## Output: 2
```

#### Modulo (Finding Remainders)

```py
print(10 % 3) ## Output: 1 (10 divided by 3 leaves a remainder of 1)
```

#### Power (Exponents)

```py
print(2 ** 3) ## Output: 8 (2 raised to the power of 3)
```

---

## Combining Expressions

You can combine multiple operations in a single expression. _bell_ follows standard operator precedence rules (e.g., multiplication and division are performed before addition and subtraction). Use parentheses to make the order explicit or override precedence.

### Example:

```py
$x = (5 + 3) * 2; ## Parentheses ensure 5 + 3 is evaluated first
print($x) ## Output: 16
```

Without parentheses:

```py
$x = 5 + 3 * 2; ## Multiplication happens before addition
print($x) ## Output: 11
```

---

## Using Variables in Expressions

Variables can be used just like numbers or other values in expressions.

### Example:

```py
$base = 10;
$height = 5;
$area = ($base * $height) / 2; ## Formula for the area of a triangle
print($area) ## Output: 25
```

---

## Expressions vs. Statements

In these tutorials, the terms _expression_ and _statement_ are use interchangeably, usually to refer to segments of code separated by semicolons.

### Example:

```py
$x = (1 + 3) * 4; ## expression 1
$x = $x * 4 ## expression 2
```

The proper use of semicolons will be touched upon later on.

---

## List operations

One of the most powerful aspects of _bell_ is the ability to operate on entire lists, including operations between single values, multiple values, or a combination of both. This makes it remarkably easy to manipulate complex data with simple _bell_ expressions. However, certain rules apply depending on the types involved in the operation.

### 1. One-to-one

When performing operations between two individual values (e.g., two numbers), the result is straightforward: the operation is applied directly.

```py
$x = 60; ## MIDI note for C4
$y = 7;  ## Interval of a perfect fifth
print($x + $y) ## Outputs: 67 (G4)
```

### 2. One-to-many

When one of the operands is a single value and the other one a list, the same operation is applied to each element of the list individually.

```py
$scale = 60 62 64 65 67; ## MIDI pitch values: C4, D4, E4, F4, G4
print($scale + 12) ## Outputs: 72 74 76 77 79 (transposed up an octave)
```

### 3. Many-to-many

When two lists are used together in an operation, the operation is applied _element-wise_, meaning the first element of one list is combined with the first element of the other, the second with the second, and so on.

```py
$notes = 60 64 67;
$intervals = 12 -12 0; ## Transpose up an octave, down an octave, unchanged
$transposed = $notes + $intervals;
print($transposed) ## Outputs: 72 52 67
```

#### Caveat: Many-to-many Operations with Unequal Lengths or Structures

If the two lists do not have the same length or structure, _bell_ tries to match each element in one list to elements in the other list, to the degree that it's possible — if not, extra elements are discarded. This can result in unexpected outputs if not accounted for.

```py
$pitches = 60 62; ## Two notes
$intervals = 2 4 5; ## Three intervals
print($pitches + $intervals) ## Outputs: 62 66 (extra interval is discarded)
```

##### Nested Lists:

The same principle applies to nested lists. If their structures do not align, you might get unexpected results.

```py
$pitches = [60 64] [67]; ## Lengths of 2 and 1
$intervals = [2 4] [5 7]; ## Lengths of 2 and 2
print($pitches + $intervals) ## Outputs: [60+2 64+4] [67+5 67+7] (many-to-many and one-to-many matching)
```

---

## Exercises

### Exercise 1: Basic Arithmetic

1. Write a program that calculates the result of:

- `15 + 8`
- `20 - 5`
- `4 * 7`
- `16 / 4`
- `9 % 2`
- `3 ** 4`

2. Print the results of each calculation.

### Exercise 2: Pitch transposition

1. Assign the MIDI note number of a pitch to a variable.
2. Assign the interval (in semitones) you want to transpose the pitch by to another variable.
3. Use addition to calculate the transposed pitch and assign the result to a new variable.
4. Print the original pitch, the interval, and the transposed pitch.

### Exercise 3: Computing Intervals in a Triad

1. Assign the MIDI note numbers of a C major triad to three separate variables:

```py
$note1 = 60; ## C5
$note2 = 64; ## E5
$note3 = 67; ## G5
```

2. Compute the interval (in semitones) between:
   - The first and second notes (`$note1` and `$note2`)
   - The second and third notes (`$note2` and `$note3`)
   - The first and third notes (`$note1` and `$note3`)
3. Print the results for each interval, to display the following messages.

   ```
   Interval between note1 and note2: 4
   Interval between note2 and note3: 3
   Interval between note1 and note3: 7
   ```

---

## FAQ

### Q: What happens if I divide by zero?

**A**: Dividing by zero in _bell_ does not result in error, and the result depends on the type of the operands. If both operands are integers (whole numbers) it's treated like a fraction:

```py
$x = 3/0 ### Output: 3/0
```

If either operand is a decimal, it evaluates to infinity (`inf` or `-inf`):

```py
$x = 3./0; ## Output: inf
$x = -3/0.; ## Output: -inf
```

Either way, you probably want to always make sure you're not diving by zero, which might lead to undesired results.

### Q: Can I mix numbers and variables in expressions?

**A**: Yes, you can freely combine numbers and variables in any valid expression.

### Q: Do I need spaces between operators?

**A**: Spaces are optional but recommended for readability. For example:

```py
$x = 5+3; ## Works but hard to read
$x = 5 + 3 ## Easier to read
```

With a solid understanding of basic expressions, you’re ready to explore functions, which will allow you to manipulate data in powerful ways.
