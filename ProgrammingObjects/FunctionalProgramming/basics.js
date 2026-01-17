//Functional programming:
//Input into a function, output as an mathematical equasion
//Declarative programming!
//No loops, no object mutations, pure function
//!!!Always declared with const and nor var or let
//!!!Data and Function are separate places
//On large scale there are a lot of bugs that can happen, thus we make it less buggy

//Declarative programming = focuses on what data is
//Imperative programming = focuses on how to create dat

//!!!Follow rules, object that are created cant be modified
//!!!Functions and data are separate and not in one object like we had the functions

//There are 3 concepts to Functional Programming
//1. BASICS:
let person = { name: 'AQlic', age: '02' };
person.age = 20; //object orientated where we would modify the Object itself, thus we save it as let

const updatedPerson1 = { ...person, age: 2 }; //functional (we keep original and never change it thus const)

//2. SEPARATION of DATA and FUNCTIONS
//Object orientated way:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  birthday() {
    //Function is stored with data
    this.age += 1;
  }
}
let personOPP = new Person('BOb', 20);
personOPP.birthday(); //Data is modified
console.log(personOPP); //Bday will be 21

//Functional way:
const person2 = { name: 'AQlic', age: '02' }; //Data is saved here

const haveBirthday = (person2) => ({
  //Function is created here
  ...person2,
  age: person.age + 1,
});

const updatedPerson2 = haveBirthday(person); //Function is called and saved here
console.log(person.age); //3

//3. FIRST CLASS FUNCTIONS
