let shoppingCart = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
   ];

function showProductConsole(product){
    const {id, name, price, count, premium} = product
    console.log("id:", id)
    console.log("name:", name)
    console.log("price:", price)
    console.log("count:", count)
    console.log("premium:", premium)
}

//Ej 1-2: mostrar el carrito de la compra
function showFullCarrito(shoppingCart){
    for(let product of shoppingCart){
        showProductConsole(product);
        console.log("----------")
    }
}

showFullCarrito(shoppingCart)



//Ej3: eliminar producto con id: 54657 del carrito de la compra
const idToRemove = 54657

function elminateProduct(id, shoppingCart){
    for(let index in shoppingCart){
        if(shoppingCart[index].id === idToRemove){
            shoppingCart.splice(index,1)
            break;
        }
    }
    return shoppingCart;
}

shoppingCart = elminateProduct(idToRemove, shoppingCart)

showFullCarrito(shoppingCart)

//Ej: 4 calcular el precio del carrito
function calculateTotalCost(shoppingCart){
    let total = 0;
    for (let product of shoppingCart){
        total += product.price
    }

    return total
}

console.log("FINAL PRICE: ", calculateTotalCost(shoppingCart))

//Ej5: Filtrar productos prime

function filterPremiumProducts(shoppingCart){
    return shoppingCart.filter(product=>{
        return product.premium
    })
}

showFullCarrito(filterPremiumProducts(shoppingCart))

//Ej 6: opcional: mostrar mensaje si todos los productos son premium

function allPremium(shoppingCart){
    const premiumProducts = filterPremiumProducts(shoppingCart);
    if(premiumProducts.length == shoppingCart.length){
        console.log("Pedidos sin gastos de envio")
    }
}

allPremium(shoppingCart)

//Ej 7: Mostrar un listado con los nombres de los productos en el carrito
const productList = document.getElementById("shopping-list");

function showProductsNameHTML(shoppingCart, listNode){
    for(let product of shoppingCart){
        const li = document.createElement("li");
        li.innerText = product.name
        listNode.appendChild(li);   
    }
}

showProductsNameHTML(shoppingCart, productList)

//Ej 8: Aplicar un descuento si la compra es mayor de 100%
//Voy a modificar la función de precio total para añadir esta excepción

function calculateTotalCostWithDiscount(shoppingCart){
    let total = 0;
    for (let product of shoppingCart){
        total += product.price
    }

    return total < 100 ? total : total*0.95
}

console.log("FINAL PRICE with DISCOUNT: ",calculateTotalCostWithDiscount(shoppingCart))

