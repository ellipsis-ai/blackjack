/*
@exportId rKkxON13RaCwxhh9Txh_NA
*/
module.exports = (function() {
let theSuits = [];

class Suit {
  constructor(symbol, name) {
    this.symbol = symbol;
    this.name = name;
  }
  
  toString() {
    return this.name.charAt(0);
  }
  
  static fromString(char) {
    return theSuits.find((ea) => ea.name.toLowerCase().indexOf(char.toLowerCase()) === 0);
  }
}

theSuits = [
  new Suit('\u2660\uFE0F', 'Spades'),
  new Suit('\u2665\uFE0F', 'Hearts'),
  new Suit('\u2663\uFE0F', 'Clubs'),
  new Suit('\u2666\uFE0F', 'Diamonds')
];

return Suit;


})()
     