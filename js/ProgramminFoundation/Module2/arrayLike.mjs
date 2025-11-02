// LIKE array but not,
// that stores unique values
//thus cant access through[]
//But you can make an array!!!!
const emails = new Set();
emails.add('one');
emails.delete('one');
emails.has('one');

//map transforms each element in array and returns new array
//returns only email title from array objects into array
emails.map((email) => email.title);
//Only save unique email title in the set
new Set(emails.map((email) => email.title));

//You can still loop through it like array
for (const email of emails) {
}

//make array out of set
const emailsArray = [...emails];

//Have to add keys to values
//Better than arrays if you want just to find something
//Extracts just value or key you want
const scores = new Map();

//Will replace any value that has this key if there is any
scores.set('Bob', 22);
scores.get('Bob');
scores.delete('one');
scores.has('one');

//You can loop though a Map but still better to make array first
for (const [name, score] of scores) {
  console.log(`${name} scored ${score}`);
}

// add 25% tax to each price
const prices = [100, 200, 300];
const pricesWithTax = prices.map((price) => price * 1.25);
