"use strict";

/*
The task has two parts.

Given the following objects:

let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};
Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.
*/

// modern engined perform optimizations so there is no difference is the speed weather we eccess from the object directly or from a prototype

// solution

let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};

// pockets.__proto__ = bed;
// bed.__proto__ = table;
// table.__proto__ = head;

Object.setPrototypeOf(pockets, bed);
Object.setPrototypeOf(bed, table);
Object.setPrototypeOf(table, head);

console.log(Object.getPrototypeOf(pockets));  // bed (object value)

console.log(pockets.pen);  // 3
console.log(bed.glasses);  // 1