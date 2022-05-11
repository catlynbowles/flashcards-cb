const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Round', function() {
    let card1;
    let card2;
    let card3;
    let deck;
    let turn1;
    let turn2;
    let round;
    let round2;
    let round3;
    beforeEach(() => {

      card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
      card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
      card3 = new Card (3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")

      deck = new Deck([card1, card2, card3]);

      turn1 = new Turn('tinfoil', card1);
      turn2 = new Turn('array', card2);
      turn3 = new Turn('mutator method', card3)

      round1 = new Round(deck, turn1);

    });

  it('should be a function', function() {
    expect(Round).to.be.a('function')
  });

  it('should instantiate a new Round', function() {
    expect(round1).to.be.an.instanceof(Round)
  });

  it('should return the current card being played', function() {
    expect(round1.returnCurrentCard()).to.equal(round1.currentCard)
  });

  it('should have the turn counter start at 0', function() {
    expect(round1.turnCounter).to.equal(0);
  });

  it('should update a turn count whenever a guess is made', function() {
    round1.takeTurn();
    round1.takeTurn();

    expect(round1.turnCounter).to.equal(2);
  });

  it('should store incorrect guesses in an array', function() {
    round1.takeTurn();
    expect(round1.incorrectGuesses).to.deep.equal([1])
  });

  it('should still give feedback for a right answer', function() {
    round1 = new Round (deck[1], turn2)
    expect(round1.takeTurn()).to.equal('correct!');
    console.log(round1.correctGuesses)
  });

  it('should still give feedback for a wrong answer', function() {
    expect(round1.takeTurn()).to.equal('incorrect!');
    console.log(round1.incorrectGuesses)
  });

  // it('should calculate and return the percent of correct guesses', function() {
  //   round1.takeTurn();
  //   round1.takeTurn();
  //   round1.takeTurn();
  //
  //
  //   expect(round1.calculatePercentCorrect()).to.equal(2/3)
  // });
});
