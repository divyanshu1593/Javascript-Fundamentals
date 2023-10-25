// example

class Parent {
    a = 1;

    constructor(){
        this.b = 2;
    }

    func(){
        console.log(this);
    }
}

class Child extends Parent {
    c = 3;

    constructor(){
        super();  // NOTE that super needs to be called before using 'this' in child class because it assumes that 'this' will be created by the parent class
        this.d = 4;
    }

    method(){
        console.log(this);
    }
}

let child = new Child();
console.log(child);
child.method();  // child object
child.func();  // still child object becuase the value of 'this' is always the same as left side of .

// the above code is same as following

// class Parent {
//     constructor(){
//         this.a = 1;  // The ORDER is important
//         this.b = 2;
//     }

//     func(){
//         console.log(this);
//     }
// }



// class Child extends Parent {
//     constructor(){
//         super();  // order is IMPORTANT
//         this.c = 3;
//         this.d = 4;
//     }

//     method(){
//         console.log(this);
//     }
// }

// let child = new Child();
// console.log(child);
// child.method();  // child object
// child.func();  // still child object becuase the value of 'this' is always the same as left side of .


// this is similar to the following code

// function Parent() {
//     this.a = 1;  // The ORDER is important
//     this.b = 2;
// }

// Parent.prototype.func = function (){
//     console.log(this);
// }

// function Child() {
//     this.a = 1;  // this.a and this.b are there from the super method i.e. constroctor of parent which is internally done using [[HomeObject]]
//     this.b = 2;
//     this.c = 3;
//     this.d = 4;
// }

// Child.prototype.method = function (){
//     console.log(this);
// }

// Object.setPrototypeOf(Child.prototype, Parent.prototype);

// let child = new Child();
// console.log(child);
// child.method();  // child object
// child.func();  // still child object becuase the value of 'this' is always the same as left side of .