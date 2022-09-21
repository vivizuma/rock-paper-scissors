function getComputerChoice() {
    min = Math.ceil(4);
    max = Math.floor(1);
    let choice = Math.floor(Math.random() * (max-min) + min);
    console.log(choice);
    if (choice === 1) {return "rock"}
    else if (choice === 2) {return "paper"}
    else {return "scissors"}
}


let compChoice = getComputerChoice() 
console.log(compChoice)

// playGame()
// win if :
// playerChoice is rock vs scissors
// playerChoice is paper vs rock
// playerChoice is scissors vs paper
