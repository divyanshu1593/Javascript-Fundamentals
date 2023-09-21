class Demo {
    #privateProperty = 'private value';

    #privateMethod(){
        console.log('this is a private method');
    }

    getPrivateProperty(){
        return this.#privateProperty;
    }

    usePrivateMethod(){
        this.#privateMethod();
    }
}

// here private property and private method can only be used within the class
let demo = new Demo();
// console.log(demo.#privateProperty);  // error because private properties can't be used outside of the class


class ChildDemo extends Demo {
    // getPrivateProperty(){
    //     return this.#privateProperty;  // error becuase private fields cannot be accessed directly in children class
    // }
}

console.log(demo.getPrivateProperty());  // private properties can be indirecly accessed like this
demo.usePrivateMethod();


// NOTE that #something and something are different
// Example

class SomeDemo {
    #something = 5;
    something = 10;

    func(){
        console.log(this.#something);
        console.log(this.something);
    }
}

let someDemo = new SomeDemo();
someDemo.func();