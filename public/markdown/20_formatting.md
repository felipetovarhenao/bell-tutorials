# Indentation and code etiquette

In _bell_, proper indentation and code structure aren't strictly required by the language, but they are essential for readability and maintainability, especially when your programs become more complex. Clean code helps you and others understand your musical, debug errors, and extend functionality efficiently.

---

## Why indentation matters

1. **Improved Readability**: Organized code is easier to follow, especially when using loops, conditionals, or nested structures.
2. **Error Prevention**: Proper indentation helps visualize blocks of code, reducing the risk of misplaced logic.
3. **Team Collaboration**: Clean, consistent formatting makes it easier for others to understand your work.

---

## Guidelines for indentation in _bell_

### General rules

1. **Indent Nested Blocks**:
   - Use 2 or 4 spaces (not tabs) for each level of nesting.
   - Consistency is key—choose one style and stick to it.
2. **Align Parentheses and Blocks**:
   - For multi-line parentheses or nested structures, align them for clarity.

### Example: indentation with conditionals

#### Without indentation (hard to read):

```py
if $note > 60 then ($note-=12;print($note)) else ($note += 12;print($note))
```

#### With indentation (readable):

```py
if $note > 60 then (
    $note -= 12;
    print($note)
) else (
    $note += 12;
    print($note)
)
```

### Example: indentation in loops

#### Without indentation:

```py
for $note in C4 D4 E4 collect ($note+12;print($note))
```

#### With indentation:

```py
for $note in C4 D4 E4 collect (
    $note + 12;
    print($note)
)
```

---

## Code etiquette tips

### 1. Use descriptive variable names:

- Avoid `$a`, `$b`, `$x` for meaningful variables. Instead, use more descriptive language, such as `$melody`, `$note`, or `$scale`.

### 2. Break long lines:

- Split long expressions or statements across multiple lines for readability.

```py
$pattern = (
	$melody + $transposition :* 4
)
```

### 3. Avoid excessive nesting:

- Simplify deeply nested code by splitting it into smaller, independent parts.

```py
## Avoid:
print((($melody + 12) * 2)::1);

## Better:
$transposed = $melody + 12;
$scaled = $transposed * 2;
print($scaled::1)
```

---

## Exercise

The following code is hard to read. Reformat it with proper indentation and comments:

```py
if $note > 60 then ($note -= 12;print($note)) else ($note += 12;print($note))
```

---

## FAQ

### Q: Does _bell_ enforce indentation?

**A**: No, _bell_ does not enforce indentation, but using it consistently makes your code easier to read and debug.

### Q: Should I use tabs or spaces?

**A**: Use spaces, as they are more universally supported and prevent alignment issues in different editors.

### Q: How can I keep track of nested structures?

**A**: Align opening and closing parentheses, and use consistent indentation to visually separate blocks.

---

Proper indentation and clean code are the foundation of effective programming. By following these guidelines, you’ll write code that’s easier to read, debug, and share, making programming experience more efficient and enjoyable.
