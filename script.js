function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "Rock";
    }   else if (randomNumber === 1) {
        return "Paper";
    }   else {
        return "Scissors";
    }
}
let computerSelection = getComputerChoice();

function playRound(playerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`It's a tie! You both picked ${playerSelection}! No points awarded this round.`);
    } else if (
        computerSelection === "Rock" && playerSelection === "Paper" ||
        computerSelection === "Paper" && playerSelection === "Scissors" ||
        computerSelection === "Scissors" && playerSelection === "Rock") {
            console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    } else if ( 
        playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock") {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
    }
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", playRound("Rock"));
paper.addEventListener("click", playRound("Paper"));
scissors.addEventListener("click", playRound("Scissors"));
