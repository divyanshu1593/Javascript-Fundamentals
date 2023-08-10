/*
We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.

But that doesn’t work:

let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
keys.push("more");
Why? How can we fix the code to make keys.push work?
*/

// push is a method of arary but keys here is an iterable

// solution: 

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");  // now it will not give error