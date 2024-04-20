/* eslint-disable @typescript-eslint/consistent-type-definitions */
export interface Tile {
  hasMine: boolean;
  totalNearMines: number;
}

export interface Board {
  tiles: Tile[][];
}
