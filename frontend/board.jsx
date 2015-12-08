var React = require("react"),
    Tile = require("./tile.jsx");

var Board = React.createClass({
  formatTiles: function() {
    var grid = this.props.board.grid,
        tiles = [],
        updateGameCallback = this.props.updateGameCallback;

    var rows = grid.map(function(row, i) {
      tiles = row.map(function(tile, j) {
        return (
          <Tile key={ i + "-" + j }
            tile={ tile }
            updateGameCallback={ updateGameCallback }/>
        );
      });

      return (
        <div className="row" key={i}>{tiles}</div>
      );
    });

    return rows;
  },

  render: function(){
    return (
      <div id="board">{this.formatTiles()}</div>
    );
  }
});

module.exports = Board;
