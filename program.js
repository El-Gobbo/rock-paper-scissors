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