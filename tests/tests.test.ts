import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { getDaysInMonth, getDaysInYear, isLeapYear } from "../src/index.ts";

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
});

describe("getDaysInYear", () => {
    it("1999 has 365 days", () => {
        assert.equal(getDaysInYear(1999), 365);
    });

    it("2000 has 366 days", () => {
        assert.equal(getDaysInYear(2000), 366);
    });
});
