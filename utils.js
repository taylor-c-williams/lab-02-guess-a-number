export function minMax() {
    let guesses = 4;
    if (guesses < 1) {
        guesses = 0;
    }
}

export function tooHighLow(aGuess){
    if (aGuess === 0){
        result.textContent = 'you won!';
    }
    if (aGuess === 1){
        result.textContent = 'too high!';
    }
    if (aGuess === -1){
        result.textContent = 'too low!';
    }
}