export interface Tale {
  hasMine: boolean;
  totalNearMines: number;
}

export interface Board {
  rows: number;
  columns: number;
  boardDisplay: Tale[][];
}
