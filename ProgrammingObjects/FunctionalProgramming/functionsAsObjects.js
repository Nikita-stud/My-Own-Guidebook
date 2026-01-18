//Function can be treated as objects
//CALL
const add = (x, y, z) => x + y + z;
console.log(add(1, 2, 3)); //normal call
console.log(add.call(null, 1, 2, 3)); //call with null as "this" and arguments

//APPLY takes arguments as array
const add = (x, y, z) => x + y + z;
console.log(add(1, 2, 3));
console.log(add.apply(null, [1, 2, 3]));

//BIND creates a new function with preset arguments
//Same as partial application
const add = (x, y, z) => x + y + z;
var func1 = add.bind(null, 1, 2);
var func2 = add.bind(null, 10);
func1(10); // 13
func2(1, 5); // 16

//BIND as currying, we add and add until call done
function add(x = 0, y = 0) {
  const total = x + y;
  return {
    add: add.bind(null, total),
    done: () => total,
  };
}
add(2).add(3).add(5).add(1).done(); // 11
