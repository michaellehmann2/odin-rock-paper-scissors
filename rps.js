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
    computerChoiceDisplay.textContent = `Computer chose ${computerChoice}.`;

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
            lastRoundResultDisplay.textContent = `You win the round! ${humanChoice} beats ${computerChoice}.`;
            humanScore++;
            humanScoreDisplay.textContent = humanScore;
            break;
        case "computer":
            lastRoundResultDisplay.textContent = `You lose the round! ${computerChoice} beats ${humanChoice}.`;
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case "tie":
            lastRoundResultDisplay.textContent = `Tie. You both picked ${computerChoice}.`;
            break;
    }

    if (humanScore === 5 || computerScore === 5) {
        buttons.forEach((button) => {
            button.disabled = true;
        });

        let gameOver = document.querySelector(".gameOverDisplay");
        let gameOverText = document.createElement("p");
        if (winner === 'human') {
            gameOverText.textContent = "You won! Luck is on your side."
        } else {
            gameOverText.textContent = "The computer won. Better luck next time."
        }
        gameOver.appendChild(gameOverText);

        let gameOverButton = document.createElement("button");
        gameOverButton.textContent = "Click here to play again";
        gameOverButton.addEventListener('click', () => {
            location.reload();
        })
        gameOver.appendChild(gameOverButton);
    }
}

