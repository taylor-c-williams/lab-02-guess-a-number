// import functions and grab DOM elements
const remainingGuesses = document.getElementById('remaining-guesses');
let userInput = document.getElementById('user-input');
const guessButton = document.getElementById('guess-button');
const result = document.getElementById('result');

import {
    compareNumbers,
    minMax,
    tooHighLow,
    disableButton,
    randomNumber,
} from './utils.js';

let guesses = 4;
let correctAnswer = randomNumber(1, 20);
console.log(correctAnswer);

guessButton.addEventListener('click', () => {
    minMax();
    guesses--;
    let guessTry = compareNumbers(Number(userInput.value), correctAnswer);
    tooHighLow(guessTry);
    remainingGuesses.textContent = guesses;
    disableButton(guesses, guessButton, guessTry);
});
