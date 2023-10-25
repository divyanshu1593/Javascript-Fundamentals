/*
Anagrams are words that have the same number of same letters, but in different order.

For instance:

nap - pan
ear - are - era
cheaters - hectares - teachers
Write a function aclean(arr) that returns an array cleaned from anagrams.

For instance:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
From every anagram group should remain only one word, no matter which one.
*/

function aclean(arr){
    let exist = new Map();
    let newArray = [];
    let set = new Set();
    let tempArray;

    arr.forEach(item => {
        set = new Set(item.toLowerCase().split(''));
        tempArray = Array.from(set);
        str = tempArray.sort().join('');

        if (!exist.has(str)){
            exist.set(str, 1);
            newArray.push(item);
        }
    });

    return newArray;
}


// cheking

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"