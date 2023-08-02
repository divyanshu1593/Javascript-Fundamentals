// for testing debugger statement
let m;
for (let i=0; i<10; i++){
    m = i **2;
    // the debugger command will be ignored in normal execution of the code
    //debugger;  // it should pause the program execution in debugging mode
    m += 1;
    // some more random code ..
}