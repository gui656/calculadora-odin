const display = document.querySelector('.display')
let operatorActive = false;
let operatorCounter = 1;
let maxLength = 12

const displayValue = (value) => {
    if(display.textContent.length !== maxLength){
        display.textContent += value
        operatorActive = false
    } else {
        calculate()
    }
}

const operatorBtn = (operator) => {
    if(display.textContent !== '' && display.textContent.length !== maxLength){
       if(!operatorActive){
            if(operatorCounter < 2){
                display.textContent += operator
                operatorActive = true
                operatorCounter++ 
            } else {
                calculate();
                display.textContent += operator
                operatorActive = true
                operatorCounter = 2;
            }
            
        }    
    }    
}

const clearDisplay = function (){
    display.textContent = ''
    operatorActive = false
    operatorCounter = 1;
}

function calculate() {
    try {
        let result = math.evaluate(display.innerText);
        display.innerText = (result === undefined || result === "") ? "Error" : result;
        operatorCounter = 1;
    } catch (error) {
        display.innerText = "Error";
    }
}

function backSpace(text){
    let newText = text.slice(0, -1);
    display.textContent = newText;
}

