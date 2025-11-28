//Give functions into and get an object of values
//You call it by new FunctionName
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const myCar = new Car('Toyota', 'Corolla', 2018);
console.log(myCar); // Car {make: 'Toyota', model: 'Corolla', year: 2018}

//Private property is set by _
this._balance = balance;

//All cars, past and future will have this function in describe that you can then access and run
//Better thank writing in the Object since all objects will create this code rathe thn access it
Car.prototype.describe = function () {
  return `${this.year} ${this.make} ${this.model}`;
};
console.log(myCar.describe()); // "2018 Toyota Corolla"

//YOU can check if object has any by
console.log(myCar.hasOwnProperty('make')); // true (own data)
console.log(myCar.hasOwnProperty('describe')); // false (inherited)

console.log(Object.hasOwn(myCar, 'make')); // true
console.log(Object.hasOwn(myCar, 'describe')); // false

/*
//
SUM UP 
//
//
//
*/
//
// Adding to one instance affects only that object
carA.color = 'blue';
console.log(carB.color); // undefined

// Adding to the constructor function (the recipe) doesn't reach instances
Car.engineType = 'Hybrid';
console.log(carA.engineType); // undefined

// Adding to Car.prototype shares across all instances
Car.prototype.start = function () {
  //if function has value then call it by
  //carA.start(placed value)
  return `Starting ${this.make}...`;
};

console.log(carA.start()); // "Starting Toyota..."
console.log(carB.start()); // "Starting Ford..."

//NOW this is also possible without creating it for all objects
//just use "class and "constructor"
//describe is the prototype
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  describe() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

const carA = new Car('Toyota', 'Corolla', 2018);
console.log(carA.describe());

//To add onto (Dont get)
class ElectricCar extends Car {
  constructor(make, model, year, batteryCapacity) {
    // Call the parent constructor
    super(make, model, year);
    // Extend by adding a new property
    this.batteryCapacity = batteryCapacity;
  }
  // Add a new method for electric cars only
  charge() {
    return `Charging ${this.make} (${this.batteryCapacity} kWh capcity)...`;
  }
  // Override an existing method, building on the parent version
  describe() {
    return `${super.describe()} [Electric, ${
      this.batteryCapacity
    } kWh battery]`;
  }
}

// Task
//Create Animal constructor
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    `${this.name} makes noise`;
  }
}

//dog extends on animal class
class Dog extends Animal {
  //What will be available
  constructor(name, breed) {
    //Gets from Animal by calling Animal
    super(name);
    //Adds breed
    this.breed = breed;
  }
  //only available prototype in dog extention
  fetch() {
    return `${this.name} is fetching the ball`;
  }
  speak() {
    return `${this.name} barks`;
  }
}
const dog = new Dog('BIgBoy', 'dog');
console.log(dog.speak(), dog.fetch());
