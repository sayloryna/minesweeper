import { type Tile } from "./types.js";

const boardTable = document.querySelector(".board");

export const createBoard = (board: Tile[][]) => {
  board.forEach((column) => {
    const boardColumn = document.createElement("tr");
    column.forEach((row) => {
      const cell = document.createElement("td");
      cell.classList.add("tile", "hidden");
      cell.addEventListener("click", () => {
        cell.classList.remove("hidden");
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
