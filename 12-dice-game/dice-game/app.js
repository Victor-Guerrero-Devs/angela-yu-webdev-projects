const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const title = document.querySelector("#title");

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

img1.setAttribute("src", `images/dice${randomNumber1}.png`);
img2.setAttribute("src", `images/dice${randomNumber2}.png`);

let message;

if (randomNumber1 === randomNumber2) message = "Draw! Please try again.";
else if (randomNumber1 > randomNumber2) message = "👑 Player 1 Wins!";
else message = "😭 Player 1 Lost!";

title.textContent = message;
