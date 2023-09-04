"use strict";

// NFE stands for named function exoression
// Example

let func = function some(){
    console.log('hello');
}

func();

// in above code the name 'some' is optional
// in most of the cases it works same as when no name is provided

// the name of the function is also not affected by this temporary optional name (in most cases, but when we engine can't evaluate the name to add in name property this temporary name is taken)
console.log(func.name);  // func


// when we have to use recursion the following problem can arrise
function fact(n){
    if (n == 0) return 1;
    return n * fact(n-1);
}

console.log(fact(5));  // 120

// but when we assign its value to other variable and make the current variable null
let fact2 = fact;
fact = null;

// fact(5);  // gives error because internally its still calling fact

// so we can use NFE here

let fact3 = function temp(n){
    if (n == 0) return 1;
    return n * temp(n-1);
}

console.log(fact3(5));  // 120

let fact4 = fact3;
fact3 = null;

fact4(5)  // does not give error

// so the temporary name will always refer to the current function
// and it is not accesible outside

// temp()  // error because not available outside that function expression