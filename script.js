let playerSelection;

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
    // log console for testing
}

let computerSelection = getComputerChoice();
console.log(computerSelection);


// write function playRound() to play single round using playerSelection and computerSelection and return a string showing the result




// write function called game(), calling playRound() inside of it and counting how many rounds played, as well as reporting on round victories and match victories