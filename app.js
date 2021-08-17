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

// set event listeners 
guessButton.addEventListener('click', ()=>{
    guesses --;
    if (guesses < 1){
        guesses = 0;
    }
    if (guessInput === correctAnswer) {
        winLose.textContent = 'You Win!';
    }  
    remainingGuesses.textContent = guesses;
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state