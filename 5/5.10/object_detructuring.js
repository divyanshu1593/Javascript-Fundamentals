"use strict";

// objects can also be destructured in the same way

let {name, surname} = {name: "divyanshu", surname: "motivaras"};
console.log(name);  // divyanshu
console.log(surname);  // motivaras

// order does not matter, it stores the value in the variable whos name matches with key on the right side
let {someValue1, someValue2} = {someValue2: "value2", someValue1: "value1"};
console.log(someValue1);  // value1
console.log(someValue2);  // value2


// we can use ':' to store the value in the variable with diffrent name
let {testValue: ts} = {testValue: "some test value"};
console.log(ts);  // some test value
//console.log(testValue);  // error because this variable does not exist


// here also we can have default vlaue 
let {anotherTestValue: atv = 5} = {};
console.log(atv);


// nested objects

let obj = {
    name: 'divyanshu',

    favouriteAnime: {
        name: 'Attack on Titan',
        season: 4,
    }
};

let {
    name: personName,
    favouriteAnime: {name: favouriteAnimeName, season}
} = obj;

console.log(personName);  // divyanshu
console.log(favouriteAnimeName);  // Attack on Titan
console.log(season);  // 4