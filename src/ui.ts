import { playable6x6Board } from "./board.js";
import { type Tile } from "./types.js";

const boardTable = document.querySelector(".board");

export const createBoard = (board: Tile[][]) => {
  board.forEach((column) => {
    const boardColumn = document.createElement("tr");
    boardTable?.appendChild(boardColumn);
    column.forEach((row) => {
      const cell = document.createElement("td");

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

createBoard(playable6x6Board);
