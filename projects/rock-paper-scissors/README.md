# ROCK PAPER SCISSORS

## GAME MODES
In the declaration of playerPlay() there is an if statement that dictates when to call gameOver() and to remove event listeners for the controller buttons.
Adjacent to "if (condition)" are some lines containing variations of the condition.
### VARIATIONS
* Best of 5 rounds. A tie is possible
* Best of 5 rounds. If there is now winner yet (a tie) - play one more round.
* First to reach score of 5.

## HOW TO PLAY
### BUTTONS
By default al buttons except for "Play" are disabled.

Play:
* Changes replaces suffixes "--disabled" or "--off" to "--enabled" or "--on" on buttons, making them change appearance slightly.
* Adds event listeners to buttons making the user able to select rock, paper, or scissors
Controller buttons:
* "Rock", "Paper", and "Scissors".
* Lets player pick one and assign a corresponding value to playerSelection.
* Calls playRound() which in turn calls computerPlay() than judgeRound().
Restart:
* Reloads the entire page.