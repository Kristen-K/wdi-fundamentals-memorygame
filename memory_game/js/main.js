

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function() {
if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}

};


var flipcard = function(cardId){
 var checkLength = function(){
  if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
  } else {
  	alert("Sorry, try again");
  }
}
checkForMatch();

console.log("User flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);

checkLength();

};

flipcard(0)
flipcard(2)
