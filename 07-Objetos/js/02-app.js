const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300, 
    disponible: true,
}
//valor completo de las variables dentro del objeto
console.log(producto);

//variable por variable del objeto, es la forma mas comun en JS
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

//es otra forma de acceder a los valores del objeto, pero no es comun en JS
console.log(producto['nombre']);