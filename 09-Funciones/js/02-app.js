// Function Expression (Expresion de Funcion) este no funciona,
// ya que toma en la etapa del yoistin la funcion como una variable.

sumar();
function sumar(){
    console.log( 2 + 2);
}


//Function Declaration (declaracion de funcion) si funciona ya que registra,
// la funcion en primera instancia.

sumar2();
const sumar2 = function() {
    console.log( 3 + 3);
}