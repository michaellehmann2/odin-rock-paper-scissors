let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".playerChoiceBtns > button");
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        playRound(button.textContent, getComputerChoice())
    });
});

const humanScoreDisplay = document.querySelector("#humanScore");
const computerScoreDisplay = document.querySelector("#computerScore");
const computerChoiceDisplay = document.querySelector("#compChoice");
const lastRoundResultDisplay = document.querySelector("#result");

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
    computerChoiceDisplay.textContent = `Computer chose ${computerChoice}`;

    if (humanChoice === computerChoice) winner = "tie";

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
            lastRoundResultDisplay.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
            humanScore++;
            humanScoreDisplay.textContent = humanScore;
            break;
        case "computer":
            lastRoundResultDisplay.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case "tie":
            lastRoundResultDisplay.textContent = `Tie. You both picked ${computerChoice}`;
            break;
    }
}

