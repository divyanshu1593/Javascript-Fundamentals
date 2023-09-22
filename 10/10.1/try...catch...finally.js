"use strict";

// if error occured in try then instead of killing the script(stoping the execution) we can catch it
// Example

try {
    console.log(somethingUndefined);
} catch (err) {
    console.log('error handling started');
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
    console.log('error handled');
}

// an error object will be assigned to err.
// error object have name and message. and it generally also has stack


// if we dont want to do anthing with err then we can ommit it

try {
    someBadCode;
} catch {  // no (err)
    console.log('some error occured');
}


// we can throw custom errors

try {
    throw {  // using throw operator we can throw anything as a error. but we should throw object with name and message
        name: 'customError',
        message: 'This is a custom made error',

        toString(){
            return `${this.name}: ${this.message}`
        }
    }
} catch(err) {
    console.log(err.toString());
}


// there are many constructor by which we can throw some common errors with custom message
try{
    throw new Error('A custom error');  // other constructor can be SyntaxError, TypeError, ReferenceError
} catch (err) {
    console.log(err);
}


// in catch we can check the type of error and if the catch knows how to handle it then it sholuld handle it otherwise it should rethrow it
try {
    try {
        throw new Error('This is a custom error');
    } catch(err) {
        if (err instanceof SyntaxError){  // we can also use err.name == 'SyntaxError' or we can use err.constructor.name == 'SyntaxError'
            console.log('error handled');
        } else {
            console.log('rethrowing error');
            throw err;
        }
    }
} catch (err) {
    console.log(err);
    console.log('error handled externally');
}


// finally have code that we want to run no matter what. i.e. if there are error or no error
// code in finally block alsways run no matter what

function func(){
    try{
        console.log('here');
        return 1;
        console.log('will never reach here');
    } catch {
        console.log('something');
    } finally {
        console.log('This will always run!');
    }
}

console.log(func());  // so here before returning the finally block was run

// try...finally is also possible

try {
    console.log('something');
} finally {
    console.log('always run');
}


// glocal caugth
process.on('uncaughtException', (err, src) => {
    console.log('handling uncaught exception');
    console.log(err);
    console.log(src);
    console.log('handled uncaught exception');
});

someUncaughtException;