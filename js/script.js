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

const rk ='Rock';
const pp = 'Paper';
const sc = 'Scissors';
const lz = 'Lizard';
const sp = 'Spock'; 
const options = [rk, pp, sc, lz, sp];

let compScore = 0;
let playerScore = 0;

function playRound(){
	let input = prompt(`Rock Paper Scissors Lizard Spock`);
	let compChoice = Math.floor(Math.random() * 5);
	let comp = options[compChoice];

	if (comp == input){
		console.log(`${comp} : ${input}`);
	}

	switch(input){
		case rk:
			switch(comp){
			case lz:
				console.log(`Rock crushes Lizard`);
				playerScore++;
			break;
			case sc:
				console.log(`Rock crushes Scissors`);
				playerScore++;
			break;
			case pp:
				console.log(`Paper covers Rock`);
				compScore++;
			break;
			case sp:
				console.log(`Spock vaporizes Rock`);
				compScore++;
			break;
			}
		break;
		case pp:
			switch(comp){ //rk sc sp lz
			case rk:
				console.log(`Paper covers Rock`);
				playerScore++;
			break;
			case sc:
				console.log(`Scissors cuts Paper`);
				compScore++;
			break;
			case sp:
				console.log(`Paper disproves Spock`);
				playerScore++;
			break;
			case lz:
				console.log(`Lizard eats Paper`);
				compScore++;
			break;
			}
		break;
		case sc:
			switch(comp){
			case rk:
				console.log(`Rock crushes Scissors`);
				compScore++;
			break;
			case pp:
				console.log(`Scissors cuts Paper`);
				playerScore++;
			break;
			case lz:
				console.log(`Scissors decapitates Lizard`);
				playerScore++;
			break;
			case sp:
				console.log(`Spock smashes Scissors`);
				compScore++;
			break;
			}
		break;
		case lz:
			switch(comp){
			case rk:
				console.log(`Rock crushes Lizard`);
				compScore++;
			break;
			case pp:
				console.log(`Lizard eats Paper`);
				playerScore++;
			break;
			case sc:
				console.log(`Scissors decapitates Lizard`);
				compScore++;
			break;
			case sp:
				console.log(`Lizard poisons Spock`);
				playerScore++;
			break;
			}
		break;
		case sp:
			switch(comp){
			case rk:
				console.log(`Spock vaporizes Rock`);
				playerScore++;
			break;
			case pp:
				console.log(`Paper disproves Spock`);
				compScore++;
			break;
			case sc:
				console.log(`Spock smashes Scissors`);
				playerScore++;
			break;
			case lz:
				console.log(`Lizard poisons Spock`)
				compScore++;
			break;
			}
		}
}


while(compScore < 3 && playerScore < 3){
	playRound();
	console.log(`Score is: ${compScore} - ${playerScore}`)
}
if (compScore === 3) {console.log(`YOU DIED`);}
if (playerScore === 3) {console.log(`YOU WIN`);}






























//old version of code
// let choice = Math.floor(Math.random() * 3) + 1;
// let compScore = 0;
// let playerScore = 0;

// function game() {
// 	while(compScore < 3 && playerScore < 3){
// 		play();
// 		if (compScore == 3) {console.log('YOU DIED')}
// 		if (playerScore == 3) {console.log('YOU WIN')}
// 	}
// }

// function getCompChoice() {
// 	let shape;

// 	switch(choice) {
// 	case 1: shape = 'rock';
// 	break;
// 	case 2: shape = 'paper';
// 	break;
// 	case 3: shape = 'scissors';
// 	break;
// 	}

// 	return shape;
// }

// function play() {
// 	let comp = getCompChoice();
// 	let player = prompt('Your choice:').toLowerCase();

// 	if(player == comp) {
// 		console.log(`Looks like a draw. The score is ${compScore} - ${playerScore}`)
// 	} else if (player == 'rock' && comp == 'paper') {
// 		compScore++;
// 		console.log(`${comp} beats ${player} - I win! The score is: ${compScore} - ${playerScore}`)
// 	}
// 	  else if (player == 'paper' && comp == 'scissors') {
// 	  	compScore++;
// 	  	console.log(`${comp} beats ${player} - I win! The score is: ${compScore} - ${playerScore}`)
// 	  }
// 	  else if (player == 'scissors' && comp == 'rock') {
// 	  	compScore++;
// 	  	console.log(`${comp} beats ${player} - I win! The score is: ${compScore} - ${playerScore}`)
// 	  }
// 	  else if (comp == 'rock' && player == 'paper') {
// 	  	playerScore++;
// 	  	console.log(`${player} beats ${comp} - You win! The score is: ${compScore} - ${playerScore}`)
// 	  }
// 	  else if (comp == 'paper' && player == 'scissors') {
// 	  	playerScore++;
// 	  	console.log(`${player} beats ${comp} - You win! The score is: ${compScore} - ${playerScore}`)
// 	  }
// 	  else if (comp == 'scissors' && player == 'rock') {
// 	  	playerScore++;
// 	  	console.log(`${player} beats ${comp} - You win! The score is: ${compScore} - ${playerScore}`)
// 	  }
// 	  	else {console.log('error')}
// }

// game();