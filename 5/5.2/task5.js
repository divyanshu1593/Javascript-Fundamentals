/*
The built-in function Math.random() creates a random value from 0 to 1 (not including 1).

Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

Examples of its work:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525
*/

// Math.random() the range will be 0 <= random number < 1
// by multipying it with (max-min) the range will become 0 <= random number * (max-min) < (max-min)
// adding min to it the range will become  min <= (random number * (max-min)) + min < (max-min)

function random(min, max){
    return min + (Math.random() * (max-min));
}

console.log(random(1,5));
console.log(random(1,5));
console.log(random(1,5));