const player = {
  score: 4200,
};
//You can destructure
const { score } = player;
console.log(score);

// also change the name
const { score: userScore } = player;
//or set default value
const { country = 'Norway' } = player;

//You can always add later both key and value
//This also updates if name already present
player.name = 'Bob';

//Access though
console.log(player.name); // Dot notation
console.log(player['score']); // Bracket notation

//For...in loop
for (let key in player) {
  console.log(key); //score
  console.log(player[key]); //4200
}
// rule: If you care about the order of items and they’re all the same type of thing (like a list of scores), use an array.
// rule: If you care about named properties that can be different types and represent different aspects of the same thing, use an object.

//to change property just set a new value same for functions as value
player.score = 8;

//store functions in object
const player2 = {
  levelUp: function () {
    this.level++;
    console.log(`${this.name} reached level ${this.level}!`);
  },
};
player.levelUp();
//or
player['levelUp']();

//Same as just creating empty Object and adding later
const truck = new Object();
truck.make = 'Volvo';

/*
//
SUM UP
//
//
//
*/
// Literal, all at once
const book = { title: '1984', author: 'George Orwell' };

// Literal, then add
const bike = {};
bike.make = 'Giant';

// Constructor, then add
const anotherCar = new Car('Ford', 'Focus', 2019);
anotherCar.owner = 'Sam';

// Adding to the constructor function (the recipe), not the instance
Car.country = 'Japan';
console.log(anotherCar.country); // undefined
