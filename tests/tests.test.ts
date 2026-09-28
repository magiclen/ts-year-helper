import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
    getDaysInMonth,
    getDaysInYear,
    isLeapYear,
    isValidBCYear,
    isValidDate,
    isValidMonth,
    isValidYear,
} from "../src/index.ts";

describe("isLeapYear", () => {
    it("1999 isn't a leap year", () => {
        assert.equal(isLeapYear(1999), false);
    });

    it("2000 is a leap year", () => {
        assert.equal(isLeapYear(2000), true);
    });

    it("2001 isn't a leap year", () => {
        assert.equal(isLeapYear(2001), false);
    });

    it("2002 isn't a leap year", () => {
        assert.equal(isLeapYear(2002), false);
    });

    it("2003 isn't a leap year", () => {
        assert.equal(isLeapYear(2003), false);
    });

    it("2004 is a leap year", () => {
        assert.equal(isLeapYear(2004), true);
    });

    it("2100 isn't a leap year", () => {
        assert.equal(isLeapYear(2100), false);
    });

    it("0 (1 BC) is a leap year", () => {
        assert.equal(isLeapYear(0), true);
    });

    it("-4 (5 BC) is a leap year", () => {
        assert.equal(isLeapYear(-4), true);
    });

    it("-100 (101 BC) isn't a leap year", () => {
        assert.equal(isLeapYear(-100), false);
    });

    it("-400 (401 BC) is a leap year", () => {
        assert.equal(isLeapYear(-400), true);
    });
});

describe("getDaysInMonth", () => {
    it("1999-01 has 31 days", () => {
        assert.equal(getDaysInMonth(1999, 1), 31);
    });

    it("1999-02 has 28 days", () => {
        assert.equal(getDaysInMonth(1999, 2), 28);
    });

    it("1999-03 has 31 days", () => {
        assert.equal(getDaysInMonth(1999, 3), 31);
    });

    it("1999-04 has 30 days", () => {
        assert.equal(getDaysInMonth(1999, 4), 30);
    });

    it("1999-12 has 31 days", () => {
        assert.equal(getDaysInMonth(1999, 12), 31);
    });

    it("1999-11 has 30 days", () => {
        assert.equal(getDaysInMonth(1999, 11), 30);
    });

    it("2000-01 has 31 days", () => {
        assert.equal(getDaysInMonth(2000, 1), 31);
    });

    it("2000-02 has 29 days", () => {
        assert.equal(getDaysInMonth(2000, 2), 29);
    });

    it("2000-03 has 31 days", () => {
        assert.equal(getDaysInMonth(2000, 3), 31);
    });

    it("2000-04 has 30 days", () => {
        assert.equal(getDaysInMonth(2000, 4), 30);
    });

    it("2000-12 has 31 days", () => {
        assert.equal(getDaysInMonth(2000, 12), 31);
    });

    it("2000-11 has 30 days", () => {
        assert.equal(getDaysInMonth(2000, 11), 30);
    });

    it("February in a leap year has 29 days", () => {
        assert.equal(getDaysInMonth(true, 2), 29);
    });

    it("February in a common year has 28 days", () => {
        assert.equal(getDaysInMonth(false, 2), 28);
    });

    it("throws a RangeError for month 13", () => {
        assert.throws(() => getDaysInMonth(2000, 13), RangeError);
    });
});

describe("getDaysInYear", () => {
    it("1999 has 365 days", () => {
        assert.equal(getDaysInYear(1999), 365);
    });

    it("2000 has 366 days", () => {
        assert.equal(getDaysInYear(2000), 366);
    });

    it("a leap year has 366 days", () => {
        assert.equal(getDaysInYear(true), 366);
    });

    it("a common year has 365 days", () => {
        assert.equal(getDaysInYear(false), 365);
    });
});

describe("isValidYear", () => {
    it("-9999, 0 and 9999 are valid", () => {
        assert.equal(isValidYear(-9999), true);
        assert.equal(isValidYear(0), true);
        assert.equal(isValidYear(9999), true);
    });

    it('-10000, 10000, 2000.5 and "2000" are invalid', () => {
        assert.equal(isValidYear(-10000), false);
        assert.equal(isValidYear(10000), false);
        assert.equal(isValidYear(2000.5), false);
        assert.equal(isValidYear("2000"), false);
    });
});

describe("isValidBCYear", () => {
    it("1 and 9999 are valid", () => {
        assert.equal(isValidBCYear(1), true);
        assert.equal(isValidBCYear(9999), true);
    });

    it("0 and 10000 are invalid", () => {
        assert.equal(isValidBCYear(0), false);
        assert.equal(isValidBCYear(10000), false);
    });
});

describe("isValidMonth", () => {
    it("1 and 12 are valid", () => {
        assert.equal(isValidMonth(1), true);
        assert.equal(isValidMonth(12), true);
    });

    it('0, 13 and "1" are invalid', () => {
        assert.equal(isValidMonth(0), false);
        assert.equal(isValidMonth(13), false);
        assert.equal(isValidMonth("1"), false);
    });
});

describe("isValidDate", () => {
    it("2000-02-29 is valid", () => {
        assert.equal(isValidDate(2000, 2, 29), true);
    });

    it("1999-02-29 is invalid", () => {
        assert.equal(isValidDate(1999, 2, 29), false);
    });

    it("2000-04-31 is invalid", () => {
        assert.equal(isValidDate(2000, 4, 31), false);
    });
});
