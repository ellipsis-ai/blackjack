function(oldGame, ellipsis) {
  const Game = require('Game');
const game = Game.fromString(oldGame);
const newCard = game.hitUser();
ellipsis.success({
  newCard: newCard.name(),
  result: game.userHand.formatValue("That makes") + " " + game.userHand.formatOpinion()
}, {
  next: {
    actionName: "nextPlay",
    args: [{ name: "oldGame", value: game.toString() }]
  }
});
}
