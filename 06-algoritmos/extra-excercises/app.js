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

