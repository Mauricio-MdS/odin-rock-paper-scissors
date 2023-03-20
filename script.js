function capitalize(string){
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase().concat(string.substr(1))
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

function getPlayerChoice() {
    let playerSelection = prompt("Choose Rock, Paper, or Scissors");
    playerSelection = capitalize(playerSelection);
    while (isInvalidPlayerSelection(playerSelection)) {
        alert("Invalid selection!")
        playerSelection = prompt("Choose Rock, Paper, or Scissors");
        playerSelection = capitalize(playerSelection);
    }
    return playerSelection;
}

function isInvalidPlayerSelection(playerSelection) {
    return (playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors")
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    }

    switch(playerSelection) {
        case "Rock":
            return (computerSelection === "Scissors") ? "Win" : "Lose";
        case "Paper":
            return (computerSelection === "Rock") ? "Win" : "Lose";
        case "Scissors":
            return (computerSelection === "Paper") ? "Win" : "Lose";
    }
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

function showRoundResult(round, result, playerSelection, computerSelection) {
    let winningSelection;
    let losingSelection;
    if (result === "Win") {
        winningSelection = playerSelection;
        losingSelection = computerSelection;
    } else {
        winningSelection = computerSelection;
        losingSelection = playerSelection;
    }

    console.log(
        `Round ${round}: ${(result === "Tie") ? `It's a Tie! Both selected ${playerSelection}` : 
        `You ${result}! ${winningSelection} beats ${losingSelection}`}`
    )
}