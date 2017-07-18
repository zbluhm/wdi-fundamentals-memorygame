


var cards = ["king", "king", "queen", "queen"];
var cardsInPlay = [];


var checkForMatch = function() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert('You found a match!');
    } else {
      alert('You did not find a match, sorry.');
    }
  }
}


var flipCard = function(cardID) {
  cardsInPlay.push(cards[cardID]);
  console.log("User flipped: " + cards[cardID]);

  cardsInPlay.push(cards[cardID]);

  checkForMatch();
}
