/*
@exportId Z9f224NgSPCvvQok9oMMVQ
*/
module.exports = (function() {
const CardNumber = require('CardNumber');
const Card = require('Card');
const Suit = require('Suit');
const aSuit = [
  new CardNumber('A', 'Ace', 1, 11),
  new CardNumber('2', 'Two', 2),
  new CardNumber('3', 'Three', 3),
  new CardNumber('4', 'Four', 4),
  new CardNumber('5', 'Five', 5),
  new CardNumber('6', 'Six', 6),
  new CardNumber('7', 'Seven', 7),
  new CardNumber('8', 'Eight', 8),
  new CardNumber('9', 'Nine', 9),
  new CardNumber('10', 'Ten', 10),
  new CardNumber('J', 'Jack', 10),
  new CardNumber('Q', 'Queen', 10),
  new CardNumber('K', 'King', 10)
];


function SuitOfCards(suit) {
  return aSuit.map((number) => new Card(suit, number));
}

class Deck {
  constructor() {
    let deck = [].concat(
      SuitOfCards(new Suit('\u2660\uFE0F', 'Spades')),
      SuitOfCards(new Suit('\u2665\uFE0F', 'Hearts')),
      SuitOfCards(new Suit('\u2663\uFE0F', 'Clubs')),
      SuitOfCards(new Suit('\u2666\uFE0F', 'Diamonds'))
    );
    this.cards = deck;
  }
  
  shuffle() {
    const numCards = this.cards.length;
    const oldDeck = this.cards.slice();
    const newDeck = [];
    let random;
    while (oldDeck.length > 0) {
      random = Math.floor(Math.random() * oldDeck.length);
      const card = oldDeck[random];
      newDeck.push(card);
      oldDeck.splice(random, 1);
    }
    this.cards = newDeck;
  }
  
  dealCard() {
    return this.cards.pop();    
  }
  
  toString() {
    return `<${this.cards.map((ea) => ea.toString()).join("")}>`;
  }
  
  static fromString(string) {
    const deck = new Deck();
    try {
      deck.cards = Card.cardsFromString(string);
    } catch(e) {
      throw new Error(`Error decoding the deck from "${string}".\nUnderlying error:\n${e}`);
    }
    return deck;
  }
}

return Deck;
})()
     