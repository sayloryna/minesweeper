interface Tale {
  hasMine: boolean;
  totalNearMines: number;
}

interface Board {
  row: Tale[];
  column: Tale[][];
}

const tale: Tale = {
  hasMine: false,
  totalNearMines: 0,
};
const taleWithBomb = {
  hasMine: true,
  totalNearMines: 0,
};

const board: Board = {
  row: [tale, tale, tale],
  column: [
    [tale, tale, tale],
    [tale, taleWithBomb, tale],
    [tale, tale, tale],
  ],
};
console.log(board);
