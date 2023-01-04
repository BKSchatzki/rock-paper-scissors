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

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", () => {return "Rock"; });
paper.addEventListener("click", () => {return "Paper"; });
scissors.addEventListener("click", () => {return "Scissors"; });

let computerScore;
let playerScore;

computerScore = 0;
playerScore = 0;

let computerSelection = getComputerChoice();
    
let playerSelection = getPlayerChoice();

function playRound() {
    if (playerSelection === null) {
        console.log("You aborted the round! The computer gets a point!");
        computerScore += 1;
    } else if (computerSelection === playerSelection) {
        console.log(`It's a tie! You both picked ${playerSelection}! No points awarded this round.`);
    } else if (
        computerSelection === "Rock" && playerSelection === "Paper" ||
        computerSelection === "Paper" && playerSelection === "Scissors" ||
        computerSelection === "Scissors" && playerSelection === "Rock") {
            console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
            playerScore += 1;
    } else if ( 
        playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock") {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
            computerScore += 1;
    }
}

playRound();