// import functions and grab DOM elements
const remainingGuesses = document.getElementById('remaining-guesses');
let userInput = document.getElementById('user-input');
const guessButton = document.getElementById('guess-button');
const result = document.getElementById('result');

import { minMax } from './utils.js';
import { tooHighLow } from './utils.js';

let guesses = 4;

function randomNumber(min) {
    return Math.floor(Math.random() * 20);
}

let correctAnswer = randomNumber(1);

console.log(correctAnswer);

export function compareNumbers(guess, correctNumber) {
    if (guess < correctNumber) {
        return -1;
    } else if (guess > correctNumber) {
        return 1;
    } else if (guess === correctNumber) {
        return 0;
    }
}

guessButton.addEventListener('click', () => {
    minMax();
    guesses --;

    let guessTry = compareNumbers(Number(userInput.value), correctAnswer);
    tooHighLow(guessTry);
    remainingGuesses.textContent = guesses;

    if (guesses === 0){
        guessButton.disabled = true;
    }

    if (guessTry === 0){
        guessButton.disabled = true;
    }
});
