let pcChoice = "";
let userChoice="";
function getComputerChoice() {
    min = Math.ceil(4);
    max = Math.floor(1);
    let choice = Math.floor(Math.random() * (max-min) + min);
    console.log(choice);
    if (choice === 1) { return pcChoice="rock"}
    else if (choice === 2) { return pcChoice= "paper"}
    else {return pcChoice="scissors"}
}





function decision() {let userChoice = prompt("Rock, paper or scissors?");
console.log(userChoice)
}

function playGame(userChoice, pcChoice) {
    if (userChoice == pcChoice) {
        console.log("Draw!");
    } else if ((userChoice == "rock") && pcChoice == "paper")
    { console.log("You lose");
    } else if ((userChoice == "rock") && (pcChoice == "scissors")) {
        console.log("You win!");
    } else {console.log("undefff")}
}
 
userChoice = decision()
pcChoice = getComputerChoice()
console.log(`"Your opponent chose ${pcChoice}"`)

playGame(userChoice, pcChoice)
// playGame()
// win if :
// playerChoice is rock vs scissors
// playerChoice is paper vs rock
// playerChoice is scissors vs paper
