/******************************************
**************** FUNCTIONS ****************
**************** Utilities ****************
******************************************/

/* Returns a random integer between min (inclusive) and max (inclusive). */
/* SOURCE: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Capitalize first letter of a string. */
function capFirstLetter(string) {
    // To lower case to circumvent ill use of capital letters.
    let lowerCaseString = string.toLowerCase();
    // Extract first letter of string and convert to upper case.
    let firstLetter = lowerCaseString.slice(0, 1);
    let capFirst = firstLetter.toUpperCase();
    // Extract what comes after the first letter in the string.
    let remains = lowerCaseString.slice(1);
    // Fuses the two extractions together.
    return capFirst.concat('', remains);
}

/******************************************
**************** FUNCTIONS ****************
************ Game components **************
******************************************/
/*  Game: */

/* Get players name with a capital initial from a prompt. Input is case-insensitive. */
function presentYourself (playerName) {
    // Gives playerName a string from a prompt.
    playerName = prompt('What\'s your name?', '');
    // Capitalize first letter of playerName if it is a string.
    // Player will be know as 'Anonymous' if the string is empty.
    // This function is defined in line 15 - 25.
    if (typeof playerName !== 'string') {
        return playerName;
    } else if (playerName === '') {
        playerName = 'Anonymous';
    } else {
        playerName = capFirstLetter(playerName); 
    }
    return playerName;
}

//     Round

/* Player selects Rock Paper or Scissors. Input is case-insensitive. */
function playerPlay() {
    let playerSelection = capFirstLetter(String(this.id));

    // console.log(typeof button.id);
    // console.log(playerSelection);

    playRound(playerSelection);

    roundCount++;
    console.log(roundCount);

    if (roundCount > desiredNumRounds) {
        gameOver(roundCount);
        
        /* When game over:
         - Change class of controller__button after desiredNumRounds have been played
         - Makes game stop after desiredNumRounds have been played */
        controllerButtons.forEach((button => {
            button.classList.remove('controller__button--enabled');
            button.classList.add('controller__button--disabled');
            
            button.removeEventListener('click', playerPlay);
        }));
    }
}

/* Returns a randomly generated computerSelection: Rock Paper Scissor. */
function computerPlay(computerSelection) {
    // Generate random integer.
    // GetRandomInt() is defined on line 8 - 12.
    let randomValue = getRandomInt(1, 3);

    // Assign numerical values to rock paper scissors.
    const rock = 1;
    const paper = 2;
    const scissors = 3;

    // Transform randomValue to rock paper scissors.
    if (randomValue === rock) {
        computerSelection = 'Rock';
    } else if (randomValue === paper) {
        computerSelection = 'Paper';
    } else if (randomValue === scissors) {
        computerSelection = 'Scissors';
    } else {
        console.log('Computer didn\'t choose');
    }
    return computerSelection;
}

// Determine winner of a round.
// Increment roundCount, and winners score.
function judgeRound(playerSelection, computerSelection) {
    let roundWinner;

    //What beats what
    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        roundWinner = playerName;
        ++playerScore;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        roundWinner = playerName;
        ++playerScore;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        roundWinner = playerName;
        ++playerScore;
    } else {
        roundWinner = 'Computer';
        ++computerScore;
    }
    return roundWinner;
}

function playRound(playerSelection) {
// Computer selects rock, paper, or scissor randomly
    // computerPlay() defined at line XX - XX.
    computerSelection = computerPlay();
    // Decides who won the round.
    roundWinner = judgeRound(playerSelection, computerSelection);

    // Display:
    // Current round count
    roundNumberPara.textContent = `ROUND: ${Number(roundCount + 1)}`;
        
    // Player choice
    playerSelectionPara.textContent = `Player chooses: ${playerSelection}`;
    // Computer choice
    computerSelectionPara.textContent = `Computer chooses: ${computerSelection}`;
        
    // Who wins

    if (roundWinner === 'tie') {
        roundWinnerPara.textContent = `It's a tie!`;
    } else if (roundWinner === playerName) {
        roundWinnerPara.textContent = `Player wins!\n${playerSelection} beats ${computerSelection}`;
    } else {
        roundWinnerPara.textContent = `Computer wins!\n${computerSelection} beats ${playerSelection}`;
    }

    // Display:
    // Player score
    playerScorePara.textContent = `Player score: ${playerScore}`;
    // Computer score
    computerScorePara.textContent = `Computer score: ${computerScore}`;
}

function gameOver(roundCount) {
    if (playerScore > computerScore) {
        gameWinner = 'Player';
        scoreBoardPlaceholderDiv.classList.toggle('player-win');
    } else if (computerScore > playerScore) {
        gameWinner = 'Computer';
        scoreBoardPlaceholderDiv.classList.toggle('player-lose');
    } else {
        gameWinner = 'It\'s a tie! No one';
        scoreBoardPlaceholderDiv.classList.toggle('tie');
    }
        
    gameOverPara.textContent = `GAME OVER`;
    gameWinnerPara.textContent = `${gameWinner} WON`;
}

function startRound() {
    let playerSelection = capFirstLetter(String(button.id));

    playRound(playerSelection);

    roundCount++;
    console.log(roundCount);

    if (roundCount > desiredNumRounds) {
    gameOver(roundCount);
    }
    return playerSelection;
}


/******************************************
******************* GAME ******************
*************** Game Rules ****************
******************************************/

//  Game:
let playerScore = 0;
    computerScore = 0;
let desiredNumRounds = 5 - 1; // Minus 1 to offset roundCount starting at 0.
let roundCount = 0;

let playerName = 'Player';

/******************************************
******************* GAME ******************
***************** Game UI *****************
******************************************/

/*             Restart button            */
const restartButton = document.querySelector('.restart--button');
restartButton.addEventListener('click', () => {
    window.location.reload();
});

/*****************************************************
***************** CONTROLLER BUTTONS *****************
*****************************************************/

const controllerButtons = document.querySelectorAll('.controller__button--enabled');
// const disabledControllerButtons = document.querySelectorAll('.controller__button--disabled');


/*          Controller buttons Click event           *
* Removes eventlistener when:                        *
* - desiredNumRounds have been played               */
controllerButtons.forEach((button => {
    button.addEventListener('click', playerPlay)
}));


/*   Elements to be used in functions   */
// In .top-bar //
const roundCounterDiv = document.querySelector('.round-counter');

// Create and append elements with no text content
const roundNumberPara = document.createElement('p');
roundCounterDiv.appendChild(roundNumberPara);


// In .score-board--placeholder //
const scoreBoardPlaceholderDiv = document.querySelector('.score-board--placeholder');

const scoreBoardDiv = document.querySelector('.score-board');

// Create and append elements with no text content
const playerScorePara = document.createElement('p');
scoreBoardDiv.appendChild(playerScorePara);
const computerScorePara = document.createElement('p');
scoreBoardDiv.appendChild(computerScorePara);

// In .round-result //
const roundResultDiv = document.querySelector('.round-result');

// Create and append elements with no text content
const playerSelectionPara = document.createElement('p');
roundResultDiv.appendChild(playerSelectionPara);
const computerSelectionPara = document.createElement('p');
roundResultDiv.appendChild(computerSelectionPara);
const roundWinnerPara = document.createElement('p');
roundResultDiv.appendChild(roundWinnerPara);

// In .set-result //
const setResultDiv = document.querySelector('.set-result');
// Create and append elements with no text content
const gameOverPara = document.createElement('p');
setResultDiv.appendChild(gameOverPara);
const gameWinnerPara = document.createElement('p');
setResultDiv.appendChild(gameWinnerPara);

let gameWinner = '';