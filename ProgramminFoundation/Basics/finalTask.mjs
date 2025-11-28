/*
Your task is to build a simple number 
guessing game using JavaScript. 
The computer will randomly pick a number 
between 1 and 100, and the player has to guess what it is.

Each time the player makes a guess 
(this must be validated to be a number between 1 and 100),
 the program should tell them if the guess is too high, too low, or correct. 
 The game should continue until the player guesses the correct number.
 
*/

// Generate a random number between 1 and 100
while (true) {
  const guessNumber = Math.floor(Math.random() * 100) + 1;

  let numberGuessed;
  let amountOfGuesses = [];
  let totalGamesWithGuesses = [];

  do {
    const guessedNumber = prompt('Guess a number between 1 and 100:');
    numberGuessed = Number(guessedNumber);
    amountOfGuesses.push(numberGuessed);

    if (numberGuessed < guessNumber) {
      alert('Too low! Try again.');
    } else if (numberGuessed > guessNumber) {
      alert('Too high! Try again.');
    }
  } while (numberGuessed !== guessNumber);
  {
    alert('Congratulations! You guessed the correct number: ' + guessNumber);
    alert('It took you ' + amountOfGuesses.length + ' guesses.');
    totalGamesWithGuesses.push([...amountOfGuesses]);

    const ifPlayAgain = confirm('Want to play again?');

    if (!ifPlayAgain) {
      alert(
        'Thanks for playing! Your total games ' + totalGamesWithGuesses.length
      );
      break;
    }
  }
}
