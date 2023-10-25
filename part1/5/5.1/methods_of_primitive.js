"use strict";

// objects are "heavier"
// primitive are light weight

// but we can use methods on primitive
// a temporary wrapper object will be created that will have the value of that primitive and all the methods related to it
// Example
let str = "trying";
console.log(str.toUpperCase());  // using method on string primitive
// once the method is called the temporary object is distroyed


// we can explicitly get a wrapper object of a primitive using String(), Number(), Boolean(), Symbol(), BigInt()
// Example
let zero = new Number(0);
console.log(typeof zero);  // object

// but this is HIGHLY UNRECOMENDED!!!
// because is can cause some really bad uninteded behaviour
// Example
if (zero){  // zero will give true because it is an object and object always give true
    console.log("zero is truthy!");
}


// Example of a method of number
let x = 5.1429469;
console.log(x.toFixed(2));


// null and undefined does not have a object wrapper or any methods