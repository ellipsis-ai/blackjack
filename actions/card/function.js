function(ellipsis) {
  const Deck = require('Deck');
const deck = new Deck();
deck.shuffle();
const card = deck.dealCard();
ellipsis.success(card.label());
}
