"use strict";

// symbols are primitive data type in javascript
// Example
let someSymbol = Symbol();
console.log(someSymbol);  // Symbol()
console.log(typeof someSymbol);  // symbol

// symbol can be used as a key in object (they will NOT be converted to string!)
// Example
let demoObj = {};
demoObj[someSymbol] = "this is a value for some symbol";  // symbols always needed to be used in square bracates because they need to be evaluated
console.log(demoObj[someSymbol]);  // this is a value for some symbol

// using symbol in object literal
let anotherDemoObj = {
    [someSymbol] : "value",
};

// symbol never get IMPLICITLY converted to a string
// Example
//console.log("some string" + someSymbol);  // it will give error and not concatinate because someSymbol will not get implicity converted to string

// but we can convert it to string Explicitly
console.log("some string " + someSymbol.toString());  // not give error because explicitly converted to string


// symbols can have description that describe it
// Example
let otherSymbol = Symbol("some description");
console.log(otherSymbol.description);  // printing the description of a symbol


// symbol are always UNIQUE, so Symbol() always give a different symbol (we need to store Symbol() in variable to resuse them)
// even if two symbol have same description, they will be different!
// Example
let demoSymbol1 = Symbol("desc");
let demoSymbol2 = Symbol("desc");
console.log(demoSymbol1 == demoSymbol2);  // false


// symbols are used to make hidden properties in a object
// becuase symbol are skipped by for..in loop and other methods like Object.keys()
// Example
let hiddenKey = Symbol("a hidden key");

let demoObject = {
    normalKey : "some vlaue",
    [hiddenKey] : "this is a hidden property",
};

for (let key in demoObject){
    console.log(key);
}

console.log(Object.keys(demoObject));  // will not show key that are symbol

// it can only be accessed directy like this
console.log(demoObject[hiddenKey]);  // this is a hidden property


// but property having symbol key WILL BE copied to other object while cloning or assigning
// Example
let newObject = Object.assign({}, demoObject);
console.log(newObject[hiddenKey]);  // works

let newObject2 = structuredClone(demoObject);
console.log(newObject2[hiddenKey]);  // not work!


// we can use global registry to make global symbols
// global symbols give SAME symbol for same name
// Example
let globalSymbol = Symbol.for('globalSymbol');  // Symbol.for(name) method will return the global symbol stored in global registry with that name. (if a global symbol with that name does not exist then it will be created and then returned)
let globalSymbol2 = Symbol.for('globalSymbol');
console.log(globalSymbol == globalSymbol2);  // true


// we can get the name of global symbol by the symbol that is stored in variable with the help of Symbol.keyFor() method
console.log(Symbol.keyFor(globalSymbol));  // globalSymbol


// there are many system symbol also... like Symbol.iterator