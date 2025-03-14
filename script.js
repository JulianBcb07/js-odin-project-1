
// console.log('Hello world')

// Global scope
let currentRound = 1;
let computerScore = 0;
let humanScore = 0;
let computerSelection;

ended = document.createElement("h3");
ended.classList.add("end");

endedFinal = document.createElement("h3");
endedFinal.classList.add("endFinal");


// function that select the choice ramdomly of the computer
const getComputerChoice = () => {
    // value get a random number between 1, 2 or 3
    const value = Math.floor(Math.random() * 3 + 1);

    if (value === 1) {
        computerValue = "rock"
    } else if (value === 2) {
        computerValue = "paper"
    } else {
        computerValue = "scissors"
    }

    // console.log(value);
    return computerValue.trim().toLowerCase();
}

// console.log(getComputerChoice());
// function that select human choice using a prompt modal.
const getHumanChoice = () => {
    humanValue = '';

    while (true) { // infinite loop 
        humanValue = prompt("Input choice between Rock, Paper or scissors");
        if (["rock", "paper", "scissors"].includes(humanValue)) {
            return humanValue.trim().toLowerCase();
        } else {
            alert("Invalid choice! Please enter rock, paper or scissors");
        }
    }
}

// function that works the logic of one round
const playRound = (humanChoice, computerChoise) => {
    const rules = {
        rock: "scissors", // Rock beats scissors
        scissors: "paper", // Scissors beats paper
        paper: "rock", // Paper beats rock
    };

    if (humanChoice === computerChoise) {
        ended.textContent = "Tie!";
        const container = document.querySelector(".container");
        const content = document.querySelector(".content");
        container.insertBefore(ended, content);
    } else if (rules[humanChoice] === computerChoise) {
        ended.textContent = "Human won the game!";
        const container = document.querySelector(".container");
        const content = document.querySelector(".content");
        container.insertBefore(ended, content);
        humanScore++;
    } else if (rules[computerChoise] === humanChoice) {
        ended.textContent = "Computer won the game!";
        const container = document.querySelector(".container");
        const content = document.querySelector(".content");
        container.insertBefore(ended, content);
        computerScore++;
    }
}

// function that start one round
const playGame = () => {
    round = document.querySelector(".rounds");
    round.textContent = `Round: ${currentRound}`;

    human = document.querySelector(".human-score");
    human.textContent = `Human Score: ${humanScore}`;

    computer = document.querySelector(".computer-score");
    computer.textContent = `Computer Score: ${computerScore}`

    computerSelection = getComputerChoice();
    console.log(`Computer selection: ${computerSelection}`);

    return computerSelection;
}

// addEventListenner
const inputHuman = document.getElementById("input-choise");
inputHuman.addEventListener('click', () => {
    handleUserChoise();
});

const handleUserChoise = () => {
    const humanSelection = getHumanChoice();

    console.log(`Human selection: ${humanSelection}`);
    humanTime = document.querySelector(".human-choise");
    humanTime.textContent = `Human Choice: ${humanSelection}`;

    computerTime = document.querySelector(".computer-choice");
    computerTime.textContent = `Computer Choice: ${computerSelection}`;

    playRound(humanSelection, computerSelection);

    console.log(currentRound);

    if (currentRound < 5) {
        currentRound++;
        human = document.querySelector(".human-score");
        human.textContent = `Human Score: ${humanScore}`;
        computer = document.querySelector(".computer-score");
        computer.textContent = `Computer Score: ${computerScore}`
        playGame();

    } else if (computerScore > humanScore) {
        human = document.querySelector(".human-score");
        human.textContent = `Human Score: ${humanScore}`;
        computer = document.querySelector(".computer-score");
        computer.textContent = `Computer Score: ${computerScore}`
        endedFinal.textContent = "Game Ended, Computer won the game!";
        const container = document.querySelector(".container");
        const content = document.querySelector(".content");
        container.insertBefore(endedFinal, content);
        console.log("Computer won the game!");
        inputHuman.disabled = true;
        play.disabled = true;
        restart.disabled = false;
    } else if (humanScore > computerScore) {
        human = document.querySelector(".human-score");
        human.textContent = `Human Score: ${humanScore}`;
        computer = document.querySelector(".computer-score");
        computer.textContent = `Computer Score: ${computerScore}`
        endedFinal.textContent = "Game Ended, Human won the game!";
        const container = document.querySelector(".container");
        const content = document.querySelector(".content");
        container.insertBefore(endedFinal, content);
        inputHuman.disabled = true;
        play.disabled = true;
        restart.disabled = false;
    } else {
        endedFinal.textContent = "Game Ended, Tie!";
        const container = document.querySelector(".container");
        const content = document.querySelector(".content");
        container.insertBefore(endedFinal, content);
        inputHuman.disabled = true;
        play.disabled = true;
        restart.disabled = false;
    }

}

const play = document.getElementById("play-game");
play.addEventListener('click', () => {
    playGame();
    play.disabled = true;
    const inputHuman = document.getElementById("input-choise");
    inputHuman.disabled = false;
    const restart = document.getElementById("game-restart")
    restart.disabled = true;
});

const restart = document.getElementById("game-restart");
restart.addEventListener("click", () => {
    round = document.querySelector(".rounds");
    round.textContent = ``;

    ended = document.querySelector(".end");
    ended.textContent = "";

    endedFinal = document.querySelector(".endFinal");
    endedFinal.textContent = "";

    human = document.querySelector(".human-score");
    human.textContent = ``;

    computer = document.querySelector(".computer-score");
    computer.textContent = ``

    humanTime = document.querySelector(".human-choise");
    humanTime.textContent = ``;

    computerTime = document.querySelector(".computer-choice");
    computerTime.textContent = ``;

    computerScore = 0;
    humanScore = 0;
    currentRound = 1;

    inputHuman.disabled = true;
    restart.disabled = true;
    play.disabled = false;
});
