"use strict";

// set are special object used to store unique values

// new Set(); is used to create new empty set
let set = new Set();
console.log(set);

// we can give an iterable to new Set() to make it into a set
set = new Set([1, 2, 3, 2, 4]);
console.log(set);  // 1,2,3,4

// set.add(value) is used to add value to set, if it already exist then new value will NOT be added
set.add(5);
console.log(set);  // 1,2,3,4,5

// set.delete(vlaue) will delete the value and give true if the value existed otherwise give false
console.log(set.delete(1));  // true
console.log(set);  // 2,3,4,5
console.log(set.delete("something that does not exist"));  // false

// set.has(value) gives true if it has that value otherwise give false
console.log(set.has(2));  // true
console.log(set.has(1));  // false


// set.size gives number of values in the set
console.log(set.size);  // 4

// set.clear() will delete every element from the set
set.clear();
console.log(set);


// iterations

set = new Set([1, 2, 3, 4, 5]);

// set.keys() and set.values() give an iterable that has values of set  (this is by default)
console.log(set.values());

// set.entries() give a iterable containing array of length 2 like [value, value] 

console.log(set.entries());

// set.forEach(function (value, valueAgain, set){}) can also be used
set.forEach((value => console.log(value)));