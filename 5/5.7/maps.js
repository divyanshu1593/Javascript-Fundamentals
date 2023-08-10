"use strict";

// map stores key-value pair just like objects
// but key in map can be of ANY datatype

// methods

// new Map() for creating an empty map
let map = new Map();  //empty map
console.log(map);

// new Map([ [key1, value1], [key2, value2], ... ]) will create map with that keys and values
map = new Map([
    [1, "some value"],
    [true, "another value"],
]);

console.log(map);


map = new Map();

// map.set(key, value) for adding key-value pair in map
map.set(123n, 123);
console.log(map);

map[456n] = "trying";  // this should not be done because it will add key-value pair as an normal object and convert the key to a string
console.log(map);

// map.get(key) is used to get the value form the key
console.log(map.get(123n));  // 123


// map.has(key) gives true if the key exist in the map, otherwise give false
console.log(map.has(123n));  // true
console.log(map.has('123'));  // false
console.log(map.has('456'));  // false because '456' not a key of map, it is a key of object


// map.delete(key) deletes the key-value pair with that key, and give true if it existed otherwise gives false
console.log(map.delete(123n));  //true
console.log(map);

// map.size property gives the count of total key-value pair
map = new Map([
    [1, 10],
    [2, 20],
    [3, 30],
]);

console.log(map.size);  // 3


// map.clear() method will remove every key-value pair from map
map.clear();
console.log(map);


// iteration

map = new Map([
    [1, 10],
    [2, 20],
    [3, 30],
]);

// map.keys() will return an iterable with only keys
console.log(map.keys());  // it is a iterable so we can use for..of loop over it

// map.values() will return an iterable with only values
console.log(map.values());

// map.entries() (by default so if we use only map in for..of it will be same as map.entries)
// map.entries() will give array in form [ [key1, value1], [key2, value2], ... ]
console.log(map.entries());

for (let keyValue of map){
    console.log(keyValue);
}


// making map from objec

// Object.entries() will give an array of form [ [key1, value1], [key2, value2], ... ] which can be used to ceate a map
let demoObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
};

map = new Map(Object.entries(demoObject));
console.log(map);


// making object from map
// Object.fromEntries([ [key1, value1], [key2, value2], ... ]) will give an object
// so map.entries() can be give to Object.fromEntries()  to make object
let newObject = Object.fromEntries(map.entries());
console.log(newObject);


// map.forEach(funtion (value, key, map){}) can be used to run the function over key-value pair of map
map.forEach((value, key) => console.log(`${key} => ${value}`));