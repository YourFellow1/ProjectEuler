/**
 * prob 19: How many sundays from 1 jan 1901 to 31 dec 2000 fell on the first of the month?
 * 
 */

// scratch notes. Need monStart, and monthLength.

function getMonthLength(month, year) {
    let monthLength = 0;

    if (month === 2) {
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
            monthLength = 29;
        } else {
            monthLength = 28;
        }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        monthLength = 30;
    } else {
        monthLength = 31;
    }
}

function addWeekDay(weekday, monthLength) {
    let add = 0;
    if (monthLength === 31) {
        add = 3;
    } else if (monthLength === 30) {
        add = 2;
    } else {    
        add = 1;
    }

    weekday += add;
    if (weekday > 7) {
        weekday -= 7;
    }
    return weekday;
}

let weekDay = 2; // 1 jan 1901 was a tuesday.
let month = 1;
let year = 1901;
let sundays = 0;

for (year = 1901; year <= 2000; year++) {
    for (month = 1; month <= 12; month++) {
        let monthLength = getMonthLength(month, year);
        weekDay = addWeekDay(weekDay, monthLength);

        if (weekDay === 7) {
            sundays++;
        }
    }
}

console.log(`Sundays: ${sundays}`);

// Answer = 171. Correct. Well done getting all the factors!