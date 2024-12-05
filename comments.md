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

```py
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

1. **Forgetting to close a multi-line comment**:
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

2. **Commenting too much or too little**:

	- Comment the why, not the obvious what:
		```py
		## Bad: Adds two numbers
		print(2 + 3)

		## Good: Add two numbers to calculate the total score
		print(2 + 3)
		```

## Exercises

### Exercise 2: Commenting Challenge

Here’s a piece of code without comments. Add appropriate comments to explain its purpose:

```py
$x = 10 ## Set initial value
for $i in 1...5 collect (
    $x += $i;
    print($x)
)
```

### Exercise 3: Multi-Line Comments

Write a program that:

1. Uses a multi-line comment to explain its overall purpose.
2. Includes at least two single-line comments to clarify specific steps.

## FAQ

### Q: Will comments slow down my program?
**A**: No, comments are ignored by the bell interpreter and do not affect performance.

### Q: Should I comment every line of code?
**A**: No, focus on why you're doing something rather than what the code does, especially for straightforward lines.

---

With comments mastered, you're now ready to explore variables, the building blocks of programming logic in bell.

Next up: **Variables – Storing and Organizing Data**