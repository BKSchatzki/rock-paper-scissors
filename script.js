// choose "Rock," "Paper," or "Scissors" for the computer
    // use the variableRandom number and assigns the value of a random number between 0 and 1, multiplied by 3, rounded down
    // output either 0, 1, or 2, which, using if-else statements return "Rock," "Paper," or "Scissors" respectively
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

// prompt player for choice
// use while-loop to continually prompt player until proper choice is made
// if player cancels, return null and break
// if player inputs "Rock"," "Paper," or "Scissors," check if converted to lowercase the strings match "rock," paper," or "scissors"
// if true, return string, with only first letter capitalized
// if anything else is input, alert player to enter "Rock"," "Paper," or "Scissors" and repeat prompt
function getPlayerChoice() {
    while(true) {
        let playerInput = prompt("Make your choice.", "Rock, Paper, or Scissors?");
        if (playerInput === null) {
            return playerInput;
            break;
        }
        else if (
            playerInput.toLowerCase() === "rock" ||
            playerInput.toLowerCase() === "paper" ||
            playerInput.toLowerCase() === "scissors") {
                return playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
                break;
            } else {
                alert("Please enter 'Rock,' 'Paper,' or 'Scissors.'");
            }
        }
    }

// declare score variables
    // TODO: place inside function play to "Play again" if so desired
let computerScore;
let playerScore;

computerScore = 0;
playerScore = 0;

for (let round = 0;  round < 5; round++) {

    // initialize variable computerSelection with value of function getComputerChoice
        // log to console for testing (will not be in final game)
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
        
    // initialize variable playerSelection with value of function getPlayerChoice
        // log to console for testing (will not be in final game)
    let playerSelection = getPlayerChoice();
    console.log(playerSelection);


    // compare variable playerSelection to variable computerSelection to determine winner of round
        // if player canceled prompt, say player aborted the game
        // if variables are the same, say it's a tie and what was picked
        // if player wins, say so and what was picked
        // if computer wins, say so and what was picked
    function playRound() {
        if (playerSelection === null) {
            console.log("You aborted!");
        } else if (computerSelection === playerSelection) {
            console.log(`It's a tie! You both picked ${playerSelection}!`);
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
    
    // log to console for testing
    console.log(playRound());

}
