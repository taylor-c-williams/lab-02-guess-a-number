// import functions and grab DOM elements
const remainingGuesses = document.getElementById('remaining-guesses');
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const result = document.getElementById('result');
const winLose = document.getElementById('winlose');

// initialize global state
let guesses = 4;


// set event listeners 
guessButton.addEventListener('click', ()=>{
    guesses --;
    if (guesses < 1){
        guesses = 0;
    }
    remainingGuesses.textContent = guesses;
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state