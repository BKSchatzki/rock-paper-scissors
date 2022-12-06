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
}

// declare computerSelection variable and assign getComputerChoice() as value
let computerSelection = getComputerChoice();

// log console for testing
console.log(computerSelection);


// write function playRound() to play single round using playerSelection and computerSelection and return a string showing the result
    // assign playerSelection to value of prompt
        // make case insensitive
        // if player selection isn't proper, reprompt, emphasizing three choices




// write function called game(), calling playRound() inside of it and counting how many rounds played, as well as reporting on round victories and match victories