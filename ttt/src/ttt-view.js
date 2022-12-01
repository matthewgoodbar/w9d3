class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
    this.bindEvents();
    this.mark = "";
  }

  setupBoard() {
    let board = document.createElement("ul");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let square = document.createElement("li");
        square.setAttribute("data-pos", `${i} ${j}`);
        board.appendChild(square);
      }
    }
    this.el.appendChild(board);
  }
  
  bindEvents() {
    this.el.addEventListener('click', this.handleClick.bind(this)); //gives our grid this click event
    console.log('bindEvents running');
  }

  handleClick(e) {
    let square = e.target;
    if (square.nodeName === 'LI'){
      let data = square.getAttribute('data-pos').split(" ");
      this.mark = this.game.currentPlayer
      this.game.playMove([parseInt(data[0]), parseInt(data[1])]);
      this.makeMove(square);

      this.addWinMessage();
    }

  }

  makeMove(square) {
    square.innerHTML = this.mark;
    square.style.backgroundColor = "white";
  }

  addWinMessage() {
    if (this.game.winner() !== null) {
      let winner = this.game.winner();
      let winMessage = document.createElement("div");
      winMessage.innerHTML = `Congratulations, ${winner}, you win!`;
      this.el.appendChild(winMessage);
    }
  }
 
}

module.exports = View;
