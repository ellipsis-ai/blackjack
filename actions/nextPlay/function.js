function(oldGame, ellipsis) {
  const Game = require('Game');
const game = Game.fromString(oldGame);
const isOver = game.isOver();
const userScore = game.userHand.highestValue();
const inspect = require('util').inspect;
const args = [{ name: "oldGame", value: game.toString() }];
const choices = isOver ? [{
  actionName: "play",
  label: "Play again"
}] : [{
  actionName: "stand",
  label: userScore < 21 ? "Stand" : "OK",
  args: args
}];

if (!isOver && userScore < 21) {
  choices.push({
    actionName: "hitMe",
    args: args,
    label: "Hit me"
  });
}

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
