/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let numero = document.getElementById("numero");
  let numeroRandom = Math.floor(Math.random() * 13) + 1;
  let paloRandom = Math.floor(Math.random() * 4) + 1;

  if (numeroRandom == 1) {
    document.getElementById("numero").innerHTML =
      '<img src="src/assets/img/a.png" style="width:140px; heigth:"375px;">';
  } else if (numeroRandom === 11) {
    document.getElementById("numero").innerHTML =
      '<img src="src/assets/img/j.png" style="width:140px; heigth:"375px;">';
  } else if (numeroRandom === 12) {
    document.getElementById("numero").innerHTML =
      '<img src="src/assets/img/q.png" style="width:140px; heigth:"375px;">';
  } else if (numeroRandom === 13) {
    numeroRandom = "K";
    document.getElementById("numero").innerHTML =
      '<img src="src/assets/img/k.png" style="width:140px; heigth:"375px;">';
  } else {
    document.getElementById("numero").textContent = numeroRandom;
  }

  switch (paloRandom) {
    case 1:
      document.querySelector(".card").classList.add("picas");
      document.querySelector(".paloarr").textContent = "♠ ";
      document.querySelector(".paloabj").textContent = "♠";
      break;
    case 2:
      document.querySelector(".card").classList.add("heart");
      document.querySelector(".paloarr").textContent = "♥";
      document.querySelector(".paloabj").textContent = "♥";
      break;
    case 3:
      document.querySelector(".card").classList.add("trebol");
      document.querySelector(".paloarr").textContent = "♣";
      document.querySelector(".paloabj").textContent = "♣";
      break;
    case 4:
      document.querySelector(".card").classList.add("diamond");
      document.querySelector(".paloarr").textContent = "♦";
      document.querySelector(".paloabj").textContent = "♦";
      break;
    default:
  }
};
