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
const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]
let roundString = '';
let stringCh = 0;

let playerScore = 0; //implement scoring system
let compScore = 0;

const btn1 = document.querySelector('.buttons button:nth-child(1)')
btn1.addEventListener('click', () => playRound(btn1.innerText))
const btn2 = document.querySelector('.buttons button:nth-child(2)')
btn2.addEventListener('click', () => playRound(btn2.innerText))
const btn3 = document.querySelector('.buttons button:nth-child(3)')
btn3.addEventListener('click', () => playRound(btn3.innerText))
const btn4 = document.querySelector('.buttons button:nth-child(4)')
btn4.addEventListener('click', () => playRound(btn4.innerText))
const btn5 = document.querySelector('.buttons button:nth-child(5)')
btn5.addEventListener('click', () => playRound(btn5.innerText))

function getChoice(number) {
  return choices[number]
}

function playRound(playerChoice) {
	stringCh = 0;
	document.querySelector('h2').textContent = '';
	const Rules = {
	  Rock: ["Scissors", "Lizard"],
	  Paper: ["Rock", "Spock"],
	  Scissors: ["Paper", "Lizard"],
	  Lizard: ["Spock", "Paper"],
	  Spock: ["Rock", "Scissors"],
	};
	const compChoice = getChoice(Math.floor(Math.random() * choices.length));

	if (playerChoice === compChoice) {
		roundString = "It's a tie!";
	} else if (Rules[playerChoice].includes(compChoice)) {
		roundString = `You win! - ${getString(playerChoice, compChoice)}`;
		playerScore++;
	} else {
		roundString = `I win with a ${compChoice}! - ${getString(playerChoice, compChoice)}`;
		compScore++;
	}
	typeString();
}

function getString(playerChoice, compChoice) {
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

	for(string of strings){
		if (string.includes(playerChoice) && string.includes(compChoice)) {
			return string
		}
	}
}

function typeString() {
  if (stringCh < roundString.length) {
    document.querySelector('h2').textContent += roundString[stringCh];
    stringCh++;
    setTimeout(typeString, 50);
  }
}