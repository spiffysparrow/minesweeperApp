var React = require("react"),
    ReactDOM = require("react-dom"),
    Game = require("./game.jsx");

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(
    <Game/>,
    document.getElementById("game")
  );
});
