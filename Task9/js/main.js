const playText = document.getElementById("playText");
const cells = Array.from(document.getElementsByClassName("cell"));
const places = [null, null, null, null, null, null, null, null, null];
const O_CLASS = "O";
const X_CLASS = "X";
let currentPlayer = O_CLASS;

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
    cell.addEventListener("click", cellClicked);
  });
};

const cellClicked = (cell, isGameOver) => {
  const id = cell.target.id;

  if (!places[id]) {
    places[id] = currentPlayer;
    cell.target.innerText = currentPlayer;
    if (isPlayerWin(currentPlayer)) {
      playText.innerHTML = `${currentPlayer} has won!`;
      isGameOver = true;
    }
    if (!places.includes(null)) {
      playText.innerHTML = `Draw!`;
      isGameOver = true;
    }
    currentPlayer = (currentPlayer === O_CLASS) ? X_CLASS : O_CLASS;
  }
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
  }
};

restartBtn.addEventListener("click", () => {
  places.forEach((space, index) => {
    places[index] = null;
  });
  cells.forEach((cell) => {
    cell.innerText = "";
  });
  playText.innerHTML = `Let's play!`;

  currentPlayer = O_CLASS;
});

drawGrid();