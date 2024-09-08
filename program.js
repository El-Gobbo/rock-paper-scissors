const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const outcome = document.querySelector("#results");
const buttonDiv = document.querySelector("#buttonDiv");
const startButton = document.querySelector('#startGame');
const cScoreNumber = document.querySelector("#cScoreNumber");
const hScoreNumber = document.querySelector("#hScoreNumber");
const gameElements = document.querySelector(`#game`);

startButton.addEventListener('click',playGame, {once: true});

buttonDiv.addEventListener('click', (e) => {
    let cSelection = getCChoice();
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
    function updateScore (){
        cScoreNumber.textContent = cScore;
        hScoreNumber.textContent = hScore;
    }
    gameElements.style.display = 'block';
    startButton.textContent = `Game in progress`;
    let hScore = 0;
    let cScore = 0;
    let resultMessage = "";
    let cSelection = '';
    let hSelection = '';
    updateScore();
    buttonDiv.addEventListener('click', (e) => {
        cSelection = getCChoice();
        hSelection = '';
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
        updateScore();
        outcome.textContent = resultMessage;
        
    });
    
}