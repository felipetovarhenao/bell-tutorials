## Hello, World!

## Introduction

Welcome to your first step in learning bell, a unique programming language designed for algorithmic music composition. Every programmer's journey begins with a _"Hello, World!"_ program, and so will ours. This simple exercise will introduce you to the basics of writing and executing your first piece of bell code.

## Writing Your First Program

The _"Hello, World!"_ program in bell is as simple as this:

```py
print("hello world")
```

### Step-by-Step Explanation:

- `print` Function:
  - The `print` function outputs text or numbers to the screen.
  - In this case, `print` is instructed to display `"hello world"`.
- The symbol `"hello world"`:
  - Text inside double quotes (`"`) is called a symbol.
  - Symbols represent textual data. You’ll use them often in bell for structuring data, specifying file paths, and more.
- Code structure:
  - A single line of bell code can execute an entire command. In this example, the `print` function is a command that directly interacts with the system to display the desired output.
- Semicolon?:
  - Notice that there’s no semicolon (`;`) at the end of this line. In the current version of _bell_, semicolons are used at the end of every statement, except for the very last line. Since our code is only a single line, we don't use semicolons yet.

## Running the Program

To execute your code:

1. Save your code in a file, for example, hello.bell.
2. Open your bell environment or interpreter.
3. Run the file by loading it in `bellplay~`. In the Max console, you should see:

```
bach.eval • hello world
```

> NOTE: everything we print will be preceded by `bach.eval •` since, under the hood, this is the name of the Max object that runs bell code.

## Exercise 1: Customize Your Output

1. Try changing the symbol inside the print function. Replace `"hello world"` with:
   - `"welcome to bell!"`
   - `"music is magic"`
   - `"your name" (e.g., "hello, John")`
   
   Example:
    ```py
    print("music is magic")
    ```
2. Save your updated bell code to see how the output changes.

> When you load a `.bell` in _bellplay~_, the code is automatically evaluated everytime you save it. As such, it's worth memorizing and using the keyboard shortcut to save a file — `Command+S` on Mac, and `Ctrl+S` on Windows.


## FAQ

### Q: Do I have to use double quotes for text?
**A**: No, you can also use single quotes (`'`) for symbols (more in this topic later). For example:

```bell
print('hello world')
```
### Q: What happens if I forget the closing quote?
**A**: You'll likely get an parsing error because bell expects single- and double-quote symbols to be enclosed properly. Double-check for missing or mismatched quotes.

## Beyond "Hello, World!"
Now that you’ve written and run your first program, you're ready to explore the fundamental building blocks of bell, including comments, variables, and expressions. But first, take a moment to reflect—you’ve just written your first program in bell!

Next up: **Comments – How to Document Your Code**