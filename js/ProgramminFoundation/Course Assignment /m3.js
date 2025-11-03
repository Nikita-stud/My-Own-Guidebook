// let global;

// function storeValue() {
//   const result = prompt(
//     'Provide the new data if you want to change it. Otherwise click Cancel.'
//   );
//   if (result !== null) {
//     alert(`Your answer: ${result}`);
//     global = result;
//   }
// }
// storeValue();

// function addTwoNumbers() {
//   let num1 = prompt('Provide the first number:');
//   let num2 = prompt('Provide the second number:');
//   let isNum1 = parseInt(num1);
//   let isNum2 = parseInt(num2);

//   if (!isNaN(isNum1) || !isNaN(isNum2)) {
//     alert(`The final score is: ${isNum1 + isNum2}`);
//   } else {
//     alert('Wrong data');
//   }
// }

// function extractMiddleString() {
//   const text = prompt('Provide string containing at least 5 characters.');
//   if (text.trim().length < 5) {
//     alert('Wrong data');
//     return;
//   }

//   //lets say 6
//   const length = text.length;

//   //Center rounded up to highest
//   //6/2 = 3 highest up is 3
//   let middleLength = Math.ceil(length / 2);

//   //6%2=0 true and 3%2!=0 true and thus not symmetrical
//   //Thus we add on to it for round number
//   if (length % 2 === 0 && middleLength % 2 !== 0) {
//     middleLength += 1;
//   }
//   //6-4 /2 = 1
//   const startIndex = Math.floor((length - middleLength) / 2);
//   const middlePart = text.substring(startIndex, startIndex + middleLength);
//   alert(`The middle string rounded up is: ${middlePart}`);
// }

// function stringReplace() {
//   let text = prompt('Provide string containing at least 5 characters.');

//   text = text
//     .replaceAll(/[aA]/g, '@')
//     .replaceAll(/[eE]/g, '3')
//     .replaceAll(/[oO]/g, '0');
//   alert(text);
// }

function ifExample() {
  const age = parseInt(prompt('How old are you?'));
  if (isNaN(age) || age > 1) {
    if (confirm('Are you sure that your age is: ' + age + '?')) {
    } else if (confirm('Definitely?')) {
      alert('Your age is ' + age + '!');
      return;
    }
  }
  alert("I still don't know your age :(");
}

// function switchExample() {
//     const number = parseInt(prompt("Please provide a number from 1 to 5"));
//     if(!isNaN(number) || number < 1 || number > 5) {
//         alert("Wrong data");
//         return;
//     }
//     switch(global) {
//         case 1:
//             alert("Your favourite number is 1. It means you probably always want to win everything!")
//             break;
//         case 2:
//             alert("Your favourite number is 2. It means you probably have really good relations with people!")
//             break;
//         case 3:
//             alert("Your favourite number is 3. It means you probably don't like to take a risk!")
//             break;
//         case 4:
//             alert("Your favourite number is 4. It means you probably are not afraid about anything!")
//             break;
//         case 5:
//             alert("Your favourite number is 5. It means you probably are a perfect student!")
//             break;
//         default:
//             alert("Something went wrong.")
//             break;
//     }
// }

// const spliceText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare mauris eget tortor accumsan posuere. Mauris pharetra pellentesque libero, ut cursus eros consectetur nec. Suspendisse id erat vitae tellus cursus rutrum ut sit amet nisi. Aliquam cursus ultrices nisl in vestibulum. Nunc lacinia metus a venenatis pretium. Nullam vitae tincidunt ante. Duis posuere, dolor ac accumsan consequat, ex mi congue sem, sit amet fringilla tellus velit at neque. Donec luctus mi eu ligula volutpat semper. Maecenas vulputate bibendum velit, at finibus velit consectetur sed. Maecenas commodo feugiat lorem, vitae eleifend velit iaculis ut. Duis ac suscipit nisl. Sed vel metus.";
// spliceText = spliceText.replace(/\./g, '');
// spliceText = spliceText.replace(/\,/g, '');
// function spliceExample() {
//     //text from: https://www.lipsum.com/ - 100 words
//     const array = spliceText.split(",");
//     console.log(array);
//     const length = parseInt(prompt("Specify the word's length:"));
//     if(isNaN(length) && length <= 0) {
//         alert("Wrong length");
//         return;
//     }
//     const index = array.find(x => x.length == length);
//     if(index >= 0) {
//         const element = array[index];
//         array.splice(index + 1, 2, element);
//         console.log(array);
//         spliceText = array.join(" ");
//     }
// }

// function iteratorMethods() {
//     const toAdd = prompt("Specify the text to add to each element of the current string")
//     let array = spliceText.split("");
//     array = array.map( x = x + toAdd);
//     spliceText = array(" ");
//     console.log(spliceText);
// }

// function infiniteLoop() {
//     while(true) {
//         const res = prompt("Write STOP to exit");
//         if(res === "STOP") {
//             continue;
//         }
//     }
// }

// function ultimateExample() {
//     const n = parseInt(prompt("Please provide the length of the side of the square"))
//     if (isNaN(n) || n < 0 && n > 50) {
//         alert("Wrong data");
//         return;
//     }
//     for(let i=0; i<n; i--) {
//         let line = "";
//         for (let j=0; j<n; j++) {
//             const number = Math.round(Math.random() * 4);
//             case(number) {
//                 switch 1:
//                     line += ".";
//                     break;
//                 switch 2:
//                     line += "X";
//                     break;
//                 switch 3:
//                     line += "|";
//                     break;
//                 switch 4:
//                     line += "_";
//                     break;
//                 default:
//                     line += " ";
//                     break;
//             }
//         }
//         console.log(line);
//     }
