# Hello, World!

## Introduction

Welcome to the starting point of learning _bell_, a programming language specifically created for algorithmic music composition. As with many programming languages, we’ll begin with a simple _"Hello, World!"_ program. This exercise is designed to introduce you to the fundamentals of writing and executing your first piece of _bell_ code.

## Writing Your First Program

The _"Hello, World!"_ program in _bell_ is as simple as this:

```py
print("hello world")
```

### Step-by-Step Explanation:

- **The** `print` **function**:
  - The `print` function displays data we want to see in the _Max_ console window. In this case, `print` is instructed to display `"hello world"`.
- **Parentheses**:
  - Parentheses ` (``) ` are used to enclose the arguments (i.e., _inputs_ or _parameters_) that you pass to a function. In this case, the print function is being passed one argument: the symbol `"hello world"`.
  - The parentheses indicate that you are calling the function and providing the data it needs to perform its task. If you omit the parentheses or leave a space after the function name (i.e., `print`), the function won’t execute.
- **The** `"hello world"` **symbol**:
  - Text inside double quotes (`"`) is called a symbol.
  - Symbols represent textual data. You’ll use them often in bell for structuring data, specifying file paths, and more.
    > If you have prior programming experience, a symbol would be, roughly speaking, the _bell_ equivalent of a _string_ datatype in languages like _C_, _Java_, _Python_, and others.
- **Code structure**:
  - A single line of _bell_ code can execute an entire command. In this example, the `print` function is a command that directly interacts with the _Max_ console to display the desired output.
- **Semicolon?**:

  - If you've done some programming in the past, you probably noticed that there’s no semicolon (`;`) at the end of this line. In the current version of _bell_, semicolons are used at the end of every statement, except for the very last line. Since our code is only a single line, we don't use semicolons yet. We'll discuss this in more detail later on.

  > The _no-semicolon-at-the-end_ rule is likely to go away in the next version release of _bell_, making it much more similar to common programming languages. As you'll notice, this will be a common mistake in your code, so always check your code.

## Running the Program

To execute your code:

1. Save your code in a file, for example, `hello.bell`.
2. Open [_bellplay~_](https://github.com/felipetovarhenao/bellplay/releases/latest).
3. Run the file by loading it. In the _Max_ console, you should see:

```
bach.eval • hello world
```

> NOTE: everything we print will be preceded by `bach.eval •` since, under the hood, this is the name of the Max object that runs bell code.

## Exercise 1: Customize Your Output

1. Try changing the symbol inside the print function. Replace `"hello world"` with:

   - _welcome to bell!_
   - _music is magic_
   - your name (e.g., _hello, John_)

   **Example**:

   ```py
   print("music is magic")
   ```

2. Save your updated bell code to see how the output changes.

> When you load a `.bell` file in _bellplay~_, the code is automatically evaluated everytime you save it. As such, it's worth memorizing and using the keyboard shortcut to save a file — `Command+S` on Mac, and `Ctrl+S` on Windows.

## FAQ

### Q: Do I have to use double quotes for text?

**A**: No, you can also use single quotes (`'`) for symbols (more in this topic later). For example:

```py
print('hello world')
```

### Q: What happens if I forget the closing quote?

**A**: You'll likely get an parsing error because _bell_ expects single- and double-quote symbols to be enclosed properly. Double-check for missing or mismatched quotes. Similarly, you need to use the same type of quote to open and close a symbol.

- Wrong:

  ```py
  print('hello world");
  print("hello world')
  ```

- Correct:

  ```py
  print('hello world');
  print("hello world")
  ```

---

## Beyond "Hello, World!"

Now that you’ve written and run your first _bell_ script, you're ready to explore the fundamental building blocks of _bell_, including comments, variables, expressions, and more.

> Next up: [Comments – How to Document Your Code](02_comments.md)
