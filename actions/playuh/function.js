function(ellipsis) {
  const Game = require('Game');
const game = Game.start();
ellipsis.success("", {
  next: {
    actionName: "nextPlay",
    args: [{
      name: "oldGame",
      value: game.toString()
    }]
  }
});
}
