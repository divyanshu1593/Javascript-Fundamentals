"use strict";

// NOTE: there is always a possibility that some minors delays (some milliseconds) can occur due to resons

// setTimeout will take a function as an argument and run it after some delay
// Example

setTimeout(() => {
    console.log('yo!, after 1s');
}, 1000);

// NOTE: only the functions value needs to be passed, function should NOT be called!

// by default the delay is 0s.
// Example

setTimeout(() => {
    console.log('this will be printed after 0s');
});

// we can also have a function with parameters, the arguments can be added as parameters of setTimeout after function and delay
// Example

setTimeout((para1, para2) => {
    console.log(para1, para2);
}, 1500, 1, 2);


// we can also have 'code' in string form instead of callback (NOT recommended)
// this does not work in node js (only works in browsers)

// setTimeout('console.log(5)', 2000);

// setTimeout returns a Timeout Object (a number in case of browser)
let timerId = setTimeout(() => {});

console.log(timerId);

// clearTimeout(timeout object) can be used to clear the function before its execution, so that scheduled function will not run

let timerObject = setTimeout(() => {
    console.log('this function will not get executed');
}, 2500);

clearTimeout(timerObject);


// after the specified delay, setTimeout will add the function to calendar queue
// when the main thread will get free (like after executing the main script), it will start running the functions from calender queue
// so main script always run before the scheduled function (even if delay is zero)

// this can be used to run the code that should be run after the main script is executed
// Example

setTimeout(() => {
    // some code that needs to run after the main script
});


// setInterval works similar to setTimout but it will repeatedly run the function after the specified delay

let intervalTimerObject = setInterval(() => {
    console.log('---------------------------------');
    console.log('this will run after every 1s');
    console.log('---------------------------------');
}, 1000);

// clearInterval works same as clearTimeout

setTimeout(() => {
    clearInterval(intervalTimerObject);
    console.log('setInterval function is stoped!');
}, 10000);