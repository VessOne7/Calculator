//variables
let number1 = "";
let number2 = "";
let operator;
let value;
let displayValue;

//DOM variables
const btn = document.querySelectorAll("button")
const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const calcDisplay = document.querySelector(".display");

//add, subtract, multiply and divide functions
function add(){
    return Number(number1) + Number(number2);
}

function subtract(){
    return Number(number1) - Number(number2);
}

function multiply(){
    return Number(number1) * Number(number2);
}

function divide(){
    return Number(number1) / Number(number2);
}

//calculation function
function operate(){
    switch (operator){
        case "+": displayValue = add(); break;
        case "-": displayValue = subtract(number1, number2); break;
        case "*": displayValue = multiply(number1, number2); break;
        case "/": displayValue = divide(number1, number2); break;
    }
}

//Click event for  buttons
btn.forEach(item => {    
    switch (item.className) {

        case "number": 
            item.addEventListener("click", () => {
                switch (typeof operator) {
        
                    case "undefined": 
                        number1 += item.textContent;
                        displayValue = `${number1}`
                        calcDisplay.textContent = `${displayValue}`
                        break;
        
                    case "string": 
                        number2 += item.textContent; 
                        displayValue = `${number1} ${operator} ${number2}`
                        calcDisplay.textContent = `${displayValue}`
                        break;
                }
            })
            break;   
            
        case "operator":
            item.addEventListener("click", () => {
                operator = item.textContent;
                displayValue = `${number1} ${operator} ${number2}`;
                calcDisplay.textContent = `${displayValue}`;
            }); break; 

        case "equals":
            item.addEventListener("click", () => {
                operate();
                if (displayValue != undefined) {calcDisplay.textContent = `${displayValue}`}
            }); break;

        case "clear":
            item.addEventListener("click", () => {
                number1 = "";
                number2 = "";
                operator = undefined;
                value = undefined;
                displayValue = undefined;
                calcDisplay.textContent = "";
            }); break;

        case "dot":
            item.addEventListener("click", () => {

                switch (typeof operator) {

                    case "undefined":
                        switch (number1.includes(".") || number1 == "") {

                            case true: break;

                            case false: number1 += item.textContent;
                            displayValue = `${number1}`
                            calcDisplay.textContent = `${displayValue}`;
                            break;

                        }; break;

                    case "string": 
                        switch (number2.includes(".") || number2 == "") {

                            case true: break;

                            case false: number2 += item.textContent;
                            displayValue = `${number1} ${operator} ${number2}`
                            calcDisplay.textContent = `${displayValue}`;
                            break;

                        }; break;

                }
            }); break;

    }

})