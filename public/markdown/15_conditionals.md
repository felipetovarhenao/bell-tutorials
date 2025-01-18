# Conditionals

Conditionals are central to decision-making in programming, allowing a program’s flow to change based on whether certain statements are true or false. They enable code to adapt to different scenarios at runtime and make your code more flexible, intelligent, and responsive.

---

## What Are Conditionals?

A conditional checks whether a given statement is true (non-zero value) or false (`0`) and executes different blocks of code accordingly. To write conditional statements, we have the following keywords available:

### Conditional Keywords

| Keyword   | Purpose                                                                            | Example                           |
| --------- | ---------------------------------------------------------------------------------- | --------------------------------- |
| `if`      | Evaluates a condition and executes code if the result is a non-zero value (_true_) | `if $x > 5 then print($x)`        |
| `else`    | Executes code if the `if` condition is `0` (_false_)                               | `else print("Condition false")`   |
| `else if` | Chains multiple conditions                                                         | `else if $x == 10 then print($x)` |

### `if` Syntax

The most basic form of a conditional statement is the following.

`if <condition> then <statement>`

It checks wheather the `<condition>` statement evaluates to a non-zero value (true) and, if true, executes the `<statement>` block of code. If false, the conditional statement evaluates to `null`.

```py
$note = 6000; ## C5
if $note > 6400 then print("The pitch is above E5") ## Outputs: null
```

### `if-else` Syntax

We can also add a statement to be executed when the `if`condition does not evaluate to a true value, using the `else` keyword.

`if <condition> then <statement1> else <statement2>`

This allows use to have more control over the behavior of our code.

```py
$note = 6200; ## D5
if $note < 6000 then (
  $note += 1200 ## Transpose up an octave (7400)
) else (
  $note -= 1200 ## Transpose down an octave (5000)
);
print($note)
```

### Chained `if-else` Syntax

For more complex decision trees, we can chain multiple conditional statements.

`if <condition1> then <statement1> else if <condition2> then <statement2> ... else <statementN>`

The `if-else` chain can be as long as needed.

```py
$note = C4;
if $note < C4 then print("pp")
else if $note == C4 then print("mf")
else print("ff")
```

> Note that we do not use `;` to chain `if-else` statements.

---

## Conditional Blocks with Multiple Statements

As it's typical in _bell_, we can always create compound statements using parentheses and the `;` operator.

```py
$pitch = 7000; ## Bb5
if $pitch > 6400 then (
    print("High pitch detected");
    $pitch -= 1200; ## Transpose down an octave
    print(pitch($pitch)) ## Outputs: Bb4 (5800 in MIDI cents)
)
```

---

## Boolean Logic in Conditions

As evidenced by all previous examples, _bell_ does not have a separate boolean data type. Instead:

- `0` is treated as _false_.
- Any non-zero value is treated as _true_.

#### Example:

```py
$condition = 2;
if $condition then print("This will not run") ## This gets printed
else print("False detected") ## This doesn't
```

## Logical Operators in Conditions

You can combine conditions using logical operators:

| Operator | Description                    | Example                      |
| -------- | ------------------------------ | ---------------------------- |
| `&&`     | Both conditions must be true   | `$note > 60 && $note < 72`   |
| `\|\|`   | At least one condition is true | `$note < 60 \|\| $note > 72` |
| `!`      | Negates a condition            | `!$note > 60`                |

---

## Examples of Logical Conditions in Music

### Checking a Range of Notes

```py
$note = 6500; ## MIDI cents for F4
if $note > 6000 && $note < 7200 then print("Within range")
```

### Detecting Out-of-Bounds Notes

```py
$note = 75;
if $note < 60 || $note > 72 then print("Out of range")
```

## Combining `else if` for Multiple Conditions

You can chain conditions using `else if` to create decision trees.

### Example: Assigning Dynamics Based on Pitch Range

```py
$note = 62; ## D4
if $note < 60 then print("pp")
else if $note <= 64 then print("mf")
else print("ff")
```

