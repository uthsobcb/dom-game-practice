'use strict';


const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const rollEl = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');
const newGame = document.querySelector('.btn--new');

let currentScore = [0, 0];
let score = 0;
let activePlayer = 0;
let playing = true;

score0El.textContent = 0;
score1El.textContent = 0;
rollEl.classList.add('hidden');

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    score = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};


rollBtn.addEventListener('click', function () {

    if (playing) {
        const rolledNum = Math.round(Math.random() * 5) + 1;

        rollEl.classList.remove('hidden');
        rollEl.src = `dice-${rolledNum}.png`;

        if (rolledNum !== 1) {
            score = score + rolledNum;
            document.getElementById(`current--${activePlayer}`).textContent = score;
        }
        else {
            switchPlayer();
        }
    }
});

holdBtn.addEventListener('click', function () {
    if (playing) {
        currentScore[activePlayer] += score;
        document.getElementById(`score--${activePlayer}`).textContent = currentScore[activePlayer];

        if (currentScore[activePlayer] >= 30) {

            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            rollEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
        else {
            switchPlayer();
        }
    }
})
newGame.addEventListener('click', function () {
    currentScore = [0, 0];
    score = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    rollEl.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');

})