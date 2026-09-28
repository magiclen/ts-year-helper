year-helper
==========

[![CI](https://github.com/magiclen/ts-year-helper/actions/workflows/ci.yml/badge.svg)](https://github.com/magiclen/ts-year-helper/actions/workflows/ci.yml)

This package provides some useful functions to deal with dates especially related to leap years.

## Usage

```typescript
import { getDaysInMonth, getDaysInYear, isLeapYear } from "year-helper";

console.log(isLeapYear(2000)); // true
console.log(getDaysInMonth(2000, 2)); // 29
console.log(getDaysInYear(2000)); // 366
```

If you already know whether the year is a leap year, pass a boolean instead of the year.

```typescript
console.log(getDaysInMonth(true, 2)); // 29
console.log(getDaysInYear(false)); // 365
```

### Years

Years follow the proleptic Gregorian calendar and use astronomical year numbering, so `0` is 1 BC and `-1` is 2 BC. To use a BC year `n`, pass `1 - n`.

```typescript
console.log(isLeapYear(0)); // true (1 BC)
console.log(isLeapYear(1 - 5)); // true (5 BC)
```

### Validation

The validation functions accept any value, so you can use them to check user input directly. They also narrow the type in TypeScript.

```typescript
import { isValidBCYear, isValidDate, isValidMonth, isValidYear } from "year-helper";

console.log(isValidYear(2000)); // true, an integer from -9999 to 9999
console.log(isValidBCYear(1)); // true, an integer from 1 to 9999
console.log(isValidMonth(13)); // false, an integer from 1 to 12
console.log(isValidDate(2000, 2, 29)); // true
console.log(isValidDate(1999, 2, 29)); // false
```

### Errors

`isLeapYear`, `getDaysInMonth`, and `getDaysInYear` throw a `RangeError` when the year is not an integer, or when the month is not an integer from `1` to `12`.

```typescript
getDaysInMonth(2000, 13); // throws a RangeError
```

## Migrating from 0.3.x

- Node.js 24 or later is required.
- `isLeapYear`, `getDaysInMonth`, and `getDaysInYear` throw a `RangeError` for an invalid year or month, instead of returning a wrong result. For example, `getDaysInMonth(2000, 13)` returned `29` before.
- `isValidYear`, `isValidBCYear`, and `isValidMonth` accept any value instead of only numbers.
- `isValidDate` is added.

## Usage for Browsers

[Source](demo.html)

[Demo Page](https://rawcdn.githack.com/magiclen/ts-year-helper/master/demo.html)

## License

[MIT](LICENSE)
