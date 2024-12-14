# Loops

> _Don't repeat yourself_

In _bell_, loops allow repetitive tasks to be automated efficiently through iterative operations. They are a powerful way to manipulate data structures by applying transformations dynamically.

## Loop clauses

Before we delve into the two types of loops available in _bell_, let's introduce the concept of a _clause_. A _clause_ is a specific type of keyword in _bell_ that modifies the behavior of a loop. In particular, there are two types of mutually exclusive _clauses_ available in both types of loops: `collect` and `do`.

### `collect` clause

The `collect` clause specifies that a loop should keep the resulting value of _every_ iteration. This is useful for constructing lists.

### `do` clause

The `do` clause specifies that a loop should simply execute each iteration (just like the `collect` clause), except the value of every iteration is discarded, except for the very last one. This is typically useful for cumulative operations, such as adding a list of numbers, where the result of intermediate iterations is not needed.

Now let's delve into each type of loop to see what these clauses look like in practice.

---

## `while` Loops

A `while` loop repeats a given expression or statement as long as a condition remains true. We use this type of loop for dynamic operations where the number of repetitions isn't known or predetermined.

### Syntax

```
while <condition> do|collect <statement>
```

#### Example

```py
$root = 6000; ## C5
$randscale = while $root < 7200 collect (
    $note = $root;
    $root += random(1, 2) * 100; ## Transpose up by either a minor or major second
    $note
);
print($randscale)
```

> `while` loops, while simple in syntax, require more care since you must ensure the condition will eventually be false. Otherwise, it results in an infinite loop.

---

## `for` Loops

`for` loops iterate through elements of an existing list.

### Syntax

The syntax of a `for` loop is fairly expansive yet flexible, which allows us to write `for` loops with various degrees of complexity. Here's the full syntax:

```
for <index variable 1> [address variable 1] in <llll 1>
    [, <index variable 2> [address variable 2] in <llll 2>
     [...] ]
    [with @<attribute name 1> <attribute value 1>
          [[,] @<attribute name 2> <attribute value 2>]
          [...] ]
    [as <condition>]
do|collect <body>
```

As overwhelming as this may look, `for` loops are as complex as we need them to be. Here are different use-cases showcasing the different ways in which we can customize our `for` loops.

### Index and Address Variables

Providing two variable names for a single list lets the first variable hold the data and the second hold the address.

```py
for $x $address in 1...10 do print($x $address)
```

### Parallel Iterations

Multiple lists can be iterated in parallel. The loop stops at the end of the shortest list.

```py
$listx = 1...10;
$listy = (1...9) * 10;
for $x in $listx, $y in $listy do print($x $y)
```

### Address Variables in Parallel Iterations

```py
$result = for $x $xaddr in 1...10, $y $yaddr in 11...20 collect [$x $xaddr] [$y $yaddr];
print($result)
```

### The `as` clause

The `as` clause allows you to set a condition to be checked before every iteration. The loop stops as soon as the condition becomes false.

```py
$sum = 0;
[for $x in 1...10 as (
	$sum += print($x)
) <= 100 collect $x] $sum - $x
```

Or:

```py
$sum = 0;
[for $x in 1...10 as $sum + $x <= 100 collect (
	$sum += $x;
	$x)
] $sum
```

### The `with` clause

The `with` clause allows fine-tuning the iteration behavior using attributes like `@maxdepth`, `@unwrap`, and `@recursionmode`.

```py
$myvar = 10 20 [30 40] 50 60;
for $x $addr in $myvar with @maxdepth -1 do print($x [$addr])
```

or:

```py
$myvar = 10 20 [30 40] 50 60;
for $x $addr in $myvar with @maxdepth 1, @unwrap 1 do print($x [$addr])
```

### Attributes in `for` loops

- `maxdepth` (defaults to 1): Sublists are accessed up to the level of depth defined by the `maxdepth` attribute. Default is `-1` = all levels.
- `scalarmode` (defaults to 1): With `@scalarmode 1` in parallel iteration, a list composed by a single element is iterated against all the elements of the other lists.
- `unwrap` (defaults to 0): If the `unwrap` attribute is set to `1`, the outermost level of parentheses is removed from each _llll_.
- `recursionmode` (defaults to 0): With recursionmode 1, sublists are iterated against single elements, up to `maxdepth`.
- `spikemode` (defaults to 0): We call a "spike" a sequence of parentheses, two of which are opposite with nothing between them: e.g. `[]` or `[[[]` or `]][[` . The "spikemode" attribute handles the way spikes are output from the right outlet.

---

## Exercises

### Exercise 1: Melody to Chords

1. Create a melody:

```py
$melody = C4 D4 E4 F4 G4
```

2. Use a `for` loop to print a major triad for each pitch as the root.

### Exercise 2: Scale to Intervals

1. Create a list of rhythmic values:

```py
$scale = 6000 6200 6400 6500 6700 6900 7100
```

2. Use a `for` loop to print intervals (in cents) between adjacent pitches.

### Exercise 3: Intervals to Scale

1. Start with intervals:

```py
$root = 6000;
$intervals = 200 200 100 200 200 200 100
```

2. Use a `for` loop to construct a scale from the intervals.

---

## FAQ

### Q: What’s the difference between `do` and `collect`?

**A**: The `do` keyword executes the loop but only keeps the last result. The `collect` keyword gathers results into a new list:

```py
$notes = 6000 6400 6700;
print(for $note in $notes do $note + 1200); ## Outputs: 7900
print(for $note in $notes collect $note + 1200) ## Outputs: 7200 7600 7900
```

### Q: How do I prevent infinite loops?

**A**: Ensure your `while` loop condition eventually becomes false:

```py
$x = 0;
while $x < 10 do $x += 1 ## Stops when $x reaches 10
```

### Q: Can I loop over nested lists?

**A**: Yes! Use a loop to iterate over the top level, and a nested loop for inner elements:

```py
$progression = [C4 E4 G4] [F4 A4 C5];
for $chord in $progression do (
    for $note in $chord::1 do print($note)
)
```

---

Loops are incredibly powerful for creating and manipulating data, whether you’re iterating through lists, generating dynamic patterns, or applying transformations. Next, we’ll explore user-defined functions, the cornerstone of modular and reusable code in _bell_.
