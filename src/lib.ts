/**
 * Determine whether a year is a leap year or not.
 *
 * A year is a leap year if following conditions are satisfied:
 *
 * * Year is multiple of 400.
 * * Year is multiple of 4 and not multiple of 100.
 *
 * @param year **unchecked, a year must be an integer**
 */
export const isLeapYear = (year: number): boolean => {
    // eslint-disable-next-line no-extra-parens
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

export const getDaysInMonth: {
    /**
     * Calculate how many days in a specific month.
     *
     * @param year **unchecked, a year must be an integer**
     * @param month **unchecked, a month must be an integer between `1` and `12`**
     */
    (year: number, month: number): number;
    /**
     * Calculate how many days in a month.
     *
     * @param month **unchecked, a month must be an integer between `1` and `12`**
     */
    (leapYear: boolean, month: number): number;
} = (yearOrIsLeapYear: number | boolean, month: number): number => {
    if (month === 2) {
        let leapYear: boolean;

        if (typeof yearOrIsLeapYear === "number") {
            leapYear = isLeapYear(yearOrIsLeapYear);
        } else {
            leapYear = yearOrIsLeapYear;
        }

        return leapYear ? 29 : 28;
    } else {
        const isOddMonth = month & 1;

        if (month >= 8) {
            return isOddMonth ? 30 : 31;
        } else {
            return isOddMonth ? 31 : 30;
        }
    }
};

export const getDaysInYear: {
    /**
     * Calculate how many days in a year.
     *
     * @param year **unchecked, a year must be an integer**
     */
    (year: number): number;
    /**
     * Calculate how many days in a year.
     */
    (leapYear: boolean): number;
} = (yearOrIsLeapYear: number | boolean): number => {
    let leapYear: boolean;

    if (typeof yearOrIsLeapYear === "number") {
        leapYear = isLeapYear(yearOrIsLeapYear);
    } else {
        leapYear = yearOrIsLeapYear;
    }

    return leapYear ? 366 : 365;
};

/**
 * Validate a year in `number`. A valid year should be an integer between `0` to `9999`.
 */
export const isValidYear = (year: number): boolean => {
    return Number.isInteger(year) && year >= 0 && year <= 9999;
};

export type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/**
 * Validate a month in `number`. A valid month should be an integer between `1` to `12`.
 */
export const isValidMonth = (month: number): month is MonthNumber => {
    return Number.isInteger(month) && month >= 1 && month <= 12;
};
