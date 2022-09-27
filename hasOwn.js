// O método hasOwn() retorna true se o objeto específicado tem a propriedade indicada como sua propriedade own. 


const livros = {
    paginas: 123,
    autor: 'mari'
}


console.log(livros);

console.log(Object.hasOwn(livros, 'paginas')); // true
console.log(Object.hasOwn(livros, 'ano')); // false
console.log(Object.hasOwn(livros, 'autor')); // true


