//Selecting the Elements to make them 0 before we begin the real functionality of code
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");
const currentScore0El = document.getElementById("current--0");
const currentScore1El = document.getElementById("current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const switchingPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0; // we are making the player 0 current score to 0 before switching to player 1
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; //assigning new active player
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//intial conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
playing = true;

//Dice Functionality

btnRoll.addEventListener("click", function () {
  if (playing) {
    //generating random dice roll
    const dice = Math.trunc(Math.random() * 6 + 1);

    //display the dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    //checking if dice =1
    if (dice !== 1) {
      //Add the dice value to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      //currentScore0El.textContent = currentScore;-->This will only provide the Player 1 currentscore
    } else {
      //switch to next player
      switchingPlayer();
    }
  }
});

//To Hold the score for Player and switching the Player
btnHold.addEventListener("click", function () {
  if (playing) {
    //updating the current score to player0
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //finish the game
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      alert(`player--${activePlayer} is Winner`);
    } else {
      // switching players
      switchingPlayer();
    }
  }
});

btnNew.addEventListener("click", function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  diceEl.classList.add("hidden");
  const scores = [0, 0];
  let currentScore = 0;
  let activePlayer = 0;
  playing = true;
});