---

## Conditional Boolean Operators: `&&&` and `|||`

The `&&&` and `|||` operators are conditional boolean operators, also binary, that extend the behavior of traditional logical operators `&&` and `||`. Unlike their standard counterparts, these operators operate with a focus on `null` values for conditional evaluation.

### Syntax

- `<leftval> &&& <rightval>`
- `<leftval> ||| <rightval>`

### The `&&&` Operator

The `&&&` operator evaluates its left (i.e., first) operand and checks if it is `null`. If the left operand is `null`, the operator immediately returns `null`, skipping the second argument entirely. If the left operand is non-`null`, the right operand is evaluated. The result depends on the right (i.e., second) operand:

- If the second operand is `null`, the operator returns `null`.
- If the second operand is non-`null`, the operator returns its value.

**Key behavior**: The left operand’s value is not returned, even if it is non-`null`.

#### Example:

```py
$result = $value1 &&& $value2
```

- If `$value1` is `null`, result is `null`.
- If `$value1` is non-`null` and `$value2` is `null`, result is `null`.
- If both `$value1` and `$value2` are non-`null`, result is the value of `$value2`.

### The `|||` Operator

The `|||` operator evaluates its left operand and checks if it is non-`null`. If the left operand is non-`null`, the operator immediately returns it, skipping the right operand's evaluation entirely. If the left operand is `null`, the right-side operand is evaluated. The result depends on the second operand:

- If the second operand is non-`null`, the operator returns its value.
- If the second operand is also `null`, the operator returns `null`.
  **Key behavior**: The first operand is returned only if it is non-`null`.

#### Example:

```py
$result = $value1 ||| $value2
```

- If `$value1` is non-`null`, result is `$value1`.
- If `$value1` is `null` and `$value2` is non-`null`, result is `$value2`.
- If both `$value1` and `$value2` are `null`, result is `null`.

  ### Summary Table

  | Left operand | Right operand | `&&&` Result | `\|\|\|` Result        |
  | ------------ | ------------- | ------------ | ---------------------- |
  | _value1_     | _value2_      | _value2_     | _value1_               |
  | _value1_     | `null`        | `null`       | _value1_               |
  | `null`       | _value2_      | `null`       | _value2_               |
  | `null`       | `null`        | `null`       | `null` (right operand) |

These operators are particularly useful for substituting `if` statements involving `null` values, though it's common for beginners to find them a bit unintuitive or confusing to use. If that's the case, simply stick to traditional `if-else` syntax and you'll be fine.

---

## Exercises

### Exercise 1: Triad classifier

1. Given the following variable, make use of the `:` operator and conditionals to check if the triad is major or minor, and print the result. You may assume triads are spelled in root position and ascending order.

```py
$triad = C4 E4 G4
```

2. Try other major and minor triads to check your code works properly.

### Exercise 2: Conditional Seventh

1. Given the following variable:

```py
$chord = C4 E4 G4
```

2. Use the `:` and `_=` operators and conditionals to do append a seventh, based on whether the third is major or minor.

   - If the third is minor, append the minor seventh (`B4`).
   - If the third is major, append the major seventh (`Bb4`).

3. Print the updated chord.

---

## FAQ

### Q: Can I nest conditionals?

**A**: Yes, conditionals can be nested for more complex decision-making:

```py
$note = 62;
if $note > 60 then (
    if $note < 64 then print("C#4, D4, or Eb4")
)
```

### Q: What happens if none of the conditions are true?

**A**: If none of the conditions in an if-else chain are true and there’s no else block, the statement evaluates to `null`.

### Q: Can I use a single-line conditional?

**A**: Yes, you can write simple conditionals in one line:

```py
if $note > 64 then print("Above E4") else print("Below or at E4")
```

However, it's not a bad idea to split them into multiple lines to keep them more readable.

---

Conditionals allow you to add dynamic behavior to your code which can make for more expressive musical algorithms. Next, we’ll dive into loops, which are a powerful way for performing operations iteratively.
