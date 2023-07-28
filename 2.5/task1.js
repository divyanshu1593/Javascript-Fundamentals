/*
What is the output of the script?

let name = "Ilya";

alert( `hello ${1}` ); // ?

alert( `hello ${"name"}` ); // ?

alert( `hello ${name}` ); // ?
*/

/* following will be the output of the above code

hello 1
hello name
hello Ilya

*/

// code for checking output:
// alert is replaced with console.log()

let name = "Ilya";
console.log( `hello ${1}` );
console.log( `hello ${"name"}` );
console.log( `hello ${name}` );

