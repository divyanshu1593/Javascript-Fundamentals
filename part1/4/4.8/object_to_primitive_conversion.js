"use strict";

// conversion to boolean
// when objects are explicitly converted to boolean , they ALWAYS gets converted to true
// Example
let obj = {};
console.log(Boolean(obj));  // true

// there are 3 types of 'hint's i.e.

// when object is supposed to be an string it is known as "string" hint
// for example console.log(obj);  or  obj[obj]  (keys are string so obj should be string here)

// when object is used in an maths operation (except binary +), it is known as "number" hint
// for example obj - 5;  or obj / obj;

// when the object can be either string or number then it is known as "default" hint
// for example obj + 5 (here obj can be string so concatination will be done or obj can be number so addition can be done)


// when a object is needed to be converted to primitive there are three methods
// javascript will first use obj[Symbol.toPrimitive](hint) if it exists
// Symbol.toPrimitive is a system symbol
// Example
let demoObject = {
    name : "demo object",
    [Symbol.toPrimitive](hint){  // method shorthand
        console.log(`we will evalute using ${hint} hint`);  // string, number or default
        switch (hint){
            case "string":
                return "string value of the object";
            case "number":
                return "number value of the object";  // number hint does not necessarilly return number (so this will not give error)
            default:
                //return {};  // this will give error because this method must return a primitive!
                return "default value of the object";
        }
    }
};

console.log(demoObject[demoObject]);  // demoObject["string value of the object"] so undefined
console.log(demoObject - 5);  // number value of the object
console.log(demoObject == 5);  // default value of the object


// if [Symbol.toPrimitive]() is not defined then javascript will look for hint

// if hint is string then first it will try to execute toString() method
// if that method does not exists or it returns a object then javascript will look for valueOf method
// if that method also not exist of give object then there will be a typeerror couldnt convert to primitive

// if hint is default or number then first it will try to look for valueOf and then it will look for toString

// by default toString will return ['object Object']
console.log(demoObject.toString());
// by default valueOf will return the obeject itself
console.log(demoObject.valueOf() === demoObject);  // true


// Example using toString and valueOf methods
let someObject = {
    toString(){
        console.log("this is inside toString method");
        return "this is toString method";
    },

    valueOf(){
        console.log("this is inside valueOf method");
        return "this is valueOf method";
    }
};

// string hint
// toString method will be used
console.log(someObject[someObject]);  // someObject["this is toString method"] hence undefined

// number hint
// valueOf method will be used
console.log(someObject - 5);  // NaN

// default hint
// valueOf method will be used
console.log(someObject == 5);  // false


// once a object is converted to a primitive as mentioned above then if it is needed, that primitive will be further converted to other primitive
// Example
obj = {
    [Symbol.toPrimitive](hint){
        return "5";
    }
};

console.log(obj / 5);  // 1 because first obj is converted to "5" and then "5" is converted to 5 becuase '/' always convert to number before dividing