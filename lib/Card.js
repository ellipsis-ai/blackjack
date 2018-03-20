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
  
  static fromJson(json) {
    return new Card(Suit.fromJson(json.suit), CardNumber.fromJson(json.number));
  }
}

return Card;

})()
     