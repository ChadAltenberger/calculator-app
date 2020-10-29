const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUsrNumInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // From vendor.js
}

function add() {
  const enteredNum = getUsrNumInput();
  const initialResult = currentResult;
  currentResult += enteredNum;
  createAndWriteOutput('+', initialResult, enteredNum);
  const logEntry = {
    operation: 'ADD',
    prevResult: initialResult,
    number: enteredNum,
    result: currentResult
  };
  logEntries.push(logEntry); // Adds each entry object to the array
  console.log(logEntries); // Logs the entire array of objects
}

function subtract() {
  const enteredNum = getUsrNumInput();
  const initialResult = currentResult;
  currentResult -= enteredNum;
  createAndWriteOutput('-', initialResult, enteredNum);
}

function multiply() {
  const enteredNum = getUsrNumInput();
  const initialResult = currentResult;
  currentResult *= enteredNum;
  createAndWriteOutput('*', initialResult, enteredNum);
}

function divide() {
  const enteredNum = getUsrNumInput();
  const initialResult = currentResult;
  currentResult /= enteredNum;
  createAndWriteOutput('/', initialResult, enteredNum);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
