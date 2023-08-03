"use strict";

// object can also have methods in it
// methods are function stored like following

let obj = {
    func : function(){
        console.log("a methond!");
    },
};

// so the methods also are stored in key-value pairs
// function name becomes key and the function itself becomes value
// we can call the method as follows
obj.func();  // a method!


// method shorthand
// following code is same as above
obj = {
    func(){  // does not even need function keyword
        console.log("a method!");
    },
};


// this refers to the object that calls the function
// Example

let product = {
    name : "smart phone",
    makingCost : 5000,
    sellingCost : 7000,

    calcProfit() {
        return this.sellingCost - this.makingCost;
    },
};

console.log(product.calcProfit());  // here 'this' will be 'product' because product is the object which is calling the function calcProfit()


// this is not bound in javaScript
// i.e. this can be used in function that are not inside a object
// the value of 'this' is evaluated at runtime

// Example
function sayHi(){
    console.log(`Hi, ${this.name}!`);
}

let someObj = {
    name : "some obj",
    sayHi,  // using property value shorthand
};

someObj.sayHi();  // Hi some obj! because value of this here is someObj
//sayHi();  // this will cause error because this outside of any object is undefined


// the arrow function have no 'this'
// it will evaluate this as the this of first outer "normal" function
let testObj = {
    name : "test object",
    func(){
        let test = () => {
            console.log(this.name);
        }
        test();
    },
};

testObj.func();  // here the 'this' will be evaluated to be 'this' of the function func()


// if there is no outer "normal" function then 'this' inside of the arrow function will be evaluated to be an empty object {}
// Example
testObj = {
    func : () => {
        let otherFunc = () =>{
            console.log(this);
        }
        otherFunc();
    },
};

testObj.func();