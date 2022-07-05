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
function playerPlay (playerSelection) {
    // Gives playerSelection a string from a prompt.
    // roundCount + 1 as roundCount starts at zero, to make more readable.
    
    // playerSelection = prompt(`Round ${Number(roundCount + 1)} begins.\nPlease choose Rock, Paper, or Scissors`, ``);

    // Capitalize first letter of playerSelection if it is a string.
    // This function is defined in line 15 - 25.
    // Returns playerSelection as null if it's not a string.

    // if (typeof playerSelection !== 'string') {
    //     return playerSelection;
    // } else {
    //     playerSelection = capFirstLetter(playerSelection);
    // }

    // Return playerSelection if player typed a legal choice in above prompt.
    // If playerSelection is not Rock Paper or Scissors playerSelection return as undefined.
    if (playerSelection === 'rock') {
        return playerSelection;
    } else if (playerSelection === 'paper') {
        return playerSelection;
    } else if (playerSelection === 'scissors') {
        return playerSelection;
    } else if (playerSelection === 'scissor') {
        alert(`I\'m sorry to be the one to tell you Player, it\'s spelled "scissors" with an "s" at the end.\n\nPlease try again!`);
    } else {
        
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

function playRound() {
    console.log(`ROUND ${Number(roundCount + 1)}:`);
    // Player selection
    // playerPlay() is defined at line XX - XX.
    // playerSelection = playerPlay();
    

    if (typeof playerSelection !== 'string') {
        alert(`You didn\'t choose a legal value, Player!\n\nPlease try again!`);
        playerSelection = playerPlay();
    } else {
        // Computer selects rock, paper, or scissor randomly
        // computerPlay() defined at line XX - XX.
        computerSelection = computerPlay();
        // Decides who won the round.
        roundWinner = judgeRound(playerSelection, computerSelection);
        
    }
    console.log(`Player chooses: ${playerSelection}`);
    console.log(`Computer chooses: ${computerSelection}`);
    if (roundWinner === 'tie') {
        console.log(`It's a tie!`);
    } else if (roundWinner === playerName) {
        console.log(`Player wins!\n${playerSelection} beats ${computerSelection}`);
    } else {
        console.log(`Computer wins!\n${computerSelection} beats ${playerSelection}`);
    }
}


/******************************************
******************* GAME ******************
************* Game execution **************
******************************************/

/*  Take down while working on UI

 alert(`Press F12 to open browser console`);
*/

//  Game:
let playerScore = 0,
    computerScore = 0;
let desiredNumRounds = 5;
let roundCount = 0;

let playerName = 'Player';
/*
// Asks for players name and capitalizes the initial.
// Function defined at line 33 - 41.
playerName = presentYourself();
// Re-calls presentYourself() is player closes prompt window.
if (typeof playerName !== 'string') {
    alert('If you wish to be anonymous then state so.\nBut you must write something to continue.\n\nTry again!');
    playerName = presentYourself();
} else {
    console.log(`Player name: Player`);
}

// Play Rock Paper Scissors for desiredNumRounds
for (roundCount; roundCount < desiredNumRounds; roundCount++) {
    // singleRound() defined at line XX - XX
    playRound ();

    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
}

// Declare highest score
let setWinner;
(playerScore > computerScore) ? setWinner = playerName : setWinner = 'Computer';
alert(`THE WINNER IS ${setWinner}!\n\nSee details in console`);

*/

/******************************************
******************* GAME ******************
***************** Game UI *****************
******************************************/

/*           Controller buttons          */
const controllerButtons = document.querySelectorAll('.controller__button');
controllerButtons.forEach((button => {
    button.addEventListener('click', () => {
        let playerSelection = capFirstLetter(String(button.id));

            // console.log(typeof button.id);
            // console.log(playerSelection);
        
        // Computer selects rock, paper, or scissor randomly
        // computerPlay() defined at line XX - XX.
        computerSelection = computerPlay();
        // Decides who won the round.
        roundWinner = judgeRound(playerSelection, computerSelection);

        // Display:
            // Round
            // Player choice
            // Computer choice
            
            // Who wins

        console.log(`ROUND ${Number(roundCount + 1)}:`);
        console.log(`Player chooses: ${playerSelection}`);
        console.log(`Computer chooses: ${computerSelection}`);

        if (roundWinner === 'tie') {
            console.log(`It's a tie!`);
        } else if (roundWinner === playerName) {
            console.log(`Player wins!\n${playerSelection} beats ${computerSelection}`);
        } else {
            console.log(`Computer wins!\n${computerSelection} beats ${playerSelection}`);
        }

        // Display:
            // Player score
            // Computer score
        console.log(`Player score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
    });
}));