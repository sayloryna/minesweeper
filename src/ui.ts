import { error } from "console";
import {
  countBoardTotalMines,
  countBoardTotalTiles,
  playable6x6Board,
} from "./board.js";
import { type Tile } from "./types.js";

let totalTilesLeft =
  countBoardTotalTiles(playable6x6Board) -
  countBoardTotalMines(playable6x6Board);

const restartTotalMinesLeftCounter = (): void => {
  totalTilesLeft =
    countBoardTotalTiles(playable6x6Board) -
    countBoardTotalMines(playable6x6Board);
};

const boardContainer = document.querySelector(".board-container");
const mainContent = document.querySelector(".main-content");
const mainContainer = document.querySelector(".main-container");

if (!boardContainer || !mainContent || !mainContainer) {
  throw new Error("missing element");
}

export const winGame = () => {
  const winGameBanner = document.createElement("div");
  const winGametext = document.createElement("p");
  const winGameTitle = document.createElement("h2");
  const restartButton = document.createElement("button");

  mainContent.classList.add("not-show");

  restartButton.innerText = "reiniciar".toUpperCase();
  mainContainer.appendChild(winGameBanner);

  winGameBanner.classList.add("win-game");
  winGameBanner.appendChild(winGameTitle);
  winGameBanner.appendChild(winGametext);
  winGameBanner.appendChild(restartButton);

  winGameTitle.innerText = "succes".toUpperCase();
  winGametext.innerText =
    "¡Enhorabuena! Has encontrado todas las minas\n ¿Quieres jugar otra vez?";

  restartButton.classList.add("button__restart");

  restartButton.addEventListener("click", () => {
    winGameBanner.classList.add("not-show");

    mainContent.classList.remove("not-show");

    document.querySelector(".board")!.remove();

    mainContainer.removeChild(winGameBanner);

    addBoard(playable6x6Board);
  });

  restartTotalMinesLeftCounter();
};

export const failGame = () => {
  const gameOverBanner = document.createElement("div");
  const gameOverText = document.createElement("p");
  const gameOverTitle = document.createElement("h2");
  const restartButton = document.createElement("button");

  mainContainer.appendChild(gameOverBanner);
  mainContent.classList.add("not-show");

  gameOverBanner.appendChild(gameOverTitle);
  gameOverBanner.appendChild(gameOverText);
  gameOverBanner.appendChild(restartButton);
  gameOverBanner.classList.add("game-over");

  gameOverTitle.innerText = "game over".toUpperCase();

  gameOverText.innerText =
    "Has perdido, no has encontrado todas las bombas\n ¿Quieres probar otra vez?";

  restartButton.innerText = "reiniciar".toUpperCase();

  restartButton.classList.add("button__restart");

  restartButton.addEventListener("click", () => {
    gameOverBanner.classList.add("not-show");

    mainContent.classList.remove("not-show");

    mainContainer.removeChild(gameOverBanner);

    document.querySelector(".board")!.remove();

    addBoard(playable6x6Board);
  });

  restartTotalMinesLeftCounter();
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

          failGame();
        } else {
          tile.innerText = row.totalNearMines.toString();

          totalTilesLeft--;

          if (totalTilesLeft <= 0) {
            winGame();
          }
        }
      });

      boardColumn.appendChild(tile);
    });

    boardTable.appendChild(boardColumn);
  });

  boardContainer.appendChild(boardTable);
};
