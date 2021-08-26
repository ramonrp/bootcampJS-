//Ej1: mostrar todos los datos del array con diferentes tipos de bucles
const array1 = [25, 2.05, 63, 4.01, -9]
var i = 0;

while(i<array1.length){
    console.log(array1[i++]);
}

for(let i=0; i<array1.length; i++){
    console.log(array1[i])
}

for(let item of array1){
    console.log(item)
}

for(let index in array1){
    console.log(array1[index])
}

//Ej2: Mostrar sólo los elementos mayores que 0
const array2= [14, 2, 2.02, 63, 0,-7, -9,-7]
for(item of array2){
    if(item>0){
        console.log(item);
    }
}

//Ej3: Separar en dos arrays positivos + 0 / negativos
const postiveArray=[]
const negativeArray=[]

for(let item of array2){
    if(item>=0){
        postiveArray.push(item)
    }else{
        negativeArray.push(item)
    }
}

console.log(postiveArray,negativeArray)

//Ej4: Borrar los negativos del array original
const negativeArray2 = []
for(let index in array2){
    if(array2[index] < 0){
        negativeArray2.push(...array2.splice(index))
    }
}

console.log(array2, negativeArray2)

//Ej5: Mostar los elementos del array en orden inverso
const array3 = [ { id: 1, name: "Jhon", }, { id: 2, name: "Doe", }, { id: 3, name: "Clara", }, { id:4, name: "Elisa", }, { id: 4, name: "Pedro", }, ]

console.log(array3.reverse())

//Ej6: mostrar sólo los objetos que tienen la propiedad age >18
const array4 = [ { id: 1, name: "Jhon", age: 25, }, { id: 2, name: "Doe", age: 8, }, { id: 3, name: "Clara", age: 15, }, { id: 4, name: "Elisa", age: 30, }, { id: 4, name: "Pedro", age: 18, }, ]

for(let object of array4){
    if(object.age >= 18)
    console.log(object)
}

//Ej7: Dividir el array en dos: mayores y menores de edad
const adults = [];
const minors = [];

for(let person of array4){
    if(person.age>=18){
        adults.push(person)
    }else{
        minors.push(person)
    }
}

console.log(adults, minors)

//Ej8: dado un array con objectos de hoteles, incrementa el precio de los hoteles con menos de 10 hab disponibles y muestra todos los hoteles por pantalla.
const hotels = [
    {
    hoteId: 1,
    hotelName: "Jhon",
    availableRooms: 25,
    price: 10.20,
    },
    {
    hoteId: 2,
    hotelName: "Doe",
    availableRooms: 8,
    price: 4.25,
    },
    {
    hoteId: 3,
    hotelName: "Clara",
    availableRooms: 15,
    price: 14.30,
    },
    {
    hoteId: 4,
    hotelName: "Elisa",
    availableRooms: 30,
    price: 10,
    },
    {
    hoteId: 4,
    hotelName: "Pedro",
    availableRooms: 10,
    price: 8.10,
    },
    ]

for (let hotel of hotels){
    const {availableRooms} = hotel
    if (availableRooms < 10){
        hotel.price += 10
    }
    console.log(hotel)
}

//Ej 9: aumentar el precio si las habitaciones disponibles son menores de 10. Alamacenar en nuevo array los hoteles con baja disponibilidad.
const hotelsAlmostFull = []

for (let hotel of hotels){
    const {availableRooms} = hotel
    if (availableRooms < 10){
        hotel.price += 10
        hotelsAlmostFull.push(hotel)
    }
}

console.log(hotelsAlmostFull)

//Ej10: Buscar por hoteles y mostrar si existe el hotel.
const searchInput = document.getElementById("textBox");
const searchButton = document.getElementById("myButton")
const confirmation = document.getElementById("confirmation-message")

searchButton.addEventListener("click", handleSearchButtonClick)

function handleSearchButtonClick(){
    const searchValue = searchInput.value;
    if(searchValue){
        confirmation.textContent = `${searchValue} no existe`
        for(hotel of hotels){
            if(hotel.hotelName.toLowerCase() === searchValue.toLowerCase()){
                confirmation.textContent = `${searchValue} existe`
                break;
            }
        }

    }
}