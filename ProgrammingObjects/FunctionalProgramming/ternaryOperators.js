//If true then or if false then
//Example for faster fetches with same output
const DEVELOPMENT = true;

const getFakeData = () => {
  return { data: 'This is fake data from local storage.' };
};

const getRealData = () => {
  //API call to get real data from internet
};

const getData = DEVELOPMENT //If development true
  ? getFakeData //we use fake date stored on pc
  : getRealData; //we use real data from internet

//Arrays can hold functions
const double = (x) => x * 2;
const triple = (x) => x * 3;
const addFour = (x) => x + 4;
const subtractThree = (x) => x - 3;

const functionsArray = [triple, addFour, subtractThree, double, Math.sqrt];
var number = 10;
functionsArray.forEach((func) => (number = func(number))); //for each function in array, we call the number and set it into each function
console.log(number); //Output after all functions applied

//Higher order functions
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

const combine2and3 = (func) => func(2, 3); //We pass in a function as argument, either add or subtract. the values are already 2 and 3

combine2and3(add); // -> 2 + 3 call it here
combine2and3(subtract); // -> 2 - 3
combine2and3(Math.min); // -> 2

//Currying functions - returning functions
const addNumber = (y) => (x) => x + y; //y is outer function, x return from inner, we remember what y is then pass in x and and add x and y returning from x function to y function
const addFive = addNumber(5); //We create a new function with 5 as y
addFive(10); // -> 15 we call the new function with x as 10

//CLOSURE
//Calling a function and returning another function that has private variables accessible only by the returned function
const Student = ({ name, age, gender, university }) => {
  // These variables are PRIVATE
  var _name = name;
  var _age = age;
  var _gender = gender;
  var _university = university;

  // This object is PUBLIC
  return {
    //The function returns an object with methods
    //If I dont return a value then others cant access it, not even though _age or such
    getName: () => _name,
    getAge: () => _age,
    getGender: () => _gender,
    getUniversity: () => _university,

    //Only value I can change is university
    setUniversity: (newUniversity) => (_university = newUniversity),
  };
};

const me = Student({
  name: 'Mark',
  age: 22,
  gender: 'male',
  university: 'Oxford',
});
console.log(me.getUniversity());
me.setUniversity('Cambridge');
console.log(me.getUniversity());

//Example: where all is combined
const TextGenerator = ({ textToAdd }) => {
  var _textToAdd = textToAdd;
  return {
    generateText: (x) => (y) => x + _textToAdd + y,
  };
};
//Give those, create a TextGenerator that takes in a textToAdd parameter
const tg = TextGenerator({ textToAdd: '.....' }); //saved as _textToAdd
const fun = tg.generateText('First Text'); //saved as x
console.log(fun('Second Text')); //saved as y -> First Text.....Second Text
