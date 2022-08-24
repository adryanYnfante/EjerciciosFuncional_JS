const { randomIntFromInterval } = require("./data/data");
const data = randomIntFromInterval();

const ordenImperativo = (numeros) => {
  var n, i, k, aux;
  n = numeros.length;
  // Algoritmo de burbuja
  for (k = 1; k < n; k++) {
    for (i = 0; i < n - k; i++) {
      if (numeros[i] > numeros[i + 1]) {
        aux = numeros[i];
        numeros[i] = numeros[i + 1];
        numeros[i + 1] = aux;
      }
    }
  }

  return numeros;
};

const ordenarDeclarativo = (numeros) => {
    
  return numeros.sort((a, b) => a - b);
};

console.log(ordenImperativo([...data]));
console.log(ordenarDeclarativo([...data]));


