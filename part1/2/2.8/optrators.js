"use strict";

// basic maths operator works same as do in maths like +, -, /, *
// Example 
let x = 5+5; // 10
x = 10/2;  // 5

// other operators are:
// remainder operator (diffrent from modulo operator)
// Example 
x = 5%2;  // 1
x = -10%3  // -1 (not 2 because it is not modulo, it is remainder operator so it will ignore - and treat evaluate the answer same as for positive number and than add a negative sign before returning it)

// Exponetional operator
x = 2 **2;  // 4 
x = 16 ** 0.5;  // 4 (square root of 16)
x = 2 ** -1;  // 0.5 (1/2)


// + can be used to concatinate strings
x = "hello " + "world";  // hello world
// + will implicitly convert any other data type to string for concatination
x = "hello" + 5;  // hello5

// for any other operator the other data types will be converted to number
x = 45 * false;  // 0 because false will be converted to 0


// unary + works same as Number() function
// Example
x = +"235";  // 235
x = +"5" + +"5";  // 10 (because unary + has higher precidence then binary +)


// every operator return a value
// assigment operator also return the value it is assigned with
// Example
let y;
x = 1 + (y = 2 + 3);  // brackets are important because = has a very low precedence
console.log(y);  // 5
console.log(x)  // 6


// chaining assignments
// Example
let z;
z = y = x = 5;  // first 5 is assigned to x then it is returned and assigned to y and same with z

// modify in place
// Example
x = 5;
x += 5;  // same as x = x + 5


// increment / decrement
// increment and decrement operators can only be aplied to variables
// postfix
y = 5;
x = y++;  // first y is return so x == 5 and than y is incremented so y == 6

// prefix
x = ++y;  // first y is incremented so y == 7 and then it is return to x so x == 7

// bitwise operators 
// same as other languages
// negation of 5 will be :
// it will be stored in 32 bit form
// so 5 = 0000...101
// therefore negation of 5 = 111...010
// which is -6 in 2's complement form  (if we complement 111...010 and add 1 , we will get 2)
console.log(~5);  // -6

// diffrence between >> and >>>
// >> is for right shift (it will preserve the sign of the number by filling 1's on left side if MSB is 1 or 0's on left side if MSB is 0)
x = -6;  // 111...010
console.log(x >> 2);  // 111...110  which is -2 in 2's complement form

// but the >>> is known as zero filled right shift or unsigned right shift
// so it will not preserve the sign and will fill 0 at the left side so the resut will be always positive
console.log(x >>> 2);  // 00111...110  which is equal to 1073741822


// comma operator (,)
// it has lowest precedence
// it scans expresions from left to right and return the last expresion
// Exapmle
x = (1+2,3+4);  // 7

// it is generally used in for loops when multiple counters are needed
// Example
let i,j;
for (i=0, j=10; i*j<10; i++, j--){
    console.log(i,j);  // the comma used inside console.log() is not the comma operator
}