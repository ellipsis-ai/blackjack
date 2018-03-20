/*
@exportId htjsXZ4nRG6o1w9I9xhjRw
*/
module.exports = (function() {
class CardNumber {
  constructor(symbol, label, value, altValue) {
    this.symbol = symbol;
    this.label = label;
    this.value = value;
    this.altValue = altValue || value;
  }
  
  static fromJson(json) {
    return new CardNumber(json.symbol, json.label, json.value, json.altValue);
  }
}

return CardNumber;

})()
     