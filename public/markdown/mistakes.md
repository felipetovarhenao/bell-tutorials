# Appendix III: Frequent Mistakes

The following is a list of frequent mistakes to watch out for when writing _bell_ code.

## Trailing semicolons

```py
$x = 1;
$y = 2;
print($x + $y); ## Trailing semicolon
```

This is by far one of the most common mistakes to make. As discussed in [one of the tutorials](10_null.md), the semicolon in _bell_ does **NOT** work as a statement terminator, as it's typically the case in many programming languages. Instead, the semicolon in _bell_ is a **binary operator**, meaning it needs to be preceded **AND** followed by an expression. Failure to account for this will result in errors like this:

```
bach.eval: Unexpected end of code
bach.eval: Syntax errors present — couldn't parse code
bach.eval: Invalid code, reverting to previous
```

---

## Operations with null

```py
$nums = 1 2 3;
$total = null;
for $x in $nums do (
	$total += $x ## Attempt to add numbers to a null variable
);
print($total) ## Outputs: null
```

A typical source of bugs is to have intermediate evaluations in our code that result in `null`, causing downstream operations to also become `null`. This can be, for instance, the result of not providing all expected arguments in a function, accessing elements with non-existent addresses or keys, using `null` as a operand when performing arithmetic, etc.

---

## Misspelled variables

```py
$pitch = 5000;
print($pithc) ## Outputs: null
```

Another simple but very common mistake is to misspell variable names, which results in `null`-related problems that like one described earlier.

## Incorrect arguments

```py
$start = 1;
$end = 10;
$count = 5;
print(arithmser($start, $end, $count)) ## Outputs: 1 6
```

When using functions, it's always important to double-check the [reference documentation](/#/reference) and ensure that you're not passing either invalid or unexpected values to a function, or passing them in the wrong order. In the example above, the `$count` variable should be passed as either the fourth positional argument, or as a named argument.

## Incorrect depth levels

```py
$nums = [1 2 3 4 5];
for $x in $nums do print($x >= 20) ## Outputs: 1
```

When iterating through _lllls_, is easy to forget taking into account the level at which we need to iterate. In the example above, the assumption is that we want to iterate through each number in `$nums` and for each of them check if the number if greater tahn or equal to `20`. However, `$nums` is wrapped in brackets which means it's a list of a single element `[1 2 3 4 5]` and has a depth of `20`. This results in the comparison being equivalent to `[1 2 3 4 5] >= 2` which won't work as expected.

> In _bell_, unexpected comparisons like this one, weirdly enough, evaluate to true (`1`), which is why it's very important to always double-check your code.

---

Keeping these in the back of your mind whenever something doesn't seem to work as expected will help you trace down bugs in your code much quicker.
