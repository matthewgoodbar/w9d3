class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
    this.bindEvents();
  }

  setupBoard() {
    console.log('setBoard');

    let board = document.createElement("ul");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let square = document.createElement("li");
        square.setAttribute("data-pos", `[${i},${j}]`);
        board.appendChild(square);
      }
    }
    this.el.appendChild(board);
  }
  
  bindEvents() {
    this.el.addEventListener('click', handleClick); //gives our grid this click event
    console.log('bindEvents running');
  }

  handleClick(e) {
    let square = e.target;
    console.log('HELLO')
    if (square.nodeName === 'li'){
      this.game.playMove(square.getAttribute('data-pos'));
      this.makeMove(square);
    }

  }

  makeMove(square) {
    square.innerHTML = 'X';
    square.style.backgroundColor = "white";
  }
 
}

module.exports = View;
