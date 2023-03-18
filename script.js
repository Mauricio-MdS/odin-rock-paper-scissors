function capitalize(string){
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase().concat(string.substr(1))
}

function getComputerChoice() {
    const possibleChoices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random()*3)
    return possibleChoices[randomNumber];
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
        default:
            return "Invalid Selection"
    }
}