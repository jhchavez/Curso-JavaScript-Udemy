//Inicializar variables con un valor
var producto = "Monitor de 24 pulgadas";
console.log(producto);

//Las variables se pueden reasignar
pruducto = "Monitor de 19 pulgadas";
console.log(producto);

//JavaScript es un lenguaje dinamico, no se especifica tipo de datos
producto = 20;
console.log(producto);

//Se pueden inicializar sin valor e asignarlo despues
var disponible;
disponible = true;

disponible = false;

//Inicializar multiples variables
// var categoria = 'Computadoras';
// var marca = "Marca Famosa";
// var calificacion = 5;

var categoria = 'Computadoras',
    marca = "Marca Famosa",
    calificacion = 5;

// Reglas de las variables, las variables no pueden iniciar con numeros ni lleva espacios

// var 99dias; No se puede iniciar variables con numeros

var dias99; //si funciona 

// var 01_; No Funciona

var _01; //Si funciona
var _usuario;

var nombreProducto; //forma camel keys esta es la forma mas utilizada en JS

var nombre_producto_categoria_precio; //forma snake no es comun en JS

var Producto; //pascal key


