import Card from "../classes/card";
import Hand from "../classes/hand";
import Checker from "../classes/checker";

describe('Checker', () => {
	let hand = new Hand();
	let checker = new Checker();
	beforeEach(() => {
		hand = new Hand();
		checker = new Checker();
	});
	it('should return "Points: 10. Royal flush." for a royal flush hand', () => {
		hand.handsCards = [
			new Card('A', '♠️', 14),
			new Card('K', '♠️', 13),
			new Card('Q', '♠️', 12),
			new Card('J', '♠️', 11),
			new Card('10', '♠️', 10),
		];
		const result = checker.checkCombination(hand);
		expect(result).toBe('Points: 10. Royal flush.');
	});
	it('should return "Points: 9. Straight flush." for a straight flush hand', () => {
		hand.handsCards = [
			new Card('Q', '♥️', 12),
			new Card('J', '♥️', 11),
			new Card('10', '♥️', 10),
			new Card('9', '♥️', 9),
			new Card('8', '♥️', 8),
		];
		const result = checker.checkCombination(hand);
		expect(result).toBe('Points: 9. Straight flush.');
	});
	it('should return "Points: 8. Four of a kind." for a four of a kind hand', () => {
		hand.handsCards = [
			new Card('10', '♠️', 10),
			new Card('6', '♣️', 6),
			new Card('6', '♦️', 6),
			new Card('6', '♠️', 6),
			new Card('6', '♥️', 6),
		];
		const result = checker.checkCombination(hand);
		expect(result).toBe('Points: 8. Four of a kind.');
	});
	it('should return "Points: 7. Full house." for a full house hand', () => {
		hand.handsCards = [
			new Card('K', '♣️', 13),
			new Card('K', '♦️', 13),
			new Card('K', '♠️', 13),
			new Card('Q', '♥️', 12),
			new Card('Q', '♠️', 12),
		];
		const result = checker.checkCombination(hand);
		expect(result).toBe('Points: 7. Full house.');
	});
	it('should return "Points: 6. Flush." for a flush hand', () => {
		hand.handsCards = [
			new Card('A', '♠️', 14),
			new Card('9', '♠️', 9),
			new Card('7', '♠️', 7),
			new Card('5', '♠️', 5),
			new Card('2', '♠️', 2),
		];
		const result = checker.checkCombination(hand);
		expect(result).toBe('Points: 6. Flush.');
	});
	it('should return "Points: 5. Straight." for a straight hand', () => {
		hand.handsCards = [
			new Card('K', '♠️', 13),
			new Card('Q', '♥️', 12),
			new Card('J', '♦️', 11),
			new Card('10', '♠️', 10),
			new Card('9', '♣️', 9),
		];
		const result = checker.checkCombination(hand);
		expect(result).toBe('Points: 5. Straight.');
	});
	it('should return "Points: 4. Three of a kind." for a three of a kind hand', () => {
		hand.handsCards = [
			new Card('9', '♥️', 9),
			new Card('7', '♣️', 7),
			new Card('3', '♣️', 3),
			new Card('3', '♠️', 3),
			new Card('3', '♦️', 3),
		];
		const result = checker.checkCombination(hand);
		expect(result).toBe('Points: 4. Three of a kind.');
	});
	it('should return "Points: 3. Two pair." for a two pair hand', () => {
		hand.handsCards = [
			new Card('K', '♠️', 13),
			new Card('7', '♦️', 7),
			new Card('7', '♣️', 7),
			new Card('4', '♥️', 4),
			new Card('4', '♠️', 4),
		];
		const result = checker.checkCombination(hand);
		expect(result).toBe('Points: 3. Two pair.');
	});
	it('should return "Points: 2. Pair." for a pair hand', () => {
		hand.handsCards = [
			new Card('A', '♥️', 14),
			new Card('Q', '♣️', 12),
			new Card('J', '♠️', 11),
			new Card('9', '♦️', 9),
			new Card('9', '♣️', 9),
		];
		const result = checker.checkCombination(hand);
		expect(result).toBe('Points: 2. Pair.');
	});
	it('should return "Points: 1. High card." for a high card hand', () => {
		hand.handsCards = [
			new Card('K', '♣️', 13),
			new Card('Q', '♠️', 12),
			new Card('J', '♦️', 11),
			new Card('9', '♠️', 9),
			new Card('7', '♥️', 7),
		];
		const result = checker.checkCombination(hand);
		expect(result).toBe('Points: 1. High card.');
	});
});
