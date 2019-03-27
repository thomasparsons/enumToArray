# enumToArray
`enumToArray` is a simpe function used to convert a TypeScript Enum to an Array

## How To Use

Define an Enum somewhere, i.e.

```
enum Character {
  JERRY = "jerry",
  GEORGE = "george",
  KRAMER = "kramer",
  ELAINE = "elaine"
}

export default Character
```

When you want to use the values as an array within your code, for example within a `<Select />` component, pass the Enum into the function, and those values can then be used like any other array.

```
import character from "./enums/character"
import enumToArray from "./enumToArray"

const arr = enumToArray(character)

console.log(arr) // ["jerry", "george", "kramer", "elaine"]

```

Ammend the function to fit your needs, i.e. an Object of values, instead of the array of strings, etc.

## Why do this?

Leveraging Enums can be a good way of keeping your code up to date, coupling code in this instance can reduce maintenance.
