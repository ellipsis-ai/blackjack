function(oldGame, ellipsis) {
  const Game = require('Game');
const game = Game.fromString(oldGame);
game.userFinished = true;
const userScore = game.userHand.highestValue();
const dealerScore = game.dealerHand.highestValue();
const userWinning = game.userWinning();
const dealerBust = dealerScore > 21;
let result = ""
if (dealerScore < 17 || (!dealerBust && userWinning)) {
  if (!game.dealerHand.hasAddedCards()) {
    result += `I have the ${game.dealerHand.cards[0].name()}. ${game.dealerHand.formatValue("That makes")}\n\n`;
  }
  const newCard = game.hitDealer();
  result += `I’m going to hit, and I get the ${newCard.name()}. ${game.dealerHand.formatValue("That makes")}`;
  ellipsis.success(result, {
    next: {
      actionName: "stand",
      args: [{ name: "oldGame", value: game.toString() }]
    }
  });
} else {
  if (dealerBust) {
    result = "I bust.";
  } else if (dealerScore === 21) {
    result = "I’m happy with that.";
  } else {
    result = "I stand.";
  }
  ellipsis.success(result, {
    next: {
      actionName: "nextPlay",
      args: [{ name: "oldGame", value: game.toString() }]
    }
  })
}
}
