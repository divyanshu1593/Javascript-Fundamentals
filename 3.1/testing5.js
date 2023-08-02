// code to test step over feature
// it will skip the next step if it is a function call

function func(n){
    console.log(n);
    if (n > 0){
        func(n-1);  // this will be skiped by the step over feature
    }
}
console.log("for testing");
func(5);