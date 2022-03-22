var s = "Hello World";
let resultadoFinal = 0;
const teste = () => {
  const string = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let numero of string) {
    resultadoFinal += numero;
  }
  return resultadoFinal;
}

console.log('a');
console.log(teste());
console.log(s);
