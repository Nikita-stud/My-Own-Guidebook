//1.sign up https://www.npmjs.com/signup
//Free version, you can only create availbale for everyone
//Paid version, I can have my hidden npm packages

//2.login in VSCODE
npm login

//3. check if logged in successfully
npm whoami

//4.create package.json
npm init

//index.js:
module.exports = function addFourNumbers(a, b, c, d) {
    return a + b + c + d;
}

//test.js, The assert.scrictEqual() method checks whether two values are identical
var assert = require('assert');
var addFourNumbers = require('./index');

assert.strictEqual(addFourNumbers(0, 1, 2, 3), 6);
assert.strictEqual(addFourNumbers(3, 2, 1, 0), 6);

console.log("Tests completed!");

//5.run test file
node test
//or add to script 
"test": "node test.js"

//6. create README.md
# Add four numbers

This module helps you to add four numbers.

## Install


npm install add-four-numbers


## USAGE
**`addFourNumbers(a, b, c, d)`**


// Load library
var addFourNumbers = require('add-four-numbers');

// Calculate 0 + 1 + 2 + 3
console.log(addFourNumbers(0, 1, 2, 3)); // => 6

## Test


npm test

License ISC