//Rest operator adds all values passed into argument
function logAllNumbers(...numbers) {
  console.log('You gave me these numbers:', numbers);
}

logAllNumbers(1, 2, 3, 4);

// You can save and call multiple functions
const sayHi = function () {
  console.log('Hi!');
};

const sayBye = function () {
  console.log('Bye!');
};

const messages = [sayHi, sayBye];

for (const fn of messages) {
  fn(); // runs both functions
}

//give functions different names
function shoutHello() {
  alert('HELLO!');
}

const saySomething = shoutHello;
saySomething();

// arrow function
const greet = () => {};
greet();

//If one param / get rid of ()
const greet2 = (name) => {
  console.log('Hi, ' + name + '!');
};

//If only on line (it also returns then)
const double = (n) => n * 2;

//Example of use
const performOnEach = (array, callback) => {
  let newArray = [];
  for (const number of array) {
    // here is the callback the function I declare when calling performOnEach
    let calledNumber = callback(number);
    newArray.push(calledNumber);
  }
  return newArray;
};

console.log(performOnEach([1, 2, 3], (num) => num * 2));
