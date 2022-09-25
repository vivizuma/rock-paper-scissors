// let pcChoice = "";
// let userChoice="";
// function getComputerChoice() {
//     min = Math.ceil(4);
//     max = Math.floor(1);
//     let choice = Math.floor(Math.random() * (max-min) + min);
//     console.log(choice);
//     if (choice === 1) { return pcChoice="rock"}
//     else if (choice === 2) { return pcChoice= "paper"}
//     else {return pcChoice="scissors"}
// }





// function decision() {let userChoice = prompt("Rock, paper or scissors?");
// console.log(userChoice)
// return userChoice
// }
// let result = ""
// function playGame(userChoice, pcChoice) {
//     if (userChoice == pcChoice) {
//         return result = "Draw!",
//         console.log("Draw!");
//     } else if ((userChoice == "rock") && pcChoice == "paper")
//     { return result = "You lose",
//     console.log("You lose");
//     } else if ((userChoice == "rock") && (pcChoice == "scissors")) {
//         return result = "You win!",
//         console.log("You win!");
//     } else if ((userChoice === "paper") && (pcChoice ==="rock")) {
//         return result = "You win!",
//         console.log("You win!");
//     } else if ((userChoice ==="paper") && (pcChoice ==="scissors")) {
//         return result = "You lose",
//         console.log("You lose");
//     } else if ((userChoice ==="scissors") && (pcChoice==="paper")) {
//         return result = "You win!",
//         console.log("You win!");

//     } else if ((userChoice ==="scissors") && (pcChoice ==="rock")) {
//         return result = "You lose"
//         console.log("You lose")
//     } else {console.log("unknown input")}
// }
// let userScore = 0
// let pcScore = 0
// function increaseScore(result, userScore, pcScore) { if (result === "You win!") {
//     return userScore++
// } else if (result ==="You lose") {
//     return pcScore++
// } else return pcScore= pcScore + 0;

// }

// console.log(`"Your opponent chose ${pcChoice}"`)
// console.log(`"You chose ${userChoice}"`)

// function fiveRounds() {
//     for (let i = 0; i <5; i++) {
//         userChoice=decision();
//         pcChoice=getComputerChoice();
//         playGame(userChoice, pcChoice);
//         increaseScore(result,userScore, pcScore);
//         console.log(userScore, pcScore);
//     }
// }



// playGame()
// win if :
// playerChoice is rock vs scissors
// playerChoice is paper vs rock
// playerChoice is scissors vs paper

// let x = "You win!"
// let y = "You lose.."
// let z = "Draw!"

// let playerScore = 0
// let computerScore = 0

let computerChoice
let playerChoice

//generate computer choice
//ask user for choice
//playgame, determine winner, add a score variable
//play game five times

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1) {
        return computerChoice = "rock"
    }
    if (randomNumber === 2) {
        return computerChoice = "paper"
    }
    if (randomNumber === 3) {
        return computerChoice = "scissors"
    }
    
}
function askUserChoice() {
    return userChoice = prompt("rock, paper or scissors?")
}
// generateComputerChoice()
// askUserChoice()
// console.log(computerChoice)
// console.log(userChoice)
let result
function decideWinner () {
    if (computerChoice === userChoice) {
        return result =  "draw"
    } if (userChoice === "rock" && computerChoice === "scissors") {
        return result = "win"
        
    } if (userChoice === "rock" && computerChoice === "paper") {
        return result ="lose"
    } if (userChoice ==="scissors" && computerChoice === "paper") {
        return result ="win"
    } if (userChoice ==="scissors" && computerChoice === "rock") {
        return result ="lose"
    }
}
let score = 0
let compScore = 0
function tallyScore() {
    if (result === "win") {score ++}
    if (result === "lose") {compScore++}

}
function playGame() {
    generateComputerChoice()
    console.log(`"Computer has chosen ${computerChoice}"`)
    askUserChoice()
    console.log(`"You chose ${userChoice}"`)
    decideWinner()
    console.log(`"You ${result}"`)
    tallyScore()
    console.log(`"You: ${score} PC: ${compScore}"`)

}


function fiveRounds() {
    for (i=0;i<6;i++) {
        playGame()
    }
}


function bestOfFive () {
    while (score< 3 && compScore< 3) {
        playGame()
    }
}

bestOfFive()