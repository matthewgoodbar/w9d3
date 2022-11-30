const View = require("./ttt-view");// require appropriate file
const Game = require("../ttt_node/game.js");// require appropriate file

document.addEventListener("DOMContentLoaded", () => {
  const tttElement = document.getElementById("ttt");
  const game = new Game();
  const view = new View(game, tttElement);
});
