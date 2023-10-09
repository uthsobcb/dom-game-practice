'use strict';

let thatNumber = Math.round(Math.random() * 20);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    return document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (guess == thatNumber) {
        displayMessage('Thats Correct! Get a coffee');
        document.querySelector('.number').textContent = thatNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if (guess > thatNumber) {
        displayMessage('Uhh! Too High');
        score--;
    }
    else if (guess < thatNumber) {
        displayMessage('Noh! You said Low!');
        score--;
    }
    if (score <= 0) {
        displayMessage("You lost the game duh!");
        document.querySelector('body').style.backgroundColor = 'red';
    }
    document.querySelector('.score').textContent = score;

})


document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    thatNumber = Math.round(Math.random() * 20);
    document.querySelector('.message').textContent = 'Start Guessing!!';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = ' ';
})