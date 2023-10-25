/*
Compare the two code fragments.

The first one uses finally to execute the code after try...catch:

try {
  work work
} catch (err) {
  handle errors
} finally {
  cleanup the working space
}
The second fragment puts the cleaning right after try...catch:

try {
  work work
} catch (err) {
  handle errors
}

cleanup the working space
We definitely need the cleanup after the work, doesn’t matter if there was an error or not.

Is there an advantage here in using finally or both code fragments are equal? If there is such an advantage, then give an example when it matters.
*/

// here if the code stop after try or catch then the clean up will not happen, so we should use finally
// so in case of a function if we return in try or catch block then code after that wont run
// or if the catch block rethrow the error then also the code after it wont run

// Example

function func(){
    try{
        console.log('work work');
        return 1;
    } catch {
        console.log('catch errors');
    } finally {
        console.log('clean up');
    }
}

func();