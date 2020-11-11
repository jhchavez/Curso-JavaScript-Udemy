iniciarApp();

function iniciarApp() {
    console.log('Iniciando app..');

    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda funcion');
    usuarioAutenticado('Jhon');
}

function usuarioAutenticado(usuario){
    console.log('Autenticando usuario... Espere...');
    console.log(`Usuario validado con exito: ${usuario}`);
}