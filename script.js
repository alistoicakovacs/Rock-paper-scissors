const title = document.querySelector(".title");
const userInput = document.querySelector(".user-input");
const computerInput = document.querySelector(".computer-input");
const userButtons = document.querySelector(".user-buttons");
const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorButton = document.querySelector(".scissor-button");
const startButton = document.querySelector(".start-button");
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
	computerInput.value = computerChoice;

	if (userInput.value == computerInput.value) {
		alert("Tie");
	} else if (userInput.value > computerInput.value) {
		alert("You won!");
	} else alert("You Lost!");
}

// function startFunction() {
// 	console.log("click");
// }
