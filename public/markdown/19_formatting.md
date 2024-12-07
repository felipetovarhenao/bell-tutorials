# Indentation and Code Etiquette

> _Writing Clean and Readable Code_

## Introduction

In _bell_, proper indentation and code structure aren't strictly required by the language, but they are essential for readability and maintainability, especially when your programs become more complex. Clean code helps you and others understand your musical logic, debug errors, and extend functionality efficiently.

## Why Indentation Matters

1. **Improved Readability**: Organized code is easier to follow, especially when using loops, conditionals, or nested structures.
2. **Error Prevention**: Proper indentation helps visualize blocks of code, reducing the risk of misplaced logic.
3. **Team Collaboration**: Clean, consistent formatting makes it easier for others to understand your work.

## Guidelines for Indentation in bell

### General Rules

1. **Indent Nested Blocks**:
   - Use 2 or 4 spaces (not tabs) for each level of nesting.
   - Consistency is key—choose one style and stick to it.
2. **Align Parentheses and Blocks**:
   - For multi-line parentheses or nested structures, align them for clarity.

### Example: Indentation with Conditionals

#### Without Indentation (Hard to Read):

```py
if $note > 60 then ($note -= 12;print($note);) else ($note += 12;print($note);)
```

#### With Indentation (Readable):

```py
if $note > 60 then (
    $note -= 12;
    print($note);
) else (
    $note += 12;
    print($note);
)
```

### Example: Indentation in Loops

#### Without Indentation:

```py
for $note in C4 D4 E4 collect $note + 12; print($note);
```

#### With Indentation:

```py
for $note in C4 D4 E4 collect (
    $transposed = $note + 12;
    print($transposed);
    $transposed
);
```

## Code Etiquette Tips

### 1. Use Descriptive Variable Names:

- Avoid $a, $b, $x. Instead, use $melody, $note, or $scale.

### 2. Break Long Lines:

- Split long expressions or statements across multiple lines for readability.

```py
$pattern = (
	$melody + $rhythms :* 4
);
```

### 3. Avoid Excessive Nesting:

- Simplify deeply nested code by splitting it into smaller, independent parts.

```py
## Avoid:
print((($melody + 12) * 2)::1);

## Better:
$transposed = $melody + 12;
$scaled = $transposed * 2;
print($scaled::1);
```

## Exercises

### Exercise 1: Refactor for Readability

The following code is hard to read. Reformat it with proper indentation and comments:

```py
if $note > 60 then ($note -= 12;print($note);) else ($note += 12;print($note);)
```

### Exercise 2: Organizing Code with Comments

Write a program that:

1. Creates a major scale.
2. Transposes it up an octave.
3. Labels each step with a comment explaining what it does.

## FAQ

### Q: Does bell enforce indentation?

**A**: No, bell does not enforce indentation, but using it consistently makes your code easier to read and debug.

### Q: Should I use tabs or spaces?

**A**: Use spaces, as they are more universally supported and prevent alignment issues in different editors.

### Q: How can I keep track of nested structures?

**A**: Align opening and closing parentheses, and use consistent indentation to visually separate blocks.

---

Proper indentation and clean code are the foundation of effective programming. By following these guidelines, you’ll write code that’s easier to read, debug, and share, making your musical programming more efficient and enjoyable.
