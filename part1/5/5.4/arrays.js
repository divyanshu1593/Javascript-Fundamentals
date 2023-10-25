"use strict";

// declaration

// using constructor
let arr = new Array();

// using literals
arr = [];

// arrays are special objects that stores "ordered data"
// Example
arr = [1, 2, 3, 4, 5];

// there can be a trailing zero in array too
arr = [
    1,
    2,
];

// so here the keys are index numbers and values are the value stored in it
// so we can access the value of the array like following
arr = [1, 2, 3, 4, 5];
console.log(arr[3]);  // 4

// we can read element from any index
console.log(arr[500]);  // undefined


// because arrays are objects, we can add properties to it, but we should not do this becuase it forces the engine to stop array specific optimizations
arr.test = "testing";
console.log(arr.test);  // testing

// arr.length property will give number of elements in array from index 0 to the last index that we have stored some value in
arr = [1, 2, 3];
console.log(arr.length);  // 3
arr[30] = "some value";
console.log(arr.length);  // 31  (from 0 to 30)

// we can explicitly WRITE length property
// if we increase it, the array will expand
// and if we decrease it, the array will truncate
arr = [1, 2, 3];
arr.length = 10;
console.log(arr);  // [1, 2, 3, 7 empty values]
arr.length = 1;
console.log(arr);  // [1] so information is lost


// to use negative index to access elements from the array we have to use arr.at(index) method
arr = [1, 2, 3];
console.log(arr.at(-1));  // 3


// methods

// arr.push(element) appends the element at the end of the array
arr = [1,2,3];
arr.push(4);
console.log(arr);  // 4 added at the end


// arr.pop() will remove the last element of the array and return it
console.log(arr.pop());  // 4
console.log(arr)  // [1, 2, 3]


// arr.shift() will remove the first element of the array and return it
console.log(arr.shift());  // 1
console.log(arr);  // [2, 3]


// arr.unshift(element) will add element at the front of the array
arr.unshift(100);
console.log(arr);  // [100, 2, 3]

// we can also add more than one element using push() and unshift like following
arr.unshift(500,600,700);
console.log(arr);  // [500, 600, 700, 100, 2, 3]



// for..of loop for array
for (let element of arr){
    console.log(element);
}

// we can technically use for..in loop too, so it will give index as key
// but it can also give non-index keys, and it is slower than for..of loop
// Example
arr.test = "testing";

for (let key in arr){
    console.log(`${key}: ${arr[key]}`)
}


// we can add element in the Array() constructor 
// Example
let someArray = new Array(1,2,3);
console.log(someArray);  // [1, 2, 3]

// but generally [] is used becuase using Array() can cause confuson like in following case:
someArray = new Array(5);
console.log(someArray);  // not [5] but an empty array will length 5


// an array can store anything inside it
// so it can be array also
// hence multidimentional arrays are possible
let twoDArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(twoDArray[2][1]);  // 8


// array does not have toPrimitive or valueOf methods
// so it uses toString() for object to primitive conversion
// toString will return a string will all the elements seperated by comma
arr = [1,2,3];
console.log(arr.toString());  // '1,2,3'
console.log(twoDArray.toString());  // '1,2,3,4,5,6,7,8,9'

// array are object, so they are stored and passed by reference
arr = [1,2,3];
let arr2 = arr;
arr2.push(4);
console.log(arr);  // [1, 2, 3, 4]

// if we compare two array with == then it will do same as a object and give true only if two variable are referencing each other
console.log(arr == arr2);  // true

// if compared with a primitive then it will be converted to string
console.log([] == 0);  // true because [] will be converted to "" which will further be converted to 0 by == and it will be equal
