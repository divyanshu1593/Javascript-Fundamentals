// class example

class Demo {
    constructor(name){
        this.name = name;
    }

    sayHi(){
        console.log(`hello ${this.name}`);
    }

}

let demo = new Demo('something');
console.log(demo);
demo.sayHi();

// this is same* as following (*ALMOST, there are some differences such as class has to be called with new keyword otherwise it will give error)

// function Demo(name) {
//     this.name = name;
// }

// Demo.prototype.sayHi = function (){
//     console.log(`hello ${this.name}`);
// }

// let demo = new Demo('something');
// console.log(demo);
// demo.sayHi();


// class fields

// Example

class AnotherDemo {
    x = 10;
}

let anotherDemo = new AnotherDemo();

console.log(anotherDemo);

// is same as following

// class AnotherDemo {
//     constructor(){
//         this.x = 10;
//     }
// }

// let anotherDemo = new AnotherDemo();

// console.log(anotherDemo);

// which is similar to the following 

// function AnotherDemo(){
//     this.x = 10;
// }

// let anotherDemo = new AnotherDemo();

// console.log(anotherDemo);


// another Example

class Example {
    x = 5;

    constructor(){
        this.x = 10;
    }
}

let example = new Example();

console.log(example);

// this is same as following

// class Example {
//     constructor(){
//         this.x = 5;  // NOTE that class fields are initialized first
//         this.x = 10;
//     }
// }

// let example = new Example();

// console.log(example);


// Making bound methods with class fields

class Some {
    constructor(name){
        this.name = name;
    }

    sayName(){
        console.log(`The name is ${this.name}`);
    }
}

let some = new Some();

setTimeout(some.sayName);  // 'this' will be lost

// classes provide a soultion for this

// solution

// class SomeSolution {
//     constructor(name){
//         this.name = name;
//     }

//     sayName = () => {
//         console.log(`The name is ${this.name}`);
//     }
// }

// let someSolution = new SomeSolution('something');

// setTimeout(someSolution.sayName);  // WORKS!

// this works becuase:

// the above code is same as following

class SomeSolution {
    constructor(name){
        this.name = name;
        this.sayName = () => {
            console.log(`The name is ${this.name}`);
        }
    }
}

let someSolution = new SomeSolution('something');
setTimeout(someSolution.sayName);

// The arrow function does not have 'this'
// so the value of 'this' will be taken from outer Lexical Environment
// for a function, the outer Lexical Environment is the environment in which it was created
// the arrow function was created in the constructor call (new SomeSoulution('sometihng'))
// hence the value of 'this' will be taken from constructor call
// in this constructor the value of 'this' is a empty object at first, then other properties are added
// the value of 'this' we will get from the constructor call will always be same as the object we are creating with it
// because the constructor will return the value of 'this'. So the object will be refering the value that is returned by the constructor
// hence they will be same.