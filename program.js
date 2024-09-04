function getComputerChoice() {
    let computerChoice = 0;
    computerChoice = Math.random();
    computerChoice *= 1000;
    computerChoice = Math.floor(computerChoice);
    computerChoice = computerChoice % 3;
    if (computerChoice == 0) {
        return "rock";
    } else if (computerChoice == 1) {
        return "paper";
    } else {return "scissors"};
}

function getHumanChoice() {
    function checkIfValid(choice) {
        switch(choice) {
            case "rock":
            case "paper":
            case "scissors":
                return true;
                break;
            default:
                return false;
        }
    }

    let humanChoice = null;
    let loopCount = 0;
    do {
        if (loopCount > 0) {alert("This is not a valid choice")};
        humanChoice = prompt("Choose from rock, paper, or scissors");

        if (humanChoice == null) {return "Cancel"}
        else {humanChoice = humanChoice.toLowerCase()};
        loopCount = 1;

    }
    while (!checkIfValid(humanChoice));

    return humanChoice
}

function playRound(humanChoice, computerChoice) {
    let resultMessage;
    if (humanChoice === computerChoice) {
        ++humanScore;
        ++computerScore;
        resultMessage = `You drew!`;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "scissors" && computerChoice === "paper"
        || humanChoice === "paper" && computerChoice === "rock") {
        ++humanScore;
        resultMessage = `You win! ${humanChoice} beats ${computerChoice}.`;
        }
    else {++computerScore;
        resultMessage = `You lose! ${humanChoice} is beaten by ${computerChoice}.`;
    }
    return console.log(resultMessage);
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)