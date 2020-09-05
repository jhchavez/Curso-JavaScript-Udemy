const producto = '                   Monitor de 20 pulgadas                ';

console.log(producto);
console.log(producto.length);


//Eliminar espacios del inicio
console.log( producto.trimStart() );

//ELiminar espacios al final
console.log( producto.trimEnd() );

console.log( producto.trimStart().trimEnd() ); //ELimina en ambas direcciones


console.log( producto.trim() ); //metodo antiguo