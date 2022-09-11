"use strict";
let playerScore = document.getElementById("player-1");
let cpuScore = document.getElementById("player-2");
let winnerChart = document.querySelector(".winner-chart");
const rock = document.querySelector(".btn-rock");
const paper = document.querySelector(".btn-paper");
const scissors = document.querySelector(".btn-scissors");
const reset = document.querySelector('.btn-reset')
let player;
let computer;

// Function to get computer choice
function getComputer() {
  const cpuOption = ["✊", "✋", "✌"];
  const random = cpuOption[Math.floor(Math.random() * cpuOption.length)];
  const cpuSelect = random;
  document.getElementById("player-2").textContent = `${cpuSelect}`;
  return cpuSelect;
}

getComputer();

// Function to choose options
function chooseOption(player, computer) {
  rock.addEventListener("click", function () {
    if ((rock.onclicked = true)) {
      playerScore.textContent = "✊";
      let player = "rock";
      let computer = getComputer();
      if (player === "rock") {
        switch (computer) {
          case "✋":
            winnerChart.textContent = "You lose";
            break;
          case "✌":
            winnerChart.textContent = "You win";
            break;
          case "✊":
            winnerChart.textContent = "Tie";
            break;
        }
      }
    }
  });

  paper.addEventListener("click", function () {
    if ((paper.onclicked = true)) {
      playerScore.textContent = "✋";
      let player = "paper";
      let computer = getComputer();
      if (player === "paper") {
        switch (computer) {
          case "✌":
            winnerChart.textContent = "You lose";
            break;
          case "✊":
            winnerChart.textContent = "You win";
            break;
          case "✋":
            winnerChart.textContent = "Tie";
            break;
        }
      }
    }
  });

  scissors.addEventListener("click", function () {
    if ((scissors.onclicked = true)) {
      playerScore.textContent = "✌";
      let player = "scissors";
      let computer = getComputer();
      if (player === "scissors") {
        switch (computer) {
          case "✊":
            winnerChart.textContent = "You lose";
            break;
          case "✋":
            winnerChart.textContent = "You win";
            break;
          case "✌":
            winnerChart.textContent = "Tie";
            break;
        }
      }
    }
  });
}
chooseOption();

function resetGame() {
  reset.addEventListener('click', function() {
    if (reset.onlick = true) {
      
    }
  })
}