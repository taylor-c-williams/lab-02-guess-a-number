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

export function disableButton(guess, button, userGuess){
    if (guess === 0){
        button.disabled = true;
        result.textContent = ('You lose!');
    }
    if (userGuess === 0){
        button.disabled = true;
    }
}

export function compareNumbers(userGuess, number) {
    if (userGuess < number) {
        return -1;
    } else if (userGuess > number) {
        return 1;
    } else if (userGuess === number) {
        return 0;
    }
}

export function randomNumber(min) {
    return Math.floor(Math.random() * 20);
}

export function setNumber(){
    let correctAnswer = randomNumber(1);
    console.log(correctAnswer);
}