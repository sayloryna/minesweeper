import { Tile, Board } from "./types";

const createTile = (): Tile => {
  let decider = Math.floor(Math.random() * 10);
  return {
    hasMine: decider < 3,
    totalNearMines: 0,
  };
};

const board: Board = {
  rows: 6,
  columns: 6,
  boardDisplay: [
    [createTile(), createTile(), createTile()],
    [createTile(), createTile(), createTile()],
    [createTile(), createTile(), createTile()],
  ],
};
