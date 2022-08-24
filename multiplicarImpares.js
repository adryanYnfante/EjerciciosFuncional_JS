const { randomIntFromInterval } = require("./data/data");
const data = randomIntFromInterval();
const multiplicando = 10;

const multiplicarImparesImperativo = (numeros) => {
  const imparesMultiplicados = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 1) {
      imparesMultiplicados.push(numeros[i] * multiplicando);
    }
  }
  return imparesMultiplicados
};

const multiplicarImparesDeclarativo = (numeros) => {
  return numeros.filter((n) => n % 2 == 1).flatMap((n) => n * multiplicando);
};


console.log(multiplicarImparesImperativo(data));
console.log(multiplicarImparesDeclarativo(data));