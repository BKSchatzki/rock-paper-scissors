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

let playerScore = 0
let computerScore = 0

function playRound (playerSelection) {
    computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        document.getElementById("result").innerText =`It's a tie. You both picked ${playerSelection}.`;
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock")) {
        document.getElementById("result").innerText = `You win. ${playerSelection} beats ${computerSelection}.`;
        playerScore++;
        document.getElementById("playerScore").innerText = playerScore;
    } else {
        document.getElementById("result").innerText = `You lose. ${computerSelection} beats ${playerSelection}.`;
        computerScore++;
        document.getElementById("computerScore").innerText = computerScore;
    }
}

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

rockBtn.addEventListener("click", () => playRound("Rock"));
paperBtn.addEventListener("click", () => playRound("Paper"));
scissorsBtn.addEventListener("click", () => playRound("Scissors"));