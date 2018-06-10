let suits = [ 'Hearts', 'Clubs', 'Diamonds', 'Spades' ];
let values = [ 'Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 
'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two' ];

function createDeck(){
	let deck = [];
	for ( var suitIdx = 0; suitIdx < suits.length; suitIdx++ ) {
		for ( var valueIdx = 0; valueIdx < values.length; valueIdx++ ){
			let card = {
				suit: suits[suitIdx],
				value: values[valueIdx]
			};
			deck.push(card);
		}
 	}
 	return deck;	
}
function getCardString(card) {
	return card.value + ' of ' + card.suit;
}

function getNextCard(){
	return deck.shift();
}

let deck = createDeck();

let playerCards = [ getNextCard(),getNextCard() ];
    

console.log('Welcome to Black Jack');

console.log('Your hand is: ');
console.log(' ' + getCardString(playerCards[0]) );
console.log(' ' + getCardString(playerCards[1]) );