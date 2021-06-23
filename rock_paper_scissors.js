var wins = 0;
var losses = 0;
var ties = 0;
var choices = ['r', 'p', 's'];

function getRandomChoice() {
    // Get computer selection by using Math.random to get an index
    var index = Math.floor(Math.random() * 3);
    return choices[index];
  }

function rockPaperScissors() {
  // Show a prompt
  var enteredValue = prompt("Enter r, p, or s");

  if (!enteredValue) {
      alert("Please enter r, p, or s");
      return rockPaperScissors();
  }
  // Check user input is r, p, or s (case insensitive)
  enteredValue = enteredValue.toLowerCase();
  if (enteredValue !== 'r' && enteredValue !== 'p' && enteredValue !== 's') {
    alert("Please enter r, p, or s");
    return rockPaperScissors();
  }
  return enteredValue;
}

var playAgain = true;

while (playAgain) {
    var userChoice = rockPaperScissors();
    var computerChoice = getRandomChoice();

    // Loop until user doesn't want to play
    // Compare user input with computer to see who won
    // Update wins, losses, and ties
    if (userChoice === computerChoice) {
        ties++;
        alert("You tied");
    } else if ((userChoice === 'r' && computerChoice === 's') || 
            (userChoice === 's' && computerChoice === 'p') ||
            (userChoice === 'p' && computerChoice === 'r')) {
            wins++;
            alert("You won. The computer chose: " + computerChoice);
    } else {
        losses++;
        alert("You lost. The computer chose: " + computerChoice);
    }
    // Display the wins, losses, and ties
    alert("Total wins: " + wins + " Total losses: " + losses + " Total ties: " + ties);
    // Ask user if they want to play again, using confirm
    playAgain = confirm("Would you like to play again?");
}

