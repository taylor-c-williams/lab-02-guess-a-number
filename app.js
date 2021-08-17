// import functions and grab DOM elements
const remainingGuesses = document.getElementById('remaining-guesses');
let userInput = document.getElementById('user-input');
const guessButton = document.getElementById('guess-button');
const result = document.getElementById('result');

import { compareNumbers } from './utils.js';
import { minMax } from './utils.js';
import { tooHighLow } from './utils.js';
import { disableButton } from './utils.js';
import { randomNumber } from './utils.js';

let guesses = 4;

let correctAnswer = randomNumber(1);

console.log(correctAnswer);

guessButton.addEventListener('click', () => {
    minMax();
    guesses --;
    let guessTry = compareNumbers(Number(userInput.value), correctAnswer);
    tooHighLow(guessTry);
    remainingGuesses.textContent = guesses;
    disableButton(guesses, guessButton, guessTry);
});
