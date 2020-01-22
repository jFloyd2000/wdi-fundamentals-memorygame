/*variables*/
/*used for the flipCard method*/
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
 * and determines the winner if 
 */
function flipCard()
{
	if(cardsInPlay.length <= 1)
	{
		let cardID = this.getAttribute('data-id');
		this.setAttribute('src', cards[cardID].cardImage);
		cardsInPlay.push(this);
		if(cardsInPlay.length === 2)
		{
			if(cardsInPlay[0].getAttribute('data-id') === cardsInPlay[1].getAttribute('data-id'))
			{
				alert("You got a match");
				return;
			}
			else
			{
			  alert("You didnt get a match");
			}
		}
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
	  let a = Math.floor(Math.random() * 4);
	  img.setAttribute('data-id', a);
	  img.addEventListener('click', flipCard);
	  document.getElementById('gameboard').appendChild(img);
    }
}