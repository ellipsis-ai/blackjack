/*
@exportId ToCJYWdlQHqx09uI1O18OQ
*/
module.exports = (function() {
const Deck = require('Deck');
const Card = require('Card');
const Hand = require('Hand');

class Game {
  constructor(deck, userHand, dealerHand) {
    this.deck = deck;
    this.userHand = userHand;
    this.dealerHand = dealerHand;
    this.userFinished = false;
  }
  
  isOver() {
    return this.userFinished || this.userHand.isBust() || this.dealerHand.isBust();
  }
  
  userWinning() {
    return (!this.userHand.isBust() && this.dealerHand.isBust()) ||
      (!this.userHand.isBust() && this.userHand.highestValue() > this.dealerHand.highestValue());
  }
  
  userLosing() {
    return (this.userHand.isBust() && !this.dealerHand.isBust()) ||
      (!this.dealerHand.isBust() && this.userHand.highestValue() < this.dealerHand.highestValue());
  }
    
  isTied() {
    return (this.userHand.isBust() && this.dealerHand.isBust()) ||
      (this.userHand.highestValue() === this.dealerHand.highestValue());
  } 
  
  formatResult() {
    if (!this.isOver()) {
      return "";
    } else if (this.userWinning()) {
      "You won!"
    } else if (this.userLosing()) {
      "Too bad."
    } else if (this.isTied()) {
      "A tie."
    } else {
      return "";
    }
  }
  
  hitUser() {
    const newCard = this.deck.dealCard();
    this.userHand.push(newCard);
    return newCard;
  }
  
  hitDealer() {
    const newCard = this.deck.dealCard();
    this.dealerHand.push(newCard);
    return newCard;
  }
  
  static start() {
    const deck = new Deck();
    deck.shuffle();
    const userHand = [];
    const dealerHand = [];
    userHand.push(deck.dealCard());
    dealerHand.push(deck.dealCard());
    userHand.push(deck.dealCard());
    dealerHand.push(deck.dealCard());
    return new Game(deck, new Hand(userHand), new Hand(dealerHand));
  }
  
  toString() {
    return JSON.stringify(this);
  }
  
  static fromString(string) {
    const json = JSON.parse(string);
    return new Game(
      Deck.fromJson(json.deck), 
      Hand.fromJson(json.userHand),
      Hand.fromJson(json.dealerHand)
    );
  }
}

return Game;
})()
     