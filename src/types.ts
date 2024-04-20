export interface Tile {
  hasMine: boolean;
  totalNearMines: number;
}

export interface Board {
  tiles: Tile[][];
}
