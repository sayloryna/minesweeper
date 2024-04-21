import {
  countBoardTotalMines,
  countBoardTotalTiles,
  playable6x6Board,
} from "./board.js";
import { type Tile } from "./types.js";

let totalTilesLeft =
  countBoardTotalTiles(playable6x6Board) -
  countBoardTotalMines(playable6x6Board);

const boardContainer = document.querySelector(".board-container")!;
const mainContent = document.querySelector(".main-content")!;
const mainContainer = document.querySelector(".main-container")!;

export const winGame = () => {
  const winGameBanner = document.createElement("div");
  const winGametext = document.createElement("p");
  const winGameTitle = document.createElement("h2");
  winGameBanner.classList.add("win-game");

  winGameTitle.innerText = "succes".toUpperCase();
  winGametext.innerText =
    "¡Enhorabuena! Has encontrado todas las minas\n ¿Quieres jugar otra vez?";

  winGameBanner.appendChild(winGameTitle);
  winGameBanner.appendChild(winGametext);

  const restartButton = document.createElement("button");
  restartButton.classList.add("button__restart");
  restartButton.innerText = "reiniciar".toUpperCase();

  restartButton.addEventListener("click", () => {
    winGameBanner.classList.add("not-show");
    mainContent.classList.remove("not-show");
    addBoard(playable6x6Board);
    mainContainer.removeChild(winGameBanner);
  });

  winGameBanner.appendChild(restartButton);

  mainContent.classList.add("not-show");

  mainContainer.appendChild(winGameBanner);
  document.querySelector(".board")!.remove();
  totalTilesLeft =
    countBoardTotalTiles(playable6x6Board) -
    countBoardTotalMines(playable6x6Board);
};

export const failGame = () => {
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
    mainContent.classList.remove("not-show");

    mainContainer.removeChild(gameOverBanner);
    document.querySelector(".board")!.remove();

    addBoard(playable6x6Board);
  });

  gameOverBanner.appendChild(restartButton);

  mainContent.classList.add("not-show");
  mainContainer.appendChild(gameOverBanner);
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
