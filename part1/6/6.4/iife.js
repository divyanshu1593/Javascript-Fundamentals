"use strict";

// to use var as block scoped variable (in old scripts)
// IIFE( immediately invoked function expression) is used
// so var variable are put inside a function expression (so there scope is not outside it) and that expression is immediately invoked


if (true){
    (function (){
        var x = 10;
    })();
}

// console.log(x);  // error becuase now x can't be accessed outside if block

// function expression is wrapped around brackets because so javascript engine does not take it as function declaration (which can't be invoked immediately)

// other ways of doing so:

(function (){
    var something;
}())

!function (){  // ! starts the expression
    var something;
}()


+function (){  // + starts the expression
    var something;
}()