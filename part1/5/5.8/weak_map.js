"use strict";

// WeakMap are just like map
// but it can ONLY have objects as a key, premitive are not allowed
// it also does not have iteration related method like keys(), vlaues(), entries()

// so when the reference to the object is lost, there is no way to "reach" it
// so the garbage collector will remove it from the memory

// it is used to store info related to the object which we want to be removed from the memory when the object no longer have a reference

let weakMap = new WeakMap();

let obj = {name: "some object"};

weakMap.set(obj, "some info related to object");

obj = null;  // now obj will be removed from the memory by the garbage collector

console.log(weakMap.get(obj));  // undefined

//weakMap.set(1, 1);  // error becuase it does not allow key as a primitive

console.log(weakMap.size);  // undefined because it does not have property like size
//weakMap.clear();  // method like this also does not exist