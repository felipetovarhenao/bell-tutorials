# Basic expressions

Expressions are the building blocks of any program. In _bell_, expressions can involve numbers, symbols, lists, and other data types, and they are evaluated to produce a result. This section introduces basic arithmetic operations, how to combine expressions, and how to use them effectively.

---

## Arithmetic operations

### Common operations

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

#### Addition and subtraction

```py
$x = 10;
$y = 5;
print($x + $y); ## Output: 15
print($x - $y) ## Output: 5
```

#### Multiplication and division

```py
$length = 8;
$width = 4;
print($length * $width); ## Output: 32
print($length / $width) ## Output: 2
```

#### Modulo (finding remainders)

```py
print(10 % 3) ## Output: 1 (10 divided by 3 leaves a remainder of 1)
```

#### Power (exponents)

```py
print(2 ** 3) ## Output: 8 (2 raised to the power of 3)
```

---

## Combining expressions

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

## Using variables in expressions

Variables can be used just like numbers or other values in expressions.

### Example:

```py
$base = 10;
$height = 5;
$area = ($base * $height) / 2; ## Formula for the area of a triangle
print($area) ## Output: 25
```

---

## Expressions vs. statements

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

### 1. one-to-one

When performing operations between two individual values (e.g., two numbers), the result is straightforward: the operation is applied directly.

```py
$x = 6000; ## MIDI cents for C5
$y = 700;  ## Interval of a perfect fifth
print($x + $y) ## Outputs: 6700 (G5)
```

### 2. one-to-many

When one of the operands is a single value and the other one a list, the same operation is applied to each element of the list individually.

```py
$scale = 6000 6200 6400 6500 6700; ## MIDI cents: C5, D5, E5, F5, G5
print($scale + 1200) ## Outputs: 7200 7400 7600 7700 7900 (transposed up an octave)
```

### 3. many-to-many

When two lists are used together in an operation, the operation is applied _element-wise_, meaning the first element of one list is combined with the first element of the other, the second with the second, and so on.

```py
$notes = 6000 6400 6700;
$intervals = 1200 -1200 0; ## Transpose up an octave, down an octave, unchanged
$transposed = $notes + $intervals;
print($transposed) ## Outputs: 7200 5200 6700
```

#### Caveat: many-to-many operations with unequal lengths or structures

If the two lists do not have the same length or structure, _bell_ tries to match each element in one list to elements in the other list, to the degree that it's possible — if not, extra elements are discarded. This can result in unexpected outputs if not accounted for.

```py
$pitches = 6000 6200; ## Two notes
$intervals = 200 400 500; ## Three intervals
print($pitches + $intervals) ## Outputs: 6200 6600 (extra interval is discarded)
```

The same principle applies to nested lists. If their structures do not align, you might get unexpected results.

```py
$pitches = [6000 6400] [6700]; ## Lengths of 2 and 1
$intervals = [200 400] [500 700]; ## Lengths of 2 and 2
print($pitches + $intervals) ## Outputs: [6000+200 6400+400] [6700+500 6700+700] (many-to-many and one-to-many matching)
```

---

## Compound assignments

In _bell_, as in many other programming languages, compound assignments are a concise way to update the value of a variable by applying an operation and reassigning the result to the same variable.

The syntax follows this pattern:

`<variable> <operator>= <expression>`

Here are the common compound assignment operators:

| Operator | Meaning             | Example   | Equivalent to |
| -------- | ------------------- | --------- | ------------- |
| `+=`     | Add and assign      | `$x += 3` | `$x = $x + 3` |
| `-=`     | Subtract and assign | `$y -= 5` | `$y = $y - 5` |
| `*=`     | Multiply and assign | `$z *= 2` | `$z = $z * 2` |
| `/=`     | Divide and assign   | `$a /= 4` | `$a = $a / 4` |
| `%=`     | Modulo and assign   | `$b %= 3` | `$b = $b % 3` |

For example, if you want to increase a variable by 5, instead of writing `$x = $x + 5`, you can write `$x += 5`. This makes the code shorter and easier to read.

---

## Exercises

### Exercise 1: basic arithmetic

1.  Write the following math expressions as _bell_ code:

    - **Pythagorean Theorem:**

      $$
      c = \sqrt{a^2 + b^2}
      $$

    - **Geometric Mean:**

      $$
      \text{geometricMean} = \sqrt{a \cdot b}
      $$

    - **Difference of Squares:**

      $$
      d = a^2 - b^2
      $$

    - **Weighted Average (simple form):**

      $$
      \text{weightedAverage} = \frac{w_1 \cdot a + w_2 \cdot b}{w_1 + w_2}
      $$

    - **Sum of Cubes:**

      $$
      s = a^3 + b^3
      $$

1.  Print the results of each calculation.

### Exercise 2: computing intervals in a triad

1. Assign the MIDI cents values of a C major triad to three separate variables:

```py
$note1 = 6000; ## C5
$note2 = 6400; ## E5
$note3 = 6700; ## G5
```

2. Compute the interval (in semitones) between:
   - The first and second notes (`$note1` and `$note2`)
   - The second and third notes (`$note2` and `$note3`)
   - The first and third notes (`$note1` and `$note3`)
3. Print the results for each interval, to display the following messages.

   ```
   Interval between note1 and note2: 4 semitones
   Interval between note2 and note3: 3 semitones
   Interval between note1 and note3: 7 semitones
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
$x = -3/0. ## Output: -inf
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
