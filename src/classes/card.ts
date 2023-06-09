export default class Card {
	public rank: string = '';
	public suit: string = '';
	public value: number;
	public originalSerialNumber!: number;
	public serialNumber!: number;
	constructor(rank: string, suit: string, value: number) {
		this.rank = rank;
		this.suit = suit;
		this.value = value;
	}
	showInfo(): void {
		console.log(`${this.serialNumber}. ${this.rank}${this.suit} (value: ${this.value}).`);
	}
}
