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

const product3 = {
    name: "Cell Phone",
    price: 400
}

let result;

result = [...carrito, product]
result = [...result, product2]
result = [product3, ...result]


console.table(result);