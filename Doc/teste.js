var s = "Hello World";
let resultadoFinal = 0;
let resultadoMultiplicado = 0;
const string = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const teste = () => {
  for (let numero of string) {
    resultadoFinal += numero;
  }
  return resultadoFinal;
}

const multiplicar = () => {
  for (let numeros of string) {
    resultadoMultiplicado *= numeros;
  }
}


console.log(teste());

console.log("-------------------------------------");

console.log(multiplicar());
