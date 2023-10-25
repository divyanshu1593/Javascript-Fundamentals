"use strict";

// constructors are functions that are used for making objects
// constructor are generally named first later capital
// constructor function are called with new operator
// Example

function DemoConstructor(name){
    console.log(this);  // when called with new it will be a empty object
    this.name = name;
}

let user = new DemoConstructor("divyanshu");
console.log(user.name);  // divyanshu


// when a function is called with new operator:
// first an empty object is created and 'this' will rederence that empty object
// then the rest of the function runs
// if it return an object then it will return that object otherwise it will return 'this' implicitly
// if the function is returning a primitive then it will return 'this' instead

function AnotherConstructor(){
    return "some primitive";
}

let obj = new AnotherConstructor();
console.log(obj);  // {} because primitives are ignored and intead 'this' is returned

function TestConstructor(){
    return {testKey: "testValue"};
}

let obj2 = new TestConstructor();
console.log(obj2);  // {testKey: "testValue"} because there is an explicit object return in the function


// we can test if a function is called with new operator or not
// new.taget will be undefined if the function is called without the new operator
// otherwise new.target will have the function as a value

function TestConstructor2(){
    console.log(new.target);
}

TestConstructor2();  // undefined because it is called without new operator
new TestConstructor2();  // value of the function

// we can also call constructor without parantheses
new TestConstructor2;  // works same as TestConstructor2();


// we can also add methods to the Constructor
// Example

function User(name){
    this.name = name;

    this.sayHi = function(){
        console.log(`hi, I am ${this.name}`);
    };
}

let div = new User("Divyanshu");
div.sayHi();  // hi, I am Divyanshu