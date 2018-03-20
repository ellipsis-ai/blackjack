/*
@exportId Pwfkbo-aR8iyymRhwAviAg
*/
module.exports = (function() {
const Card = require('Card');

class Hand {
  constructor(cards) {
    this.cards = cards;
  }
  
  receive(card) {
    this.cards.push(card);
  }
  
  toString() {
    return `<${this.cards.map((ea) => ea.toString()).join("")}>`;
  }
  
  static fromString(string) {
    try {
      const cards = Card.cardsFromString(string);
      return new Hand(cards);
    } catch(e) {
      throw new Error(`Error decoding the hand from "${string}".\nUnderlying error:\n${e}`);
    }
  }
  
  minValue() {
    return this.cards.reduce((total, card) => total + card.value(), 0);
  }
  
  highestValue() {
    const anAce = this.cards.find((ea) => ea.value() !== ea.altValue());
    const remainder = this.cards.filter((ea) => !anAce || ea !== anAce);
    const fixedValue = remainder.reduce((total, card) => total + card.value(), 0);
    if (!anAce) {
      return fixedValue;
    } else if (fixedValue <= 10) {
      return fixedValue + anAce.altValue();
    } else {
      return fixedValue + anAce.value();
    }
  }
  
  is21() {
    return this.minValue() === 21 || this.highestValue() === 21;
  }
  
  isBust() {
    return this.minValue() > 21;
  }
  
  formatHidden() {
    return '[█] ' + this.cards.slice(1).map((ea) => ea.label()).join(" ");
  }
  
  format(prefix) {
    const cards = this.cards.map((ea) => ea.label()).join(" ");
    const minValue = this.minValue();
    const highestValue = this.highestValue();
    let value = "";
    if (this.is21()) {
      if (this.cards.length === 2) {
        value += "Blackjack!"
      } else {
        value += `${prefix} 21!`;
      }
    } else {
      value += `${prefix} ${minValue}${
        minValue !== highestValue ? ` or ${highestValue} with ace high.` : "."
      }`;
      if (this.isBust()) {
        value += ` Oops.`;
      }
    }
    return `${cards} — ${value}`;
  }
}

return Hand;

})()
     