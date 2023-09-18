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

// function for getting random computer choices
function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissors"]; // array for computer's choice
  return choice[Math.floor(Math.random() * choice.length)]; // return the random choices
}

// let getPlayerChoice = function convertToLowerCase(str1, str2) {
//   const lowerStr1 = str1.toLowerCase();
//   const lowerStr2 = str2.toLowerCase();

//   // Perform your comparison logic on the lowercase strings
//   if (lowerStr1 === lowerStr2) {
//     return true;
//   } else {
//     return false;
//   }
// };

function playRound(playerSelection, computerSelection) {
  // your code here!
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return `${playerSelection} ties with ${computerSelection}`;
  } else if (
    (playerSelection === "paper" && computerSelection === "Rock") ||
    (playerSelection === "rock" && computerSelection === "Scissors") ||
    (playerSelection === "scissors" && computerSelection == "Paper")
  ) {
    return `Player won, ${playerSelection} beats ${computerSelection}`;
  } else {
    return `Computer won, ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  let playerScore = 0; // saves a player's score here
  let computerScore = 0; // saves the computer's score here
  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt("rock, paper, scissors"); // for user prompt
    let computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection); //
    console.log(result);

    // ! BUGGY PART HERE  !
    // EDIT THIS
    if (result.includes("Player")) {
      // reference the return string `Player` on the func playRound();
      // this where we get scores of player && computer
      playerScore++;
    } else if (result.includes("Computer")) {
      // reference the return string `Computer` on the func playRound();
      computerScore++;
    }
  }

  if (playerScore === computerScore) {
    // this where the final verdict is made.
    console.log("It's a tie game!");
  } else if (playerScore > computerScore) {
    console.log("Congratulatiosns, You won the game.");
  } else {
    console.log("Sorry, Computer won the game.");
  }
}

game();
