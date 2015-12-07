var React = require("react"),
    Board = require("./board.jsx"),
    Minesweeper = require("./minesweeper.js");

var Game = React.createClass({

  getInitialState: function(){
    return { board: new Minesweeper.Board(10, 10) };
  },

  updateGame: function(){

  },
  render: function(){
    return (
      <Board board={this.state.board} updateGameCallback={this.updateGame} />
    );
  }

});

module.exports = Game;
