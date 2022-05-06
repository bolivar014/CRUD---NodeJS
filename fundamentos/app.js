// Inicializamos variables
let cont = 0;
// Importamos modulo Requerido
const {frutas, dinero} = require('./frutas');

// iteramos registros dentro del array frutas
frutas.forEach(item => {
    // Contador de iteracciones en el ciclo
    cont += 1;

    // Imprimimos en pantalla
    console.log('el valor en posición : ' + cont + ', es: ' + item);

    // Imprimimos
    console.log('cantidad de registros repetidos...');
    
    // Imprimimos valores repetidos
    console.count(item);

    // Imprimimos constante dinero
    console.log(dinero);
})