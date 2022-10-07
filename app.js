let computerChoice = "";
let playerChoice = "";

//generate computer choice
//ask user for choice
//playgame, determine winner, add a score variable
//play game five times

//set up buttons for game
const rockPress = document.querySelector(".rock-btn");
rockPress.addEventListener("click", () => {
  playerChoice = "rock";
  playGame();
});
const paperPress = document.querySelector(".paper-btn");
paperPress.addEventListener("click", () => {
  playerChoice = "paper";
  playGame();
  console.log("click paper");
});
const scissorsPress = document.querySelector(".scissors-btn");
scissorsPress.addEventListener("click", () => {
  playerChoice = "scissors";
  playGame();
  console.log("click scissors");
});

console.log(playerChoice);
console.log(playerChoice);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    return (computerChoice = "rock");
  }
  if (randomNumber === 2) {
    return (computerChoice = "paper");
  }
  if (randomNumber === 3) {
    return (computerChoice = "scissors");
  }
}
const userSelect = () => {};
// generateComputerChoice()
// askUserChoice()
// console.log(computerChoice)
// console.log(userChoice)
let result;
function decideWinner() {
  if (computerChoice === playerChoice) {
    return (result = "draw");
  }
  if (playerChoice === "rock" && computerChoice === "scissors") {
    return (result = "win");
  }
  if (playerChoice === "rock" && computerChoice === "paper") {
    return (result = "lose");
  }
  if (playerChoice === "scissors" && computerChoice === "paper") {
    return (result = "win");
  }
  if (playerChoice === "scissors" && computerChoice === "rock") {
    return (result = "lose");
  }
  if (playerChoice === "paper" && computerChoice === "rock") {
    return (result = "win");
  }
  if (playerChoice === "paper" && computerChoice === "scissors") {
    return (result = "lose");
  }
}

let score = 0;
let compScore = 0;
function tallyScore() {
  if (result === "win") {
    score++;
  }
  if (result === "lose") {
    compScore++;
  }
}
function generateScoreHTML() {
  const scoreDisplay = document.querySelector(".player-score");

  scoreDisplay.innerHTML = `${score}`;

  const compScoreDisplay = document.querySelector(".computer-score");
  compScoreDisplay.innerHTML = `${compScore}`;
}
function generateCurrentResultHTML() {
  let resultDisplay = document.querySelector(".current-result");
  if (result === "draw") {
    resultDisplay.innerHTML = `Draw!`;
  } else {
    resultDisplay.innerHTML = `You ${result}!`;
  }
}
function generateCombatLogHTML() {
  let combatLog = document.querySelector(".combat-log");
  combatLog.innerHTML = `${playerChoice} vs ${computerChoice}`;
}

function firstToFive() {
  if (score === 5 || compScore === 5) {
    const span = document.getElementsByClassName("close")[0];

    const modal = document.getElementById("hit-five-modal");
    modal.style.display = "block";
    const modalContent = document.querySelector(".result-message");
    if (score === 5) {
      modalContent.innerHTML = `You win!`;
    }
    if (compScore === 5) {
      modalContent.innerHTML = `You lose..`;
    }
    span.onclick = function () {
      modal.style.display = "none";
      location.reload();
    };
    score = 0;
    compScore = 0;
  }
}

function playGame() {
  //this function is invoked when the player clicks their choice
  console.log(`"You chose ${playerChoice}"`);
  //generate computer choice
  generateComputerChoice();
  console.log(`"Computer has chosen ${computerChoice}"`);
  decideWinner();

  console.log(`"You ${result}"`);
  //tally score and display
  tallyScore();
  console.log(`"You: ${score} PC: ${compScore}"`);
  generateScoreHTML();
  generateCurrentResultHTML();
  generateCombatLogHTML();
  firstToFive();
}

// function fiveRounds() {
//     for (i=0;i<6;i++) {
//         playGame()
//     }
// }

// function bestOfFive () {
//     while (score< 3 && compScore< 3) {
//         playGame()
//     }
// }

// bestOfFive()
