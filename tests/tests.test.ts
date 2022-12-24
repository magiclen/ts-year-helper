import { isLeapYear, getDaysInMonth, getDaysInYear } from "../src/lib";

describe("isLeapYear", () => {
    it("1999 isn't a leap year", () => {
        expect(isLeapYear(1999)).toEqual(false);
    });

    it("2000 is a leap year", () => {
        expect(isLeapYear(2000)).toEqual(true);
    });

    it("2001 isn't a leap year", () => {
        expect(isLeapYear(2001)).toEqual(false);
    });

    it("2002 isn't a leap year", () => {
        expect(isLeapYear(2002)).toEqual(false);
    });

    it("2003 isn't a leap year", () => {
        expect(isLeapYear(2003)).toEqual(false);
    });

    it("2004 is a leap year", () => {
        expect(isLeapYear(2004)).toEqual(true);
    });

    it("2100 isn't a leap year", () => {
        expect(isLeapYear(2100)).toEqual(false);
    });
});

describe("getDaysInMonth", () => {
    it("1999-01 has 31 days", () => {
        expect(getDaysInMonth(1999, 1)).toEqual(31);
    });

    it("1999-02 has 28 days", () => {
        expect(getDaysInMonth(1999, 2)).toEqual(28);
    });

    it("1999-03 has 31 days", () => {
        expect(getDaysInMonth(1999, 3)).toEqual(31);
    });

    it("1999-04 has 30 days", () => {
        expect(getDaysInMonth(1999, 4)).toEqual(30);
    });

    it("1999-12 has 31 days", () => {
        expect(getDaysInMonth(1999, 12)).toEqual(31);
    });

    it("1999-11 has 30 days", () => {
        expect(getDaysInMonth(1999, 11)).toEqual(30);
    });

    it("2000-01 has 31 days", () => {
        expect(getDaysInMonth(2000, 1)).toEqual(31);
    });

    it("2000-02 has 29 days", () => {
        expect(getDaysInMonth(2000, 2)).toEqual(29);
    });

    it("2000-03 has 31 days", () => {
        expect(getDaysInMonth(2000, 3)).toEqual(31);
    });

    it("2000-04 has 30 days", () => {
        expect(getDaysInMonth(2000, 4)).toEqual(30);
    });

    it("2000-12 has 31 days", () => {
        expect(getDaysInMonth(2000, 12)).toEqual(31);
    });

    it("2000-11 has 30 days", () => {
        expect(getDaysInMonth(2000, 11)).toEqual(30);
    });
});

describe("getDaysInYear", () => {
    it("1999 has 365 days", () => {
        expect(getDaysInYear(1999)).toEqual(365);
    });

    it("2000 has 366 days", () => {
        expect(getDaysInYear(2000)).toEqual(366);
    });
});
