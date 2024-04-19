import { countNeighbourMines } from "../index.js";

describe("Given the countNeighbourdMines function", () => {
  describe("When it recibesa board with 9 tiles where 4 tiles has mines", () => {
    test("Then it should return a board with 9 tiles where each tile has how many mines are around it", () => {
      const boardWith9Tiles = [
        [
          { hasMine: true, totalNearMines: 0 },
          { hasMine: false, totalNearMines: 0 },
          { hasMine: false, totalNearMines: 0 },
        ],
        [
          { hasMine: false, totalNearMines: 0 },
          { hasMine: true, totalNearMines: 0 },
          { hasMine: true, totalNearMines: 0 },
        ],
        [
          { hasMine: true, totalNearMines: 0 },
          { hasMine: false, totalNearMines: 0 },
          { hasMine: false, totalNearMines: 0 },
        ],
      ];
      const expectedBoard = [
        [
          { hasMine: true, totalNearMines: 1 },
          { hasMine: false, totalNearMines: 3 },
          { hasMine: false, totalNearMines: 2 },
        ],
        [
          { hasMine: false, totalNearMines: 3 },
          { hasMine: true, totalNearMines: 3 },
          { hasMine: true, totalNearMines: 1 },
        ],
        [
          { hasMine: true, totalNearMines: 1 },
          { hasMine: false, totalNearMines: 3 },
          { hasMine: false, totalNearMines: 2 },
        ],
      ];
      const actualBoard = countNeighbourMines(boardWith9Tiles);

      expect(actualBoard).toEqual(expectedBoard);
    });
  });
});
