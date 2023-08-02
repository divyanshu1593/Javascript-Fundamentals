"use strict";

// logical operators
// js has four logical operators: !, &&, ||, ??

// OR operator ||
// it can also take non boolean values and can also return non boolean values
// it scan all operands from left to right
// and converts them into boolean
// when it finds the first truthy value, it will return its ORIGNAL value
// if no truthy value is found then the last value is returned
// Example
console.log(false || false);  // false
console.log(null || 1);  // 1 because 1 is the first truthy value
console.log(false || console.log("it will get executed because no truthy value was found"));  // also prints undefined becuse the inner console.log() does not return anything
console.log(true || console.log("sort circuit"));  // true

// AND operator &&
// it does samething as or but instead of finding first truthy value it will find first falsy value
// Example
console.log(true && false);  // false
console.log("truthy value" && 0 && true );  // 0 because it is the first falsy value

// NOT operator !
// it can take non boolean value but can ONLY return boolean values
// it evaluates the expresion and converts it into boolean and return the inverse of it
// Example
console.log(!true);  // false
console.log(!0);  // true (boolean value is returned)

// && has higher precedence then || and ! has higher precedence then &&
console.log(false || true && !true);  // false