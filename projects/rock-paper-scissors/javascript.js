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
//  Game:
//     • Round 
//         ◦ Player selection
//             ▪ User writes their choice in a prompt
//                 • case-insensitive
//                     ◦ convert player input string to lower case

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

/* Determine and declare winner of current round */
/* Compare playerSelection and computerSelection */
/* Increment roundCount, and winners score */
function singleRound (playerSelection, computerSelection) {
    let roundWinner;

    if (playerSelection > computerSelection) {
        roundWinner = `Winner of this round is: ${playerName}!`;
        ++playerScore;
        ++roundCount;
    } else if (computerSelection > playerSelection) {
        roundWinner = `Winner of this round is: Computer!`;
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

    //     • Round 
    //         ◦ Player selection
    /**** REMOVE LATER - THIS IN ONLY FOR CONVENIENT TESTING *****/
    /************* MAKE FUNCTION FOR PLAYER CHOICE ***************/
    let playerName = 'Player';
    let playerSelection = 'Rock';
    console.log(`Player chooses: ${playerSelection}`);
    //             ▪ User writes their choice in a prompt
    //                 • case-insensitive
    //                     ◦ convert player input string to lower case


    /* Computer selects rock, paper, or scissor randomly *
    ****** computerPlay() defined at line 39 - 60 *******/
    computerSelection = computerPlay();
    console.log(`Computer chooses: ${computerSelection}`);

    /*** Determine and declare winner of current round ***
    ******* roundWinner() defined at line 65 - 81 *******/
    singleRound (playerSelection, computerSelection);
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);