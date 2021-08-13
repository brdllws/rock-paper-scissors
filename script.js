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
        if (computerSelection == 'rock') return ['Draw!', 0];
        else if (computerSelection == 'paper') return [lose, false];
        else if (computerSelection == 'scissors') return [win, true];
        else throw 'Error';
    }
    if (playerSelection == 'paper') {
        if (computerSelection == 'rock') return [win, true];
        else if (computerSelection == 'paper') return ['Draw!', 0];
        else if (computerSelection == 'scissors') return [lose, false];
        else throw 'Error';
    }
    if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') return [lose, false];
        else if (computerSelection == 'paper') return [win, true];
        else if (computerSelection == 'scissors') return ['Draw!', 0];
        else throw 'Error';
    }
}

function game() {
    let playerPts = 0;
    let computerPts = 0;
    for (let i = 0; i < 5; i++) {
        let playerMove = prompt("Select your move", "Rock, Paper, or Scissors");
        let result = playRound(playerMove, computerPlay());
        let playerWin = result[1];
        console.log(result[0]);
        if (result[0] != 'Draw!') {
            if (playerWin) playerPts++;
            else computerPts++;
        }
    }
    if (playerPts == computerPts) console.log("Game ends in a draw.");
    else if (playerPts > computerPts) console.log("You win!");
    else console.log("You lose! :(");
}

const buttons = document.querySelectorAll("#btn")
buttons.forEach(myFunc);
function myFunc(item) {
    item.addEventListener("click", function() {
    alert(playRound(item.innerText, computerPlay())[0]);
    });
}

// game();