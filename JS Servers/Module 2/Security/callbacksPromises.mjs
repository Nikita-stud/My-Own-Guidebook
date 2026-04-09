//NodeJs is async and runs on loops
//process.nextTick() = Don't run this now. Finish the current task first, then run this at the start of the next loop
//done() = is whatever your name it, it is the callback function (increased) => console.log(increased)

//SEQUENTIAL EXECUTION:
function addOne(number, done) {
  process.nextTick(() => {
    done(number + 1);
  });
}
addOne(5, (increased) => console.log(increased));

console.log('end'); //end 6

//PROMISES:
//You can anytime stop the promise by using rejects( new Error("Error in the issue"))
var delay = (seconds) =>
  new Promise((resolves, rejects) => {
    //resolve is called (making Promice fullfilled) (rejects on error)
    setTimeout(() => {
      resolves('the long delay has ended'); //everything inside resolve will be send to first (.then)
    }, seconds);
  });

delay(1)
  .then((message) => console.log(message))
  .then(() => 42) //in next returns as number
  .then((number) => console.log(`Hello world: ${number}`))
  .catch((error) => console.log(error)); //catches any error in the promises

console.log('end first tick'); //end first tick,the long delay has ended, Hello world: 42

//We can make anything a promise by fetching var { promisify } = require('util');
var fs = require('fs');
var { promisify } = require('util');

var writeFile = promisify(fs.writeFile); //we create files but also check

writeFile('sample.txt', 'This is a sample')
  .then(() => console.log('file successfully created'))
  .catch((error) => console.log('error creating file'));

//PARALLEL EXECUTION:
//https://www.linkedin.com/learning/advanced-node-js/sequential-execution?resume=false&u=43268076
//multiple stuff runs at same time
//Promise.all() = waits until all tasks end and the resolves
//Promise.race() = waits until first task finishes

var delay = (seconds, number) =>
  new Promise((resolves) => {
    setTimeout(() => {
      resolves(number);
      console.log(number);
    }, seconds * 1000);
  });

Promise.all([delay(10, 1), delay(6, 2), delay(5, 3), delay(6, 4)]).then(
  console.log, //[1,2,3,4]
);
Promise.race([delay(10, 1), delay(6, 2), delay(5, 3), delay(6, 4)]).then(
  console.log, //3
);

//Execution but only limited amount async at same time
class PromiseQueue {
  constructor(promises = [], concurrentCount = 1) {
    this.concurrent = concurrentCount;
    this.total = promises.length;
    this.todo = promises;
    this.running = [];
    this.complete = [];
  }

  get runAnother() {
    //checks if still tasks to complete
    return this.running.length < this.concurrent && this.todo.length;
  }

  run() {
    while (this.runAnother) {
      var promise = this.todo.shift();
      promise.then(() => {
        this.complete.push(this.running.shift());
        this.run();
      });
      this.running.push(promise);
    }
  }
}
