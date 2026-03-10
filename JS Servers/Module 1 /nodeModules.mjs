//Node modules = libraries need to be called with require()
//Already in Node, just need to import them using require()
const path = require('path'); // tools for working with file paths
const util = require('util'); // utility tools
const v8 = require('v8'); //lets you see how Node manages memory
const readline = require('readline'); // easier way to connect to other files

//!!!You can destructure the require for only stuff you need
const { log } = require('util');
const { getHeapStatistics } = require('v8');
log(getHeapStatistics()); //same as util.log(v8.getHeapStatistics()); //shows all stats of Node used

//path
__filename; //is automatically available everywhere. It just holds the full path to the current file
__dirname; //just folder I am in
path.basename(); //just filename at the end of this path
path.basename(__filename); // process.js

//util
util.log(path.basename(__filename)); //same as console log of filepath but with timestamp

//v8
util.log(v8.getHeapStatistics()); //shows all stats of Node used

//readline
//1.Must create streamput
const rl = readline.createInterface({
  input: process.stdin, // read from keyboard
  output: process.stdout, // write prompts to terminal
});
//2.Ask and get answer same place
//output is "What's your name?\n"
rl.question("What's your name?\n", (answer) => {
  //input is answer you type
  console.log(`Hello ${answer}!`);
  process.exit();
});

//https://www.linkedin.com/learning/node-js-essential-training-2019/use-readline-functions?resume=false&u=43268076
//https://www.linkedin.com/learning/node-js-essential-training-2019/create-a-module?resume=false&u=43268076

//Export IMPORT MODULES
module.exports = ''; //Export whatever you want
const counter = require('./counter'); //import file counter.js

//EXPAMPLE: we export inc, dec,getCount
let counter = 0;
const inc = () => counter++;
const dec = () => counter--;
const getCount = () => counter; //need to for returning, else will return initial return value

module.exports = {
  inc,
  dec,
  getCount,
};
const counter = require('./counter');
counter.dec();
counter.getCount();

//SO export read and write in console for reuse
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//text = question
//callback = what you do with the answer you get back
//rl.question(text, callback); This is what actually calls, asks the question
const foo = (text, callback) => rl.question(text, callback);
module.exports = foo;

//Import it
const ask = require('./foo');

//answer is what the user typed
ask("What's your name?", (answer) => {
  console.log(`Hello ${answer}!`);
});

//FOR ME !!!!!!!!!!!!!!!
const readline = require('readline');

//Wait for answer and to deliver
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//stuffToPass new way to call question
//we parse in the question and answer
//answer always needs to be a part (just because it is)
const stuffToPass = (question, answer) => rl.question(question, answer);

stuffToPass('Why', (answer) => {
  console.log(answer);
  process.exit();
});
