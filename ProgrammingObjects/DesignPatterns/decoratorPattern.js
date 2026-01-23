//Decorators = design pattern to promote code reuse
/**
 * 
 * Base Pizza (20)
    └── + Jalapeno (4)
            └── + Cheese (2)
                    = 26

*/
function Pizza() {
  this.cost = function () {
    return 20;
  };
  this.name = function () {
    return 'Pizza';
  };
}

// Decorator 1
function AddJalapeno(pizza) {
  var c = pizza.cost(); //save cost under c
  pizza.cost = function () {
    //return this.cost to be function from pizza
    return c + 4;
  };
}

// Decorator 2
function AddMoreCheese(pizza) {
  var c = pizza.cost();
  pizza.cost = function () {
    return c + 2;
  };
}
const pizza = new Pizza();
AddJalapeno(pizza);
AddMoreCheese(pizza);
console.log(pizza.cost());
// Output: 26
