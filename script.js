const roundPanel = document.querySelector("#round-panel");

function initializeGame() {
    const buttons = document.querySelectorAll(".selection-button");
    for (let button of buttons) {
        button.addEventListener("click", (event) => {
            const playerChoice = event.target.textContent;
            playRound(playerChoice);
        })
    }

}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (round = 1; round < 6; round++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === "Win") playerScore++;
        if (roundResult === "Lose") computerScore++;
        showRoundResult (round, roundResult, playerSelection, computerSelection);
    }
    showEndGameResult(playerScore, computerScore);
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

    showRoundResult(result, playerSelection, computerSelection)
}

function showEndGameResult(playerScore, computerScore) {
    console.log("===================");
    switch(true) {
        case (playerScore > computerScore):
            console.log("You won the game!");
            break;
        case (playerScore < computerScore):
            console.log("You lost the game!");
            break;
        default:
            console.log("The game was a tie!");
    }
    console.log(`Player score:   ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
    console.log("===================");
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

initializeGame();