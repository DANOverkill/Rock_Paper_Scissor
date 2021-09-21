function round() {

    let userInput = prompt('Choose: Rock Paper or Scissors');
    let userChoice = userInput.toLowerCase();
    let compChoice = rdmValue();
    
    function rdmValue() {
        let cmpSelection = Math.random();
        
        if (cmpSelection < 0.33) {
            return 'rock';
            } else if (cmpSelection >= 0.33 && cmpSelection <= 0.66) {
            return 'paper';
            } else {
            return 'scissors';
        }
    }
    
    function compare(choice1, choice2) {
    
        if (choice1 === choice2) {
        console.log('This round is A TIE!');
        return 0;
        } else if (choice1 === 'rock' && choice2 === 'paper') {
        console.log('Paper beats Rock, YOU LOOSE this round!');
        return 1;
        } else if (choice1 === 'rock' && choice2 === 'scissors') {
        console.log('Rock beats Scissors, YOU WIN this round!');
        return 2;
        } else if (choice1 === 'paper' && choice2 === 'rock') {
        console.log('Paper beats Rock, YOU WIN this round!');
        return 2;
        } else if (choice1 === 'paper' && choice2 === 'scissors') {
        console.log('Scissors beats Paper, YOU LOOSE this round!');
        return 1;
        } else if (choice1 === 'scissors' && choice2 === 'rock') {
        console.log('Rock beats Scissors, YOU LOOSE this round!');
        return 1;
        } else if (choice1 === 'scissors' && choice2 === 'paper') {
        console.log('Scissors beats Paper, YOU WIN this round!');
        return 2;
        }
    }
    return compare(userChoice, compChoice);
    
    }
    
    
    function match(){
    
        let playerPoints = 0;
        let comptPoints = 0;

        while (playerPoints < 5 && comptPoints < 5) {
            let runRound = round();
            if (runRound === 0) {
            continue;
            } else if (runRound === 1) {
            comptPoints++;
            } else if (runRound === 2) {
            playerPoints++;
            }
            console.log("player: " + playerPoints);
            console.log("computer: " + comptPoints);
        }
        if (playerPoints === 5) {
        console.log("you won the match");
        } else if (comptPoints === 5) {
        console.log("you lost the match");
        }
    };    
