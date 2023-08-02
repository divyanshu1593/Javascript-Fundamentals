"use strict";

// data types in javascript

// there are 8 data type:

// Number
// it contains integers, floats, Infinity, NaN
let num = 5;
console.log(typeof num);

num = 5.5;
console.log(typeof num);

num = Infinity;
console.log(typeof num);

num = NaN;
console.log(typeof num);

// NaN is contagious i.e. any operation will result in NaN itself except NaN**0

num += 1;
console.log(num);

num = num**0;
console.log(num);

// big int
// limitless size of integer
num = 1234567894639679627837925235935937775734n;
console.log(typeof num);

// string

// it can be in "" or '' 
let str = "divyanshu";
console.log(typeof str);

// special backticks can be use to have variables and expresions inside of a string
let str1 = `my name is ${str}`;
console.log(str1)

// Boolean
// true of false value
let flag = true;
console.log(typeof flag);

// null
// represents "nothing"

let age = null;
console.log(typeof age); // typeof null returns objects which is an officially regognized error in javascript

// undifined
// means the value is not assigned
let something;
console.log(typeof something)

something = undefined;
console.log(typeof something);

// the 7th is object and 8th is symbol
