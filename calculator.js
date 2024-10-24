let inputEl = document.getElementById("input"); // Display element.
let inputArray = []; // Store numbers.
let operatorsArr = []; // Store operators.
let inputNum = ""; // Current number input.
let sqrtClicked = false; // Flag for sqrt operation.

/* Handle addition */
function add() {
    if (!inputNum.endsWith(".")){
        operatorsArr.push("+"); // Add "+" operator.
        if (!isNaN(parseFloat(inputNum))) {
            inputArray.push(parseFloat(inputNum));
        } // Add current number.
        inputNum = ""; // Reset current number.
        inputEl.textContent += "  +  "; // Display "+".
    }
    else {
        inputEl.textContent = "  error  ";
    }
}

/* Handle subtraction */
function subtract() {
    if (!inputNum.endsWith(".")){
        if (inputArray.length === 0) {
            inputNum += "-"; // Handle negative number.
            inputEl.textContent += "  -  ";
        } 
        else {
            operatorsArr.push("-"); // Add "-" operator.
            if (!isNaN(parseFloat(inputNum))) {
                inputArray.push(parseFloat(inputNum));
            } // Add current number.
            inputNum = ""; // Reset current number.
            inputEl.textContent += "  -  "; // Display "-".
        }
    }
    else {
        inputEl.textContent = "  error  ";
    }
}

/* Handle multiplication */
function multiply() {
    if (!inputNum.endsWith(".")){
        operatorsArr.push("x"); // Add "x" operator.
        if (!isNaN(parseFloat(inputNum))) {
            inputArray.push(parseFloat(inputNum));
        } // Add current number.
        inputNum = ""; // Reset current number.
        inputEl.textContent += "  x  "; // Display "x".
    }
    else {
        inputEl.textContent = "  error  ";
    }
}

/* Handle division */
function divide() {
    if (!inputNum.endsWith(".")){
        operatorsArr.push("/"); // Add "/" operator.
        if (!isNaN(parseFloat(inputNum))) {
            inputArray.push(parseFloat(inputNum));
        } // Add current number.
        inputNum = ""; // Reset current number.
        inputEl.textContent += "  /  "; // Display "/".
    }
    else {
        inputEl.textContent = "  error  ";
    }
}

/* Handle number inputs */
function one() { inputNum += "1"; inputEl.textContent += "1"; }
function two() { inputNum += "2"; inputEl.textContent += "2"; }
function three() { inputNum += "3"; inputEl.textContent += "3"; }
function four() { inputNum += "4"; inputEl.textContent += "4"; }
function five() { inputNum += "5"; inputEl.textContent += "5"; }
function six() { inputNum += "6"; inputEl.textContent += "6"; }
function seven() { inputNum += "7"; inputEl.textContent += "7"; }
function eight() { inputNum += "8"; inputEl.textContent += "8"; }
function nine() { inputNum += "9"; inputEl.textContent += "9"; }
function zero() { inputNum += "0"; inputEl.textContent += "0"; }

function pi() {
    operatorsArr.push("x"); // Add "x" operator.
    if (!isNaN(parseFloat(inputNum))) {
        inputArray.push(parseFloat(inputNum));
    } // Add current number.
    inputNum = "3.14159265359"; // Set pi value.
    inputEl.textContent += "π"; // Display pi symbol.
}

function dot() { 
    if (!inputNum.includes(".")) {
        inputNum += ".";
        inputEl.textContent += ".";
    } 
}

/* Reset the calculator */
function restart() {
    inputEl.textContent = ""; // Clear display.
    inputNum = ""; // Reset current number.
    inputArray = []; // Clear numbers.
    operatorsArr = []; // Clear operators.
}

/* Calculate the result */
function equals() {
    if (!isNaN(parseFloat(inputNum))) {
        inputArray.push(parseFloat(inputNum));
    } // Add last number.

    // Check for input/operator mismatch
    if (operatorsArr.length >= inputArray.length) {
        inputArray = []; operatorsArr = [];
        inputEl.textContent = "error";
        return;
    }

    let result = 0;

    // Handle multiplication/division first
    for (let i = 0; i < operatorsArr.length; i++) {
        if (operatorsArr[i] === "x" || operatorsArr[i] === "/") {
            if (operatorsArr[i] === "x") {
                result = inputArray[i] * inputArray[i + 1]; // Multiply
            } else {
                if (inputArray[i + 1] == 0) {
                    inputEl.textContent = "undefined"; // Div by zero
                    return;
                }
                result = inputArray[i] / inputArray[i + 1]; // Divide
            }
            inputArray.splice(i, 2, result); // Replace operands with result.
            operatorsArr.splice(i, 1); // Remove operator.
            i--; // Adjust index.
        }
    }

    // Handle addition/subtraction
    for (let i = 0; i < operatorsArr.length; i++) {
        if (operatorsArr[i] === "+" || operatorsArr[i] === "-") {
            result = operatorsArr[i] === "+" 
                ? inputArray[i] + inputArray[i + 1] 
                : inputArray[i] - inputArray[i + 1]; // Add/Subtract
            inputArray.splice(i, 2, result); // Replace operands.
            operatorsArr.splice(i, 1); // Remove operator.
            i--; // Adjust index.
        }
    }

    result = inputArray[0]; // Final result.

    // Display result or error
    inputEl.textContent = isNaN(result) ? "null" : result.toString();

    // Reset after calculation
    inputArray = []; 
    operatorsArr = []; 
    inputNum = "";
}