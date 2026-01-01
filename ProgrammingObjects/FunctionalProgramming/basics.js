//Functional programming:
//Input into a function, output as an mathematical equasion
//Declarative programming!
//No loops, var or let declaration, no object mutations, pure function
//On large scale there are a lot of bugs that can happen, thus we make it less buggy

//Declarative programming = focuses on what data is
//Imperative programming = focuses on how to create dat

//!!!Follow rules, object that are created cant be modified
//!!!Functions and data are separate and not in one object like we had the functions

let person = { name: 'AQlic', age: '02' };
person.age = 20; //object orientated (no bueno)

const updatedPerson1 = { ...person, age: 2 }; //functional (we keep original and never change it)

const haveBirthday = (person) => ({
  //add one year as functional and not object
  ...person,
  age: person.age + 1,
});

const updatedPerson2 = haveBirthday(person);
console.log(person.age); //3
