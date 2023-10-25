"use strict";

// arr.splice(start[, deleteCount, arg1, arg2, ...])  delete deleteCount number of elements(possibly 0) from index start and add arg1, arg2, ...
// it also return an array of deleted arguments
let arr = [1, 2, 3, 4, 5];
console.log(arr.splice(2, 2, 10, 100));  // [2, 3]
console.log(arr);  // [1, 10, 100, 4, 5]

// arr.slice(start, end)  same as str.slice, it gives a NEW subarray
arr = [1, 2, 3, 4, 5];
console.log(arr.slice(2,4));  // [3, 4]
console.log(arr.slice(-4, 4));  // negative indexes are allowed

// arr.concat(arr,ele1,ele2,arr2) it create a NEW empty array and elemets of arr in it and add all the aragumetns to it
// if array are passed as argument then all the elements  of the array are added
arr = [1, 2, 3, 4, 5];
let arr2 = arr.concat(6, 7, [10, 11, [100, 200]]);
console.log(arr2);  // [ 1, 2, 3, 4, 5, 6, 7, 10, 11, [ 100, 200 ] ]


// methods to iterate

// arr.forEach(function (item, index, array){}) will iterate over every element of arr and perform the function on it
// if the function returns anything, it will be ignored
arr = [1, 2, 3, 4, 5];

arr.forEach((item, index) => {
    console.log(`arr[${index}] = ${item}`);
    return item;  // will be ignored
});


// arr.indexOf(ele) same as str.indexOf()
// arr.indexOf(ele) compares using ===
arr = [1, 2, 3, 4, 5];

console.log(arr.indexOf(2));  // 1
console.log(arr.indexOf(4));  // 3
console.log(arr.indexOf(334));  // -1

// arr.includes(ele) works same as str.include()
arr = [1, 2, 3, 4, 5, NaN];
console.log(arr.includes(4));  // true
console.log(arr.includes(NaN));  // true, so includes work with NaN


// arr.find(function (item, index, array){}) iterate over elements and if the function return true then it stops and return that element
// if no function gives true than undefined is returned
arr = [1, 2, 3, 4, 5];

console.log(arr.find(item => !(item%2)));  // 2
console.log(arr.find(item => false));  // undefined

// arr.findIndex and arr.findLastIndex works same but instead of element return its index


// arr.filter(function (item, index, array){}) iterate over the array and WHENEVER the function return true, it will add it to an new empty array and return it at the end
arr = [1, 2, 3, 4, 5];

console.log(arr.filter((item => !(item%2))));  // [2, 4]


// methods for transforming array

// map(function (item, index, array){}) will iterate over the array and add what the FUNCTION returns to an new empty array and return that array at the end
arr = [1, 2, 3, 4, 5];
arr2 = arr.map((item => item*2));
console.log(arr2);  // [2, 4, 6, 8, 10]


// arr.sort(compare(a, b){})  sorts the array INPLACE using compare function
// by defalut the compare function is string comparision
// if the compare function return positive number then a is bigger, if it returns negative numbers then b is bigger and if 0 then they are equal

arr = [3,52,5,1,6,2,5];
arr.sort((a ,b) => {
    if (a > b) return 1;
    if (b > a) return -1;
    return 0;
});
console.log(arr);  // sorted array
// arr.sort() also return the sorted array but that is genrally ignored


// arr.reverse() will reverse the array inplace
arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr);  // [5, 4, 3, 2, 1]


// str.split(delim) will split the string from delim and return an array of it
let str = "1, 2, 3, 4, 5";
arr = str.split(',');
console.log(arr);  // [ '1', ' 2', ' 3', ' 4', ' 5' ]

// arr.join(delim) will do exact opposite and join the elemet of array into a single string and add delim in between
console.log(arr.join('=>'));  // 1=> 2=> 3=> 4=> 5


// arr.reduce(function (accumulator, item, index, array){}[, inital]) will iterate over elements of array and perform the function and at the end return what the last function returns
// accumulator contains value that the last function returned
// on first element accumulator = initial (if given)
// if inital is not given the iteration begin from second element
arr = [1, 2, 3, 4, 5];
console.log(arr.reduce((accumulator, current) => accumulator+current, 0));  // 15
arr = [1];
console.log(arr.reduce(accumulator => accumulator+1));  // no init is given so iteration begin with second elemnt which does not exist so simply accumulator is return i.e. first element
arr = [];
//console.log(arr.reduce(accumulator => accumulator+1));  // error

// reduceRight() does same thing from right to left


// Array.isArray(arr) gives true if it is an array, otherwise it gives false
console.log(Array.isArray([1, 2, 3]));  // true
console.log(Array.isArray({0:1, 1:2, length:2}));  // false


// in most methods except arr.sort(), there can be an optional element at the end thisArg, it will set the value of this to thisArg
let obj = {
    a: 10,
    print(){
        console.log(this.a);
    }
};

arr = [1, 2, 3, 4, 5];
//arr.forEach(obj.print);  // here obj.print is passed as value, when it is called it will not be called thruogh obj, hence this will be undefined and will cause error
arr.forEach(obj.print, obj);  // so here this will reference to obj