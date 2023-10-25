"use strict";

// function are objects

// so function can also have its properties
// Example

function func(){
    console.log('inside func');
}

func.key = 'value';  // adding a new property to the function object
console.log(func.key);  // value

// we can use function custom properties as alternative for clousers
// for example insted of using following
/*
function makeCounter() {
  count = 0

  function counter() {
    return count++;
  };

  return counter;
}
*/

// we can do it like following

function makeCounter(){

    function counter() {
        return counter.count++;
    }

    counter.count = 0;

    return counter;
}

let counter = makeCounter();

console.log(counter());  // 0
console.log(counter());  // 1


// predifined properties of a function

// name is a property of function
// name property stores the name of the function
function func2(){
    console.log('inside func2');
}

console.log(func2.name);  // func2

// the name is assigened at the time of declaration
// and even if the value is transfered to other function the name property will remain the same
let otherFunc = func2;
console.log(otherFunc.name);  // still func2

// func2.name = "somethingElse"  // error because name is const

// in the case of function expression the name is taken from the variable it is first assigned to
// Example
let func3 = function (){
    console.log('inside func3');
}

console.log(func3.name);


// in the case where the name of function can't be evaluated the name property stores empty string
// Examples
let functionName = (function (){
    console.log('this function does not have a name');
}).name;

console.log(functionName === '');  // true

let arr = [function (){}];

console.log(arr[0].name === '');  // true


// length property of function obeject
// it stores the number of parameters the function has (except rest parameters)
// Example

function func4(para1, para2, ...otherParas){
    console.log('inside func4');
}

console.log(func4.length);  // 2