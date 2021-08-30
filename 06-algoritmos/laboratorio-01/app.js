
// vat values
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;


// products data
let products = [
    {
        description: "Goma de borrar",
        price: 0.25,
        tax: LOWER_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Lápiz H2",
        price: 0.4,
        tax: LOWER_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Cinta rotular",
        price: 9.3,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Papelera plástico",
        price: 2.75,
        tax: REGULAR_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Escuadra",
        price: 8.4,
        tax: REGULAR_TYPE,
        stock: 3,
        units: 0,
    },
    {
        description: "Pizarra blanca",
        price: 5.95,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Afilador",
        price: 1.2,
        tax: LOWER_TYPE,
        stock: 10,
        units: 0,
    },
    {
        description: "Libro ABC",
        price: 19,
        tax: EXEMPT_TYPE,
        stock: 2,
        units: 0,
    },
];

//DOM List
const list = document.getElementById("product-list")
const calculateButton = document.getElementById("calculate-button")
//generate dinamic HTML

function addProductToList(product, nodeToAdd) {
    const { description, price, units, stock } = product;
    const listItem = document.createElement("li");
    listItem.classList.add("product-item");
    listItem.innerText = `${description} - ${price}€/ud`

    const input = document.createElement("input");
    input.setAttribute("class", "product-unit");
    input.setAttribute("type", "number");
    input.setAttribute("value", units);
    input.setAttribute("min", 0);
    input.setAttribute("max", stock);
    input.addEventListener("change", handleChangeInput)
    listItem.appendChild(input)
    nodeToAdd.appendChild(listItem)


    function handleChangeInput(e) {
        if (e.target.value > stock) {
            e.target.value = stock;
        } else if (e.target.value < 0) {
            e.target.value = 0
        }

        product.units = e.target.value

        enableDisableCalculateButton(calculateButton)


    }
}

function addAllProductsToList(productsArray) {
    for (product of productsArray) {
        addProductToList(product, list)
    }
}

addAllProductsToList(products);


//calculate total order

function calculatePriceWithoutVat(productsArray) {
    let total = 0;
    for (product of productsArray) {
        total += product.price * product.units
    }

    return total;
}

function calculateVAT(productsArray) {
    let total = 0;
    for (product of productsArray) {
        total += product.price * product.units * product.tax / 100
    }

    return total
}

//Dom nodes

const subtotal = document.getElementById("subtotal")
const vat = document.getElementById("vat")
const total = document.getElementById("total")

//add event listener

calculateButton.addEventListener("click", handleCalculateButton)

function handleCalculateButton() {
    const subtotalQuantity = calculatePriceWithoutVat(products)
    const vatQuantity = calculateVAT(products)

    subtotal.innerText = subtotalQuantity.toFixed(2)
    vat.innerText = vatQuantity.toFixed(2)
    total.innerText = (vatQuantity + subtotalQuantity).toFixed(2)
}


//extra: enable / disabled calculate button

function checkAllProductsUnitsAreZero(productsArray) {
    return productsArray.every(product => {
        return product.units == 0
    })
}

function enableDisableCalculateButton(button) {
    if (checkAllProductsUnitsAreZero(products)) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}