"use strict";

// all in built functions and properties are stored as a property of global object
// in browser the global object is 'window'
// in node js the global object is 'global'
// we can use 'globalThis' in ANY environment (so globalThis is common name for global objects in all environments)

// we can add our own global values to use them in all scripts (in same html page)

globalThis.something = "something";

console.log(something);  // something


// it can be used to have a global variable that can be used in case of a local variable shadowing it
if (true){
    let something = "not something";

    console.log(something);  // not something
    console.log(globalThis.something);  // something
}


// we can also modify the globalThis
// so we can also modify in built properties and functions
// Example

globalThis.console.log = function (){
    console.warn('now console.log() always prints this!');
}

console.log('this will not get printed');