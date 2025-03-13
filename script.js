
// console.log('Hello world')

// Global scope
let computerScore = 0;
let humanScore = 0;


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


const playRound = (humanChoice, computerChoise) => {
    const rules = {
        rock: "scissors", // Rock beats scissors
        scissors: "paper", // Scissors beats paper
        paper: "rock", // Paper beats rock
    };

    if (humanChoice === computerChoise) {
        console.log("tie!")
    } else if (rules[humanChoice] === computerChoise) {
        console.log("Human won!")
        humanScore++;
    } else if (rules[computerChoise] === humanChoice) {
        console.log("Computer won!");
        computerScore++;
    }
}

const playGame = () => {
    for (let i = 1; i <= 5; i++) {
        console.log(`Round: ${i}`);
        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);

        const computerSelection = getComputerChoice();
        console.log(`Computer selection: ${computerSelection}`);
        const humanSelection = getHumanChoice();
        console.log(`Human selection: ${humanSelection}`);
        playRound(humanSelection, computerSelection);

    }

    console.log("Game has ended");
    if (humanScore > computerScore) {
        console.log("Human won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    } else {
        console.log("Tie!");
    }
}

playGame();