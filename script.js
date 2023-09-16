// Pseudo Code
// learn how to arrays
// learn to randomize array list (strings)
// learn the game concept
// comparison between user selection and computer selection
// Combine the playerSelection and computerSelection to 1 func

function playRound(playerSelection, computerSelection) {
  // your code here!
}

// function for getting computer choices
function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissors"]; // array for computer's choice
  return console.log(choice[Math.floor(Math.random() * choice.length)]);
}

const playerSelection = prompt("Rock, Paper, Scissors:");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
