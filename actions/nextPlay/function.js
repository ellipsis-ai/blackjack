function(oldGame, ellipsis) {
  const Game = require('Game');
const game = Game.fromString(oldGame);
const isOver = game.isOver();
const inspect = require('util').inspect;

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

const myHand = game.userHand.format("you have");
const theirHand = isOver ? game.dealerHand.format("dealer has") : game.dealerHand.formatHidden();
ellipsis.success({
  userHand: myHand,
  dealerHand: theirHand,
  result: game.formatResult()
}, {
  choices: choices
});
}
