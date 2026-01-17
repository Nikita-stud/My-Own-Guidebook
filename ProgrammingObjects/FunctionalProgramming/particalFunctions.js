//PARTIAL APPLICATION:
//create functions with some arguments presetconst addThree = (x, y, z) => x + y + z;
const addThree = (x, y, z) => x + y + z; //This is straightforward - a function that takes 3 parameters and adds them.

//This takes x and returns a new function that takes y and z
const addPartial = (x) => (y, z) => addThree(x, y, z);
const addTwo = addPartial(0); //  x is 0
addTwo(2, 3); // 5

//CURRYING:
//EXAMPLE how it actually looks:
//function take f and expects 3 arguments
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

const logNow = curryLog(new Date());
const debugNow = logNow('DEBUG');
curryLog(new Date())('DEBUG')('some debug');

//RECURSION:
//calls itself until conditions met, here it is -1 until 0
const double = (x) => x * 2;
const triple = (x) => x * 3;
const addFour = (x) => x + 4;
const subtractThree = (x) => x - 3;
const functionsArray = [triple, addFour, subtractThree, double, Math.sqrt];

const getNumber = function (index, currentResult, array) {
  if (index == 0) {
    return array[index](currentResult);
  }
  return array[index](getNumber(index - 1, currentResult, array));
};
getNumber(functionsArray.length - 1, 10, functionsArray);
