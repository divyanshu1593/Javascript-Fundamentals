/*
Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.

For instance, if now is 23:00, then:

getSecondsToTomorrow() == 3600
P.S. The function should work at any day, the “today” is not hardcoded.
*/

function getSecondsToTomorrow(){
    todayEnd = new Date();
    todayEnd.setDate((new Date()).getDate() + 1);
    todayEnd.setHours(0, 0, 0, 0);
    todayEnd.setMilliseconds(-1);

    return Math.round((todayEnd.getTime() - Date.now()) / 1000);
}

// cheking

console.log(getSecondsToTomorrow());