import { playable6x6Board } from "./index.js";
import { type Tile } from "./types.js";

const boardTable = document.querySelector(".board");

const createBoard = (board: Tile[][]) => {
  board.forEach((column) => {
    const boardColumn = document.createElement("tr");
    boardTable?.appendChild(boardColumn);
    column.forEach((row) => {
      const cell = document.createElement("td");

      if (row.hasMine) {
        cell.innerText = "💣";
      }

      cell.innerText = row.totalNearMines.toString();
      boardColumn.appendChild(cell);
    });
    boardTable?.appendChild(boardColumn);
  });
};

createBoard(playable6x6Board);
