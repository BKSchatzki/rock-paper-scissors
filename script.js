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

function playGame (playerSelection) {
    computerSelection = getComputerChoice();
   
    // check whether game is over or not
    if (playerScore < 5 && computerScore < 5) {

        // compare player and computer selections and display round results
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

        // check for game over condition and display final message
        if (playerScore === 5) {
            document.getElementById("result").innerText = "You're a champ, champ.";
        } else if (computerScore === 5) {
            document.getElementById("result").innerText = "You're a chump, chump.";
        }
    }
}

// assign ids to button variables
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

// add event listeners to button variables
rockBtn.addEventListener("click", () => playGame("Rock"));
paperBtn.addEventListener("click", () => playGame("Paper"));
scissorsBtn.addEventListener("click", () => playGame("Scissors"));