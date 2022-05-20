const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const title = document.querySelector("#title");
const submit = document.querySelector("#submit");

const renderImages = function () {
  const options = ["rock", "paper", "scissors"];
  const computerSelection = options[Math.floor(Math.random() * options.length)];
  const playerChoice = document.querySelector("#playerChoice").value;

  img1.setAttribute("src", `imgs/${playerChoice}.svg`);
  img2.setAttribute("src", `imgs/${computerSelection}.svg`);
};

const renderWinner = function () {
  let message;

  if (playerChoice === computerSelection) message = "Draw! Please try again!";
  else if (
    (playerChoice === "rock" && computerSelection === "scissors") ||
    (playerChoice === "scissors" && computerSelection === "paper") ||
    (playerChoice === "paper" && computerSelection === "rock")
  )
    message = "You have won! 😄";
  else message = "You have lost! 😭";

  title.textContent = message;
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  renderImages();
  renderWinner();
});
