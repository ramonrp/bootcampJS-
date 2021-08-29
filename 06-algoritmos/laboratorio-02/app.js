// Ejercicio 1: Enigma

const plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
const encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

const encriptedObject = {}
for (let i=0; i<plainAlphabet.length; i++){
    encriptedObject[plainAlphabet[i]] = encryptedAlphabet[i];
}

desencriptObject = {}
for (let i=0; i<encryptedAlphabet.length; i++){
    desencriptObject[encryptedAlphabet[i]] = plainAlphabet[i];
}


function encript(string){
    let encriptedString= "";
    for(let letter of string){

        if(encriptedObject[letter.toLowerCase()]){
            encriptedString += encriptedObject[letter.toLowerCase()]
        }else{
            encriptedString += letter
        }
    }

    return encriptedString
}

function desencript(string){
    let desencriptedString="";
    for(let letter of string){
        if(desencriptObject[letter.toLowerCase()]){
            desencriptedString += desencriptObject[letter.toLowerCase()]
        }else{
            desencriptedString += letter
        }
    }

    return desencriptedString
}

//Adding functionality to html
const plainTextArea = document.getElementById("plain-text")
const encriptTextArea = document.getElementById("encript-text")
const encriptButton = document.getElementById("encript-button")
const desencriptButton = document.getElementById("desencript-button")

encriptButton.addEventListener("click", handleEncript)
desencriptButton.addEventListener("click", handleDesencript)

function handleEncript(){
    const plainText = plainTextArea.value;
    encriptTextArea.value = encript2(plainText)
}

function handleDesencript(){
    const encriptedTExt = encriptTextArea.value;
    plainTextArea.value = desencript2(encriptedTExt)
}
// Ej 1 extra: resolve using indexOf

function encript2(string){
    let encriptedString="";
    for(let letter of string){
        let index = plainAlphabet.indexOf(letter.toLowerCase())
        if(index === -1){
            encriptedString += letter
        }else{
            encriptedString += encryptedAlphabet[index]
        }
    }

    return encriptedString
}

function desencript2(string){
    let desencriptedString="";
    for(let letter of string){
        let index = encryptedAlphabet.indexOf(letter.toLowerCase())
        if (index === -1){
            desencriptedString += letter
        }else{
            desencriptedString += plainAlphabet[index]
        }
    }

    return desencriptedString
}



// Ej 2: Generador Aleatorio

function randomPick(n, min, max){
    if(max-min< n) throw new Error("n should be bigger than max - min")
    const randomArray = []

    function aleatoryNumber(){
        const range = (max-min +1)
        const number = Math.floor(Math.random()*range + min)
        return number
    }
    let i = 0;
    while(i<n){
        let newNumber = aleatoryNumber()
        if(!randomArray.includes(newNumber)){
            randomArray.push(newNumber)
            i++;
        }
    }

    return randomArray

}
