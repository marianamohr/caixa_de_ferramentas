// O at retorna o item da posição pedida do array


const fruits = ["banana", "maçã", "pera"];

console.log(fruits.at(0)); // primeira posição do array.
console.log(fruits.at(-1)); // ultima posição do array.


console.log(fruits.at(100)); // Fora do limite

// Funciona com Strings tambem

const str = "Introdução ao desenvolvimento Web com nodeJS";

console.log(str.at(0)); // I
console.log(str.at(11)); // a
console.log(str.at(-1)); // S
