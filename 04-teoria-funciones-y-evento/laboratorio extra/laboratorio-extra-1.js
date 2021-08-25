//Laboratorio extra 1 : Calculadora secuencial

//DOM nodes
const operand = document.getElementById("operand")
const buttonSum = document.getElementById("sumButton")
const buttonSubst = document.getElementById("substButton")
const buttonMultiply = document.getElementById("multiplyButton")
const buttonDiv = document.getElementById("divButton")
const buttonEqual = document.getElementById("equalButton")
const result = document.getElementById("result")

//Calc Object
const operationObjects = {
    sum(a,b){return a + b},
    subtract(a,b){return a-b},
    multiply(a,b){return a*b},
    division(a,b){return a/b}
}

//check input is correct
function checkCorrectInput(a){
    if(a === ""){
        result.textContent = "Error you need to introduce a number"
        return false
    } else{
      return true
    }
}


let temporaryValue={
    value:undefined,
    nextOperation:undefined,
};


function writeNextOperationAndValue(operation){
    let inputNumber = Number(operand.value)
    operand.value ="";
    //first time click on operation button
    if(temporaryValue.nextOperation === undefined){
        temporaryValue.value = inputNumber
    } else {
        temporaryValue.value = operationObjects[temporaryValue.nextOperation](temporaryValue.value, inputNumber)
    }
    
    temporaryValue.nextOperation = operation

}

//Event handlers
function handleSum(){
    isCorrectInput = checkCorrectInput(operand.value)

    if(isCorrectInput){
        let operation = "sum";
        writeNextOperationAndValue(operation)
    }

}
function handleSubst(){
    isCorrectInput = checkCorrectInput(operand.value)

    if(isCorrectInput){
        let operation = "subtract";
        writeNextOperationAndValue(operation)
    }
}

function handleMultiply(){
    isCorrectInput = checkCorrectInput(operand.value)

    if(isCorrectInput){
        let operation = "multiply";
        writeNextOperationAndValue(operation)
    }
}


function handleDiv(){
    isCorrectInput = checkCorrectInput(operand.value)
    if(isCorrectInput){
        let operation = "division";
        writeNextOperationAndValue(operation)
    }
}

function handleEqual(){
    result.textContent = temporaryValue.value
    temporaryValue.value = undefined
    temporaryValue.nextOperation = undefined
}



// adding event Handlers
buttonSum.addEventListener("click", handleSum)
buttonSubst.addEventListener("click", handleSubst)
buttonMultiply.addEventListener("click", handleMultiply)
buttonDiv.addEventListener("click", handleDiv)
buttonEqual.addEventListener("click", handleEqual)
