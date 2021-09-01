//Ej extra 2: Calculadora de cambio óptimo

//Dom Nodes

const changeForm = document.getElementById("change-form")
const changeButton = document.getElementById("change-button")
const list = document.getElementById("change-list")

//EventListener
changeForm.addEventListener("submit", handleSubmit)

function handleSubmit(e){
    e.preventDefault();
    list.innerHTML = ""
    const ticketAmount = e.target.elements.ticket.value
    const cashAmount = e.target.elements.cash.value
    const changeAmount = calculateTotalChange(ticketAmount, cashAmount)
    const changeArray = calculateChange(orderChange, changeAmount);
    
    for(let banknote of changeArray){
        createListChangeItem(list, banknote)
    }
}


const orderChange = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.20, 0.10, 0.05, 0.02, 0.01]


// utils
function calculateTotalChange(ticket, money){
    return money-ticket;
}


function calculateChange(moneyArray, change){
    const changeArray = []
    for(let banknote of moneyArray){
        let moneyQuantity = Math.floor(change / banknote)
        if(moneyQuantity >= 1){
            changeArray.push([banknote, moneyQuantity])
            change = change % banknote
        }
    }
    return changeArray
}

function createListChangeItem(listNode, changeItem){
    const li = document.createElement("li");
    li.textContent = `${changeItem[1]} banknotes / coins ${changeItem[0]}€`
    listNode.appendChild(li)
}

