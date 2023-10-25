/*
Create a script that prompts the visitor to enter two numbers and then shows their sum.
*/

const input = require('prompt-sync')({sigint: true});

let a = +input("Enter the first number: ");
let b = +input("Enter the second number: ");

console.log(a+b);