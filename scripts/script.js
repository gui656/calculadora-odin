const display = document.querySelector('.display')

let displayText = display.textContent
let textLength = displayText.length
let displayCurrentValue = display.innerText

let operatorActive = false;
let maxLength = 12

const displayValue = (value) => {
    if(textLength !== maxLength){
        displayText += value
        operatorActive = false
    } else {
        calculate()
    }
}

const operatorBtn = (operator) => {
    if(displayText !== '' && textLength !== maxLength){
       if(!operatorActive){
            displayText += operator
            operatorActive = true 
        }    
    }    
}

const clearDisplay = function (){
    displayText = ''
    operatorActive = false
}

function calculate() {
    try {
        let result = math.evaluate(displayCurrentValue);
        displayCurrentValue = (result === undefined || result === "") ? "Error" : result;
    } catch (error) {
        displayCurrentValue = "Error";
    }
}

function backSpace(text){
    let newText = text.slice(0, -1);
    displayText = newText;
}