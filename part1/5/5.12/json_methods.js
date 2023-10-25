"use strict";

// JSON are special notation to represent obejcts in string format

// JSON.stringify(obj) is used to convert obj into JSON
let obj = {name: 'demo object'};
console.log(JSON.stringify(obj));  // {"name":"demo object"}

// JSON.stringify() can be used for any data type
console.log(JSON.stringify(5));  // 5
console.log(JSON.stringify('hi'));  // "hi"  note that only double quoted string are allowed in JSON
console.log(JSON.stringify({someKey: `someValue`}));  // here the key will also be on double quotes
console.log(JSON.stringify({someKey: {otherKey: "someValue"}}));  // nested objects are also allowed
console.log(JSON.stringify(5+5));  // 10  note that expression are evaluated
console.log(JSON.stringify(new Array()));  // []


// circular reference will give error while converting to the JSON
// Example
let obj2 = {};

obj = {
    key: obj2,
};

obj2.key = obj;

//console.log(JSON.stringify(obj));  // error becuase of circular reference


// JOSN is language independent so properties with function as a value, undefined as a value and symbol as a key will be ingnored
// Example

obj = {
    [Symbol()]: "some value",
    key: undefined,
    key2: function (){},
};

console.log(JSON.stringify(obj));  // {}



// repacer is the second optional argument of the JSON.stringify() method

// it can be an array so only the keys available in the array will be added to JSON

obj = {
    name: 'some name',
    key: {
        name: 'other name',
        val: "some value",
    },
}

console.log(JSON.stringify(obj, ['key', 'val']));  // so only property with key and val will be added (note that even the key of the nested properties are need to be in the array)

// we can use a function as a replacer, it will take key, value and will return a value
// the value can be anything
// if it return undefined then the property will be skipped

console.log(JSON.stringify(obj, (key, value) => {
    if (key == 'name') return "modified " + value;
    return value;
}));  // same result but there will be modified before the value of name

// so the replacer function is called recursively
// a wrapper object is made as {"": obj} so that even obj itself can be skiped

console.log(JSON.stringify(obj, (key, value) => {
    if (key == "") return undefined;
}));


// space is a optional third argument of the JSON.stringify() method
// it is used to apped a certsin string before the nested obejct
// generally used for indentation and debugging

obj = {
    key: "some value",
    key2: {
        name: "nested object",
        key: "some nested value",
    },
}

console.log(JSON.stringify(obj, null, 4));  // same as '    ' so indentation with 4 spaces
console.log(JSON.stringify(obj, null, 'nested: '));



// toJSON() method can be added inside a object
// JOSN.stringify() will first search for toJSON() method and if it is not availble then it will use the default way of converting to the json
// Example
obj = {
    name: 'divyanshu',

    toJSON(){
        return this.name;
    }
};

console.log(JSON.stringify(obj));  // "divyanshu", because toJSON method is returning it


// JSON.parse() is used to convert the JOSN to object
// NOTE that trailing comma is NOT allowed in JSON
let json = `{
    "name": "divyanshu",
    "key": {
        "name": "nested value"
    }
}`

obj = JSON.parse(json);
console.log(obj);


// reviver is a optional argument that takes a function the will take key, value and return a value
console.log(JSON.parse(json, (key, value) => {
    if (key == 'name') return 'modified ' + value;
    return value;
}));
