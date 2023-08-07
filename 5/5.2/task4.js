/*
This loop is infinite. It never ends. Why?

let i = 0;
while (i != 10) {
  i += 0.2;
}
*/

// because of pricision lose
console.log(0.2.toFixed(20));  // 0.20000000000000001110
// so it will be never be equal to 10