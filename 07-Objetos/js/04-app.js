const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300, 
    disponible: true
}

// const nombre = producto.nombre;
// console.log(nombre);

//extraer datos manera actual Destructuring
const { nombre, precio, disponible} = producto;
// const { precio } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);