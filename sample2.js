let num1 = prompt("Enter the first number:");
num1 = Number(num1);
let num2 = prompt("Enter the second number:");
num2 = Number(num2);
let operation = prompt("Choose an operation: +, -, *, /");
let result;
switch (operation) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    default:
        console.log("Invalid operation");
}
console.log("The result is " + result);