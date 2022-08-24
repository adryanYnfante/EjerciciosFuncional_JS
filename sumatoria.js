const { randomIntFromInterval } = require("./data/data");
const data = randomIntFromInterval();

const sumaImperativa = (numeros) => {
  let acumulador = 0;
  for (let i = 0; i < numeros.length; i++) {
    acumulador = acumulador + numeros[i];
  }
  return acumulador;
};

const sumaDeclarativa = (numeros) => {
  return numeros.reduce((previo, actual) => previo + actual, 0);
};

const sumatoriaDeclarativaForEach = (numeros) => {
  let contador = 0;
  numeros.forEach((n) => (contador +=  n));
  return contador;
};

console.log(sumaImperativa(data));
console.log(sumaDeclarativa(data));
console.log(sumatoriaDeclarativaForEach(data));
