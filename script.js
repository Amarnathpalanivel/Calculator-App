let currentInput = '';
let operator = '';
let previousInput = '';

const display = document.getElementById('display');

function clearDisplay() {
  currentInput = '';
  operator = '';
  previousInput = '';
  display.value = '';
}

function appendNumber(number) {
  currentInput += number;
  display.value = currentInput;
  display.value = previousInput + ' ' + operator + ' ' + currentInput;
}

function setOperation(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculateResult();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '';
  display.value = previousInput + ' ' + operator;
}

function calculateResult() {
  if (currentInput === '' || previousInput === '') return;
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }
  display.value = result;
  currentInput = result.toString();
  operator = '';
  previousInput = '';
}
