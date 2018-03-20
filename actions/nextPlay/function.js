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
  label: userScore < 21 ? "Stand" : "Proceed",
  args: args
}];

if (!isOver && userScore < 21) {
  choices.push({
    actionName: "hitMe",
    args: args,
    label: "Hit me"
  });
}

let myHand = game.userHand.formatCards();
let theirHand = isOver ? game.dealerHand.formatCards() : game.dealerHand.formatHidden();
if (isOver || !game.userHand.hasAddedCards()) {
  myHand += `  —  ${game.userHand.formatValue("You have")}`;
}
if (!isOver && !game.userHand.hasAddedCards()) {
  myHand += ` ${game.userHand.formatOpinion()}`;
}
if (isOver) {
  theirHand += `  —  ${game.dealerHand.formatValue("I have")}`;
}

ellipsis.success({
  userHand: myHand,
  dealerHand: theirHand,
  result: game.formatResult()
}, {
  choices: choices
});
}
