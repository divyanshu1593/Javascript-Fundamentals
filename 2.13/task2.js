/*
For every loop iteration, write down which value it outputs and then compare it with the solution.

Both loops alert the same values, or not?

The prefix form ++i:

let i = 0;
while (++i < 5) alert( i );

The postfix form i++

let i = 0;
while (i++ < 5) alert( i );
*/

// for the first loop
// it will be 1,2,3,4

// for the second loop
// it will be 1,2,3,4,5


// cheking 
let i = 0;
while (++i < 5) console.log( i );


i = 0;
while (i++ < 5) console.log( i );