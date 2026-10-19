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
		setTimeout(() => {
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

const person = {
	userName: 'Mario',
	age: 30,
};
const { userName, age } = person;
console.log(userName); // Destrutturando così l'oggetto, le chiavi dell'oggetto diventano variabili a sé stanti, quindi non possono più essere ridichiarate

const nameUser = document.querySelector('#nameUser');
const ageUser = document.querySelector('#ageUser');

nameUser.textContent += userName;
ageUser.textContent += `${age} anni`;

const colors = ['rosso', 'verde', 'blu'];
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor, secondColor, thirdColor); // Stessa cosa per gli array, molto meno usato

const product = {
	prodName: 'Monitor',
	prodPrice: 210,
};

const details = ({ prodName, prodPrice }, distribution) => {
	console.log(
		`Il prodotto ${prodName} costa ${prodPrice} ed è distribuito da ${distribution}`,
	);
};

details(product, 'Euronics');

const myObject = document.querySelector('#myObject');
myObject.textContent = `${product.prodName} - € ${product.prodPrice}`;

const newColors = [...colors, 'nero'];
console.log(colors, newColors);

const numbers1 = [1, 3, 5];
const numbers2 = [2, 4, 6];

const numbers3 = [];
numbers3.push(numbers1, numbers2);
console.log(numbers3); // [[1, 3, 5], [2, 4, 6]]

const numbers4 = [...numbers1, ...numbers2];
console.log(numbers4); // [1, 3, 5, 2, 4, 6]

const numbers5 = [3, 6, 9];
numbers5.splice(numbers5.length, 0, ...numbers1);
console.log(numbers5);

const mySchool = {
	schoolName: 'Epicode',
	course: 'FS0326',
	duration: 6,
};

const newSchool = { ...mySchool }; // shallow copy (copia di primo livello) di un oggetto: vale solo per gli oggetti senza annidamenti
newSchool.duration = 12;
console.log(
	`duration mySchool: ${mySchool.duration}, duration newSchool: ${newSchool.duration}`,
);

const firstPerson = {
	userName: 'Paolino Paperino',
	address: {
		street: 'via Paperino',
		city: 'Paperopoli',
	},
};

const secondPerson = structuredClone(firstPerson); // Per creare copie di oggetti con annidamenti
secondPerson.address.street = 'via Nessuno';

console.log(firstPerson, secondPerson);

const restSum = (stringa, ...numbers) => {
	let myTotal = 0;
	for (let i = 0; i < numbers.length; i++) {
		myTotal += numbers[i];
	}
	return `${stringa} ${myTotal}`;
};

console.log(restSum('La somma è', 2, 6, 4));
console.log(restSum('La somma è', 9, 2));
console.log(restSum('La somma è', 12));
console.log(restSum('La somma è', 8, 2, 4, 3));
