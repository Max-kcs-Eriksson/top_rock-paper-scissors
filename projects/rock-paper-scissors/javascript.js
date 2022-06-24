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

/* Get players name with a capital initial from a prompt*/
function presentYourself (playerName) {
    // Gives playerName a string from a prompt.
    playerName = prompt('What\'s your name?', '');
    // Capitalize first letter of playerName if it is a string.
    // Player will be know as 'Anonymous' if the string is empty.
    // This function is defined in line 15 - 25.
    if (playerName === '') {
        playerName = 'Anonymous';
    } else {
        playerName = capFirstLetter(playerName); 
    }
    return playerName;
}

//     Round

// Player selection
function playerPlay (playerSelection) {
    // Gives playerSelection a string from a prompt.
    playerSelection = prompt(`Hi ${playerName}!\nPlease choose Rock, Paper, or Scissors`, ``);
    // Capitalize first letter of playerSelection if it is a string.
    // This function is defined in line 15 - 25.
    // Returns playerSelection as null if it's not a string.
    if (typeof playerSelection === 'string') {
        playerSelection = capFirstLetter(playerSelection);
    } else {
        return playerSelection;
    }
    // Checks if player typed a legal choice in above prompt.
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
        alert(`You didn\'t choose a legal value, ${playerName}!\n\nPlease try again!`);
    }
}

//             User writes their choice in a prompt
//                 case-insensitive
//                     convert player input string to lower case

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

/* Determine and declare winner of current round. */
/* Compare playerSelection and computerSelection. */
/* Increment roundCount, and winners score. */
function singleRound (playerSelection, computerSelection) {
    let roundWinner;

    if (playerSelection > computerSelection) {
        roundWinner = `Winner of this round is: ${playerName}!\n${playerSelection} beats ${computerSelection}`;
        ++playerScore;
        ++roundCount;
    } else if (computerSelection > playerSelection) {
        roundWinner = `Winner of this round is: Computer!\n${computerSelection} beats ${playerSelection}`;
        ++computerScore;
        ++roundCount;
    } else {
        roundWinner = `It's a tie!`;
        ++roundCount;
    }
    console.log(roundWinner);
}

//             ▪ keep score



 /******************************************
 ******************* GAME ******************
 ************* Game execution **************
 ******************************************/

//  Game:
let playerScore = 0,
computerScore = 0;
let roundCount = 1;

// Asks for players name and capitalizes the initial.
// Function defined at line 33 - 41.
playerName = presentYourself();
// UNCOMMENT ABOVE LINE AND DELETE LINES UNTIL -
/**** REMOVE LATER - THIS IN ONLY FOR CONVENIENT TESTING *****/
// const playerName = 'pLaYeR';
console.log(`Player name: ${playerName}`);
// HERE, AFTER ALL TESTING IS DONE!

    // Round 

        // Player selection
        // playerPlay() is defined at line 47 - 65.
        /**** REMOVE LATER - THIS IN ONLY FOR CONVENIENT TESTING *****/
        let playerSelection = 'roCK';
        playerSelection = playerPlay();
        console.log(`${playerName} chooses: ${playerSelection}`);
            // ▪ User writes their choice in a prompt
            //     • case-insensitive
            //         ◦ Capitalize first letter of playerSelection string


        /* Computer selects rock, paper, or scissor randomly *
        ****** computerPlay() defined at line 72 - 93 *******/
        computerSelection = computerPlay();
        console.log(`Computer chooses: ${computerSelection}`);

        /*** Determine and declare winner of current round ***
        ******* singleRound() defined at line 98 - 114 *******/
        singleRound (playerSelection, computerSelection);

        console.log(`${playerName} score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);