const carrito = [];

//definir un producto

const product = {
    name: "TV",
    price: 400
}

const product2 = {
    name: "Pen",
    price: 100
}

//.push agrega al final del array

carrito.push(product);
carrito.push(product2);


const product3 = {
    name: "Cell Phone",
    price: 400
}
carrito.unshift(product3);//para agregar el producto de primero en la tabla



console.table(carrito);