const title = document.querySelector(".title");
const userInput = document.querySelector(".user-input");
const computerInput = document.querySelector(".computer-input");
const userButtons = document.querySelector(".user-buttons");
const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorButton = document.querySelector(".scissor-button");
const startButton = document.querySelector(".start-button");
const endMessage = document.querySelector(".endMessage");
const playAgainBtn = document.querySelector(".playAgain-button");

const container = document.querySelector(".container");
// With this event listener, the user input text is updated to which button is pressed
userButtons.addEventListener("click", addUserInputText);

// startButton.addEventListener("click", startFuntion);

function addUserInputText(event) {
	event.preventDefault();

	if (event.target == rockButton) {
		userInput.value = "Rock";
	} else if (event.target == paperButton) {
		userInput.value = "Paper";
	} else if (event.target == scissorButton) {
		userInput.value = "Scissor";
	} else {
		return "";
	}

	const choices = ["Rock", "Paper", "Scissor"];
	const computerChoice = choices[Math.floor(Math.random() * choices.length)];

	startButton.addEventListener("click", function (e) {
		computerInput.value = computerChoice;

		// const text = "";

		// switch (computerInput.value) {
		// 	case "Rock":
		// 		text = "You won";
		// };
		if (userInput.value === computerInput.value) {
			endMessage.value = "It's a tie! Try again.";
		} else if (
			userInput.value === "Rock" &&
			computerInput.value === "Scissor"
		) {
			endMessage.value = "You Won!";
		} else if (userInput.value == "Rock" && computerInput.value == "Paper") {
			endMessage.value = "You Lost! Try again!";
		} else if (userInput.value == "Paper" && computerInput.value == "Scissor") {
			endMessage.value = "You Lost! Try again!";
		} else if (userInput.value == "Paper" && computerInput.value == "Rock") {
			endMessage.value = "You Won!";
		} else if (userInput.value == "Scissor" && computerInput.value == "Rock") {
			endMessage.value = "You Lost! Try again!";
		} else if (userInput.value == "Scissor" && computerInput.value == "Paper") {
			endMessage.value = "You Won!";
		}

		endMessage.readOnly = true;
		startButton.readOnly = true;

		// if (endMessage.value == "You Won!") {
		// 	container.classList.add("overlay");
		// }
	});
}

playAgainBtn.addEventListener("click", function () {
	location.reload();
});
// function startFunction() {
// 	console.log("click");
// }
