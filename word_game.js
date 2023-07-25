const prompt = require("prompt-sync")();

const answer1 = prompt("Would you like to play (y/n)? ");

if (answer1.toLowerCase() === "y") {
    const answer2 = prompt("Would you like to go left or right (left/right)? ")
   
    if (answer2 === "left") {
        console.log("Oops! You went left and fell down a well. Lost ")
    } else {
        //right
        console.log("Cool. You avoided hazard and approach a wizard...");

        const answer3 = prompt("Would you like to ask the wizard a question, or run away? (ask/run)"
        );
        if (answer3 === "ask") {
            console.log("You are granted 3 wishes!")
        } else {
            console.log("Now the dragon chases you!")
        }

    }
} else {
    console.log("Really, that's too bad.")
}