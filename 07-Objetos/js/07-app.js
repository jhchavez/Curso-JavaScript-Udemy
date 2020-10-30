const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300, 
    disponible: true,
}

producto.disponible = false;
delete producto.precio;

console.log(producto);

//No se puede reasignar una variable constante
// const nombreProducto = 'Monitor';
// nombreProducto = 'Tablet';
