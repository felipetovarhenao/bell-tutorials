# Comments

> _Documenting Your Code_

## Introduction

In programming, comments are essential for explaining _what your code does_ and _why it does it_. While the computer ignores comments, they serve as notes for humans — whether it's your future self or someone else (i.e., your instructor) reading your code.

In _bell_, comments come in two flavors: **single-line** and **multi-line**.

## Single-Line Comments

Single-line comments begin with a double hash (`##`). Anything written after `##` on the same line is treated as a comment and ignored by the _bell_ interpreter.

### Example:

```py
print("hello world") ## This prints "hello world" to the screen
```

**Explanation**: The computer will execute the `print` function but ignore the text after `##`.

### Exercise 1: Practice Writing Comments

1. Add single-line comments to this code explaining what each line does:

   ```py
   print("Welcome to bell");

   print(2 + 3)
   ```

2. Run the program to confirm that the comments do not affect the output.

## Multi-Line Comments

For longer explanations, use multi-line comments. These are enclosed with `#(` and `)#`. Everything between `#(` and `)#` is treated as a comment.

```bell
#(
This program calculates the area of a rectangle
and displays the result.
Length and width are hardcoded for simplicity.
)#

$height = 5;
$width = 10;
$area = $height * $width; ## calculate area
print($area) ## Output: 50
```

**Explanation**: The multi-line comment provides an overview of the program's purpose, while the single-line comment explains the specific calculation.

## Why Use Comments?

1. **Clarity**: Help others (and your future self) understand the purpose of your code.
2. **Debugging**: Temporarily "disable" parts of your code by turning them into comments to isolate issues.
3. **Collaboration**: Make your intentions clear when working on code with others.

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
     ```bell
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
     This is an open
     multi-line comment
     ```
   - Also incorrect (wrong closer):
     ```
     #(
     This is also an open
     multi-line comment
     #(
     ```
   - Correct:
     ```
     #(
     This is a properly closed
     multi-line comment
     )#
     ```

2. **Commenting too much or too little**:

   - Comment the _why_, not the obvious _what_:

     ```py
     ## Bad: Adds two numbers
     print(2 + 3);

     ## Good: Calculate total
     print(2 + 3)
     ```

## Exercises

### Exercise 2: Commenting Challenge

Here’s a piece of code without comments. Add appropriate comments to explain its purpose:

```py
$pitch1 = 60;
$pitch2 = 65;
$interval = $pitch2 - $pitch1;
print($pitch1 "and" $pitch2 "are" $interval "semitones apart");
```

### Exercise 3: Multi-Line Comments

Write a program that:

1. Uses a multi-line comment to explain its overall purpose.
2. Includes at least two single-line comments to clarify specific steps.

## FAQ

### Q: Will comments slow down my program?

**A**: No, comments are ignored by the _bell_ interpreter and do not affect performance.

### Q: Should I comment every line of code?

**A**: No, focus on _why_ you're doing something rather than _what_ the code does. You want comments to help you and others understand how each different blocks of code contribute to the overall function of your scripts.

---

With comments mastered, you're now ready to explore variables, the building blocks of programming logic in _bell_.
