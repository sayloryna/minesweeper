import { countNeighbourMines } from "../board.js";

describe("Given the countNeighbourdMines function", () => {
  describe("When it recibes a board with 9 tiles where 4 tiles has mines", () => {
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

  describe("When it recibes a 16 tiles board with 5 mines", () => {
    test("then it should return a board with 16 tiles where each tile shows how many mines are around", () => {
      const boardWith16Tiles = [
        [
          { hasMine: false, totalNearMines: 0 },
          { hasMine: true, totalNearMines: 0 },
          { hasMine: false, totalNearMines: 0 },
          { hasMine: true, totalNearMines: 0 },
        ],
        [
          { hasMine: false, totalNearMines: 0 },
          { hasMine: true, totalNearMines: 0 },
          { hasMine: false, totalNearMines: 0 },
          { hasMine: false, totalNearMines: 0 },
        ],
        [
          { hasMine: true, totalNearMines: 0 },
          { hasMine: true, totalNearMines: 0 },
          { hasMine: false, totalNearMines: 0 },
          { hasMine: false, totalNearMines: 0 },
        ],
        [
          { hasMine: false, totalNearMines: 0 },
          { hasMine: false, totalNearMines: 0 },
          { hasMine: false, totalNearMines: 0 },
          { hasMine: false, totalNearMines: 0 },
        ],
      ];
      const expectedBoard = [
        [
          { hasMine: false, totalNearMines: 2 },
          { hasMine: true, totalNearMines: 1 },
          { hasMine: false, totalNearMines: 3 },
          { hasMine: true, totalNearMines: 0 },
        ],
        [
          { hasMine: false, totalNearMines: 4 },
          { hasMine: true, totalNearMines: 3 },
          { hasMine: false, totalNearMines: 4 },
          { hasMine: false, totalNearMines: 1 },
        ],
        [
          { hasMine: true, totalNearMines: 2 },
          { hasMine: true, totalNearMines: 2 },
          { hasMine: false, totalNearMines: 2 },
          { hasMine: false, totalNearMines: 0 },
        ],
        [
          { hasMine: false, totalNearMines: 2 },
          { hasMine: false, totalNearMines: 2 },
          { hasMine: false, totalNearMines: 1 },
          { hasMine: false, totalNearMines: 0 },
        ],
      ];
      const actualBoard = countNeighbourMines(boardWith16Tiles);

      expect(actualBoard).toEqual(expectedBoard);
    });
  });

  describe("When it recibes a 4 tiles board with 1 mine", () => {
    test("The it should return a 4 tiles board where each tile shows how many mines are around", () => {
      const boardWith4Tiles = [
        [
          { hasMine: false, totalNearMines: 0 },
          { hasMine: false, totalNearMines: 0 },
        ],
        [
          { hasMine: true, totalNearMines: 0 },
          { hasMine: false, totalNearMines: 0 },
        ],
      ];
      const expectedBoard = [
        [
          { hasMine: false, totalNearMines: 1 },
          { hasMine: false, totalNearMines: 1 },
        ],
        [
          { hasMine: true, totalNearMines: 0 },
          { hasMine: false, totalNearMines: 1 },
        ],
      ];

      const actualBoard = countNeighbourMines(boardWith4Tiles);

      expect(actualBoard).toEqual(expectedBoard);
    });
  });
});
