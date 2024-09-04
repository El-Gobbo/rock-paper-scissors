function getComputerChoice() {
    let computerChoice = 0;
    computerChoice = Math.random();
    computerChoice *= 1000;
    computerChoice = Math.floor(computerChoice);
    computerChoice = computerChoice % 3;
    if (computerChoice == 0) {
        return "Rock";
    } else if (computerChoice == 1) {
        return "Paper";
    } else {return "Scissors"};
}

function getHumanChoice() {
    function checkIfValid(choice) {
        switch(choice.toLowerCase()) {
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

        if (humanChoice == null) {return "Cancel"};
        loopCount = 1;
    }
    while (!checkIfValid(humanChoice));

    humanChoice = humanChoice.at(0).toUpperCase() + humanChoice.slice(1);
    return humanChoice
}

function playRound(humanChoice, computerChoice) {
    let resultMessage;
    if (humanChoice === computerChoice) {
        ++humanScore;
        ++computerScore;
        resultMessage = `You drew!`;
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissors"
        || humanChoice === "Scissors" && computerChoice === "Paper"
        || humanChoice === "Paper" && computerChoice === "Rock") {
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

playRound(humanSelection, computerSelection);