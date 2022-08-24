
function randomIntFromInterval(min=1, max=1000) {
    let numeros = []
    for (let i = 0; i < 150; i++) {
        numeros[i] = Math.floor(Math.random() * (1000 - 0 + 1) + 0);
        
    }
   return numeros
  
}

const productos = [
    {
      id: "apple-watch-s6",
      nombre: "Apple Watch Series 6",
      precio: 429,
    },
    {
      id: "iphone-se",
      nombre: "iPhone SE",
      precio: 489,
    },
    {
      id: "macbook-air",
      nombre: "Macbook Air",
      precio: 362,
    },
  ];


module.exports={
    randomIntFromInterval,productos
}