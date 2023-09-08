"use strict";

// Function constructer are used when we dont know the value of function at the time of writing code
// i.e. for example the function can be given by the server at the time of running

// last parameter of Function constructer is the function body
// all other parameter are strings of parameters of the function to be generate
// they can be many string with valid parameter name or comma seperated valid parameters

// Example

// function without any parameters
let noPara = new Function(`
console.log('this function has no parameters');
`);

console.log(noPara.toString());
noPara();


// function with parameters
let withPara = new Function('para1, para2', 'para3', 'para4, ...restPara',`
console.log('this function has many parameters');
`);

console.log(withPara.toString());
withPara();


// we can use spaces and comments in parameter string
// Example
let withSpace = new Function('para1, para2,    para3', ' para4 /* this para has space infront of it */',`
console.log('this function has space separated parameters');  // comment in function body
console.log(para1, para2, para3, para4);
`);

console.log(withSpace.toString());
withSpace(1, 2, 3, 4);


// function created by the Function constructer are anonymous function
// so they dont have a name
// so to use recursion we can use arguments.callee() to call the function recursively

// Example

let fact = new Function('n', `
if (n == 0) return 1;
return n * arguments.callee(n-1);
`);

console.log(fact(5));  // 120


// we can also use Function constructer without the new keyword, it will behave the same
// Example

let func = Function(`
console.log('inside func');
`);

console.log(func.toString());
func();  // inside func


// functions created by the Function constructer have global scope
// i.e. [[Environment]] have value of global script not the Lexical environment it is formed in
// so it can ONLY access variable that are properties of globalThis

// Example

globalThis.name = 'divyanshu';

function someFunc(){
    let name = 'someone';

    let printName = new Function(`
        console.log(name);
    `);

    printName();
}

someFunc();  // divyanshu because printName has a global scope