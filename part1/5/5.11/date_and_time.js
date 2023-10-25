"use strict";

// creating the Date object

// using empty constructor

let date = new Date();
console.log(date);  // current local date time
// note that console.log(date) will always print date UTC+0

// using timestamp

date = new Date(5 * 24 * 60 * 60 * 1000);  // milliseconds from 1 jan 1970 00:00 have to be added (always UTC+0)
console.log(date);  // 5 days after 1 jan 1970

date = new Date(- 24 * 60 * 60 * 1000);  // negative timestamp for date before 1 jan 1970
console.log(date);  // 1 day before 1 jan 1970

// using string format: YYYY-MM-DDTHH:mm:ss.sssZ(+ or -)HH:mm   only YYYY is mandatory, all other are optional
date = new Date("2002-05-10");  // set local date time
console.log(date);


// giving different parameters for fields
date = new Date(2002, 4, 10);  // note that month while geting and setting is from 0 to 11
console.log(date);  // 2002-05-09T18:30:00.000Z  note that in string representation month are from 1 to 12 and this is UTC+0


// get methods

console.log(date.getFullYear());  // gives full (4 digit) year of that date
console.log(date.getUTCFullYear()); // gives same as above but not acording to local timezone (uses UTC+0)

console.log(date.getMonth());  // gives month of the date
console.log(date.getUTCMonth());  // gives month of the date (uses UTC+0)

console.log(date.getDate());  // gives current date (day)
console.log(date.getUTCDate());  // gives current date (day) (uses UTC+0)

console.log(date.getHours());  // gives number of hours passed
console.log(date.getUTCHours());  // gives number of hours passed (uses UTC+0)

console.log(date.getMinutes());  // gives number of minutes passed
console.log(date.getUTCMinutes());  // gives number of minutes passed (uses UTC+0)

console.log(date.getSeconds());  // gives number of seconds passed
console.log(date.getUTCSeconds());  // gives number of seconds passed (uses UTC+0)

console.log(date.getMilliseconds());  // gives number of milliseconds passed
console.log(date.getUTCMilliseconds());  // gives number of milliseconds passed (uses UTC+0)

console.log(date.getTime());  // gives timestamp of the date

console.log(date.getTimezoneOffset());  // gives difference in MINUTEs between local time and UTC+0  (UTC+0  -  local date)

console.log(date.getDay());  // gives day of the week 0-6 which represents sun-sat
console.log(date.getUTCDay());  // does same but for UTC+0

// setting methods
date = new Date(0);

date.setFullYear(2002);
console.log(date);  // 1 jan 2002

// it can also have other parameter for higer resolution of date
date.setFullYear(2002, 4, 10);  // can add more parameters
console.log(date);

// similarly all fields of date can be set with similiar methods

// they all also have the UTC conterparts
// Example
date.setUTCHours(23);
console.log(date.getHours());  // 4


// auto correction
date = new Date(2002, 4, 35, 0, 0, 0, 0);  // it will automatically calculate the correct date by calculating extra date time
console.log(date);

// so this is used to add time to date
// Example
date = new Date("2002-05-31");

date.setDate(date.getDate() + 1);  // adding 1 day
console.log(date);


// WARNING, due to above behaviour, it is possible for set methods to change other fields of date
date = new Date("2002-05-10");
date.setDate(32);
console.log(date);


// Date to number conversion will the number will be converted to timestamps
date = new Date("1970-01-01");
console.log(+date);  // 0


// Date.now() method will give current timestamp without creating a Date object
// so the Date.now() is faster then (new Date()).getTime()

console.log(Date.now());


// it can be used for benchmarking
// mesuring the performence of a function, operation or anything

// below function will give time taken to run a function for 100000 times
// we run it this much time to have a significant time and to get rid of any fluctuations due to other factors
function timeTaken(f){
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
}

function diffSubtract(date1, date2) {
    return date2 - date1;
}
  

function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
}


// heating run
// because javascript engines only enable the optimizations when the code it repetead
timeTaken(diffSubtract);
timeTaken(diffGetTime);

let time1 = 0;
let time2 = 0;

// we will see the total time taken by the functions for 10 times to avoid effects due to other factors
for (let i = 0; i < 10; i++) {
    time1 += timeTaken(diffSubtract);
    time2 += timeTaken(diffGetTime);
}

console.log(time1);
console.log(time2);




// Date.parse(str) will take the date in string format as mentioned above and returns timestamp of it
console.log(Date.parse(new Date("2002-05-10")));