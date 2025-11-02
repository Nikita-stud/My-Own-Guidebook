let tasks = ['Wash dishes', 'Walk dog'];

tasks.push('Buy groceries'); // Adds last
tasks.pop(); // Deletes last
tasks.unshift('Do laundry'); // Adds first
tasks.shift(); // Deletes first

// copy entire array
const someTasks1 = tasks.slice();

// Get tasks from index 1 up to (but not including) index 4
const someTasks2 = tasks.slice(1, 4);

// At index 2 remove 1 item
tasks.splice(2, 1);

// At index 2, remove 0 items, add number 99
numbers2.splice(2, 0, 99);

// At index 2, remove 1 item, and insert 88 and 77
numbers3.splice(2, 1, 88, 77);

// At index 1, remove two elements and store them in 'removed'
// ONLY Store removed elements in a variable
const removed = numbers4.splice(1, 2);

// Add both arrays into a new array while displaying all elements
const allDrinks = [...coldDrinks, ...hotDrinks];

//Old way to copy array
const warmColors = ['red', 'orange'];
const coolColors = ['blue', 'green'];
const allColors = warmColors.concat(coolColors);
console.log(allColors); // ["red", "orange", "blue", "green"]

// Creating array out of values
const colors = Array.of('red', 'green', 'blue'); // ["red", "green", "blue"]

// Creating array with 3 empty slots , not undefined
const empty = new Array(3); // [ 3 empty elements ]

// Created array with 5 slots filled with 0
const filled = new Array(5).fill(0); // [0, 0, 0, 0, 0]

//For...of loop,looping though array if you DONT care about index
//"for each fruit of fruits, do something"
for (const fruit of fruits) {
  console.log(fruit);
}
//For...in loop,looping though object and only for index
for (const i in fruits) {
  console.log(fruits[i]);
}
//This is also where .forEach() method is useful
