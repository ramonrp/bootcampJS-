//Ex1: hasId
const objTrial = {
  id: 5458725,
  name: "ramon",
};
//solution 1
function hasId(object) {
  return "id" in object;
}
//solution 2
function hasId2(object) {
  return object.hasOwnProperty("id");
}

//solution 3
function hasId3({ id }) {
  return id === undefined ? false : true;
}

//head
const arrayTrial = [1, 2, 3, 4];
const head = ([first]) => first;
console.log(head(arrayTrial));

//tail
const tail = ([first, ...rest]) => rest;
console.log(tail(arrayTrial));

//swapFirstToLast
const swapFirstToLast = ([first, ...rest]) => [...rest, first];
console.log(swapFirstToLast(arrayTrial));

//excludeId
const excludeId = ({ id, ...restProperties }) => restProperties;
console.log(excludeId(objTrial));

//wordsStartingWithA
const wordsArray = ["Airplane", "boat", "car", "aircraft"];

const wordsStartingWithA = (array) =>
  array.filter((word) => word[0].toLowerCase() === "a");

console.log(wordsStartingWithA(wordsArray));

//concat
const concat = (...words) => words.join(" | ");
console.log(concat(...wordsArray));

//multArray
const numberArray = [1, 2, 3, 4, 5];
const multArray = (arrayNumber, times = 1) =>
  arrayNumber.map((number) => number * times);
console.log(multArray(numberArray, 5));

//calcMult
const calcMult = (...numbers) => numbers.reduce((acc, item) => acc * item, 1);
console.log(calcMult(...numberArray));

//Extra Excercises

//swapFirstSecond
const swapFirstSecond = ([first, second, ...restItems]) => [
  second,
  first,
  ...restItems,
];
console.log(swapFirstSecond(numberArray));

//longest
const longest = (characterToSearch, ...strings) =>
  strings.every((string) => string.startsWith(characterToSearch));
console.log(longest("m", "mar", "mario", "marino")); // true
console.log(longest("m", "amar", "mario", "marino")); // false

//searchInStringV1

//solution 1
const searchInStringV11 = (string, characterToSearch) => {
  const pattern = new RegExp(characterToSearch, "gi");
  const coincidences = string.match(pattern);
  return coincidences ? coincidences.length : 0;
};

console.log(searchInStringV11("Ramon ruiz perez", "a")); //1
console.log(searchInStringV11("Ramon ruiz perez", "r")); //3
console.log(searchInStringV11("Ramon ruiz perez", "w")); //0

// solution 2
const searchInStringV12 = (string, characterToSearch) => {
  return string
    .split("")
    .filter((letter) => letter.toLowerCase() === characterToSearch).length;
};
console.log(searchInStringV12("Ramon ruiz perez$", "$")); //1
console.log(searchInStringV12("Ramon ruiz perez", "r")); //3
console.log(searchInStringV12("Ramon ruiz perez", "w")); //0

//solution 3
const searchInStringV13 = (string, characterToSearch) => {
  return string.split("").reduce((acc, letter) => {
    if (letter.toLowerCase() === characterToSearch) {
      return ++acc;
    } else {
      return acc;
    }
  }, 0);
};

console.log(searchInStringV13("Ramon ruiz perez$", "$")); //1
console.log(searchInStringV13("Ramon ruiz perez", "r")); //3
console.log(searchInStringV13("Ramon ruiz perez", "w")); //0

//sortCharacters
const sortCharacters = (string) => {
  return string.split("").sort().join("");
};

console.log(sortCharacters("Abcd")); //abcd
console.log(sortCharacters("dcbA")); //abcd

//shout
const shout = (...words) =>
  words.map((word) => word.toUpperCase()).join("!! ") + "!!";
console.log(shout("maldita", "sea"));

// Lista de la compra
const shoppingCart = [
  { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
  {
    category: "Carne y Pescado",
    product: "Pechuga pollo",
    price: 3.75,
    units: 2,
  },
  { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
  { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
  { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
  { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
  {
    category: "Carne y Pescado",
    product: "Secreto ibérico",
    price: 5.75,
    units: 2,
  },
];

//A
const listWithVAT = shoppingCart.map((product) => ({
  ...product,
  VAT: Number((product.price * 0.21).toFixed(2)),
}));

// B
//sort mutates the array, for that reason I'm copy shoppingCart
const sortedListByUnits = [...shoppingCart].sort((a, b) => b.units - a.units);

//C
const totalPriceDrogueria = listWithVAT
  .filter((product) => product.category === "Droguería")
  .reduce((total, { price, VAT, units }) => {
    return total + (price + VAT) * units;
  }, 0);

//D
const sortByCategory = (products) => {
  return [...products].sort((prodA, prodB) =>
    prodA.category.localeCompare(prodB.category)
  );
};

const showProductConsole = ({ product, price, category }) =>
  console.log(
    `producto: ${product} -> precio Total: ${price} -> category: ${category}`
  );

function calculateFinalPricePerProduct(shoppingCart) {
  return shoppingCart.map((item) => ({
    product: item.product,
    price: ((item.price + item.VAT) * item.units).toFixed(2),
    category: item.category,
  }));
}

const listWithTotalPrice = calculateFinalPricePerProduct(
  sortByCategory([...listWithVAT])
);

function showFullCartByConsole(shoppingCart) {
  const sortedCartByCategory = sortByCategory(shoppingCart);
  const cartWithTotalPrice =
    calculateFinalPricePerProduct(sortedCartByCategory);
  cartWithTotalPrice.forEach((item) => showProductConsole(item));
}

showFullCartByConsole(listWithVAT);
