//Ejercicio 1

const product = {
    count: 1,
    price: 12.55,
    type: "ocio"
}

const IVASpecial= {
    alimentacion:0.1,
    libro:0.04,
}

//if type is not included in special iva, apply regular one
const IVA = IVASpecial[product.type] || 0.21;

//assume count 0 or less by default
let totalPrice = 0;

if(product.count > 0){
    totalPrice = product.price *(1+IVA) * product.count;

}

console.log("El precio total de los productos con IVA es:",totalPrice.toFixed(2) )

// Ejercicio 2: Calcular salario neto mensual

const empleado = {
    bruto: 15000,
    hijos: 1,
    pagas: 12,
}
const {bruto, hijos, pagas} = empleado;
let IRPF = 0;

if(bruto > 12000){
    IRPF = 8
} 

if (bruto >24000){
    IRPF = 16
} 

if (bruto > 34000){
    IRPF = 30
}

if (hijos > 0 && IRPF > 0){
    IRPF -= 2;
}

const netoMensual = (bruto - bruto*IRPF/100) / pagas

console.log ("El salario neto mensual es: ", netoMensual);


// Ejercicio 3: Resolver ej 1 con funciones

function getVat(product){
    const IVASpecial= {
        alimentacion:0.1,
        libro:0.04,
    }
    const vat =  IVASpecial[product.type] || 0.21;
    return product.price * (1+vat);
}

function getTotalVat(product) {
    return product.count > 0 ? product.count * getVat(product) : 0;
   }

const finalPrice = getTotalVat(product)

console.log("El precio total de los productos con IVA es:",finalPrice.toFixed(2) )
