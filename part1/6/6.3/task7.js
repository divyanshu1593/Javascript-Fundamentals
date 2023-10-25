/*
What will be the result of this code?

let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

func();
P.S. There’s a pitfall in this task. The solution is not obvious.
*/

// it will give error because the lexical environment of func() will be prepopulated with "x: <uninitialized>"


// checking 

let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

func();