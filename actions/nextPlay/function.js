function(oldGame, ellipsis) {
  const Game = require('Game');
const game = Game.fromString(oldGame);
const isOver = game.isOver();
const args = [{ name: "oldGame", value: game.toString() }];
const choices = isOver ? [{
  actionName: "play",
  label: "Play again"
}] : [{
  actionName: "hitMe",
  args: args,
  label: "Hit me"
}, {
  actionName: "stand",
  label: "Stand",
  args: args
}];

ellipsis.success({
  userHand: game.userHand.format("you have"),
  dealerHand: isOver ? game.dealerHand.format("dealer has") : game.dealerHand.formatHidden(),
  result: game.formatResult()
}, {
  choices: choices
});
}
