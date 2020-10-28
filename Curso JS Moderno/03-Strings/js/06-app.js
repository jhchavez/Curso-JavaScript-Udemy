const producto = 'Monitor de 20 pulgadas';

//.repeat = te va a permitir repetir una cadena de texto

const texto = ' en promocion'.repeat(2);
console.log(texto);
console.log(`${producto} ${texto} !!!`);

//.split = te va permitir dividir un string

const actividad = "Estoy aprendiendo JS moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, Caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", "));

const tweet = "Apremdiendo JavaScript #JSModernoConJuan";
console.log(tweet.split('#'));