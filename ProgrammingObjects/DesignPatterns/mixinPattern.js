//MIXIN: methods you can mix into
let sayHiMixin = {
  sayHi() {
    //Expects to have this.name from other class
    alert(`Hello ${this.name}`);
  },
  sayBye() {
    alert(`Bye ${this.name}`);
  },
};

//class that creates name property
class User {
  constructor(name) {
    this.name = name;
  }
}
//Object assign creates a new object for every user prototype
//User.prototype is the User Class that adds on sayHiMixin properties to itself!!!
Object.assign(User.prototype, sayHiMixin);

//Now User has all sayHiMixin properties
new User('John').sayHi(); //Hello John
