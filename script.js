const prompt = require("prompt-sync")();
let correct_answers = 0;
const total_questions = 3
console.log("welcome to the quiz!");

const answer_1 = prompt("what is the brain of the computer? ");
const correct_answer_1 = "CPU";

if (answer_1.toUpperCase() === correct_answer_1) {
    console.log("You got the right answer!");
    correct_answers ++;
} else {
    console.log("You got it wrong.")
}

const answer_2 = prompt("where is Spain? ");
const correct_answer_2 = "EUROPE";

if (answer_2.toUpperCase() === correct_answer_2) {
    console.log("You got the right answer!");
    correct_answers ++;
} else {
    console.log("Whoops. Wrong answer")
}

const answer_3 = prompt("what's the Best Sport? ");
const correct_answer_3 = "BASEBALL";

if (answer_3.toUpperCase() === correct_answer_3) {
    console.log("You are wise and correct!");
    correct_answers ++;
} else {
    console.log("Wrong answer, buddy.")
}
const percent = Math.round((correct_answers / total_questions) * 100);

console.log("You scored", percent , "percent!")