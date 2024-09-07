//picks rock, paper, or scissors for the computer player
function getComputerChoice() {
    let randVal = Math.random();
    if (randVal < 0.333) {
        return "rock";
    } else if (randVal < 0.667) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let goAgain = true;
    let choice = "";

    //loop runs until we get valid input
    while (goAgain) {
        choice = prompt("Choose rock, paper, or scissors:");

        if (choice && (choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "scissors")) {
            goAgain = false;
            return choice.toLowerCase();
        } else {
            alert("Please choose rock, paper, or scissors. Make sure your spelling is correct.");
        }
    }
}

