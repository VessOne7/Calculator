let number1;
let number2;
let operator;
let value;

//add, subtract, multiply and divide functions
function add(num1, num2){
    return value = num1 + num2;
}

function subtract(num1, num2){
    return value = num1 - num2;
}

function multiply(num1, num2){
    return value = num1 * num2
}

function divide(num1, num2){
    return value = num1 / num2
}

//calculation function
function operate(){
    switch (operator){
        case "+": add(number1, number2); break;
        case "-": subtract(number1, number2); break;
        case "*": multiply(number1, number2); break;
        case "/": divide(number1, number2); break;
    }
}