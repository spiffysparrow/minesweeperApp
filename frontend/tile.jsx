var React = require("react");

var Tile = React.createClass({
  formatTile: function() {
    var tile = this.props.tile,
        text = "",
        cls = "tile";

    if (tile.explored) {
      cls += " explored";
      text = tile.adjacentBombCount();

      if (text === 0) {
        text = "";
      }

    } else if (tile.flagged) {
      cls += " flagged";
      text = 	"⚑";
    }

    return { cls: cls, text: text };
  },

  handleClick: function(e) {
    if (e.altKey) {
      this.props.tile.toggleFlag();
    } else {
      this.props.tile.explore();
    }
    this.props.updateGameCallback();
  },

  render: function() {
    var formattedTile = this.formatTile(),
        cls = formattedTile.cls,
        text = formattedTile.text;

    return (
      <div className={ cls }
        onClick={ this.handleClick }>{ text }</div>
    );
  }
});

module.exports = Tile;
