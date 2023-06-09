import Card from "./card";
import Deck from "./deck";

export default class Hand {
	public handsCards: Card[] = [];
	public takeCard(deck: Deck): void {
		if (this.handsCards.length > 4) {
			console.log(`Your hand is full.`);
			return;
		}
		else {
			for (let i = 0; i < 5; i++) {
				deck.takeCard();
				this.handsCards = Array.from(deck.takenCards);
				this.handsCards.sort((a: Card, b: Card) => b.value - a.value);
			}
			for (let i = 0; i < this.handsCards.length; i++) {
				const card = this.handsCards[i];
				card.serialNumber = i + 1;
			}
		}
		for (let i = 0; i < this.handsCards.length; i++) {
			const card = this.handsCards[i];
			card.originalSerialNumber = card.serialNumber;
		}
	}
	public showCards(): void {
		if (this.handsCards.length <= 0) {
			console.log(`Your hand is empty.`);
		} else {
			const sortedCards = [...this.handsCards];
			sortedCards.sort((a: Card, b: Card) => b.value - a.value);
			for (let i = 0; i < sortedCards.length; i++) {
				const card = sortedCards[i];
				card.serialNumber = i + 1;
				const originalCard = this.handsCards.find(
					(c) => c.originalSerialNumber === card.originalSerialNumber
				);
				if (originalCard) {
					originalCard.serialNumber = card.serialNumber;
				}
			}
			for (let i = 0; i < this.handsCards.length; i++) {
				const card = this.handsCards[i];
				card.showInfo();
			}
		}
	}
	public changeCard(deck: Deck, number: number): void {
		const index = number - 1;
		const removedCard = this.handsCards.splice(index, 1)[0];
		deck.takeCard();
		const takenCard = deck.takenCards[deck.takenCards.length - 1];
		deck.cards.splice(deck.cards.indexOf(takenCard), 1);
		this.handsCards.splice(index, 0, takenCard);
		deck.takenCards[deck.takenCards.length - 1] = removedCard;

		this.handsCards.forEach((card, index) => {
			card.serialNumber = index + 1;
		});
		this.handsCards.sort((a: Card, b: Card) => b.value - a.value);
	}
}