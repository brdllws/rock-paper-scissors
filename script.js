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
    let win = `You win! ${playerSelection} beats ${computerSelection}`
    let lose = `You lose! ${computerSelection} beats ${playerSelection}`
    if (playerSelection == 'Rock') {
        if (computerSelection == 'Rock') return ['Draw!', 0];
        else if (computerSelection == 'Paper') return [lose, false];
        else if (computerSelection == 'Scissors') return [win, true];
        else throw 'Error';
    }
    if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock') return [win, true];
        else if (computerSelection == 'Paper') return ['Draw!', 0];
        else if (computerSelection == 'Scissors') return [lose, false];
        else throw 'Error';
    }
    if (playerSelection == 'Scissors') {
        if (computerSelection == 'Rock') return [lose, false];
        else if (computerSelection == 'Paper') return [win, true];
        else if (computerSelection == 'Scissors') return ['Draw!', 0];
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

let numPoints = 0;
let numPointsCom = 0;
const buttons = document.querySelectorAll("#btn")
buttons.forEach(myFunc);
function myFunc(item) {
    item.addEventListener("click", function() {
        let the_comp = computerPlay();
        console.log(the_comp);
        let results = playRound(item.innerText, the_comp);
        const currResult = document.querySelector(".current-result");
        currResult.textContent = results[0];
        const currPoints = document.querySelector(".user-score");
        const comPoints = document.querySelector(".comp-score");
        const finalResult = document.querySelector(".final-results");
        if (results[1]) {
            finalResult.textContent = "";
            numPoints++;
            currPoints.textContent = `Player: ${numPoints} pts`;
            if (numPoints == 5) {
                finalResult.textContent = "You win the game!"
                currPoints.textContent = "Player: 0 pts";
                comPoints.textContent = "Computer: 0 pts";
                numPoints = 0;
                numPointsCom = 0;  
            }
        }
        else if (results[0] != "Draw!") {
            finalResult.textContent = "";
            numPointsCom++;
            comPoints.textContent = `Computer: ${numPointsCom} pts`;
            if (numPointsCom == 5) {
                finalResult.textContent = "You lose the game!"
                currPoints.textContent = "Player: 0 pts";
                comPoints.textContent = "Computer: 0 pts";
                numPoints = 0;
                numPointsCom = 0;  
            }
        }
    });
}

// game();