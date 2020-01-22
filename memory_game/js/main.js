/*variables*/
/*used for the flipCard method*/
let runAgain = true;
let cards = [
  {
  	rank: "Queen",
  	suit: "Hearts",
  	cardImage: "images/queen-of-hearts.png"
  },
  {
  	rank: "Queen",
  	suit: "Diamonds",
  	cardImage: "images/queen-of-diamonds.png"
  },
  {
  	rank: "King",
  	suit: "Diamonds",
  	cardImage: "images/king-of-diamonds.png"
  },
  {
  	rank: "King",
  	suit: "Hearts",
  	cardImage: "images/king-of-hearts.png"
  }
]
/*Commands*/
createBoard();
/*Methods*/
Instructions
/**
 * changes the cards image to the front of the card
 * @param img the img tag to change
 */
function flipCard(img)
{
	let cardID = img.getAttribute('data-id');
	console.log("JFDBG:flipCard ran");
	if(runAgain)
	{
		runAgain = false;
		img.setAttribute(cards[cardID].cardImage);
	}
}
/**
 * Determines the winner
 * @param cardA the first card to be evaluated
 * @param cardB the second card to be evaluated
 */
function endGame(cardA, cardB){
	if(cardA === cardB){
		alert("You Win");
	}
	else{
		alert("You lose");
	}
}
/**
 * Creates the img objects and appends to the gameboard div
 * element
 */
function createBoard(){
	for (var i = 0; i < cards.length; i++) {
	  let img = document.createElement('img');
	  img.setAttribute('src', 'images/back.png');
	  img.setAttribute('data-id', i);
	  img.addEventListener('click', flipCard(this));
	  document.getElementById('gameboard').appendChild(img);
    }
}