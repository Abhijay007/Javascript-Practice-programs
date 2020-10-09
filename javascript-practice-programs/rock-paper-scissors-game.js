const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_WEAPON = ROCK;
const BATTLE_RESULT_DRAW = 'GAME DRAW';
const BATTLE_RESULT_WIN = 'YOU WIN';
const BATTLE_RESULT_LOSS = 'YOU LOST';

let gameRunning = false;

const playerChoice = function() {
	const pWeapon = prompt(`Please choose ${ROCK}, ${PAPER} or ${SCISSORS}:`, '').toUpperCase();
	if (pWeapon !== ROCK && pWeapon !== PAPER && pWeapon !== SCISSORS) {
		alert(`Not a valid choice. We have selected ${DEFAULT_WEAPON} for you.`);
		return DEFAULT_WEAPON;
	}
	return pWeapon;
};

const computerChoice = function() {
	const cWeapon = Math.random();
	if (cWeapon < 0.33) {
		return ROCK;
	}
	else if (cWeapon >= 0.33 && cWeapon < 0.66) {
		return PAPER;
	}
	else if (cWeapon >= 0.66) {
		return SCISSORS;
	}
};

const results = (pc, cc) =>

		pc === cc ? BATTLE_RESULT_DRAW :
		(pc === ROCK && cc === SCISSORS) ||
		(pc === PAPER && cc === ROCK) ||
		(pc === SCISSORS && cc === PAPER) ? BATTLE_RESULT_WIN :
		BATTLE_RESULT_LOSS;

// Another way of writing this is:
// const results = function battle(pc, cc) {
// 	if (pc === cc) {
// 		return BATTLE_RESULT_DRAW;
// 	}
// 	else if ((pc === ROCK && cc === SCISSORS) || (pc === PAPER && cc === ROCK) || (pc === SCISSORS && cc === PAPER)) {
// 		return BATTLE_RESULT_WIN;
// 	}
// 	else {
// 		return BATTLE_RESULT_LOSS;
// 	}
// };

startGameBtn.addEventListener('click', function() {
	if (gameRunning) {
		return;
	}
	gameRunning = true;
	const playerFinalSelection = playerChoice();
	const computerFinalSelection = computerChoice();
	const getResults = results(playerFinalSelection, computerFinalSelection);
	console.log('Game Started!');
	console.log(`You Chose: `, playerFinalSelection);
	console.log(`vs`);
	console.log(`Computer Chose: `, computerFinalSelection);
	let message = `You chose ${playerFinalSelection} and the enemy chose ${computerFinalSelection}, therefore the game resulted in a `;
	if (getResults === BATTLE_RESULT_DRAW) {
		message = message + `DRAW`;
	}
	else if (getResults === BATTLE_RESULT_WIN) {
		message = message + `WIN`;
	}
	else message = message + `LOSS`;

	console.log(message);
	gameRunning = false;
});
