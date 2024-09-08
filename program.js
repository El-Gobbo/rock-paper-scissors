const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#results");
const buttonDiv = document.querySelector("#buttonDiv");
const startButton = document.querySelector('#startGame')

startButton.addEventListener('click',playGame, {once: true});

buttonDiv.addEventListener('click', (e) => {
    let cSelection = cChoice();
    let hSelection = '';
    switch (e.target.id){
        case 'rock':
            hSelection = 'Rock';
            break;
        case 'paper':
            hSelection = 'Paper';
            break;
        case 'scissors':
            hSelection = 'Scissors';
            break;
    }
    let outcome = playRound(cSelection,hSelection);

})

function getCChoice() {
    let cChoice = (Math.random()*3);
    cChoice = Math.floor(cChoice);
    if (cChoice == 0) {
        return "Rock";
    } else if (cChoice == 1) {
        return "Paper";
    } else {return "Scissors"};
}

function getHChoice() {
    let hChoice = null;
    let loopCount = 0;
    do {
        if (loopCount > 0) {alert("This is not a valid choice")};
        hChoice = prompt("Choose from rock, paper, or scissors");
        if (hChoice == null) {return "Forfeit"}//To account for cancelling the prompt
        else {hChoice = (hChoice.at(0).toUpperCase() + hChoice.slice(1))};//To allow case-insensitive inputs
        loopCount = 1;//to trigger an alert message warning of incorrect input
    }
    while (hChoice !== "Rock" 
        && hChoice !== "Paper" 
        && hChoice !== "Scissors");

    return hChoice
}

function playRound(hChoice, cChoice) {
    let result;
    if (hChoice === cChoice) {
        result = 'draw';
    }
    else if (hChoice === "Rock" && cChoice === "Scissors"
        || hChoice === "Scissors" && cChoice === "Paper"
        || hChoice === "Paper" && cChoice === "Rock"){
            result = 'win';
        }
    else {result = 'lose';//this also means that cancelling the prompt is a loss 
    }
    return result;
}

function playGame() {
    startButton.textContent = `Game in progress`;
    let hScore = 0;
    let cScore = 0;
    let resultMessage = "";
    while (hScore < 5 && cScore < 5) {
        let hSelection = getHChoice();
        let cSelection = getCChoice();
        let result = playRound(hSelection, cSelection);
        switch(result){
            case 'win':
                ++hScore;
                resultMessage = `You win! ${hSelection} beats ${cSelection}.`;
                break;
            case 'draw':
                ++hScore;
                ++cScore;
                resultMessage = `You drew!`;
                break;
            case `lose`:
                ++cScore;
                resultMessage = `You lose! ${hSelection} is beaten by ${cSelection}.`
                break;
        }
        console.log(resultMessage);
    }
}