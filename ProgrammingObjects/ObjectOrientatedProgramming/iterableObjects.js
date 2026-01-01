//Iterable Objects is any Object that can be looped with for...of

//1. To make it Iterable we assign Symbol.iterator and next()
numbers = {};

numbers[Symbol.iterator] = function () {
  let n = 0; //n and done are assigned that will be returned
  done = false;

  return {
    //2. return all object with next() method
    next() {
      n += 2;
      //will add +2 to 0 until 10, then return true and finito
      if (n == 10) {
        done = true;
      }
      //3. next() returns value and done
      return { value: n, done: done };
    },
  };
};
for (const num of numbers) {
  console.log(num); //{ value: 2, done: false }, { value: 4, done: false } { value: 6, done: false } { value: 8, done: false } { value: 10, done: true }
}
