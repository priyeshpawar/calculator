const defaultResult = 0;
var currentResult = defaultResult;
var logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, userInputNum) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${userInputNum}`;
    outputResult(currentResult, calcDescription);
}

function saveUserInputLogs(
    operator,
    resultBeforeCalc,
    userInputNum,
    currentResult
) {
    const logEntry = {
        operator: operator,
        resultBeforeCalc: resultBeforeCalc,
        userInputNum: userInputNum,
        currentResult: currentResult,
    };

    logEntries.push(logEntry);
    console.log(logEntry.operator);
    console.log(logEntries[logEntries]);
}

function add() {
    const resultBeforeCalc = currentResult;
    currentResult = currentResult + getUserNumberInput();
    // currentResult = currentResult + +userInput.value;
    createAndWriteOutput("+", resultBeforeCalc, getUserNumberInput());
    saveUserInputLogs(
        "ADD",
        resultBeforeCalc,
        getUserNumberInput(),
        currentResult
    );
}

function substract() {
    const resultBeforeCalc = currentResult;
    currentResult = currentResult - getUserNumberInput();
    createAndWriteOutput("-", resultBeforeCalc, getUserNumberInput());
    saveUserInputLogs(
        "SUBSTRACT",
        resultBeforeCalc,
        getUserNumberInput(),
        currentResult
    );
}

function multiply() {
    const resultBeforeCalc = currentResult;
    currentResult = currentResult * getUserNumberInput();
    createAndWriteOutput("*", resultBeforeCalc, getUserNumberInput());
    saveUserInputLogs(
        "MULTIPLY",
        resultBeforeCalc,
        getUserNumberInput(),
        currentResult
    );
}

function division() {
    const resultBeforeCalc = currentResult;
    currentResult = currentResult / getUserNumberInput();
    createAndWriteOutput("/", resultBeforeCalc, getUserNumberInput());
    saveUserInputLogs(
        "DIVISION",
        resultBeforeCalc,
        getUserNumberInput(),
        currentResult
    );
}

addBtn.addEventListener("click", add);

subtractBtn.addEventListener("click", substract);

multiplyBtn.addEventListener("click", multiply);

divideBtn.addEventListener("click", division);
