// Global Variables
let humanScore = 0;
let computerScore = 0;

// DOM Element Selections
const result = document.querySelector("h2");
const finalResult = document.querySelector("h4");
const humanSkore = document.querySelector(".HumanScore");
const computerSkore = document.querySelector(".ComputerScore");
const button = document.querySelectorAll("button");

// Functions

// Function to generate a random computer choice
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

// Function to display results and handle the final result if a score of 5 is reached
function resultGiver(string) {
  result.textContent = string;
  // Display initial scores
  humanSkore.textContent = humanScore;
  computerSkore.textContent = computerScore;
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      finalResult.textContent = `You won! your score is ${humanScore} and cpu score is ${computerScore}`;
    } else if (humanScore < computerScore) {
      finalResult.textContent = `You lost the game! your score is ${humanScore} and cpu score is ${computerScore}`;
    } else {
      finalResult.textContent = "Match ties! Try again";
    }
    humanScore = 0;
    computerScore = 0;
  }
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
  let human = humanChoice;
  let computer = computerChoice;

  if (human === computer) {
    resultGiver("It's a tie");
  } else if (
    (human === "Rock" && computer === "Paper") ||
    (human === "Paper" && computer === "Scissor") ||
    (human === "Scissor" && computer === "Rock")
  ) {
    computerScore++;
    resultGiver(`You lose! ${computer} beats ${human}`);
  } else if (
    (human === "Rock" && computer === "Scissor") ||
    (human === "Paper" && computer === "Rock") ||
    (human === "Scissor" && computer === "Paper")
  ) {
    humanScore++;
    resultGiver(`You won! ${human} beats ${computer}`);
  }
}

// Event Listeners

// Listen for each button click to play a round
button.forEach((el) => {
  el.addEventListener("click", () => {
    finalResult.textContent = "";
    playRound(el.textContent, getComputerChoice());
  });
});
