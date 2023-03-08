"use strict";

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 10;
let highscore = 0;
let attempts = 0;
let input = document.querySelector(".check__guess");

const displayMessage = function (message) {
  document.querySelector(".status__message").textContent = message;
};

document.querySelector(".button__check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".check__guess").value);
  // Upadate attemps
  attempts++;
  document.querySelector(".attempts").textContent = attempts;

  // When there is no input
  if (!guess) {
    displayMessage("No such number...");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct number!");
    document.querySelector(".header__number").textContent = secretNumber;
    document.querySelector(".header__number").style.width = "35rem";
    document.querySelector("body").style.backgroundColor = "#af649f";

    // Upadate highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game... Kitty won!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Again Button
document.querySelector(".button__again").addEventListener("click", function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#a85797";
  document.querySelector(".header__number").style.width = "20rem";
  document.querySelector(".header__number").textContent = "?";
  document.querySelector(".check__guess").value = "";
});

// Add Enter to input
input.addEventListener("keypress", function (press) {
  if (press.key === "Enter") {
    document.querySelector(".button__check").click();
  }
});

// Close & open instruction
const btnOpen = document.querySelector(".btn-open");
const info = document.querySelector(".header__info");

btnOpen.addEventListener("click", function () {
  if (info.classList.contains("hidden")) {
    info.classList.remove("hidden");
    btnOpen.textContent = "Close";
  } else {
    info.classList.add("hidden");
    btnOpen.textContent = "How to play it?";
  }
});
