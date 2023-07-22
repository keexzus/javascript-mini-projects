const target = Math.round(Math.random() * 90)
console.log(target)

let guesses = 0;
const question = prompt("Guess the number between 0-100: ");
const guess = Number(question);

if(guess > target) {
    console.log("Your guess it too high.");
} else if (guess < target) {
    console.log("Your guess is too low.")
}