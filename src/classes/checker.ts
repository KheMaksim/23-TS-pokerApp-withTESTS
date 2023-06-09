import Hand from "./hand";

export default class Checker {
	public ranks: { [key: string]: number } = {
		"2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0, "J": 0, "Q": 0, "K": 0, "A": 0,
	};
	public suits: { [key: string]: number } = {
		"♠️": 0, "♥️": 0, "♦️": 0, "♣️": 0,
	}
	public checkSuits(hand: Hand): void {
		const suitsArr = Object.keys(this.suits);
		for (let i = 0; i < hand.handsCards.length; i++) {
			const card = hand.handsCards[i];
			for (let i = 0; i < suitsArr.length; i++) {
				if (suitsArr[i] === card.suit) this.suits[suitsArr[i]]++;
			}
		}
	}
	public checkRanks(hand: Hand): void {
		const ranksArr = Object.keys(this.ranks);
		for (let i = 0; i < hand.handsCards.length; i++) {
			const card = hand.handsCards[i];
			for (let i = 0; i < ranksArr.length; i++) {
				if (ranksArr[i] === card.rank) this.ranks[ranksArr[i]]++;
			}
		}
	}
	public checkStraight(hand: Hand): boolean {
		let isStraight = true;
		for (let i = 0; i < hand.handsCards.length - 1; i++) {
			if (hand.handsCards[i].value - hand.handsCards[i + 1].value !== 1) {
				isStraight = false;
				break;
			}
		}
		return isStraight;
	}
	public checkCombination(hand: Hand): string {
		this.checkSuits(hand);
		this.checkRanks(hand);
		const sameSuits = Object.values(this.suits);
		const sameRanks = Object.values(this.ranks);
		if (sameSuits.includes(5) && sameRanks[12] === 1 && this.checkStraight(hand) === true) {
			return `Points: 10. Royal flush.`
		}
		if (sameSuits.includes(5) && this.checkStraight(hand) === true) {
			return `Points: 9. Straight flush.`
		}
		if (sameRanks.includes(4)) {
			return `Points: 8. Four of a kind.`
		}
		if (sameRanks.includes(3) && sameRanks.includes(2)) {
			return `Points: 7. Full house.`
		}
		if (sameSuits.includes(5)) {
			return `Points: 6. Flush.`
		}
		if (this.checkStraight(hand) === true) {
			return `Points: 5. Straight.`
		}
		if (sameRanks.includes(3)) {
			return `Points: 4. Three of a kind.`
		}
		if (sameRanks.filter((count) => count === 2).length === 2) {
			return `Points: 3. Two pair.`
		}
		if (sameRanks.includes(2)) {
			return `Points: 2. Pair.`
		}
		return `Points: 1. High card.`
	}
}