// declare function getComputerChoice() to randomly return Rock, Paper, or Scissors
function getComputerChoice() {
    // select random number between 0 and 1
    // multiply result by 3
    // round number down to integer, giving three possible values: 0, 1, and 2
    let randomNumber = Math.floor(Math.random() * 3);
    // use if statements to return "Rock" for 0, "Paper" 1, and "Scissors" for 2
    if (randomNumber === 0) {
        return "Rock";
    }   else if (randomNumber === 1) {
        return "Paper";
    }   else {
        return "Scissors";
    }
}

// declare computerSelection variable and assign getComputerChoice() as value
let computerSelection = getComputerChoice();
// log console for testing
console.log(computerSelection);

// declare function getPlayerChoice() and prompt player to type choice
function getPlayerChoice() {
    let playerInput = prompt("Make your choice.", "Rock, Paper, or Scissors?");
    // make case insensitive
    // if player selection isn't proper, reprompt, emphasizing three choices
    if (
        playerInput === "Rock" ||
        playerInput === "Paper" ||
        playerInput === "Scissors") {
            return playerInput;
    } else {
        alert("Please enter 'Rock,' 'Paper,' or 'Scissors.'");
    }
}

// declare playerSeletion variable and assign getPlayerChoice() as value
let playerSelection = getPlayerChoice();
// log console for testing
console.log(playerSelection);

// write function playRound() to play single round using playerSelection and computerSelection and return a string showing the result
function playRound() {
    if (computerSelection === playerSelection) {
        // use template literals to make result output responsive to selection
        console.log(`It's a tie! You both picked ${playerSelection}!`);
    } else if (
        computerSelection === "Rock" && playerSelection === "Paper" ||
        computerSelection === "Paper" && playerSelection === "Scissors" ||
        computerSelection === "Scissors" && playerSelection === "Rock") {
            console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    } else if ( // this isn't ideal, because as it stands if you enter gibberish it still outputs the string below
        playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
    }
}

// log console for testing
console.log(playRound());

// write function called game(), calling playRound() inside of it and counting how many rounds played, as well as reporting on round victories and match victories