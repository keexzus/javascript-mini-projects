const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;
let ties = 0;

while(true) {
const playerChoice = prompt("Enter rock, paper, scissors (or q to quit): ")
if (playerChoice.toLowerCase() === "q") {
    break;
}

if 
(playerChoice !== "rock" && 
playerChoice !== "paper" && 
playerChoice !== "scissors"
) 
{
    console.log("Please make a valid playerChoice.")
    continue;
} 

const choices = ["rock", "paper", "scissors"];
const randomIndex = Math.round(Math.random() * 2);
const computerChoice = choices[randomIndex];
console.log("The computer chose: ", computerChoice);

if (computerChoice === playerChoice) {
    console.log("Draw!");
    ties++
} else if (
(playerChoice === "paper" && computerChoice === "rock") ||
          (playerChoice === "rock" && computerChoice === "scissors") ||
          (playerChoice === "scissors" && computerChoice === "paper")
)
 {
    console.log("You Won!");
    wins++
} else {
    console.log("You Lost!");
    losses++
}
}
console.log("Wins: ", wins, "Losses: ", losses, "Ties: ", ties)


// if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {

// } else {
//     console.log("please make playerChoice")
// }