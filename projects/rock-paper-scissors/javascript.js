/*******************************************
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

/*******************************************
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
    playerSelection = prompt(`Hi ${playerName}!\nPlease choose Rock, Paper, or Scissors`, ``);
    // Capitalize first letter of playerSelection if it is a string.
    // This function is defined in line 15 - 25.
    // Returns playerSelection as null if it's not a string.
    if (typeof playerSelection !== 'string') {
        return playerSelection;
    } else {
        playerSelection = capFirstLetter(playerSelection);
    }
    // Return playerSelection if player typed a legal choice in above prompt.
    // If playerSelection is not Rock Paper or Scissors playerSelection return as undefined.
    if (playerSelection === 'Rock') {
        return playerSelection;
    } else if (playerSelection === 'Paper') {
        return playerSelection;
    } else if (playerSelection === 'Scissors') {
        return playerSelection;
    } else if (playerSelection === 'Scissor') {
        alert(`I\'m sorry to be the one to tell you ${playerName}, it\'s spelled "scissors" with an "s" at the end.\n\nPlease try again!`);
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
    const rock = 'Rock' > 'Scissors';
    const paper = 'Paper' > 'Rock';
    const scissors = 'Scissors' > 'Paper';

    // if (playerSelection === 'Rock' && computerSelection === 'Scissors') {

    // } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {

    // } else (playerSelection === 'Scissors' && computerSelection === 'Paper') {

    // }

    if (playerSelection > computerSelection) {
        roundWinner = `Winner of this round is: ${playerName}!\n${playerSelection} beats ${computerSelection}`;
        ++playerScore;
    } else if (computerSelection > playerSelection) {
        roundWinner = `Winner of this round is: Computer!\n${computerSelection} beats ${playerSelection}`;
        ++computerScore;
    } else {
        roundWinner = `It's a tie!`;
    }
    return roundWinner;
}

function singleRound () {
    // Print roundCount + 1 as roundCount starts at zero, to make more readable.
    console.log(`Round ${Number(roundCount + 1)} begins`);
    
    // Player selection
    // playerPlay() is defined at line XX - XX.
    // playerSelection = playerPlay();
    

    if (typeof playerSelection !== 'string') {
        alert(`You didn\'t choose a legal value, ${playerName}!\n\nPlease try again!`);
        playerSelection = playerPlay();
    } else {
        // Computer selects rock, paper, or scissor randomly
        // computerPlay() defined at line XX - XX.
        computerSelection = computerPlay();
        // Decides who won the round.
        roundWinner = judgeRound(playerSelection, computerSelection);
        
    }
    console.log(`${playerName} chooses: ${playerSelection}`);
    console.log(`Computer chooses: ${computerSelection}`);
    console.log(roundWinner);
}

//             ▪ keep score



 /******************************************
 ******************* GAME ******************
 ************* Game execution **************
 ******************************************/

/**!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!**
 **           FOR TESTING ONLY            */
let playerName = 'mAx';   // presentYourself()
let playerSelection = 'paPER';    // inside singleRound()
playerSelection = capFirstLetter(playerSelection);
/**!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!**
 **!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

//  Game:
let playerScore = 0,
    computerScore = 0;
let desiredNumRounds = 5;
let roundCount = 0;

// Asks for players name and capitalizes the initial.
// Function defined at line 33 - 41.
// playerName = presentYourself();
// Re-calls presentYourself() is player closes prompt window.
if (typeof playerName !== 'string') {
    alert('If you wish to be anonymous then state so.\nBut you must write something to continue.\n\nTry again!');
    playerName = presentYourself();
} else {
    console.log(`Player name: ${playerName}`);

    /****************************************/
    /**FUNCTION TO PLAY X AMOUNT OF ROUNDS***/
    /****************************************/
}


/**!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!**
 * IF USING for LOOP TO CALL ON FUNCTION TO PLAY A SINGLE ROUND: *
 ******* remove ++roundCount from singleRound() function. ********
 **!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!**/


    // Round
    /**** Play Rock Paper Scissors for desiredNumRounds ***/
for (roundCount; roundCount < desiredNumRounds; roundCount++) {
    /****** singleRound() defined at line XX - XX *******/
    singleRound ();

    console.log(`${playerName} score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
}



/*********************************************************************
 * *******************************************************************
 * KNOW ISSUES:
 * *comparison of playerSelection and computerSelection is not working
 * as intended! - It is doing an alphabetical comparison!
 * *******************************************************************
**********************************************************************/