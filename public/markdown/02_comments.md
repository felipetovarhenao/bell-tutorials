# Comments

In programming, comments are essential for explaining _what your code does_ and _why it does it_. While the computer ignores comments, they serve as notes for humans — whether it's your future self or someone else (i.e., your instructor) reading your code.

In _bell_, comments come in two flavors: **single-line** and **multi-line**.

---

## Single-Line Comments

Single-line comments begin with a double hash (`##`). Anything written after `##` on the same line is treated as a comment and ignored by the _bell_ interpreter.

### Example:

```py
print("hello world") ## This prints "hello world" to the screen
```

**Explanation**: The computer will execute the `print` function but ignore the text after `##`.

---

## Multi-Line Comments

For longer explanations, use multi-line comments. These are enclosed with `#(` and `)#`. Everything between `#(` and `)#` is treated as a comment.

```bell
#(
This code displays the area of a rectangle.
Length and width are hardcoded for simplicity.
)#

print("the area of a 12 by 10 rectangle is 120")
```

---

## Why Use Comments?

1. **Clarity**: Help others (and your future self) understand the purpose of your code.
2. **Debugging**: Temporarily "disable" parts of your code by turning them into comments to isolate issues or skip parts of your script.
3. **Collaboration**: Make your intentions clear when working on code with others.

---

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
     Generates a series of hexachords
     to be used as harmonic fields
     for fast arpeggios
     )#
     ```

---

## Common Mistakes to Avoid

1. **Forgetting the double-hash for single-line comments**:

   - Incorrect:

   ```py
   # invalid comment
   ```

   - Correct:

   ```py
   ## valid comment
   ```

2. **Forgetting to close a multi-line comment**:

   - Incorrect:
     ```bell
     #(
     This is an open
     multi-line comment
     ```
   - Also incorrect (wrong closer):
     ```bell
     #(
     This is also an open
     multi-line comment
     #(
     ```
   - Correct:
     ```bell
     #(
     This is a properly closed
     multi-line comment
     )#
     ```

3. **Commenting too much or too little**:

   - Comment the _why_, not the obvious _what_:

     ```py
     ## Bad: Adds two numbers
     print(2 + 3);
     ## Good: Calculate total
     print(2 + 3)
     ```

Notice the semicolon (`;`) in this example. For the sake of simplicity, we'll simply think of semicolons as **separating** (not terminating) blocks of code — similar to how we commas in human language to separate statements. A more in-depth explanations of semicolons in _bell_ will be provided later on.

---

## Exercise

1. Add single-line comments to this code following best practices:

   ```py
   ## <your comment>
   print("Welcome to bell");
   ## <your comment>
   print(2 + 3)
   ```

2. Run the program to confirm that the comments do not affect the output.

---

## FAQ

### Q: Will comments slow down my program?

**A**: No, comments are ignored by the _bell_ interpreter and do not affect performance.

### Q: Should I comment _every_ line of code?

**A**: No, focus on _why_ you're doing something rather than _what_ the code does. You want comments to help you and others understand how each different blocks of code contribute to the overall function of your scripts.

### Q: Do I need to use semicolons after comments?

**A**: No, since comments are ignored during the execution of the code, comments do not require semicolons. The role of the semicolons in _bell_ will be explored in further detail later.

---

With comments mastered, you're now ready to explore variables, the building blocks of programming logic in _bell_.
