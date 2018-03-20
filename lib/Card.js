/*
@exportId hF8R3irvQ6a_4wROwiWfLQ
*/
module.exports = (function() {
const CardNumber = require('CardNumber');
const Suit = require('Suit');

class Card {
  constructor(suit, cardNumber) {
    this.suit = suit;
    this.number = cardNumber;
  }
  
  name() {
    return `${this.number.label} of ${this.suit.name}`;
  }
  
  label() {
    return `${this.number.symbol}${this.suit.symbol}`;
  }
  
  value() {
    return this.number.value;
  }
  
  altValue() {
    return this.number.altValue;
  }
  
  toString() {
    return `${this.number.symbol}-${this.suit.toString()};`;
  }
  
  static cardsFromString(cardsString) {
    return cardsString.split(";").filter((ea) => !!ea).map(Card.fromString);
  }
  
  static fromString(code) {
    const match = code.match(/([0-9AJQK]+)-([SHCD])/);
    if (!match) {
      throw new Error(`Error matching card from "${code}"`);
    }
    return new Card(Suit.fromString(match[2]), CardNumber.fromString(match[1]));
  }
}

return Card;

})()
     