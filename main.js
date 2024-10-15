Hey this is my project's code 
function getComputerChoice() {
  let max = 3;
  let min = 1;
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  switch (randomNumber) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissor";
  }
}
function getHumanChoice() {
  let userInput = prompt("What's your move from Rock,Paper and Scissor ?");
  switch (userInput.toLowerCase()) {
    case "rock":
      return "Rock";
    case "paper":
      return "Paper";
    case "scissor":
      return "Scissor";
    default:
      return "Invalid choice. Please choose Rock, Paper, or Scissor.";
  }
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
  let human = humanChoice();
  let computer = computerChoice();
  if (human === computer) {
    console.log("It's a tie");
  } else if (
    (human === "Rock" && computer === "Paper") ||
    (human === "Paper" && computer === "Scissor") ||
    (human === "Scissor" && computer === "Rock")
  ) {
    console.log(`You lose! ${computer} beats ${human}`);
    return computerScore++;
  } else if (
    (human === "Rock" && computer === "Scissor") ||
    (human === "Paper" && computer === "Rock") ||
    (human === "Scissor" && computer === "Paper")
  ) {
    console.log(`You won! ${human} beats ${computer}`);
    return humanScore++;
  }
}
function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice, getComputerChoice);
  }
  if (computerScore < humanScore) {
    console.log(
      `You won! your score is ${humanScore} and cpu score is ${computerScore}`
    );
    humanScore = 0;
    computerScore = 0;
  } else if (humanScore < computerScore) {
    console.log(
      `You lost the game! your score is ${humanScore} and cpu score is ${computerScore}`
    );
    humanScore = 0;
    computerScore = 0;
  } else {
    humanScore = 0;
    computerScore = 0;
    return "Match ties! Try again";
  }
}
playGame();