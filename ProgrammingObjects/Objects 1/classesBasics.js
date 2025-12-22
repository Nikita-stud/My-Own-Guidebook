//We can create Class, it is a function that will create an Object
//You will parse values inside and it will create an object
//!!! IN classes you wont see functions called, thus need to set value already prior that will be shown
class MyClass {
  //1.Add parsed in value into function here (status)
  constructor(name, type, hight, left, right, status) {
    this.name = name;
    this.type = type;
    this.hight = hight;
    this.legs = {
      left: left,
      right: right,
    };
    //2.We have to set myStatus prior since it
    //will only be added in walk function down below
    this.myStatus = null;
  }
  //3.now when we call walk and parse in status value it will create myStatus
  walk(statusValue) {
    this.myStatus = statusValue;
  }
}

const newObject = new MyClass('Bob', 'male', '190', 'left', 'right', 'status');
console.log(newObject.myStatus); // null

newObject.walk('walking');
console.log(newObject.myStatus); // 'walking'

//Object Constructor Function, same as class but then function is visible in console
//So all Objects get a copy of the manual, taking up way more space
//OBS: incased as in a function (){} instead of (){{}}
function MyFunction(name, type, hight, left, right, status) {
  this.name = name;
  this.type = type;
  this.hight = hight;
  this.legs = {
    left: left,
    right: right,
  };
  this.myStatus = status;
  this.myFunc = function (statusValue) {
    this.myStatus = statusValue;
  };
}

const newObject2 = new MyFunction(
  'Bob',
  'male',
  '190',
  'left',
  'right',
  'status'
);

//!!!! WRONG WAY TO ADD PROPERTY
MyFunction.newProperty = 'new';
//!!! RIGHT WAY TO ADD PROPERTY
MyFunction.prototype.newProperty = 'new';



//EXAMPLE OF ALL LEARNED 
const dog = {
  name: 'Rex',
  age: 5,
  bark: function () {
    console.log('Bark bark!');
  },
};

//Class constructor of dog object and adds year of birth function
class MyDog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  bark() {
    console.log('Bark bark!');
  };
}
MyDog.prototype.birth = function() {
  return 2025 - this.age;  
};


//Object constructor of dog object
function MyDog2(name, age) {
  this.name = name;
  this.age = age;
  this.bark() = function() {
    console.log('Bark bark!');
  }
}
MyDog2.prototype.birth = function(){
  return 2025 - this.age; 
}


//Extend a class for
// class ElectricCar extends Car {
//   constructor(make, model, year, batteryCapacity) {
//     // Call the parent constructor
//     super(make, model, year);
//     // Extend by adding a new property
//     this.batteryCapacity = batteryCapacity;
//   }
//   // Add a new method for electric cars only
//   charge() {
//     return `Charging ${this.make} (${this.batteryCapacity} kWh capcity)...`;
//   }
//   // Override an existing method, building on the parent version
//   describe() {
//     return `${super.describe()} [Electric, ${
//       this.batteryCapacity
//     } kWh battery]`;
//   }
// }
