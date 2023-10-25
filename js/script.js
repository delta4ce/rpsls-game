        // Scissors cuts Paper
        // Paper covers Rock
        // Rock crushes Lizard
        // Lizard poisons Spock
        // Spock smashes Scissors
        // Scissors decapitates Lizard
        // Lizard eats Paper
        // Paper disproves Spock
        // Spock vaporizes Rock
        // And, as it always has, Rock crushes Scissors
const strings = [
	"Scissors cuts Paper",
	"Paper covers Rock",
	"Rock crushes Lizard",
	"Lizard poisons Spock",
	"Spock smashes Scissors",
	"Scissors decapitates Lizard",
	"Lizard eats Paper",
	"Paper disproves Spock",
	"Spock vaporizes Rock",
	"Rock crushes Scissors"
];
const Rules = {
  Rock: ["Scissors", "Lizard"],
  Paper: ["Rock", "Spock"],
  Scissors: ["Paper", "Lizard"],
  Lizard: ["Spock", "Paper"],
  Spock: ["Rock", "Scissors"],
};
const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]

let playerScore = 0;
let compScore = 0;

function getChoice(number) {
  return choices[number]
}

function playRound(playerChoice) {
	const compChoice = getChoice(Math.floor(Math.random() * choices.length));

	if (playerChoice === compChoice) {
		alert("It's a tie!")
	} else if (rules[playerChoice].includes(compChoice)) {
		alert(`You win! -`); //Add a string-picking function here later
		playerScore++;
	} else {
		alert(`I win! -`) //And here too
		compScore++;
	}


}