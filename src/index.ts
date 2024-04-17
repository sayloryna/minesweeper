import { Tile, Board } from "./types";

const tile: Tile = {
  hasMine: false,
  totalNearMines: 0,
};
const bombTile: Tile = {
  hasMine: true,
  totalNearMines: 0,
};

const board: Board = {
  rows: 6,
  columns: 6,
  boardDisplay: [
    [tile, tile, tile],
    [tile, bombTile, tile],
    [tile, tile, tile],
  ],
};
