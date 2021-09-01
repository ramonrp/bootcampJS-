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

//Optional Excercises

//Optional1

// Case 1

const imgTagString = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>'

const Op1Case1 = /src=['"](.*)["']/

console.log(Op1Case1.exec(imgTagString)[1])

// Case 2

const htmlString = `
<html>
<body>
<img
src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"
/>
<h1>ejemplo</h1>
<img
src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
/>
</body>
</html>`

const Op1Case2 = /<img[^>]+src="([^">]+)"/
const Op1Case2g = /<img[^>]+src="([^">]+)"/g

const imgTagsArray = htmlString.match(Op1Case2g);

for(let imgTag of imgTagsArray){
    console.log(Op1Case2.exec(imgTag)[1])
}

/**
 * Note: Not happy with result. Parse html is complicated and there are lot of edge cases.
 * For example the use of "" or ''
 * Luckily browsers do parse html to create the DOM. Below you can find how I would do it in a real case scenario with JS.
 */

const imgTags = document.getElementsByTagName("img");

for(let imgTag of imgTags){
    console.log(imgTag.src)
}

//Optional 2

//Case 1
const creditCardArray = ["5299640000000000", "5299-6400-0000-0000", "5299 6400 0000 0000" ]

const op2Case1 = /^5[0-5]\d{2}[\s-]?(\d{4}[\s-]?){2}\d{4}$/

for(let creditCard of creditCardArray){
    console.log(`Credit Card ${creditCard} is valid:`,op2Case1.test(creditCard))
}

//Case 2

const creditCard = "5299640000000000"

const op2Case2 = /^(5[0-5]\d{2})[\s-]?(\d{4})[\s-]?(\d{4})[\s-]?(\d{4})/

const CreditCardDivided = op2Case2.exec(creditCard)

console.log(CreditCardDivided)



//*************** */

//Community RegExp

//Hex color 3-6 digits # optional

const hexPatter = /^#?([0-9a-f]{3}){1,2}$/

// url validation

const urlPattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/

// moderate password

const moderatePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

//strong Password
const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/


