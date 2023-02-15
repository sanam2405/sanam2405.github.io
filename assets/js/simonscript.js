// dom declaration
const startButton = document.getElementById("start");
const levelText = document.getElementById("level");
const modal = document.getElementById("modal_overlay");
const modalMessageScore = document.getElementById("modal_message_score");
const modalButton = document.getElementById("modal_button");
const scoreText = document.getElementById("score");
const delay = 500; // 1 second delay

// arrayMain for referencing the random set of color
// arrayInGame for set of colors in every level always clear every level
const arrayBox = ["box_green", "box_yellow", "box_red", "box_blue"];
const arrayMain = [];
const arrayInGame = [];
let highestScore = 0;
let currentScore = 0;

function resetGame() {
	arrayMain.length = arrayInGame.length = currentScore = 0;
	levelText.innerHTML = "Made with Love by Munu";

	startButton.innerText = "Start";
	disableBoxButton(true, true);
	disbleStartButton(false);
}

//disble a button box logic or UI style
function disableBoxButton(isDisable, isDisabledUI) {
	for (const element of document.getElementsByClassName("box")) {
		element.disabled = isDisable;

		if (isDisabledUI) element.classList.add("disable");
		else element.classList.remove("disable");
	}
}

function disbleStartButton(enabler) {
	startButton.disabled = enabler;

	if (enabler) startButton.classList.add("disable");
	else startButton.classList.remove("disable");
}

// add glow effect
function activeBox(boxID) {
	const box = document.getElementById(boxID);
	switch (boxID) {
		case "box_green":
			playSound("green")
			break;
		case "box_blue":
			playSound("blue")
			break;
		case "box_red":
			playSound("red")
			break;
		case "box_yellow":
			playSound("yellow")
			break;
	}
	box.classList.add("box_press");
	setTimeout(() => {
		box.classList.remove("box_press");
	}, 400);
}

function addColorRandom() {
	arrayMain.push(arrayBox[Math.round(Math.random() * 3)]);
	console.log(arrayMain);
}

function playColorSet() {
	startButton.innerText = "Wait";
	addColorRandom();

	//use for playing the next color set
	let index = 0;
	const glowEach = setInterval(() => {
		activeBox(arrayMain[index++]);

		if (index === arrayMain.length) {
			startButton.innerText = "Guess";
			disableBoxButton(false, false);
			clearInterval(glowEach);
		}
	}, 600);
}

function checkColorSet() {
	//lose
	if (!isArrayStartsWith(arrayMain, arrayInGame)) loseLevel();
	//win
	else if (arrayInGame.length === arrayMain.length && arrayInGame.length !== 0) winLevel();
}

function loseLevel() {
	playSound("lose");
	showLostModal(true);
	resetGame();
}

//reset ingame array and add one color randomly
function winLevel() {
	arrayInGame.length = 0;
	levelText.innerHTML = `Current Score : ${(arrayMain.length).toString()}`;
	startButton.innerText = "Start";

	disableBoxButton(true);
	playSound("win");

	setTimeout(() => {
		disableBoxButton(true, true);
		disbleStartButton(false);
	}, 1000);

	currentScore++;

}

//utils
function playSound(soundName) {
	switch (soundName) {
		case "blue":
			new Audio("gameaudio/blue.mp3").play();
			break;
		case "green":
			new Audio("gameaudio/green.mp3").play();
			break;
		case "red":
			new Audio("gameaudio/red.mp3").play();
			break;
		case "yellow":
			new Audio("gameaudio/yellow.mp3").play();
			break;
		case "win":
			setTimeout(() => {
				new Audio("gameaudio/win.wav").play();
			}, delay);
			break;
		case "lose":
			setTimeout(() => {
				new Audio("gameaudio/lose.wav").play();
			}, delay+500);
			break;
		case "try":
			new Audio("gameaudio/try.wav").play();
			break;
		case "start":
			new Audio("gameaudio/start.wav").play();
			break;
		default:
	}
}

function showLostModal(enabler) {
	if (enabler) {
		playSound("lose");
		modal.classList.remove("hide");
		modalMessageScore.innerHTML = "Your Score : "+currentScore;
	} else {
		modal.classList.add("hide");
	}
}

function isArrayStartsWith(first, second) {
	const firstArray = [...first];
	const secondArray = [...second];

	for (let index = 0; index < secondArray.length; index++)
		if (firstArray[index] !== secondArray[index]) return false;

	return true;
}

//function clicking all box
for (const item of document.getElementsByClassName("box"))
	item.addEventListener("click", () => {
		const id = item.getAttribute("id");
		switch (id) {
			case "box_green":
				playSound("green")
				break;
			case "box_blue":
				playSound("blue")
				break;
			case "box_red":
				playSound("red")
				break;
			case "box_yellow":
				playSound("yellow")
				break;
		}
		arrayInGame.push(id);
		checkColorSet();
	});

modalButton.addEventListener("click", () => {
	playSound("try");
	showLostModal(false);
});

startButton.addEventListener("click", () => {
	disbleStartButton(true);
	disableBoxButton(true, false);
	playColorSet();
	playSound("start");
});

// starting point
resetGame();
