
// variable array 
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
	suit: 'hearts',
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: 'diamonds',
	cardImage: "images/king-of-diamonds.png"
},

];

var cardsInPlay = [];

//function - checks for match and displays alert
var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match");
       
    } else {
        alert("Sorry, try again.");
        
    }
};

//function for flipcard
var flipCard = function() {
	//assigns user's clicks to variable
	var cardId = this.getAttribute('data-id');

	// randomises cards array
	// 0.5 - Math.random() - returns random numbers roughly 50% negative and 50% positive.

	cards.sort(function(a, b){return 0.5 - Math.random()});

	// pushes user's .rank selection into cardsinplay
    cardsInPlay.push(cards[cardId].rank);

    // displays image and suit
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);

    // displays card image
    this.setAttribute('src', cards[cardId].cardImage);

	// checks if 2 cards have been selected. If yes, checks for match
    if (cardsInPlay.length === 2) {
        checkForMatch();
    }
    
};


var createBoard = function() {
	
	//for loop for cards array
	for (var i = 0; i < cards.length; i++) {

		// creates image element 
		var cardElement = document.createElement('img');

		//sets attibutes for cardElement 
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);

		// adds event listener - when clicked, runs flipcard method call
		cardElement.addEventListener('click', flipCard);

		// appends cards to board using ID
		document.getElementById("game-board").appendChild(cardElement);
	}

};

// method call to start game 
createBoard();



