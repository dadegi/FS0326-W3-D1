// DECLARED FUNCTION

function declaredSum(a, b) {
	return a + b;
}

// EXPREESION FUNCTION
const expressioneSum = function (a, b) {
	return a + b;
};

// ARROW FUNCTION
const arrowSum = (a, b) => a + b; // return implicito se il corpo della funzione è una sola espressione

const arrowSum2 = (a, b) => {
	// arrow function con return esplicito: NON È UN ERRORE
	return a + b;
};

const greeting = (nome) => `Ciao ${nome}`;

console.log(`declared function: ${declaredSum(4, 8)}`);

console.log(`expression function: ${expressioneSum(9, 1)}`);

console.log(`arrow function con return implicito: ${arrowSum(3, 2)}`);

console.log(greeting('Mario'));

const user1 = {
	name: 'Pippo',
	surname: 'Pluto',
	age: 35,
	lapse: function () {
		setTimeout(function () {
			console.log(
				`Ciao, sono ${this.name} ${this.surname} e ho ${this.age}`,
			);
		}, 1000);
	},
};

const user2 = {
	name: 'Pippo',
	surname: 'Pluto',
	age: 35,
	lapse: function () {
		const completeData = () => `${this.name} ${this.surname}`;
		console.log(completeData());
	},
};

user1.lapse();
user2.lapse();

let num1 = 21;
let num2 = 21;
let num3 = 8;

const complexCalculation = {
	firstNumber: num1,
	secondNumber: num2,
	thirdNumber: num3,
	crazySum: function () {
		let thisSum;
		const calculate = () => {
			if (num1 > 20) {
				thisSum =
					(this.firstNumber + this.secondNumber) * this.thirdNumber;
			} else {
				thisSum =
					(this.firstNumber - this.secondNumber) * this.thirdNumber;
			}
			return Math.abs(thisSum);
		};
		console.log(calculate());
	},
};

complexCalculation.crazySum();
