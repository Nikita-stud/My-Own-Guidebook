//FIRST CLASS FUNCTIONS
//Basically: functions can be stored in variables, passed as arguments to other functions, and returned from other functions
//Thus higher order functions are possible
//Pass in functions as arguments
const greet = function (name) {
  return `Hello, ${name}!`;
};

const sayHello = function (greetFunction, userName) {
  return greetFunction(userName);
};
console.log(sayHello(greet, 'Bob')); //sayHello function is called and greetFunction is the greet function passed in as argument

//Return functions from functions
const createGreeter = function (greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
};
const greeter = createGreeter('Hi'); //is stored in first function , greeter is the inner function being returned
console.log(greeter('Alice')); //Hi, Alice!
