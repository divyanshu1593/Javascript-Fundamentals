"use strict";

// numbers are 64 bit (double pricision floating point numbers)

// different representation of number

// we can use underscore in between digits (it is a syntactic sugar)
let num = 12_32_2535_25_2;
console.log(12322535252 === num);  //true
// writing can only add a SINGLE underscore in BETWEEN digits

// exponential representation
num = 1.2e5;  // same as 1.2 * (10**5)
console.log(num);

num = 1.2e-5;  // same as 1.2 * (10** -5) which is same as 1.2/10**5
console.log(num);

// hexadecimal representation
num = 0xff;  // same as 255  (we can also write oxFF)
console.log(num);

// octal representation
num = 0o77;  // same as 63
console.log(num);

// binary representation
num = 0b101;  // same as 5
console.log(num);


// toString(base) method will convert the number to string OF that particular base
// by default the base = 10
// 2 <= base <= 36
num = 5;
console.log(num.toString());  // 5
console.log(num.toString(2));  // 101

// if we want to apply methods to number directly without storing them in variable, then we can do it in following way:
console.log(5..toString(2));  // two . are nedded becuase first . is decimal point which is necessary if we dont use parantheses
console.log((5).toString(2));  // by using parantheses


// rounding

// Math.floor will give the nearest integer to the left side on number line
console.log(Math.floor(3.6));  // 3
console.log(Math.floor(-3.6));  // -4

// Math.ceil will give the nearest integer to the right side on the number line
console.log(Math.ceil(3.6));  // 4
console.log(Math.ceil(-3.6));  // -3

// Math.round will give the nearest integer
// it will give x if number is x + (something less then 0.5)
// or it will give x + 1 if number is x + (something greater then or equal to 0.5)
console.log(Math.round(3.4))  // 3
console.log(Math.round(3.5))  // 4
console.log(Math.round(-3.4))  // -3 so it bassically works same as it does for positive number and add - to the answer

// Math.trunc will simply remove the part after decimal point
console.log(Math.trunc(34.2523));  // 34

// toFixed(n) method is a ROUNDING method similar to Math.round
// it is a method of number wrapper object
// it will round the number so that it has exactly n digits after the decimal point
// toFixed(n) will return STRING
num = 12.235
console.log(typeof num.toFixed(2));  // string
console.log(num.toFixed(2))  // 12.24 because it will round up
console.log(num.toFixed(1));  // 12.2 rounded down because there is 3 after first digit which is strictly less then 5
console.log(num.toFixed(12));  // will add zeros to match exact n digits after decimal


// precesion error
console.log(0.1 + 0.2 === 0.3);  // false
// becuase numbers are stored in binary form and 0.1 is non-ending in binary form, hence rouding is done and precesion is lost
console.log(0.1.toFixed(25));

console.log(926592365936592652);  // 926592365936592600  last two digit precision lost because only 64 bit of storage is there

console.log(1e500);  // Infinity becuae 1e500 will overflow from the 64 bit storage


// tests

// isNaN(value) will first convert the value to number and than check if it is NaN
console.log(isNaN("something that is not a number"));  // true

// Number.isNaN(value) will not convert the value to number, if it is not a number datatype then is will return false otherwise it works same as isNaN()
console.log(Number.isNaN("something that is not a number"));  // false
console.log(Number.isNaN(NaN));  // true

// isFinite(value) will first convert the value to number and return false if it is NaN, Infinity or -Infinity otherwise it return true
console.log(isFinite(1/0));  // false
console.log("15");  // true

// Number.isFinite(value) will not convert value to number datatype, if value is not number then it will return false otherwise it works same as isFinite()
console.log(Number.isFinite("15"));  // false
console.log(Number.isFinite(15));  // true

// Object.is(value1, value2) will work same as value1 === value2 but it will work differently on following cases:
console.log(Object.is(NaN, NaN));  // true
console.log(Object.is(0, -0));  // false


// parseInt() will take string and convert it to number
// parseInt(value) will scan from left to right until it is getting numbers (it will stop when it encounter first non digit) and return the scaned number
console.log(parseInt("123lnsfl3223"));  // 123

// parseFloat will do the same for float
console.log(parseFloat("3.14wel.nclf342"));  // 3.14

// parseInt(value, radix) can also take radix as a argument to specifiy what form is the string in
console.log(parseInt("0xff", 16));  // 255  (parseInt("ff",16)) also works


// other functions

// Math.random() will give a number from 0 to less then 1 randomly (0 <= random number < 1)
console.log(Math.random());
console.log(Math.random());

// Math.max will give maximum from an arbitrary number of arguments
console.log(Math.max(-5,4,2));  // 4

// Math.min will give minimum from an arbitrary number of argumnets
console.log(Math.min(-5,4,2));  // -5

// Math.pow() will give exponential power
console.log(Math.pow(2, 3));  // 8