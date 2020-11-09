const car = [
    { name: 'jacket', price: 500 },
    { name: 'dress', price: 700 },
    { name: 'skirt', price: 800 },
    { name: 'shirt', price: 900 },
    { name: 'boots', price: 400 },
    { name: 'pen', price: 200 },
]

const newArray = car.map( function(product) {
    return `${product.name} - price: ${product.price}` ;
} )

const newArray2 = car.forEach( function(product) {
    return `${product.name} - price: ${product.price}` ;
} )

console.log(newArray);
console.log(newArray2);