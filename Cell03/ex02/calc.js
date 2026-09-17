const form = document.getElementById("calc-form");
const leftInput = document.getElementById("left");
const operatorSelect = document.getElementById("operator");
const rightInput = document.getElementById("right");

function isPositiveInteger(value) {
	if (value === "") {
		return false;
	}
	const number = Number(value);
	return Number.isInteger(number) && number >= 0;
}

function calculate(left, operator, right) {
	switch (operator) {
		case "+":
			return left + right;
		case "-":
			return left - right;
		case "*":
			return left * right;
		case "/":
			return left / right;
		case "%":
			return left % right;
	}
}

form.addEventListener("submit", function (event) {
	event.preventDefault();

	const leftValue = leftInput.value;
	const rightValue = rightInput.value;
	const operator = operatorSelect.value;

	if (!isPositiveInteger(leftValue) || !isPositiveInteger(rightValue)) {
		alert("Error :(");
		return;
	}

	const left = parseInt(leftValue, 10);
	const right = parseInt(rightValue, 10);

	if ((operator === "/" || operator === "%") && right === 0) {
		alert("It's over 9000!");
		return;
	}

	const result = calculate(left, operator, right);

	console.log(result);
	alert(result);
});

setInterval(function () {
	alert("Please, use me...");
}, 30000);