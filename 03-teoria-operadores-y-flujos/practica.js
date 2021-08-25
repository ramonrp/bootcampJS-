// Ejercicio 1

const booking = {
    count: 5,
    price: 127.95
}

let totalPrice = booking.count * booking.price;
totalPrice = totalPrice > 500 ? totalPrice*0.8 : totalPrice;

console.log(totalPrice.toFixed(2))

// Ejercicio 2: comprobar que las dos reservas son iguales. 

const booking1 = {
    count: 1,
    price: 127.95,
}
const booking2 = {
    count: 4,
    price: 127.95,
}

//one way
equalNumberOfNights = booking1.count == booking2.count
equalPricePerNight = booking1.price == booking2.price

let bookingAreEqual = false;

if (equalNumberOfNights && equalPricePerNight){
    bookingAreEqual = true;
}

console.log("Los booking son iguales",bookingAreEqual);

//second way
let bookingsAreEqual = true;
for(let key in booking1 ){
    if(booking1[key] !== booking2[key]){
        bookingsAreEqual = false
    }
}

console.log("Los booking son iguales",bookingsAreEqual)

//Ejercicio 3: mostrar la suma del número de noche de las dos reservas
const totalNights = booking1.count + booking2.count;
console.log("total de noches entre las dos reservas",totalNights)

//Ejercicio 4: mostrar la reserva con mayor número de noches.
const bookingLongest = booking1.count > booking2.count ? booking1.count : booking2.count;

console.log("la reserva más larga es:", bookingLongest)

//Ejercicio 5: ampliar una noche a la reserva 1

booking1.count += 1;

console.log(booking1.count)

//Ejercicio 6: número de reservas a las que se podría aplicar descuento.
let numberOfPossibleBookingsWithDiscount = 0;

const bookingArray = [booking1, booking2]

for (let booking of bookingArray){
    if(booking.count * booking.price > 500){
        numberOfPossibleBookingsWithDiscount++;
    }
}

console.log(numberOfPossibleBookingsWithDiscount)