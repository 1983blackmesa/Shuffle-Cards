window.onload = function() { //page is loading
	createDeck();
	shuffle();
}

function createDeck() {
	    let VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
		let SUITS = ["C", "D", "H", "S"];
		
		//create deck object
		deck = [];
		
		//go through the deck now
		for(let i =0;i<SUITS.length;i++) {
			
			for(let j=0;j<VALUES.length;j++) {
				deck.push(VALUES[j] + "-" + SUITS[i]);
		}
		
}

}

function shuffle() {
	for(let loc1 = 0; loc1<deck.length;loc1++) {
			let loc2 = Math.floor(Math.random() * deck.length);
		let temp = deck[loc1];
		deck[loc1] = deck[loc2];
		deck[loc2] = temp; //swap
	}
	console.log(deck); //suffle randomly through the cards
}
