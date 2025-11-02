export function whileLoopExample() {
  let number;
  let positiveNumber;

  /*
  "do" loop runs as long as the while condition is true. 
  If false it stops and runs the code in while block
  */
  do {
    number = prompt('Give me a number');

    positiveNumber = Number(number);
  } while (isNaN(positiveNumber));
  {
    let squareNumber = number;
    squareNumber *= number;
    alert('Square number of your number is:' + squareNumber);
  }
}

//If only while loop is used:
while (condition) {
  // this code runs as long as the condition is true
}

/*
Create a loop that prints the odd numbers between 1 and 11 (inclusive), excluding 5.

Your loop must:

Use a while (true) loop
Use continue to skip even numbers and 5
Use break to exit the loop once the number exceeds 10
*/

let i = 1;

while (true) {
  if (i > 10) {
    break;
  }
  if (i % 2 === 0 || i === 5) {
    i++; //infinite loop of skipping if not added
    continue;
  }
  console.log(i);
  i++;
}

// Task
let input;

do {
  input = Number(prompt('Enter a number greater than 1'));
} while (isNaN(input) || input <= 1);
{
  let i = 1;

  while (i < input) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz', i);
    } else if (i % 3 === 0) {
      console.log('Fizz', i);
    } else if (i % 5 === 0) {
      console.log('Buzz', i);
    } else {
      console.log(i);
    }
    i++;
  }
}
