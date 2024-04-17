import { Tile, Board } from "./types";

const createTile = (): Tile => {
  let numberOutOfTen = Math.floor(Math.random() * 10);
  return {
    hasMine: numberOutOfTen < 3,
    totalNearMines: 0,
  };
};

const board: Board = {
  rows: 3,
  columns: 3,
  boardDisplay: [
    [createTile(), createTile(), createTile()],
    [createTile(), createTile(), createTile()],
    [createTile(), createTile(), createTile()],
  ],
};

const searchTotalMines = (board: Board) => {
  let totalMines = 0;
  board.boardDisplay.forEach((row) => {
    row.forEach((tile) => {
      if (tile.hasMine === true) {
        totalMines++;
      }
    });
  });
  return totalMines;
};
