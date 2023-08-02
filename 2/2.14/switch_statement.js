"use strict";

// switch case
// Example
let x = 2;

switch (x){
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    default:  // optional
        console.log("something that is not one or two");
}

x = 1;
switch (x){
    case 1:
        console.log("one");
        console.log("case can have multiple statements");
        break;
    case 2:
        console.log("two");
        break;
    default:
        console.log("something that is not one or two");
}

x = 1;
switch (x){
    case 1:
        console.log("case 1 without break");
    case 2:
        console.log("case two without break");
    case 3:
        console.log("case three with break");
        break;
    default:
        console.log("something that is not one or two or three");  // this will not get executed because there was break in case 3
}


// cases can be grouped because of the side effect of how break works with switch case
x = 3;
switch (x){
    case 2:
        console.log("two");
        break;
    case 1:   // not equal to the 3 so will not get executed
    case 3:   // is will get executed but it does not have break so it will go further
    case 4:   // it will get executed and then after break it will be stoped
        console.log("not two");
        break;
    default:
        console.log("I only like 1,2,3 and 4!");
}


// Example
switch (false){  // switch and case can have arbitrary value, not only variables
    case 0:  // checks if false === 0
        console.log("not get executed because strict equality is checked ");
        break;
    case "":  // checks if false === ""
        console.log("not get executed because strict equality is checked ");
        break;
    case false:  // checks if false === false
        console.log("gets executed because it is strictly equal to false");
        break
}