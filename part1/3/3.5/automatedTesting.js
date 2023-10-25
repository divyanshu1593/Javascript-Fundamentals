"use strict";

// we will use mocha for automated testing
// and chai for diffrence asserts like assert.eaqual

const chai = require('chai');

// making the chai assert global
let assert = chai.assert;


/**
 * 
 * @param {number} x 
 * @param {number} n 
 * @returns {number} x raised to n
 */
function pow(x, n){
    
    if (n < 0) return NaN;
    if (parseInt(n) !== n) return NaN;

    let result = 1;

    for (let i = 0; i < n; i++){
        result *= x;
    }

    return result;
}

// generally test cases for mocha are written in a different file
describe("pow", () => {

    before(() => {
        console.log("This is runnig before all the tests!");
    });

    after(() => {
        console.log("This is running after all the tests!");
    });

    beforeEach(() => {
        console.log("This is running before each test");
    });

    afterEach(() => {
        console.log("This is running after each test");
    });

    it("2 raise to power three", () => {
        assert.equal(pow(2, 3), 8);
    });

    it("3 raise to power four", () => {
        assert.equal(pow(3, 4), 81);
    });

    describe("raised to power three", () => {
        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} in the power 3 is ${expected}`, function() {
              assert.equal(pow(x, 3), expected);
            });
        }
        
        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        } 
    })

    describe("raised to non integer non positive number", () => {
        
        it("raised to n < 0", () => {
            assert.isNaN(pow(2, -5));
        });

        it("raised to non integer", () => {
            assert.isNaN(pow(2, 1.5));
        });
    });

});