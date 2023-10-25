"use strict";

// WeakSet is same as set
// but it can ONLY store objects
// it does not have iteration related methods like keys(), values(), entries()

// so if the reference to the stored is lost then the object become unreachable
// so it gets removed from the memory by garbage collector

// it is used to store object that should get removed from the meomory when there is no reference to it

let weakSet = new WeakSet();

let obj = {};

weakSet.add(obj);

// so the main purpose of storing the data in weakSet is to check if the object exist in the set or not
console.log(weakSet);  // WeakSet { <items unknown> }
console.log(weakSet.has(obj));  // true

obj = null;

console.log(weakSet.has(obj));  // false