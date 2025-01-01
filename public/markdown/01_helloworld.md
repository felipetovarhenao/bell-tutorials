# Hello, world!

Welcome to the starting point of learning _bell_, a programming language for computer-assisted algorithmic music composition. As with many programming languages, we’ll begin with a simple _"Hello, world!"_ program. This exercise is designed to introduce you to the fundamentals of writing and executing your first piece of _bell_ code.

---

## Your First Script

The _"Hello, world!"_ script in _bell_ is as simple as this:

```py
print("hello world")
```

> All code snippets in these tutorials can be easily copied by clicking the _copy_ icon at the top right of each, making it easy for you to run and edit the examples in your text editor.

### Step-by-Step Explanation:

- **The** `print` **function**:
  - The `print` function displays data we want to see in the _Max_ console window. In this case, `print` is instructed to display `"hello world"`. We'll discuss [functions](07_functions.md) in more detail later on.
- **Parentheses**:
  - Parentheses `( )` are used, among other things, to enclose the arguments (i.e., _inputs_ or _parameters_) that you pass to a function. In this case, the `print` function is being passed one argument: the symbol `"hello world"`.
  - In this particular case, the parentheses indicate that you are calling (i.e., executing) the function and providing the data it needs to perform its task. If we omit the parentheses or leave a space after the function name (i.e., `print`), the function won’t execute.
- **The** `"hello world"` **symbol**:
  - In _bell_, text inside double quotes (`"`) is called a **symbol**.
  - Symbols represent textual data. You’ll use them often in _bell_ for structuring and accessing data, specifying file paths, and more.
    > If you have prior programming experience, a symbol would be, roughly speaking, the _bell_ equivalent of a _string_ datatype in languages like _C_, _Java_, _Python_, and others.
- **Semicolons?**:

  - If you've done some programming in the past, you probably noticed that there’s no semicolon (`;`) at the end of this line. In the current version of _bell_, semicolons are used at the end of every statement, **except for the very last line**. Since our code is only a single line, we skip the semicolons (don't worry, we'll discuss this in more detail later).

  > The _no-semicolon-at-the-end_ rule is likely to go away in the next version release of _bell_, making it much more similar to other programming languages. As you start writing _bell_ code, you'll realize that forgetting this rule is a common mistake to make, so always check your code.

---

## Running the Script

To execute your code:

1. In your text-editor (e.g., _VSCode_), save your code as a `.bell` file — for example, `hello.bell` or `myscript.bell`.
2. Open the [_bellplay~_](https://github.com/felipetovarhenao/bellplay/releases/latest) application.
3. In _bellplay~_, click on _load script_ to load and run your code. In the _Max_ console, you should see:

```
bach.eval • hello world
```

> Everything we print in _bell_ will be preceded by `bach.eval •` since, under the hood, this is the name of the _Max_ object that runs our _bell_ code.

---

## Exercise

1. Try changing the symbol inside the `print` function. Replace `"hello world"` with:

   - _welcome to bell!_
   - _music is magic_
   - your name (e.g., _hello, John_)

   **Example**:

   ```py
   print("I love bell")
   ```

2. Save your updated _bell_ code to see how the output changes.

> When you load a `.bell` file in _bellplay~_, the code is automatically evaluated everytime you save it. As such, it's worth memorizing and using the keyboard shortcut to save a file — `Command+S` on Mac, and `Ctrl+S` on Windows.

---

## FAQ

### Q: Why use the `print` function?

**A**: The `print` function is essential in programming, as it allows us to display output in the _Max_ console, to debug code and understand the flow of execution in our scripts. It serves as a simple and effective tool for troubleshooting and verifying that our code is behaving as expected.

### Q: Do I have to use double quotes for text?

**A**: No, you can also use single quotes (`'`) for symbols—more on this later. For example:

```py
print('hello world')
```

### Q: What happens if I forget the closing quote?

**A**: You'll likely get an parsing error because _bell_ expects things like single- and double-quote symbols to be enclosed properly. Double-check for missing or mismatched quotes. Similarly, you need to use the same type of quote to open and close a symbol.

- Wrong:

  ```py
  print('hello world")
  ```

  ```py
  print("hello world')
  ```

- Correct:

  ```py
  print('hello world')
  ```

  ```py
  print("hello world")
  ```

---

Now that you’ve written and run your first _bell_ script, you're ready to explore the fundamental building blocks of _bell_, including comments, variables, expressions, and more.
