/*
Modify the code of makeCounter() so that the counter can also decrease and set the number:

counter() should return the next number (as before).
counter.set(value) should set the counter to value.
counter.decrease() should decrease the counter by 1.
See the sandbox code for the complete usage example.

P.S. You can use either a closure or the function property to keep the current count. Or write both variants.
*/

function makeCounter(){

    function counter(){
        return counter.count++;
    }

    counter.count = 0

    counter.decrease = function (){
        this.count--;
    }

    counter.set = function (value){
        this.count = value;
    }

    return counter;
}

let counter = makeCounter();

console.log(counter());  // 0
console.log(counter());  // 1
console.log(counter());  // 2
counter.decrease();  // decreses the value by 1 (current value = 2)
counter.decrease();  // decreses the value by 1 (current value = 1)
console.log(counter());  // 1

counter.set(99); // sets the counter to 99

console.log(counter());  // 99