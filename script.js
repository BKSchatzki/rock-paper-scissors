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

let playerScore = 0;
let computerScore = 0;

function playRound (playerSelection) {
    computerSelection = getComputerChoice();
    let playerWinRound;
    let computerWinRound;

    if (playerSelection === computerSelection) {
        document.getElementById("result").innerText =`It's a tie. You both picked ${playerSelection}.`;
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock")) {
        document.getElementById("result").innerText = `You win. ${playerSelection} beats ${computerSelection}.`;
        playerWinRound = true;
    } else {
        document.getElementById("result").innerText = `You lose. ${computerSelection} beats ${playerSelection}.`;
        computerWinRound = true;
    }
}

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

rockBtn.addEventListener("click", () => playRound("Rock"));
paperBtn.addEventListener("click", () => playRound("Paper"));
scissorsBtn.addEventListener("click", () => playRound("Scissors"));

if (playerWinRound) {
    playerScore++;
    document.getElementById("playerScore").innerText = playerScore;
}

if (computerWinRound) {
    computerScore++;
    document.getElementById("computerScore").innerText = computerScore;
}

if (playerScore === 5) {
    document.getElementById("result").innerText = "First to 5! You win!";
    break;
} else if (computerScore === 5) {
    document.getElementById("result").innerText = "Beaten to 5! You lose.";
    break;
}