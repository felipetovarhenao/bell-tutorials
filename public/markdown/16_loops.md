# Loops

> _Don't repeat yourself_

In _bell_, loops allow performing repetitive tasks efficiently without the need to write redundant code. Whenever you find yourself repeating the same type of logic in you code, that's a sign you should be using loops instead. They are a powerful way to iterate through our data and dynamically perform operations on it.

## Loop clauses

Before delving into the two types of loops available in _bell_ –`while` and `for` loops—, let's introduce the concept of _clauses_. A _clause_ is a specific type of keyword in _bell_ that modifies the behavior of a loop. In particular, there are two types of mutually exclusive clauses available in `for` and `while` loops: the `collect` and `do` clauses.

### The `collect` clause

The `collect` clause specifies that a loop should keep the resulting value of _every_ iteration. This is useful for constructing lists.

### The `do` clause

The `do` clause specifies that a loop should simply execute each iteration (just like the `collect` clause) but discard the result, except for the very last iteration. This is typically useful for cumulative operations, such as adding a list of numbers, that don't require preserving values of intermediate operations.

Now let's delve into each type of loop to see what these clauses look like in practice.

---

## The `while` Loop

A `while` loop repeats a given expression or statement as long as a condition remains true. We use this type of loop for dynamic operations where the number of repetitions isn't known or predetermined.

### Syntax

```
while <condition> do|collect <statement>
```

#### Example 1: `while` loop with `do` clause

```py
$i = 1;
while $i < 100 do (
    print($i);
    $i *= 2
)
```

#### Example 2: `while` loop with `collect` clause

```py
$pitch = 6000; ## C5
$randscale = $pitch;
$randscale _= while $root < 7200 collect (
    $pitch += random(1, 2) * 100; ## Transpose up by either a minor or major second
);
print($randscale)
```

> `while` loops, while simple in syntax, require more care since you must ensure the condition will eventually be false. Otherwise, it results in an infinite loop.

---

## The `for` Loop

`for` loops allow to iterate through elements of an existing list. Relative to `while` loops, `for` loops are more flexible and versatile in their behavior. This, however, comes at the expense of more elaborate syntax.

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

As overwhelming as this may look, `for` loops are only as elaborate as we need them to be. Here are different use-cases showcasing the different ways in which we can customize our `for` loops.

### Index Variables

The simplest kind of `for` loop is one in which we iterate through the top level of a list, each element stored in what will refer to as the _index variable_, which stores the data of each element in the list.

```py
for $x in 1...10 do print($x)
```

#### Output

```
1
2
3
4
5
6
7
8
9
10
```

### Index and Address Variables

Providing two variable names for a single list lets the first variable hold the data and the second hold its address within the list.

```py
for $x $address in 1...10 do print($x $address)
```

#### Output

```
1 1
2 2
3 3
4 4
5 5
6 6
7 7
8 8
9 9
10 10
```

### Parallel Iterations

Multiple lists can be iterated in parallel. The loop stops at the end of the shortest list.

```py
$listx = 1...10;
$listy = (1...9) * 10;
for $x in $listx, $y in $listy do print($x $y)
```

#### Output

```
1 10
2 20
3 30
4 40
5 50
6 60
7 70
8 80
9 90
```

> In this example, the loop stops before the last element of `$listx`, since `$listy` has only 9 elements while `$listx` has 10.

### Address Variables in Parallel Iterations

We can also use index and address variables in parallel iteration:

```py
for $x $xaddr in 1...10, $y $yaddr in 11...20 do (
    print([$x $xaddr] [$y $yaddr])
)
```

#### Output

```
[ 1 1 ] [ 11 1 ]
[ 2 2 ] [ 12 2 ]
[ 3 3 ] [ 13 3 ]
[ 4 4 ] [ 14 4 ]
[ 5 5 ] [ 15 5 ]
[ 6 6 ] [ 16 6 ]
[ 7 7 ] [ 17 7 ]
[ 8 8 ] [ 18 8 ]
[ 9 9 ] [ 19 9 ]
[ 10 10 ] [ 20 10 ]
```

### The `as` clause

The `as` clause allows you to set a condition to be checked before every iteration of a `for` loop. The loop stops as soon as the condition becomes false.

```py
## iterate through list, as long as element is not a symbol
$data = 1 2 3 "four" 5;
for $x in $data as is($x) != "symbol" do (
    print($x)
)
```

#### Output

```
1
2
3
```

### The `with` clause

The `with` clause allows fine-tuning the iteration behavior using attributes like `@maxdepth`, `@unwrap`, and `@recursionmode`.

#### Attributes in `for` loops

- `maxdepth` (defaults to 1): Sublists are accessed up to the level of depth defined by the `maxdepth` attribute. Default is `-1` = all levels.
- `scalarmode` (defaults to 1): With `@scalarmode 1` in parallel iteration, a list composed by a single element is iterated against all the elements of the other lists.
- `unwrap` (defaults to 0): If the `unwrap` attribute is set to `1`, the outermost level of parentheses is removed from each _llll_.
- `recursionmode` (defaults to 0): With recursionmode 1, sublists are iterated against single elements, up to `maxdepth`.
- `spikemode` (defaults to 0): We call a "spike" a sequence of parentheses, two of which are opposite with nothing between them: e.g. `[]` or `[[[]` or `]][[` .

```py
$myvar = 1 2 [3 4 [5 6]];
for $x $addr in $myvar with @maxdepth -1 do print($x [$addr])
```

#### Output

```
1 [ 1 ]
2 [ 2 ]
3 [ 3 1 ]
4 [ 3 2 ]
5 [ 3 3 1 ]
6 [ 3 3 2 ]
```

or:

```py
$myvar = 1 2 [3 4 [5 6]];
for $x $addr in $myvar with @maxdepth 1 @unwrap 1 do print("data" $x) print("address" $addr)
```

> Note that, similar to functions, commas between named attributes in `for` loops are optional.

#### Output

```
data 1
address 1
data 2
address 2
data 3 4 [ 5 6 ]
address 3
```

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

2. Use a `for` loop to calculate and print the intervals (in cents) between adjacent pitches.

### Exercise 3: Intervals to Scale

1. Start with intervals:

```py
$root = 6000;
$intervals = 200 200 100 200 200 200 100
```

2. Use a `for` loop to construct a scale from the intervals.

3. Print the resulting scale.

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

Or:

```py
$progression = [C4 E4 G4] [F4 A4 C5];
for $chord in $progression with @unwrap 1 do (
    for $note in $chord do print($note)
)
```

---

Loops are incredibly powerful for creating and manipulating data, while keeping our code concise and efficient. Next, we’ll explore user-defined functions, the cornerstone of modular and reusable code in _bell_.
