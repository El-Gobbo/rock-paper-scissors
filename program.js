const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const outcome = document.querySelector("#results");
const buttonDiv = document.querySelector("#buttonDiv");
const startButton = document.querySelector('#startGame');
const cScoreNumber = document.querySelector("#cScoreNumber");
const hScoreNumber = document.querySelector("#hScoreNumber");
const gameElements = document.querySelector(`#game`);

let cScore=0;
let hScore = 0;

startButton.addEventListener('click',playGame);


function getCChoice() {
    let cChoice = (Math.random()*3);
    cChoice = Math.floor(cChoice);
    if (cChoice == 0) {
        return "Rock";
    } else if (cChoice == 1) {
        return "Paper";
    } else {return "Scissors"};
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

function winnerCheck (humanScore, computerScore) {
    let mankind = humanScore;
    let robotkind = computerScore;
    if (mankind === 5 && robotkind === 5){
        let finalMessage = `A draw! The bloodshed will continue for many moons yet to come!`
        endGame(finalMessage);
    } else if (mankind === 5) {
        let finalMessage = 'You win! The machines are beaten back for one more day!';
        endGame(finalMessage);
    } else if (robotkind ===5){
        let finalMessage = `You lose! The machines will crush humanity and it is all your fault.`
        endGame(finalMessage);
    }
    return;
}
function endGame(lastMessage) {
    alert(lastMessage);
    startButton.textContent = `Play again?`
    startButton.addEventListener('click',playGame)
    buttonDiv.style.display = "none";
    console.log('the game has ended');
}

function updateScore (){
    cScoreNumber.textContent = cScore;
    hScoreNumber.textContent = hScore;
};
function buttonChoice(choice) {
    let resultMessage = "";
    let cSelection = getCChoice();
    let hSelection = '';
    switch (choice.id){
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
    let result = playRound(hSelection, cSelection);
    switch(result){
        case 'win':
            hScore++;
            resultMessage = `You win! ${hSelection} beats ${cSelection}.`;
            break;
        case 'draw':
            hScore++;
            cScore++;
            resultMessage = `You drew!`;
            break;
        case `lose`:
            cScore++;
            resultMessage = `You lose! ${hSelection} is beaten by ${cSelection}.`
            break;
    }
    updateScore();
    outcome.textContent = resultMessage;
    winnerCheck(hScore,cScore);
}

buttonDiv.addEventListener('click', (e) => {
    let button = e.target;
    buttonChoice(button);
});

function playGame() {
    startButton.removeEventListener('click',playGame)
    buttonDiv.style.display = 'block';
    startButton.textContent = `Game in progress`;
    outcome.textContent = '';
    hScore = 0;
    cScore = 0;
    updateScore();
}