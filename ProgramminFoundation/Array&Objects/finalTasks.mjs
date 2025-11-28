/*
Functions
Create a function sayHello that takes a name and returns "Hello, {name}!".
Create a function that takes an object { firstName, lastName } using object destructuring and returns a string in the format "lastName, firstName".
Create a function sumAll that takes any number of numeric arguments and returns their sum.
Write a function multiply that has two parameters with default values (e.g. 1), and returns their product.
 
Array Methods (map, filter, reduce)
Given numbers = [1, 2, 3, 4, 5], use .map() to create a new array where each number is doubled.
Given an array of strings, filter out any that have fewer than 5 characters.
Use .reduce() to sum an array of prices and return the total.
 
Map & Set
Create a Set from [1, 2, 2, 3, 4, 4] and log its size.
Create a Map of 3 products with their prices. Retrieve the price for one of them and log it.
Convert a Map into an array of [key, value] pairs.
 
Sorting
Sort [5, 2, 9, 1] in ascending order.
Sort an array of strings by length (shortest first).
 
Objects & OOP
Create an object student with properties name and age, and a method introduce() that logs "Hi, my name is {name}".
Use a constructor function to create Book objects with title and author.
Add a printSummary() method to Book using the prototype.
Create a class called Car with make, model, and a method drive() that logs "Vroom!".
 
Async (setTimeout / setInterval)
Use setTimeout to log "Hello after 3 seconds".
Use setInterval to count from 1 to 5, then stop.
 
Part 2 - Mini-Projects
Shopping Cart Simulator
Create an array of products (objects with name and price).
Use .filter() to get products above a certain price.
Use .map() to apply a discount to all prices.
Use .reduce() to calculate the total cost of the cart.
Store selected products in a Set so the cart has no duplicates.

Simple Quiz Game
Store questions and answers in an array of objects.
Loop through each question and use prompt() to get the player’s answer.
Keep track of the score in an object with a method addPoint().
At the end, display the score.
(Optional) Use setTimeout to delay showing the final score for dramatic effect.

Event Countdown Timer
Ask the user for an event name and a date with time, in the format YYYY-MM-DD HH:MM (24-hour clock).
JavaScript’s Date object can understand this format better if you replace the space between the date and time with a "T". For example:
2025-12-25 09:30 → 2025-12-25T09:30
Use setInterval to count down the days, hours, and minutes until the event.
Store the event in an object with properties and a method to format time remaining.
Stop the countdown when the event time is reached.
Hint: More about date formatting here: ISO 8601 Date and Time Format.

Contact List Manager
Store contacts as objects (name, phone, email) in an array.
Add a function to add new contacts.
Add a function to search contacts by name using .filter().
Use .map() to return just the names of all contacts.
Store the contacts in a Map keyed by name for quick lookup.

Word Frequency Counter
Ask the user for a sentence (via prompt()).
Convert it to lowercase and split into words.
Use a Map to store each word as a key and its frequency as the value.
Display the result in the console.
*/

//Functions

function sayHello(name) {
  console.log(`Hello ${name}`);
}
const name = {
  firstName: 'Bob',
  lastName: 'Miller',
};

function sayFullName({ fristName, lastName }) {
  return `${fristName}, ${lastName}`;
}
sayFullName(name);

//Map & Set
const numbers = [1, 2, 2, 3, 4, 4];
const set = new Set(numbers);
console.log(set);

const maps = new Map([
  ['bob', 99],
  ['lol', 22],
  ['22', 2],
]);

const mapsArray = [...maps];

for (const [key, value] of mapsArray) {
  console.log(key, value);
}

//Sorting
const numbers2 = [5, 2, 9, 1];

console.log(numbers2.sort((a, b) => b - a));

const fruits = ['apple', 'banana', 'orange'];
//Avoid changing the original array
const sorted = fruits.sort((a, b) => a.trim().length - b.trim().length);

//Objects & OOP

