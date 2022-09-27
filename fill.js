// O método fill() preenche todos os valores do array a partir do 
// índice inicial a um índice final com um valor estático.
// o metodo fill irá mudar o arr em si

const arr = [1, 2, 3];

// preenche todo a array com o valor passado
console.log([1,2,3].fill('lol'));   

// preenche a partir da posição 1 com o valor passado       
console.log([1,2,3].fill('lol', 1));  

// preenche a partir da posição 1 até a posição 2 com o valor passado 
console.log([1,2,3].fill('lol', 1, 2));      


// Se o ínicio for negativo, ele será tratado como tamanho + ínicio onde tamanho é o tamanho total do array.
// tamanho = 4
// 4 + (-3) = 1
// Se o fim for negativo, ele será tratado como tamanho + fim.
// 4 + (-2) = 2
console.log([1,2,3,4].fill('lol', -3, -2));   


// Com o NaN ele nãocalula nada e o arr fica sem modificação
console.log([1,2,3].fill(4, NaN, NaN));  

// Criando um novo array e já populando ele
console.log(Array(3).fill(4));              