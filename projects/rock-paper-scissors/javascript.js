// Select rock paper scissor
//     Player selection
//         User writes their choice in a prompt
//             case-insensitive
//             convert player input string to lower case
//     Computer select
//         randomly generated selection
function computerPlay() {
    // generate random integer
    // assign numerical values to rock paper scissor
}

// Round 1
//     declare winner
//         Compare playerSelection and computerSelection
//     keep score
// Round 2 - 4
// Round 5
//     Declare final Winner
//     Reset


// FUNCTIONS

// Returns a random integer between min (inclusive) and max (inclusive).
// SOURCE: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}