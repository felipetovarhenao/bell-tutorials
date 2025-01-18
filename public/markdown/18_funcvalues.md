# Functions As Values

In _bell_, functions are treated as values, just like any other data types, which affords fairly elegant ways of writing algorithms.

## First Class Citizenship

In _bell_, functions are treated as **first-class citizens**, which means we can:

- Assign them to variables or store them in data structures — which we've been doing so far.
- Pass functions as arguments to other functions.
- Return them as the values from other functions.

In fact, functions are themselves a data type, which we can confirm by using the `is` function:

```py
$datatype = is(print);
print($datatype) ## Outputs: function
```

Here, `print` is being used twice, each time in a different way. The first time, we pass `print` as an argument (or value) to the `is` function—note that we're not calling `print` yet, but rather passing the function itself. In the second line, we are actually calling `print` and passing it the output of `is` as an argument.

To further explore this concept, we need to discuss the concept of _anonymous functions_.

## Anonymous Functions

Anonymous functions, also known as _lambda_ functions, are functions that simply aren't assigned to an variable. For instance:

```py
print(($x -> $x * $x)(4)) ## Output: 16
```

Here, we are creating a user-defined function that squares a value, but instead of assigning the function definition to a variable, we call the function in place.

While this might seem unnecessarily complicated or confusing, anonymous functions can come in handy when we need to pass custom functions as arguments to other functions. In fact, some of _bell_'s built-in functions, like `map` and `reduce`, expect functions as part of their arguments. Here are some examples:

### Example 1: The `map` Function

According to the [reference documentation](/#/reference):

> The `map()` function transforms an _llll_ element-wise, according to a given lambda function.

In other words, the `map` function allows us to pass a function that will be applied, element-wise, to an _llll_, which in many cases can serve as a short-hand for a `for` loop.

```py
$nums = 1...10;
$result = map($nums, ($x -> $x * (-1 1):random(1, 2)));
print($result)
```

In this case, we multiply each value in `$nums` with either `-1` or `1`, randomly changing its sign.

> Remember to always make use of the [reference documentation](/#/reference) to learn about functions you're not familiar with.

### Example 2: The `sort` function

A very common scenario is wanting to sort sublists within a _llll_. To do this, we can make use of the optional `@function` argument in the `sort` function. The default function in `sort` looks something like this:

```py
($a, $b -> $a < $b)
```

For instance:

```py
$sort = ($a, $b -> $a < $b); ## sorting function
$unsorted = scramble(1...10); ## random ordering of numbers from 1 to 10
$sorted = sort($unsorted @function $sortfunction); ## apply sorting
print($sorted) ## Output: 1 2 3 ... 10
```

Here, the function takes two arguments, and compares if the first is less than the second one. If true, the element is kept in place. Otherwise, the elements are swapped.

However, when the elements in a list are more complex in structure (i.e., nested _lllls_), we need to provide a more specific way of ordering them.

```py
$notes = (
   [[ "pitch" 6500 ] ["duration" 1000 ]]
   [[ "pitch" 6200 ] ["duration" 1000 ]]
   [[ "pitch" 6400 ] ["duration" 500 ]]
   [[ "pitch" 6000 ] ["duration" 500 ]]
);
$sortnotes = ($a, $b -> $a::1."pitch" < $b::1."pitch");
$notes = $notes.sort($sortnotes);
$notes.map($x -> print($x::1))
```

#### Output

```
[ pitch 6000 ] [ duration 500 ]
[ pitch 6200 ] [ duration 1000 ]
[ pitch 6400 ] [ duration 500 ]
[ pitch 6500 ] [ duration 1000 ]
```

## Functional Form of Operators

In _bell_, operators can also be passed as functions using the following syntax:

```
#<operator>
```

Where the number of arguments would simply depend on whether the operator is unary or binary. For instance:

```py
$add = #+;
print($add(1, 2)) ## Output: 3
```

Note that this is just [syntantic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar) for something we can still do with regular user-defined functions:

```py
## This is equivalent to the previous example:
$add = $a, $b -> $a + $b;
print($add(1, 2)) ## Output: 3
```

### Example 3: The `reduce` function

Here's an example of the `reduce` function, which cumulatively applies a given function to elements in a _llll_. This is useful, for instance, for computing [factorials](https://en.wikipedia.org/wiki/Factorial).

```py
$n = 4;
$factorial = reduce(1...$n, #*);
$factorial.print() ## Outputs: 24
```

The code above is equivalent to this:

```py
$n = 4;
$factorial = 1;
for $x in 2...$n do (
    $factorial *= $x
);
print($factorial) ## Outputs: 24
```

## Exercises

### Exercise 1: Using map for Element-Wise Transformation

1. Create a list of numbers from `1` to `10`.
2. Use `map` to check whether each element is a multiple of `3`, using the `%` operator. The value should be `1` if true and `0` if false.
3. Print the transformed list.

### Exercise 2: Sorting Complex Data

1. Define a list of sublists, where each sublist contains a person's name and age:

```py
$people = (
    ["Alice" 25]
    ["Bob" 30]
    ["Charlie" 20]
)
```

2. Use the sort function to sort the list by age (ascending).
3. Print the sorted list.

### Exercise 3: Cumulative Operations with reduce

1. Create a list of numbers from `1` to `5`.
2. Use `reduce` to calculate the sum of all numbers (i.e., `1 + 2 + 3 + 4 + 5`).
3. Print the result.

## FAQ Section

### Q: What is the difference between a regular function and a lambda function?

**A**: Regular functions are defined with a name and can be reused across multiple parts of your code. Lambda functions, on the other hand, are anonymous—created on the fly and typically used for either short, single-purpose operations, or to be passed as arguments to other functions.

### Q: Is there a way to use built-in operators like `%` or `**` as functions?

**A**: Yes! You can pass them using the syntax `#+` or `#**`. For instance, you can write:

```py
$nums = 2 2 2;
$power = $nums.reduce(#**);
print($power)  ## Output: 10
```

---

Using functions as arguments lets you write concise, reusable, and expressive code in _bell_. Practice and experiment to discover new ways to combine and apply them. Next we'll take a look at best practices when it comes to code presentation and formatting.
