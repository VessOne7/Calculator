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
    return parseFloat((Number(number1) + Number(number2)).toFixed(2));
}

function subtract(){
    return parseFloat((Number(number1) - Number(number2)).toFixed(2));
}

function multiply(){
    return parseFloat((Number(number1) * Number(number2)).toFixed(2));
}

function divide(){
    return parseFloat((Number(number1) / Number(number2)).toFixed(2));
}

//calculation function
function operate(){
    switch (operator){
        case "+": displayValue = add(); break;
        case "-": displayValue = subtract(); break;
        case "*": displayValue = multiply(); break;
        case "/": displayValue = divide(); break;
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
                switch(operator == undefined) {
                    case true: 
                        if (displayValue != undefined){
                            operator = item.textContent;
                            displayValue = `${number1} ${operator} ${number2}`;
                            calcDisplay.textContent = `${displayValue}`;
                        }
                        break;                            
                    case false:
                        operate();
                        operator = item.textContent;
                        calcDisplay.textContent = `${displayValue} ${operator}`;
                        number1 = `${displayValue}`;                        
                        number2 = "";
                        break;
                }
            }); break; 

        case "equals":
            item.addEventListener("click", () => {
                operate();
                if (number2 == "0" && operator == "/") {
                    calcDisplay.textContent = "What are you doing!? You can't divide by zero! Fool!";
                    number1 = "";
                    number2 = "";
                    operator = undefined;
                    value = undefined;
                    displayValue = undefined;
                } else if (displayValue != undefined) {
                    calcDisplay.textContent = `${displayValue}`;
                    number1 = `${displayValue}`;
                    operator = undefined;
                    number2 = "";
                }
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