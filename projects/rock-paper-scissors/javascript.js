// FUNCTIONS

// Returns a random integer between min (inclusive) and max (inclusive).
// SOURCE: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Returns a randomly generated selection.
let computerSelection = '';
function computerPlay() {
    // Generate random integer.
    // GetRandomInt() is defined on line 5 - 9.
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
        alert('Computer didn\'t choose');
    }
    return computerSelection;
}

// Capitalize first letter of a string
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


// GAME EXECUTION

/**
 * Ask for players name
 */
const playerName = capFirstLetter( prompt('What\'s your name?', '') );

/**
 * Player select rock, paper, or scissors by writing in a prompt.
 * Input is case-insensitive through function defined on line 37 - 47.
 */
let playerSelection = capFirstLetter( prompt('Rock, Paper, or Scissors?', '') );
// Check if player wrote rock, paper, or scissor, and not something else.
if (playerSelection === 'Rock') {
    console.log(`${playerName} chose: ${playerSelection}`);
} else if (playerSelection === 'Paper') {
    console.log(`${playerName} chose: ${playerSelection}`);
} else if (playerSelection === 'Scissor') {
    console.log(`${playerName} chose: ${playerSelection}`);
} else {
    alert(`${playerName} didn\'t choose Rock, Paper, or Scissor!\n${playerSelection} is non of the above...`);
}

/**
 * Computer selection is generated randomly through function defined
 * on line 13 - 43.
*/
computerPlay();
console.log(`Computer chose: ${computerSelection}`);


// Round 1
// function playRound (playerSelection, computerSelection) {
//     (playerSelection > computerSelection) ? 
// }
//     Decide and declare winner
//         Compare playerSelection and computerSelection
//     keep score
// Round 2 - 4
// Round 5
//     Declare final Winner
//     Reset