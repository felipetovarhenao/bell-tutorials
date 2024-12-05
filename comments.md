# Comments: Documenting Your Code

## Introduction

In programming, comments are essential for explaining *what your code does* and *why it does it*. While the computer ignores comments, they serve as notes for humans—whether it's your future self or someone else reading your code.

In *bell*, comments come in two flavors: **single-line** and **multi-line**.

## Single-Line Comments

Single-line comments begin with a double hash (`##`). Anything written after `##` on the same line is treated as a comment and ignored by the bell interpreter.

### Example:

```py
print("hello world") ## This prints "hello world" to the screen
```
**Explanation**: The computer will execute the `print` function but ignore the text after `##`.

### Exercise 1: Practice Writing Comments

1. Add single-line comments to this code explaining what each line does:

```py
## Write a message
print("Welcome to bell") ## Print the welcome message

## Calculate a sum
print(2 + 3) ## Print the result of 2 + 3
```

2. Run the program to confirm that the comments do not affect the output.

## Multi-Line Comments

For longer explanations, use multi-line comments. These are enclosed with `#(` and `)#`. Everything between `#(` and `)#` is treated as a comment.

```
#(
This program calculates the area of a rectangle
and displays the result.
Length and width are hardcoded for simplicity.
)#

$length = 5
$width = 10
print($length * $width) ## Output: 50
```

**Explanation**: The multi-line comment provides an overview of the program's purpose, while the single-line comment explains the specific calculation.

## Why Use Comments?

1. **Clarity**: Help others (and your future self) understand the purpose of your code.
2. **Debugging**: Temporarily "disable" parts of your code by turning them into comments to isolate issues.
3. **Collaboration**: Make your intentions clear when working in teams.

## Best Practices for Writing Comments

1. Be concise but descriptive:
	- Instead of:

```py
## This calculates the sum of two numbers, 5 and 3, which equals 8
print(5 + 3)
```

	- Write:

```py
## Calculate the sum of 5 and 3
print(5 + 3)
```

2. Avoid redundant comments:
	- Bad:

```py
## This prints "hello world"
print("hello world")
```

	- Better:

```py
## Greet the user
print("hello world")
```

3. Use multi-line comments for big-picture explanations:
	- Before a block of code:

```
#(
Generate a sequence of numbers and
calculate their squares for later use
)#
```

## Common Mistakes to Avoid

1. Forgetting to close a multi-line comment:
	- Incorrect:
```
#(
This is an open multi-line comment
```
	- Correct:
```
#(
This is a properly closed multi-line comment
)#
```


