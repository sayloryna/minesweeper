import { playable6x6Board } from "./board.js";
import { type Tile } from "./types.js";

const boardTable = document.querySelector(".board");
const mainContent = document.querySelector(".main-content");
const mainContainer = document.querySelector(".main-container");

export const failedGame = () => {
  const gameOverBanner = document.createElement("div");
  const gameOvertext = document.createElement("p");
  gameOverBanner.classList.add("game-over");

  gameOverBanner.innerText = "game over".toUpperCase();
  gameOvertext.innerText =
    "Has perdido, no has encontrado todas las bombas\n ¿Quieres probar otra vez?";
  gameOverBanner.appendChild(gameOvertext);

  const restartButton = document.createElement("button");
  restartButton.innerText = "reiniciar".toUpperCase();
  restartButton.addEventListener("click", () => {
    createBoard(playable6x6Board);
  });

  gameOverBanner.appendChild(restartButton);

  mainContent?.classList.add("not-show");
  mainContainer?.appendChild(gameOverBanner);
};

export const createBoard = (board: Tile[][]) => {
  board.forEach((column) => {
    const boardColumn = document.createElement("tr");
    column.forEach((row) => {
      const cell = document.createElement("td");
      cell.classList.add("tile", "hidden");
      cell.addEventListener("click", () => {
        cell.classList.remove("hidden");
        if (row.hasMine) {
          failedGame();
        }
      });

      boardColumn.appendChild(cell);
      if (row.hasMine) {
        cell.innerText = "💣";
      } else {
        cell.innerText = row.totalNearMines.toString();
      }
    });
    boardTable?.appendChild(boardColumn);
  });
};
