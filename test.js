let result = 0; // Initialize the result variable.
let operatorsArr = ["-", "/", "x"];
let inputArray = [10, 20, 5, 2];

// First, handle multiplication and division
for (let i = 0; i < operatorsArr.length; i++) {
    if (operatorsArr[i] === "x" || operatorsArr[i] === "/") {
        if (operatorsArr[i] === "x") {
            result = inputArray[i] * inputArray[i + 1];
        } 
        else {
            if (inputArray[i + 1] == 0){
                console.log("undefined");
                break;
            }
            result = inputArray[i] / inputArray[i + 1];
        }
        // Replace the two operands with the result in inputArray
        inputArray.splice(i, 2, result);
        // Remove the operator as well from operatorsArr
        operatorsArr.splice(i, 1);
        // Decrement i to stay at the current position after splice
        i--;
    }
}

// Now, handle addition and subtraction
for (let i = 0; i < operatorsArr.length; i++) {
    if (operatorsArr[i] === "+" || operatorsArr[i] === "-") {
        if (operatorsArr[i] === "+") {
            result = inputArray[i] + inputArray[i + 1];
        } else {
            result = inputArray[i] - inputArray[i + 1];
        }
        // Replace the two operands with the result in inputArray
        inputArray.splice(i, 2, result);
        // Remove the operator from operatorsArr
        operatorsArr.splice(i, 1);
        // Decrement i to stay at the current position after splice
        i--;
    }
}

// Final result is the only remaining element in the inputArray
console.log(inputArray[0]); // Output the final result