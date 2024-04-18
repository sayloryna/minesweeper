import { Tile, Board } from "./types";

const createTile = (): Tile => {
  let numberOutOfTen = Math.floor(Math.random() * 10);
  return {
    hasMine: numberOutOfTen < 3,
    totalNearMines: 0,
  };
};

const board: Board = {
  totalRows: 3,
  totalColumns: 3,
  tiles: [
    [createTile(), createTile(), createTile()],
    [createTile(), createTile(), createTile()],
    [createTile(), createTile(), createTile()],
  ],
};

const searchTotalMines = (board: Board) => {
  let totalMines = 0;
  board.tiles.forEach((row) => {
    row.forEach((tile) => {
      if (tile.hasMine === true) {
        totalMines++;
      }
    });
  });
  return totalMines;
};
