let humanScore = 0;
let computerScore = 0;


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

function playRound(humanChoice, computerChoice) {
    let winner = "";

    if (humanChoice === computerChoice)
        winner = "tie";

    else {
        if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                winner = "computer";
            }
            else {
                winner = "human";
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                winner = "human";
            }
            else {
                winner = "computer";
            }
                
        } else {
            if (computerChoice === "rock") {
                winner = "computer";
            } else {
                winner = "human";
            }
        }
    }

    switch (winner) {
        case "human":
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
            break;
        case "computer":
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
            break;
        case "tie":
            console.log(`Tie. You both picked ${computerChoice}`);
            break;
        default:
            console.log("Error.");
            break;
    }
}

function playGame() {
    const numRounds = 5;
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < numRounds; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log(`Final Scores:`);
    console.log(`You: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (computerScore > humanScore) {
        console.log("You lose.");
    } else {
        console.log("Tie!");
    }
}

const buttons = document.querySelectorAll(".playerChoiceBtns > button");
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        playRound(button.textContent, getComputerChoice())
    });
});

