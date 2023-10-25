"use strict";

// conditional statemens

// if statement
// the expresion is evaluated and converted to boolean
// if it is true then the code inside if block is executed
if (5 > 3){
    console.log("This code got executed because the condition was true");
}

// else clause
// if the condition is evaluated to be false than code in else block is executed
if (false){
    console.log("this code block will not be executed");
}
else{
    console.log("This block of code got executed because the condition in if was false");
}

// else if ladder
// Example
let x = 15;
if (x < 0){
    console.log(`${x} is a negative number`);
}
else if (x == 0){
    console.log(`${x} is eaqual to zero`);
}
else{
    console.log(`${x} is a positive number`);
}

// ternary operator ?
// syntax: condition? return if true : return if false
// Example
let something = (x > 0) ? `${x} is positive` : `${x} is not positive`;
console.log(x);  // 15 is positive

// it can be chained like following
something = (x < 0) ? `${x} is a negative number` :
            (x == 0) ? `${x} is equal to zero` :
            `${x} is a positive number`;
console.log(something);