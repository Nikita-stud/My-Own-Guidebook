// Filter decides what goes and what stays
//Only all "true" will be returned
//All names under 3 or 3 stay
const shortNames = names.filter((name) => name.length <= 3);
console.log(shortNames); // [ "Jo", "Kai" ]

//Pass in other functions into filter that returns either true or false
const shortNames2 = names.filter(isShort);

//All in all what can be passed out
const uniqueWords = words.filter((word, index, array) => {});

//Reduce forces to combine all its elements
// accumulator is total value so far
// current value is what is being added
//0 is the initial value on first run and currentValue is 10
const numbers1 = [10, 20, 30, 40];

const sum = numbers1.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

//Example of an EVEN counter
const numbers = [2, 5, 6, 9, 10];
const evenCount = numbers.reduce((count, num) => {
  // If the number is even, increase count by 1, or leave count as is
  return num % 2 === 0 ? count + 1 : count;
}, 0);

console.log(evenCount); // 3

//TASK
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Keep only numbers greater than 5.
const numbersAboveFive = numbers2.filter((number) => {
  if (number > 5) {
    return number;
  }
});
console.log(numbersAboveFive);

//Double each of those numbers.
const doubledNumbers = numbers2.map((number) => number * 2);
console.log(doubledNumbers);

//Add them all together.
const addAllTogheter = numbers2.reduce((a, b) => {
  return a + b;
}, 0);

console.log(addAllTogheter);

//ORRRRR
const all = numbers2
  .filter((number) => number > 5)
  .map((number) => number * 2)
  .reduce((a, b) => a + b, 0);

console.log(all);
