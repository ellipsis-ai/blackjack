function(oldGame, ellipsis) {
  const Game = require('Game');
const game = Game.fromString(oldGame);
const newCard = game.hitUser();
ellipsis.success(newCard.name(), {
  next: {
    actionName: "nextPlay",
    args: [{ name: "oldGame", value: game.toString() }]
  }
});
}
