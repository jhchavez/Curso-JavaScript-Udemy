const learning = function(tecnologia, tecnologia2){
    console.log(`learning ${tecnologia} and ${tecnologia2}`);
}
learning('JS', 'node.js');



//arrow function, si se pasa un parametro el parentesis es opcional, de lo contrario es obligatorio.
const learning2 = (tecnologia, tecnologia2) => `learning ${tecnologia} and ${tecnologia2}`;
console.log(learning2('JS', 'node.js'));