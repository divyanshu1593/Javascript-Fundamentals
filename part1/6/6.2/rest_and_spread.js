"use strict";

// rest paraperter can be used to collect arguments into an arrat
// Example

function func(...arr){
    console.log(arr);
}

func(1, 2, 3, 4, 5);  // [ 1, 2, 3, 4, 5 ]

// the rest parameter can also collect partical arguments i.e. only the arguments that are not assigned to a variable on left
// Example

function func1(arg1, arg2, ...arr){
    console.log(arr);
}

func1(1, 2, 3, 4, 5);  // [ 3, 4, 5 ]


// the rest parameter can only be at the end otherwise it will give error

/*
function func2(arg1, ...arr, arg2){
    // error!
}
*/


// arguments object is an array like object which containts arguments in it same as array
// arguments object is made bydefault internally
// it is also iterable so we can use for..of loop on it
// Example

function func3(){
    for (let arg of arguments){
        console.log(arg);
    }
    console.log(Array.isArray(arguments));  // false
}

func3(1, 2, 3, 4, 5);


// arrow function does not have a arguments object
// it uses the arguments object of first outer normal function
// Example

function func4(){
    let func5 = () => {
        console.log(arguments);
    }
    func5('something');
}

func4(1, 2, 3, 4, 5);


let func6 = () =>{
    console.log(arguments);  // it will show some global arguments
}

func6();


// spread syntax is exact opposite of the rest parameter
// spread syntax expands an array into diffrent arguments
// Example

function func7(name, surname){
    console.log(`hello, ${name} ${surname}`);
}

let nameArr = ['Divyanshu', 'Motivaras'];

func7(...nameArr);


// spread syntax can be used as many time and whereever we want in the function call
// Example

function func8(){
    console.log(arguments);
}

let arr = [2, 3, 4];
let arr2 = [23, 33, 43];

func8(1, ...arr, 5, ...arr2, 53);


// spread syntax can also be used inside an array

let arr3 = [1, ...arr];
console.log(arr3);  // [ 1, 2, 3, 4 ]


// spread syntax can also be used on iterables
console.log([..."hello"]);  // works because string is iterable


// spread syntax can also be used on the objects, it will expands the objects into its properties

let obj = {
    name: 'some name',
    value: 'some normal value',

    func9(){
        console.log('inside the test funtion');
    }
};

console.log({...obj});
