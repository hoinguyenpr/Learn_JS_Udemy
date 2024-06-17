'use strict';

//Selecting ELements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let currentPlayer = 0;
let scoreArr = [0,0];

// Rolling dice functionality
btnRoll.addEventListener('click', function() {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3. If dice !1 add dice to currentScore, else switch player
    if (dice !== 1) {
        currentScore += dice;
        scoreArr[currentPlayer] += currentScore;
        document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
    }  else {
        currentScore = 0;
        document.getElementById(`current--${currentPlayer}`).textContent  = currentScore;
        currentPlayer = currentPlayer === 0 ? 1 : 0;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
    }

    if (scoreArr[currentPlayer] >= 20 ) {
        document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active');
        document.getElementById(`score--${currentPlayer}`).textContent = scoreArr[currentPlayer];
    }
});

// Holding dice functionality
btnHold.addEventListener('click', function() {
    document.getElementById(`score--${currentPlayer}`).textContent = scoreArr[currentPlayer];
    currentScore = 0;
    document.getElementById(`current--${currentPlayer}`).textContent  = currentScore;
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
});


