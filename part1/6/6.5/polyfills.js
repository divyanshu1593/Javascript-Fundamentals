"use strict";

// we can use global object to add functionality that is missing in old browser

// Example
// in node there is no alert function, so we can polyfill it here

if (!globalThis.alert){  // in browsers globalThis.alert will be difined
    globalThis.alert = (value) => {
        console.log(value);
    }
}

// now we can use alert anywhere

alert('Hello, World!');