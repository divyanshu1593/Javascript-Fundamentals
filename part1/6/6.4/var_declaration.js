"use strict";

// var variable are function scoped, NOT block scoped

function func(){
    if (true){  // even works for 'false' instead of 'true'
        var x = 5;
    }
    console.log(x);  // 5
}

func();


function func2(){
    function func3(){
        var something = 5;
    }
    func3();

    console.log(something);  // error because something is not defined outside the function of its declaration
}

// func2();

// var can be redeclared
var x = 5;
var x = 10;  // no error


// var declaration are hoisted
// i.e. its declaration are same as they are declared at the top of its scope

function func4(){
    console.log(x);  // undefined, it will not give "not defined error"
    var x;
}

func4();

/*
func4 is same as
function func4(){
    var x;
    console.log(x);
}
*/


// only the declaration is hoisted, NOT the declaration

function func5(){
    console.log(x);  // undefined
    var x = 10;
}

func5();

/*
func5 is same as
function func5(){
    var x;
    console.log(x);
    x = 10;
}
*/