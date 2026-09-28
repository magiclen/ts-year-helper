/** A month number, from `1` (January) to `12` (December). */
export type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/**
 * Determine whether a year is a leap year in the proleptic Gregorian calendar.
 *
 * A year is a leap year if it is a multiple of 400, or a multiple of 4 but not a multiple of 100.
 *
 * Years use astronomical year numbering, so `0` is 1 BC and `-1` is 2 BC. To check a BC year `n`,
 * pass `1 - n`.
 *
 * @param year An integer year.
 * @throws {RangeError} If `year` is not an integer.
 */
export const isLeapYear = (year: number): boolean => {
    if (!Number.isInteger(year)) {
        throw new RangeError(`The year must be an integer: ${year}`);
    }

    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

// Check `typeof` against boolean first so that a wrong type like a string goes to `isLeapYear` and throws.
const toLeapYear = (yearOrLeapYear: number | boolean): boolean =>
    typeof yearOrLeapYear === "boolean" ? yearOrLeapYear : isLeapYear(yearOrLeapYear);

export const getDaysInMonth: {
    /**
     * Calculate how many days a month of a year has.
     *
     * @param year An integer year. See `isLeapYear` for how years are numbered.
     * @param month An integer from `1` to `12`.
     * @throws {RangeError} If `year` is not an integer, or `month` is not an integer from `1` to
     *   `12`.
     */
    (year: number, month: number): number;
    /**
     * Calculate how many days a month has in a leap year or a common year.
     *
     * @param leapYear Whether the year is a leap year.
     * @param month An integer from `1` to `12`.
     * @throws {RangeError} If `month` is not an integer from `1` to `12`.
     */
    (leapYear: boolean, month: number): number;
} = (yearOrLeapYear: number | boolean, month: number): number => {
    const leapYear = toLeapYear(yearOrLeapYear);

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            return leapYear ? 29 : 28;
        default:
            throw new RangeError(`The month must be an integer from 1 to 12: ${month}`);
    }
};

export const getDaysInYear: {
    /**
     * Calculate how many days a year has.
     *
     * @param year An integer year. See `isLeapYear` for how years are numbered.
     * @throws {RangeError} If `year` is not an integer.
     */
    (year: number): number;
    /**
     * Calculate how many days a leap year or a common year has.
     *
     * @param leapYear Whether the year is a leap year.
     */
    (leapYear: boolean): number;
} = (yearOrLeapYear: number | boolean): number => (toLeapYear(yearOrLeapYear) ? 366 : 365);

/**
 * Validate a year. A valid year is an integer from `-9999` to `9999`.
 *
 * Years use astronomical year numbering, so `0` is 1 BC and `-1` is 2 BC.
 */
export const isValidYear = (year: unknown): year is number =>
    typeof year === "number" && Number.isInteger(year) && year >= -9999 && year <= 9999;

/**
 * Validate a BC year. A valid BC year is an integer from `1` to `9999`.
 *
 * A BC year counts backward from 1 BC, so it is a positive number, such as `1` for 1 BC. To use it
 * with other functions, convert it to an astronomical year by `1 - bcYear`.
 */
export const isValidBCYear = (year: unknown): year is number =>
    typeof year === "number" && Number.isInteger(year) && year >= 1 && year <= 9999;

/** Validate a month. A valid month is an integer from `1` to `12`. */
export const isValidMonth = (month: unknown): month is MonthNumber =>
    typeof month === "number" && Number.isInteger(month) && month >= 1 && month <= 12;

/**
 * Validate a date. A valid date has a valid year, a valid month, and a day of the month that exists
 * in that month.
 *
 * @param year A year which should pass `isValidYear`.
 * @param month A month which should pass `isValidMonth`.
 * @param date A day of the month, like the value of `Date.prototype.getDate()`.
 */
export const isValidDate = (year: unknown, month: unknown, date: unknown): boolean =>
    isValidYear(year) &&
    isValidMonth(month) &&
    typeof date === "number" &&
    Number.isInteger(date) &&
    date >= 1 &&
    date <= getDaysInMonth(year, month);
