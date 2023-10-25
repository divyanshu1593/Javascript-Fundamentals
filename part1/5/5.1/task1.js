/*
Consider the following code:

let str = "Hello";

str.test = 5;

alert(str.test);
What do you think, will it work? What will be shown?
*/

// undefined
// BUT in strict mode is will give error beacuse in strict mode writing in a object wrapper is not allowed!

// cheking

let str = "Hello";

str.test = 5;  // temporary object wrapper will be created and test: 5 will be added and then it will be destroyed

console.log(str.test);  // a new temporary object wrapper will be created so it will not have test property, hence it will give undefined
