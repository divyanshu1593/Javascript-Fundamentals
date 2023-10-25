/*
Here a counter object is made with the help of the constructor function.

Will it work? What will it show?

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

alert( counter.up() ); // ?
alert( counter.up() ); // ?
alert( counter.down() ); // ?
*/

// it will be 1, 2, 1 becaause the up and down function's lexical environment does not have count variable so it will look in outer lexical environment which is Counter() calls lexical environment


// checking

function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }
  
  let counter = new Counter();
  
  console.log( counter.up() ); // ?
  console.log( counter.up() ); // ?
  console.log( counter.down() ); // ?