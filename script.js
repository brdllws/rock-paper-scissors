function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0)  {
        return 'Rock';
    }
    else if (randomNumber == 1) {
        return 'Paper';
    }
    else if (randomNumber == 2) {
        return 'Scissors'
    }
    else {
        throw 'Error'
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let win = `You win! ${playerSelection} beats ${computerSelection}`
    let lose = `You lose! ${computerSelection} beats ${playerSelection}`
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') 
    }
}