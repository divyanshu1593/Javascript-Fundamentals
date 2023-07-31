/*
What will the result be?

alert( null || 2 && 3 || 4 );
*/

// 3
// first null is falsy so it will evaluate further
// then because && has higher precedence it will evaluate 2 && 3 which will give 3 because 2 and 3 both are truthy value so it will give the last value
// now the 3 is the first truthy value so it will be returned and the evaluation will be stoped


// cheking
console.log(null || 2 && 3 || 4);