function capitalize(string){
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase().concat(string.substr(1))
}

function game(){
    for (round = 1; round < 6; round++) {
        let playerSelection = prompt("Choose Rock, Paper, or Scissors");
        playerSelection = capitalize(playerSelection);
        while (isInvalidPlayerSelection(playerSelection)) {
            alert("Invalid selection!")
            playerSelection = prompt("Choose Rock, Paper, or Scissors");
            playerSelection = capitalize(playerSelection);
        }
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(`Round ${round}: ${roundResult}`)
    }
}

function getComputerChoice() {
    const possibleChoices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random()*3)
    return possibleChoices[randomNumber];
}

function isInvalidPlayerSelection(playerSelection) {
    return (playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors")
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);
    if (playerSelection === computerSelection) {
        return `It's a Tie! Both selected ${playerSelection}`
    }

    switch(playerSelection) {
        case "Rock":
            return (computerSelection === "Scissors") ? "You Win! Rock beats Scissors" : "You Lose! Paper beats Rock";
        case "Paper":
            return (computerSelection === "Rock") ? "You Win! Paper beats Rock" : "You Lose! Scissors beats Paper";
        case "Scissors":
            return (computerSelection === "Paper") ? "You Win! Scissors beats Paper" : "You Win! Paper beats Scissors";
    }
}

game();