/*
Write an if condition to check that age is NOT between 14 and 90 inclusively.

Create two variants: the first one using NOT !, the second one – without it.
*/

let age = 21;
// using not
if (!(age>=14 && age<=90)){
    console.log("condition satisfied");
}

if (age<14 || age>90){
    console.log("condition satisfied2");
}