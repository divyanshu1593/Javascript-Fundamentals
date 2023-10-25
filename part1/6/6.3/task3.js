/*
Here we make two counters: counter and counter2 using the same makeCounter function.

Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else?

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // ?
alert( counter2() ); // ?
*/


// they will be independent because a NEW lexical environment is made for every function call
// so it will print 0, 1


// checking

function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  
  console.log( counter2() ); // ?
  console.log( counter2() ); // ?