export function minMax() {
    let guesses = 4;
    if (guesses < 1) {
        guesses = 0;
    }
}

export function tooHighLow(aGuess) {
    if (aGuess === 0) {
        result.textContent = 'you won!';
    }
    if (aGuess === 1) {
        result.textContent = 'too high!';
    }
    if (aGuess === -1) {
        result.textContent = 'too low!';
    }
}

export function disableButton(guess, button, userGuess) {
    if (guess === 0) {
        button.disabled = true;
        result.textContent = ('You lose!');
    }
    if (userGuess === 0) {
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

export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//  random w/ min, max credit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random


export function setNumber(input) {
    let correctAnswer = randomNumber(1);
    let guessTry = compareNumbers(Number(input.value), correctAnswer);
    console.log(correctAnswer);
}
