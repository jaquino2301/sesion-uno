let nombrePlanetas = Array ('Tierra', 'Marte','Jupiter');
let distancia = [6,3,'67'];
const tamaño = [];
console.log(nombrePlanetas);
console.log(distancia);
console.log(tamaño);

// Recorrer un array haciendo uso de un ciclo while
//  let i = 0;
//  while(i <= nombrePlanetas.length-1){
//     console.log(i);
//     console.log(nombrePlanetas[i]);
//  }

// Recorrer un array haciendo uso de un ciclo for
// for(let index = 0; index < nombrePlanetas.length; index++){
//     console.log(nombrePlanetas[index]);
// }

// Recorrer el array haciendo uso de for in

for ( const key in nombrePlanetas){
    console.log(nombrePlanetas[key]);
}


// Recorrer el array haciendo uso de for of
for (const planeta of nombrePlanetas){
    console.log(planeta);
}
















