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
    console.log(logEntries);
}

function calculateResult(calcualtionType) {
    if (!getUserNumberInput()) {
        alert("Value cannot be zero, empty or any other character");
        return;
    }

    const resultBeforeCalc = currentResult;
    var calculationTypeSymbol = "";

    if (calcualtionType == ADD) {
        currentResult = currentResult + getUserNumberInput();
        calculationTypeSymbol = "+";
    } else if (calcualtionType == SUBSTRACT) {
        currentResult = currentResult - getUserNumberInput();
        calculationTypeSymbol = "-";
    } else if (calcualtionType == MULTIPLY) {
        currentResult = currentResult * getUserNumberInput();
        calculationTypeSymbol = "*";
    } else if (calcualtionType == DIVISION) {
        currentResult = currentResult / getUserNumberInput();
        calculationTypeSymbol = "/";
    }

    createAndWriteOutput(
        calculationTypeSymbol,
        resultBeforeCalc,
        getUserNumberInput()
    );

    saveUserInputLogs(
        calcualtionType,
        resultBeforeCalc,
        getUserNumberInput(),
        currentResult
    );

    // currentResult = currentResult + +userInput.value;
}

addBtn.addEventListener("click", calculateResult.bind(this, ADD));

subtractBtn.addEventListener("click", calculateResult.bind(this, SUBSTRACT));

multiplyBtn.addEventListener("click", calculateResult.bind(this, MULTIPLY));

divideBtn.addEventListener("click", calculateResult.bind(this, DIVISION));
