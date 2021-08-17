// import functions and grab DOM elements
const remainingGuesses = document.getElementById('remaining-guesses');
let userInput = document.getElementById('user-input');
const guessButton = document.getElementById('guess-button');
const result = document.getElementById('result');
const resetButton = document.getElementById('reset-button');

import { compareNumbers } from './utils.js';
import { minMax } from './utils.js';
import { tooHighLow } from './utils.js';
import { disableButton } from './utils.js';
import { randomNumber } from './utils.js';
import { setNumber } from './utils.js';
 
let guesses = 4;
let correctAnswer = randomNumber(1);
console.log(correctAnswer);

guessButton.addEventListener('click', () => {
    // setNumber();
    minMax();
    guesses --;
    let guessTry = compareNumbers(Number(userInput.value), (correctAnswer));
    tooHighLow(guessTry);
    remainingGuesses.textContent = guesses;
    disableButton(guesses, guessButton, guessTry);
});


// resetButton.addEventListener('click',() => {
//   setNumber();
//   let guesses = 4;
//   remainingGuesses.textContent = guesses;
//   guessButton.disabled = false;
// });
