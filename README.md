year-helper
==========

[![CI](https://github.com/magiclen/ts-year-helper/actions/workflows/ci.yml/badge.svg)](https://github.com/magiclen/ts-year-helper/actions/workflows/ci.yml)

This package provides some useful functions to deal with dates especially related to leap years.

## Usage

```typescript
import { isLeapYear, getDaysInMonth, getDaysInYear } from "year-helper";

console.log(isLeapYear(2000));        // true
console.log(getDaysInMonth(2000, 2)); // 29
console.log(getDaysInYear(2000));     // 366
```

## Usage for Browsers

[Source](demo.html)

[Demo Page](https://rawcdn.githack.com/magiclen/ts-year-helper/master/demo.html)

## License

[MIT](LICENSE)