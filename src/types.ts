export interface Tile {
  hasMine: boolean;
  totalNearMines: number;
}

export interface Board {
  totalRows: number;
  totalColumns: number;
  tiles: Tile[][];
}
