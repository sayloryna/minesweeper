import { Tale, Board } from "./types";

const tale: Tale = {
  hasMine: false,
  totalNearMines: 0,
};
const bombTale = {
  hasMine: true,
  totalNearMines: 0,
};

const board: Board = {
  rows: 6,
  columns: 6,
  boardDisplay: [
    [bombTale, tale, tale, tale, tale, tale],
    [tale, tale, tale, tale, tale, tale],
    [tale, tale, bombTale, tale, tale, tale],
    [tale, tale, tale, tale, tale, tale],
    [tale, bombTale, tale, tale, tale, tale],
    [tale, tale, tale, tale, tale, tale],
  ],
};
