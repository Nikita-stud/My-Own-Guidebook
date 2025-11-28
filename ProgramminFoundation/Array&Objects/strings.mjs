// String
let word = 'Hello';
console.log(word[0]); // H

//still cant change with
word[0] = 'h'; // No effect

// Strings even have the length property
console.log(word.length); // 5

//split into array of characters or words
let word = 'Hello';
const letters = word.split('');
console.log(letters); // ['H', 'e', 'l', 'l', 'o']
const words = word.split(' '); //SPACEEEE in between

let joined = letters.join('');
console.log(joined); // 'Hello'

let csv = 'apple,banana,orange';
const fruits = csv.split(',');

console.log(fruits); // ['apple', 'banana', 'orange']

//to add strings
const newWord = 'boy';
let greeting = word + newWord;
//or
let greeting2 = word.concat(newWord);

// Strings are alphabetical
// where process continues until a difference is found,
// If both are apple but one is uppercase and the other lowercase,
// the uppercase letter is considered smaller than the lowercase letter.
let a = 'apple';
let b = 'banana';

console.log(a < b); // true

//You can create string objects, it will be different
// than a string primitive
let object = new String('hello');

/*
There are 3 escape characters you can add to a sting:
\n - New Line
\t - Tab
\` - Single Quote
*/
let quote = 'She said,\n "I\'m learning \t JavaScript!"';
console.log(quote); // She said,
// "I'm learning 	 JavaScript!"

//To get rid of the whitespace
word.trim();

//TO add or get rid of space (creating a new string)
let price = '9.99';
//in total should be 6 char in that string with spaces
console.log(price.padStart(6)); // '  9.99'
//in total 10char and add . to empty spaces (Dont have an open "", this does not work)
let item = 'apple';
console.log(item.padEnd(10, '.')); // 'apple.....'

//all char smaller/bigger
word.toUpperCase();
word.toLowerCase();

//get only part of string, start at index 0 and up to index 10
word.slice(0, 10);
//can use just -8 to get last 8 digets

//same but if start index is bigger then it changes both places
word.substring(0, 10);

//change strings (only first occurrence) creating new string
let phrase = 'I love bananas';
let result = phrase.replace('bananas', 'apples');

console.log(result); // 'I love apples'

//change string (all occurrences)
let result2 = phrase.replaceAll('bananas', 'apples');

//finds if it exists and returns boolean
word.includes('name'); //true
//if includes name looking from index 3
word.includes('name', 3); //false
word.startsWith('IMG_'); //false
word.endsWith('.jpg'); //false

//find first index where located
//if none then -1
word.indexOf('name'); //4

//find last index (in more times than last index of last repeat (first letter))
word.lastIndexOf('name'); //8

// get first letter and change to large
message = message[0].toUpperCase() + message.slice(1);
