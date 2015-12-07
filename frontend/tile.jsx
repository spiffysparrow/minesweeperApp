var React = require("react");

var Tile = React.createClass({

  render: function(){
    var tile = this.props.tile;
    var tileText = "";
    var cls = "tile";
    if(tile.explored){
      cls += " explored";
      tileText = tile.adjacentBombCount();
      if(tileText === 0){
        tileText = "";
      }
    }else if(tile.flagged){
      cls += " flagged";
      tileText = 	"⚑";
    }

    return (
      <div className={cls}> {tileText} </div>
    );
  }
});

module.exports = Tile;
