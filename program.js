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

    let humanChoice = 0;
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