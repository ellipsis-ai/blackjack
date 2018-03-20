/*
@exportId rKkxON13RaCwxhh9Txh_NA
*/
module.exports = (function() {
class Suit {
  constructor(symbol, name) {
    this.symbol = symbol;
    this.name = name;
  }
  
  static fromJson(json) {
    return new Suit(json.symbol, json.name);
  }
}

return Suit;
})()
     