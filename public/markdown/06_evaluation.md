# Parentheses

### 1. Parentheses for grouping and function calls

In _bell_, parentheses serve two major purposes:

- **Function calls**:

  ```py
  print("hello")  ## calls print with one argument
  ```

- **Explicit grouping** (like in math):

  ```py
  (1 + 2) * 3 ## Output: 9
  ```

You can nest parentheses as deeply as needed:

```py
(1 + (2 * (3 + 4))) ## Output: 15
```

### 2. Semicolon as nullify operator, not statement separator

Unlike many other languages, the semicolon (`;`) in _bell_ **does not** act as a statement terminator. Instead, it is a **binary nullify operator**: it discards its left-hand operand and evaluates to its right-hand one.

This means:

```py
(1 + 2 ; 3 + 4) ## Output: 7
```

The value `1 + 2` is computed but discarded; the final result is `3 + 4`.

You can chain nullify operations:

```py
("foo" ; "bar" ; 5 * 2) ## Output: 10
```

This pattern is common in blocks where intermediate steps are useful for side-effects (like `print()`) but not the final value.

### 3. Precedence rules

Semicolons have **very low precedence**, so use parentheses to control grouping:

```py
(2 + 2 ; 3) * 2 ## Output: 6
```

But:

```py
1 + (4 ; 3) * 2 ## Output: 7
```

If you omit parentheses:

```py
1 + 2 ; 3 * 2 ## Output: 6  ## Same as ((1 + 2) ; (3 * 2))
```

### 4. Common pitfalls

- Forgetting parentheses around semicolon groups:

  ```py
  1 + 2 ; 3 + 4  ## This becomes ((1 + 2) ; (3 + 4)) -> 7
  ```

- Using semicolons as if they separate lines:

  ```py
  $x = (print("hello") ; 42);  ## correct: assigns 42 after printing
  ```

  > Additionally, if this is the last line in the script, it will raise an error because the very last semi-colon is expecting an operand to its right

---

### Summary

- Parentheses control grouping and function calls.
- Semicolon `;` is not for ending lines, but to **discard the left value**.
- Be precise with parentheses when semicolons are involved—especially in nested expressions.
