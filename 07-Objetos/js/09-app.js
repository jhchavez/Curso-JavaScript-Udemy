"use strict"; //usar modo estricto

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300, 
    disponible: true,
}

Object.seal( producto ); //sellar el objeto, no se puede agregar ni eliminar, but si se pueden modificar

producto.disponible = false;
// producto.imagen = "imagen.jpg";

// delete producto.precio;

console.log(producto);

console.log(Object.isSealed(producto));