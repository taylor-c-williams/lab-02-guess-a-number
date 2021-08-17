// import functions and grab DOM elements
const remainingGuesses = document.getElementById('remaining-guesses');
let userInput = document.getElementById('user-input');
const guessButton = document.getElementById('guess-button');
const result = document.getElementById('result');


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
    guesses--;
    if (guesses < 1) {
        guesses = 0;
    }
   let guessTry = compareNumbers(Number(userInput.value), correctAnswer);
    console.log(guessTry);
    // if (guessTry === 0){
    //     result.textContent = 'you won!';
    // }
    remainingGuesses.textContent = guesses;
});
