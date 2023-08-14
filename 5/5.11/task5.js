/*
Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.

Parameters:

year – four-digits year, for instance 2012.
month – month, from 0 to 11.
For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb).
*/

function getLastDayOfMonth(year, month){
    let date = new Date(year, month);

    date.setDate(29);
    if (date.getMonth() != month) return 28;

    date.setDate(30)
    if (date.getMonth() != month) return 29;

    date.setDate(31);
    if (date.getMonth() != month) return 30;

    date.setDate(32);
    if (date.getMonth() != month) return 31;
}

// cheking

console.log(getLastDayOfMonth(2012, 1))  // 29 (leap year, Feb).