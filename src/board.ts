import {
  checkDownCenterTile,
  checkDownLeftTile,
  checkDownRightTile,
  checkLeftTile,
  checkRightTile,
  checkUpLeftTile,
  checkuUpcenterTile,
  checUpRightTile,
} from "./mine-checks.js";
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

export const countNeighbourMines = (tiles: Tile[][]) => {
  for (let column = 0; column < tiles.length; column++) {
    for (let row = 0; row < tiles.length; row++) {
      checkuUpcenterTile(row, column, tiles);

      checkUpLeftTile(row, column, tiles);

      checUpRightTile(row, column, tiles);

      checkRightTile(column, row, tiles);

      checkLeftTile(column, row, tiles);

      checkDownCenterTile(row, column, tiles);

      checkDownRightTile(row, column, tiles);

      checkDownLeftTile(row, column, tiles);
    }
  }

  return tiles;
};

export const playable6x6Board = countNeighbourMines(boardOf6x6.tiles);
