/*
Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

The resulting value must be returned as a number.

The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.
*/

const input = require('prompt-sync')({sigint: true});

function readNumber(){
    let a;
    while (true){
        a = input("Enter a number: ");
        if (a === 0) return 0;
        if (a == 0 || a == null) return null;
        if (isFinite(a)){
            return a;
        }
    }
}

readNumber();