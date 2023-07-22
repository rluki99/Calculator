const btns = document.querySelectorAll('.btn');
const display = document.querySelector('.display');

let currentInputArray = [];
let result = null;
let operator = null;
let secondNumber = null;
let firstNumber = 0;

const calculate = (btn) => {
	if (btn.value === 'AC') {
		resetCalculator();
	} else if (btn.value === 'CE') {
		handleCE();
	} else if (btn.value === '=') {
		setEqual();
	} else if (btn.classList.contains('btn-number')) {
		handleNumber(btn);
	} else {
		handleOperator(btn);
	}
};

const resetCalculator = () => {
	currentInputArray = [];
	firstNumber = null;
	secondNumber = null;
	result = null;
	operator = null;
	display.textContent = '.';
};

const handleCE = () => {
	currentInputArray.pop();
	const tempCE = currentInputArray.join('');
	if (!operator && !result) {
		firstNumber = parseFloat(tempCE);
		console.log(`${firstNumber} first number after CE`);
		display.textContent = firstNumber;
	} else {
		secondNumber = parseFloat(tempCE);
		if (isNaN(secondNumber)) {
			secondNumber = 0;
		}
		console.log(`${secondNumber} second number after CE`);
		display.textContent = secondNumber;
	}
};

const handleNumber = (btn) => {
	if (!operator && !result) {
		currentInputArray.push(btn.value);
		let joinedFirstNumber = currentInputArray.join('');
		firstNumber = parseFloat(joinedFirstNumber);
		display.textContent = firstNumber;
		console.log(`${firstNumber} first number`);
	} else {
		currentInputArray.push(btn.value);
		let joinedSecondNumber = currentInputArray.join('');
		secondNumber = parseFloat(joinedSecondNumber);
		display.textContent = secondNumber;
		console.log(`${secondNumber} second number`);
	}
};

const handleOperator = (btn) => {
	if (operator) {
		if (!secondNumber) {
			return;
		}
		setEqual();
		operator = btn.value;
		console.log(`${operator} operator existed`);
		return;
	}
	display.textContent = btn.value;
	operator = btn.value;
	currentInputArray = [];
	console.log(`${operator} operator`);
};

const setEqual = () => {
	switch (operator) {
		case '+':
			result = firstNumber + secondNumber;
			break;
		case '-':
			result = firstNumber - secondNumber;
			break;
		case '*':
			result = firstNumber * secondNumber;
			break;
		case '/':
			if (secondNumber === 0) {
				currentInputArray = [];
				firstNumber = null;
				secondNumber = null;
				result = null;
				operator = null;
				return (display.textContent = 'DIVIDED BY 0');
			}
			result = firstNumber / secondNumber;
			break;
		default:
			break;
	}
	result = parseFloat(result.toFixed(10));
	firstNumber = result;
	secondNumber = null;
	operator = null;
	currentInputArray = [];
	display.textContent = result;
	console.log(`${result} result number`);
};

btns.forEach((btn) => {
	btn.addEventListener('click', () => calculate(btn));
});
