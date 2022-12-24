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

```html
<script src="https://cdn.jsdelivr.net/gh/magiclen/ts-year-helper/dist/year-helper.min.js"></script>
<script>
    console.log(YearHelper.isLeapYear(2000));        // true
    console.log(YearHelper.getDaysInMonth(2000, 2)); // 29
    console.log(YearHelper.getDaysInYear(2000));     // 366
</script>
```

## License

[MIT](LICENSE)