"use strict";

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let tries = 15;
let highscore = 0;
let total = 0;
let input = document.querySelector(".check__guess");
let number = document.querySelector(".header__number");

const displayMessage = function (message) {
  document.querySelector(".status__message").textContent = message;
};

document.querySelector(".button__check").addEventListener("click", function () {
  const guess = Number(input.value);
  // Upadate attemps
  total++;
  document.querySelector(".total").textContent = total;
  clearInput();

  // When there is no input
  if (!guess) {
    displayMessage("No such number...");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct number!");
    number.textContent = secretNumber;
    number.style.width = "35rem";
    document.querySelector("body").style.backgroundColor = "#7db184";

    // Upadate highscore
    if (tries > highscore) {
      highscore = tries;
      document.querySelector(".highscore").textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (tries > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      tries--;
      document.querySelector(".tries").textContent = tries;
    } else {
      displayMessage("You lost the game... Kitty won!");
      document.querySelector(".tries").textContent = 0;
    }
  }
});

// Again Button
document.querySelector(".button__again").addEventListener("click", function () {
  tries = 15;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  total = 0;
  document.querySelector(".tries").textContent = tries;
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#a85797";
  number.style.width = "20rem";
  number.textContent = "?";
  clearInput();
});

// Enter event to input
input.addEventListener("keypress", function (press) {
  if (press.key === "Enter") {
    document.querySelector(".button__check").click();
  }
});

// Modal info
const modal = document.querySelector(".header__about");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelector(".header__instruction");

btnOpenModal.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

overlay.addEventListener("click", closeModal);

// Escape event to modal
document.addEventListener("keydown", function (event) {
  console.log(event.key);

  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Clear input field
const clearInput = function () {
  input.value = "";
};
