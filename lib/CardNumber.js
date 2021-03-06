/*
@exportId htjsXZ4nRG6o1w9I9xhjRw
*/
module.exports = (function() {
let aSuit = [];

class CardNumber {
  constructor(symbol, label, value, altValue) {
    this.symbol = symbol;
    this.label = label;
    this.value = value;
    this.altValue = altValue || value;
  }

  static fromString(symbol) {
    return aSuit.find((ea) => ea.symbol === symbol);
  }
}

aSuit = [
  new CardNumber('A', 'Ace', 1, 11),
  new CardNumber('2', '2', 2),
  new CardNumber('3', '3', 3),
  new CardNumber('4', '4', 4),
  new CardNumber('5', '5', 5),
  new CardNumber('6', '6', 6),
  new CardNumber('7', '7', 7),
  new CardNumber('8', '8', 8),
  new CardNumber('9', '9', 9),
  new CardNumber('10', '10', 10),
  new CardNumber('J', 'Jack', 10),
  new CardNumber('Q', 'Queen', 10),
  new CardNumber('K', 'King', 10)
];

return CardNumber;

})()
     