// Pseudo Code
// learn how to arrays
// learn to randomize array list (strings)
// learn the game concept
// Use prompt to get User input
// Combine the playerSelection and computerSelection to 1 func
// Conditional between user selection and computer selection
// new function called game() for 5 rounds that shows the results using for loops

function playRound(playerSelection, computerSelection) {
  // your code here!
  if (playerSelection == computerSelection) {
    console.log("User choose:", playerSelection);
    console.log("Computer choose:", computerSelection);
    return "Result: It's a tie";
  } else if (playerSelection) {
    if (computerSelection == "Paper") {
      // computer
      console.log("User choose:", playerSelection);
      console.log("Computer choose:", computerSelection);
      return "Result: Computer won!, Paper beats Rock";
    } else computerSelection == "Scissors"; // computer
    console.log("User choose:", playerSelection);
    console.log("Computer choose:", computerSelection);
    return "Result: User won!, Rock beats Scissors ";

    // for prompt
  } else if (playerSelection == "Paper") {
    if (computerSelection == "Rocks") {
      // computer
      console.log("User choose:", playerSelection);
      console.log("Computer choose:", computerSelection);
      return "Result: User won!, Paper beats Rock";
    } else computerSelection == "Scissors";
    console.log("User choose:", playerSelection);
    console.log("Computer choose:", computerSelection);
    return "Results: Computer won!, Scissors beats Paper";
  } else if (playerSelection == "Paper") {
    // user choice
    if (computerSelection == "Rock") {
      // computer choice
      console.log("User choose:", playerSelection);
      console.log("Computer choose:", computerSelection);
      return "Result: User won!, Paper beats Rock";
    } else computerSelection == "Scissors"; //computer choice
    console.log("User choose:", playerSelection);
    console.log("Computer choose:", computerSelection);
    return "Result: Computer won!, Scissors beats Paper";
  }
}

// function for getting computer choices
function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissors"]; // array for computer's choice
  return choice[Math.floor(Math.random() * choice.length)]; // return the random choices
}

// let playerSelection = prompt("Choose: Rock, Paper, Scissors"); // for user prompt
// let computerSelection = getComputerChoice();

// function game() {
//   for (let i = 0; i < 5; i++) {
//     return playRound(" ", " ");
//   }
// }

function game() {
  for (let i = 0; i <= 5; i++) {
    let playerSelection = prompt("Choose: Rock, Paper, Scissors"); // for user prompt
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
