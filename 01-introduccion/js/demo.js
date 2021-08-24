const inputFirstName = document.getElementById("first-name")
const inputLastName = document.getElementById("last-name")
const img = document.getElementById("avatar-img")
const button = document.getElementById("button-console")

img.src = "https://www.w3schools.com/w3images/avatar6.png"
inputFirstName.value = "Ramon"
inputLastName.value = "Ruiz"


function handleClick(){
    console.log(inputFirstName.value)
}

button.addEventListener("click", handleClick)