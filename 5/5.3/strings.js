"use strict";

// quotes

// double and single quotes are same
let str = "hello";
str = 'hello';

// backticks are special because it allows insertion of expressions in the string
str = `1 + 1 = ${1+1}`;
console.log(str);  // 1 + 1 = 2

// backticls can also be used for multiline string
str = `line 1
line 2
line 3`;

console.log(str);  // will print 3 different lines


// escape sequence
console.log("line1\nline2\tafter tab");  // \n for new line and \t for tab
console.log("doube quotes \"\" inside a double quote"); // so we can escape quotes like \', \`, \"
console.log("\\");  // escaping backslash
console.log("`hi`");  // this works


// string.length PROPERTY
str = "Divyanshu";
console.log(str.length);  // 9
console.log("hi\n\t".length);  // 4 because special characters are counted as 1


// we can access characters of string by 2 methods
// using square brackat
str = "some string";
console.log(str[2]);  // m
console.log(str[-1]);  // undefined because negetive numbers are not supported in []

// using .at() method
// negetive values are allowed in .at() method
console.log(str.at(2));  // m
console.log(str.at(-1));  // g


// string are immutable
//console.log(str[2] = 'a');  // error because string can not be mutated


// str.toUpperCase() and str.toLowerCase() is used for returning a capitalzed or lowerized string
console.log("Divyanshu".toUpperCase());  // DIVYANSHU
console.log("Divyanshu".toLowerCase());  // divyanshu


// searching for a substring

// using indexOf(substring[, starting pos]) method
str = "some random string with random words";

console.log(str.indexOf("random"));  // 5, the index of first occurence of substring
console.log(str.indexOf("random", 6));  // 24, index of first occurence of substring after starting position 6
console.log(str.indexOf("some string that is not present in str"));  // -1

// includes gives true if substring is present otherwise gives false
console.log(str.includes("random"));  // true

// startsWith(substring) returns true if the string start with that substring
console.log(str.startsWith("some"));  // true

// endsWith(substring) returns true if the string ends with the substring
console.log(str.endsWith("random"));  // false


// str.slice(start[, end]) gives substring from start to end (end not included)
str = "some string";
console.log(str.slice(2));  // me string
console.log(str.slice(2,6));  // me s
console.log(str.slice(-5,-1));  // trin
console.log(str.slice(-1,-5));  // ""

// str.substring(start[, end]) will take bigger number as end and smaller number as start
// if only one number is given then it is trated as start
// negative numbers are treated as 0
// otherwise works same as slice
console.log(str.substring(2));  // me string
console.log(str.substring(-5, 3));  // som


// another non recomended method (because acording to specification it should be only implimented in browser-hosted engines)
// str.substr(start, length)
// gives string from starting position of given length
console.log(str.substr(2, 4));  // me s


// string is internally encoded with UTF-16
// so characters are mapped with this numbers
// so when string is compared lexographically actually it is compared using this number

// str.codePointAt(pos) is used to get the decimal number that represet the character at pos
console.log("A".codePointAt(0));  // 65

// String.fromCodePoint(code) returns the character that is represented by that code
console.log(String.fromCodePoint(65));  // A