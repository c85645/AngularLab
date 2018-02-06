let deck = {
	suits : ["hearts", "spades", "clubs", "diamonds"],
	cards : Array(52),
	createCardPicker: function(){
		// 傳統解決方式為另外指定this
		// let self = this;
		// return function() {
		// 	let pickedCard = Math.floor(Math.random() * 52);
		// 	let pickedSuit = Math.floor(pickedCard / 13);
		// 	return {suit: self.suits[pickedSuit], card: pickedCard % 13};
		// }

		// 用胖箭頭指定
		return () => {
			let pickedCard = Math.floor(Math.random() * 52);
			let pickedSuit = Math.floor(pickedCard / 13);
			return {suit: this.suits[pickedSuit], card: pickedCard % 13};
		}
	}
};


let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);