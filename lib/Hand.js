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
  
  hasAddedCards() {
    return this.cards.length > 2;
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
  
  formatValue(prefix) {
    prefix = prefix || "";
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
    }
    return value;
  }
  
  formatOpinion() {
    const highestValue = this.highestValue();
    if (highestValue > 21) {
      return "You bust.";
    } else if (highestValue === 21) {
      return "🎉";
    } else if (highestValue >= 19) {
      return "Pretty good!"
    } else if (highestValue >= 17) {
      return "Not bad."
    } else {
      return "";
    }
  }

  formatHidden() {
    return '[█]  ' + this.cards.slice(1).map((ea) => ea.label()).join("  ");
  }
  
  formatCards() {
    return this.cards.map((ea) => ea.label()).join("  ");
  }
}

return Hand;

})()
     