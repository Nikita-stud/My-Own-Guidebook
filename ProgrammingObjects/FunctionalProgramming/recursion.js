//RECURSION:
//function that runs itself until conditions are met
//here it is -1 until 0
const double = (x) => x * 2;
const triple = (x) => x * 3;
const addFour = (x) => x + 4;
const subtractThree = (x) => x - 3;
const functionsArray = [triple, addFour, subtractThree, double, Math.sqrt];

const getNumber = function (index, currentResult, array) {
  if (index == 0) {
    //index is how many functions there are in the array
    //array[index] is the function currently being executed
    return array[index](currentResult);
  }
  //this is the loop, we -1 index and call the function at that index with currentResult
  return array[index](getNumber(index - 1, currentResult, array));
};
getNumber(functionsArray.length - 1, 10, functionsArray); //We start at the end of the array and move up, since it is easier , also 10 is the initial value passed in
