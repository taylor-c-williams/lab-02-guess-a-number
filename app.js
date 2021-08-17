// import functions and grab DOM elements
const remainingGuesses = document.getElementById('remaining-guesses');
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const result = document.getElementById('result');
const winLose = document.getElementById('winlose');

let guesses = 4;

function randomNumber(max) {
    return Math.floor(Math.random() * 20);
}

let correctAnswer = randomNumber(20);

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

// guessButton.addEventListener('click', () => {
//     guesses--;
//     if (guesses < 1) {
//         guesses = 0;
//     }
//     const guess = compareNumbers(guessInput, correctAnswer);
//     console.log(guess);

//     remainingGuesses.textContent = guesses;
// });
