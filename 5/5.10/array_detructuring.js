"use strict";

// array detructuring

let [para1, para2] = ["value1", "value2"];

// so now para1 will have "value1" and para2 will have "value2"

console.log(para1);
console.log(para2);

// if we provide less variable on the left side then only given variable will get value from left to right

let [para3] = ["value3", "value4"];  // value3 will be stored in para3 other values will be ignored

console.log(para3);  // value3


// we can skip the values from middle by leaving that position empty

let [para4, ,para6] = ["value4", "value5", "value6"];  // value5 will be ignored
console.log(para4);
console.log(para6);


// if number of variable on left are more than values on the right then rest of variable will get undefined
let [para7, para8] = ["value7"];
console.log(para7);  // value7
console.log(para8);  // undefined


// we also have default value of variable on left
let [para9 = "no value given", para10 = "no value given"] = ["value9"];
console.log(para9);  // value9
console.log(para10);  // no value given

// default value can be any complex expression, even a function call
function defaultFunc(){
    return "default value";
}

let [someTestValue = defaultFunc()] = [];
console.log(someTestValue);  // default value


// we can also destructure nested values 

let [someValue, [nestedValue1]] = ["some value", ["some nested value1", "some nested value2"]];  // some nested value 2 will be ignored here
console.log(someValue);  // some value
console.log(nestedValue1);  // some nested value1



// array destructuring can work with any iterable on right side
let [testVariable1, testVariable2] = "hi";
console.log(testVariable1);  // h
console.log(testVariable2);  // i


// when number of variable on left are less than number of value on the right then we can store the remaining values in a array
// we have to add one more variable on left with ... before it, so the rest of the values will be stored in it as a array
let [var1, ...restVars] = [1, 2, 3, 4, 5];
console.log(var1);  // 1
console.log(restVars);  // [2, 3, 4, 5]
