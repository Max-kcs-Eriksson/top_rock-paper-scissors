// FUNCTIONS

// Returns a random integer between min (inclusive) and max (inclusive).
// SOURCE: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Returns a randomly generated selection.
let computerSelection;
function computerPlay() {
    // Generate random integer.
    // GetRandomInt() is defined on line 5 - 9.
    let randomValue = getRandomInt(1, 3);

    // Assign numerical values to rock paper scissors.
    let rock = 1;
    let paper = 2;
    let scissors = 3;

    // Transform randomValue to rock paper scissors.
    if (randomValue === rock) {
        computerSelection = 'Computer chose: rock';
    } else if (randomValue === paper) {
        computerSelection = 'Computer chose: paper';
    } else if (randomValue === scissors) {
        computerSelection = 'Computer chose: scissors';
    } else {
        alert('Computer didn\'t choose');
    }
    return computerSelection;
}


// GAME EXECUTION

// Select rock paper scissor
//     Player selection
let playerSelection;
//         User writes their choice in a prompt
//             case-insensitive
//             convert player input string to lower case
//     Computer selection
computerPlay();
console.log(computerSelection);
// Round 1
//     declare winner
//         Compare playerSelection and computerSelection
//     keep score
// Round 2 - 4
// Round 5
//     Declare final Winner
//     Reset