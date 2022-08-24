const { productos } = require("./data/data");


const transformarProductosPorIdDeclarativo = (data) => {
  return data.reduce(
    (valorAnterior, valorActual) =>
      // Object.assign(valorAnterior, { [valorActual.id]: valorActual }),
      (valorAnterior={...valorAnterior,[valorActual.id]: valorActual} ),
    {}
  );
};

const transformarProductosPorIdImperativo = (data) => {
  let object = {};

  for (let i = 0; i < data.length; i++) {
    
    object={
      ...object,
      [data[i].id] : {
        id: data[i].id,
        nombre: data[i].nombre,
        precio: data[i].precio,
      }
    }
    
  }

  return object
};


console.log(transformarProductosPorIdDeclarativo(productos));
console.log(transformarProductosPorIdImperativo(productos));
