
const edades = [12, 15, 21, 19, 32];
const doblarEdades = edades.map(edad => edad * 2);
doblarEdades; 



let numeros = [5, 10, 20];
let doblarNumeros = numeros.reduce((a, b) => a + b, 10);
console.log(doblarNumeros); 


// Ejemplo no funcional
const edad = [12,32,32,53]
for (let i=0; i < edad.length; i++) {
   if(i >30) edadFinal += edad[i];
}


// Ejemplo funcional
const edad1 = [12,32,32,53]
const edadTotal = edad.reduce( function(primerEdad, segundaEdad){
    return primerEdad + segundaEdad;
})


const numbers = [13,19,23,28,31,35,41,48,56,60];




let userNames = ['harry22', 'albert12', 'bonsaii24', 'deeksha25', undefined, null];
let filtered = userNames.filter((name) => typeof name === 'string')
console.log(filtered)


let userSalaries = [
    { user: "harry22", salary: 2000 },
    { user: null, salary: 3300 },
    { user: "bonsaii24", salary: NaN },
    { user: "deeksha25", salary: 3500 },
    { user: "", salary: 4000 },
  ];
  let filtered = userSalaries.filter((item) => item.salary > 3000);
  console.log(filtered)



const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);