
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

var newDeck = function() {
	// loops if i is less than 16
    for (var i=0; i < 16; i++){

    	//Math.random() - gives you a random decimal number. Math.floor() truncates the decimal number to only the integer portion (0 - card.length)
        randomNumber = Math.floor(Math.random() * cards.length);

		//removes randomNumber value from cards array, pushes changed values into cards array
        cards.push(cards.splice(randomNumber, 1)[0]);
    }
};

var createBoard = function() {

	//for loop for cards array
	for (var i = 0; i < cards.length; i++) {

		// creates image element 
		var cardElement = document.createElement('img');

		//sets attributes for cardElement
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);

		// adds event listener - when clicked, runs flipcard method call
		cardElement.addEventListener('click', flipCard);

		// appends cards to board using ID
		document.getElementById("game-board").appendChild(cardElement);

        newDeck();
	}

};

var resetButton = function(){

    cardsInPlay = [];
    //assigns image elements from DOM to variable
    var getCardElements = document.getElementsByTagName("img");

    // loop for Dom images
    for ( i = 0; i < getCardElements.length; i++){
        //sets attributes for getCardElement
        getCardElements[i].setAttribute("src", "images/back.png");
    }
    newDeck();

};

// method call to start game 
createBoard();



