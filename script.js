// Fazer os botoes funcionar

// Importar o display

const display = document.querySelector(".display")

function displayValue(value){
   display.innerText += value
}

function clearDisplay(){
    display.textContent = ""
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = "Error";
    }
}

function calculate() {
    try {
        let result = eval(display.innerText);
        display.innerText = (result === undefined || result === "") ? "Error" : result;
    } catch (error) {
        display.innerText = "Error";
    }
}