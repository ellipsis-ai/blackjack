/*
@exportId ToCJYWdlQHqx09uI1O18OQ
*/
module.exports = (function() {
const Deck = require('Deck');
const Card = require('Card');
const Hand = require('Hand');

class Game {
  constructor(deck, userHand, dealerHand, userFinished) {
    this.deck = deck;
    this.userHand = userHand;
    this.dealerHand = dealerHand;
    this.userFinished = userFinished || false;
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
      return "**You won!** 🎉😎🍾"
    } else if (this.userLosing()) {
      return "Better luck next time. 🃏"
    } else if (this.isTied()) {
      return "A tie. 😐"
    } else {
      return "";
    }
  }
  
  hitUser() {
    const newCard = this.deck.dealCard();
    this.userHand.receive(newCard);
    return newCard;
  }
  
  hitDealer() {
    const newCard = this.deck.dealCard();
    this.dealerHand.receive(newCard);
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
    return new Game(deck, new Hand(userHand), new Hand(dealerHand), false);
  }
  
  toString() {
    return `Deck${this.deck.toString()}%User${this.userHand.toString()}%Dealer${this.dealerHand.toString()}%F:${this.userFinished}`;
  }
  
  static fromString(string) {
    const match = string.match(/Deck<(.+?)>%User<(.+?)>%Dealer<(.+?)>%F:(true|false)/);
    const deck = Deck.fromString(match[1]);
    if (!deck) {
      console.log(string);
      throw new Error("Error no deck in " + match[1]);
    }
    const userHand = Hand.fromString(match[2]);
    if (!userHand) {
      console.log(string);
      throw new Error("Error no user hand in " + match[2]);
    }
    const dealerHand = Hand.fromString(match[3]);
    if (!dealerHand) {
      console.log(string);
      throw new Error("Error no dealer hand in " + match[3]);
    }
    return new Game(deck, userHand, dealerHand, match[4] === "true")
  }
}

return Game;
})()
     