function sumar(a, b){
    return a + b;
}

const resultado = sumar( 2, 3);

console.log(resultado);


//Ejemplo avanzado

let total = 0;

function agregarCarrito(price){
    return total += price;
}
function calcularImpuesto(total){
    return total * 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);

const totalPagar = calcularImpuesto(total);

console.log(total);

console.log(`El total a pagar es de ${totalPagar}`);
