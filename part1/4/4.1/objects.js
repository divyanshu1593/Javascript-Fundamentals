"use strict";

// objects are like cabinate with properties in them (key-value pairs)

// an empty object can be made in following ways
let obj1 = new Object();  // using object construct
let ob2 = {};  // using object literal

// we can add key value pair inside the literal
// syntax: obj = {key:value, key:value};
// key will always be string
// value can be anything
let obj3 = {
    key1 : "value1",  // here key1 will be considered as "key1"
    key2 : true,  // value can be ANYTHING (any data type)
};

// or key value pair can be added later
// with .
obj3.key3 = "some value";

// key can also have space in it
// but . will not work there so [] has to used
// [] will evaluate what is inside of it and will convert it to string
obj3["more then one word"] = "some value";  // same as "more then one word" : "some value"
obj3["concatinated" + "String"] = "some value";  // same as "concatinatedString" : "some value"
obj3[5 + 5] = "some value";  // same as "10" : "some value"
let someKey = "exampleKey";
obj3[someKey] = "some value";  // same as "exampleKey" : "some value"

// [] can also be used inside the object literal
// it is known as computed properties because the expression inside [] will be computed and then converted to the string
someKey = "exampleKey";
let obj4 = {
    [someKey] : "some value",  // here first someKey will be evaluated and its value "exapmleKey" will be used as a key
    "other key" : "some value",  // this comma is known as a trailing comma and quotes are there in key because it contains space
};


// and property in objects can be created, modified and delted
let obj5 = {};

obj5.key1 = "some vlaue";  // creation
console.log(obj5.key1);  // some value

obj5.key1 = "changed value";  // modification (note that a object cannot have two keys with same name)
console.log(obj5.key1);  // changed value

// delete operator is used to delete properties from an object
delete obj5.key1;  // deletion
console.log(obj5.key1);  // undefined because the key does not exist


// property value shorthand
let var1 = 1;
let var2 = 2;

let obj6 = {
    var1,  // same as var1 : var1  (so the key will be "var1" and value will be value stored in variable var1)
    var2,  // same as var2 : var2  (so the key will be "var2" and value will be value stored in variable var2)
    "normal key" : "normal value",
};


// we can also use reserved keywords of javascript as key
// Example
let obj7 = {
    let : "some value",
    return : "some vlaue",
    console : "some value",
};


// in operator to check if a key exists in an object
let testObject = {
    key1 : "some value",
    "other key" : "some value",
    0 : "zero here is stored as a string!",
    undefinedKey : undefined,
};

// the left side of in operator works same as [], so variables and other expression can be there on the left side of in operator
console.log("key1" in testObject);  // true
console.log("other key" in testObject);  // true
console.log(0 in testObject);  // true
console.log("undefinedKey" in testObject)  // true (nore that here cheking like obj[key] !== undefined will not work because the value of the key is undefined)


// for..in loop
// used to iterate throgh all the keys of a object
// Exapmle
testObject = {
    key1 : "some value",
    key2 : "some value",
    key3 : "some value",
};

for (let key in testObject){
    console.log(key);
}


// order of keys in object
// integer keys are sorted and other keys are stored in order they appeared
// the sorted integer keys comes first and then other keys
// integer string means when it is converted to Integer and then again converted to string, it should remain same
testObject = {
    "3" : "some value",
    "non integer" : "some value",
    "1" : "some value",
    "5.5" : "some value",
    2 : "some value",
};

// running for..in loop for cheking the order
for (let key in testObject){
    console.log(key);
}