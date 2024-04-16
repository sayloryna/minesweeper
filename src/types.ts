export interface Tale {
  hasMine: boolean;
  totalNearMines: number;
}

export interface Board {
  row: Tale[];
  column: Tale[][];
}
