// Um metodo que permite procurar em um array e o retorno é o Index do valor procurado


const num = [1, 2, 35, 4, 5, 46, 7, 8];
// procura o valor 46, ele retorna a posição que esse valor está no array
console.log(num.findIndex((item) => item === 46));

// quando passado um valor inexistente no array, ele retorna -1
console.log(num.findIndex((item) => item === 80));


// funciona com array de objetos

const obj = [
  {
    name: "joao",
    id: 1,
  },
  {
    name: "carlos",
    id: 2,
  },
  {
    name: "ana",
    id: 3,
  },
];
// procura o valor "ana", ele retorna a posição que esse valor está no array
console.log(obj.findIndex((item) => item.id === "ana"));

// procura o valor "aninha", ele retorna a posição que esse valor está no array
console.log(obj.findIndex((item) => item.name === "aninha"));

const index = obj.findIndex((item) => item.id === 1);

console.log(index);

console.log(obj[index])

obj[index].name = "pedro";

console.log(obj[index])



