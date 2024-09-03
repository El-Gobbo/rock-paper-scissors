function getComputerChoice() {
    let computerChoice = 0;
    computerChoice = Math.random();
    console.log(computerChoice);
    computerChoice *= 1000;
    console.log(computerChoice);
    computerChoice = Math.floor(computerChoice);
    console.log(computerChoice);
    computerChoice = computerChoice % 3;
    console.log(computerChoice);
    if (computerChoice == 0) {
        return "rock";
    } else if (computerChoice == 1) {
        return "paper";
    } else {return "scissors"};
}