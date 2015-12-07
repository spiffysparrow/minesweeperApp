var React = require("react"),
    Tile = require("./tile.jsx");

var Board = React.createClass({
  render: function(){
    var grid = this.props.board.grid;
    var tiles = grid.map(function(row, i){
      var row = row.map(function(tile, j){
        return (
          <Tile key={i + "-" + j}
            tile={tile}
            updateGameCallback={this.props.updateGameCallback}/>
        );
      });

      return (<div className="row" key={i}>{row}</div>);
    });

    return (
      <div id="board">{tiles}</div>
    );
  }
});

module.exports = Board;
