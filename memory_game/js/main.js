let cardsInPlay = [];
let ids = ["cardOne", "cardTwo", "cardThree", "cardFour"];
let cards = [
  {
  	rank: "Queen",
  	suit: "Hearts"
  },
  {
  	rank: "Queen",
  	suit: "Diamonds"
  },
  {
  	rank: "King",
  	suit: "Diamonds"
  },
  {
  	rank: "King",
  	suit: "Hearts"
  }
]
while(cardsInPlay.length < 4){
	cardsInPlay.push(cards[shuffle(cards.length)]);
}
flipCard(cardsInPlay[0].rank, cardsInPlay[0].suit);
flipCard(cardsInPlay[1].rank, cardsInPlay[1].suit);
endGame(cardsInPlay[0], cardsInPlay[1]);
function shuffle(length){
	return Math.round(Math.random() * (length - 1));
}
function flipCard(rank, suit)
{
	console.log("you flipped over the " + rank + " of " + suit);
}
function endGame(cardA, cardB){
	if(cardA === cardB){
		alert("You Win");
	}
	else{
		alert("You lose");
	}
}



















//DO NOT USE THESE 2 METHODS THEY DO NOT WORK
function reveal(index){
	let src = getSrc(cardsInPlay[index]);
	console.log(src);
	if(src != null){
	    document.getElementById("cardOne").src = "https://cdn.clipart.email/15e26043d4dc82675a7e9ad5d524ec52_angry-man-clipart-159545_271-351.png";//"images/" + src;
    }
}
function getSrc(name){
	let a = "" + name;
	let b = a.split(" ");
	let c = "";
	for (var i = 0; i < b.length - 1; i++) {
		c = c + b[i] + "-";
	console.log(c);
	}
	c = c + b[b.length-1];
	console.log(c);
	c = c.toLowerCase();
	console.log(c);
	c = c + ".png";
	console.log(c);
	return c;
}
