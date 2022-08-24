const { productos } = require("./data/data");

const agregarTipoMonedaImperativo = (productos) => {
  const temPrdocuctos = [];

  for (let i = 0; i < productos.length; i++) {
    temPrdocuctos.push({ ...productos[i], tipoMoneda: "US" });
  }
  return temPrdocuctos
};

const agregarTipoMonedaDeclarativo = (productos) => {
  return productos.map((producto) => ({ ...producto, tipoMoneda: "US" }));
};

console.log(agregarTipoMonedaImperativo(productos));
console.log(agregarTipoMonedaDeclarativo(productos));
