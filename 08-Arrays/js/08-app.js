
//Destructuring en array

const numbers = [10, 20, 30, 40, 50];

// const [ first, , third] = numbers;
const [ first, ...third] = numbers;

console.log(third);
console.log(first);


