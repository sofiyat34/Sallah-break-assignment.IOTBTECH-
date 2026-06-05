JavaScript

// Pure Functions
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
};

const squareRoot = (num) => {
    if (num < 0) {
        throw new Error(
            "Cannot calculate square root of a negative number"
        );
    }
    return Math.sqrt(num);
};

const power = (base, exponent) => Math.pow(base, exponent);

const factorial = (num) => {
    if (num < 0) {
        throw new Error(
            "Factorial is not defined for negative numbers"
        );
    }

    let result = 1;

    for (let i = 2; i <= num; i++) {
        result *= i;
    }

    return result;
};

// Higher-Order Function
const calculate = (operation) => {
    return (...args) => operation(...args);
};

// UI Function
function performCalculation() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const operation =
        document.getElementById("operation").value;

    const resultDisplay =
        document.getElementById("result");

    try {
        let result;

        switch (operation) {
            case "add":
                result = calculate(add)(num1, num2);
                break;

            case "subtract":
                result = calculate(subtract)(num1, num2);
                break;

            case "multiply":
                result = calculate(multiply)(num1, num2);
                break;

            case "divide":
                result = calculate(divide)(num1, num2);
                break;

            case "sqrt":
                result = calculate(squareRoot)(num1);
                break;

            case "power":
                result = calculate(power)(num1, num2);
                break;

            case "factorial":
                result = calculate(factorial)(num1);
                break;

            default:
                throw new Error("Invalid operation");
        }

        resultDisplay.textContent = `Result: ${result}`;
    } catch (error) {
        resultDisplay.textContent =
            `Error: ${error.message}`;
    }
}
