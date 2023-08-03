"use strict";

// comparison operators are ==, ===, <, >, <=, >=, !=, !==
// comparison operators alsways return a boolean value
// Example
console.log(5 > 6);  // false
console.log(1 == 1)  // true

// strings are compared lexographically
console.log('a' > 'Aa');  // true because acording to unicode a is greater then A
console.log('abca' == 'abcb');  // false because it differs at last character
console.log('abc' < 'abc ');  // true because first 3 chars are same and the length of second string is more

// when value of diffrent type are compared then they are first converted to number
// Example
console.log(1 == true);  // true because true is converted to number
console.log(null > -5);  // true because null is converted to number

// there is an exception for undifined and null when comparing with == operator
// null and undefined are only eqal to themself and each other, it will give false for any other datatype
console.log(null == undefined);  // true
console.log(undefined == undefined);  // true
console.log(null == 0);  // false due to above exception

// strict equality === and strict not equality !==
// it will not convert operands into number if they are of diffrent data types
// it will simply return false if data type are diffrent
console.log("" === false);  // false
console.log(0 !== false);  // true

// due to the excepion metioned above the == and >=,<= operator works diffrencety for null and undefined
// so (x > y) || (x ==y)  is not same as x >=y in case of null and undefined
// Example
console.log(null > 0 || null == 0);  // false
console.log(null >= 0);  // because it will be converted to the number

// comparing NaN with anything will always give false
console.log(NaN > 0);  // false
console.log(NaN == 0);  // false
console.log(NaN < 0);  // false
console.log(NaN == NaN);  // false (even comparing with it self will give false!)