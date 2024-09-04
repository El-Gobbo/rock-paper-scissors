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
    let humanChoice = null;
    let loopCount = 0;
    do {
        if (loopCount > 0) {alert("This is not a valid choice")};
        humanChoice = prompt("Choose from rock, paper, or scissors");
        if (humanChoice == null) {return "Forfeit"}//To account for cancelling the prompt
        else {humanChoice = (humanChoice.at(0).toUpperCase() + humanChoice.slice(1))};//To allow case-insensitive inputs
        loopCount = 1;//to trigger an alert message warning of incorrect input
    }
    while (humanChoice != `Rock` 
        || humanChoice != `Paper` 
        || humanChoice != `Scissors`);

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
    else {result = 'lose';//this also means that cancelling the prompt is a loss 
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