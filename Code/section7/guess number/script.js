'use strict';

let highScore = 0;
let score = 20;
let secretNumber = getRandom();
console.log('secretNumber: ' + secretNumber);

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = getRandom();
    console.log('secretNumber: ' + secretNumber);
    displayMessage('Start guessing...');
    document.querySelector('body').classList.remove('body-success');
    document.querySelector('body').classList.remove('body-lose');
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);
    document.querySelector('body').classList.remove('body-success');
    console.log('guess: ' + guess);

    // When there is no input
    if (!guess) {
        displayMessage('Invalid guess value!');
        highScore = score > highScore ? score : highScore;

    // When player wins
    } else if (guess === secretNumber) {
        console.log('Inside right answer!')
        document.querySelector('body').classList.toggle('body-success');
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('Your right!');
        if (highScore < score) {
            highScore = score;
        }

    // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            score --;
            displayMessage(guess > secretNumber ? 'Your guess is higer!' : 'Your guess is lower!');
        } else {
            displayMessage('You lose the game!');
            document.querySelector('body').classList.add('body-lose');
        }
    }
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highScore;
});

function getRandom() {
    return Math.trunc(Math.random() * 20);
}
