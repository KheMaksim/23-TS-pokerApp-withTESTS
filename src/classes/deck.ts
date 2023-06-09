import random from "../functions/random";
import Card from "./card";

export default class Deck {
	public cards: Card[] = [];
	public takenCards: Card[] = [];
	public ranks: string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
	public suits: string[] = ["♠️", "♥️", "♦️", "♣️"];
	public values: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
	constructor() {
		for (let i = 0; i < this.ranks.length; i++) {
			for (let j = 0; j < this.suits.length; j++) {
				const card = new Card(this.ranks[i], this.suits[j], this.values[i]);
				this.cards.push(card);
			}
		}
	}
	public takeCard(): void {
		const randomNumber = random(0, this.cards.length - 1);
		const takenCard = this.cards[randomNumber];
		if (this.cards.length <= 0) {
			console.log(`Cards run out`);
		} else {
			for (let i = 0; i < this.takenCards.length; i++) {
				const card = this.takenCards[i];
				if (takenCard.suit === card.suit && takenCard.rank === card.rank) {
					this.takeCard();
					return;
				}
			}
			takenCard.serialNumber = this.takenCards.length + 1;
			this.takenCards.push(takenCard);
			this.cards.splice(randomNumber, 1);
		}
	}
	public shuffle(): void {
		this.cards.sort(() => Math.random() - 0.5);
	}
}