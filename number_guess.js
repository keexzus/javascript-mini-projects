const prompt = require("prompt-sync")();

const target = Math.round(Math.random() * 90)
console.log(target)

let guesses = 0;

// const guess = Number(question);

while(true) {
    guesses++;
const guess = Number(prompt("Guess the number between 0-100: "));
if(guess > target) {
    console.log("Your guess it too high.");
} else if (guess < target) {
    console.log("Your guess is too low.");
} else {
    console.log("You guessed it!");
    break;
}
}
console.log("You guessed the number in", guesses, "tries!")



// NOTE: had to use readline because prompt() wasn't working in Node anymore

// const readline = require('readline');

// const target = Math.round(Math.random() * 90);
// console.log(target);

// let guesses = 0;
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function getUserInput() {
//   rl.question("Guess the number between 0-100: ", function (question) {
//     const guess = Number(question);
//     guesses++;

//     if (guess > target) {
//       console.log("Your guess is too high.");
//       getUserInput(); // Ask for input again
//     } else if (guess < target) {
//       console.log("Your guess is too low.");
//       getUserInput(); // Ask for input again
//     } else {
//       console.log("You guessed it!");
//       console.log("You guessed the number in", guesses, "tries!");
//       rl.close();
//     }
//   });
// }

// getUserInput(); // Start asking for user input

