//Primitives = string,number,boolean,null, undefined,symbol,bigInt
//Property = in Object the key and not value, can start with _ , $ , letter, use rather camelCase
//Method = Function
//Dot notation = Access.like.this

const myObject = {
  name: 'Bob',
  type: 'Male',
  hight: '190',
  legs: {
    left: 'leftLeg',
    right: 'rightLeg',
  },
  walk: function (status) {
    this.myStatus = status;
  },
};
legs.includes(left); //true

myObject.walk(status); //Function call
//Add new function to Object
myObject.newWalk = function () {
  return (this.legs.walk = 'true');
};

const { name, type } = myObject; //Destructuring
const { country = 'Norway' } = myObject; //Set default value
myObject.arms = 2; //Add property and value
delete myObject.arms; //Delete property

//Used on specific Characters, numbers or name that have been changed var prop = "name"
myObject['name']; //Looks up the Property in my Object
myObject['legs']['left']; //Enter Object inside of Object
myObject.legs['left']; //same
myObject['legs'].left; //same
const isThere = 'bobMarley'; //if there is bobMarley property in myObject then change value
myObject[isThere] = 10;

const myObject2 = myObject; //Name change of Object
myObject2.name = 'New name'; //Value change of Object

//Objects in Global Scope can use functionalities such as Math objects
//Data objects and Map, Set
function Person(name, surname, dateOfBirth) {
  this.name = name;
  this.surname = surname;
  this.dateOfBirth = dateOfBirth;
  this.currentAge = function () {
    var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
}
