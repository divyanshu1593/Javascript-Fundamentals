"use strict";

/*
We have rabbit inheriting from animal.

If we call rabbit.eat(), which object receives the full property: animal or rabbit?

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();
*/

// rabbit
// because 'this' always refer to the object on the left side of dot, which is rabbit here
// to it will be rabbit.full = true

// checking

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();

console.log(rabbit);