/*
Write a function count(obj) that returns the number of properties in the object:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
Try to make the code as short as possible.

P.S. Ignore symbolic properties, count only “regular” ones.
*/

function count(obj){
    return Object.keys(obj).length;
}


// cheking

let user = {
    name: 'John',
    age: 30
};
  
console.log( count(user) ); // 2