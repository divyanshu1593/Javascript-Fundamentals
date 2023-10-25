"use strict";

// loops in javascript

// while loop
// Example 
let i = 0;
while (i < 5){
    console.log(`This is ${i}th iteration`);
    i++;
}

i = 5;
while (i){   // convert the expresion to boolean to check the condition (so it will run from 5 to 1 and stop on 0)
    console.log("inside a while loop");
    i--;
}


// do while loop
// body runs first and then the condition is checked and if the condition is true the body it executed again
// so it is guranted that the loop will run at least one time
i = 5;
do{
    console.log(i);  // it will print 5 because it has not checked condition yet
}while (i <5)


// for loop
// Example
for (let k=0; i<5; i++){
    console.log(i);
}

// because k is declared inside the for loop so it will only have scope inside the for loop
//console.log(k);  // it should give error because k is block scoped so it is not defined here

for (var k=0; k<5; k++){
    // do nothing
}
console.log(k);  // not give error because var is function scoped

// or the variable can be declared before using in for loop so alowing it to be used outside of the loop
// Example
let j;
for (j=0; j <5; j++){
    // do nothing
}
console.log(j);  // will not give error


// any part of for can be skiped (begin, condition and step)
// Example
i = 0;
for (;;){
    if (i >= 5){
        break;
    }
    console.log(i);
    i++;
}


// break statements 
// Example
for (let i=0; i<5; i++){  // will only print until 2
    if (i == 3){
        break;
    }
    console.log(i);
}

// continue statement
// Example
for (let i=0; i<5; i++){  // it will skip odd numbers and only print even numbers
    if (i%2){
        continue;  // will skip the code below and move to the next iteration
    }
    console.log(i);
}


// when there are multiple nested loop then no break out of a specific loop labels are used
// break cannot be outside of that labeled loop
// Example
outer: for (let i=0; i<5; i++){
    inner: for (let j=0; j<5; j++){
        console.log(i,j);
        if (i == 3 && j == 3){
            break outer;
        }
    }
}
console.log("outside of the outer loop");

// continue can also be used with labels
outer:
for (let i=0; i<5; i++){
    inner: for (let j=0; j<5; j++){
        if (i%2 & j%2){
            continue outer;  // skips to the next iteration of outer loop so when both i and j becomes odd it wil move to the next interation of the outer loop
        }
        console.log(i,j);
    }
}


// break can be used outside of loops for breaking out of labeled code block
// Example
someCodeBlock: {
    console.log("something before break");
    console.log("something before break");
    break someCodeBlock;
    console.log("something after break");  // it will not get executed
}