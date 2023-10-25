/*
What is the result? Why?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?
*/

// arr[2]() will give the array itself because the 'this' will refer to arr


// cheking

let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2]();