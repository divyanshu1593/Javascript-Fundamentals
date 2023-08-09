/*
let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

alert( arr ); // 8, 5, 2, 1, -10
*/


let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => {
    if (a > b) return -1;
    if (b > a) return 1;
    return 0;
});

console.log( arr ); // 8, 5, 2, 1, -10