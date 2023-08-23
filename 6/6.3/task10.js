/*
The following code creates an array of shooters.

Every function is meant to output its number. But something is wrong…

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function() { // create a shooter function,
      alert( i ); // that should show its number
    };
    shooters.push(shooter); // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on.
Why do all of the shooters show the same value?

Fix the code so that they work as intended.
*/


// here in the above code only the same function is stored in the array
// to fix the code we will save the value of i in another variable in the block of while loop.
// so while loop will have 10 different lexical environment for 10 different iteration with different values.

// fixed code:
function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
    let j = i;
    let shooter = function() { // create a shooter function,
        console.log( j ); // that should show its number
    };
    shooters.push(shooter); // and add it to the array
    i++;
    }
  
    // ...and return the array of shooters
    return shooters;
  }
  
  let arr = makeArmy();

  arr[0]()
  arr[1]()
  arr[2]()