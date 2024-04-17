const tile = {
    hasMine: false,
    totalNearMines: 0,
};
const bombTile = {
    hasMine: true,
    totalNearMines: 0,
};
const board = {
    rows: 6,
    columns: 6,
    boardDisplay: [
        [tile, tile, tile],
        [tile, bombTile, tile],
        [tile, tile, tile],
    ],
};
console.log(JSON.stringify(board));
board.boardDisplay[0][0].hasMine = true;
console.log(JSON.stringify(board));
export {};
//# sourceMappingURL=index.js.map