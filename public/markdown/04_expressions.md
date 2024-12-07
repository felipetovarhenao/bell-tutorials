# Basic expressions

> _Performing Arithmetic and More_

Expressions are the building blocks of any program. In _bell_, expressions can involve numbers, symbols, lists, and other data types, and they are evaluated to produce a result. This section introduces basic arithmetic operations, how to combine expressions, and how to use them effectively.

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

We will dedicate a more time later on to explore other _bell_ operators, but these are a good starting point.

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

## Using Variables in Expressions

Variables can be used just like numbers or other values in expressions.

### Example:

```py
$base = 10;
$height = 5;
$area = ($base * $height) / 2; ## Formula for the area of a triangle
print($area) ## Output: 25
```

## Expressions vs. Statements

In these tutorials, the terms _expression_ and _statement_ are use interchangeably, to refer to segments of code separated by semicolons.

### Example:

```py
$x = (1 + 3) * 4; ## expression 1
$x = $x * 4 ## expression 2
```

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

1. Assign the MIDI note number of a pitch to a variable:
2. Assign the interval (in semitones) you want to transpose the pitch by to another variable:
3. Use addition to calculate the transposed pitch and assign the result to a new variable:
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

With a solid understanding of basic expressions, you’re now ready to explore lists, which are crucial for handling complex data in _bell_.
