function(oldGame, ellipsis) {
  const Game = require('Game');
const game = Game.fromString(oldGame);
game.userFinished = true;
if (game.dealerHand.highestValue() < 17) {
  const newCard = game.hitDealer();
  ellipsis.success(`The dealer takes the ${newCard.name()}.`, {
    next: {
      actionName: "stand",
      args: [{ name: "oldGame", value: game.toString() }]
    }
  });
} else {
  ellipsis.success(`The dealer stands.`, {
    next: {
      actionName: "nextPlay",
      args: [{ name: "oldGame", value: game.toString() }]
    }
  })
}
}
