"use strict";

function func1(){
    let x = 10;

    if (true){
        // outer x will have scope here also because it this block is inside the outer block in which x is defined
        console.log(x);  // 10
    }
    console.log(x);  //10
}

func1();

function func2(){
    let x = 10;
     
    if (true){
        let x = 5; // it will not give error because is is new scope and outer x will not have scope inside this block now
        console.log(x);  // 5 because in THIS block new x is diffined, so the outer x will not have scope inside this block now
    }
    console.log(x); // 10 because inner x was a diffrent variable and it will not effect outer x
}

func2();