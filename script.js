const choices = ["Rock", "Paper", "Scissors"];
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playAgain = document.getElementById("play-again");
let roundMsg = document.getElementById("round-msg");
let winMsg = document.getElementById("win-msg");
let playerScoreDisplay = document.getElementById("player-score");
let computerScoreDisplay = document.getElementById("computer-score");
let playerScore = 0;
let computerScore = 0;

playerScoreDisplay.innerText = playerScore;
computerScoreDisplay.innerText = computerScore;

let buttons = document.querySelectorAll("button");

let randomIndex = Math.floor(Math.random() * 3);
let computerChoice = choices[randomIndex];
//console.log("PC: " + computerChoice);

const playerWins = playerChoice => {
    return (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    );
}

let play = playerChoice => {
    if (playerScore === 3) {
        return null;
    } else if (computerScore === 3) {
        return null;
    }

    if (playerWins(playerChoice)) {
        playerScore++;
        playerScoreDisplay.innerText = playerScore;
        roundMsg.innerHTML = `<b>Player</b> wins: <b>${playerChoice}</b> beats ${computerChoice}`;
        //console.log("Player: " + playerChoice);
        //console.log("Win!");
    } else if (playerChoice === computerChoice) {
        roundMsg.innerHTML = "It's a <b>Tie!</b>"
        //console.log("Player: " + playerChoice);
        //console.log("Tie!");
    } else {
        computerScore++;
        computerScoreDisplay.innerText = computerScore;
        roundMsg.innerHTML = `<b>Computer</b> wins: <b>${computerChoice}</b> beats ${playerChoice}`;
        //console.log("Player: " + playerChoice);
        //console.log("Lose");
    }

    randomIndex = Math.floor(Math.random() * 3);
    computerChoice = choices[randomIndex];
    //console.log("PC: " + computerChoice);

    if (playerScore === 3) {
        winMsg.innerHTML = "<b>Player wins the game!</b>";
        playAgain.style.display = "block";
    } else if (computerScore === 3) {
        winMsg.innerHTML = "<b>You lost!</b> Computer wins the game";
        playAgain.style.display = "block";
    }
}

let restartGame = () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.innerText = playerScore;
    computerScoreDisplay.innerText = computerScore;
    roundMsg.innerHTML = "";
    winMsg.innerHTML = "";
    playAgain.style.display = "none";
}

rock.addEventListener("click", () => play("Rock"));
paper.addEventListener("click", () => play("Paper"));
scissors.addEventListener("click", () => play("Scissors"));
playAgain.addEventListener("click", restartGame);
