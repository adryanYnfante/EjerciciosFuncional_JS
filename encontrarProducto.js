const { productos } = require("./data/data");

const encontrarProductByIdImperativo = (productos, id) => {
  let producto = {};
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].id == id) {
       producto = productos[i];
    }
  }

  return producto;
};

const encontrarProductByIdDeclarativo = (productos, id) => {
    return productos.find(producto=>producto.id ===id)
}

console.log(encontrarProductByIdImperativo(productos, "apple-watch-s6"));
console.log(encontrarProductByIdDeclarativo(productos, "apple-watch-s6"));
