


var cards = ["king", "king", "queen", "queen"];
var cardsInPlay = [];


var cardOne = cards.pop();

console.log("User flipped: " + cardOne);

var cardTwo = cards[2];

cardsInPlay.push(cardTwo);
cardsInPlay.push(cardOne);

console.log("User flipped: " + cardTwo);

if (cardsInPlay.length === 2) {
  if (cardTwo === cardOne) {
    alert('You found a match!');
  } else {
    alert('You did not find a match, sorry.');
  }
}
