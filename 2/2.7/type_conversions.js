"use strict";

// type conversions

// converting to the string
// implicit coverson
let a = '5' + 5;
console.log(a);  // the output will be 55 because number 5 will implicitly get coverted to the string and then will get concatinated

// Explicit conversion
// String() function is used for explicit conversion to the string
let b = 5;
console.log(typeof b);  // number
b = String(b);
console.log(typeof b);  // string


// converting to number
// implecit conversion
let c = '10'/'2';
console.log(c);  // it will be 5 because '10' and '2' will be implicitly converted to the number

// Explicit conversion
let d = "100";
console.log(typeof d);  // string
d = Number(d);
console.log(typeof d);  // number

// unary + can also be used for explicitly coverting to number datatype
// it will work same as Number()
// Example
let e = '10';
e = 5 + +e;
console.log(e);  // 15 because e will be converted to number

// other conversion to number
let f = 'something that is not a number';
f = Number(f);
console.log(f);  // NaN
f = Number(undefined);
console.log(f);  // NaN
f = Number("  123 ");
console.log(f);  // 123
f = Number("   ");
console.log(f);  // 0
f = Number(null);
console.log(f);  // 0
f = Number(true);
console.log(f);  // 1


// coverting to Boolean
// Boolean() is used to explicitly convert to boolean
let g = Boolean(1);
console.log(g);  // true
g = Boolean(" ");
console.log(g)  // true because it is not a empty string and contains one space

// all falsy value will be coverted to false like 0, "", NaN, undefined, null
g = Boolean(NaN);
console.log(g);  // false