export function func(){
    console.log("inside function func");
}

// a = 5;  // This line will give error becuase modules are always in strict mode

console.log(import.meta);  // gives info about the curent module (like url)