A1 HTML 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scientific Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="calculator">
        <h2>Scientific Calculator</h2>

        <input type="number" id="num1" placeholder="First Number">
        <input type="number" id="num2" placeholder="Second Number (if needed)">

        <select id="operation">
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
            <option value="sqrt">Square Root</option>
            <option value="power">Power</option>
            <option value="factorial">Factorial</option>
        </select>

        <button onclick="performCalculation()">Calculate</button>

        <h3 id="result">Result: </h3>
    </div>

    <script src="script.js"></script>
</body>
</html>

CSS

body {
    font-family: Arial, sans-serif;
    background: #f4f4f4;
    display: flex;
    justify-content: center;
    padding-top: 50px;
}

.calculator {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 320px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
}

h2 {
    text-align: center;
}

input,
select,
button {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    box-sizing: border-box;
}

button {
    cursor: pointer;
    background: #007bff;
    color: white;
    border: none;
}

button:hover {
    background: #0056b3;
}

#result {
    margin-top: 15px;
    color: #333;
}

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

A2 HTML 


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Validation Library</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <h2>Validation Library Tester</h2>

    <input type="text" id="inputValue" placeholder="Enter value">

    <select id="type">
        <option value="email">Email</option>
        <option value="phone">Phone</option>
        <option value="password">Strong Password</option>
        <option value="url">URL</option>
        <option value="date">Date (YYYY-MM-DD)</option>
    </select>

    <button onclick="validateInput()">Validate</button>

    <p id="output"></p>
</div>

<script src="script.js"></script>
</body>
</html>

CSS

body {
    font-family: Arial, sans-serif;
    background: #f2f2f2;
    display: flex;
    justify-content: center;
    padding-top: 60px;
}

.container {
    background: white;
    padding: 20px;
    width: 320px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
}

h2 {
    text-align: center;
}

input, select, button {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
}

button {
    background: #007bff;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background: #0056b3;
}

#output {
    margin-top: 15px;
    font-weight: bold;
}

JavaScript for email 

const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email)
        ? { valid: true, error: null }
        : { valid: false, error: "Invalid email format" };
};

Number

const validatePhone = (phone) => {
    const pattern =
        /^(\+?\d{1,3}[- ]?)?\(?\d{3,4}\)?[- ]?\d{3}[- ]?\d{4}$/;


Password


const validatePassword = (password) => {
    const pattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    return pattern.test(password)
        ? { valid: true, error: null }
        : {
            valid: false,
            error: "Weak password (min 8 chars, upper, lower, number, symbol)"
        };
};
    return pattern.test(phone)
        ? { valid: true, error: null }
        : { valid: false, error: "Invalid phone format" };
};

URL

const validateURL = (url) => {
    const pattern =
        /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w-./?%&=]*)?$/;

    return pattern.test(url)
        ? { valid: true, error: null }
        : { valid: false, error: "Invalid URL format" };
};

Date


const validateDate = (date) => {
    const pattern = /^\d{4}-\d{2}-\d{2}$/;

    if (!pattern.test(date)) {
        return { valid: false, error: "Format must be YYYY-MM-DD" };
    }

    const parsed = new Date(date);

    if (isNaN(parsed.getTime())) {
        return { valid: false, error: "Invalid date value" };
    }

    return { valid: true, error: null };
};
A3 HTML 


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Array Utility Library</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <h2>Array Utility Library Tester</h2>

    <textarea id="inputArray" placeholder="Enter array like: 1,2,3,4"></textarea>

    <select id="operation">
        <option value="map">Map (x2)</option>
        <option value="filter">Filter (even numbers)</option>
        <option value="reduce">Reduce (sum)</option>
        <option value="flat">Flat (depth 2)</option>
    </select>

    <button onclick="runOperation()">Run</button>

    <h3>Result:</h3>
    <div id="output"></div>

    <hr>

    <h3>Debounce / Throttle Demo</h3>

    <input type="text" id="liveInput" placeholder="Type something...">
    <p id="liveOutput"></p>
</div>

<script src="script.js"></script>
</body>
</html>
A3 CSS 

body {
    font-family: Arial, sans-serif;
    background: #eef2f7;
    display: flex;
    justify-content: center;
    padding: 40px;
}

.container {
    background: white;
    width: 400px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
}

h2 {
    text-align: center;
}

textarea {
    width: 100%;
    height: 80px;
    padding: 10px;
    margin-top: 10px;
    resize: none;
}

select, button, input {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
}

button {
    background: #007bff;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background: #0056b3;
}

#output {
    margin-top: 10px;
    padding: 10px;
    background: #f1f1f1;
    min-height: 30px;
}
// ===============================
// ARRAY UTILITY LIBRARY
// No built-in map/filter/reduce/flat used
// ===============================

// 1. CUSTOM MAP
const myMap = (array, callback) => {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result[result.length] = callback(array[i], i, array);
    }

    return result;
};


// 2. CUSTOM FILTER
const myFilter = (array, callback) => {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result[result.length] = array[i];
        }
    }

    return result;
};


// 3. CUSTOM REDUCE
const myReduce = (array, callback, initialValue) => {
    let accumulator = initialValue;
    let startIndex = 0;

    if (accumulator === undefined) {
        accumulator = array[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
};


// 4. CUSTOM FLAT
const myFlat = (array, depth = 1) => {
    const result = [];

    const flatten = (arr, d) => {
        for (let i = 0; i < arr.length; i++) {
            const value = arr[i];

            if (Array.isArray(value) && d > 0) {
                flatten(value, d - 1);
            } else {
                result[result.length] = value;
            }
        }
    };

    flatten(array, depth);
    return result;
};


// ===============================
// DEBOUNCE
// ===============================
const myDebounce = (fn, delay) => {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
};


// ===============================
// THROTTLE
// ===============================
const myThrottle = (fn, limit) => {
    let lastCallTime = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastCallTime >= limit) {
            lastCallTime = now;
            fn.apply(this, args);
        }
    };
};


// ===============================
// TEST CASES (RUN IN CONSOLE)
// ===============================

const numbers = [1, 2, 3, 4, 5];

console.log("MAP x2:");
console.log(myMap(numbers, x => x * 2));
// [2, 4, 6, 8, 10]

console.log("FILTER even:");
console.log(myFilter(numbers, x => x % 2 === 0));
// [2, 4]

console.log("REDUCE sum:");
console.log(myReduce(numbers, (a, b) => a + b, 0));
// 15

console.log("FLAT:");
console.log(myFlat([1, [2, [3, 4]], 5], 2));
// [1, 2, 3, 4, 5]

console.log("FLAT depth 1:");
console.log(myFlat([1, [2, [3]]], 1));
// [1, 2, [3]]


// ===============================
// DEBOUNCE & THROTTLE DEMO
// (works in browser or Node with simulation)
// ===============================

const log = (msg) => console.log("Typed:", msg);

const debouncedLog = myDebounce(log, 500);
const throttledLog = myThrottle(log, 1000);

// Simulated calls
debouncedLog("A");
debouncedLog("AB");
debouncedLog("ABC"); // only this runs after 500ms

throttledLog("First");
throttledLog("Second (ignored if too fast)");

