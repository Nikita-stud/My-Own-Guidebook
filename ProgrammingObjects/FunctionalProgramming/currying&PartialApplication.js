//PARTIAL APPLICATION:
//Creating function with fewer params than the original function
//Great when one value never changes like tax rate, or time zone etc.
//Instead of create functions with some arguments presetconst addThree = (x, y, z) => x + y + z;
const addThree = (x, y, z) => x + y + z; //This is straightforward - a function that takes 3 parameters and adds them.

//DO THIS !!! This takes x and returns a new function that takes y and z
const addPartial = (x) => (y, z) => addThree(x, y, z);
const addTwo = addPartial(0); //  x is 0
addTwo(2, 3); // 5

//CURRYING:
//!!! Only take 1 argument at a time and return a new function that takes the next argument
//Great for creating functions with preset arguments like time, rest can be added later
//EXAMPLE how it actually looks:
//function take sum and expects 3 arguments
//Returns a new function that takes those arguments one at a time

function curry(f) {
  return function (a) {
    return function (b) {
      return function (c) {
        return f(a, b, c);
      };
    };
  };
}
function sum(a, b, c) {
  return a + b + c;
}

let addCurrying = curry(sum); //f stores sum function
addCurrying(5); //a stores 5
addCurrying(5)(6); //b stores 6
addCurrying(5)(6)(7); //c stores 7 and calls sum(5,6,7) returning 18

//in the real world
function log(date, importance, message) {
  alert(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}
log(new Date(), 'DEBUG', 'some debug');

//this function above values will be added one by one
const curryLog = (date) => (importance) => (message) =>
  log(date, importance, message);

const logNow = curryLog(new Date()); //we save date now as date under logNow
const debugNow = logNow('DEBUG'); //logNow has date and adds DEBUG as importance
debugNow('some debug'); //debugNow has date and importance, adds message and calls log()
curryLog(new Date())('DEBUG')('some debug'); // we can also call it all at once
