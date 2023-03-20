const buttons = document.querySelectorAll(".selection-button");
const roundPanel = document.querySelector("#round-panel");
const playerPointsDisplay = document.querySelector("#player-points");
const computerPointsDisplay = document.querySelector("#computer-points");

let playerScore = 0;
let computerScore = 0;

function initializeGame() {
    for (let button of buttons) {
        button.addEventListener("click", (event) => {
            const playerChoice = event.target.textContent;
            playRound(playerChoice);
        });
    }
}

function endGame() {
    for (let button of buttons) {
        button.setAttribute("disabled", "true");
    }
    const result = (playerScore > computerScore) ? "Win" : "Lose";
    const playAgain = confirm(`You ${result}. Want to play again?`);
    if (playAgain) restart();
}

function getComputerChoice() {
    const possibleChoices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random()*3)
    return possibleChoices[randomNumber];
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        return showRoundResult("Tie", playerSelection, computerSelection);
    }

    let result;

    switch(playerSelection) {
        case "Rock":
            result = (computerSelection === "Scissors") ? "Win" : "Lose";
        case "Paper":
            result =  (computerSelection === "Rock") ? "Win" : "Lose";
        case "Scissors":
            result = (computerSelection === "Paper") ? "Win" : "Lose";
    }

    showRoundResult(result, playerSelection, computerSelection);

    (result === "Win") ? playerScore++ : computerScore++;

    updatePointsDisplay();

    if (playerScore === 5 || computerScore === 5) endGame();

}

function restart() {
    for (let button of buttons) {
        button.removeAttribute("disabled");
    }
    roundPanel.textContent = "Rock, Paper, or Scissors?";
    playerScore = 0;
    computerScore = 0;
    updatePointsDisplay();
}

function showRoundResult(result, playerSelection, computerSelection) {
    let winningSelection;
    let losingSelection;
    if (result === "Win") {
        winningSelection = playerSelection;
        losingSelection = computerSelection;
    } else {
        winningSelection = computerSelection;
        losingSelection = playerSelection;
    }

    const message =
        `${(result === "Tie") ? `It's a Tie! Both selected ${playerSelection}` : 
        `You ${result}! ${winningSelection} beats ${losingSelection}`}`;
    
    roundPanel.textContent = message;
}

function updatePointsDisplay() {
    playerPointsDisplay.textContent = playerScore;
    computerPointsDisplay.textContent = computerScore;
}

initializeGame();