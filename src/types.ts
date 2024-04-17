export interface Tile {
  hasMine: boolean;
  totalNearMines: number;
}

export interface Board {
  rows: number;
  columns: number;
  boardDisplay: Tile[][];
}
