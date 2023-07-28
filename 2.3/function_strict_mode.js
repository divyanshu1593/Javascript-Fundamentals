// "use scrict" can also be used inside a function
// it will have scope only inside that function

function func(){
    // calling this function will give error
    "use strict";
    x = 5;
}

y = 5;  // this will not give error because the srict mode is not enabled for whole file
//func();