/*
Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

Any number from the interval min..max must appear with the same probability.

Examples of its work:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
You can use the solution of the previous task as the base.
*/

// creating the same function as we created in previous task
function random(min, max){
    return min + (Math.random() * (max-min));
}

function randomInteger(min, max){
    return Math.trunc(random(min, max));
}

console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));