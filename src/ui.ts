import { playable6x6Board } from "./board.js";
import { type Tile } from "./types.js";
const boardContainer = document.querySelector(".board-container");

const mainContent = document.querySelector(".main-content");
const mainContainer = document.querySelector(".main-container");

export const failedGame = () => {
  const gameOverBanner = document.createElement("div");
  const gameOverText = document.createElement("p");
  const gameOverTitle = document.createElement("h2");
  gameOverBanner.classList.add("game-over");

  gameOverTitle.innerText = "game over".toUpperCase();
  gameOverText.innerText =
    "Has perdido, no has encontrado todas las bombas\n ¿Quieres probar otra vez?";

  gameOverBanner.appendChild(gameOverTitle);
  gameOverBanner.appendChild(gameOverText);

  const restartButton = document.createElement("button");
  restartButton.classList.add("button__restart");
  restartButton.innerText = "reiniciar".toUpperCase();

  restartButton.addEventListener("click", () => {
    gameOverBanner.classList.add("not-show");
    mainContent?.classList.remove("not-show");
    addBoard(playable6x6Board);
  });

  gameOverBanner.appendChild(restartButton);

  mainContent?.classList.add("not-show");
  mainContainer?.appendChild(gameOverBanner);
};

export const addBoard = (board: Tile[][]) => {
  const boardTable = document.createElement("ul");
  boardTable.classList.add("board");
  board.forEach((column) => {
    const boardColumn = document.createElement("div");

    boardColumn.classList.add("column");

    column.forEach((row) => {
      const tile = document.createElement("li");

      tile.classList.add("tile", "hidden");

      tile.addEventListener("click", () => {
        tile.classList.remove("hidden");
        if (row.hasMine) {
          tile.innerText = "💣";
        } else {
          tile.innerText = row.totalNearMines.toString();
        }

        if (row.hasMine) {
          document.querySelector(".board")?.remove();

          failedGame();
        }
      });

      boardColumn.appendChild(tile);
    });
    boardTable?.appendChild(boardColumn);
  });

  boardContainer?.appendChild(boardTable);
};