const student = {
  name: 'Bob',
  age: 12,
  introduce() {
    console.log(`Hi, my name is ${this.name}`);
  },
};
//constructor function
function Book(title, author) {
  this.title = title;
  this.author = author;
}
Book.prototype.printSummary = function () {
  return `Book ${this.title}, by ${this.author}`;
};
const newBook = new Book('Bobrules', 'Bob');
console.log(newBook.printSummary());

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  drive() {
    console.log('Vroom!');
  }
}
//Async
setTimeout(function () {
  console.log('Hello after 3 seconds');
}, 3000);

let count = 0;
const myInterval = setInterval(function () {
  count += 1;
  console.log(count);

  if (count === 5) {
    clearInterval(myInterval);
  }
}, 0);

//1
const products = [
  { name: 'gurken', price: 20 },
  { name: 'fruit', price: 2 },
  { name: 'ananas', price: 4 },
];
const abovePrice = products.filter((product) => product.price >= 4);
const discountedPrice = abovePrice.map((product) => product.price / 20);
const totalAmount = discountedPrice.reduce(
  (total, value) => total + value.price,
  0
);
const finishedCart = new Set(totalAmount.map((p) => p.name));

//2
let questions = [
  { question: 'Did it work?', answer: 'Yes' },
  { question: 'Did it work?2', answer: 'Yes2' },
  { question: 'Did it work3?', answer: 'No' },
];

const scoreTracker = {
  points: 0,
  addPoint() {
    this.points += 1;
  },
  reset() {
    this.points = 0;
  },
  getScore() {
    return this.points;
  },
};

for (const question of questions) {
  alert(`${question.question}`);
  const answer = prompt('Answer please:');
  if (answer.toLocaleLowerCase() === question.answer.toLocaleLowerCase()) {
    scoreTracker.addPoint();
  }
  question.answered = answer;
}
alert(`You got Score: ${scoreTracker.getScore}`);
scoreTracker.reset();

//3 Timer
const eventName = prompt('Give me an event name');
const time = prompt('What time? YYYY-MM-DD HH:MM');

if (eventName && time) {
  const timeWithT = time.trim().replace(' ', 'T');
  const eventTime = new Date(timeWithT);

  const countdown = setInterval(function () {
    const now = new Date();
    //Time is in milliseconds
    const timeLeft = eventTime.getTime() - now.getTime();

    //If event passed stop
    if (timeLeft <= 0) {
      clearInterval(countdown);
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const header = document.getElementById('header');
    header.innerText = `${eventName} in ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}

const event = {
  name: eventName,
  eventTime: new Date(time.trim().replace(' ', 'T')),
  timeRemaining() {
    const now = new Date();
    const timeLeft = this.eventTime.getTime() - now.getTime();

    if (timeLeft <= 0) {
      return `${this.name} is here`;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return `${this.name} in ${days}d ${hours}h ${minutes}m ${seconds}s`;
  },
};

//4 List manager
const contacts = [
  {
    name: 'John Doe',
    phone: '555-1234',
    email: 'john@example.com',
  },
  {
    name: 'Jane Smith',
    phone: '555-5678',
    email: 'jane@example.com',
  },
  {
    name: 'Bob Johnson',
    phone: '555-9012',
    email: 'bob@example.com',
  },
  {
    name: 'Alice Williams',
    phone: '555-3456',
    email: 'alice@example.com',
  },
];

function addContact(name, phone, email) {
  contacts.push({ name: name, phone: phone, email: email });
}
function searchContact(name) {
  const foundContact = contacts.filter(
    (contact) => contact.name.toLowerCase() === name.toLowerCase()
  );
  return foundContact;
}
//go through array and enter each object to retrieve name and store as onlyNames
const onlyNames = contacts.map((contact) => contact.name);

// go through array and enter each object to create a new key and value Map
// key will be the name and value the whole object
const storedMap = new Map(contacts.map((contact) => [contact.name, contact]));

//5
const sentence = prompt('Write smt:');
const words = sentence.toLowerCase().split(' ');
const wordFrequency = new Map();

for (const word of words) {
  if (wordFrequency.has(word)) {
    wordFrequency.set(word, wordFrequency.get(word) + 1);
  } else {
    //Set initial word with 1 occurance
    wordFrequency.set(word, 1);
  }
}
console.log(wordFrequency);
