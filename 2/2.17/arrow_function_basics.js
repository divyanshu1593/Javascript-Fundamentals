"use strict";

// arrow function is a shorter way of writing function expression
// Example

let func = (a ,b) => a+b;
console.log(func(1, 5));  // 6

// the above is same as :

let func2 = function(a, b){
    return a+b;
};
console.log(func(5, 5));  // 10

// using single lined arrow function, we dont need to write return, it will always evaluate the expression and return its value

// multiline arrow function
// multiline arrow function is done by adding {} to the right side of the =>
// multiline arrow function does not return be default so we have to return value explicitly
// Example
let func3 = () => {
    console.log("This is a multilined arrow function");
    console.log("The second line");
};
func3();

// we does not even need to use parantheses if there is exactly one argument
// Example
let square = n => n*n;
console.log(square(5));  // 25