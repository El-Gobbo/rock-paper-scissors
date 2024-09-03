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
        console.log(choice);
        choice = choice.toLowerCase();
        if (choice == "rock" || choice == "paper" || choice == "scissors") {
            return true;
        } else {return false}
    }
    let humanChoice = prompt("Choose from rock, paper, or scissors");

    if (humanChoice == null) {return "Forfeit"};

    while (!checkIfValid(humanChoice)) {
        humanChoice = prompt("This is not an accepted input. Please choose from rock, paper, or scissors");
    }
    return humanChoice
}