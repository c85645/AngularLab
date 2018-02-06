var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        // 傳統解決方式為另外指定this
        // let self = this;
        // return function() {
        // 	let pickedCard = Math.floor(Math.random() * 52);
        // 	let pickedSuit = Math.floor(pickedCard / 13);
        // 	return {suit: self.suits[pickedSuit], card: pickedCard % 13};
        // }
        var _this = this;
        // 用胖箭頭指定
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
