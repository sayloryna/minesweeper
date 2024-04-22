import { type Tile } from "./types.js";

export const checkDownLeftTile = (
  row: number,
  column: number,
  tiles: Tile[][],
) => {
  if (row - 1 >= 0 && column - 1 >= 0 && tiles[row - 1][column - 1].hasMine) {
    tiles[row][column].totalNearMines++;
  }
};

export const checkDownRightTile = (
  row: number,
  column: number,
  tiles: Tile[][],
) => {
  if (
    row - 1 >= 0 &&
    column + 1 < tiles.length &&
    tiles[row - 1][column + 1].hasMine
  ) {
    tiles[row][column].totalNearMines++;
  }
};

export const checkDownCenterTile = (
  row: number,
  column: number,
  tiles: Tile[][],
) => {
  if (row - 1 >= 0 && tiles[row - 1][column].hasMine) {
    tiles[row][column].totalNearMines++;
  }
};

export const checkLeftTile = (column: number, row: number, tiles: Tile[][]) => {
  if (column - 1 >= 0 && tiles[row][column - 1].hasMine) {
    tiles[row][column].totalNearMines++;
  }
};

export const checkRightTile = (
  column: number,
  row: number,
  tiles: Tile[][],
) => {
  if (column + 1 < tiles.length && tiles[row][column + 1].hasMine) {
    tiles[row][column].totalNearMines++;
  }
};

export const checUpRightTile = (
  row: number,
  column: number,
  tiles: Tile[][],
) => {
  if (
    row + 1 < tiles.length &&
    column + 1 < tiles.length &&
    tiles[row + 1][column + 1].hasMine
  ) {
    tiles[row][column].totalNearMines++;
  }
};

export const checkUpLeftTile = (
  row: number,
  column: number,
  tiles: Tile[][],
) => {
  if (
    row + 1 < tiles.length &&
    column - 1 >= 0 &&
    tiles[row + 1][column - 1].hasMine
  ) {
    tiles[row][column].totalNearMines++;
  }
};

export const checkuUpcenterTile = (
  row: number,
  column: number,
  tiles: Tile[][],
) => {
  if (row + 1 < tiles.length && tiles[row + 1][column].hasMine) {
    tiles[row][column].totalNearMines++;
  }
};
