// const nombre = "Hola";
// const precio = 20;

//this hace referencia al valor dentro del objeto que fue nombrada
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300, 
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio} `);
    }
}

const producto2 = {
    nombre: "Laptop",
    precio: 9000, 
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio} `);
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();
