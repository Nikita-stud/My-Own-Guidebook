const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const stuffToPass = (question, answer) => rl.question(question, answer);

stuffToPass('Why', (answer) => {
  console.log(answer);
  process.exit();
});
