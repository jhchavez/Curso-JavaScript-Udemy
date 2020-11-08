const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300, 
    disponible: true,
}

const medidas = {
    peso: '1kg',
    medidas: '1m'
}

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas); //assign lo usamos para unir dos objetos
console.log(resultado);

//Spread Operator o Rest Operator
const resultado2 = {...producto, ...medidas} //es la forma mas comun de unir dos objetos

console.log(resultado);
console.log(resultado2);
