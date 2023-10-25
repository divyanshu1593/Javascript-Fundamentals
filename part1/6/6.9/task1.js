"use strict";

/*
What will be the output?

function f() {
  alert( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g();
*/

// null
// because g is a bounded function with context as null so it will print null


// testing 

function f() {
  console.log( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g();