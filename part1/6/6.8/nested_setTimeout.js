"use strict";

// nested setTimeout can be used to do the same thing as setInterval
// Example

let timerObject = setTimeout(function func(){  // Named Function Expression
    console.log('--------------------------------');
    console.log('this will run after every 1s');
    console.log('--------------------------------');

    timerObject = setTimeout(func, 1000);
}, 1000);

setTimeout(() => {
    clearTimeout(timerObject);
    console.log('the function repeating after every 1s is stoped!');
}, 10000);


// nested setTimeout is more flexible than setInterval
// Example

// we can have different delays for different situations

let oneSecDelay = true;
let cnt = 0;

let timerId = setTimeout(function func(){
    console.log(cnt)
    console.log('....................................................................');
    console.log('....................................................................');
    console.log('this wil run in every 1s and then after every 2s (keeps switching)');
    console.log('....................................................................');
    console.log('....................................................................');
    if (cnt == 10){
        console.log('stoped!');
        return ;
    }  // note that we stoped it after it had been run 10 times
    cnt += 1;

    if (oneSecDelay){
        oneSecDelay = false;
        timerId = setTimeout(func, 1000);
        return ;
    }
    oneSecDelay = true;
    timerId = setTimeout(func, 2000);
});