"use strict";

/*
There’s a value in the property of a function. Will it change after bind? Why, or why not?

function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "John"
});

alert( bound.test ); // what will be the output? why?
*/

// undefined
// because bind method returns a new function like object which does not have custom properties of the orignal function

// testing 

function sayHi() {
  console.log( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "John"
});

console.log( bound.test ); // what will be the output? why?