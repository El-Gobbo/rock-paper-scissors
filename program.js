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
    let result;
    if (humanChoice === computerChoice) {
        result = 'draw';
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissors"
        || humanChoice === "Scissors" && computerChoice === "Paper"
        || humanChoice === "Paper" && computerChoice === "Rock"){
            result = 'win';
        }
    else {result = 'lose';
    }
    return result;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let resultMessage = "";
    for (let i=0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);
        switch(result){
            case 'win':
                ++humanScore;
                resultMessage = `You win! ${humanSelection} beats ${computerSelection}.`;
                break;
            case 'draw':
                ++humanScore;
                ++computerScore;
                resultMessage = `You drew!`;
                break;
            case `lose`:
                ++computerScore;
                resultMessage = `You lose! ${humanSelection} is beaten by ${computerSelection}.`
                break;
        }
        console.log(resultMessage);
    }
}