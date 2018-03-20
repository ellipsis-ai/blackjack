function(oldGame, ellipsis) {
  const Game = require('Game');
const game = Game.fromString(oldGame);
game.userFinished = true;
const dealerScore = game.dealerHand.highestValue();
if (dealerScore < 17) {
  const newCard = game.hitDealer();
  ellipsis.success(`The dealer takes the ${newCard.name()}.`, {
    next: {
      actionName: "stand",
      args: [{ name: "oldGame", value: game.toString() }]
    }
  });
} else {  
  const result = dealerScore > 21 ? "The dealer busts." : "The dealer stands.";
  ellipsis.success(result, {
    next: {
      actionName: "nextPlay",
      args: [{ name: "oldGame", value: game.toString() }]
    }
  })
}
}
