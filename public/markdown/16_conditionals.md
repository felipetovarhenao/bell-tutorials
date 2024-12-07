# Conditionals

> _Making Decisions in Your Code_

In _bell_, conditionals allow your code to make decisions based on specific conditions. They are essential for creating dynamic and interactive programs, such as modifying a melody based on user input or changing rhythmic patterns depending on the section of a composition. Conditionals enable you to control the flow of your program, making it responsive and adaptive.

## What Are Conditionals?

A conditional checks whether a given statement is true (non-zero) or false (0) and executes different blocks of code accordingly.

### Syntax:

```py
if <condition> then <statement>;
```

### Example:

```py
$note = 60; ## MIDI for C4
if $note > 64 then print("The note is above E4");
```

## Conditional Keywords

| Keyword   | Purpose                                         | Example                            |
| --------- | ----------------------------------------------- | ---------------------------------- |
| `if`      | Evaluates a condition and executes code if true | `if $x > 5 then print($x);`        |
| `else`    | Executes code if the `if` condition is false    | `else print("Condition false");`   |
| `else if` | Chains multiple conditions                      | `else if $x == 10 then print($x);` |

## Examples in Musical Contexts

### Transposing a Melody Based on a Condition

```py
$note = 62; ## MIDI for D4
if $note < 60 then (
    $note += 12; ## Transpose up an octave
    print($note);
) else (
    print("No transposition needed");
);
```

### Changing Dynamics Based on Pitch

```py
$note = C4;
if $note < C4 then print("pp");
else if $note == C4 then print("mf");
else print("ff");
```

### Conditional Blocks with Multiple Statements

You can group multiple statements using parentheses:

```py
$note = 70; ## MIDI for A#4
if $note > 64 then (
    print("High pitch detected");
    $note -= 12; ## Transpose down an octave
    print($note); ## Outputs: 58 (A#3)
);
```

## Boolean Logic in Conditions

_bell_ does not have a separate boolean type. Instead:

- 0 is treated as false.
- Any non-zero value is treated as true.

#### Example:

```py
$note = 0;
if $note then print("This will not run");
else print("False detected"); ## Outputs: False detected
```

## Logical Operators in Conditions

You can combine conditions using logical operators:

| Operator | Description                    | Example                     |
| -------- | ------------------------------ | --------------------------- |
| `and`    | Both conditions must be true   | `$note > 60 and $note < 72` |
| `or`     | At least one condition is true | `$note < 60 or $note > 72`  |
| `not`    | Negates a condition            | `not $note > 60`            |

## Examples of Logical Conditions in Music

### Checking a Range of Notes

```py
$note = 65; ## MIDI for F4
if $note > 60 and $note < 72 then print("Within range");
```

### Detecting Out-of-Bounds Notes

```py
$note = 75;
if $note < 60 or $note > 72 then print("Out of range");
```

## Combining `else if` for Multiple Conditions

You can chain conditions using else if to create decision trees.

### Example: Assigning Dynamics Based on Pitch Range

```py
$note = 62; ## D4
if $note < 60 then print("pp");
else if $note <= 64 then print("mf");
else print("ff");
```

## Exercises

### Exercise 1: Transposing Based on Range

1. Create a variable for a note in MIDI:

```py
$note = 67; ## G4
```

2. Use an `if` condition to check if the note is below 60.
3. If true, transpose the note up by an octave. Otherwise, print "Note is already in the desired range".

### Exercise 2: Assign Dynamics

1. Create a melody:
   ```py
   $melody = 58 60 62 65; ## MIDI notes
   ```
2. Loop through the melody and assign dynamics based on note height:
   - Notes below 60: "pp"
   - Notes between 60 and 64: "mf"
   - Notes above 64: "ff"

### Exercise 3: Rhythm Validation

1. Create a variable for a rhythmic duration:

```py
$duration = 1/8;
```

2. Use an if condition to check if the duration is shorter than 1/4. If true, print "Fast rhythm". Otherwise, print "Slow rhythm".

### Exercise 4: Conditional Melody Transformation

1. Create a melody:

```py
$melody = C4 D4 E4 F4 G4;
```

2. Use a loop and conditionals to:
   - Transpose notes below E4 (MIDI 64) up by an octave.
   - Leave higher notes unchanged.
3. Print the transformed melody.

## FAQ

### Q: Can I nest conditionals?

**A**: Yes, conditionals can be nested for more complex decision-making:

```py
$note = 62;
if $note > 60 then (
    if $note < 64 then print("D4 or E4");
);
```

### Q: What happens if none of the conditions are true?

**A**: If none of the conditions in an if-else chain are true and there’s no else block, nothing happens.

### Q: Can I use a single-line conditional?

**A**: Yes, you can write simple conditionals in one line:

```py
if $note > 64 then print("Above E4"); else print("Below or at E4");
```

---

Conditionals allow you to add dynamic behavior to your musical programs, whether it's transposing notes, assigning dynamics, or adjusting rhythms. With these tools, you can create responsive and adaptive compositions. Next, we’ll dive into loops, which let you repeat operations for iteration and pattern creation.
