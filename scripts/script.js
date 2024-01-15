const display = document.querySelector('.display')
let operatorActive = false;
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
            display.textContent += operator
            operatorActive = true 
        }    
    }    
}

const clearDisplay = function (){
    display.textContent = ''
    operatorActive = false
}

function calculate() {
    try {
        let result = math.evaluate(display.innerText);
        display.innerText = (result === undefined || result === "") ? "Error" : result;
    } catch (error) {
        display.innerText = "Error";
    }
}

function backSpace(text){
    let newText = text.slice(0, -1);
    display.textContent = newText;
}

