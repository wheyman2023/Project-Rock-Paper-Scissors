// Pseudo Code
// learn how to arrays
// learn to randomize array list (strings)
// learn the game concept :
// paper beats rocks
// rocks beats scissors
// scissors beats paper
// Use prompt to get User input
// Combine the playerSelection and computerSelection to 1 func
// Conditional between user selection and computer selection
// new function called game() for 5 rounds that shows the results using for loops
// make playRound short & simple
function playRound(playerSelection, computerSelection) {
  // your code here!
  if (playerSelection === computerSelection) {
    return `${playerSelection} ties with ${computerSelection}`;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return `${playerSelection} beats ${computerSelection}, You win!`;
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return `${playerSelection} beats ${computerSelection}, You won!`;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return `${playerSelection} beats ${computerSelection}, You won!`;
  } else {
    return `${computerSelection} beats ${playerSelection}, Computer Won!`;
  }
}

// function for getting random computer choices
function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissors"]; // array for computer's choice
  return choice[Math.floor(Math.random() * choice.length)]; // return the random choices
}

function game() {
  let playerScore = 0; // saves a player's score here
  let computerScore = 0; // saves the computer's score here
  for (let i = 0; i <= 5; i++) {
    let playerSelection = prompt("Choose: Rock, Paper, Scissors"); // for user prompt
    let computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection); //
    console.log(result);

    if (result.includes("win")) {
      // this where we get scores of player && computer
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    // this where the final verdict is made.
    console.log("Congratulations! You won the game.");
  } else if (playerScore < computerScore) {
    console.log("Sorry, better luck next time.");
  } else {
    console.log("It's a tie game!");
  }
}

game();
