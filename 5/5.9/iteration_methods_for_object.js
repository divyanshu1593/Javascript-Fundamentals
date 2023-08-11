"use strict";

// Object.key(obj)  NOT obj.keys()

let obj = {
    1: "value1",
    2: "value2",
    3: "value3",
};


console.log(Object.keys(obj));  // it will give an "real" array not just an iterable


// Object.values(obj)

console.log(Object.values(obj));  // [ 'value1', 'value2', 'value3' ]

// Object.entries(obj)

console.log(Object.entries(obj));  // [ [ '1', 'value1' ], [ '2', 'value2' ], [ '3', 'value3' ] ]

let someSymbol = Symbol();

obj = {
    [someSymbol]: "value of the symbol",
    normalKey: "normal value",
};

console.log(Object.keys(obj));  // will not show the someSymbol key


// there are special method that will show symbol keys

// Object.getOwnPropertySymbols(obj), it will only show symbol keys of that obj

console.log(Object.getOwnPropertySymbols(obj));