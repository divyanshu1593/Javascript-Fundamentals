"use strict";

// program for testing in the developer tools
// a recursive code to see the changes in the call stack

function fibo(n){
    if (n == 0 || n == 1){
        return 1;
    }
    return fibo(n-1) + fibo(n-2);
}

fibo(10);