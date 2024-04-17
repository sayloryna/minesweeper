const tale = {
  hasMine: false,
  totalNearMines: 0,
};
const taleWithBomb = {
  hasMine: true,
  totalNearMines: 0,
};
const board = {
  row: [tale, tale, tale],
  column: [
    [tale, tale, tale],
    [tale, taleWithBomb, tale],
    [tale, tale, tale],
  ],
};
console.log(board);
//# sourceMappingURL=index.js.map
