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

const product4 = {
    name: "tablet",
    price: 600
}

//.push agrega al final del array

carrito.push(product);
carrito.push(product2);
carrito.push(product4);


const product3 = {
    name: "Cell Phone",
    price: 400
}
carrito.unshift(product3);//para agregar el producto de primero en la tabla


// //.pop Eliminar ultimo elemento del array
// carrito.pop();
// console.table(carrito);


// //.shift eliminar del inicio del arreglo
// carrito.shift();
// console.table(carrito);

carrito.splice(1, 1);//.splice elimina los valores que se pidan.
console.table(carrito);