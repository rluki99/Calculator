// const numberBtns = document.querySelectorAll('.btn-number')
// const operatorBtns = document.querySelectorAll('.btn-operator')
const btns = document.querySelectorAll('.btn')
const display = document.querySelector('.display')
// const acBtn = document.querySelector('#AC')
// const ceBtn = document.querySelector('#CE')
// const equalBtn = document.querySelector('.btn-equal')
// const lastScreen = document.querySelector('.screen-last')
// const currentScreen = document.querySelector('.screen-current')

let calculation = []
let accuCalculation
let result

const calculate = btn => {
	if (btn.value === 'AC') {
		calculation = []
		display.textContent = '.'
	} else if (btn.value === 'CE') {
		calculation.pop()
		display.textContent = calculation.join('')
	} else if (btn.value === '=') {
		console.log(accuCalculation)
		result = eval(accuCalculation)
		display.textContent = result
		accuCalculation = result
		calculation = [result]
	} else {
		calculation.push(btn.value)
		accuCalculation = calculation.join('')
		display.textContent = accuCalculation
	}
}

// const add = (a, b) => {
// 	return a + b
// }

// const substract = (a,b) => {
// 	return a - b
// }

// const multiplay = (a,b) => {
// 	return a * b
// }

// const divide = (a,b) => {
// 	if (b === 0) {
// 		console.log('error');
// 		return
// 	}
// 	return a/b
// }

const calculateResults = calcArray => {
	let result = 0
	let currentOperator = null

	calcArray.forEach(data => {
		if (typeof data === 'number') {
			if (currentOperator) {
				switch (currentOperator) {
					case '+':
						result = add(result, data)
						break
					case '-':
						result = substract(result, data)
						break
					case '*':
						result = multiplay(result, data)
						break
					case '/':
						result = divide(result, data)
						break
					default:
						console.log('unknow operator');
					
				}
				currentOperator = null
			} else {
				result = data
			}
		} else if (typeof data === 'string') {
			currentOperator = data
		} else {
			console.log('unknow type of data');
		}
	})
	return result
}
btns.forEach(btn => {
	btn.addEventListener('click', () => calculate(btn))
})

// let numberValues = []
// let lastValue = 0
// let tempValues = []

// const operatorMap = {
// 	'+': (a, b) => a + b,
// 	'-': (a, b) => a - b,
// 	'*': (a, b) => a * b,
// 	'/': (a, b) => a / b,
// };

// btns.forEach(btn => {
// 	btn.addEventListener('click', e => {
// 		const clickedValue = e.target.value
// 		let currentValue = numberValues.join('')

// 		if (clickedValue === 'AC') {
// 			clearAll()
// 		} else if (clickedValue === 'CE') {
// 			clearLast()
// 		} else if (clickedValue === '=') {
// 			console.log(numberValues)
// 		} else if (btn.classList.contains('btn-number')) {
// 			typeNumber(clickedValue)
// 		} else if (btn.classList.contains('btn-operator')) {
// 			if (parseInt(lastValue) !== 0) {
// 				const count = parseFloat(lastValue) - parseFloat(currentValue)
// 				console.log(parseFloat(`${lastValue} lastValue`));
// 				console.log(parseFloat(`${currentValue} currentValue`));
// 				console.log(`${count} count`);
// 				lastValue = count
// 				lastScreen.textContent = count + clickedValue
// 				currentScreen.textContent = count
// 			} else {
//                 const count = parseFloat(currentValue)
// 				lastValue = count
// 				lastScreen.textContent = count + clickedValue
//             }

// 			numberValues = []
// 		}
// 	})
// })

// const clearAll = () => {
// 	numberValues = []
// 	lastScreen.textContent = ''
// 	currentScreen.textContent = '0'
// 	lastValue = 0
// }

// const clearLast = () => {
// 	numberValues.pop()
// 	currentScreen.textContent = numberValues.join('')
// 	if (numberValues.length === 0) {
// 		currentScreen.textContent = '0'
// 	}
// }

// const typeNumber = clickedValue => {
// 	numberValues.push(clickedValue)
// 	currentScreen.textContent = numberValues.join('')
// }
