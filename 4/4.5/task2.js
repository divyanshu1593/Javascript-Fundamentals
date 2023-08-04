"use strict";

/*
Create a constructor function Calculator that creates objects with 3 methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
For instance:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/

const input = require('prompt-sync')({sigint: true});

function Calculator(){
    this.read = function(){
        this.a = +input("a: ");
        this.b = +input("b: ");
    };

    this.sum = function(){
        return this.a + this.b;
    }

    this.mul = function(){
        return this.a * this.b;
    }
}

let calculator = new Calculator();
calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );