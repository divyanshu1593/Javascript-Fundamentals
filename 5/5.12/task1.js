/*
Turn the user into JSON and then read it back into another variable.

let user = {
  name: "John Smith",
  age: 35
};
*/

let user = {
    name: "John Smith",
    age: 35
};

let otherVariable = JSON.parse(JSON.stringify(user));
console.log(otherVariable);