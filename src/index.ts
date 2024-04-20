import { Tile, Board } from "./types";

const createTile = (): Tile => {
  let numberOutOfTen = Math.floor(Math.random() * 10);
  return {
    hasMine: numberOutOfTen < 3,
    totalNearMines: 0,
  };
};

const boardOF2x2: Board = {
  tiles: [
    [createTile(), createTile()],
    [createTile(), createTile()],
  ],
};

export const countNeighbourMines = (tiles: Tile[][]) => {
  for (let column = 0; column < tiles.length; column++) {
    for (let row = 0; row < tiles.length; row++) {
      if (row + 1 < tiles.length && tiles[row + 1][column].hasMine) {
        tiles[row][column].totalNearMines++;
      }
      if (
        row + 1 < tiles.length &&
        column - 1 >= 0 &&
        tiles[row + 1][column - 1].hasMine
      ) {
        tiles[row][column].totalNearMines++;
      }
      if (
        row + 1 < tiles.length &&
        column + 1 < tiles.length &&
        tiles[row + 1][column + 1].hasMine
      ) {
        tiles[row][column].totalNearMines++;
      }

      if (column + 1 < tiles.length && tiles[row][column + 1].hasMine) {
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
        column + 1 < tiles.length &&
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

const playable2x2Board = countNeighbourMines(boardOF2x2.tiles);
