"use strict";

// primitives are stored and passed as value
let x = "some primitive value";
let y = x;

// so x and y are stores two diffrenct strings
y = "changed string";
console.log(x);  // nothing changes

// but objects are stored and passed as references
// i.e. variable only contains the address of where the object is stored
let obj1 = {  // obj1 reffers to the object shown here (so it only contains address of the object)
    key : "value",
};

let obj2 = obj1;  // here the object is passed through reference i.e. address stored in obj1 will be passed to obj2

// so now obj1 and obj2 reffers to the same object

obj2.key = "changed value";
console.log(obj1.key);  // "changed value"  because obj1 and obj2 reffers to the same object


const obj3 = {
    key : "some value",
};

obj3.key = "changed value";  // it will not give error because the obj3 i.e. the referencing varible is constant, not the object itself
//obj3 = {};  // this will give error because obj3 is const and trying to reference to some other object


let obj4 = {};
let obj5 = {};
let obj6 = obj4;

console.log(obj4 === obj5);  // false because they are NOT the same object even if there content is same
console.log(obj4 === obj6);  // true becuase they are the SAME object

// self reference is possible
// Example
let obj7 = {};
obj7.key = obj7;  // self reference
console.log(obj7);


// cloning the object
// i.e creating a diffrenct object with same content

// method 1 using for..in loop
let obj8 = {
    key1 : "value1",
    key2 : "value2",
    key3 : "value3",
};

let obj8Clone = {};

for (let key in obj8){
    obj8Clone[key] = obj8[key];
}


// method 2, using Object.assign method
// Object.assign(dest, ...sources) will add the proerties of sources to the dest and return dest
// Example
let obj9 = {
    key1 : "value1",
    key2 : "value2",
    key3 : "value3",
};

let prop1 = { key4 : "value4" };
let prop2 = { key4 : "value4 from prop2", key5 : "value5" };

Object.assign(obj9, prop1, prop2);
console.log(obj9);  // key4 and key5 would have been added and the last key4 i.e. prop2.key4 will overwrite last key4

// problem with above methods are that if a there are nested objects then they fail to generate a diffrent copy of it
// Example
obj9.test = {nestedKey : "nested object value"};
let obj9Clone = Object.assign({}, obj9);

console.log(obj9Clone.test === obj9.test);  // true so a diffrence copy of nested object is not generated


// for that purpose structuredClone() is used
obj9Clone = structuredClone(obj9);

console.log(obj9Clone.test === obj9.clone);  // false, hence a diffrenct copy of nested object was created