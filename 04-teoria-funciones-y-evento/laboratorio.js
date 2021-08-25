//Laboratorio : Calculadora

//DOM nodes
const operandA = document.getElementById("operand-a")
const operandB = document.getElementById("operand-b")
const buttonSum = document.getElementById("sumButton")
const buttonSubst = document.getElementById("substButton")
const buttonMultiply = document.getElementById("multiplyButton")
const buttonDiv = document.getElementById("divButton")
const result = document.getElementById("result")

//Calc Function
function sum(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function division(a,b){
    return a/b
}

//check inputs correct
function checkCorrectInputs(a,b){
    if(operandA.value === "" || operandB.value === ""){
        result.textContent = "Error"
        return false
    } else{
      return true
    }
}

//Event handlers
function handleSum(){
    correctInputs = checkCorrectInputs(operandA.value, operandB.value);
    if (correctInputs){
        const number1 = Number(operandA.value)
        const number2 = Number(operandB.value)
        result.textContent = sum(number1, number2)

    }
}
function handleSubst(){
    correctInputs = checkCorrectInputs(operandA.value, operandB.value);
    if (correctInputs){
        const number1 = Number(operandA.value)
        const number2 = Number(operandB.value)
        result.textContent = subtract(number1, number2)

    }
}

function handleMultiply(){
    correctInputs = checkCorrectInputs(operandA.value, operandB.value);
    if (correctInputs){
        const number1 = Number(operandA.value)
        const number2 = Number(operandB.value)
        result.textContent = multiply(number1, number2)

    }
}

function handleDiv(){
    correctInputs = checkCorrectInputs(operandA.value, operandB.value);
    if (correctInputs){
        const number1 = Number(operandA.value)
        const number2 = Number(operandB.value)
        result.textContent = division(number1, number2)

    }
}



// adding event Handlers
buttonSum.addEventListener("click", handleSum)
buttonSubst.addEventListener("click", handleSubst)
buttonMultiply.addEventListener("click", handleMultiply)
buttonDiv.addEventListener("click", handleDiv)