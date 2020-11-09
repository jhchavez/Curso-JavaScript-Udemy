const car = [
    { name: 'jacket', price: 500 },
    { name: 'dress', price: 700 },
    { name: 'skirt', price: 800 },
    { name: 'shirt', price: 900 },
    { name: 'boots', price: 400 },
    { name: 'pen', price: 200 },
]




// for(let i = 0; i < car.length; i++ ) {
//     console.log( car[i].name );
// }

for(let i = 0; i < car.length; i++ ) {
    console.log( `${car[i].name} - price: ${car[i].price}` );
}

car.forEach( function(product) {
    console.log( `${product.name} - price: ${product.price}` );
} )