let computerChoice;
let playerChoice;

//generate computer choice
//ask user for choice
//playgame, determine winner, add a score variable
//play game five times

//set up buttons for game

const rockPress = document.querySelector(".rock-btn");
const paperPress = document.querySelector(".paper-btn");
const scissorsPress = document.querySelector(".scissors-btn");
rockPress.onclick = () => {
  return playerChoice = "rock";
};
console.log(rockPress.onclick);
console.log(playerChoice);
paperPress.onclick = () => alert("paper");
scissorsPress.onclick = () => alert("scissors");

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
  if (computerChoice === userChoice) {
    return (result = "draw");
  }
  if (userChoice === "rock" && computerChoice === "scissors") {
    return (result = "win");
  }
  if (userChoice === "rock" && computerChoice === "paper") {
    return (result = "lose");
  }
  if (userChoice === "scissors" && computerChoice === "paper") {
    return (result = "win");
  }
  if (userChoice === "scissors" && computerChoice === "rock") {
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
function playGame() {
  generateComputerChoice();
  console.log(`"Computer has chosen ${computerChoice}"`);
  askUserChoice();
  console.log(`"You chose ${userChoice}"`);
  decideWinner();
  console.log(`"You ${result}"`);
  tallyScore();
  console.log(`"You: ${score} PC: ${compScore}"`);
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
