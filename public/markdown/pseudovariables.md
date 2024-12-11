# Appendix II: Pseudo-Variables

Pseudo-variables in _bell_ serve as special, predefined variables primarily designed for integration with the _bach_ library within the _Max_ environment. Unlike standard variables, pseudo-variables are reserved keywords with specific behaviors and uses. Here, we delve into their syntax, types, and application.

---

## Relevance to Tutorials

Since pseudo-variables are specific to the _bach_ integration in _Max_, they are not crucial to understand when working with standalone applications like _bellplay~_. If you are working exclusively in _bellplay~_, you can safely ignore the topic of pseudo-variables. However, for users exploring _bach_ within _Max_, understanding pseudo-variables is beyond essential.

---

## What Are Pseudo-Variables?

Pseudo-variables represent a subset of reserved keywords in _bell_. They are mainly _read-only_ (except for a few _write-only_ types) and are not used in standalone _bell_ applications like _bellplay~_, but rather in scenarios involving _bach_ programming.

Pseudo-variables allow the user to interact with specific inlets and outlets of the `bach.eval` object in _Max_, enabling data exchange between _bell_ and the _Max_ environment.

---

## Syntax

The syntax for pseudo-variables follows this format:
`$<type><id>`

- `<type>`: The type of inlet or outlet the pseudo-variable represents.
- `<id>`: An integer corresponding to the inlet or outlet number.

### Examples

```py
$f1;  ## Represents float inlet 1
$x3;  ## Represents untyped inlet 3
$do2 = null ## Represents direct untyped outlet 2
```

---

## Types of Pseudo-Variables

### Read-Only Pseudo-Variables

These pseudo-variables cannot be assigned new values. They reflect the current state of the specified inlet.

| Type | Description          | Example |
| ---- | -------------------- | ------- |
| `i`  | Integer inlet        | `$i1`   |
| `f`  | Float inlet          | `$f2`   |
| `r`  | Rational inlet       | `$r3`   |
| `p`  | Pitch inlet          | `$p4`   |
| `l`  | List inlet           | `$l1`   |
| `x`  | Untyped inlet        | `$x2`   |
| `dx` | Direct untyped inlet | `$dx3`  |

### Write-Only Pseudo-Variables

These pseudo-variables allow the assignment of values that are then sent to specified outlets.

| Type | Description           | Example |
| ---- | --------------------- | ------- |
| `o`  | Untyped outlet        | `$o1`   |
| `do` | Direct untyped outlet | `$do3`  |

---

## Behavior of Pseudo-Variables

- **Read-Only Behavior**: A read-only pseudo-variable retrieves the current value at the specified inlet. For example, `$f2` represents the incoming `float` value at inlet 2.
- **Write-Only Behavior**: Write-only pseudo-variables accept assigned values, which are routed to the specified outlet. For instance, `$o1 = 42` sends the value `42` to outlet 1.

### Example: Inlets and Outlets

```py
print($f2); ## Print the float value from inlet 2
$o1 = 60 ## Send the value 60 to outlet 1
```

---

## Summary

- **Syntax**: `$<type><id>` (e.g., `$f2`, `$o1`).
- **Types**: Read-only (e.g., `$f1`, `$r2`) or write-only (e.g., `$o1`, `$do2`).
- **Usage**: Primarily for data exchange in _bach_.
- **Not Required**: For standalone _bellplay~_ usage.

For further details on pseudo-variables in _bach_, refer to its official documentation.
