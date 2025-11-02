export function promptAndAlertExample() {
  //pop-up with a text field, returns string
  let name = prompt("What's your name?");
  // pop-up with a message
  alert('Nice to meet you, ' + name + '!');

  // pop-up with two text fields, returns strings
  let num1 = prompt('Enter the first number:');
  let num2 = prompt('Enter the second number:');
  // convert strings to numbers and add them
  let result = Number(num1) + Number(num2);

  alert('The result is: ' + result);
  // writes on the page
  document.writeln('HEllo World');

  let message = isNaN(
    prompt('Enter number')
      ? 'You did not enter a number'
      : 'Thank you for entering a number'
  );
  alert(message);
}
