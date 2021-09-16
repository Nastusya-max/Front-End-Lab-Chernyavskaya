'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const game = document.getElementById('gameGrid');
  const btnGame = document.querySelector('.new-game');
  const cells = Array.from(document.getElementsByClassName("cell"));
  const playText = document.getElementById("playText");
  const places = [null, null, null, null, null, null, null, null, null];
  const O_CLASS = "O";
  const X_CLASS = "X";
  let currentPlayer = O_CLASS;

  function newGame() {
    drawGrid();
    places.forEach((place, index) => {
      places[index] = null;
    });
    cells.forEach((cell) => {
      cell.innerText = "";
      playText.innerHTML = `Let's play!`;
    });
    game.addEventListener('click', initGame);
  }

  const initGame = (cell) => {
    const id = cell.target.id;

    if (!places[id]) { // is the current cell (place) occupied by a value or == null
      places[id] = currentPlayer;
      cell.target.innerText = currentPlayer;

      if (isPlayerWin(currentPlayer)) {
        playText.innerHTML = `${currentPlayer} has won!`;
        game.removeEventListener('click', initGame);
      }
      else if (!places.includes(null)) {
        playText.innerHTML = `Draw!`;
        game.removeEventListener('click', initGame);
      }
      currentPlayer = (currentPlayer === O_CLASS) ? X_CLASS : O_CLASS;
    }
  };

  const drawGrid = () => {
    cells.forEach((cell, index) => {
      let styleString = "";

      if (index < 3) {
        styleString += `border-bottom: 3px solid black;`;
      }
      if (index % 3 === 0) {
        styleString += `border-right: 3px solid black;`;
      }
      if (index % 3 === 2) {
        styleString += `border-left: 3px solid black;`;
      }
      if (index > 5) {
        styleString += `border-top: 3px solid black;`;
      }
      cell.style = styleString;
    });
  };

  // checking all variants of winning positions
  const isPlayerWin = (player) => {
    if (places[0] === player) {
      if (places[1] === player && places[2] === player) {
        return true;
      }
      if (places[3] === player && places[6] === player) {
        return true;
      }
      if (places[4] === player && places[8] === player) {
        return true;
      }
    }

    if (places[8] === player) {
      if (places[5] === player && places[2] === player) {
        return true;
      }
      if (places[7] === player && places[6] === player) {
        return true;
      }
    }

    if (places[4] === player) {
      if (places[3] === player && places[5] === player) {
        return true;
      }
      if (places[1] === player && places[7] === player) {
        return true;
      }
      if (places[2] === player && places[6] === player) {
        return true;
      }
    }
  };

  btnGame.addEventListener('click', newGame);
});
