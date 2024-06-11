//add, subtract, multiply and divide functions
function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}

//variables for operator, 2 numbers and value
let operator;
let num1;
let num2;
let displayValue = operate()

//function to take operator and 2 numbers and call the right function
function operate(){
    switch(operator){
        case '+': return add(num1, num2);
        case '-': return    subtract(num1, num2);
        case '*': return multiply(num1, num2);
        case '/': return divide(num1, num2);
    }
}

//Selectors for html elements
const displayVar = document.querySelector('.display');
const button = document.querySelectorAll('button');

//Function for populating display with pressed numbers
function display(){    
    displayVar.textContent = `${num1} ${operator} ${num2} = ${displayValue}`;
}

//function for resetting display
function reset() {
    if (num1 != undefined && num2 != undefined && operator != undefined) {
        num1 = `${button.textContent}`;
        num2 = undefined;
        operator = undefined;
    }
}

//Events for pressing buttons
button.forEach(item => item.addEventListener("click", reset()))
