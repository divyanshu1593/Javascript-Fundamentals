"use strict";

/*
Here the function makeUser returns an object.

What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result?
*/

// 'this' will be evaluated to be undefined because the function makeUser() is not called by any object
// so console.log(user.ref.name); should give error because undefined.name gives error

// for checking

function makeUser() {
    return {
      name: "John",
      ref: this
    };
}
  
let user = makeUser();

console.log(user.ref.name);