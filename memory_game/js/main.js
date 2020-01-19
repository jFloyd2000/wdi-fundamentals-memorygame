let cards = ["Queen of Hearts", "Queen of Diamonds", "King of Hearts", "King of Diamonds"];
let cardsInPlay = [];
let cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User filpped " + cardsInPlay[0]);
let cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("User filpped " + cardsInPlay[1]);
if(cardsInPlay.length === 2){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match")
	}
	else{
		alert("You didn't find a match")
	}
}
