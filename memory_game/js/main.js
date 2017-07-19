


var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }

];
var cardsInPlay = [];


var checkForMatch = function() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert('You found a match!');
      var score = document.getElementById('score').textContent.charAt(7);
      document.getElementById('score').textContent = "Score: " + (parseInt(score)+1);
    } else {
      alert('You did not find a match, sorry.');
    }
  }
}


var flipCard = function() {
  var cardID = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardID].rank);
  console.log("User flipped: " + cards[cardID].rank);
  console.log(cards[cardID].cardImage);
  console.log(cards[cardID].suit);
  this.setAttribute('src', cards[cardID].cardImage);
  checkForMatch();
}

var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var imgItem = document.createElement('img');
    imgItem.setAttribute('src', "images/back.png");
    imgItem.setAttribute('data-id', i);
    imgItem.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(imgItem);
  }
}

var resetBoard = function() {
  cardsInPlay = [];
  var cards = document.getElementsByTagName('img');
  for (var i = 0; i < cards.length; i++) {
    cards[i].setAttribute('src', "images/back.png");
  }
}

document.getElementsByName('button')[0].addEventListener('click', resetBoard);
createBoard();
