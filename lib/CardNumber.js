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

return CardNumber;

})()
     