

//DOM nodes
const roomTypeSelect = document.getElementById("room-type")
const spaInput = document.getElementById("spa")
const roomPeopleSelect = document.getElementById("room-people")
const nightsInput = document.getElementById("nights")
const parkingInput = document.getElementById("parking")
const calculateButton = document.querySelector("button")
const finalPriceSpan = document.getElementById("final-price")
const form = document.querySelector("form")

// function handleCalculateClick(e){
//     e.preventDefault();
//     const dataFromInput = getInfoFromInputs();
//     calculateFinalPrice(...dataFromInput)
// }
// calculateButton.addEventListener("click", handleCalculateClick)

function handleChange(){
    const dataFromInput = getInfoFromInputs();
    calculateFinalPrice(...dataFromInput)
}

handleChange();

form.addEventListener("change", handleChange)

// utils 

function getInfoFromInputs(){
    const roomType = roomTypeSelect.value 
    const spa = spaInput.checked
    const roomPeople = roomPeopleSelect.value
    const numberNights = Number(nightsInput.value)
    const parkingNights = Number(parkingInput.value)
    return [roomType, spa, roomPeople, numberNights, parkingNights]
}


function calculateFinalPrice(roomType, spa, roomPeople, nights, parkingNights){
    const roomTypePrice = {
        standar:100,
        junior:120,
        suite:150
    }
    const spaPrice = spa ? 20 : 0

    const parkingPerNight = 10
    
    const peopleRoom = {
        simple:0.75,
        doble:1,
        triple:1.25
    }
    
    const priceRoomPerNight = roomTypePrice[roomType]
    const incrementPerPeople = peopleRoom[roomPeople]

    const finalPrice = (priceRoomPerNight + spaPrice)*nights*incrementPerPeople + parkingPerNight*parkingNights

     finalPriceSpan.textContent = finalPrice
}

