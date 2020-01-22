/*variables*/
/*used for the flipCard method*/
let runAgain = true;
let cardsInPlay = [];
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
/**
 * changes the cards image to the front of the card
 * @param img the img tag to change
 */
function flipCard(img)
{
	if(cardsInPlay.length <= 1)
	{
		let cardID = img.getAttribute('data-id');
		img.setAttribute('src', cards[cardID].cardImage);
		cardsInPlay.push(img);
		if(cardsInPlay.length === 2)
		{
			if(cardsInPlay[0].getAttribute('data-id') === cardsInPlay[1].getAttribute('data-id'))
			{
				alert("You got a match");
				return;
			}
			alert("You didnt get a match");
		}
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
	for (let i = 0; i < cards.length; i++) {
	  let img = document.createElement('img');
	  img.setAttribute('src', 'images/back.png');
	  img.setAttribute('data-id', i);
	  img.addEventListener('click', flipCard(img));
	  document.getElementById('gameboard').appendChild(img);
    }
}