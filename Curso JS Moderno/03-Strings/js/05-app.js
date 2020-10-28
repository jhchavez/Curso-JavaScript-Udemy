const producto = 'Monitor de 20 pulgadas';

//Replace CAMBIAR UNA PALABRA POR OTRA
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

//.slice cortar una parte de una cadena de texto
console.log(producto.slice(0, 13) );
console.log(producto.slice(8) );
console.log(producto.slice(2, 1) ); //si el primer numero es mayor al segundo no cortara nada


//alternativa a slice, si le pasas un numero mayor en el primer valor substring lo entiende y hace la funcion de cortar
console.log(producto.substring(0, 10) );
console.log(producto.substring(2, 1) );


const usuario = "Jhon";
console.log(usuario.substring(0, 1) );
console.log(usuario.charAt(0) ); //corta de forma mas rapida .charAt