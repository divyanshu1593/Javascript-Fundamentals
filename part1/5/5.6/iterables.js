"use strict";

// iterable are the objects that has [Symbol.iterator]() method
// we can use for..of loop over iterators
// string, array are example of iterator


// when for..of loop are used it will call [Symbol.iterator]() methods which will return an object called iterator
// along with other things iterator will have a method named next()
// next returns a object in this format : {done:true} when iteration is finished or {done:false, value: some value}
// for..of calls next() for getting next item

// making an iterable

let range = {
    from: 1,
    to: 10,

    [Symbol.iterator](){
        return {
            current: this.from,
            to: this.to,

            next(){
                if (this.current < this.to){
                    return {done: false, value: this.current++};
                }
                return {done: true};
            }
        }
    },
};

for (let i of range){
    console.log(i);
}


// we can also call iterator explicitly

let str = "Hello";

// does the same as
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value); // outputs characters one by one
}


// Array.from(iterable or array-like) will return an REAL array from that iterable or array like

let arrayLike = {
    0: "some value 1",
    1: "some value 2",
    length: 3,
};

console.log(Array.from(arrayLike));  // [ 'some value 1', 'some value 2', undefined ] because length is 3 and there is no key for index 2

console.log(Array.from("hello"));  // [ 'h', 'e', 'l', 'l', 'o' ]

console.log(Array.from(range));  // [1, 2, 3, 4, 5, 6, 7, 8, 9]