import { createBoard } from "./ui.js";
import { playable6x6Board } from "./board.js";

createBoard(playable6x6Board);

document.querySelector(".board")?.appendChild(document.createElement("tr"));
