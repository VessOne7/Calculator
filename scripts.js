//add, subtract, multiply and divide functions
function add(num1, num2){
    displayValue = num1 + num2;
    return displayValue = parseFloat(displayValue.toFixed(2))
}
function subtract(num1, num2){
     displayValue = num1 - num2;
    return displayValue = parseFloat(displayValue.toFixed(2))
}
function multiply(num1, num2){
    displayValue = num1 * num2;
    return displayValue = parseFloat(displayValue.toFixed(2))
}
function divide(num1, num2){
    displayValue = num1 / num2;
    return displayValue = parseFloat(displayValue.toFixed(2))
}

//variables for operator, 2 numbers and value
let operator = "";
let num1 = "";
let num2 = "";
let displayValue = 0;

//function to take operator and 2 numbers and call the right function
function operate(){
    switch(operator){
        case '+': return add(num1, num2);
        case '-': return subtract(num1, num2);
        case '*': return multiply(num1, num2);
        case '/': return divide(num1, num2);
    }
}

//Selectors for html elements
const displayDiv = document.querySelector('.display');
const button = document.querySelectorAll('button');
//Adding classes for operator buttons
button.forEach(item => {
    if (item.textContent == "+" || item.textContent == "-" || item.textContent == "*" || item.textContent == "/") {
        item.classList.add(`operator`)
        item.classList.add(`${item.textContent}`)
    } else if (item.textContent == "="){
        item.classList.add("evaluation")
    }
})

//
if (operator == "") {
    btnEvent(num1, operator);
} else {
    btnEvent(num2);
}

//click event function for numbers
function btnEvent(val, op){
    //functions for displaying num1, num2, operator
    function display() {
      displayDiv.innerHTML += `${val}`;   
    }

    function displayOperator(){
        const conditions = ["+", "-", "*", "/"]
        if (conditions.some(item => displayDiv.textContent.split("").includes(item))) {
        } else {displayDiv.innerHTML += ` ${op} `}
    }

    //Clear, 0-9, . event
    button.forEach(item => {
        if (item.textContent == "Clear"){
            item.addEventListener("click", () => displayDiv.textContent = "");
            num1 = "";
            num2 = "";
            operator = "";
        } else if (Number(item.textContent) >= 0 && Number(item.textContent) <= 9){
            item.addEventListener("click", () => {
                val = `${item.textContent}`;
                display();
            })             
        } 
        // DOT (.) event
        else if (item.textContent == ".") {
            item.addEventListener("click", () => {
                let displayArray = displayDiv.textContent.split("")
                if (displayArray.includes(`${op}`)) {
                    let operatorIndex = displayArray.indexOf(`${op}`)
                    let a = displayArray.splice(0, operatorIndex);
                    let b = displayArray.splice(1, displayArray.length)
                    if (b.includes(".")) {} else {
                            val = `${item.textContent}`;
                            display();
                        }
                } else {
                    if (displayArray.includes(`.`)) {} else {
                            val = `${item.textContent}`;
                            display();
                    }
                }
            })
        }
    })

    //operator event
    const btnOperator = document.querySelectorAll(".operator")
    btnOperator.forEach(item => {item.addEventListener("click", () => {  
          op = `${item.textContent}`;
          displayOperator();      
        })
    })

    //evaluation event
    const btnEvaluation = document.querySelector(".evaluation")
    btnEvaluation.addEventListener("click", () => {
        let displayArray = displayDiv.textContent.split("")
        if (displayArray.includes("=")) {} else {
            let operatorIndex = displayArray.indexOf(`${op}`)
            num1 = Number(displayArray.splice(0, operatorIndex).join(""))
            num2 = Number(displayArray.splice(1, displayArray.length).join(""))
            operator = displayArray.toString();
            displayDiv.innerHTML += ` = ${operate()}`
        } 
    })

}