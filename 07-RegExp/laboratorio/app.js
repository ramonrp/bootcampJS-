//Ex 1: IBAN validation

const IBAN1 = "ES6600190020961234567890"
const IBAN2 = "ES66 0019 0020 9612 3456 7890"
const ibanArray = [IBAN1, IBAN2]

//Case 1

const ex1Case1 = /^[A-Za-z]{2}\d{22}$/
console.log(`IBAN ${IBAN1} is valid:`, ex1Case1.test(IBAN1))  //true

//Case 2

const ex1Case2 = /^[A-Za-z]{2}\d{2}\s?(\d{4}\s?){4}\d{4}$/

for(let iban of ibanArray){
    console.log(`IBAN ${iban} is valid:`,ex1Case2.test(iban))
}

//Case 3

const ex1Case3 = /^([A-Za-z]{2})\d{2}\s?\d{4}\s?\d{4}\s?(\d{2})\d{2}\s?\d{4}\s?\d{4}$/

const [fullAccount,countryCode, controlNumber] = ex1Case3.exec(IBAN1)


//Ex2: Validation european car number plate

const validNumberPlates = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"]

//Case 1

const ex2Case1 = /^\d{4}[\s-]?[A-Z]{3}$/

for(let numberPlate of validNumberPlates){
    console.log(`Number Plate ${numberPlate} is valid:`,ex2Case1.test(numberPlate))
}


//Case 2

const ex2Case2 = /^(\d{4})[\s-]?([A-Z]{3})$/

const [fullPlate,numberPlate, lettersPlate] = ex2Case2.exec(validNumberPlates[0])

//Case 3: do same with a string full of plates and using match  method

const ex2Case3 = /(\d{4})[\s-]?([A-Z]{3})/g;


const someStringWithPlates ="In this text you will find some valid plates and random characters: 2021 GMD 2345-GMD adsfadsf 4532BDB asdfads  0320-AAA adsfadsf "
const platesArray = someStringWithPlates.match(ex2Case3)

for(let plate of platesArray){
    const [fullPlate,numberPlate, lettersPlate] = plate.match(ex2Case2)
    console.log(`Plate: ${fullPlate}, number: ${numberPlate}, letters: ${lettersPlate}`)
    
}
