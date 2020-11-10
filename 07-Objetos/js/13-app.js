const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300, 
    disponible: true,
}

//.keys retorna el  nombre de los valores: nombre,precio,disponible
console.log(Object.keys(producto)); 

//.values retorna los valores: Monitor 20 pulgadas, 300, true.
console.log(Object.values(producto)); 

//.entries retorna todo en parejas.
console.log(Object.entries(producto)); 

