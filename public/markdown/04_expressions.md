# Basic Expressions

> _Performing Arithmetic and More_

## Introduction

Expressions are the building blocks of any program. In bell, expressions can involve numbers, strings, lists, and other data types, and they are evaluated to produce a result. This section introduces basic arithmetic operations, how to combine expressions, and how to use them effectively.

## Arithmetic Operations

### Supported Operations

_bell_ provides several basic arithmetic operations:

| Operation          | Symbol | Example  | Result |
| ------------------ | ------ | -------- | ------ |
| Addition           | `+`    | `5 + 3`  | `8`    |
| Subtraction        | `-`    | `10 - 4` | `6`    |
| Multiplication     | `*`    | `7 * 2`  | `14`   |
| Division           | `/`    | `8 / 2`  | `4`    |
| Modulo (remainder) | `%`    | `9 % 4`  | `1`    |
| Power              | `**`   | `2 ** 3` | `8`    |

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

You can combine multiple operations in a single expression. bell follows standard operator precedence rules (e.g., multiplication and division are performed before addition and subtraction). Use parentheses to make the order explicit or override precedence.

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

In _bell_, there’s a subtle distinction between expressions and statements:

- **Expression**: Produces a value. Examples: `5 + 3`, `$x * 2`.
- **Statement**: Performs an action, like assigning a value or printing. Examples: `$x = 5 + 3`, `print($x)`.

### Nullify Operator (`;`)

- Use a semicolon (`;`) to **nullify** an expression, meaning its result is discarded.

### Example:

```py
print("hello world"); ## Outputs "hello world"
5 + 3; ## Discards the result
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

### Exercise 2: Combining Expressions

1. Write a program to calculate the total cost of items in a shopping cart:

```py
$item1 = 5;
$item2 = 10;
$taxrate = 0.08; ## 8% tax
$total = ($item1 + $item2) * (1 + $taxrate)
```

2. Print the total cost.

### Exercise 3: Using Variables

1. Declare variables for length and width.
2. Write a formula to calculate the perimeter of a rectangle:

```py
$perimeter = 2 * ($length + $width)
```

3. Print the perimeter.

## FAQ

### Q: What happens if I divide by zero?

**A**: Dividing by zero in bell will result in an error. Always ensure the divisor is not zero.

### Q: Can I mix numbers and variables in expressions?

**A**: Yes, you can freely combine numbers and variables in any valid expression.

### Q: Do I need spaces between operators?

**A**: Spaces are optional but recommended for readability. For example:

```py
$x = 5+3; ## Works but hard to read
$x = 5 + 3 ## Easier to read
```

With a solid understanding of basic expressions, you’re now ready to explore lists, which are crucial for handling complex data in _bell_.

Next up: [Lisp-Like Linked Lists (lllls) – Working with Nested Data Structures](05_lists.md)
