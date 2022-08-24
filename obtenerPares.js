const { randomIntFromInterval } = require("./data/data");
const data = randomIntFromInterval();

const obtenerParesImperativo = (numeros) => {
  let pares = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
      pares.push(numeros[i]);
    }
  }
  return pares;
};

const obtenerParesDeclarativo = (numeros) => {
  return numeros.filter((n) => n % 2 == 0);
};


console.log(obtenerParesDeclarativo(data));
console.log(obtenerParesImperativo(data));