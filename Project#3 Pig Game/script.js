'use strict';
//
const score0EL = document.getElementById('score--0');
const score1EL = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const holdBTN = document.querySelector('.btn--hold');
const rollBTN = document.querySelector('.btn--roll');
const newBTN = document.querySelector('.btn--new');
let playing = true;
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;


const init = function () {
    playing = true;
    scores = [0, 0];
    currentScore = 0;
    diceEl.classList.add('hidden')
    score0EL.textContent = 0;
    score1EL.textContent = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = 0;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');

}
init();
/*
let scores = [0, 0];
let currentScore = 0;
diceEl.classList.add('hidden')
score0EL.textContent = 0;
score1EL.textContent = 0;
let activePlayer = 0;
let playing = true;
*/

const switchPlayers = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    currentScore = 0;
}

rollBTN.addEventListener('click', function () {
    if (playing) {
        diceEl.classList.remove('hidden')
        const dice = Math.trunc((Math.random() * 6) + 1)
        diceEl.src = `dice-${dice}.png`;
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayers();
        }
    }
});

holdBTN.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 100) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden')
        } else {
            switchPlayers();
        }
    }
});

newBTN.addEventListener('click', init)


