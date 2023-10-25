"use strict"

// variables can be declared using let, const or var

// declaration using let
let a = 5;  // its value can be changed later

// declaration using var
var b = 10;  // its value can be changed later

// declaraton using const
const c = 15; // its vaule cannot be changed after assignment
// a constant that is hard-coded i.e. its value is known before runtime, is named in all capitals and is seperated by '_'
// Example
const RED = "#ff0000";

// variable names should contain only alphabets, digits , $ and _
// its name should not start with a digit
// its name should not be a reserved keyword

function func(){
    if (true){
        var x = 5;
        let y = 10;
    }
    console.log(x);  // it will not give error because var is function scoped
    console.log(y);  // it will give error because let is block scoped
}

//func();


let i = 5;
// let i = 20;  // redeclaration of let is not allowed
var j = 10;
var j = 20;  // redeclaration of var is allowed