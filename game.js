// Initialize game board as a 6x6 grid filled with '*'
// Initialize player A score to 0
// Initialize player B score to 0

// While (True):
//     If player A score is equal to or greater than 5:
//         Display "Player A wins!"
//         Break the loop
//     Else if player B score is equal to or greater than 5:
//         Display "Player B wins!"
//         Break the loop


const gameBoard = Array.from({ length: 6 }, () => Array(6).fill('*'));
let playerAScore = 0;
let playerBScore = 0;

function rollDie() {
  return Math.floor(Math.random() * 6);
}

while (true) {
    // Check if player A or B wins
    if (playerAScore >= 5) {
        console.log("Player A wins!");
        break;
    } else if (playerBScore >= 5) {
        console.log("Player B wins!");
        break;
    }

}
