function(gameString, ellipsis) {
  const Game = require('Game');
const util = require('util');
const game = Game.fromString(gameString);
ellipsis.success(
  util.inspect(game.userHand.cards) + "\n\n" + 
  game.userHand.format("you have")
);
}
