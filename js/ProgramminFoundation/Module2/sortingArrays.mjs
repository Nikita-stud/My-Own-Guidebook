const fruits = ['banana', 'apple', 'cherry'];
//Sorts array alphabetical (turns everything into string, thus numbers dont work)
fruits.sort();

//therefor use compare function
//compares a and b, if negative a comes before b
//if positive number then b comes before a
// during 0 stays the same

//a-b if "a" is smaller than "b" then "a" negative thus "a" comes first
//Ascending: (a, b) => a - b
//Descending: (a, b) => b - a
const numbers = [10, 2, 5];
numbers.sort((a, b) => a - b); //[ 2, 5, 10 ]
numbers.sort((a, b) => b - a); //[ 10, 5, 2 ]

//Sort a into a new array
const sortedNumbers = [...numbers].sort((a, b) => a - b);

//compares two strings and gives back it alpabetical
const names = ['Charlie', 'Alice', 'Bob'];
names.sort((a, b) => a.localeCompare(b)); // [ "Alice", "Bob", "Charlie" ]
names.sort((a, b) => b.localeCompare(a)); // [ "Charlie", "Bob", "Alice" ]

//Task
const productNames = ['Banana', 'apple', 'Cherry', 'apricot'];
const productPrices = [9.99, 1.5, 4.25, 12.0];
// 1. Alphabetical (A–Z)
console.log(productNames.sort((a, b) => a.localeCompare(b)));
// 2. Reverse alphabetical (Z–A)
console.log(productNames.sort((a, b) => b.localeCompare(a)));
// 3. Prices: Low → High
console.log(productPrices.sort((a, b) => a - b));
// 4. Prices: High → Low
console.log(productPrices.sort((a, b) => b - a));
