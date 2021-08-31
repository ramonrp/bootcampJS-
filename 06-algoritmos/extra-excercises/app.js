// EJ 1: square

function square (n, char){
    for(let row=0; row<n ; row++){
        let columnString = "";
        for (let column=0; column < n ; column++){
            columnString += "*"
        }
        console.log(columnString)
    }
}

// Ej 2 :square with border

function squareWithBorder (n, charBorder, charInner){
    for(let row = 1; row <= n ; row++){
        let columnString = "";
        for (let column=0; column <= n ; column++){
            if(row === 1 || row === n || column ===0 || column === n ){
                columnString += charBorder
            }else{
                columnString += charInner
            }
        }
        console.log(columnString)
    }
}

//Ej3: SquareDiagonalLR

function squareDiagonalLR (n, charDiagonal, charUp, charDown){
    for(let row = 1; row <= n ; row++){
        let columnString = "";
        for (let column=1; column <= n ; column++){
            if(column === row){
                columnString += charDiagonal
            } else if (column > row){
                columnString += charUp
            } else{
                columnString += charDown
            }
        }
        console.log(columnString)
    }
}

//Ej4: SquareDiagonalRL
function squareDiagonalRL(n, charDiagonal, charUp, charDown){
    for(let row = 1; row <= n ; row++){
        let columnString = "";
        for (let column=1; column <= n ; column++){
            if(column + row === n+1){
                columnString += charDiagonal
            } else if (column + row < n+1){
                columnString += charUp
            } else{
                columnString += charDown
            }
        }
        console.log(columnString)
    }
}

//Ej: half diamond

var halfDiamond = (n, char) => {

    for(let row = 1; row <= n ; row++){
        let columnString = "";
        for (let column=1; column <= row ; column++){
            columnString += char
        }
        console.log(columnString)
    }
    for(let row = n-1; row >= 1; row--){
        let columnString = "";
        for (let column=1; column <= row ; column++){
            columnString += char
        }
        console.log(columnString)
    }
}




//*************************************** */

//Roll dice trick

function rollDice(){
    const range = (6- 1 + 1)
    return Math.floor(Math.random()*range) + 1
}

//quick alternative: number 6 50% chances

const numberProbability = [1,2,3,4,5,6,6,6,6,6]

function rollDiceTricked(){
    const index = Math.floor(Math.random()*10) 
    console.log(index)
    return numberProbability[index]
}


// exactly alternative

// array with probability for each number

const exactNumberProbability = [5, 5, 5, 10, 10, 65]

function calculateAcuumulateProbability(array){
    let acc = 0;
    return array.map(item =>{
        acc += item
        return acc
    })
}

//generate number [0,100) and check
function rollDiceTricked2(){
    const probabilityArray = calculateAcuumulateProbability(exactNumberProbability);
    const alteatoryNumber = Math.floor(Math.random()*100)
    let result;
    for (let number = 0; number < probabilityArray.length ; number++){
        if(alteatoryNumber <= probabilityArray[number]){
            result = number + 1;
            break;
        }
    }
    return result
}