"use strict";

// functions
// Example
// function should be named appropriatly
// here a and b are parameter
function sum(a, b){    // function keyword is used to declare functions then its name (sum here) is written and then parameters in parantheses are given
    return a + b;   // returning a value
}

// calling a function
let ans = sum(1,2);  // here 1 and 2 are arguments

let x = 0;  // a global variable beacuse it is declared outside of any functions
function func(){
    x = 5;  // will modify the global x
}
func();
console.log(x);  // 5 because func has modified global x

let y = 0;  // global variable
function func2(){
    let y = 5;  // a new local variable will be declared with same name as global variable so it will SHADOW the global variable
}
func2();
console.log(y);  // 0 because global variable is not changed inside the function


// returning undefined
function func3(){
    return ;
}

function func4(){
    // does not return anything
}

function func5(){
    return undefined;
}

console.log(func3(), func4(), func5());  // undefined undefined undefined


// default parameters
function func6(para1, para2 = "Second default value", para3 = "Third default value"){
    console.log(para1, para2, para3);
}

func6();  // undefined Second default value first default value
func6(5, undefined, 10);  // 5 Second default value 10 (because giving indefined as a arguement will also invoke the default value)

// adding default value later inside the function
function func7(something){
    // after some code ...
    if (something === undefined){
        something = "calculated default value";
    }
    console.log(something);
}
func7(10);  // 10
func7();  // calculated default value

// similar thing can be done using nullish coalescing operator
// but it will go to default value for undefied and null both
function func8(something){
    // after some code ...
    something = something ?? "calculated default value";
}
// same can be done by || but it will give default value for all falsy value


// return will end the function
function func9(){
    // some code ...
    return ;  // will go out of this function and end the function call
    console.log("this will never get executed");
}