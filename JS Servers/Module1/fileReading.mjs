//READING FILES
const fs = requires('fs');

//Synchronouse version
fs.writeFileSync('example.txt', 'text'); //created example file and writes "text" into it
let data = fs.readFileSync('example.txt'); //reads example file and return data
console.log(data); // text

fs.existsSync(path); //check if file exists for no override

//Asynchronouse version
fs.writeFile('example.txt', 'text', (err) => {
  //err is additional async thing as we know
  fs.readFile('example.txt', (err, data) => {
    if (err) {
      process.exit();
    }
    //error and data is same
    console.log(data); //text
  });
});

//IF file is in JSON then we can just require it and it will turn it auto
//can even be just number 9 we require, true, string
//BUT only read once at start of the program
const x = require('./number');
console.log(x); //text
