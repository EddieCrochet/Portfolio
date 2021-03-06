'use strict';

// Selecting elements 
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, playing;
let activePlayer = 0;

const init = function() {
    //array of player 1 and player 2s respective scores
    scores = [0, 0];
    currentScore = 0;
    playing = true;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
        // Starting conditions
    player0El.classList.add('player--active');
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');
};
init();

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    //if activePlayer is 0 switch to 1 and vice versa
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function() {
    console.log(scores);
    if(playing) {
            //1. Generate random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // 3. Check for rolled
        if(dice!==1){
            //add dice to current score
            currentScore += dice;    
            //selecting respective player 1 and 2 class names dynamically
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            //current0El.textContent = currentScore; // CHANGE LATER
            //above code was not dyamic
        } else { 
            //switch to next player
            switchPlayer();
        }
    }
});

//Holding hand functionality
btnHold.addEventListener('click', function() {
    if(playing) {
        // 1. add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. check if players score is >= 100
    if(scores[activePlayer] >= 20) {
        // finish the game
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
        // switch to next player
        switchPlayer();
    }
    }
});

// New Game functionality
btnNew.addEventListener('click', init);