export type Tile = {
  hasMine: boolean;
  totalNearMines: number;
};

export type Board = {
  tiles: Tile[][];
};
