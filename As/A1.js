 function performCalculation() {

const num1Input = document.getElementById("num1").value;
const num2Input = document.getElementById("num2").value;

const num1 = Number(num1Input);
const num2 = Number(num2Input);

const operation =
document.getElementById("operation").value;

const resultDisplay =
document.getElementById("result");

try {

if(num1Input===""){
throw new Error("Enter first number");
}

let result;

switch(operation){

case "add":
result = add(num1,num2);
break;

case "subtract":
result = subtract(num1,num2);
break;

case "multiply":
result = multiply(num1,num2);
break;

case "divide":
result = divide(num1,num2);
break;

case "sqrt":
result = squareRoot(num1);
break;

case "power":
result = power(num1,num2);
break;

case "factorial":

if(!Number.isInteger(num1)){
throw new Error(
"Factorial requires whole numbers"
);
}

result = factorial(num1);

break;

default:
throw new Error("Invalid operation");

}

resultDisplay.textContent =
`Result: ${result}`;

}

catch(error){

resultDisplay.textContent =
`Error: ${error.message}`;

}

}