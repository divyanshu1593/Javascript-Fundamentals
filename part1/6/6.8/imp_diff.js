"use strict";

// Example

let firstTime = true;

function func(){
    if (firstTime){
        let start = Date.now();
        while (Date.now() - start < 10000){}
        firstTime = false;
    }
}

let prev = Date.now();

let timerId = setInterval(() => {
    console.log(`time taken from previous call: ${(Date.now() - prev)/1000}s`);
    prev = Date.now();
    
    // for some resons let say the first run took more time than the interval
    func();
}, 2000);

setTimeout(() => {
    clearInterval(timerId);
}, 20000);


// so in above code the time taken by the func in first time is greater than the interval itself
// so when the function stop executing the first time, the next callback is executed imediatly
// and then it starts working normally

// NOTE that here even if the time taken by the func is more than intervals of many function calls but it only the function call after the long running function is called immediatly
// this happens because the other function were not yet scheduled

// so the above code work same as following code:

// let timerId = setTimeout(function temp(){
//     timerId = setTimeout(temp, 2000);
//     console.log(`time taken from previous call: ${(Date.now() - prev)/1000}s`);
//     prev = Date.now();
    
//     // for some resons let say the first run took more time than the interval
//     func();
// }, 2000);

// setTimeout(() => {
//     clearInterval(timerId);
// }, 20000);


// but with nested setTimeout we can also do it so that the interval between two function call is exactly 2s
// i.e. the time starts counting after the function call is done executing

// let prev2 = Date.now();

// let timerId2 = setTimeout(function temp(){
//     console.log(`time taken from previous call: ${(Date.now() - prev)/1000}s`);
//     prev = Date.now();

//     // for some resons let say the first run took more time than the interval
//     func();

//     timerId2 = setTimeout(temp, 2000);
// }, 2000);

// setTimeout(() => {
//     clearInterval(timerId2);
// }, 20000);