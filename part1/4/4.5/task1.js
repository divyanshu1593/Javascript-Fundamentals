/*
Is it possible to create functions A and B so that new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
If it is, then provide an example of their code.
*/

// yes it is possible if both the constructor return a object that is made beforehand
// Example


let obj = {};

function A(){
    return obj;
}

function B(){
    return obj;
}

let a = new A();
let b = new B();

console.log(a == b);  // true
