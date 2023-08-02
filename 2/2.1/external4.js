// the following code will give error because this is included using the script tag in a html file
// and adding two script tag will be treated as a combined SINGLE js file
// so the external3.js is added in the script tag which is above the script tag of external4.js
// and x is already declared in external3.js
let x = 10;