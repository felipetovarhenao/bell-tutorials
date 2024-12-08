# The null keyword

> _Understanding nihilistic code_

In _bell_, the `null` keyword represents the _absence_ of a value. It’s an explicit way to indicate that something is intentionally empty. Understanding `null` is essential for dealing with situations where the result of an expression isn't a value, or where you want to discard results.

---

## What Is `null`?

`null` in _bell_ signifies:

- **No value**: It’s not a number, symbol, or list — it’s simply _absence_ of a values.
- **Discarded results**: Statements or expressions can result in `null` if explicitly nullified, or there’s no return value, or an operation didn't evaluate as expected.

Think of `null` as silence: it's the absence of sound but still plays an important role in music.

## Printing `null`

To demonstrate how `null` represents the absence of a value, we can consider different scenarios:

### 1. Empty list

```py
$x = null;
print($x); ## Output: null
print(length($x)) ## Output: 0
```

### 2. A list of `null` elements

```py
$x = null null null;
print($x); ## Output: null
print(length($x)) ## Output: 0
```

### 3. Another list with `null` elements

```py
$x = 1 null null 2;
print($x); ## Output: 1 2
print(length($x)) ## Output: 2
```

As you can see, `null` is just a placeholder to represent the absence of something, which _bell_ doesn't treat it as a true value or element within a list.

---

## Using the Nullify Operator (`;`)

So far we've used semicolons (`;`) to separate statements. In _bell_, we call refer to the semicolon as the **nullify** operator: a **binary** operator where the expressions _before_ and _after_ it are evaluated, but the one preceding it is discarded (i.e., becomes `null`).

### Example:

```py
$x = 1; ## Assigns value to $x, and evaluates to null
$y = 2; ## Prints and outputs "hello world", but also returns null
print($x + $y) ## Output: 3 (not discarded)
```

> Note that the nullify operator doesn't invalidate the expressions it nullifies. That is, `$x = 1` and `$y = 1` are nullified, but the variable assignments still takes place and thus `$x` and `$y` still holds the assigned values, which is why `$x + $y` in the third line evaluates to `3`

---

## Last line rule

Since _nullify_ is a binary operator, _bell_ doesn't allow the last line of a block of code to end with a semicolon. This would be equivalent to trying to multiply with a missing operand: `2 * ` or `* 2`:

### Example:

- Incorrect:
  ```py
  ## right operand missing
  $x = 1 ;
  ```
- Also incorrect:
  ```py
  ## left operand missing
  ; $y = 2
  ```
- Correct:
  ```py
  ## both operands present
  $x = 1 ; $y = 2
  ```

### Why Use Nullify?

1. To write code as a chain of multiple expressions instead of writing complex expressions as a single line of code.
2. To explicitly indicate that an expression's result is not needed.

---

## Exercises

### Exercise 1: Checking your intuition

1. What is the _length_ (i.e., number of elements) of the following list:

```py
$x = 1 "two" null "four" null 5 null;
print(length($x)) ## Output: ?
```

2. What would be the output of this code?

```py
$x = 10;
print($x * $y) ## Output: ?
```

### Exercise 1: Code debugging

1. What's wrong with the following code snippets? How would you fix them?

```py
$x = 1;
$y = 2
$z = $x * 2
```

```py
$x = 1;
$y = 2;
$z = $x * $y;
```

---

## FAQ

### Q: Can I use `null` as a value in lists?

**A**: Yes and no. While you can include `null` in a list definition, it will still be treated as a non-element:

```py
$notes = C4 null E4;
print($notes); ## Outputs: C4 E4
```

### Q: Can I compare `null` to other values?

**A**: Yes, you can compare `null` to check for the absence of a value. Here's a preview of [conditionals](16_conditionals.md), which we'll cover later.

```py
if $x == null then print("No value assigned");
```

### Q: Is `null` the same as zero?

**A**: No. `null` represents absence, while `0` is a valid numeric value.

---

The `null` keyword and the _nullify_ operator (`;`) are essential for understanding what happens in our _bell_ code. Now it's time to take a look at _bell_ operators more closely.
