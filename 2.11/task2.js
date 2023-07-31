/*
What will the code below output?

alert( alert(1) || 2 || alert(3) );
*/

// it will print 1 and but alert or console.log() does not return anythig so undefined is an falsy value so it will further evaluate and will print 2 and stop because it is the first truthy value


// for checking
console.log(console.log(1) || 2 || console.log(3));