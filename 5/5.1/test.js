"use strict";

// what is happening here???

let sym = Symbol();
let obj = {};

// making explicit Symbol wrapper object
sym = Object(sym);

console.log(typeof sym);  // object
console.log(typeof obj);  // object

let demoObject = {
    [sym]: "value of symbol object wrapper",
    [obj]: "value of normal object",
};

for (let key in demoObject){
    console.log(`${key}: ${demoObject[key]}`);
}