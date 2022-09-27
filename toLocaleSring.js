// Converte um array para string

const cidade = 'Joinville - SC ';
const data = new Date();
const meuArray = [cidade, data, 'foo'];

const resultado = meuArray.toLocaleString();

console.log(resultado);
// saída 'Joinville - SC ,27/09/2022 15:19:14,foo'
// se estiver no Brasil com o fuso horario GMT-0300 (BRT) de Brasília.
