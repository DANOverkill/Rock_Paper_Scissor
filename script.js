//DOM CASH
const buttons = document.querySelector(".buttons")
const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");
const roundLable = document.querySelector(".roundResults");
const playerScore = document.querySelector(".pScore");
const computerScore = document.querySelector(".cScore");

//Global variables
let playerPoints = 0;
let comptPoints = 0;

//UI
rockButton.addEventListener('click', function(){
    playerChoice = 'rock';
    round(playerChoice, rdmValue());
    playerScore.textContent = `Player: ${playerPoints}`;
    computerScore.textContent = `Computer: ${comptPoints}`;
    match();
})
paperButton.addEventListener('click', function(){
    playerChoice = 'paper';
    round(playerChoice, rdmValue());
    playerScore.textContent = `Player: ${playerPoints}`;
    computerScore.textContent = `Computer: ${comptPoints}`;
    match();
})
scissorsButton.addEventListener('click', function(){
    playerChoice = 'scissors';
    round(playerChoice, rdmValue());
    playerScore.textContent = `Player: ${playerPoints}`;
    computerScore.textContent = `Computer: ${comptPoints}`;
    match();
})

let resetGameButton = function() {
    rockButton.remove();
    paperButton.remove();
    scissorsButton.remove();
    let resetButton = document.createElement("BUTTON");
    resetButton.classList.add('resetButton');
    resetButton.textContent = "OK";
    buttons.appendChild(resetButton);
    resetButton.addEventListener('click', function() {
        resetGame(); 
    })
}

let resetGame = function() {
    playerPoints = 0;
    comptPoints = 0;
    playerScore.textContent = `Player: ${playerPoints}`;
    computerScore.textContent = `Computer: ${comptPoints}`;
    roundLable.textContent = 'Choose: Rock, Paper or Scissors.';  
    buttons.appendChild(rockButton);
    buttons.appendChild(paperButton);
    buttons.appendChild(scissorsButton);
    document.querySelector('.resetButton').remove(); 
}

//GAME LOGIC
function rdmValue() {
    let cmpSelection = Math.random();
    
    if (cmpSelection < 0.33) {
        return 'rock';
        } else if (cmpSelection >= 0.33 && cmpSelection <= 0.66) {
        return 'paper';
        } else {
        return 'scissors';
    }
};

let round = function(choice1, choice2) {

    if (choice1 === choice2) {
    roundLable.textContent = 'This round is A TIE!';
    return 0;
    } else if (choice1 === 'rock' && choice2 === 'paper') {
    roundLable.textContent = 'Rock gets beaten by Paper. YOU LOSE this round!';
    1;
    comptPoints++
    } else if (choice1 === 'rock' && choice2 === 'scissors') {
    roundLable.textContent = 'Rock beats Scissors, YOU WIN this round!';
    2;
    playerPoints++;
    } else if (choice1 === 'paper' && choice2 === 'rock') {
    roundLable.textContent = 'Paper beats Rock, YOU WIN this round!';
    2;
    playerPoints++
    } else if (choice1 === 'paper' && choice2 === 'scissors') {
    roundLable.textContent = 'Paper gets beaten by Scissors, YOU LOSE this round!';
    1;
    comptPoints++
    } else if (choice1 === 'scissors' && choice2 === 'rock') {
    roundLable.textContent = 'Scissors gets beaten by Rocks, YOU LOSE this round!';
    1;
    comptPoints++
    } else if (choice1 === 'scissors' && choice2 === 'paper') {
    roundLable.textContent = 'Scissors beats Paper, YOU WIN this round!';
    2;
    playerPoints++
    }
};
    
function match(){
    if (playerPoints < 5 && comptPoints < 5) {
        return;
    }else if (playerPoints === 5) {
        roundLable.textContent = 'CONGRATULATIONS, you won! Play again?!';
        resetGameButton();
    } else if (comptPoints === 5) {
        roundLable.textContent = 'SORRY, you lost! Try again?!';
        resetGameButton();
    }
}; 
