"use strict";

// functions are VALUEs in javascript

// function expression 
// Example
// when an function is assigned to a variable it is known as function expressions
let func = function() {  // name of the function can be ommited
    console.log("This is inside a function expression");
};

console.log(func.toString());  // this will show func value stored in func in string format
func()  // using the variable with parantheses will CALL the function

let func2 = function some(){  // giving a name to function expression wont give an error but we cannot latter call it using that name (we can call it using only the variable it is assigned to)
    console.log("testing");
};

func2();
//some();  // will give error

// because function is a value, it can be stored to other variables also
// Example
let func3 = func;  // it will copy the value of function func (if there were parantheses with func then it whould have executed the function and then returned the value of it instead of the function itself)
// so now calling func3() will do same thing as func
func3();

// declaring function in normal syntax will also store it in a variable
// Example
function test(){
    console.log("testing");
}
// the above code will create a variable test and store the function value in it
console.log(test.toString());  // function will be stored in test variable


// callbacks
// because function is a value it can be passed as a argument to another function and can be latter callbacked inside that function
// Example
function good(){
    console.log("Thats awesome!!!");
}

function bad(){
    console.log("Thats not good :(");
}

let doLikeJavaScript = true;

function ask(yes, no){
    if (doLikeJavaScript) yes();  // callback
    else no();  // callback
}

ask(good, bad);  // passing function as arguments

// global declared function are initialized before the execution flow starts
declaredFunction();  // this will not give error

function declaredFunction(){
    console.log("this is working!");
}

//functionExpression();  // will give error because function expressions are initialized when the program's execution flow reaches it

let functionExpression = function() {
    console.log("this should not work in strict mode");
};

// declared functions are block scoped
// function expressions can be used to allow using function that are inside a block, ouside of it. by storing it in some other varialbe that has global scope
// Example
let someFunc;

if (true){
    someFunc = function(){
        console.log("it can be used outside of this block");
    };
}
someFunc();