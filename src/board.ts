import { type Tile, type Board } from "./types.js";

const createTile = (): Tile => {
  const numberOutOfTen = Math.floor(Math.random() * 10);
  return {
    hasMine: numberOutOfTen < 3,
    totalNearMines: 0,
  };
};

export const countBoardTotalMines = (board: Tile[][]): number => {
  let totalMines = 0;
  board.forEach((colum) => {
    colum.forEach((row) => {
      if (row.hasMine) {
        totalMines++;
      }
    });
  });

  return totalMines;
};

export const countBoardTotalTiles = (board: Tile[][]): number => {
  let totalTiles = 0;
  board.forEach((colum) => {
    colum.forEach(() => {
      totalTiles++;
    });
  });

  return totalTiles;
};

const boardOf6x6: Board = {
  tiles: [
    [
      createTile(),
      createTile(),
      createTile(),
      createTile(),
      createTile(),
      createTile(),
    ],
    [
      createTile(),
      createTile(),
      createTile(),
      createTile(),
      createTile(),
      createTile(),
    ],
    [
      createTile(),
      createTile(),
      createTile(),
      createTile(),
      createTile(),
      createTile(),
    ],
    [
      createTile(),
      createTile(),
      createTile(),
      createTile(),
      createTile(),
      createTile(),
    ],
    [
      createTile(),
      createTile(),
      createTile(),
      createTile(),
      createTile(),
      createTile(),
    ],
    [
      createTile(),
      createTile(),
      createTile(),
      createTile(),
      createTile(),
      createTile(),
    ],
  ],
};

// eslint-disable-next-line complexity
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

export const playable6x6Board = countNeighbourMines(boardOf6x6.tiles);
