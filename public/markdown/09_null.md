# The null keyword

> _Understanding nihilistic code_

In _bell_, the `null` keyword represents the _absence_ of a value. It’s an explicit way to indicate that something is intentionally empty. Understanding `null` is essential for dealing with situations where the result of an expression isn't a value, or where you want to discard results.

## What Is `null`?

`null` in _bell_ signifies:

- **No value**: It’s not a number, symbol, or list — it’s simply _absence_.
- **Discarded results**: Statements or expressions can result in `null` if explicitly nullified, or there’s no return value, or an operation didn't evaluate as expected.

Think of `null` as silence: it's the absence of sound but still plays an important role in music.

## Using the Nullify Operator (`;`)

So far we've used semicolons (`;`) to separate statements. In _bell_, we call refer to the semicolon as the **nullify** operator: a **binary** operator where the expressions _before_ and _after_ it are evaluated, but the one preceding it is discarded (i.e., becomes `null`).

### Example:

```py
$x = 1; ## Assigns value to $x, and evaluates to null
$y = 2; ## Prints and outputs "hello world", but also returns null
print($x + $y) ## Output: 3 (not discarded)
```

> Note that the nullify operator doesn't invalidate the expressions it nullifies. That is, `$x = 1` and `$y = 1` are nullified, but the variable assignments still takes place and thus `$x` and `$y` still holds the assigned values, which is why `$x + $y` in the third line evaluates to 3

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

## Exercises

### Exercise 1: Exploring Nullify

1. Write a statement that calculates the sum of two numbers but discards the result using `;`.
2. Print the value of the discarded statement (it should return `null`).

### Exercise 2: Null in a Melody

1. Create a melody that includes a null to represent a "rest":

```py
$melody = [C4 null E4 G4];
```

2. Print the melody.
3. Use the `thin` function to remove the null and print the cleaned melody.

### Exercise 3: Null in a Conditional

1. Write an if statement that performs an operation only if a condition is true. Ensure the block doesn’t end with a nullify operator:

```py
if $x > 5 then (
    print("Value is greater than 5");
)
```

2. Test with `$x = 10` and `$x = 3`.

## FAQ

### Q: Can I use null as a value in lists?

**A**: Yes, null can be part of a list, and it will be treated as an empty element:

```py
$notes = [C4 null E4];
print($notes); ## Outputs: C4 null E4
```

### Q: Can I compare null to other values?

**A**: Yes, you can compare null to check for the absence of a value:

```py
if $x == null then print("No value assigned");
```

### Q: Is null the same as zero?

**A**: No. `null` represents "nothing," while 0 is a valid numeric value.

## Summary

The `null` keyword and the nullify operator (;) are essential for structuring and managing code in \_bell, particularly when working with discarded or missing values. By understanding and leveraging null, you can create cleaner, more intentional code.
