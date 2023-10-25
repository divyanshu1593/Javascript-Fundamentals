"use strict";

/*
Can we change this by additional binding?

What will be the output?

function f() {
  alert(this.name);
}

f = f.bind( {name: "John"} ).bind( {name: "Ann" } );

f();
*/

// John, because the funtion cannot be rebounded
// so once a function is bounded it cant be again bounded

// testing

function f() {
  console.log(this.name);
}

f = f.bind( {name: "John"} ).bind( {name: "Ann" } );

f();