/*
Task exaclty as it is from javascript.info lol
Write a function checkSpam(str) that returns true if str contains ‘viagra’  or ‘XXX’, otherwise false.

The function must be case-insensitive:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/

function checkSpam(str){
    str = str.toLowerCase();
    if (str.includes('viagra') || str.includes('xxx')){
        return true
    }
    return false;
}

console.log(checkSpam('buy ViAgRA now'))  // true
console.log(checkSpam('free xxxxx'))  // true
console.log(checkSpam('innocent rabbit'))  // false