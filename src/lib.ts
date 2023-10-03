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
    // eslint-disable-next-line @typescript-eslint/unified-signatures
    (leapYear: boolean, month: number): number;
} = (yearOrIsLeapYear: number | boolean, month: number): number => {
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
        default: // case 2
        {
            let leapYear: boolean;

            if (typeof yearOrIsLeapYear === "number") {
                leapYear = isLeapYear(yearOrIsLeapYear);
            } else {
                leapYear = yearOrIsLeapYear;
            }

            return leapYear ? 29 : 28;
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
    // eslint-disable-next-line @typescript-eslint/unified-signatures
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
 * Validate a year in `number`. A valid year should be an integer between `-9999` and `9999`.
 */
export const isValidYear = (year: number): boolean => {
    return Number.isInteger(year) && year >= -9999 && year <= 9999;
};

/**
 * Validate a BC year in `number`. A valid BC year should be an integer between `1` and `9999`.
 */
export const isValidBCYear = (year: number): boolean => {
    return Number.isInteger(year) && year >= 1 && year <= 9999;
};

export type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/**
 * Validate a month in `number`. A valid month should be an integer between `1` and `12`.
 */
export const isValidMonth = (month: number): month is MonthNumber => {
    return Number.isInteger(month) && month >= 1 && month <= 12;
};
