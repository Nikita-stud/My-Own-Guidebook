//higher order functions are functions that take other functions as arguments
//Turns out those are higher order functions inbuilt in JS for arrays
map(); //transform each element
const modifiedNumbers = numbers.map((x) => x + 2).map((x) => x * 2); // [6, 8, 14, 22, 28]

filter(); //filter based on condition
const oddModified = numbers.map((x) => x + 2).filter((x) => x % 2 == 1); // [3, 7, 11]

reduce(); //reduce to single value
const value = functionsArray.reduce((acc, func) => {
  return func(acc);
}, 10);

every(); //boolean if all true
const allEven = numbers.every((x) => x % 2 == 0); // false

//just pass in a function instead of writing function inside
const index = (x) => x % 2 == 0;
const allEven2 = numbers.every(index); // false

some(); //boolean if true
const someEven = numbers.some((x) => x % 2 == 0); // true

//!!!slice creates a shallow copy of a portion of an array
//making it perfect for non mutating operations
//reverse the numbers array
const reversed = numbers.slice().reverse(); // [12, 9, 2, 5, 1]

//copy array then sort it, if 1 then returning above -1 and 0 they equal
const numbers = [1, 5, 2, 9, 12];
const ascendingStrings = (a, b) => {
  if (a.toString() < b.toString()) return -1;
  if (a.toString() > b.toString()) return 1;
  return 0;
};
const sortedNumbers = numbers.slice().sort(ascendingStrings); // [1, 12, 2, 5, 9]
