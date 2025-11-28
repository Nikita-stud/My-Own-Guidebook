/*
Write a function called formatName that takes two parameters:
name (a string),
formatter (a callback function that formats the string).

It should return the result of calling formatter(name).

Create three arrow functions that can be passed in as formatters:
titleCase: capitalizes the first letter, lowers the rest.
Example: "kari" → "Kari"
shout: makes the name uppercase.
whisper: makes the name lowercase.
Call formatName with different names and different formatters. Print the results.
*/

function formatName(name, formatter) {
  let result;

  for (const sepFunction of formatter) {
    result = sepFunction(name);
    console.log(result);
  }
  return result;
}

const correctNameLettered = (passedName) => {
  let sentenceTrimmed = passedName.trim();
  fr;
  let firstLetter = sentenceTrimmed[0].toUpperCase();
  let restOfSentence = sentenceTrimmed.slice(1).toLowerCase();
  return firstLetter + restOfSentence;
};

const shoutName = (passedName) => passedName.toUpperCase();
const whisperName = (passedName) => passedName.toLowerCase();

const functions = [correctNameLettered, shoutName, whisperName];
formatName('Bob', functions);

//Create an array of numbers from 1 to 20.
const myArray = [];

for (let i = 1; i <= 20; i++) {
  myArray.push(i);
}
//.filter() to keep only the even numbers.
//Sort those numbers from largest to smallest.
//Use .map() to turn each number into a string like "Number: X".

const filteredArray = myArray
  .filter((number) => number % 2 === 0)
  .sort((a, b) => b - a)
  .map((number) => `Number: ${number}`);

setTimeout(function () {
  console.log(filteredArray);
}, 1000);
