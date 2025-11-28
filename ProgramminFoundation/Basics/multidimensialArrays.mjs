const board = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['', 'O', ''],
];

//0 grabs the first row and 1 grabs the second element in that row
console.log(board[0][1]); // "O"

//Updates value
board[2][0] = 'X';

//Example
const seatingChart = [
  ['A1', 'A2', 'A3'],
  ['B1', 'B2', 'B3'],
  ['C1', 'C2', 'C3'],
  ['D1', 'D2', 'D3'],
];

for (let row = 0; row < seatingChart.length; row++) {
  //gets each row of[],

  for (let col = 0; col < seatingChart[row].length; col++) {
    //gets each col of X1', 'X2', 'X3' and their length,

    console.log(seatingChart[row][col]);
  }
}

//TASKSSSSS
// Initial setup
let pens = [
  ['🐶', '🐶', '🐶'], // Pen 0
  ['🐱', '🐱'], // Pen 1
  ['🐰'], // Pen 2
];

for (let i = 0; i < pens.length; i++) {
  let pen = pens[i];
  let message = `Pen ${i} has ${pen.length} animals:`;

  for (let j = 0; j < pen.length; j++) {
    message += pen[j] + '';
  }
  console.log(message);
}

pens[0].push('🐶'); // Add a dog to pen 0
pens[1].pop(); // Remove a cat from pen 1
pens[1] = [...pens[1], ...pens[2]]; // Copy pen 1 and pen 2 into pen 1
pens[2] = []; // Empty pen 2

for (let i = 0; i < pens.length; i++) {
  let pen = pens[i];
  let message = `Pen ${i} has ${pen.length} animals:`;
  for (let j = 0; j < pen.length; j++) {
    message += pen[j] + '';
  }
  console.log(message);
}
