# Appendix IV: Reserved Keywords

In addition to the built-in functions in the [reference documentation](/#/reference), and [pseudo-variables](/#/pseudovariables), the following are reserved keywords in _bell_.

## Constants

- `pi`: value of π (3.14159)
- `null`: absence of a value.
- `nil`: short-hand for `[]` or `[null]`.

## Loops

- `while`: keyword for initializing `while` loops.
- `for`: keyword for initializing `for` loops.
- `in`: keyword to point to a _llll_ to be iterated through in `for` loops.
- `with`: clause to control the iteration behavior of a `for` loop.
- `as`: clause to set a condition that must be met for a `for` loop to continue iterating.
- `do`: only preserves the value from the evaluation of the loop's body on its last iteration.
- `collect`: preserves the value from the evaluation of the loop's body on each iteration.

## Conditionals

- `if`: keyword for initializing conditional statements.
- `then`: keyword for specifying code to execute when a conditional statement is true.
- `else`: keyword for specifying code to execute when a conditional statement is false.

## Variables Declaration

- `init`: initializes a local variable to be used with `keep` and `unkeep`.
- `keep`: keeps current state of local variable.
- `unkeep`: unkeeps current state of local variable.
