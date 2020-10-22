const resultArea = document.getElementById('result');
const weapons = ["ROCK", "PAPER", "PAPER"];
let playerScore = 0;

const getComputerWeapon = () => {
	const randomIndex = Math.floor(Math.random() * weapons.length);
	return weapons[randomIndex];
};

const getResult = (playerWeapon, computerWeapon) => {
	if (playerWeapon === computerWeapon)
		return 0;

	switch (playerWeapon) {
		case "ROCK":
			if (computerWeapon === "PAPER")
				return -1;
			return 1;
		case "PAPER":
			if (computerWeapon === "SCISSOR")
				return -1;
			return 1;
		case "SCISSOR":
			if (computerWeapon === "ROCK")
				return -1;
			return 1;
	}
};

const displayResult = (playerWeapon, computerWeapon, result) => {
	let resultMessage = `${playerWeapon} VS ${computerWeapon}<br/>`;
	if (result === 0) {
		resultMessage += `GAME DRAW`;
	} else if (result === 1) {
		resultMessage += `YOU WON`;
	} else {
		resultMessage += `YOU LOST`;
	}
	resultMessage += `<br/>SCORE : ${playerScore}`;
	resultArea.innerHTML = resultMessage;
}

function startGame(weapon) {
	const playerWeapon = weapon;
	const computerWeapon = getComputerWeapon();
	const currentGameScore = getResult(playerWeapon, computerWeapon)
	playerScore = playerScore + currentGameScore;
	displayResult(playerWeapon, computerWeapon, currentGameScore);
}