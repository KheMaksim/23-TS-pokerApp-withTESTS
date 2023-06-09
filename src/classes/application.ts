import * as readlineSync from "readline-sync";
import Deck from "./deck";
import Hand from "./hand";
import Checker from "./checker";

export default class Application {
	public startGame(): void {
		while (true) {
			console.log(`New game started.`);
			const deck = new Deck();
			deck.shuffle();
			console.log(`Deck shuffled.`);
			const hand = new Hand();
			hand.takeCard(deck);
			hand.showCards();
			while (true) {
				const changedCardNumber = readlineSync.question(`Which card do you want to change?\nAnswer (through a space): `);
				const numbers = changedCardNumber.split(' '); if (changedCardNumber === '') {
					console.log(`You don't change anything`);
					hand.showCards();
					break;
				}
				else if (isNaN(parseInt(changedCardNumber)) === true) console.log(`You entered a wrong number`);
				else if (numbers.length === 1) {
					if (parseInt(changedCardNumber) <= 0 || parseInt(changedCardNumber) > 5) console.log(`You entered a wrong number`);
					else {
						hand.changeCard(deck, parseInt(numbers[0]));
						hand.showCards();
					}
				}
				else {
					for (let i = 0; i < numbers.length; i++) {
						if (isNaN(parseInt(numbers[i])) === true) console.log(`You entered a wrong number (${numbers[i]}).`);
						else {
							hand.changeCard(deck, parseInt(numbers[i]));
						}
					}
					hand.showCards();
				}
			}
			const checker = new Checker();
			const points = checker.checkCombination(hand);
			console.log(points);
			let gameover = false
			while (true) {
				const question = readlineSync.question(`Do you want to play again?\n1. Yes\n2. No\nAnswer (number or word): `)
				if (question.toLowerCase() === 'no' || parseInt(question) === 2) {
					console.log(`Game over`);
					gameover = true;
					break;
				}
				else if (question.toLowerCase() === 'yes' || parseInt(question) === 1) break;
				else {
					console.log(`You entered a wrong answer.`);
				}
			}
			if (gameover) break;
		}
	}
}