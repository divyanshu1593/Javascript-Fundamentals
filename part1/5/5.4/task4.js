/*
Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero.
*/

const input = require('prompt-sync')({sigint: true});

function sum(arr){
    let ans = 0;
    for (let ele of arr){
        ans += ele;
    }
    return ans;
}

function sumInput(){
    let arr = [];
    let a;
    while (true){
        a = input("Enter a number: ");
        if (!isFinite(a)){
            return sum(arr);
        }
        arr.push(+a);
    }
}

// cheking

console.log(sumInput());