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

// Log each operation to an array
function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry); // Adds each entry object to the array
  console.log(logEntries); // Logs the entire array of objects
}

function add() {
  const enteredNum = getUsrNumInput();
  const initialResult = currentResult;
  currentResult += enteredNum;
  createAndWriteOutput('+', initialResult, enteredNum);
  writeToLog('ADD', initialResult, enteredNum, currentResult);
}

function subtract() {
  const enteredNum = getUsrNumInput();
  const initialResult = currentResult;
  currentResult -= enteredNum;
  createAndWriteOutput('-', initialResult, enteredNum);
  writeToLog('SUBTRACT', initialResult, enteredNum, currentResult);
}

function multiply() {
  const enteredNum = getUsrNumInput();
  const initialResult = currentResult;
  currentResult *= enteredNum;
  createAndWriteOutput('*', initialResult, enteredNum);
  writeToLog('MULTIPLY', initialResult, enteredNum, currentResult);
}

function divide() {
  const enteredNum = getUsrNumInput();
  const initialResult = currentResult;
  currentResult /= enteredNum;
  createAndWriteOutput('/', initialResult, enteredNum);
  writeToLog('DIVIDE', initialResult, enteredNum, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
