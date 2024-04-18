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

const addNearMines = (tiles: Tile[][]) => {
  for (let row = 0; row <= 2; row++) {
    for (let column = 0; column <= 2; column++) {
      if (row + 1 <= 2 && tiles[row + 1][column].hasMine) {
        tiles[row][column].totalNearMines++;
      }
      if (
        row + 1 <= 2 &&
        column - 1 >= 0 &&
        tiles[row + 1][column - 1].hasMine
      ) {
        tiles[row][column].totalNearMines++;
      }
      if (
        row + 1 <= 2 &&
        column + 1 <= 2 &&
        tiles[row + 1][column + 1].hasMine
      ) {
        tiles[row][column].totalNearMines++;
      }

      if (column + 1 <= 2 && tiles[row][column + 1].hasMine) {
        tiles[row][column].totalNearMines++;
      }
      if (column - 1 >= 0 && tiles[row][column - 1].hasMine) {
        tiles[row][column].totalNearMines++;
      }

      if (row - 1 >= 0 && tiles[row - 1][column].hasMine) {
        tiles[row][column].totalNearMines++;
      }
      if (
        row - 1 >= 0 &&
        column + 1 <= 2 &&
        tiles[row - 1][column + 1].hasMine
      ) {
        tiles[row][column].totalNearMines++;
      }
      if (
        row - 1 >= 0 &&
        column - 1 >= 0 &&
        tiles[row - 1][column - 1].hasMine
      ) {
        tiles[row][column].totalNearMines++;
      }
    }
  }
  return tiles;
};

const playableBoard = addNearMines(board.tiles);
