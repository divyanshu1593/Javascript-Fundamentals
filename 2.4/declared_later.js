// if strict mode is not enabled than we can declare a var variable even after its assignment

a = 5;
var a; // declared later
console.log(a); // it will print 5 the value of a

b = 10;
let b; // this will give error because we cant declare a let after its assinment
